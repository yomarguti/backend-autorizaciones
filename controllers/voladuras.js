const Voladura = require('../models/voladura');
const Proceso = require('../models/proceso');
const TipoVoladura = require('../models/tiposVoladura');
const TiposVoladura = require('../models/tiposVoladura');
const Op = require('sequelize').Op;

const getVoladuras = async (req, res) => {
  try {
    const procesos = [
      { procesoId: 1, nombre: 'Caracterizar Voladura', vols: [] },
      { procesoId: 2, nombre: 'Crear Estructuras', vols: [] },
      { procesoId: 6, nombre: 'Cargar Voladura a Modular', vols: [] },
    ];
    const ProcessIds = [1, 6, 2];

    const voladuras = await Voladura.findAll({
      include: [
        {
          model: Proceso,
          where: {
            procesoId: { [Op.in]: ProcessIds },
          },
        },
        {
          model: TipoVoladura,
        },
      ],
    });

    for (const p of procesos) {
      for (const v of voladuras) {
        if (v.procesos[0].procesoId === p.procesoId) {
          const {
            voladuraId,
            nombre,
            comentario,
            tiposVoladura: { nombre: tipoVoladura },
          } = v;
          p.vols.push({
            voladuraId,
            nombre,
            comentario,
            tipoVoladura,
          });
        }
      }
    }

    res.status(200).send({ blastProcesses: procesos });
  } catch (error) {
    console.log('error:', error);
    res.status(400).send({ error: 'Ocurrió un error al consultar la información' });
  }
};

const getVoladura = async (req, res) => {
  try {
    const { id } = req.params;
    const voladura = await Voladura.findOne({
      where: { voladuraId: id },
      include: { model: TipoVoladura },
    });

    if (!voladura) {
      return res
        .status(400)
        .send({ error: 'No se encontro informacion de la voladura consultada' });
    }

    res.status(200).send({ blasting: voladura });
  } catch (error) {
    console.log('error:', error);
    res.status(400).send({ error: 'Ocurrió un error al consultar la información' });
  }
};

const getVoladurasByProceso = async (req, res) => {
  try {
    const { procesoId } = req.params;
    const proceso = await Proceso.findOne({ where: { procesoId } });
    const voladuras = await proceso.getVoladuras({ include: [{ model: TipoVoladura }] });

    if (!voladuras) {
      return res
        .status(400)
        .send({ error: 'No se encontro informacion de la voladuras consultada' });
    }
    res.status(200).send({ processName: proceso.nombre, blastings: voladuras });
  } catch (error) {
    console.log('error:', error);
    res.status(400).send({ error: 'Ocurrió un error al consultar la información' });
  }
};

const createNewAuthorization = async (req, res) => {
  try {
    const { blastingName, seam, shovel, blastType } = req.body;
    console.log('blastType:', blastType);
    const tipoVoladura = await TiposVoladura.findOne({ where: { nombre: blastType }, raw: true });
    const proceso = await Proceso.findOne({ where: { nombre: 'Caracterizar Voladura' } });

    const voladura = await Voladura.create({
      nombre: blastingName,
      anio: new Date().getFullYear(),
      pala: shovel,
      manto: seam,
      tipoVoladuraId: tipoVoladura.tipoVoladuraId,
    });

    await voladura.addProceso(proceso, { through: { activo: true, fecha: new Date() } });

    res.status(200).send({ resMessage: 'Proceso Iniciado Correctamente' });
  } catch (error) {
    console.log('error:', error);
    res.status(400).send({ error: 'Ocurrió un error al consultar la información' });
  }
};

module.exports = {
  getVoladuras,
  getVoladura,
  getVoladurasByProceso,
  createNewAuthorization,
};
