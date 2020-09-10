const Voladura = require('../models/voladura');
const Proceso = require('../models/proceso');
const TipoVoladura = require('../models/tiposVoladura');
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
    const voladuras = await proceso.getVoladuras({ raw: true });

    if (!voladuras) {
      return res
        .status(400)
        .send({ error: 'No se encontro informacion de la voladuras consultada' });
    }
    res.status(200).send({ blastings: voladuras });
  } catch (error) {
    res.status(400).send({ error: 'Ocurrió un error al consultar la información' });
  }
};

module.exports = {
  getVoladuras,
  getVoladura,
  getVoladurasByProceso,
};
