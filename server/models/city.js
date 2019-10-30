module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    city: DataTypes.STRING,
    isd_code: DataTypes.INTEGER,
    flag_icon: DataTypes.STRING,
    created_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.INTEGER
  });
  City.associate = models => {
    City.belongsTo(models.State, {
      foreignKey: 'state_id',
      onDelete: 'CASCADE'
    });
  };
  return City;
};
