module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      city_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      city: DataTypes.STRING,
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
      tableName: 'Cities',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  );
  City.associate = models => {
    City.belongsTo(models.State, {
      foreignKey: 'state_id',
      onDelete: 'CASCADE'
    });
  };
  return City;
};
