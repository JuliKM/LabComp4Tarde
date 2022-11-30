const Sequelize = require('sequelize');

const Instumentos = require('./modelos/instrumentos');

const sequelize = new Sequelize('lab4tp5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const Instrumento = Instumentos(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Tabla sincronizada');
})

module.exports = {
    Instrumento
}