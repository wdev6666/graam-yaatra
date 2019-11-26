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
        type: Sequelize.STRING,
        allowNull: false
      },
      tour_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tours',
          key: 'tour_id',
          as: 'tour_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('Tourists')
};
