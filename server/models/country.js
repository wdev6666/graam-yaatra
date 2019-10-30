module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    country_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    country: DataTypes.STRING,
    isd_code: DataTypes.INTEGER,
    flag_icon: DataTypes.STRING,
    created_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.INTEGER
  });
  return Country;
};
