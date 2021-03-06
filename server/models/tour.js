module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define(
    "Tour",
    {
      tour_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      invoice: DataTypes.INTEGER,
      members: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
      },
      deletedAt: {
        type: DataTypes.DATEONLY,
        onDelete: DataTypes.NOW
      }
    },
    {
      tableName: "Tours",
      paranoid: true,
      timestamps: true
    }
  );
  Tour.associate = models => {
    Tour.belongsToMany(models.Tourist, {
      through: "TourOrders",
      as: "tourists",
      foreignKey: "tour_id",
      otherKey: "tourist_id"
    });
  };
  return Tour;
};
