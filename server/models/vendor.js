module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
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
    created_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.INTEGER
  });
  Vendor.associate = function(models) {
    Vendor.belongsTo(models.City, {
      foreignKey: 'city_id',
      onDelete: 'CASCADE'
    });
  };
  return Vendor;
};
