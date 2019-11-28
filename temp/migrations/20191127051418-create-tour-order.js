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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('TourOrders')
};
