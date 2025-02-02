'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  notifications.init({
    user_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    seen: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'notifications',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true
  });
  return notifications;
};
