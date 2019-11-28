module.exports = (sequelize, DataTypes) => {
  const Coupon = sequelize.define(
    "Coupon",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tourist_id: DataTypes.INTEGER,
      coupon: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      date: {
        type: DataTypes.DATEONLY
      },
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
      tableName: "Coupons",
      paranoid: true,
      timestamps: true
    }
  );
  Coupon.associate = function(models) {
    Coupon.belongsTo(models.Tourist, {
      foreignKey: "tourist_id"
    });
  };
  return Coupon;
};
