const { Sequelize } = require('sequelize');
const config = require('../src/config/config');

const sequelize = new Sequelize(config.DATABASE_URL, {
  dialect: 'mysql',
  logging: false, // Set to console.log if you want to see SQL queries
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./User')(sequelize);
db.Post = require('./Post')(sequelize);
db.Profile = require('./Profile')(sequelize);
db.Company = require('./Company')(sequelize);
db.Buyer = require('./Buyer')(sequelize);
db.FabricsType = require('./FabricsType')(sequelize);
db.Order = require('./Order')(sequelize);
db.OrderDetails = require('./OrderDetails')(sequelize);
db.YarnInformation = require('./YarnInformation')(sequelize);
db.YarnInformationWithDetails = require('./YarnInformationWithDetails')(sequelize);
db.DeliveryDetails = require('./DeliveryDetails')(sequelize);
db.BillInformation = require('./BillInformation')(sequelize);
db.ProformaInvoice = require('./ProformaInvoice')(sequelize);
db.DeliveryMen = require('./DeliveryMen')(sequelize);
db.Month = require('./Month')(sequelize);
db.Notification = require('./Notification')(sequelize);
db.UserNotification = require('./UserNotification')(sequelize);
db.PasswordOTP = require('./PasswordOTP')(sequelize);

// Define Associations

// User <-> Post
db.User.hasMany(db.Post, { foreignKey: 'authorId', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.Post.belongsTo(db.User, { foreignKey: 'authorId' });

// User <-> Profile
db.User.hasOne(db.Profile, { foreignKey: 'userId', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.Profile.belongsTo(db.User, { foreignKey: 'userId' });

// User <-> Order
db.User.hasMany(db.Order, { foreignKey: 'userId', as: 'orders', onDelete: 'NO ACTION' });
db.Order.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });

// User <-> UserNotification <-> Notification
db.User.hasMany(db.UserNotification, { foreignKey: 'userId', as: 'userNotifications' });
db.UserNotification.belongsTo(db.User, { foreignKey: 'userId', as: 'user' });
db.Notification.hasMany(db.UserNotification, { foreignKey: 'notificationId', as: 'userNotifications' });
db.UserNotification.belongsTo(db.Notification, { foreignKey: 'notificationId', as: 'notification' });

// Company <-> Buyer
db.Company.hasMany(db.Buyer, { foreignKey: 'companyId', as: 'buyers', onDelete: 'CASCADE', onUpdate: 'NO ACTION' });
db.Buyer.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company' });

// Company <-> yarnInformation
db.Company.hasMany(db.YarnInformation, { foreignKey: 'companyId', as: 'yarnInformations', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
db.YarnInformation.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company' });

// Company <-> Order
db.Company.hasMany(db.Order, { foreignKey: 'companyId', as: 'orders', onDelete: 'CASCADE' });
db.Order.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company' });

// Company <-> ProformaInvoice
db.Company.hasMany(db.ProformaInvoice, { foreignKey: 'companyId', as: 'proformaInvoices', onDelete: 'CASCADE' });
db.ProformaInvoice.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company' });

// Company <-> BillInformation
db.Company.hasMany(db.BillInformation, { foreignKey: 'companyId', as: 'billInformations', onDelete: 'CASCADE' });
db.BillInformation.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company' });

// Buyer <-> Order
db.Buyer.hasMany(db.Order, { foreignKey: 'buyerId', as: 'orders', onDelete: 'CASCADE' });
db.Order.belongsTo(db.Buyer, { foreignKey: 'buyerId', as: 'buyer' });

// Buyer <-> ProformaInvoice
db.Buyer.hasMany(db.ProformaInvoice, { foreignKey: 'buyerId', as: 'proformaInvoices', onDelete: 'CASCADE' });
db.ProformaInvoice.belongsTo(db.Buyer, { foreignKey: 'buyerId', as: 'buyer' });

// Buyer <-> BillInformation
db.Buyer.hasMany(db.BillInformation, { foreignKey: 'buyerId', as: 'billInformations', onDelete: 'CASCADE' });
db.BillInformation.belongsTo(db.Buyer, { foreignKey: 'buyerId', as: 'buyer' });

// FabricsType <-> Order
db.FabricsType.hasMany(db.Order, { foreignKey: 'fabricsId', as: 'orders', onDelete: 'CASCADE' });
db.Order.belongsTo(db.FabricsType, { foreignKey: 'fabricsId', as: 'fabricsType' });

// FabricsType <-> ProformaInvoice
db.FabricsType.hasMany(db.ProformaInvoice, { foreignKey: 'fabricsId', as: 'proformaInvoices', onDelete: 'CASCADE' });
db.ProformaInvoice.belongsTo(db.FabricsType, { foreignKey: 'fabricsId', as: 'fabricsType' });

// FabricsType <-> BillInformation
db.FabricsType.hasMany(db.BillInformation, { foreignKey: 'fabricsId', as: 'billInformations', onDelete: 'CASCADE' });
db.BillInformation.belongsTo(db.FabricsType, { foreignKey: 'fabricsId', as: 'fabricsType' });

// Order <-> OrderDetails
db.Order.hasOne(db.OrderDetails, { foreignKey: 'orderId', as: 'details' });
db.OrderDetails.belongsTo(db.Order, { foreignKey: 'orderId', as: 'order' });

// Order <-> yarnInformation
db.Order.hasMany(db.YarnInformation, { foreignKey: 'orderId', as: 'yarnInformations', onDelete: 'CASCADE' });
db.YarnInformation.belongsTo(db.Order, { foreignKey: 'orderId', as: 'order' });

// Order <-> DeliveryDetails
db.Order.hasMany(db.DeliveryDetails, { foreignKey: 'orderId', as: 'deliveryDetails', onDelete: 'CASCADE' });
db.DeliveryDetails.belongsTo(db.Order, { foreignKey: 'orderId', as: 'order' });

// yarnInformation <-> YarnInformationWithDetails
db.YarnInformation.hasMany(db.YarnInformationWithDetails, { foreignKey: 'yarnInfoID', onDelete: 'CASCADE' });
db.YarnInformationWithDetails.belongsTo(db.YarnInformation, { foreignKey: 'yarnInfoID' });

module.exports = db;
