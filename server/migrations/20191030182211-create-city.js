module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Cities', {
      city_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      isd_code: {
        type: Sequelize.INTEGER
      },
      flag_icon: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      updated_at: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      state_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'States',
          key: 'state_id',
          as: 'state_id'
        }
      }
    }),
  down: (queryInterface /*Sequelize*/) => queryInterface.dropTable('Cities')
};
