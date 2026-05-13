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
db.User.hasMany(db.Post, { foreignKey: 'authorId', onDelete: 'CASCADE', onUpdate: 'NO ACTION' });
db.Post.belongsTo(db.User, { foreignKey: 'authorId', onDelete: 'CASCADE' });

// User <-> Profile
db.User.hasOne(db.Profile, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'NO ACTION' });
db.Profile.belongsTo(db.User, { foreignKey: 'userId', onDelete: 'CASCADE' });

// User <-> Order
db.User.hasMany(db.Order, { foreignKey: 'userId', as: 'orders', onDelete: 'SET NULL' });
db.Order.belongsTo(db.User, { foreignKey: 'userId', as: 'user', onDelete: 'SET NULL' });

// User <-> UserNotification <-> Notification
db.User.hasMany(db.UserNotification, { foreignKey: 'userId', as: 'userNotifications', onDelete: 'CASCADE' });
db.UserNotification.belongsTo(db.User, { foreignKey: 'userId', as: 'user', onDelete: 'CASCADE' });
db.Notification.hasMany(db.UserNotification, { foreignKey: 'notificationId', as: 'userNotifications', onDelete: 'CASCADE' });
db.UserNotification.belongsTo(db.Notification, { foreignKey: 'notificationId', as: 'notification', onDelete: 'CASCADE' });

// Company <-> Buyer
db.Company.hasMany(db.Buyer, { foreignKey: 'companyId', as: 'buyers', onDelete: 'CASCADE', onUpdate: 'NO ACTION' });
db.Buyer.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company', onDelete: 'CASCADE' });

// Company <-> yarnInformation
db.Company.hasMany(db.YarnInformation, { foreignKey: 'companyId', as: 'yarnInformations', onDelete: 'CASCADE', onUpdate: 'NO ACTION' });
db.YarnInformation.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company', onDelete: 'CASCADE' });

// Company <-> Order
db.Company.hasMany(db.Order, { foreignKey: 'companyId', as: 'orders', onDelete: 'CASCADE' });
db.Order.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company', onDelete: 'CASCADE' });

// Company <-> ProformaInvoice
db.Company.hasMany(db.ProformaInvoice, { foreignKey: 'companyId', as: 'proformaInvoices', onDelete: 'CASCADE' });
db.ProformaInvoice.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company', onDelete: 'CASCADE' });

// Company <-> BillInformation
db.Company.hasMany(db.BillInformation, { foreignKey: 'companyId', as: 'billInformations', onDelete: 'CASCADE' });
db.BillInformation.belongsTo(db.Company, { foreignKey: 'companyId', as: 'company', onDelete: 'CASCADE' });

// Buyer <-> Order
db.Buyer.hasMany(db.Order, { foreignKey: 'buyerId', as: 'orders', onDelete: 'SET NULL' });
db.Order.belongsTo(db.Buyer, { foreignKey: 'buyerId', as: 'buyer', onDelete: 'SET NULL' });

// Buyer <-> ProformaInvoice
db.Buyer.hasMany(db.ProformaInvoice, { foreignKey: 'buyerId', as: 'proformaInvoices', onDelete: 'SET NULL' });
db.ProformaInvoice.belongsTo(db.Buyer, { foreignKey: 'buyerId', as: 'buyer', onDelete: 'SET NULL' });

// Buyer <-> BillInformation
db.Buyer.hasMany(db.BillInformation, { foreignKey: 'buyerId', as: 'billInformations', onDelete: 'SET NULL' });
db.BillInformation.belongsTo(db.Buyer, { foreignKey: 'buyerId', as: 'buyer', onDelete: 'SET NULL' });

// FabricsType <-> Order
db.FabricsType.hasMany(db.Order, { foreignKey: 'fabricsId', as: 'orders', onDelete: 'SET NULL' });
db.Order.belongsTo(db.FabricsType, { foreignKey: 'fabricsId', as: 'fabricsType', onDelete: 'SET NULL' });

// FabricsType <-> ProformaInvoice
db.FabricsType.hasMany(db.ProformaInvoice, { foreignKey: 'fabricsId', as: 'proformaInvoices', onDelete: 'SET NULL' });
db.ProformaInvoice.belongsTo(db.FabricsType, { foreignKey: 'fabricsId', as: 'fabricsType', onDelete: 'SET NULL' });

// FabricsType <-> BillInformation
db.FabricsType.hasMany(db.BillInformation, { foreignKey: 'fabricsId', as: 'billInformations', onDelete: 'SET NULL' });
db.BillInformation.belongsTo(db.FabricsType, { foreignKey: 'fabricsId', as: 'fabricsType', onDelete: 'SET NULL' });

// Order <-> OrderDetails
db.Order.hasOne(db.OrderDetails, { foreignKey: 'orderId', as: 'details', onDelete: 'CASCADE' });
db.OrderDetails.belongsTo(db.Order, { foreignKey: 'orderId', as: 'order', onDelete: 'CASCADE' });

// Order <-> yarnInformation
db.Order.hasMany(db.YarnInformation, { foreignKey: 'orderId', as: 'yarnInformations', onDelete: 'CASCADE' });
db.YarnInformation.belongsTo(db.Order, { foreignKey: 'orderId', as: 'order', onDelete: 'CASCADE' });

// Order <-> DeliveryDetails
db.Order.hasMany(db.DeliveryDetails, { foreignKey: 'orderId', as: 'deliveryDetails', onDelete: 'CASCADE' });
db.DeliveryDetails.belongsTo(db.Order, { foreignKey: 'orderId', as: 'order', onDelete: 'CASCADE' });

// yarnInformation <-> YarnInformationWithDetails
db.YarnInformation.hasMany(db.YarnInformationWithDetails, { foreignKey: 'yarnInfoID', onDelete: 'CASCADE' });
db.YarnInformationWithDetails.belongsTo(db.YarnInformation, { foreignKey: 'yarnInfoID', onDelete: 'CASCADE' });

module.exports = db;
