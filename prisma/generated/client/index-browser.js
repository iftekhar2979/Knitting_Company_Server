
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
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
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
