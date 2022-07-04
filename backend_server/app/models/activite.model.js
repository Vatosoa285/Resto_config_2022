module.exports = (sequelize, Sequelize) => {
    const Activite = sequelize.define("activite", { //attention ne pas créer une nouvelle table activité ici 
      nomactivite: {
        type: Sequelize.STRING
      },
      infoactivite: {
        type: Sequelize.STRING
      },
      idbenevole: {
        type: Sequelize.BIGINT 
      },
      //timestamps: false
    });
    return Activite;
  };