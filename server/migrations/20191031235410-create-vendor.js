module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Vendors', {
      vendor_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      referal_code: {
        type: Sequelize.STRING
      },
      verification_code: {
        type: Sequelize.STRING
      },
      verified_at: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      },
      referal_vendor_id: {
        type: Sequelize.INTEGER
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
      city_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Cities',
          key: 'city_id',
          as: 'city_id'
        }
      }
    }),
  down: (queryInterface /* Sequelize */) => queryInterface.dropTable('Vendors')
};
