module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Countries', {
      country_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      isd_code: {
        type: Sequelize.INTEGER
      },
      flag_icon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      deletedAt: {
        type: Sequelize.DATEONLY
      }
    }),
  down: (queryInterface /* Sequelize */) =>
    queryInterface.dropTable('Countries')
};
