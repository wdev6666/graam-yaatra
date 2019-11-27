module.exports = (sequelize, DataTypes) => {
  const TourOrder = sequelize.define(
    'TourOrder',
    {
      tour_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      tourist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
      },
      deletedAt: {
        type: DataTypes.DATE,
        onDelete: DataTypes.NOW
      }
    },
    {
      tableName: 'TourOrders',
      paranoid: true,
      timestamps: true
    }
  );
  TourOrder.associate = function(models) {
    // associations can be defined here
  };
  return TourOrder;
};
