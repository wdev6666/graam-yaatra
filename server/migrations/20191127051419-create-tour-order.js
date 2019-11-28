module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('TourOrders', {
      tour_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tourist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
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
  down: queryInterface => queryInterface.dropTable('TourOrders')
};
