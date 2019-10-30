module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    state_id: DataTypes.INTEGER,
    state: DataTypes.STRING,
    created_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    updated_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.INTEGER
  });
  State.associate = models => {
    State.belongsTo(models.Country, {
      foreignKey: 'country_id',
      onDelete: 'CASCADE'
    });
  };
  return State;
};
