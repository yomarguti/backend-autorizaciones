const Voladura = require('../models/voladura');
const Proceso = require('../models/proceso');
const TiposVoladura = require('../models/tiposVoladura');
const Movimiento = require('../models/movimiento');
const Perfil = require('../models/perfil');
const Usuario = require('../models/usuario');

TiposVoladura.hasMany(Voladura, { foreignKey: 'tipoVoladuraId' });
Voladura.belongsTo(TiposVoladura, { foreignKey: 'tipoVoladuraId' });

Voladura.belongsToMany(Proceso, {
  through: Movimiento,
  foreignKey: 'voladuraId',
  timestamps: false
});

Proceso.belongsToMany(Voladura, {
  through: Movimiento,
  foreignKey: 'procesoId',
  timestamps: false
});

Usuario.belongsToMany(Perfil, {
  through: 'UsuarioPerfil',
  foreignKey: 'usuarioId',
  timestamps: false
});
Perfil.belongsToMany(Usuario, {
  through: 'UsuarioPerfil',
  foreignKey: 'perfilId',
  timestamps: false
});
Perfil.belongsToMany(Proceso, {
  through: 'ProcesosPerfil',
  foreignKey: 'perfilId',
  timestamps: false
});
Proceso.belongsToMany(Perfil, {
  through: 'ProcesosPerfil',
  foreignKey: 'procesoId',
  timestamps: false
});
