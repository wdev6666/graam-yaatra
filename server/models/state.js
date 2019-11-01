module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    'State',
    {
      state_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      state: DataTypes.STRING,
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
      tableName: 'States',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  );
  State.associate = models => {
    State.belongsTo(models.Country, {
      foreignKey: 'country_id',
      onDelete: 'CASCADE'
    });
  };
  return State;
};
