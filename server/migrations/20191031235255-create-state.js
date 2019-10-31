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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.INTEGER
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      deleted_by: {
        type: Sequelize.INTEGER
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
