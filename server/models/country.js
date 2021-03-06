module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
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
      tableName: "Countries",
      paranoid: true,
      timestamps: true
    }
  );
  return Country;
};
