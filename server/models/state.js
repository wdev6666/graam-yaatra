module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    state_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    state: DataTypes.STRING,
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    created_by: DataTypes.INTEGER,
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
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
