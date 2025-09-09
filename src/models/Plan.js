'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associate(models) {
      // 
    }
  }

  Plan.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      childName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      targetAmount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'KES'
      },
      currentBalance: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0
      },
      targetDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      frequency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'monthly'
      },
      customInterval: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      autoDebit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Plan',
      tableName: 'Plans',
      paranoid: true,
      timestamps: true
    }
  );

  return Plan;
};
