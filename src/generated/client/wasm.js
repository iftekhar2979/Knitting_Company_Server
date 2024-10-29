
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  content: 'content',
  published: 'published',
  authorId: 'authorId'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  bio: 'bio',
  jobTitle: 'jobTitle',
  description: 'description',
  userId: 'userId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  isAdmin: 'isAdmin',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isBlock: 'isBlock'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  companyName: 'companyName',
  location: 'location',
  email: 'email',
  contact: 'contact',
  shortForm: 'shortForm'
};

exports.Prisma.BuyerScalarFieldEnum = {
  id: 'id',
  buyerName: 'buyerName',
  companyId: 'companyId'
};

exports.Prisma.FabricsTypeScalarFieldEnum = {
  id: 'id',
  fabricsName: 'fabricsName',
  description: 'description'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderNumber: 'orderNumber',
  companyId: 'companyId',
  buyerId: 'buyerId',
  companyName: 'companyName',
  fabricsName: 'fabricsName',
  fabricsId: 'fabricsId',
  buyerName: 'buyerName',
  season: 'season',
  pmNumber: 'pmNumber',
  poNumber: 'poNumber',
  boNumber: 'boNumber',
  invoiceNumber: 'invoiceNumber',
  orderedDate: 'orderedDate',
  targetDate: 'targetDate',
  createdAt: 'createdAt',
  orderQuantity: 'orderQuantity',
  restQuantity: 'restQuantity',
  updatedAt: 'updatedAt',
  status: 'status',
  isProformaInvoiceCreated: 'isProformaInvoiceCreated',
  userId: 'userId',
  proformaInvoiceId: 'proformaInvoiceId'
};

exports.Prisma.OrderDetailsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  style: 'style',
  yarnCount: 'yarnCount',
  yarnBrand: 'yarnBrand',
  yarnLot: 'yarnLot',
  lycraCount: 'lycraCount',
  lycraBrand: 'lycraBrand',
  lycraLot: 'lycraLot',
  polyStarCount: 'polyStarCount',
  polyStarBrand: 'polyStarBrand',
  polyStarLot: 'polyStarLot',
  mc_DIA: 'mc_DIA',
  e_DIA: 'e_DIA',
  f_GSM: 'f_GSM',
  sl: 'sl',
  colour: 'colour'
};

exports.Prisma.YarnInformationScalarFieldEnum = {
  id: 'id',
  companyId: 'companyId',
  bookingQuantity: 'bookingQuantity',
  restQuantity: 'restQuantity',
  yarn: 'yarn',
  orderId: 'orderId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.YarnInformationWithDetailsScalarFieldEnum = {
  id: 'id',
  yarnInfoID: 'yarnInfoID',
  receivedQuantity: 'receivedQuantity',
  createdAt: 'createdAt'
};

exports.Prisma.DeliveryDetailsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  deliveredQuantity: 'deliveredQuantity',
  createdAt: 'createdAt',
  deliveredBy: 'deliveredBy'
};

exports.Prisma.ProformaInvoiceScalarFieldEnum = {
  id: 'id',
  style: 'style',
  fabricsName: 'fabricsName',
  fabricsId: 'fabricsId',
  description: 'description',
  finishDia: 'finishDia',
  unitPrice: 'unitPrice',
  totalQuantity: 'totalQuantity',
  amount: 'amount',
  companyId: 'companyId',
  buyerId: 'buyerId',
  containOrders: 'containOrders',
  piName: 'piName',
  piNumber: 'piNumber',
  totalPIAmount: 'totalPIAmount',
  totalPIQuantity: 'totalPIQuantity',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Post: 'Post',
  Profile: 'Profile',
  User: 'User',
  Company: 'Company',
  Buyer: 'Buyer',
  FabricsType: 'FabricsType',
  Order: 'Order',
  OrderDetails: 'OrderDetails',
  yarnInformation: 'yarnInformation',
  YarnInformationWithDetails: 'YarnInformationWithDetails',
  DeliveryDetails: 'DeliveryDetails',
  ProformaInvoice: 'ProformaInvoice'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
