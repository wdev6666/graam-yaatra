module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    'Country',
    {
      country_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      country: DataTypes.STRING,
      isd_code: DataTypes.INTEGER,
      flag_icon: DataTypes.STRING,
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
      tableName: 'Countries',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  );
  return Country;
};
