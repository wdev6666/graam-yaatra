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
  down: queryInterface => queryInterface.dropTable("Tours")
};
