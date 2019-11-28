module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    'Vendor',
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
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      created_by: DataTypes.INTEGER,
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
      },
      updated_by: DataTypes.INTEGER,
      deleted_at: {
        type: DataTypes.DATE,
        onDelete: DataTypes.NOW
      },
      deleted_by: DataTypes.INTEGER
    },
    {
      tableName: 'Vendors',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  );
  Vendor.associate = models => {
    Vendor.belongsTo(models.City, {
      foreignKey: 'city_id',
      allowNull: false,
      onDelete: 'CASCADE'
    });
  };
  return Vendor;
};
