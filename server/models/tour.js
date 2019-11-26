module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define(
    'Tour',
    {
      tour_id: DataTypes.NUMBER,
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      tableName: 'States',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  );
  return Tour;
};
