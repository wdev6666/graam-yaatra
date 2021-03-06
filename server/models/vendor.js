module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    "Vendor",
    {
      vendor_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      referal_code: DataTypes.STRING,
      verification_code: DataTypes.STRING,
      verified_at: DataTypes.DATE,
      status: DataTypes.INTEGER,
      referal_vendor_id: DataTypes.INTEGER,
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
      tableName: "Vendors",
      paranoid: true,
      timestamps: true
    }
  );
  Vendor.associate = models => {
    Vendor.belongsTo(models.City, {
      foreignKey: "city_id",
      allowNull: false,
      onDelete: "CASCADE"
    });
  };
  return Vendor;
};
