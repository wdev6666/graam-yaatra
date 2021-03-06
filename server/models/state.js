module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "State",
    {
      state_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      state: DataTypes.STRING,
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
      tableName: "States",
      paranoid: true,
      timestamps: true
    }
  );
  State.associate = models => {
    State.belongsTo(models.Country, {
      foreignKey: "country_id",
      onDelete: "CASCADE"
    });
  };
  return State;
};
