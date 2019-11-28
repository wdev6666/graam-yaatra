module.exports = (sequelize, DataTypes) => {
  const Tourist = sequelize.define(
    'Tourist',
    {
      tourist_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      city: DataTypes.STRING,
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
      tableName: 'Tourists',
      paranoid: true,
      timestamps: true
    }
  );
  Tourist.associate = function(models) {
    Tourist.belongsToMany(models.Tour, {
      through: 'TourOrders',
      as: 'tours',
      foreignKey: 'tourist_id',
      otherKey: 'tour_id'
    });
  };
  return Tourist;
};
