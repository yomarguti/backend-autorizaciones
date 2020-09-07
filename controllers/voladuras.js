const Voladura = require('../models/voladura');
const Proceso = require('../models/proceso');
const TipoVoladura = require('../models/tiposVoladura');
const Op = require('sequelize').Op;

const getVoladuras = async (req, res) => {
  try {
    const procesos = [
      { procesoId: 1, nombre: 'Caracterizar Voladura', vols: [] },
      { procesoId: 2, nombre: 'Crear Estructuras', vols: [] },
      { procesoId: 6, nombre: 'Cargar Voladura a Modular', vols: [] }
    ];
    const ProcessIds = [1, 6, 2];

    const voladuras = await Voladura.findAll({
      include: [
        {
          model: Proceso,
          where: {
            procesoId: { [Op.in]: ProcessIds }
          }
        },
        {
          model: TipoVoladura
        }
      ]
    });

    for (const p of procesos) {
      for (const v of voladuras) {
        if (v.procesos[0].procesoId === p.procesoId) {
          p.vols.push(v);
        }
      }
    }

    res.status(200).send({ vols: procesos });
  } catch (error) {
    console.log('error:', error);
    res.status(400).send({ error: 'Ocurrió un error al consultar la información' });
  }
};

module.exports = {
  getVoladuras
};