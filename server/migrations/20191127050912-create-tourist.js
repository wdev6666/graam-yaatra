module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Tourists', {
      tourist_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      city: {
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
  down: queryInterface => queryInterface.dropTable('Tourists')
};
