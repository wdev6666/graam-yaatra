module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tourist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tourists',
          key: 'tourist_id',
          as: 'tourist_id'
        }
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      coupon: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
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
  down: queryInterface => queryInterface.dropTable('Coupons')
};
