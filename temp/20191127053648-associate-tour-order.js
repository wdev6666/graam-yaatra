module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable('TourOrders', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tour_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tourist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },

  down: queryInterface => queryInterface.dropTable('TourOrders')
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
};
