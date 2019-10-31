module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Countries', {
      country_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      isd_code: {
        type: Sequelize.INTEGER
      },
      flag_icon: {
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
      }
    }),
  down: (queryInterface /* Sequelize */) =>
    queryInterface.dropTable('Countries')
};
