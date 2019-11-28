module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Tours", {
      tour_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
      },
      invoice: {
        type: Sequelize.INTEGER
      },
      members: {
        type: Sequelize.INTEGER
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
  down: queryInterface => queryInterface.dropTable("Tours")
};
