"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      dateOfTransaction: DataTypes.DATE,
      dropShipName: DataTypes.STRING,
      customerId: DataTypes.INTEGER,
      shippingAddressId: DataTypes.INTEGER
      // transactionDetailId: DataTypes.INTEGER
    },
    {}
  );
  Transaction.associate = function(models) {

    Transaction.belongsTo(sequelize.models.Customer, {
      foreignKey: "customerId"
    });

    Transaction.belongsTo(sequelize.models.Address, {
      foreignKey: "shippingAddressId"
    });

    Transaction.TransactionDetails = Transaction.hasMany(sequelize.models.TransactionDetails);

    // Transaction.belongsToMany(sequelize.models.ProductInbound, {
    //   as: 'transaction_productInbound',
    //   through: sequelize.models.transactionDetails,
    //   foreignKey: 'productInboundId',
    // });

    // Transaction.belongsToMany(sequelize.models.Product, {
    //   as: 'transaction_product',
    //   through: sequelize.models.ProductInbound,
    //   foreignKey: 'productId',
    // });
  };
  return Transaction;
};
