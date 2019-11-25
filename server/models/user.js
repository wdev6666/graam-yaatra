module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
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
      }
    },
    {
      tableName: "Users",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  );
  return User;
};
