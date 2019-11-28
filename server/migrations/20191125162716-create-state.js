module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('States', {
      state_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      state: {
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
      },
      country_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Countries',
          key: 'country_id',
          as: 'country_id'
        }
      }
    }),
  down: (queryInterface /*Sequelize*/) => queryInterface.dropTable('States')
};
