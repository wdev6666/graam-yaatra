module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
    {
      city_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      city: DataTypes.STRING,
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
      tableName: "Cities",
      paranoid: true,
      timestamps: true
    }
  );
  City.associate = models => {
    City.belongsTo(models.State, {
      foreignKey: "state_id",
      onDelete: "CASCADE"
    });
  };
  return City;
};
