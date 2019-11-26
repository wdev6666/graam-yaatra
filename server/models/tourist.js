module.exports = (sequelize, DataTypes) => {
  const Tourist = sequelize.define(
    'Tourist',
    {
      tourist_id: DataTypes.NUMBER,
      name: DataTypes.STRING,
      tour_id: DataTypes.NUMBER
    },
    {
      tableName: 'States',
      paranoid: true,
      timestamps: true,
      underscored: true
    }
  );
  Tourist.associate = function(models) {
    Tourist.belongsTo(models.Tour, {
      foreignKey: 'tour_id'
    });
  };
  return Tourist;
};
