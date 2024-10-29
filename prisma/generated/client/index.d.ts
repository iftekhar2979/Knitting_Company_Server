
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Buyer
 * 
 */
export type Buyer = $Result.DefaultSelection<Prisma.$BuyerPayload>
/**
 * Model FabricsType
 * 
 */
export type FabricsType = $Result.DefaultSelection<Prisma.$FabricsTypePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model yarnInformation
 * 
 */
export type yarnInformation = $Result.DefaultSelection<Prisma.$yarnInformationPayload>
/**
 * Model YarnInformationWithDetails
 * 
 */
export type YarnInformationWithDetails = $Result.DefaultSelection<Prisma.$YarnInformationWithDetailsPayload>
/**
 * Model DeliveryDetails
 * 
 */
export type DeliveryDetails = $Result.DefaultSelection<Prisma.$DeliveryDetailsPayload>
/**
 * Model ProformaInvoice
 * 
 */
export type ProformaInvoice = $Result.DefaultSelection<Prisma.$ProformaInvoicePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.buyer`: Exposes CRUD operations for the **Buyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buyers
    * const buyers = await prisma.buyer.findMany()
    * ```
    */
  get buyer(): Prisma.BuyerDelegate<ExtArgs>;

  /**
   * `prisma.fabricsType`: Exposes CRUD operations for the **FabricsType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FabricsTypes
    * const fabricsTypes = await prisma.fabricsType.findMany()
    * ```
    */
  get fabricsType(): Prisma.FabricsTypeDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs>;

  /**
   * `prisma.yarnInformation`: Exposes CRUD operations for the **yarnInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YarnInformations
    * const yarnInformations = await prisma.yarnInformation.findMany()
    * ```
    */
  get yarnInformation(): Prisma.yarnInformationDelegate<ExtArgs>;

  /**
   * `prisma.yarnInformationWithDetails`: Exposes CRUD operations for the **YarnInformationWithDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YarnInformationWithDetails
    * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.findMany()
    * ```
    */
  get yarnInformationWithDetails(): Prisma.YarnInformationWithDetailsDelegate<ExtArgs>;

  /**
   * `prisma.deliveryDetails`: Exposes CRUD operations for the **DeliveryDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryDetails
    * const deliveryDetails = await prisma.deliveryDetails.findMany()
    * ```
    */
  get deliveryDetails(): Prisma.DeliveryDetailsDelegate<ExtArgs>;

  /**
   * `prisma.proformaInvoice`: Exposes CRUD operations for the **ProformaInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProformaInvoices
    * const proformaInvoices = await prisma.proformaInvoice.findMany()
    * ```
    */
  get proformaInvoice(): Prisma.ProformaInvoiceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'post' | 'profile' | 'user' | 'company' | 'buyer' | 'fabricsType' | 'order' | 'orderDetails' | 'yarnInformation' | 'yarnInformationWithDetails' | 'deliveryDetails' | 'proformaInvoice'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Buyer: {
        payload: Prisma.$BuyerPayload<ExtArgs>
        fields: Prisma.BuyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuyerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuyerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          findFirst: {
            args: Prisma.BuyerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuyerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          findMany: {
            args: Prisma.BuyerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>[]
          }
          create: {
            args: Prisma.BuyerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          createMany: {
            args: Prisma.BuyerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BuyerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          update: {
            args: Prisma.BuyerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          deleteMany: {
            args: Prisma.BuyerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BuyerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BuyerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          aggregate: {
            args: Prisma.BuyerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBuyer>
          }
          groupBy: {
            args: Prisma.BuyerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BuyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuyerCountArgs<ExtArgs>,
            result: $Utils.Optional<BuyerCountAggregateOutputType> | number
          }
        }
      }
      FabricsType: {
        payload: Prisma.$FabricsTypePayload<ExtArgs>
        fields: Prisma.FabricsTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FabricsTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FabricsTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload>
          }
          findFirst: {
            args: Prisma.FabricsTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FabricsTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload>
          }
          findMany: {
            args: Prisma.FabricsTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload>[]
          }
          create: {
            args: Prisma.FabricsTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload>
          }
          createMany: {
            args: Prisma.FabricsTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FabricsTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload>
          }
          update: {
            args: Prisma.FabricsTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload>
          }
          deleteMany: {
            args: Prisma.FabricsTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FabricsTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FabricsTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FabricsTypePayload>
          }
          aggregate: {
            args: Prisma.FabricsTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFabricsType>
          }
          groupBy: {
            args: Prisma.FabricsTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FabricsTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FabricsTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<FabricsTypeCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      yarnInformation: {
        payload: Prisma.$yarnInformationPayload<ExtArgs>
        fields: Prisma.yarnInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.yarnInformationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.yarnInformationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload>
          }
          findFirst: {
            args: Prisma.yarnInformationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.yarnInformationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload>
          }
          findMany: {
            args: Prisma.yarnInformationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload>[]
          }
          create: {
            args: Prisma.yarnInformationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload>
          }
          createMany: {
            args: Prisma.yarnInformationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.yarnInformationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload>
          }
          update: {
            args: Prisma.yarnInformationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload>
          }
          deleteMany: {
            args: Prisma.yarnInformationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.yarnInformationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.yarnInformationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$yarnInformationPayload>
          }
          aggregate: {
            args: Prisma.YarnInformationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateYarnInformation>
          }
          groupBy: {
            args: Prisma.yarnInformationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<YarnInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.yarnInformationCountArgs<ExtArgs>,
            result: $Utils.Optional<YarnInformationCountAggregateOutputType> | number
          }
        }
      }
      YarnInformationWithDetails: {
        payload: Prisma.$YarnInformationWithDetailsPayload<ExtArgs>
        fields: Prisma.YarnInformationWithDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YarnInformationWithDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YarnInformationWithDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload>
          }
          findFirst: {
            args: Prisma.YarnInformationWithDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YarnInformationWithDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload>
          }
          findMany: {
            args: Prisma.YarnInformationWithDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload>[]
          }
          create: {
            args: Prisma.YarnInformationWithDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload>
          }
          createMany: {
            args: Prisma.YarnInformationWithDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.YarnInformationWithDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload>
          }
          update: {
            args: Prisma.YarnInformationWithDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload>
          }
          deleteMany: {
            args: Prisma.YarnInformationWithDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.YarnInformationWithDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.YarnInformationWithDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YarnInformationWithDetailsPayload>
          }
          aggregate: {
            args: Prisma.YarnInformationWithDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateYarnInformationWithDetails>
          }
          groupBy: {
            args: Prisma.YarnInformationWithDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<YarnInformationWithDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.YarnInformationWithDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<YarnInformationWithDetailsCountAggregateOutputType> | number
          }
        }
      }
      DeliveryDetails: {
        payload: Prisma.$DeliveryDetailsPayload<ExtArgs>
        fields: Prisma.DeliveryDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload>
          }
          findFirst: {
            args: Prisma.DeliveryDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload>
          }
          findMany: {
            args: Prisma.DeliveryDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload>[]
          }
          create: {
            args: Prisma.DeliveryDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload>
          }
          createMany: {
            args: Prisma.DeliveryDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DeliveryDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload>
          }
          update: {
            args: Prisma.DeliveryDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DeliveryDetailsPayload>
          }
          aggregate: {
            args: Prisma.DeliveryDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDeliveryDetails>
          }
          groupBy: {
            args: Prisma.DeliveryDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DeliveryDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<DeliveryDetailsCountAggregateOutputType> | number
          }
        }
      }
      ProformaInvoice: {
        payload: Prisma.$ProformaInvoicePayload<ExtArgs>
        fields: Prisma.ProformaInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProformaInvoiceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProformaInvoiceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload>
          }
          findFirst: {
            args: Prisma.ProformaInvoiceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProformaInvoiceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload>
          }
          findMany: {
            args: Prisma.ProformaInvoiceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload>[]
          }
          create: {
            args: Prisma.ProformaInvoiceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload>
          }
          createMany: {
            args: Prisma.ProformaInvoiceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProformaInvoiceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload>
          }
          update: {
            args: Prisma.ProformaInvoiceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload>
          }
          deleteMany: {
            args: Prisma.ProformaInvoiceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProformaInvoiceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProformaInvoiceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProformaInvoicePayload>
          }
          aggregate: {
            args: Prisma.ProformaInvoiceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProformaInvoice>
          }
          groupBy: {
            args: Prisma.ProformaInvoiceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProformaInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProformaInvoiceCountArgs<ExtArgs>,
            result: $Utils.Optional<ProformaInvoiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Post: number
    user: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Post?: boolean | UserCountOutputTypeCountPostArgs
    user?: boolean | UserCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    yarnDetails: number
    buyers: number
    orderWithCompanyNames: number
    proformaInvoices: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    yarnDetails?: boolean | CompanyCountOutputTypeCountYarnDetailsArgs
    buyers?: boolean | CompanyCountOutputTypeCountBuyersArgs
    orderWithCompanyNames?: boolean | CompanyCountOutputTypeCountOrderWithCompanyNamesArgs
    proformaInvoices?: boolean | CompanyCountOutputTypeCountProformaInvoicesArgs
  }

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountYarnDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: yarnInformationWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountBuyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyerWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOrderWithCompanyNamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProformaInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProformaInvoiceWhereInput
  }



  /**
   * Count Type BuyerCountOutputType
   */

  export type BuyerCountOutputType = {
    orders: number
    proformaInvoices: number
  }

  export type BuyerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | BuyerCountOutputTypeCountOrdersArgs
    proformaInvoices?: boolean | BuyerCountOutputTypeCountProformaInvoicesArgs
  }

  // Custom InputTypes

  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerCountOutputType
     */
    select?: BuyerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeCountProformaInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProformaInvoiceWhereInput
  }



  /**
   * Count Type FabricsTypeCountOutputType
   */

  export type FabricsTypeCountOutputType = {
    orders: number
    proformaInvoices: number
  }

  export type FabricsTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | FabricsTypeCountOutputTypeCountOrdersArgs
    proformaInvoices?: boolean | FabricsTypeCountOutputTypeCountProformaInvoicesArgs
  }

  // Custom InputTypes

  /**
   * FabricsTypeCountOutputType without action
   */
  export type FabricsTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsTypeCountOutputType
     */
    select?: FabricsTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FabricsTypeCountOutputType without action
   */
  export type FabricsTypeCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * FabricsTypeCountOutputType without action
   */
  export type FabricsTypeCountOutputTypeCountProformaInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProformaInvoiceWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    yarnDetails: number
    deliveryDetails: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    yarnDetails?: boolean | OrderCountOutputTypeCountYarnDetailsArgs
    deliveryDetails?: boolean | OrderCountOutputTypeCountDeliveryDetailsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountYarnDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: yarnInformationWhereInput
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountDeliveryDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryDetailsWhereInput
  }



  /**
   * Count Type YarnInformationCountOutputType
   */

  export type YarnInformationCountOutputType = {
    yarnInformationWithDetails: number
  }

  export type YarnInformationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    yarnInformationWithDetails?: boolean | YarnInformationCountOutputTypeCountYarnInformationWithDetailsArgs
  }

  // Custom InputTypes

  /**
   * YarnInformationCountOutputType without action
   */
  export type YarnInformationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationCountOutputType
     */
    select?: YarnInformationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * YarnInformationCountOutputType without action
   */
  export type YarnInformationCountOutputTypeCountYarnInformationWithDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YarnInformationWithDetailsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    content: string | null
    published: boolean
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      content: string | null
      published: boolean
      authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    bio: string | null
    jobTitle: string | null
    description: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    jobTitle: string | null
    description: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    jobTitle: number
    description: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    jobTitle?: true
    description?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    jobTitle?: true
    description?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    jobTitle?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    bio: string | null
    jobTitle: string | null
    description: string | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    jobTitle?: boolean
    description?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    bio?: boolean
    jobTitle?: boolean
    description?: boolean
    userId?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bio: string | null
      jobTitle: string | null
      description: string | null
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly jobTitle: FieldRef<"Profile", 'String'>
    readonly description: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isBlock: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isBlock: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isAdmin: number
    role: number
    createdAt: number
    updatedAt: number
    isBlock: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isBlock?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isBlock?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isBlock?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean
    role: string | null
    createdAt: Date
    updatedAt: Date | null
    isBlock: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBlock?: boolean
    Post?: boolean | User$PostArgs<ExtArgs>
    user?: boolean | User$userArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBlock?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Post?: boolean | User$PostArgs<ExtArgs>
    user?: boolean | User$userArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Post: Prisma.$PostPayload<ExtArgs>[]
      user: Prisma.$OrderPayload<ExtArgs>[]
      Profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      password: string | null
      isAdmin: boolean
      role: string | null
      createdAt: Date
      updatedAt: Date | null
      isBlock: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Post<T extends User$PostArgs<ExtArgs> = {}>(args?: Subset<T, User$PostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends User$userArgs<ExtArgs> = {}>(args?: Subset<T, User$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    Profile<T extends User$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$ProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isBlock: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Post
   */
  export type User$PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.user
   */
  export type User$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * User.Profile
   */
  export type User$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    location: string | null
    email: string | null
    contact: string | null
    shortForm: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    location: string | null
    email: string | null
    contact: string | null
    shortForm: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    companyName: number
    location: number
    email: number
    contact: number
    shortForm: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    companyName?: true
    location?: true
    email?: true
    contact?: true
    shortForm?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    companyName?: true
    location?: true
    email?: true
    contact?: true
    shortForm?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    companyName?: true
    location?: true
    email?: true
    contact?: true
    shortForm?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    companyName: string
    location: string
    email: string | null
    contact: string | null
    shortForm: string | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    location?: boolean
    email?: boolean
    contact?: boolean
    shortForm?: boolean
    yarnDetails?: boolean | Company$yarnDetailsArgs<ExtArgs>
    buyers?: boolean | Company$buyersArgs<ExtArgs>
    orderWithCompanyNames?: boolean | Company$orderWithCompanyNamesArgs<ExtArgs>
    proformaInvoices?: boolean | Company$proformaInvoicesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    companyName?: boolean
    location?: boolean
    email?: boolean
    contact?: boolean
    shortForm?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    yarnDetails?: boolean | Company$yarnDetailsArgs<ExtArgs>
    buyers?: boolean | Company$buyersArgs<ExtArgs>
    orderWithCompanyNames?: boolean | Company$orderWithCompanyNamesArgs<ExtArgs>
    proformaInvoices?: boolean | Company$proformaInvoicesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      yarnDetails: Prisma.$yarnInformationPayload<ExtArgs>[]
      buyers: Prisma.$BuyerPayload<ExtArgs>[]
      orderWithCompanyNames: Prisma.$OrderPayload<ExtArgs>[]
      proformaInvoices: Prisma.$ProformaInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      location: string
      email: string | null
      contact: string | null
      shortForm: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    yarnDetails<T extends Company$yarnDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Company$yarnDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findMany'> | Null>;

    buyers<T extends Company$buyersArgs<ExtArgs> = {}>(args?: Subset<T, Company$buyersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findMany'> | Null>;

    orderWithCompanyNames<T extends Company$orderWithCompanyNamesArgs<ExtArgs> = {}>(args?: Subset<T, Company$orderWithCompanyNamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    proformaInvoices<T extends Company$proformaInvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Company$proformaInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly companyName: FieldRef<"Company", 'String'>
    readonly location: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly contact: FieldRef<"Company", 'String'>
    readonly shortForm: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.yarnDetails
   */
  export type Company$yarnDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    where?: yarnInformationWhereInput
    orderBy?: yarnInformationOrderByWithRelationInput | yarnInformationOrderByWithRelationInput[]
    cursor?: yarnInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YarnInformationScalarFieldEnum | YarnInformationScalarFieldEnum[]
  }


  /**
   * Company.buyers
   */
  export type Company$buyersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    where?: BuyerWhereInput
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    cursor?: BuyerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }


  /**
   * Company.orderWithCompanyNames
   */
  export type Company$orderWithCompanyNamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Company.proformaInvoices
   */
  export type Company$proformaInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    where?: ProformaInvoiceWhereInput
    orderBy?: ProformaInvoiceOrderByWithRelationInput | ProformaInvoiceOrderByWithRelationInput[]
    cursor?: ProformaInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProformaInvoiceScalarFieldEnum | ProformaInvoiceScalarFieldEnum[]
  }


  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
  }



  /**
   * Model Buyer
   */

  export type AggregateBuyer = {
    _count: BuyerCountAggregateOutputType | null
    _avg: BuyerAvgAggregateOutputType | null
    _sum: BuyerSumAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  export type BuyerAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type BuyerSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type BuyerMinAggregateOutputType = {
    id: number | null
    buyerName: string | null
    companyId: number | null
  }

  export type BuyerMaxAggregateOutputType = {
    id: number | null
    buyerName: string | null
    companyId: number | null
  }

  export type BuyerCountAggregateOutputType = {
    id: number
    buyerName: number
    companyId: number
    _all: number
  }


  export type BuyerAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type BuyerSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type BuyerMinAggregateInputType = {
    id?: true
    buyerName?: true
    companyId?: true
  }

  export type BuyerMaxAggregateInputType = {
    id?: true
    buyerName?: true
    companyId?: true
  }

  export type BuyerCountAggregateInputType = {
    id?: true
    buyerName?: true
    companyId?: true
    _all?: true
  }

  export type BuyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buyer to aggregate.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buyers
    **/
    _count?: true | BuyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuyerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuyerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyerMaxAggregateInputType
  }

  export type GetBuyerAggregateType<T extends BuyerAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyer[P]>
      : GetScalarType<T[P], AggregateBuyer[P]>
  }




  export type BuyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyerWhereInput
    orderBy?: BuyerOrderByWithAggregationInput | BuyerOrderByWithAggregationInput[]
    by: BuyerScalarFieldEnum[] | BuyerScalarFieldEnum
    having?: BuyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyerCountAggregateInputType | true
    _avg?: BuyerAvgAggregateInputType
    _sum?: BuyerSumAggregateInputType
    _min?: BuyerMinAggregateInputType
    _max?: BuyerMaxAggregateInputType
  }

  export type BuyerGroupByOutputType = {
    id: number
    buyerName: string | null
    companyId: number
    _count: BuyerCountAggregateOutputType | null
    _avg: BuyerAvgAggregateOutputType | null
    _sum: BuyerSumAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  type GetBuyerGroupByPayload<T extends BuyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyerGroupByOutputType[P]>
            : GetScalarType<T[P], BuyerGroupByOutputType[P]>
        }
      >
    >


  export type BuyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerName?: boolean
    companyId?: boolean
    orders?: boolean | Buyer$ordersArgs<ExtArgs>
    proformaInvoices?: boolean | Buyer$proformaInvoicesArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | BuyerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyer"]>

  export type BuyerSelectScalar = {
    id?: boolean
    buyerName?: boolean
    companyId?: boolean
  }

  export type BuyerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Buyer$ordersArgs<ExtArgs>
    proformaInvoices?: boolean | Buyer$proformaInvoicesArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | BuyerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BuyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buyer"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      proformaInvoices: Prisma.$ProformaInvoicePayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      buyerName: string | null
      companyId: number
    }, ExtArgs["result"]["buyer"]>
    composites: {}
  }


  type BuyerGetPayload<S extends boolean | null | undefined | BuyerDefaultArgs> = $Result.GetResult<Prisma.$BuyerPayload, S>

  type BuyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuyerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuyerCountAggregateInputType | true
    }

  export interface BuyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buyer'], meta: { name: 'Buyer' } }
    /**
     * Find zero or one Buyer that matches the filter.
     * @param {BuyerFindUniqueArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BuyerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BuyerFindUniqueArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Buyer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BuyerFindUniqueOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BuyerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Buyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFindFirstArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BuyerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyerFindFirstArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Buyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFindFirstOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BuyerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Buyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buyers
     * const buyers = await prisma.buyer.findMany()
     * 
     * // Get first 10 Buyers
     * const buyers = await prisma.buyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buyerWithIdOnly = await prisma.buyer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BuyerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Buyer.
     * @param {BuyerCreateArgs} args - Arguments to create a Buyer.
     * @example
     * // Create one Buyer
     * const Buyer = await prisma.buyer.create({
     *   data: {
     *     // ... data to create a Buyer
     *   }
     * })
     * 
    **/
    create<T extends BuyerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BuyerCreateArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Buyers.
     *     @param {BuyerCreateManyArgs} args - Arguments to create many Buyers.
     *     @example
     *     // Create many Buyers
     *     const buyer = await prisma.buyer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BuyerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buyer.
     * @param {BuyerDeleteArgs} args - Arguments to delete one Buyer.
     * @example
     * // Delete one Buyer
     * const Buyer = await prisma.buyer.delete({
     *   where: {
     *     // ... filter to delete one Buyer
     *   }
     * })
     * 
    **/
    delete<T extends BuyerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BuyerDeleteArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Buyer.
     * @param {BuyerUpdateArgs} args - Arguments to update one Buyer.
     * @example
     * // Update one Buyer
     * const buyer = await prisma.buyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BuyerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BuyerUpdateArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Buyers.
     * @param {BuyerDeleteManyArgs} args - Arguments to filter Buyers to delete.
     * @example
     * // Delete a few Buyers
     * const { count } = await prisma.buyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BuyerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuyerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buyers
     * const buyer = await prisma.buyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BuyerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BuyerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buyer.
     * @param {BuyerUpsertArgs} args - Arguments to update or create a Buyer.
     * @example
     * // Update or create a Buyer
     * const buyer = await prisma.buyer.upsert({
     *   create: {
     *     // ... data to create a Buyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buyer we want to update
     *   }
     * })
    **/
    upsert<T extends BuyerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BuyerUpsertArgs<ExtArgs>>
    ): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerCountArgs} args - Arguments to filter Buyers to count.
     * @example
     * // Count the number of Buyers
     * const count = await prisma.buyer.count({
     *   where: {
     *     // ... the filter for the Buyers we want to count
     *   }
     * })
    **/
    count<T extends BuyerCountArgs>(
      args?: Subset<T, BuyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuyerAggregateArgs>(args: Subset<T, BuyerAggregateArgs>): Prisma.PrismaPromise<GetBuyerAggregateType<T>>

    /**
     * Group by Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuyerGroupByArgs['orderBy'] }
        : { orderBy?: BuyerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buyer model
   */
  readonly fields: BuyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends Buyer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Buyer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    proformaInvoices<T extends Buyer$proformaInvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Buyer$proformaInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Buyer model
   */ 
  interface BuyerFieldRefs {
    readonly id: FieldRef<"Buyer", 'Int'>
    readonly buyerName: FieldRef<"Buyer", 'String'>
    readonly companyId: FieldRef<"Buyer", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Buyer findUnique
   */
  export type BuyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where: BuyerWhereUniqueInput
  }


  /**
   * Buyer findUniqueOrThrow
   */
  export type BuyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where: BuyerWhereUniqueInput
  }


  /**
   * Buyer findFirst
   */
  export type BuyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buyers.
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }


  /**
   * Buyer findFirstOrThrow
   */
  export type BuyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buyers.
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }


  /**
   * Buyer findMany
   */
  export type BuyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyers to fetch.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buyers.
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }


  /**
   * Buyer create
   */
  export type BuyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * The data needed to create a Buyer.
     */
    data: XOR<BuyerCreateInput, BuyerUncheckedCreateInput>
  }


  /**
   * Buyer createMany
   */
  export type BuyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buyers.
     */
    data: BuyerCreateManyInput | BuyerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Buyer update
   */
  export type BuyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * The data needed to update a Buyer.
     */
    data: XOR<BuyerUpdateInput, BuyerUncheckedUpdateInput>
    /**
     * Choose, which Buyer to update.
     */
    where: BuyerWhereUniqueInput
  }


  /**
   * Buyer updateMany
   */
  export type BuyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buyers.
     */
    data: XOR<BuyerUpdateManyMutationInput, BuyerUncheckedUpdateManyInput>
    /**
     * Filter which Buyers to update
     */
    where?: BuyerWhereInput
  }


  /**
   * Buyer upsert
   */
  export type BuyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * The filter to search for the Buyer to update in case it exists.
     */
    where: BuyerWhereUniqueInput
    /**
     * In case the Buyer found by the `where` argument doesn't exist, create a new Buyer with this data.
     */
    create: XOR<BuyerCreateInput, BuyerUncheckedCreateInput>
    /**
     * In case the Buyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuyerUpdateInput, BuyerUncheckedUpdateInput>
  }


  /**
   * Buyer delete
   */
  export type BuyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter which Buyer to delete.
     */
    where: BuyerWhereUniqueInput
  }


  /**
   * Buyer deleteMany
   */
  export type BuyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buyers to delete
     */
    where?: BuyerWhereInput
  }


  /**
   * Buyer.orders
   */
  export type Buyer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Buyer.proformaInvoices
   */
  export type Buyer$proformaInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    where?: ProformaInvoiceWhereInput
    orderBy?: ProformaInvoiceOrderByWithRelationInput | ProformaInvoiceOrderByWithRelationInput[]
    cursor?: ProformaInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProformaInvoiceScalarFieldEnum | ProformaInvoiceScalarFieldEnum[]
  }


  /**
   * Buyer without action
   */
  export type BuyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
  }



  /**
   * Model FabricsType
   */

  export type AggregateFabricsType = {
    _count: FabricsTypeCountAggregateOutputType | null
    _avg: FabricsTypeAvgAggregateOutputType | null
    _sum: FabricsTypeSumAggregateOutputType | null
    _min: FabricsTypeMinAggregateOutputType | null
    _max: FabricsTypeMaxAggregateOutputType | null
  }

  export type FabricsTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type FabricsTypeSumAggregateOutputType = {
    id: number | null
  }

  export type FabricsTypeMinAggregateOutputType = {
    id: number | null
    fabricsName: string | null
    description: string | null
  }

  export type FabricsTypeMaxAggregateOutputType = {
    id: number | null
    fabricsName: string | null
    description: string | null
  }

  export type FabricsTypeCountAggregateOutputType = {
    id: number
    fabricsName: number
    description: number
    _all: number
  }


  export type FabricsTypeAvgAggregateInputType = {
    id?: true
  }

  export type FabricsTypeSumAggregateInputType = {
    id?: true
  }

  export type FabricsTypeMinAggregateInputType = {
    id?: true
    fabricsName?: true
    description?: true
  }

  export type FabricsTypeMaxAggregateInputType = {
    id?: true
    fabricsName?: true
    description?: true
  }

  export type FabricsTypeCountAggregateInputType = {
    id?: true
    fabricsName?: true
    description?: true
    _all?: true
  }

  export type FabricsTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricsType to aggregate.
     */
    where?: FabricsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricsTypes to fetch.
     */
    orderBy?: FabricsTypeOrderByWithRelationInput | FabricsTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FabricsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FabricsTypes
    **/
    _count?: true | FabricsTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FabricsTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FabricsTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FabricsTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FabricsTypeMaxAggregateInputType
  }

  export type GetFabricsTypeAggregateType<T extends FabricsTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFabricsType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFabricsType[P]>
      : GetScalarType<T[P], AggregateFabricsType[P]>
  }




  export type FabricsTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FabricsTypeWhereInput
    orderBy?: FabricsTypeOrderByWithAggregationInput | FabricsTypeOrderByWithAggregationInput[]
    by: FabricsTypeScalarFieldEnum[] | FabricsTypeScalarFieldEnum
    having?: FabricsTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FabricsTypeCountAggregateInputType | true
    _avg?: FabricsTypeAvgAggregateInputType
    _sum?: FabricsTypeSumAggregateInputType
    _min?: FabricsTypeMinAggregateInputType
    _max?: FabricsTypeMaxAggregateInputType
  }

  export type FabricsTypeGroupByOutputType = {
    id: number
    fabricsName: string
    description: string | null
    _count: FabricsTypeCountAggregateOutputType | null
    _avg: FabricsTypeAvgAggregateOutputType | null
    _sum: FabricsTypeSumAggregateOutputType | null
    _min: FabricsTypeMinAggregateOutputType | null
    _max: FabricsTypeMaxAggregateOutputType | null
  }

  type GetFabricsTypeGroupByPayload<T extends FabricsTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FabricsTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FabricsTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FabricsTypeGroupByOutputType[P]>
            : GetScalarType<T[P], FabricsTypeGroupByOutputType[P]>
        }
      >
    >


  export type FabricsTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fabricsName?: boolean
    description?: boolean
    orders?: boolean | FabricsType$ordersArgs<ExtArgs>
    proformaInvoices?: boolean | FabricsType$proformaInvoicesArgs<ExtArgs>
    _count?: boolean | FabricsTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fabricsType"]>

  export type FabricsTypeSelectScalar = {
    id?: boolean
    fabricsName?: boolean
    description?: boolean
  }

  export type FabricsTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | FabricsType$ordersArgs<ExtArgs>
    proformaInvoices?: boolean | FabricsType$proformaInvoicesArgs<ExtArgs>
    _count?: boolean | FabricsTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FabricsTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FabricsType"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      proformaInvoices: Prisma.$ProformaInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fabricsName: string
      description: string | null
    }, ExtArgs["result"]["fabricsType"]>
    composites: {}
  }


  type FabricsTypeGetPayload<S extends boolean | null | undefined | FabricsTypeDefaultArgs> = $Result.GetResult<Prisma.$FabricsTypePayload, S>

  type FabricsTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FabricsTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FabricsTypeCountAggregateInputType | true
    }

  export interface FabricsTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FabricsType'], meta: { name: 'FabricsType' } }
    /**
     * Find zero or one FabricsType that matches the filter.
     * @param {FabricsTypeFindUniqueArgs} args - Arguments to find a FabricsType
     * @example
     * // Get one FabricsType
     * const fabricsType = await prisma.fabricsType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FabricsTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FabricsTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FabricsType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FabricsTypeFindUniqueOrThrowArgs} args - Arguments to find a FabricsType
     * @example
     * // Get one FabricsType
     * const fabricsType = await prisma.fabricsType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FabricsTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FabricsTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FabricsType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricsTypeFindFirstArgs} args - Arguments to find a FabricsType
     * @example
     * // Get one FabricsType
     * const fabricsType = await prisma.fabricsType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FabricsTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FabricsTypeFindFirstArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FabricsType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricsTypeFindFirstOrThrowArgs} args - Arguments to find a FabricsType
     * @example
     * // Get one FabricsType
     * const fabricsType = await prisma.fabricsType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FabricsTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FabricsTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FabricsTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricsTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FabricsTypes
     * const fabricsTypes = await prisma.fabricsType.findMany()
     * 
     * // Get first 10 FabricsTypes
     * const fabricsTypes = await prisma.fabricsType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fabricsTypeWithIdOnly = await prisma.fabricsType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FabricsTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FabricsTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FabricsType.
     * @param {FabricsTypeCreateArgs} args - Arguments to create a FabricsType.
     * @example
     * // Create one FabricsType
     * const FabricsType = await prisma.fabricsType.create({
     *   data: {
     *     // ... data to create a FabricsType
     *   }
     * })
     * 
    **/
    create<T extends FabricsTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FabricsTypeCreateArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FabricsTypes.
     *     @param {FabricsTypeCreateManyArgs} args - Arguments to create many FabricsTypes.
     *     @example
     *     // Create many FabricsTypes
     *     const fabricsType = await prisma.fabricsType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FabricsTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FabricsTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FabricsType.
     * @param {FabricsTypeDeleteArgs} args - Arguments to delete one FabricsType.
     * @example
     * // Delete one FabricsType
     * const FabricsType = await prisma.fabricsType.delete({
     *   where: {
     *     // ... filter to delete one FabricsType
     *   }
     * })
     * 
    **/
    delete<T extends FabricsTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FabricsTypeDeleteArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FabricsType.
     * @param {FabricsTypeUpdateArgs} args - Arguments to update one FabricsType.
     * @example
     * // Update one FabricsType
     * const fabricsType = await prisma.fabricsType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FabricsTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FabricsTypeUpdateArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FabricsTypes.
     * @param {FabricsTypeDeleteManyArgs} args - Arguments to filter FabricsTypes to delete.
     * @example
     * // Delete a few FabricsTypes
     * const { count } = await prisma.fabricsType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FabricsTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FabricsTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FabricsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricsTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FabricsTypes
     * const fabricsType = await prisma.fabricsType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FabricsTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FabricsTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FabricsType.
     * @param {FabricsTypeUpsertArgs} args - Arguments to update or create a FabricsType.
     * @example
     * // Update or create a FabricsType
     * const fabricsType = await prisma.fabricsType.upsert({
     *   create: {
     *     // ... data to create a FabricsType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FabricsType we want to update
     *   }
     * })
    **/
    upsert<T extends FabricsTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FabricsTypeUpsertArgs<ExtArgs>>
    ): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FabricsTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricsTypeCountArgs} args - Arguments to filter FabricsTypes to count.
     * @example
     * // Count the number of FabricsTypes
     * const count = await prisma.fabricsType.count({
     *   where: {
     *     // ... the filter for the FabricsTypes we want to count
     *   }
     * })
    **/
    count<T extends FabricsTypeCountArgs>(
      args?: Subset<T, FabricsTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FabricsTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FabricsType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricsTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FabricsTypeAggregateArgs>(args: Subset<T, FabricsTypeAggregateArgs>): Prisma.PrismaPromise<GetFabricsTypeAggregateType<T>>

    /**
     * Group by FabricsType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FabricsTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FabricsTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FabricsTypeGroupByArgs['orderBy'] }
        : { orderBy?: FabricsTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FabricsTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFabricsTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FabricsType model
   */
  readonly fields: FabricsTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FabricsType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FabricsTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends FabricsType$ordersArgs<ExtArgs> = {}>(args?: Subset<T, FabricsType$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    proformaInvoices<T extends FabricsType$proformaInvoicesArgs<ExtArgs> = {}>(args?: Subset<T, FabricsType$proformaInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FabricsType model
   */ 
  interface FabricsTypeFieldRefs {
    readonly id: FieldRef<"FabricsType", 'Int'>
    readonly fabricsName: FieldRef<"FabricsType", 'String'>
    readonly description: FieldRef<"FabricsType", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FabricsType findUnique
   */
  export type FabricsTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * Filter, which FabricsType to fetch.
     */
    where: FabricsTypeWhereUniqueInput
  }


  /**
   * FabricsType findUniqueOrThrow
   */
  export type FabricsTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * Filter, which FabricsType to fetch.
     */
    where: FabricsTypeWhereUniqueInput
  }


  /**
   * FabricsType findFirst
   */
  export type FabricsTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * Filter, which FabricsType to fetch.
     */
    where?: FabricsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricsTypes to fetch.
     */
    orderBy?: FabricsTypeOrderByWithRelationInput | FabricsTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricsTypes.
     */
    cursor?: FabricsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricsTypes.
     */
    distinct?: FabricsTypeScalarFieldEnum | FabricsTypeScalarFieldEnum[]
  }


  /**
   * FabricsType findFirstOrThrow
   */
  export type FabricsTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * Filter, which FabricsType to fetch.
     */
    where?: FabricsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricsTypes to fetch.
     */
    orderBy?: FabricsTypeOrderByWithRelationInput | FabricsTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FabricsTypes.
     */
    cursor?: FabricsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricsTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FabricsTypes.
     */
    distinct?: FabricsTypeScalarFieldEnum | FabricsTypeScalarFieldEnum[]
  }


  /**
   * FabricsType findMany
   */
  export type FabricsTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * Filter, which FabricsTypes to fetch.
     */
    where?: FabricsTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FabricsTypes to fetch.
     */
    orderBy?: FabricsTypeOrderByWithRelationInput | FabricsTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FabricsTypes.
     */
    cursor?: FabricsTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FabricsTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FabricsTypes.
     */
    skip?: number
    distinct?: FabricsTypeScalarFieldEnum | FabricsTypeScalarFieldEnum[]
  }


  /**
   * FabricsType create
   */
  export type FabricsTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a FabricsType.
     */
    data: XOR<FabricsTypeCreateInput, FabricsTypeUncheckedCreateInput>
  }


  /**
   * FabricsType createMany
   */
  export type FabricsTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FabricsTypes.
     */
    data: FabricsTypeCreateManyInput | FabricsTypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FabricsType update
   */
  export type FabricsTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a FabricsType.
     */
    data: XOR<FabricsTypeUpdateInput, FabricsTypeUncheckedUpdateInput>
    /**
     * Choose, which FabricsType to update.
     */
    where: FabricsTypeWhereUniqueInput
  }


  /**
   * FabricsType updateMany
   */
  export type FabricsTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FabricsTypes.
     */
    data: XOR<FabricsTypeUpdateManyMutationInput, FabricsTypeUncheckedUpdateManyInput>
    /**
     * Filter which FabricsTypes to update
     */
    where?: FabricsTypeWhereInput
  }


  /**
   * FabricsType upsert
   */
  export type FabricsTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the FabricsType to update in case it exists.
     */
    where: FabricsTypeWhereUniqueInput
    /**
     * In case the FabricsType found by the `where` argument doesn't exist, create a new FabricsType with this data.
     */
    create: XOR<FabricsTypeCreateInput, FabricsTypeUncheckedCreateInput>
    /**
     * In case the FabricsType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FabricsTypeUpdateInput, FabricsTypeUncheckedUpdateInput>
  }


  /**
   * FabricsType delete
   */
  export type FabricsTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    /**
     * Filter which FabricsType to delete.
     */
    where: FabricsTypeWhereUniqueInput
  }


  /**
   * FabricsType deleteMany
   */
  export type FabricsTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FabricsTypes to delete
     */
    where?: FabricsTypeWhereInput
  }


  /**
   * FabricsType.orders
   */
  export type FabricsType$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * FabricsType.proformaInvoices
   */
  export type FabricsType$proformaInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    where?: ProformaInvoiceWhereInput
    orderBy?: ProformaInvoiceOrderByWithRelationInput | ProformaInvoiceOrderByWithRelationInput[]
    cursor?: ProformaInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProformaInvoiceScalarFieldEnum | ProformaInvoiceScalarFieldEnum[]
  }


  /**
   * FabricsType without action
   */
  export type FabricsTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    buyerId: number | null
    fabricsId: number | null
    orderQuantity: number | null
    restQuantity: number | null
    userId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    buyerId: number | null
    fabricsId: number | null
    orderQuantity: number | null
    restQuantity: number | null
    userId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    orderNumber: string | null
    companyId: number | null
    buyerId: number | null
    companyName: string | null
    fabricsName: string | null
    fabricsId: number | null
    buyerName: string | null
    season: string | null
    pmNumber: string | null
    poNumber: string | null
    boNumber: string | null
    invoiceNumber: string | null
    orderedDate: Date | null
    targetDate: Date | null
    createdAt: Date | null
    orderQuantity: number | null
    restQuantity: number | null
    updatedAt: Date | null
    status: string | null
    isProformaInvoiceCreated: boolean | null
    userId: number | null
    proformaInvoiceId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    orderNumber: string | null
    companyId: number | null
    buyerId: number | null
    companyName: string | null
    fabricsName: string | null
    fabricsId: number | null
    buyerName: string | null
    season: string | null
    pmNumber: string | null
    poNumber: string | null
    boNumber: string | null
    invoiceNumber: string | null
    orderedDate: Date | null
    targetDate: Date | null
    createdAt: Date | null
    orderQuantity: number | null
    restQuantity: number | null
    updatedAt: Date | null
    status: string | null
    isProformaInvoiceCreated: boolean | null
    userId: number | null
    proformaInvoiceId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    companyId: number
    buyerId: number
    companyName: number
    fabricsName: number
    fabricsId: number
    buyerName: number
    season: number
    pmNumber: number
    poNumber: number
    boNumber: number
    invoiceNumber: number
    orderedDate: number
    targetDate: number
    createdAt: number
    orderQuantity: number
    restQuantity: number
    updatedAt: number
    status: number
    isProformaInvoiceCreated: number
    userId: number
    proformaInvoiceId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    companyId?: true
    buyerId?: true
    fabricsId?: true
    orderQuantity?: true
    restQuantity?: true
    userId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    companyId?: true
    buyerId?: true
    fabricsId?: true
    orderQuantity?: true
    restQuantity?: true
    userId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    companyId?: true
    buyerId?: true
    companyName?: true
    fabricsName?: true
    fabricsId?: true
    buyerName?: true
    season?: true
    pmNumber?: true
    poNumber?: true
    boNumber?: true
    invoiceNumber?: true
    orderedDate?: true
    targetDate?: true
    createdAt?: true
    orderQuantity?: true
    restQuantity?: true
    updatedAt?: true
    status?: true
    isProformaInvoiceCreated?: true
    userId?: true
    proformaInvoiceId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    companyId?: true
    buyerId?: true
    companyName?: true
    fabricsName?: true
    fabricsId?: true
    buyerName?: true
    season?: true
    pmNumber?: true
    poNumber?: true
    boNumber?: true
    invoiceNumber?: true
    orderedDate?: true
    targetDate?: true
    createdAt?: true
    orderQuantity?: true
    restQuantity?: true
    updatedAt?: true
    status?: true
    isProformaInvoiceCreated?: true
    userId?: true
    proformaInvoiceId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    companyId?: true
    buyerId?: true
    companyName?: true
    fabricsName?: true
    fabricsId?: true
    buyerName?: true
    season?: true
    pmNumber?: true
    poNumber?: true
    boNumber?: true
    invoiceNumber?: true
    orderedDate?: true
    targetDate?: true
    createdAt?: true
    orderQuantity?: true
    restQuantity?: true
    updatedAt?: true
    status?: true
    isProformaInvoiceCreated?: true
    userId?: true
    proformaInvoiceId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    orderNumber: string
    companyId: number
    buyerId: number | null
    companyName: string | null
    fabricsName: string
    fabricsId: number | null
    buyerName: string
    season: string | null
    pmNumber: string | null
    poNumber: string | null
    boNumber: string | null
    invoiceNumber: string | null
    orderedDate: Date
    targetDate: Date | null
    createdAt: Date
    orderQuantity: number
    restQuantity: number
    updatedAt: Date | null
    status: string | null
    isProformaInvoiceCreated: boolean
    userId: number | null
    proformaInvoiceId: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    companyId?: boolean
    buyerId?: boolean
    companyName?: boolean
    fabricsName?: boolean
    fabricsId?: boolean
    buyerName?: boolean
    season?: boolean
    pmNumber?: boolean
    poNumber?: boolean
    boNumber?: boolean
    invoiceNumber?: boolean
    orderedDate?: boolean
    targetDate?: boolean
    createdAt?: boolean
    orderQuantity?: boolean
    restQuantity?: boolean
    updatedAt?: boolean
    status?: boolean
    isProformaInvoiceCreated?: boolean
    userId?: boolean
    proformaInvoiceId?: boolean
    details?: boolean | Order$detailsArgs<ExtArgs>
    yarnDetails?: boolean | Order$yarnDetailsArgs<ExtArgs>
    deliveryDetails?: boolean | Order$deliveryDetailsArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    buyer?: boolean | Order$buyerArgs<ExtArgs>
    fabricsType?: boolean | Order$fabricsTypeArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    companyId?: boolean
    buyerId?: boolean
    companyName?: boolean
    fabricsName?: boolean
    fabricsId?: boolean
    buyerName?: boolean
    season?: boolean
    pmNumber?: boolean
    poNumber?: boolean
    boNumber?: boolean
    invoiceNumber?: boolean
    orderedDate?: boolean
    targetDate?: boolean
    createdAt?: boolean
    orderQuantity?: boolean
    restQuantity?: boolean
    updatedAt?: boolean
    status?: boolean
    isProformaInvoiceCreated?: boolean
    userId?: boolean
    proformaInvoiceId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | Order$detailsArgs<ExtArgs>
    yarnDetails?: boolean | Order$yarnDetailsArgs<ExtArgs>
    deliveryDetails?: boolean | Order$deliveryDetailsArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    buyer?: boolean | Order$buyerArgs<ExtArgs>
    fabricsType?: boolean | Order$fabricsTypeArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      details: Prisma.$OrderDetailsPayload<ExtArgs> | null
      yarnDetails: Prisma.$yarnInformationPayload<ExtArgs>[]
      deliveryDetails: Prisma.$DeliveryDetailsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      buyer: Prisma.$BuyerPayload<ExtArgs> | null
      fabricsType: Prisma.$FabricsTypePayload<ExtArgs> | null
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNumber: string
      companyId: number
      buyerId: number | null
      companyName: string | null
      fabricsName: string
      fabricsId: number | null
      buyerName: string
      season: string | null
      pmNumber: string | null
      poNumber: string | null
      boNumber: string | null
      invoiceNumber: string | null
      orderedDate: Date
      targetDate: Date | null
      createdAt: Date
      orderQuantity: number
      restQuantity: number
      updatedAt: Date | null
      status: string | null
      isProformaInvoiceCreated: boolean
      userId: number | null
      proformaInvoiceId: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    details<T extends Order$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$detailsArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    yarnDetails<T extends Order$yarnDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$yarnDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findMany'> | Null>;

    deliveryDetails<T extends Order$deliveryDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$deliveryDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    buyer<T extends Order$buyerArgs<ExtArgs> = {}>(args?: Subset<T, Order$buyerArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    fabricsType<T extends Order$fabricsTypeArgs<ExtArgs> = {}>(args?: Subset<T, Order$fabricsTypeArgs<ExtArgs>>): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly companyId: FieldRef<"Order", 'Int'>
    readonly buyerId: FieldRef<"Order", 'Int'>
    readonly companyName: FieldRef<"Order", 'String'>
    readonly fabricsName: FieldRef<"Order", 'String'>
    readonly fabricsId: FieldRef<"Order", 'Int'>
    readonly buyerName: FieldRef<"Order", 'String'>
    readonly season: FieldRef<"Order", 'String'>
    readonly pmNumber: FieldRef<"Order", 'String'>
    readonly poNumber: FieldRef<"Order", 'String'>
    readonly boNumber: FieldRef<"Order", 'String'>
    readonly invoiceNumber: FieldRef<"Order", 'String'>
    readonly orderedDate: FieldRef<"Order", 'DateTime'>
    readonly targetDate: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly orderQuantity: FieldRef<"Order", 'Float'>
    readonly restQuantity: FieldRef<"Order", 'Float'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly status: FieldRef<"Order", 'String'>
    readonly isProformaInvoiceCreated: FieldRef<"Order", 'Boolean'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly proformaInvoiceId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.details
   */
  export type Order$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
  }


  /**
   * Order.yarnDetails
   */
  export type Order$yarnDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    where?: yarnInformationWhereInput
    orderBy?: yarnInformationOrderByWithRelationInput | yarnInformationOrderByWithRelationInput[]
    cursor?: yarnInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YarnInformationScalarFieldEnum | YarnInformationScalarFieldEnum[]
  }


  /**
   * Order.deliveryDetails
   */
  export type Order$deliveryDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    where?: DeliveryDetailsWhereInput
    orderBy?: DeliveryDetailsOrderByWithRelationInput | DeliveryDetailsOrderByWithRelationInput[]
    cursor?: DeliveryDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryDetailsScalarFieldEnum | DeliveryDetailsScalarFieldEnum[]
  }


  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Order.buyer
   */
  export type Order$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    where?: BuyerWhereInput
  }


  /**
   * Order.fabricsType
   */
  export type Order$fabricsTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    where?: FabricsTypeWhereInput
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderDetailsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    style: string | null
    yarnCount: string | null
    yarnBrand: string | null
    yarnLot: string | null
    lycraCount: string | null
    lycraBrand: string | null
    lycraLot: string | null
    polyStarCount: string | null
    polyStarBrand: string | null
    polyStarLot: string | null
    mc_DIA: string | null
    e_DIA: string | null
    f_GSM: string | null
    sl: string | null
    colour: string | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    style: string | null
    yarnCount: string | null
    yarnBrand: string | null
    yarnLot: string | null
    lycraCount: string | null
    lycraBrand: string | null
    lycraLot: string | null
    polyStarCount: string | null
    polyStarBrand: string | null
    polyStarLot: string | null
    mc_DIA: string | null
    e_DIA: string | null
    f_GSM: string | null
    sl: string | null
    colour: string | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    id: number
    orderId: number
    style: number
    yarnCount: number
    yarnBrand: number
    yarnLot: number
    lycraCount: number
    lycraBrand: number
    lycraLot: number
    polyStarCount: number
    polyStarBrand: number
    polyStarLot: number
    mc_DIA: number
    e_DIA: number
    f_GSM: number
    sl: number
    colour: number
    _all: number
  }


  export type OrderDetailsAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderDetailsSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type OrderDetailsMinAggregateInputType = {
    id?: true
    orderId?: true
    style?: true
    yarnCount?: true
    yarnBrand?: true
    yarnLot?: true
    lycraCount?: true
    lycraBrand?: true
    lycraLot?: true
    polyStarCount?: true
    polyStarBrand?: true
    polyStarLot?: true
    mc_DIA?: true
    e_DIA?: true
    f_GSM?: true
    sl?: true
    colour?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    id?: true
    orderId?: true
    style?: true
    yarnCount?: true
    yarnBrand?: true
    yarnLot?: true
    lycraCount?: true
    lycraBrand?: true
    lycraLot?: true
    polyStarCount?: true
    polyStarBrand?: true
    polyStarLot?: true
    mc_DIA?: true
    e_DIA?: true
    f_GSM?: true
    sl?: true
    colour?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    id?: true
    orderId?: true
    style?: true
    yarnCount?: true
    yarnBrand?: true
    yarnLot?: true
    lycraCount?: true
    lycraBrand?: true
    lycraLot?: true
    polyStarCount?: true
    polyStarBrand?: true
    polyStarLot?: true
    mc_DIA?: true
    e_DIA?: true
    f_GSM?: true
    sl?: true
    colour?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _avg?: OrderDetailsAvgAggregateInputType
    _sum?: OrderDetailsSumAggregateInputType
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    id: number
    orderId: number | null
    style: string | null
    yarnCount: string | null
    yarnBrand: string | null
    yarnLot: string | null
    lycraCount: string | null
    lycraBrand: string | null
    lycraLot: string | null
    polyStarCount: string | null
    polyStarBrand: string | null
    polyStarLot: string | null
    mc_DIA: string | null
    e_DIA: string | null
    f_GSM: string | null
    sl: string | null
    colour: string | null
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    style?: boolean
    yarnCount?: boolean
    yarnBrand?: boolean
    yarnLot?: boolean
    lycraCount?: boolean
    lycraBrand?: boolean
    lycraLot?: boolean
    polyStarCount?: boolean
    polyStarBrand?: boolean
    polyStarLot?: boolean
    mc_DIA?: boolean
    e_DIA?: boolean
    f_GSM?: boolean
    sl?: boolean
    colour?: boolean
    order?: boolean | OrderDetails$orderArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectScalar = {
    id?: boolean
    orderId?: boolean
    style?: boolean
    yarnCount?: boolean
    yarnBrand?: boolean
    yarnLot?: boolean
    lycraCount?: boolean
    lycraBrand?: boolean
    lycraLot?: boolean
    polyStarCount?: boolean
    polyStarBrand?: boolean
    polyStarLot?: boolean
    mc_DIA?: boolean
    e_DIA?: boolean
    f_GSM?: boolean
    sl?: boolean
    colour?: boolean
  }

  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDetails$orderArgs<ExtArgs>
  }


  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number | null
      style: string | null
      yarnCount: string | null
      yarnBrand: string | null
      yarnLot: string | null
      lycraCount: string | null
      lycraBrand: string | null
      lycraLot: string | null
      polyStarCount: string | null
      polyStarBrand: string | null
      polyStarLot: string | null
      mc_DIA: string | null
      e_DIA: string | null
      f_GSM: string | null
      sl: string | null
      colour: string | null
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }


  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
    **/
    create<T extends OrderDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderDetails.
     *     @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     *     @example
     *     // Create many OrderDetails
     *     const orderDetails = await prisma.orderDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
    **/
    delete<T extends OrderDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
    **/
    upsert<T extends OrderDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDetails$orderArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetails$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderDetails model
   */ 
  interface OrderDetailsFieldRefs {
    readonly id: FieldRef<"OrderDetails", 'Int'>
    readonly orderId: FieldRef<"OrderDetails", 'Int'>
    readonly style: FieldRef<"OrderDetails", 'String'>
    readonly yarnCount: FieldRef<"OrderDetails", 'String'>
    readonly yarnBrand: FieldRef<"OrderDetails", 'String'>
    readonly yarnLot: FieldRef<"OrderDetails", 'String'>
    readonly lycraCount: FieldRef<"OrderDetails", 'String'>
    readonly lycraBrand: FieldRef<"OrderDetails", 'String'>
    readonly lycraLot: FieldRef<"OrderDetails", 'String'>
    readonly polyStarCount: FieldRef<"OrderDetails", 'String'>
    readonly polyStarBrand: FieldRef<"OrderDetails", 'String'>
    readonly polyStarLot: FieldRef<"OrderDetails", 'String'>
    readonly mc_DIA: FieldRef<"OrderDetails", 'String'>
    readonly e_DIA: FieldRef<"OrderDetails", 'String'>
    readonly f_GSM: FieldRef<"OrderDetails", 'String'>
    readonly sl: FieldRef<"OrderDetails", 'String'>
    readonly colour: FieldRef<"OrderDetails", 'String'>
  }
    

  // Custom InputTypes

  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }


  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }


  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }


  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data?: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }


  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
  }


  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }


  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
  }


  /**
   * OrderDetails.order
   */
  export type OrderDetails$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }


  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }



  /**
   * Model yarnInformation
   */

  export type AggregateYarnInformation = {
    _count: YarnInformationCountAggregateOutputType | null
    _avg: YarnInformationAvgAggregateOutputType | null
    _sum: YarnInformationSumAggregateOutputType | null
    _min: YarnInformationMinAggregateOutputType | null
    _max: YarnInformationMaxAggregateOutputType | null
  }

  export type YarnInformationAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    bookingQuantity: number | null
    restQuantity: number | null
    orderId: number | null
  }

  export type YarnInformationSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    bookingQuantity: number | null
    restQuantity: number | null
    orderId: number | null
  }

  export type YarnInformationMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    bookingQuantity: number | null
    restQuantity: number | null
    yarn: string | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YarnInformationMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    bookingQuantity: number | null
    restQuantity: number | null
    yarn: string | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YarnInformationCountAggregateOutputType = {
    id: number
    companyId: number
    bookingQuantity: number
    restQuantity: number
    yarn: number
    orderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YarnInformationAvgAggregateInputType = {
    id?: true
    companyId?: true
    bookingQuantity?: true
    restQuantity?: true
    orderId?: true
  }

  export type YarnInformationSumAggregateInputType = {
    id?: true
    companyId?: true
    bookingQuantity?: true
    restQuantity?: true
    orderId?: true
  }

  export type YarnInformationMinAggregateInputType = {
    id?: true
    companyId?: true
    bookingQuantity?: true
    restQuantity?: true
    yarn?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YarnInformationMaxAggregateInputType = {
    id?: true
    companyId?: true
    bookingQuantity?: true
    restQuantity?: true
    yarn?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YarnInformationCountAggregateInputType = {
    id?: true
    companyId?: true
    bookingQuantity?: true
    restQuantity?: true
    yarn?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YarnInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yarnInformation to aggregate.
     */
    where?: yarnInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yarnInformations to fetch.
     */
    orderBy?: yarnInformationOrderByWithRelationInput | yarnInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: yarnInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yarnInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yarnInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned yarnInformations
    **/
    _count?: true | YarnInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YarnInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YarnInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YarnInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YarnInformationMaxAggregateInputType
  }

  export type GetYarnInformationAggregateType<T extends YarnInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateYarnInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYarnInformation[P]>
      : GetScalarType<T[P], AggregateYarnInformation[P]>
  }




  export type yarnInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: yarnInformationWhereInput
    orderBy?: yarnInformationOrderByWithAggregationInput | yarnInformationOrderByWithAggregationInput[]
    by: YarnInformationScalarFieldEnum[] | YarnInformationScalarFieldEnum
    having?: yarnInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YarnInformationCountAggregateInputType | true
    _avg?: YarnInformationAvgAggregateInputType
    _sum?: YarnInformationSumAggregateInputType
    _min?: YarnInformationMinAggregateInputType
    _max?: YarnInformationMaxAggregateInputType
  }

  export type YarnInformationGroupByOutputType = {
    id: number
    companyId: number
    bookingQuantity: number
    restQuantity: number
    yarn: string | null
    orderId: number
    createdAt: Date
    updatedAt: Date | null
    _count: YarnInformationCountAggregateOutputType | null
    _avg: YarnInformationAvgAggregateOutputType | null
    _sum: YarnInformationSumAggregateOutputType | null
    _min: YarnInformationMinAggregateOutputType | null
    _max: YarnInformationMaxAggregateOutputType | null
  }

  type GetYarnInformationGroupByPayload<T extends yarnInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YarnInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YarnInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YarnInformationGroupByOutputType[P]>
            : GetScalarType<T[P], YarnInformationGroupByOutputType[P]>
        }
      >
    >


  export type yarnInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    bookingQuantity?: boolean
    restQuantity?: boolean
    yarn?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    yarnInformationWithDetails?: boolean | yarnInformation$yarnInformationWithDetailsArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | YarnInformationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yarnInformation"]>

  export type yarnInformationSelectScalar = {
    id?: boolean
    companyId?: boolean
    bookingQuantity?: boolean
    restQuantity?: boolean
    yarn?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type yarnInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    yarnInformationWithDetails?: boolean | yarnInformation$yarnInformationWithDetailsArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | YarnInformationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $yarnInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "yarnInformation"
    objects: {
      yarnInformationWithDetails: Prisma.$YarnInformationWithDetailsPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      bookingQuantity: number
      restQuantity: number
      yarn: string | null
      orderId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["yarnInformation"]>
    composites: {}
  }


  type yarnInformationGetPayload<S extends boolean | null | undefined | yarnInformationDefaultArgs> = $Result.GetResult<Prisma.$yarnInformationPayload, S>

  type yarnInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<yarnInformationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YarnInformationCountAggregateInputType | true
    }

  export interface yarnInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['yarnInformation'], meta: { name: 'yarnInformation' } }
    /**
     * Find zero or one YarnInformation that matches the filter.
     * @param {yarnInformationFindUniqueArgs} args - Arguments to find a YarnInformation
     * @example
     * // Get one YarnInformation
     * const yarnInformation = await prisma.yarnInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends yarnInformationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, yarnInformationFindUniqueArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one YarnInformation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {yarnInformationFindUniqueOrThrowArgs} args - Arguments to find a YarnInformation
     * @example
     * // Get one YarnInformation
     * const yarnInformation = await prisma.yarnInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends yarnInformationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, yarnInformationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first YarnInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yarnInformationFindFirstArgs} args - Arguments to find a YarnInformation
     * @example
     * // Get one YarnInformation
     * const yarnInformation = await prisma.yarnInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends yarnInformationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, yarnInformationFindFirstArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first YarnInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yarnInformationFindFirstOrThrowArgs} args - Arguments to find a YarnInformation
     * @example
     * // Get one YarnInformation
     * const yarnInformation = await prisma.yarnInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends yarnInformationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, yarnInformationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more YarnInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yarnInformationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YarnInformations
     * const yarnInformations = await prisma.yarnInformation.findMany()
     * 
     * // Get first 10 YarnInformations
     * const yarnInformations = await prisma.yarnInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yarnInformationWithIdOnly = await prisma.yarnInformation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends yarnInformationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, yarnInformationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a YarnInformation.
     * @param {yarnInformationCreateArgs} args - Arguments to create a YarnInformation.
     * @example
     * // Create one YarnInformation
     * const YarnInformation = await prisma.yarnInformation.create({
     *   data: {
     *     // ... data to create a YarnInformation
     *   }
     * })
     * 
    **/
    create<T extends yarnInformationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, yarnInformationCreateArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many YarnInformations.
     *     @param {yarnInformationCreateManyArgs} args - Arguments to create many YarnInformations.
     *     @example
     *     // Create many YarnInformations
     *     const yarnInformation = await prisma.yarnInformation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends yarnInformationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, yarnInformationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a YarnInformation.
     * @param {yarnInformationDeleteArgs} args - Arguments to delete one YarnInformation.
     * @example
     * // Delete one YarnInformation
     * const YarnInformation = await prisma.yarnInformation.delete({
     *   where: {
     *     // ... filter to delete one YarnInformation
     *   }
     * })
     * 
    **/
    delete<T extends yarnInformationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, yarnInformationDeleteArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one YarnInformation.
     * @param {yarnInformationUpdateArgs} args - Arguments to update one YarnInformation.
     * @example
     * // Update one YarnInformation
     * const yarnInformation = await prisma.yarnInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends yarnInformationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, yarnInformationUpdateArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more YarnInformations.
     * @param {yarnInformationDeleteManyArgs} args - Arguments to filter YarnInformations to delete.
     * @example
     * // Delete a few YarnInformations
     * const { count } = await prisma.yarnInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends yarnInformationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, yarnInformationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YarnInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yarnInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YarnInformations
     * const yarnInformation = await prisma.yarnInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends yarnInformationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, yarnInformationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YarnInformation.
     * @param {yarnInformationUpsertArgs} args - Arguments to update or create a YarnInformation.
     * @example
     * // Update or create a YarnInformation
     * const yarnInformation = await prisma.yarnInformation.upsert({
     *   create: {
     *     // ... data to create a YarnInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YarnInformation we want to update
     *   }
     * })
    **/
    upsert<T extends yarnInformationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, yarnInformationUpsertArgs<ExtArgs>>
    ): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of YarnInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yarnInformationCountArgs} args - Arguments to filter YarnInformations to count.
     * @example
     * // Count the number of YarnInformations
     * const count = await prisma.yarnInformation.count({
     *   where: {
     *     // ... the filter for the YarnInformations we want to count
     *   }
     * })
    **/
    count<T extends yarnInformationCountArgs>(
      args?: Subset<T, yarnInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YarnInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YarnInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YarnInformationAggregateArgs>(args: Subset<T, YarnInformationAggregateArgs>): Prisma.PrismaPromise<GetYarnInformationAggregateType<T>>

    /**
     * Group by YarnInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yarnInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends yarnInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: yarnInformationGroupByArgs['orderBy'] }
        : { orderBy?: yarnInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, yarnInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYarnInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the yarnInformation model
   */
  readonly fields: yarnInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for yarnInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__yarnInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    yarnInformationWithDetails<T extends yarnInformation$yarnInformationWithDetailsArgs<ExtArgs> = {}>(args?: Subset<T, yarnInformation$yarnInformationWithDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the yarnInformation model
   */ 
  interface yarnInformationFieldRefs {
    readonly id: FieldRef<"yarnInformation", 'Int'>
    readonly companyId: FieldRef<"yarnInformation", 'Int'>
    readonly bookingQuantity: FieldRef<"yarnInformation", 'Float'>
    readonly restQuantity: FieldRef<"yarnInformation", 'Float'>
    readonly yarn: FieldRef<"yarnInformation", 'String'>
    readonly orderId: FieldRef<"yarnInformation", 'Int'>
    readonly createdAt: FieldRef<"yarnInformation", 'DateTime'>
    readonly updatedAt: FieldRef<"yarnInformation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * yarnInformation findUnique
   */
  export type yarnInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * Filter, which yarnInformation to fetch.
     */
    where: yarnInformationWhereUniqueInput
  }


  /**
   * yarnInformation findUniqueOrThrow
   */
  export type yarnInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * Filter, which yarnInformation to fetch.
     */
    where: yarnInformationWhereUniqueInput
  }


  /**
   * yarnInformation findFirst
   */
  export type yarnInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * Filter, which yarnInformation to fetch.
     */
    where?: yarnInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yarnInformations to fetch.
     */
    orderBy?: yarnInformationOrderByWithRelationInput | yarnInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yarnInformations.
     */
    cursor?: yarnInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yarnInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yarnInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yarnInformations.
     */
    distinct?: YarnInformationScalarFieldEnum | YarnInformationScalarFieldEnum[]
  }


  /**
   * yarnInformation findFirstOrThrow
   */
  export type yarnInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * Filter, which yarnInformation to fetch.
     */
    where?: yarnInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yarnInformations to fetch.
     */
    orderBy?: yarnInformationOrderByWithRelationInput | yarnInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yarnInformations.
     */
    cursor?: yarnInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yarnInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yarnInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yarnInformations.
     */
    distinct?: YarnInformationScalarFieldEnum | YarnInformationScalarFieldEnum[]
  }


  /**
   * yarnInformation findMany
   */
  export type yarnInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * Filter, which yarnInformations to fetch.
     */
    where?: yarnInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yarnInformations to fetch.
     */
    orderBy?: yarnInformationOrderByWithRelationInput | yarnInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing yarnInformations.
     */
    cursor?: yarnInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yarnInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yarnInformations.
     */
    skip?: number
    distinct?: YarnInformationScalarFieldEnum | YarnInformationScalarFieldEnum[]
  }


  /**
   * yarnInformation create
   */
  export type yarnInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a yarnInformation.
     */
    data: XOR<yarnInformationCreateInput, yarnInformationUncheckedCreateInput>
  }


  /**
   * yarnInformation createMany
   */
  export type yarnInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many yarnInformations.
     */
    data: yarnInformationCreateManyInput | yarnInformationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * yarnInformation update
   */
  export type yarnInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a yarnInformation.
     */
    data: XOR<yarnInformationUpdateInput, yarnInformationUncheckedUpdateInput>
    /**
     * Choose, which yarnInformation to update.
     */
    where: yarnInformationWhereUniqueInput
  }


  /**
   * yarnInformation updateMany
   */
  export type yarnInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update yarnInformations.
     */
    data: XOR<yarnInformationUpdateManyMutationInput, yarnInformationUncheckedUpdateManyInput>
    /**
     * Filter which yarnInformations to update
     */
    where?: yarnInformationWhereInput
  }


  /**
   * yarnInformation upsert
   */
  export type yarnInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the yarnInformation to update in case it exists.
     */
    where: yarnInformationWhereUniqueInput
    /**
     * In case the yarnInformation found by the `where` argument doesn't exist, create a new yarnInformation with this data.
     */
    create: XOR<yarnInformationCreateInput, yarnInformationUncheckedCreateInput>
    /**
     * In case the yarnInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<yarnInformationUpdateInput, yarnInformationUncheckedUpdateInput>
  }


  /**
   * yarnInformation delete
   */
  export type yarnInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
    /**
     * Filter which yarnInformation to delete.
     */
    where: yarnInformationWhereUniqueInput
  }


  /**
   * yarnInformation deleteMany
   */
  export type yarnInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yarnInformations to delete
     */
    where?: yarnInformationWhereInput
  }


  /**
   * yarnInformation.yarnInformationWithDetails
   */
  export type yarnInformation$yarnInformationWithDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    where?: YarnInformationWithDetailsWhereInput
    orderBy?: YarnInformationWithDetailsOrderByWithRelationInput | YarnInformationWithDetailsOrderByWithRelationInput[]
    cursor?: YarnInformationWithDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YarnInformationWithDetailsScalarFieldEnum | YarnInformationWithDetailsScalarFieldEnum[]
  }


  /**
   * yarnInformation without action
   */
  export type yarnInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yarnInformation
     */
    select?: yarnInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: yarnInformationInclude<ExtArgs> | null
  }



  /**
   * Model YarnInformationWithDetails
   */

  export type AggregateYarnInformationWithDetails = {
    _count: YarnInformationWithDetailsCountAggregateOutputType | null
    _avg: YarnInformationWithDetailsAvgAggregateOutputType | null
    _sum: YarnInformationWithDetailsSumAggregateOutputType | null
    _min: YarnInformationWithDetailsMinAggregateOutputType | null
    _max: YarnInformationWithDetailsMaxAggregateOutputType | null
  }

  export type YarnInformationWithDetailsAvgAggregateOutputType = {
    id: number | null
    yarnInfoID: number | null
    receivedQuantity: number | null
  }

  export type YarnInformationWithDetailsSumAggregateOutputType = {
    id: number | null
    yarnInfoID: number | null
    receivedQuantity: number | null
  }

  export type YarnInformationWithDetailsMinAggregateOutputType = {
    id: number | null
    yarnInfoID: number | null
    receivedQuantity: number | null
    createdAt: Date | null
  }

  export type YarnInformationWithDetailsMaxAggregateOutputType = {
    id: number | null
    yarnInfoID: number | null
    receivedQuantity: number | null
    createdAt: Date | null
  }

  export type YarnInformationWithDetailsCountAggregateOutputType = {
    id: number
    yarnInfoID: number
    receivedQuantity: number
    createdAt: number
    _all: number
  }


  export type YarnInformationWithDetailsAvgAggregateInputType = {
    id?: true
    yarnInfoID?: true
    receivedQuantity?: true
  }

  export type YarnInformationWithDetailsSumAggregateInputType = {
    id?: true
    yarnInfoID?: true
    receivedQuantity?: true
  }

  export type YarnInformationWithDetailsMinAggregateInputType = {
    id?: true
    yarnInfoID?: true
    receivedQuantity?: true
    createdAt?: true
  }

  export type YarnInformationWithDetailsMaxAggregateInputType = {
    id?: true
    yarnInfoID?: true
    receivedQuantity?: true
    createdAt?: true
  }

  export type YarnInformationWithDetailsCountAggregateInputType = {
    id?: true
    yarnInfoID?: true
    receivedQuantity?: true
    createdAt?: true
    _all?: true
  }

  export type YarnInformationWithDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YarnInformationWithDetails to aggregate.
     */
    where?: YarnInformationWithDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YarnInformationWithDetails to fetch.
     */
    orderBy?: YarnInformationWithDetailsOrderByWithRelationInput | YarnInformationWithDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YarnInformationWithDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YarnInformationWithDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YarnInformationWithDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YarnInformationWithDetails
    **/
    _count?: true | YarnInformationWithDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YarnInformationWithDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YarnInformationWithDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YarnInformationWithDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YarnInformationWithDetailsMaxAggregateInputType
  }

  export type GetYarnInformationWithDetailsAggregateType<T extends YarnInformationWithDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateYarnInformationWithDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYarnInformationWithDetails[P]>
      : GetScalarType<T[P], AggregateYarnInformationWithDetails[P]>
  }




  export type YarnInformationWithDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YarnInformationWithDetailsWhereInput
    orderBy?: YarnInformationWithDetailsOrderByWithAggregationInput | YarnInformationWithDetailsOrderByWithAggregationInput[]
    by: YarnInformationWithDetailsScalarFieldEnum[] | YarnInformationWithDetailsScalarFieldEnum
    having?: YarnInformationWithDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YarnInformationWithDetailsCountAggregateInputType | true
    _avg?: YarnInformationWithDetailsAvgAggregateInputType
    _sum?: YarnInformationWithDetailsSumAggregateInputType
    _min?: YarnInformationWithDetailsMinAggregateInputType
    _max?: YarnInformationWithDetailsMaxAggregateInputType
  }

  export type YarnInformationWithDetailsGroupByOutputType = {
    id: number
    yarnInfoID: number
    receivedQuantity: number
    createdAt: Date
    _count: YarnInformationWithDetailsCountAggregateOutputType | null
    _avg: YarnInformationWithDetailsAvgAggregateOutputType | null
    _sum: YarnInformationWithDetailsSumAggregateOutputType | null
    _min: YarnInformationWithDetailsMinAggregateOutputType | null
    _max: YarnInformationWithDetailsMaxAggregateOutputType | null
  }

  type GetYarnInformationWithDetailsGroupByPayload<T extends YarnInformationWithDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YarnInformationWithDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YarnInformationWithDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YarnInformationWithDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], YarnInformationWithDetailsGroupByOutputType[P]>
        }
      >
    >


  export type YarnInformationWithDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yarnInfoID?: boolean
    receivedQuantity?: boolean
    createdAt?: boolean
    yarnInformation?: boolean | yarnInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yarnInformationWithDetails"]>

  export type YarnInformationWithDetailsSelectScalar = {
    id?: boolean
    yarnInfoID?: boolean
    receivedQuantity?: boolean
    createdAt?: boolean
  }

  export type YarnInformationWithDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    yarnInformation?: boolean | yarnInformationDefaultArgs<ExtArgs>
  }


  export type $YarnInformationWithDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YarnInformationWithDetails"
    objects: {
      yarnInformation: Prisma.$yarnInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      yarnInfoID: number
      receivedQuantity: number
      createdAt: Date
    }, ExtArgs["result"]["yarnInformationWithDetails"]>
    composites: {}
  }


  type YarnInformationWithDetailsGetPayload<S extends boolean | null | undefined | YarnInformationWithDetailsDefaultArgs> = $Result.GetResult<Prisma.$YarnInformationWithDetailsPayload, S>

  type YarnInformationWithDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<YarnInformationWithDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YarnInformationWithDetailsCountAggregateInputType | true
    }

  export interface YarnInformationWithDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YarnInformationWithDetails'], meta: { name: 'YarnInformationWithDetails' } }
    /**
     * Find zero or one YarnInformationWithDetails that matches the filter.
     * @param {YarnInformationWithDetailsFindUniqueArgs} args - Arguments to find a YarnInformationWithDetails
     * @example
     * // Get one YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends YarnInformationWithDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, YarnInformationWithDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one YarnInformationWithDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {YarnInformationWithDetailsFindUniqueOrThrowArgs} args - Arguments to find a YarnInformationWithDetails
     * @example
     * // Get one YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends YarnInformationWithDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YarnInformationWithDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first YarnInformationWithDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationWithDetailsFindFirstArgs} args - Arguments to find a YarnInformationWithDetails
     * @example
     * // Get one YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends YarnInformationWithDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, YarnInformationWithDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first YarnInformationWithDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationWithDetailsFindFirstOrThrowArgs} args - Arguments to find a YarnInformationWithDetails
     * @example
     * // Get one YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends YarnInformationWithDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YarnInformationWithDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more YarnInformationWithDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationWithDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.findMany()
     * 
     * // Get first 10 YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yarnInformationWithDetailsWithIdOnly = await prisma.yarnInformationWithDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends YarnInformationWithDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YarnInformationWithDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a YarnInformationWithDetails.
     * @param {YarnInformationWithDetailsCreateArgs} args - Arguments to create a YarnInformationWithDetails.
     * @example
     * // Create one YarnInformationWithDetails
     * const YarnInformationWithDetails = await prisma.yarnInformationWithDetails.create({
     *   data: {
     *     // ... data to create a YarnInformationWithDetails
     *   }
     * })
     * 
    **/
    create<T extends YarnInformationWithDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, YarnInformationWithDetailsCreateArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many YarnInformationWithDetails.
     *     @param {YarnInformationWithDetailsCreateManyArgs} args - Arguments to create many YarnInformationWithDetails.
     *     @example
     *     // Create many YarnInformationWithDetails
     *     const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends YarnInformationWithDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YarnInformationWithDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a YarnInformationWithDetails.
     * @param {YarnInformationWithDetailsDeleteArgs} args - Arguments to delete one YarnInformationWithDetails.
     * @example
     * // Delete one YarnInformationWithDetails
     * const YarnInformationWithDetails = await prisma.yarnInformationWithDetails.delete({
     *   where: {
     *     // ... filter to delete one YarnInformationWithDetails
     *   }
     * })
     * 
    **/
    delete<T extends YarnInformationWithDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, YarnInformationWithDetailsDeleteArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one YarnInformationWithDetails.
     * @param {YarnInformationWithDetailsUpdateArgs} args - Arguments to update one YarnInformationWithDetails.
     * @example
     * // Update one YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends YarnInformationWithDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, YarnInformationWithDetailsUpdateArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more YarnInformationWithDetails.
     * @param {YarnInformationWithDetailsDeleteManyArgs} args - Arguments to filter YarnInformationWithDetails to delete.
     * @example
     * // Delete a few YarnInformationWithDetails
     * const { count } = await prisma.yarnInformationWithDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends YarnInformationWithDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YarnInformationWithDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YarnInformationWithDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationWithDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends YarnInformationWithDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, YarnInformationWithDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YarnInformationWithDetails.
     * @param {YarnInformationWithDetailsUpsertArgs} args - Arguments to update or create a YarnInformationWithDetails.
     * @example
     * // Update or create a YarnInformationWithDetails
     * const yarnInformationWithDetails = await prisma.yarnInformationWithDetails.upsert({
     *   create: {
     *     // ... data to create a YarnInformationWithDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YarnInformationWithDetails we want to update
     *   }
     * })
    **/
    upsert<T extends YarnInformationWithDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, YarnInformationWithDetailsUpsertArgs<ExtArgs>>
    ): Prisma__YarnInformationWithDetailsClient<$Result.GetResult<Prisma.$YarnInformationWithDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of YarnInformationWithDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationWithDetailsCountArgs} args - Arguments to filter YarnInformationWithDetails to count.
     * @example
     * // Count the number of YarnInformationWithDetails
     * const count = await prisma.yarnInformationWithDetails.count({
     *   where: {
     *     // ... the filter for the YarnInformationWithDetails we want to count
     *   }
     * })
    **/
    count<T extends YarnInformationWithDetailsCountArgs>(
      args?: Subset<T, YarnInformationWithDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YarnInformationWithDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YarnInformationWithDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationWithDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YarnInformationWithDetailsAggregateArgs>(args: Subset<T, YarnInformationWithDetailsAggregateArgs>): Prisma.PrismaPromise<GetYarnInformationWithDetailsAggregateType<T>>

    /**
     * Group by YarnInformationWithDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YarnInformationWithDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YarnInformationWithDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YarnInformationWithDetailsGroupByArgs['orderBy'] }
        : { orderBy?: YarnInformationWithDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YarnInformationWithDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYarnInformationWithDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YarnInformationWithDetails model
   */
  readonly fields: YarnInformationWithDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YarnInformationWithDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YarnInformationWithDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    yarnInformation<T extends yarnInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, yarnInformationDefaultArgs<ExtArgs>>): Prisma__yarnInformationClient<$Result.GetResult<Prisma.$yarnInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the YarnInformationWithDetails model
   */ 
  interface YarnInformationWithDetailsFieldRefs {
    readonly id: FieldRef<"YarnInformationWithDetails", 'Int'>
    readonly yarnInfoID: FieldRef<"YarnInformationWithDetails", 'Int'>
    readonly receivedQuantity: FieldRef<"YarnInformationWithDetails", 'Float'>
    readonly createdAt: FieldRef<"YarnInformationWithDetails", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * YarnInformationWithDetails findUnique
   */
  export type YarnInformationWithDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * Filter, which YarnInformationWithDetails to fetch.
     */
    where: YarnInformationWithDetailsWhereUniqueInput
  }


  /**
   * YarnInformationWithDetails findUniqueOrThrow
   */
  export type YarnInformationWithDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * Filter, which YarnInformationWithDetails to fetch.
     */
    where: YarnInformationWithDetailsWhereUniqueInput
  }


  /**
   * YarnInformationWithDetails findFirst
   */
  export type YarnInformationWithDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * Filter, which YarnInformationWithDetails to fetch.
     */
    where?: YarnInformationWithDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YarnInformationWithDetails to fetch.
     */
    orderBy?: YarnInformationWithDetailsOrderByWithRelationInput | YarnInformationWithDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YarnInformationWithDetails.
     */
    cursor?: YarnInformationWithDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YarnInformationWithDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YarnInformationWithDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YarnInformationWithDetails.
     */
    distinct?: YarnInformationWithDetailsScalarFieldEnum | YarnInformationWithDetailsScalarFieldEnum[]
  }


  /**
   * YarnInformationWithDetails findFirstOrThrow
   */
  export type YarnInformationWithDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * Filter, which YarnInformationWithDetails to fetch.
     */
    where?: YarnInformationWithDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YarnInformationWithDetails to fetch.
     */
    orderBy?: YarnInformationWithDetailsOrderByWithRelationInput | YarnInformationWithDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YarnInformationWithDetails.
     */
    cursor?: YarnInformationWithDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YarnInformationWithDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YarnInformationWithDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YarnInformationWithDetails.
     */
    distinct?: YarnInformationWithDetailsScalarFieldEnum | YarnInformationWithDetailsScalarFieldEnum[]
  }


  /**
   * YarnInformationWithDetails findMany
   */
  export type YarnInformationWithDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * Filter, which YarnInformationWithDetails to fetch.
     */
    where?: YarnInformationWithDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YarnInformationWithDetails to fetch.
     */
    orderBy?: YarnInformationWithDetailsOrderByWithRelationInput | YarnInformationWithDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YarnInformationWithDetails.
     */
    cursor?: YarnInformationWithDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YarnInformationWithDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YarnInformationWithDetails.
     */
    skip?: number
    distinct?: YarnInformationWithDetailsScalarFieldEnum | YarnInformationWithDetailsScalarFieldEnum[]
  }


  /**
   * YarnInformationWithDetails create
   */
  export type YarnInformationWithDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a YarnInformationWithDetails.
     */
    data: XOR<YarnInformationWithDetailsCreateInput, YarnInformationWithDetailsUncheckedCreateInput>
  }


  /**
   * YarnInformationWithDetails createMany
   */
  export type YarnInformationWithDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YarnInformationWithDetails.
     */
    data: YarnInformationWithDetailsCreateManyInput | YarnInformationWithDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * YarnInformationWithDetails update
   */
  export type YarnInformationWithDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a YarnInformationWithDetails.
     */
    data: XOR<YarnInformationWithDetailsUpdateInput, YarnInformationWithDetailsUncheckedUpdateInput>
    /**
     * Choose, which YarnInformationWithDetails to update.
     */
    where: YarnInformationWithDetailsWhereUniqueInput
  }


  /**
   * YarnInformationWithDetails updateMany
   */
  export type YarnInformationWithDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YarnInformationWithDetails.
     */
    data: XOR<YarnInformationWithDetailsUpdateManyMutationInput, YarnInformationWithDetailsUncheckedUpdateManyInput>
    /**
     * Filter which YarnInformationWithDetails to update
     */
    where?: YarnInformationWithDetailsWhereInput
  }


  /**
   * YarnInformationWithDetails upsert
   */
  export type YarnInformationWithDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the YarnInformationWithDetails to update in case it exists.
     */
    where: YarnInformationWithDetailsWhereUniqueInput
    /**
     * In case the YarnInformationWithDetails found by the `where` argument doesn't exist, create a new YarnInformationWithDetails with this data.
     */
    create: XOR<YarnInformationWithDetailsCreateInput, YarnInformationWithDetailsUncheckedCreateInput>
    /**
     * In case the YarnInformationWithDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YarnInformationWithDetailsUpdateInput, YarnInformationWithDetailsUncheckedUpdateInput>
  }


  /**
   * YarnInformationWithDetails delete
   */
  export type YarnInformationWithDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
    /**
     * Filter which YarnInformationWithDetails to delete.
     */
    where: YarnInformationWithDetailsWhereUniqueInput
  }


  /**
   * YarnInformationWithDetails deleteMany
   */
  export type YarnInformationWithDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YarnInformationWithDetails to delete
     */
    where?: YarnInformationWithDetailsWhereInput
  }


  /**
   * YarnInformationWithDetails without action
   */
  export type YarnInformationWithDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YarnInformationWithDetails
     */
    select?: YarnInformationWithDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: YarnInformationWithDetailsInclude<ExtArgs> | null
  }



  /**
   * Model DeliveryDetails
   */

  export type AggregateDeliveryDetails = {
    _count: DeliveryDetailsCountAggregateOutputType | null
    _avg: DeliveryDetailsAvgAggregateOutputType | null
    _sum: DeliveryDetailsSumAggregateOutputType | null
    _min: DeliveryDetailsMinAggregateOutputType | null
    _max: DeliveryDetailsMaxAggregateOutputType | null
  }

  export type DeliveryDetailsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    deliveredQuantity: number | null
  }

  export type DeliveryDetailsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    deliveredQuantity: number | null
  }

  export type DeliveryDetailsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    deliveredQuantity: number | null
    createdAt: Date | null
    deliveredBy: string | null
  }

  export type DeliveryDetailsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    deliveredQuantity: number | null
    createdAt: Date | null
    deliveredBy: string | null
  }

  export type DeliveryDetailsCountAggregateOutputType = {
    id: number
    orderId: number
    deliveredQuantity: number
    createdAt: number
    deliveredBy: number
    _all: number
  }


  export type DeliveryDetailsAvgAggregateInputType = {
    id?: true
    orderId?: true
    deliveredQuantity?: true
  }

  export type DeliveryDetailsSumAggregateInputType = {
    id?: true
    orderId?: true
    deliveredQuantity?: true
  }

  export type DeliveryDetailsMinAggregateInputType = {
    id?: true
    orderId?: true
    deliveredQuantity?: true
    createdAt?: true
    deliveredBy?: true
  }

  export type DeliveryDetailsMaxAggregateInputType = {
    id?: true
    orderId?: true
    deliveredQuantity?: true
    createdAt?: true
    deliveredBy?: true
  }

  export type DeliveryDetailsCountAggregateInputType = {
    id?: true
    orderId?: true
    deliveredQuantity?: true
    createdAt?: true
    deliveredBy?: true
    _all?: true
  }

  export type DeliveryDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryDetails to aggregate.
     */
    where?: DeliveryDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryDetails to fetch.
     */
    orderBy?: DeliveryDetailsOrderByWithRelationInput | DeliveryDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryDetails
    **/
    _count?: true | DeliveryDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryDetailsMaxAggregateInputType
  }

  export type GetDeliveryDetailsAggregateType<T extends DeliveryDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryDetails[P]>
      : GetScalarType<T[P], AggregateDeliveryDetails[P]>
  }




  export type DeliveryDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryDetailsWhereInput
    orderBy?: DeliveryDetailsOrderByWithAggregationInput | DeliveryDetailsOrderByWithAggregationInput[]
    by: DeliveryDetailsScalarFieldEnum[] | DeliveryDetailsScalarFieldEnum
    having?: DeliveryDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryDetailsCountAggregateInputType | true
    _avg?: DeliveryDetailsAvgAggregateInputType
    _sum?: DeliveryDetailsSumAggregateInputType
    _min?: DeliveryDetailsMinAggregateInputType
    _max?: DeliveryDetailsMaxAggregateInputType
  }

  export type DeliveryDetailsGroupByOutputType = {
    id: number
    orderId: number
    deliveredQuantity: number
    createdAt: Date
    deliveredBy: string | null
    _count: DeliveryDetailsCountAggregateOutputType | null
    _avg: DeliveryDetailsAvgAggregateOutputType | null
    _sum: DeliveryDetailsSumAggregateOutputType | null
    _min: DeliveryDetailsMinAggregateOutputType | null
    _max: DeliveryDetailsMaxAggregateOutputType | null
  }

  type GetDeliveryDetailsGroupByPayload<T extends DeliveryDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryDetailsGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    deliveredQuantity?: boolean
    createdAt?: boolean
    deliveredBy?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryDetails"]>

  export type DeliveryDetailsSelectScalar = {
    id?: boolean
    orderId?: boolean
    deliveredQuantity?: boolean
    createdAt?: boolean
    deliveredBy?: boolean
  }

  export type DeliveryDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }


  export type $DeliveryDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryDetails"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      deliveredQuantity: number
      createdAt: Date
      deliveredBy: string | null
    }, ExtArgs["result"]["deliveryDetails"]>
    composites: {}
  }


  type DeliveryDetailsGetPayload<S extends boolean | null | undefined | DeliveryDetailsDefaultArgs> = $Result.GetResult<Prisma.$DeliveryDetailsPayload, S>

  type DeliveryDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeliveryDetailsCountAggregateInputType | true
    }

  export interface DeliveryDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryDetails'], meta: { name: 'DeliveryDetails' } }
    /**
     * Find zero or one DeliveryDetails that matches the filter.
     * @param {DeliveryDetailsFindUniqueArgs} args - Arguments to find a DeliveryDetails
     * @example
     * // Get one DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeliveryDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DeliveryDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeliveryDetailsFindUniqueOrThrowArgs} args - Arguments to find a DeliveryDetails
     * @example
     * // Get one DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeliveryDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DeliveryDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryDetailsFindFirstArgs} args - Arguments to find a DeliveryDetails
     * @example
     * // Get one DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeliveryDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DeliveryDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryDetailsFindFirstOrThrowArgs} args - Arguments to find a DeliveryDetails
     * @example
     * // Get one DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeliveryDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DeliveryDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.findMany()
     * 
     * // Get first 10 DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryDetailsWithIdOnly = await prisma.deliveryDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DeliveryDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DeliveryDetails.
     * @param {DeliveryDetailsCreateArgs} args - Arguments to create a DeliveryDetails.
     * @example
     * // Create one DeliveryDetails
     * const DeliveryDetails = await prisma.deliveryDetails.create({
     *   data: {
     *     // ... data to create a DeliveryDetails
     *   }
     * })
     * 
    **/
    create<T extends DeliveryDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDetailsCreateArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DeliveryDetails.
     *     @param {DeliveryDetailsCreateManyArgs} args - Arguments to create many DeliveryDetails.
     *     @example
     *     // Create many DeliveryDetails
     *     const deliveryDetails = await prisma.deliveryDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DeliveryDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeliveryDetails.
     * @param {DeliveryDetailsDeleteArgs} args - Arguments to delete one DeliveryDetails.
     * @example
     * // Delete one DeliveryDetails
     * const DeliveryDetails = await prisma.deliveryDetails.delete({
     *   where: {
     *     // ... filter to delete one DeliveryDetails
     *   }
     * })
     * 
    **/
    delete<T extends DeliveryDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDetailsDeleteArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DeliveryDetails.
     * @param {DeliveryDetailsUpdateArgs} args - Arguments to update one DeliveryDetails.
     * @example
     * // Update one DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeliveryDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDetailsUpdateArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DeliveryDetails.
     * @param {DeliveryDetailsDeleteManyArgs} args - Arguments to filter DeliveryDetails to delete.
     * @example
     * // Delete a few DeliveryDetails
     * const { count } = await prisma.deliveryDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeliveryDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeliveryDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeliveryDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeliveryDetails.
     * @param {DeliveryDetailsUpsertArgs} args - Arguments to update or create a DeliveryDetails.
     * @example
     * // Update or create a DeliveryDetails
     * const deliveryDetails = await prisma.deliveryDetails.upsert({
     *   create: {
     *     // ... data to create a DeliveryDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryDetails we want to update
     *   }
     * })
    **/
    upsert<T extends DeliveryDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DeliveryDetailsUpsertArgs<ExtArgs>>
    ): Prisma__DeliveryDetailsClient<$Result.GetResult<Prisma.$DeliveryDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DeliveryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryDetailsCountArgs} args - Arguments to filter DeliveryDetails to count.
     * @example
     * // Count the number of DeliveryDetails
     * const count = await prisma.deliveryDetails.count({
     *   where: {
     *     // ... the filter for the DeliveryDetails we want to count
     *   }
     * })
    **/
    count<T extends DeliveryDetailsCountArgs>(
      args?: Subset<T, DeliveryDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryDetailsAggregateArgs>(args: Subset<T, DeliveryDetailsAggregateArgs>): Prisma.PrismaPromise<GetDeliveryDetailsAggregateType<T>>

    /**
     * Group by DeliveryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryDetailsGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryDetails model
   */
  readonly fields: DeliveryDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DeliveryDetails model
   */ 
  interface DeliveryDetailsFieldRefs {
    readonly id: FieldRef<"DeliveryDetails", 'Int'>
    readonly orderId: FieldRef<"DeliveryDetails", 'Int'>
    readonly deliveredQuantity: FieldRef<"DeliveryDetails", 'Float'>
    readonly createdAt: FieldRef<"DeliveryDetails", 'DateTime'>
    readonly deliveredBy: FieldRef<"DeliveryDetails", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DeliveryDetails findUnique
   */
  export type DeliveryDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryDetails to fetch.
     */
    where: DeliveryDetailsWhereUniqueInput
  }


  /**
   * DeliveryDetails findUniqueOrThrow
   */
  export type DeliveryDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryDetails to fetch.
     */
    where: DeliveryDetailsWhereUniqueInput
  }


  /**
   * DeliveryDetails findFirst
   */
  export type DeliveryDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryDetails to fetch.
     */
    where?: DeliveryDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryDetails to fetch.
     */
    orderBy?: DeliveryDetailsOrderByWithRelationInput | DeliveryDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryDetails.
     */
    cursor?: DeliveryDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryDetails.
     */
    distinct?: DeliveryDetailsScalarFieldEnum | DeliveryDetailsScalarFieldEnum[]
  }


  /**
   * DeliveryDetails findFirstOrThrow
   */
  export type DeliveryDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryDetails to fetch.
     */
    where?: DeliveryDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryDetails to fetch.
     */
    orderBy?: DeliveryDetailsOrderByWithRelationInput | DeliveryDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryDetails.
     */
    cursor?: DeliveryDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryDetails.
     */
    distinct?: DeliveryDetailsScalarFieldEnum | DeliveryDetailsScalarFieldEnum[]
  }


  /**
   * DeliveryDetails findMany
   */
  export type DeliveryDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryDetails to fetch.
     */
    where?: DeliveryDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryDetails to fetch.
     */
    orderBy?: DeliveryDetailsOrderByWithRelationInput | DeliveryDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryDetails.
     */
    cursor?: DeliveryDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryDetails.
     */
    skip?: number
    distinct?: DeliveryDetailsScalarFieldEnum | DeliveryDetailsScalarFieldEnum[]
  }


  /**
   * DeliveryDetails create
   */
  export type DeliveryDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryDetails.
     */
    data: XOR<DeliveryDetailsCreateInput, DeliveryDetailsUncheckedCreateInput>
  }


  /**
   * DeliveryDetails createMany
   */
  export type DeliveryDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryDetails.
     */
    data: DeliveryDetailsCreateManyInput | DeliveryDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DeliveryDetails update
   */
  export type DeliveryDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryDetails.
     */
    data: XOR<DeliveryDetailsUpdateInput, DeliveryDetailsUncheckedUpdateInput>
    /**
     * Choose, which DeliveryDetails to update.
     */
    where: DeliveryDetailsWhereUniqueInput
  }


  /**
   * DeliveryDetails updateMany
   */
  export type DeliveryDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryDetails.
     */
    data: XOR<DeliveryDetailsUpdateManyMutationInput, DeliveryDetailsUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryDetails to update
     */
    where?: DeliveryDetailsWhereInput
  }


  /**
   * DeliveryDetails upsert
   */
  export type DeliveryDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryDetails to update in case it exists.
     */
    where: DeliveryDetailsWhereUniqueInput
    /**
     * In case the DeliveryDetails found by the `where` argument doesn't exist, create a new DeliveryDetails with this data.
     */
    create: XOR<DeliveryDetailsCreateInput, DeliveryDetailsUncheckedCreateInput>
    /**
     * In case the DeliveryDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryDetailsUpdateInput, DeliveryDetailsUncheckedUpdateInput>
  }


  /**
   * DeliveryDetails delete
   */
  export type DeliveryDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
    /**
     * Filter which DeliveryDetails to delete.
     */
    where: DeliveryDetailsWhereUniqueInput
  }


  /**
   * DeliveryDetails deleteMany
   */
  export type DeliveryDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryDetails to delete
     */
    where?: DeliveryDetailsWhereInput
  }


  /**
   * DeliveryDetails without action
   */
  export type DeliveryDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryDetails
     */
    select?: DeliveryDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryDetailsInclude<ExtArgs> | null
  }



  /**
   * Model ProformaInvoice
   */

  export type AggregateProformaInvoice = {
    _count: ProformaInvoiceCountAggregateOutputType | null
    _avg: ProformaInvoiceAvgAggregateOutputType | null
    _sum: ProformaInvoiceSumAggregateOutputType | null
    _min: ProformaInvoiceMinAggregateOutputType | null
    _max: ProformaInvoiceMaxAggregateOutputType | null
  }

  export type ProformaInvoiceAvgAggregateOutputType = {
    id: number | null
    fabricsId: number | null
    unitPrice: number | null
    totalQuantity: number | null
    amount: number | null
    companyId: number | null
    buyerId: number | null
    totalPIAmount: number | null
    totalPIQuantity: number | null
  }

  export type ProformaInvoiceSumAggregateOutputType = {
    id: number | null
    fabricsId: number | null
    unitPrice: number | null
    totalQuantity: number | null
    amount: number | null
    companyId: number | null
    buyerId: number | null
    totalPIAmount: number | null
    totalPIQuantity: number | null
  }

  export type ProformaInvoiceMinAggregateOutputType = {
    id: number | null
    style: string | null
    fabricsName: string | null
    fabricsId: number | null
    description: string | null
    finishDia: string | null
    unitPrice: number | null
    totalQuantity: number | null
    amount: number | null
    companyId: number | null
    buyerId: number | null
    containOrders: string | null
    piName: string | null
    piNumber: string | null
    totalPIAmount: number | null
    totalPIQuantity: number | null
    createdAt: Date | null
  }

  export type ProformaInvoiceMaxAggregateOutputType = {
    id: number | null
    style: string | null
    fabricsName: string | null
    fabricsId: number | null
    description: string | null
    finishDia: string | null
    unitPrice: number | null
    totalQuantity: number | null
    amount: number | null
    companyId: number | null
    buyerId: number | null
    containOrders: string | null
    piName: string | null
    piNumber: string | null
    totalPIAmount: number | null
    totalPIQuantity: number | null
    createdAt: Date | null
  }

  export type ProformaInvoiceCountAggregateOutputType = {
    id: number
    style: number
    fabricsName: number
    fabricsId: number
    description: number
    finishDia: number
    unitPrice: number
    totalQuantity: number
    amount: number
    companyId: number
    buyerId: number
    containOrders: number
    piName: number
    piNumber: number
    totalPIAmount: number
    totalPIQuantity: number
    createdAt: number
    _all: number
  }


  export type ProformaInvoiceAvgAggregateInputType = {
    id?: true
    fabricsId?: true
    unitPrice?: true
    totalQuantity?: true
    amount?: true
    companyId?: true
    buyerId?: true
    totalPIAmount?: true
    totalPIQuantity?: true
  }

  export type ProformaInvoiceSumAggregateInputType = {
    id?: true
    fabricsId?: true
    unitPrice?: true
    totalQuantity?: true
    amount?: true
    companyId?: true
    buyerId?: true
    totalPIAmount?: true
    totalPIQuantity?: true
  }

  export type ProformaInvoiceMinAggregateInputType = {
    id?: true
    style?: true
    fabricsName?: true
    fabricsId?: true
    description?: true
    finishDia?: true
    unitPrice?: true
    totalQuantity?: true
    amount?: true
    companyId?: true
    buyerId?: true
    containOrders?: true
    piName?: true
    piNumber?: true
    totalPIAmount?: true
    totalPIQuantity?: true
    createdAt?: true
  }

  export type ProformaInvoiceMaxAggregateInputType = {
    id?: true
    style?: true
    fabricsName?: true
    fabricsId?: true
    description?: true
    finishDia?: true
    unitPrice?: true
    totalQuantity?: true
    amount?: true
    companyId?: true
    buyerId?: true
    containOrders?: true
    piName?: true
    piNumber?: true
    totalPIAmount?: true
    totalPIQuantity?: true
    createdAt?: true
  }

  export type ProformaInvoiceCountAggregateInputType = {
    id?: true
    style?: true
    fabricsName?: true
    fabricsId?: true
    description?: true
    finishDia?: true
    unitPrice?: true
    totalQuantity?: true
    amount?: true
    companyId?: true
    buyerId?: true
    containOrders?: true
    piName?: true
    piNumber?: true
    totalPIAmount?: true
    totalPIQuantity?: true
    createdAt?: true
    _all?: true
  }

  export type ProformaInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProformaInvoice to aggregate.
     */
    where?: ProformaInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProformaInvoices to fetch.
     */
    orderBy?: ProformaInvoiceOrderByWithRelationInput | ProformaInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProformaInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProformaInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProformaInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProformaInvoices
    **/
    _count?: true | ProformaInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProformaInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProformaInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProformaInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProformaInvoiceMaxAggregateInputType
  }

  export type GetProformaInvoiceAggregateType<T extends ProformaInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateProformaInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProformaInvoice[P]>
      : GetScalarType<T[P], AggregateProformaInvoice[P]>
  }




  export type ProformaInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProformaInvoiceWhereInput
    orderBy?: ProformaInvoiceOrderByWithAggregationInput | ProformaInvoiceOrderByWithAggregationInput[]
    by: ProformaInvoiceScalarFieldEnum[] | ProformaInvoiceScalarFieldEnum
    having?: ProformaInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProformaInvoiceCountAggregateInputType | true
    _avg?: ProformaInvoiceAvgAggregateInputType
    _sum?: ProformaInvoiceSumAggregateInputType
    _min?: ProformaInvoiceMinAggregateInputType
    _max?: ProformaInvoiceMaxAggregateInputType
  }

  export type ProformaInvoiceGroupByOutputType = {
    id: number
    style: string | null
    fabricsName: string
    fabricsId: number | null
    description: string | null
    finishDia: string | null
    unitPrice: number
    totalQuantity: number | null
    amount: number
    companyId: number
    buyerId: number | null
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt: Date
    _count: ProformaInvoiceCountAggregateOutputType | null
    _avg: ProformaInvoiceAvgAggregateOutputType | null
    _sum: ProformaInvoiceSumAggregateOutputType | null
    _min: ProformaInvoiceMinAggregateOutputType | null
    _max: ProformaInvoiceMaxAggregateOutputType | null
  }

  type GetProformaInvoiceGroupByPayload<T extends ProformaInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProformaInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProformaInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProformaInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProformaInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type ProformaInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    style?: boolean
    fabricsName?: boolean
    fabricsId?: boolean
    description?: boolean
    finishDia?: boolean
    unitPrice?: boolean
    totalQuantity?: boolean
    amount?: boolean
    companyId?: boolean
    buyerId?: boolean
    containOrders?: boolean
    piName?: boolean
    piNumber?: boolean
    totalPIAmount?: boolean
    totalPIQuantity?: boolean
    createdAt?: boolean
    fabricsType?: boolean | ProformaInvoice$fabricsTypeArgs<ExtArgs>
    buyer?: boolean | ProformaInvoice$buyerArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proformaInvoice"]>

  export type ProformaInvoiceSelectScalar = {
    id?: boolean
    style?: boolean
    fabricsName?: boolean
    fabricsId?: boolean
    description?: boolean
    finishDia?: boolean
    unitPrice?: boolean
    totalQuantity?: boolean
    amount?: boolean
    companyId?: boolean
    buyerId?: boolean
    containOrders?: boolean
    piName?: boolean
    piNumber?: boolean
    totalPIAmount?: boolean
    totalPIQuantity?: boolean
    createdAt?: boolean
  }

  export type ProformaInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fabricsType?: boolean | ProformaInvoice$fabricsTypeArgs<ExtArgs>
    buyer?: boolean | ProformaInvoice$buyerArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }


  export type $ProformaInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProformaInvoice"
    objects: {
      fabricsType: Prisma.$FabricsTypePayload<ExtArgs> | null
      buyer: Prisma.$BuyerPayload<ExtArgs> | null
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      style: string | null
      fabricsName: string
      fabricsId: number | null
      description: string | null
      finishDia: string | null
      unitPrice: number
      totalQuantity: number | null
      amount: number
      companyId: number
      buyerId: number | null
      containOrders: string
      piName: string
      piNumber: string
      totalPIAmount: number
      totalPIQuantity: number
      createdAt: Date
    }, ExtArgs["result"]["proformaInvoice"]>
    composites: {}
  }


  type ProformaInvoiceGetPayload<S extends boolean | null | undefined | ProformaInvoiceDefaultArgs> = $Result.GetResult<Prisma.$ProformaInvoicePayload, S>

  type ProformaInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProformaInvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProformaInvoiceCountAggregateInputType | true
    }

  export interface ProformaInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProformaInvoice'], meta: { name: 'ProformaInvoice' } }
    /**
     * Find zero or one ProformaInvoice that matches the filter.
     * @param {ProformaInvoiceFindUniqueArgs} args - Arguments to find a ProformaInvoice
     * @example
     * // Get one ProformaInvoice
     * const proformaInvoice = await prisma.proformaInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProformaInvoiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProformaInvoiceFindUniqueArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProformaInvoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProformaInvoiceFindUniqueOrThrowArgs} args - Arguments to find a ProformaInvoice
     * @example
     * // Get one ProformaInvoice
     * const proformaInvoice = await prisma.proformaInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProformaInvoiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProformaInvoiceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProformaInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProformaInvoiceFindFirstArgs} args - Arguments to find a ProformaInvoice
     * @example
     * // Get one ProformaInvoice
     * const proformaInvoice = await prisma.proformaInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProformaInvoiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProformaInvoiceFindFirstArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProformaInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProformaInvoiceFindFirstOrThrowArgs} args - Arguments to find a ProformaInvoice
     * @example
     * // Get one ProformaInvoice
     * const proformaInvoice = await prisma.proformaInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProformaInvoiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProformaInvoiceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProformaInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProformaInvoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProformaInvoices
     * const proformaInvoices = await prisma.proformaInvoice.findMany()
     * 
     * // Get first 10 ProformaInvoices
     * const proformaInvoices = await prisma.proformaInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proformaInvoiceWithIdOnly = await prisma.proformaInvoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProformaInvoiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProformaInvoiceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProformaInvoice.
     * @param {ProformaInvoiceCreateArgs} args - Arguments to create a ProformaInvoice.
     * @example
     * // Create one ProformaInvoice
     * const ProformaInvoice = await prisma.proformaInvoice.create({
     *   data: {
     *     // ... data to create a ProformaInvoice
     *   }
     * })
     * 
    **/
    create<T extends ProformaInvoiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProformaInvoiceCreateArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProformaInvoices.
     *     @param {ProformaInvoiceCreateManyArgs} args - Arguments to create many ProformaInvoices.
     *     @example
     *     // Create many ProformaInvoices
     *     const proformaInvoice = await prisma.proformaInvoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProformaInvoiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProformaInvoiceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProformaInvoice.
     * @param {ProformaInvoiceDeleteArgs} args - Arguments to delete one ProformaInvoice.
     * @example
     * // Delete one ProformaInvoice
     * const ProformaInvoice = await prisma.proformaInvoice.delete({
     *   where: {
     *     // ... filter to delete one ProformaInvoice
     *   }
     * })
     * 
    **/
    delete<T extends ProformaInvoiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProformaInvoiceDeleteArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProformaInvoice.
     * @param {ProformaInvoiceUpdateArgs} args - Arguments to update one ProformaInvoice.
     * @example
     * // Update one ProformaInvoice
     * const proformaInvoice = await prisma.proformaInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProformaInvoiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProformaInvoiceUpdateArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProformaInvoices.
     * @param {ProformaInvoiceDeleteManyArgs} args - Arguments to filter ProformaInvoices to delete.
     * @example
     * // Delete a few ProformaInvoices
     * const { count } = await prisma.proformaInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProformaInvoiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProformaInvoiceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProformaInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProformaInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProformaInvoices
     * const proformaInvoice = await prisma.proformaInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProformaInvoiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProformaInvoiceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProformaInvoice.
     * @param {ProformaInvoiceUpsertArgs} args - Arguments to update or create a ProformaInvoice.
     * @example
     * // Update or create a ProformaInvoice
     * const proformaInvoice = await prisma.proformaInvoice.upsert({
     *   create: {
     *     // ... data to create a ProformaInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProformaInvoice we want to update
     *   }
     * })
    **/
    upsert<T extends ProformaInvoiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProformaInvoiceUpsertArgs<ExtArgs>>
    ): Prisma__ProformaInvoiceClient<$Result.GetResult<Prisma.$ProformaInvoicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProformaInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProformaInvoiceCountArgs} args - Arguments to filter ProformaInvoices to count.
     * @example
     * // Count the number of ProformaInvoices
     * const count = await prisma.proformaInvoice.count({
     *   where: {
     *     // ... the filter for the ProformaInvoices we want to count
     *   }
     * })
    **/
    count<T extends ProformaInvoiceCountArgs>(
      args?: Subset<T, ProformaInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProformaInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProformaInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProformaInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProformaInvoiceAggregateArgs>(args: Subset<T, ProformaInvoiceAggregateArgs>): Prisma.PrismaPromise<GetProformaInvoiceAggregateType<T>>

    /**
     * Group by ProformaInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProformaInvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProformaInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProformaInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: ProformaInvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProformaInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProformaInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProformaInvoice model
   */
  readonly fields: ProformaInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProformaInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProformaInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fabricsType<T extends ProformaInvoice$fabricsTypeArgs<ExtArgs> = {}>(args?: Subset<T, ProformaInvoice$fabricsTypeArgs<ExtArgs>>): Prisma__FabricsTypeClient<$Result.GetResult<Prisma.$FabricsTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    buyer<T extends ProformaInvoice$buyerArgs<ExtArgs> = {}>(args?: Subset<T, ProformaInvoice$buyerArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProformaInvoice model
   */ 
  interface ProformaInvoiceFieldRefs {
    readonly id: FieldRef<"ProformaInvoice", 'Int'>
    readonly style: FieldRef<"ProformaInvoice", 'String'>
    readonly fabricsName: FieldRef<"ProformaInvoice", 'String'>
    readonly fabricsId: FieldRef<"ProformaInvoice", 'Int'>
    readonly description: FieldRef<"ProformaInvoice", 'String'>
    readonly finishDia: FieldRef<"ProformaInvoice", 'String'>
    readonly unitPrice: FieldRef<"ProformaInvoice", 'Float'>
    readonly totalQuantity: FieldRef<"ProformaInvoice", 'Int'>
    readonly amount: FieldRef<"ProformaInvoice", 'Float'>
    readonly companyId: FieldRef<"ProformaInvoice", 'Int'>
    readonly buyerId: FieldRef<"ProformaInvoice", 'Int'>
    readonly containOrders: FieldRef<"ProformaInvoice", 'String'>
    readonly piName: FieldRef<"ProformaInvoice", 'String'>
    readonly piNumber: FieldRef<"ProformaInvoice", 'String'>
    readonly totalPIAmount: FieldRef<"ProformaInvoice", 'Float'>
    readonly totalPIQuantity: FieldRef<"ProformaInvoice", 'Float'>
    readonly createdAt: FieldRef<"ProformaInvoice", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProformaInvoice findUnique
   */
  export type ProformaInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProformaInvoice to fetch.
     */
    where: ProformaInvoiceWhereUniqueInput
  }


  /**
   * ProformaInvoice findUniqueOrThrow
   */
  export type ProformaInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProformaInvoice to fetch.
     */
    where: ProformaInvoiceWhereUniqueInput
  }


  /**
   * ProformaInvoice findFirst
   */
  export type ProformaInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProformaInvoice to fetch.
     */
    where?: ProformaInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProformaInvoices to fetch.
     */
    orderBy?: ProformaInvoiceOrderByWithRelationInput | ProformaInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProformaInvoices.
     */
    cursor?: ProformaInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProformaInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProformaInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProformaInvoices.
     */
    distinct?: ProformaInvoiceScalarFieldEnum | ProformaInvoiceScalarFieldEnum[]
  }


  /**
   * ProformaInvoice findFirstOrThrow
   */
  export type ProformaInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProformaInvoice to fetch.
     */
    where?: ProformaInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProformaInvoices to fetch.
     */
    orderBy?: ProformaInvoiceOrderByWithRelationInput | ProformaInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProformaInvoices.
     */
    cursor?: ProformaInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProformaInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProformaInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProformaInvoices.
     */
    distinct?: ProformaInvoiceScalarFieldEnum | ProformaInvoiceScalarFieldEnum[]
  }


  /**
   * ProformaInvoice findMany
   */
  export type ProformaInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProformaInvoices to fetch.
     */
    where?: ProformaInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProformaInvoices to fetch.
     */
    orderBy?: ProformaInvoiceOrderByWithRelationInput | ProformaInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProformaInvoices.
     */
    cursor?: ProformaInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProformaInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProformaInvoices.
     */
    skip?: number
    distinct?: ProformaInvoiceScalarFieldEnum | ProformaInvoiceScalarFieldEnum[]
  }


  /**
   * ProformaInvoice create
   */
  export type ProformaInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProformaInvoice.
     */
    data: XOR<ProformaInvoiceCreateInput, ProformaInvoiceUncheckedCreateInput>
  }


  /**
   * ProformaInvoice createMany
   */
  export type ProformaInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProformaInvoices.
     */
    data: ProformaInvoiceCreateManyInput | ProformaInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProformaInvoice update
   */
  export type ProformaInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProformaInvoice.
     */
    data: XOR<ProformaInvoiceUpdateInput, ProformaInvoiceUncheckedUpdateInput>
    /**
     * Choose, which ProformaInvoice to update.
     */
    where: ProformaInvoiceWhereUniqueInput
  }


  /**
   * ProformaInvoice updateMany
   */
  export type ProformaInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProformaInvoices.
     */
    data: XOR<ProformaInvoiceUpdateManyMutationInput, ProformaInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which ProformaInvoices to update
     */
    where?: ProformaInvoiceWhereInput
  }


  /**
   * ProformaInvoice upsert
   */
  export type ProformaInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProformaInvoice to update in case it exists.
     */
    where: ProformaInvoiceWhereUniqueInput
    /**
     * In case the ProformaInvoice found by the `where` argument doesn't exist, create a new ProformaInvoice with this data.
     */
    create: XOR<ProformaInvoiceCreateInput, ProformaInvoiceUncheckedCreateInput>
    /**
     * In case the ProformaInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProformaInvoiceUpdateInput, ProformaInvoiceUncheckedUpdateInput>
  }


  /**
   * ProformaInvoice delete
   */
  export type ProformaInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
    /**
     * Filter which ProformaInvoice to delete.
     */
    where: ProformaInvoiceWhereUniqueInput
  }


  /**
   * ProformaInvoice deleteMany
   */
  export type ProformaInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProformaInvoices to delete
     */
    where?: ProformaInvoiceWhereInput
  }


  /**
   * ProformaInvoice.fabricsType
   */
  export type ProformaInvoice$fabricsTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FabricsType
     */
    select?: FabricsTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FabricsTypeInclude<ExtArgs> | null
    where?: FabricsTypeWhereInput
  }


  /**
   * ProformaInvoice.buyer
   */
  export type ProformaInvoice$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuyerInclude<ExtArgs> | null
    where?: BuyerWhereInput
  }


  /**
   * ProformaInvoice without action
   */
  export type ProformaInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProformaInvoice
     */
    select?: ProformaInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProformaInvoiceInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    jobTitle: 'jobTitle',
    description: 'description',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    location: 'location',
    email: 'email',
    contact: 'contact',
    shortForm: 'shortForm'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const BuyerScalarFieldEnum: {
    id: 'id',
    buyerName: 'buyerName',
    companyId: 'companyId'
  };

  export type BuyerScalarFieldEnum = (typeof BuyerScalarFieldEnum)[keyof typeof BuyerScalarFieldEnum]


  export const FabricsTypeScalarFieldEnum: {
    id: 'id',
    fabricsName: 'fabricsName',
    description: 'description'
  };

  export type FabricsTypeScalarFieldEnum = (typeof FabricsTypeScalarFieldEnum)[keyof typeof FabricsTypeScalarFieldEnum]


  export const OrderScalarFieldEnum: {
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

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
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

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const YarnInformationScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    bookingQuantity: 'bookingQuantity',
    restQuantity: 'restQuantity',
    yarn: 'yarn',
    orderId: 'orderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YarnInformationScalarFieldEnum = (typeof YarnInformationScalarFieldEnum)[keyof typeof YarnInformationScalarFieldEnum]


  export const YarnInformationWithDetailsScalarFieldEnum: {
    id: 'id',
    yarnInfoID: 'yarnInfoID',
    receivedQuantity: 'receivedQuantity',
    createdAt: 'createdAt'
  };

  export type YarnInformationWithDetailsScalarFieldEnum = (typeof YarnInformationWithDetailsScalarFieldEnum)[keyof typeof YarnInformationWithDetailsScalarFieldEnum]


  export const DeliveryDetailsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    deliveredQuantity: 'deliveredQuantity',
    createdAt: 'createdAt',
    deliveredBy: 'deliveredBy'
  };

  export type DeliveryDetailsScalarFieldEnum = (typeof DeliveryDetailsScalarFieldEnum)[keyof typeof DeliveryDetailsScalarFieldEnum]


  export const ProformaInvoiceScalarFieldEnum: {
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

  export type ProformaInvoiceScalarFieldEnum = (typeof ProformaInvoiceScalarFieldEnum)[keyof typeof ProformaInvoiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    bio?: StringNullableFilter<"Profile"> | string | null
    jobTitle?: StringNullableFilter<"Profile"> | string | null
    description?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    bio?: StringNullableFilter<"Profile"> | string | null
    jobTitle?: StringNullableFilter<"Profile"> | string | null
    description?: StringNullableFilter<"Profile"> | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    description?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    role?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isBlock?: BoolFilter<"User"> | boolean
    Post?: PostListRelationFilter
    user?: OrderListRelationFilter
    Profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isBlock?: SortOrder
    Post?: PostOrderByRelationAggregateInput
    user?: OrderOrderByRelationAggregateInput
    Profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    role?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isBlock?: BoolFilter<"User"> | boolean
    Post?: PostListRelationFilter
    user?: OrderListRelationFilter
    Profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isBlock?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isBlock?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    companyName?: StringFilter<"Company"> | string
    location?: StringFilter<"Company"> | string
    email?: StringNullableFilter<"Company"> | string | null
    contact?: StringNullableFilter<"Company"> | string | null
    shortForm?: StringNullableFilter<"Company"> | string | null
    yarnDetails?: YarnInformationListRelationFilter
    buyers?: BuyerListRelationFilter
    orderWithCompanyNames?: OrderListRelationFilter
    proformaInvoices?: ProformaInvoiceListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    shortForm?: SortOrderInput | SortOrder
    yarnDetails?: yarnInformationOrderByRelationAggregateInput
    buyers?: BuyerOrderByRelationAggregateInput
    orderWithCompanyNames?: OrderOrderByRelationAggregateInput
    proformaInvoices?: ProformaInvoiceOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    companyName?: string
    email?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    location?: StringFilter<"Company"> | string
    contact?: StringNullableFilter<"Company"> | string | null
    shortForm?: StringNullableFilter<"Company"> | string | null
    yarnDetails?: YarnInformationListRelationFilter
    buyers?: BuyerListRelationFilter
    orderWithCompanyNames?: OrderListRelationFilter
    proformaInvoices?: ProformaInvoiceListRelationFilter
  }, "id" | "companyName" | "email">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    email?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    shortForm?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    companyName?: StringWithAggregatesFilter<"Company"> | string
    location?: StringWithAggregatesFilter<"Company"> | string
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    contact?: StringNullableWithAggregatesFilter<"Company"> | string | null
    shortForm?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type BuyerWhereInput = {
    AND?: BuyerWhereInput | BuyerWhereInput[]
    OR?: BuyerWhereInput[]
    NOT?: BuyerWhereInput | BuyerWhereInput[]
    id?: IntFilter<"Buyer"> | number
    buyerName?: StringNullableFilter<"Buyer"> | string | null
    companyId?: IntFilter<"Buyer"> | number
    orders?: OrderListRelationFilter
    proformaInvoices?: ProformaInvoiceListRelationFilter
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type BuyerOrderByWithRelationInput = {
    id?: SortOrder
    buyerName?: SortOrderInput | SortOrder
    companyId?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    proformaInvoices?: ProformaInvoiceOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
  }

  export type BuyerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BuyerWhereInput | BuyerWhereInput[]
    OR?: BuyerWhereInput[]
    NOT?: BuyerWhereInput | BuyerWhereInput[]
    buyerName?: StringNullableFilter<"Buyer"> | string | null
    companyId?: IntFilter<"Buyer"> | number
    orders?: OrderListRelationFilter
    proformaInvoices?: ProformaInvoiceListRelationFilter
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type BuyerOrderByWithAggregationInput = {
    id?: SortOrder
    buyerName?: SortOrderInput | SortOrder
    companyId?: SortOrder
    _count?: BuyerCountOrderByAggregateInput
    _avg?: BuyerAvgOrderByAggregateInput
    _max?: BuyerMaxOrderByAggregateInput
    _min?: BuyerMinOrderByAggregateInput
    _sum?: BuyerSumOrderByAggregateInput
  }

  export type BuyerScalarWhereWithAggregatesInput = {
    AND?: BuyerScalarWhereWithAggregatesInput | BuyerScalarWhereWithAggregatesInput[]
    OR?: BuyerScalarWhereWithAggregatesInput[]
    NOT?: BuyerScalarWhereWithAggregatesInput | BuyerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Buyer"> | number
    buyerName?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    companyId?: IntWithAggregatesFilter<"Buyer"> | number
  }

  export type FabricsTypeWhereInput = {
    AND?: FabricsTypeWhereInput | FabricsTypeWhereInput[]
    OR?: FabricsTypeWhereInput[]
    NOT?: FabricsTypeWhereInput | FabricsTypeWhereInput[]
    id?: IntFilter<"FabricsType"> | number
    fabricsName?: StringFilter<"FabricsType"> | string
    description?: StringNullableFilter<"FabricsType"> | string | null
    orders?: OrderListRelationFilter
    proformaInvoices?: ProformaInvoiceListRelationFilter
  }

  export type FabricsTypeOrderByWithRelationInput = {
    id?: SortOrder
    fabricsName?: SortOrder
    description?: SortOrderInput | SortOrder
    orders?: OrderOrderByRelationAggregateInput
    proformaInvoices?: ProformaInvoiceOrderByRelationAggregateInput
  }

  export type FabricsTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FabricsTypeWhereInput | FabricsTypeWhereInput[]
    OR?: FabricsTypeWhereInput[]
    NOT?: FabricsTypeWhereInput | FabricsTypeWhereInput[]
    fabricsName?: StringFilter<"FabricsType"> | string
    description?: StringNullableFilter<"FabricsType"> | string | null
    orders?: OrderListRelationFilter
    proformaInvoices?: ProformaInvoiceListRelationFilter
  }, "id">

  export type FabricsTypeOrderByWithAggregationInput = {
    id?: SortOrder
    fabricsName?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: FabricsTypeCountOrderByAggregateInput
    _avg?: FabricsTypeAvgOrderByAggregateInput
    _max?: FabricsTypeMaxOrderByAggregateInput
    _min?: FabricsTypeMinOrderByAggregateInput
    _sum?: FabricsTypeSumOrderByAggregateInput
  }

  export type FabricsTypeScalarWhereWithAggregatesInput = {
    AND?: FabricsTypeScalarWhereWithAggregatesInput | FabricsTypeScalarWhereWithAggregatesInput[]
    OR?: FabricsTypeScalarWhereWithAggregatesInput[]
    NOT?: FabricsTypeScalarWhereWithAggregatesInput | FabricsTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FabricsType"> | number
    fabricsName?: StringWithAggregatesFilter<"FabricsType"> | string
    description?: StringNullableWithAggregatesFilter<"FabricsType"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    orderNumber?: StringFilter<"Order"> | string
    companyId?: IntFilter<"Order"> | number
    buyerId?: IntNullableFilter<"Order"> | number | null
    companyName?: StringNullableFilter<"Order"> | string | null
    fabricsName?: StringFilter<"Order"> | string
    fabricsId?: IntNullableFilter<"Order"> | number | null
    buyerName?: StringFilter<"Order"> | string
    season?: StringNullableFilter<"Order"> | string | null
    pmNumber?: StringNullableFilter<"Order"> | string | null
    poNumber?: StringNullableFilter<"Order"> | string | null
    boNumber?: StringNullableFilter<"Order"> | string | null
    invoiceNumber?: StringNullableFilter<"Order"> | string | null
    orderedDate?: DateTimeFilter<"Order"> | Date | string
    targetDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    orderQuantity?: FloatFilter<"Order"> | number
    restQuantity?: FloatFilter<"Order"> | number
    updatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    status?: StringNullableFilter<"Order"> | string | null
    isProformaInvoiceCreated?: BoolFilter<"Order"> | boolean
    userId?: IntNullableFilter<"Order"> | number | null
    proformaInvoiceId?: StringNullableFilter<"Order"> | string | null
    details?: XOR<OrderDetailsNullableRelationFilter, OrderDetailsWhereInput> | null
    yarnDetails?: YarnInformationListRelationFilter
    deliveryDetails?: DeliveryDetailsListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    buyer?: XOR<BuyerNullableRelationFilter, BuyerWhereInput> | null
    fabricsType?: XOR<FabricsTypeNullableRelationFilter, FabricsTypeWhereInput> | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrderInput | SortOrder
    buyerName?: SortOrder
    season?: SortOrderInput | SortOrder
    pmNumber?: SortOrderInput | SortOrder
    poNumber?: SortOrderInput | SortOrder
    boNumber?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    orderedDate?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    orderQuantity?: SortOrder
    restQuantity?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isProformaInvoiceCreated?: SortOrder
    userId?: SortOrderInput | SortOrder
    proformaInvoiceId?: SortOrderInput | SortOrder
    details?: OrderDetailsOrderByWithRelationInput
    yarnDetails?: yarnInformationOrderByRelationAggregateInput
    deliveryDetails?: DeliveryDetailsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    buyer?: BuyerOrderByWithRelationInput
    fabricsType?: FabricsTypeOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    companyId?: IntFilter<"Order"> | number
    buyerId?: IntNullableFilter<"Order"> | number | null
    companyName?: StringNullableFilter<"Order"> | string | null
    fabricsName?: StringFilter<"Order"> | string
    fabricsId?: IntNullableFilter<"Order"> | number | null
    buyerName?: StringFilter<"Order"> | string
    season?: StringNullableFilter<"Order"> | string | null
    pmNumber?: StringNullableFilter<"Order"> | string | null
    poNumber?: StringNullableFilter<"Order"> | string | null
    boNumber?: StringNullableFilter<"Order"> | string | null
    invoiceNumber?: StringNullableFilter<"Order"> | string | null
    orderedDate?: DateTimeFilter<"Order"> | Date | string
    targetDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    orderQuantity?: FloatFilter<"Order"> | number
    restQuantity?: FloatFilter<"Order"> | number
    updatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    status?: StringNullableFilter<"Order"> | string | null
    isProformaInvoiceCreated?: BoolFilter<"Order"> | boolean
    userId?: IntNullableFilter<"Order"> | number | null
    proformaInvoiceId?: StringNullableFilter<"Order"> | string | null
    details?: XOR<OrderDetailsNullableRelationFilter, OrderDetailsWhereInput> | null
    yarnDetails?: YarnInformationListRelationFilter
    deliveryDetails?: DeliveryDetailsListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    buyer?: XOR<BuyerNullableRelationFilter, BuyerWhereInput> | null
    fabricsType?: XOR<FabricsTypeNullableRelationFilter, FabricsTypeWhereInput> | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrderInput | SortOrder
    buyerName?: SortOrder
    season?: SortOrderInput | SortOrder
    pmNumber?: SortOrderInput | SortOrder
    poNumber?: SortOrderInput | SortOrder
    boNumber?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    orderedDate?: SortOrder
    targetDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    orderQuantity?: SortOrder
    restQuantity?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isProformaInvoiceCreated?: SortOrder
    userId?: SortOrderInput | SortOrder
    proformaInvoiceId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    companyId?: IntWithAggregatesFilter<"Order"> | number
    buyerId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    companyName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    fabricsName?: StringWithAggregatesFilter<"Order"> | string
    fabricsId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    buyerName?: StringWithAggregatesFilter<"Order"> | string
    season?: StringNullableWithAggregatesFilter<"Order"> | string | null
    pmNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    poNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    boNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    invoiceNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    orderedDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    targetDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    orderQuantity?: FloatWithAggregatesFilter<"Order"> | number
    restQuantity?: FloatWithAggregatesFilter<"Order"> | number
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Order"> | string | null
    isProformaInvoiceCreated?: BoolWithAggregatesFilter<"Order"> | boolean
    userId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    proformaInvoiceId?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    orderId?: IntNullableFilter<"OrderDetails"> | number | null
    style?: StringNullableFilter<"OrderDetails"> | string | null
    yarnCount?: StringNullableFilter<"OrderDetails"> | string | null
    yarnBrand?: StringNullableFilter<"OrderDetails"> | string | null
    yarnLot?: StringNullableFilter<"OrderDetails"> | string | null
    lycraCount?: StringNullableFilter<"OrderDetails"> | string | null
    lycraBrand?: StringNullableFilter<"OrderDetails"> | string | null
    lycraLot?: StringNullableFilter<"OrderDetails"> | string | null
    polyStarCount?: StringNullableFilter<"OrderDetails"> | string | null
    polyStarBrand?: StringNullableFilter<"OrderDetails"> | string | null
    polyStarLot?: StringNullableFilter<"OrderDetails"> | string | null
    mc_DIA?: StringNullableFilter<"OrderDetails"> | string | null
    e_DIA?: StringNullableFilter<"OrderDetails"> | string | null
    f_GSM?: StringNullableFilter<"OrderDetails"> | string | null
    sl?: StringNullableFilter<"OrderDetails"> | string | null
    colour?: StringNullableFilter<"OrderDetails"> | string | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }

  export type OrderDetailsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    style?: SortOrderInput | SortOrder
    yarnCount?: SortOrderInput | SortOrder
    yarnBrand?: SortOrderInput | SortOrder
    yarnLot?: SortOrderInput | SortOrder
    lycraCount?: SortOrderInput | SortOrder
    lycraBrand?: SortOrderInput | SortOrder
    lycraLot?: SortOrderInput | SortOrder
    polyStarCount?: SortOrderInput | SortOrder
    polyStarBrand?: SortOrderInput | SortOrder
    polyStarLot?: SortOrderInput | SortOrder
    mc_DIA?: SortOrderInput | SortOrder
    e_DIA?: SortOrderInput | SortOrder
    f_GSM?: SortOrderInput | SortOrder
    sl?: SortOrderInput | SortOrder
    colour?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    style?: StringNullableFilter<"OrderDetails"> | string | null
    yarnCount?: StringNullableFilter<"OrderDetails"> | string | null
    yarnBrand?: StringNullableFilter<"OrderDetails"> | string | null
    yarnLot?: StringNullableFilter<"OrderDetails"> | string | null
    lycraCount?: StringNullableFilter<"OrderDetails"> | string | null
    lycraBrand?: StringNullableFilter<"OrderDetails"> | string | null
    lycraLot?: StringNullableFilter<"OrderDetails"> | string | null
    polyStarCount?: StringNullableFilter<"OrderDetails"> | string | null
    polyStarBrand?: StringNullableFilter<"OrderDetails"> | string | null
    polyStarLot?: StringNullableFilter<"OrderDetails"> | string | null
    mc_DIA?: StringNullableFilter<"OrderDetails"> | string | null
    e_DIA?: StringNullableFilter<"OrderDetails"> | string | null
    f_GSM?: StringNullableFilter<"OrderDetails"> | string | null
    sl?: StringNullableFilter<"OrderDetails"> | string | null
    colour?: StringNullableFilter<"OrderDetails"> | string | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }, "id" | "orderId">

  export type OrderDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    style?: SortOrderInput | SortOrder
    yarnCount?: SortOrderInput | SortOrder
    yarnBrand?: SortOrderInput | SortOrder
    yarnLot?: SortOrderInput | SortOrder
    lycraCount?: SortOrderInput | SortOrder
    lycraBrand?: SortOrderInput | SortOrder
    lycraLot?: SortOrderInput | SortOrder
    polyStarCount?: SortOrderInput | SortOrder
    polyStarBrand?: SortOrderInput | SortOrder
    polyStarLot?: SortOrderInput | SortOrder
    mc_DIA?: SortOrderInput | SortOrder
    e_DIA?: SortOrderInput | SortOrder
    f_GSM?: SortOrderInput | SortOrder
    sl?: SortOrderInput | SortOrder
    colour?: SortOrderInput | SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _avg?: OrderDetailsAvgOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
    _sum?: OrderDetailsSumOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderDetails"> | number
    orderId?: IntNullableWithAggregatesFilter<"OrderDetails"> | number | null
    style?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    yarnCount?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    yarnBrand?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    yarnLot?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    lycraCount?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    lycraBrand?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    lycraLot?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    polyStarCount?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    polyStarBrand?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    polyStarLot?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    mc_DIA?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    e_DIA?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    f_GSM?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    sl?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    colour?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
  }

  export type yarnInformationWhereInput = {
    AND?: yarnInformationWhereInput | yarnInformationWhereInput[]
    OR?: yarnInformationWhereInput[]
    NOT?: yarnInformationWhereInput | yarnInformationWhereInput[]
    id?: IntFilter<"yarnInformation"> | number
    companyId?: IntFilter<"yarnInformation"> | number
    bookingQuantity?: FloatFilter<"yarnInformation"> | number
    restQuantity?: FloatFilter<"yarnInformation"> | number
    yarn?: StringNullableFilter<"yarnInformation"> | string | null
    orderId?: IntFilter<"yarnInformation"> | number
    createdAt?: DateTimeFilter<"yarnInformation"> | Date | string
    updatedAt?: DateTimeNullableFilter<"yarnInformation"> | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsListRelationFilter
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type yarnInformationOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    bookingQuantity?: SortOrder
    restQuantity?: SortOrder
    yarn?: SortOrderInput | SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    yarnInformationWithDetails?: YarnInformationWithDetailsOrderByRelationAggregateInput
    order?: OrderOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type yarnInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: yarnInformationWhereInput | yarnInformationWhereInput[]
    OR?: yarnInformationWhereInput[]
    NOT?: yarnInformationWhereInput | yarnInformationWhereInput[]
    companyId?: IntFilter<"yarnInformation"> | number
    bookingQuantity?: FloatFilter<"yarnInformation"> | number
    restQuantity?: FloatFilter<"yarnInformation"> | number
    yarn?: StringNullableFilter<"yarnInformation"> | string | null
    orderId?: IntFilter<"yarnInformation"> | number
    createdAt?: DateTimeFilter<"yarnInformation"> | Date | string
    updatedAt?: DateTimeNullableFilter<"yarnInformation"> | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsListRelationFilter
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type yarnInformationOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    bookingQuantity?: SortOrder
    restQuantity?: SortOrder
    yarn?: SortOrderInput | SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: yarnInformationCountOrderByAggregateInput
    _avg?: yarnInformationAvgOrderByAggregateInput
    _max?: yarnInformationMaxOrderByAggregateInput
    _min?: yarnInformationMinOrderByAggregateInput
    _sum?: yarnInformationSumOrderByAggregateInput
  }

  export type yarnInformationScalarWhereWithAggregatesInput = {
    AND?: yarnInformationScalarWhereWithAggregatesInput | yarnInformationScalarWhereWithAggregatesInput[]
    OR?: yarnInformationScalarWhereWithAggregatesInput[]
    NOT?: yarnInformationScalarWhereWithAggregatesInput | yarnInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"yarnInformation"> | number
    companyId?: IntWithAggregatesFilter<"yarnInformation"> | number
    bookingQuantity?: FloatWithAggregatesFilter<"yarnInformation"> | number
    restQuantity?: FloatWithAggregatesFilter<"yarnInformation"> | number
    yarn?: StringNullableWithAggregatesFilter<"yarnInformation"> | string | null
    orderId?: IntWithAggregatesFilter<"yarnInformation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"yarnInformation"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"yarnInformation"> | Date | string | null
  }

  export type YarnInformationWithDetailsWhereInput = {
    AND?: YarnInformationWithDetailsWhereInput | YarnInformationWithDetailsWhereInput[]
    OR?: YarnInformationWithDetailsWhereInput[]
    NOT?: YarnInformationWithDetailsWhereInput | YarnInformationWithDetailsWhereInput[]
    id?: IntFilter<"YarnInformationWithDetails"> | number
    yarnInfoID?: IntFilter<"YarnInformationWithDetails"> | number
    receivedQuantity?: FloatFilter<"YarnInformationWithDetails"> | number
    createdAt?: DateTimeFilter<"YarnInformationWithDetails"> | Date | string
    yarnInformation?: XOR<YarnInformationRelationFilter, yarnInformationWhereInput>
  }

  export type YarnInformationWithDetailsOrderByWithRelationInput = {
    id?: SortOrder
    yarnInfoID?: SortOrder
    receivedQuantity?: SortOrder
    createdAt?: SortOrder
    yarnInformation?: yarnInformationOrderByWithRelationInput
  }

  export type YarnInformationWithDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YarnInformationWithDetailsWhereInput | YarnInformationWithDetailsWhereInput[]
    OR?: YarnInformationWithDetailsWhereInput[]
    NOT?: YarnInformationWithDetailsWhereInput | YarnInformationWithDetailsWhereInput[]
    yarnInfoID?: IntFilter<"YarnInformationWithDetails"> | number
    receivedQuantity?: FloatFilter<"YarnInformationWithDetails"> | number
    createdAt?: DateTimeFilter<"YarnInformationWithDetails"> | Date | string
    yarnInformation?: XOR<YarnInformationRelationFilter, yarnInformationWhereInput>
  }, "id">

  export type YarnInformationWithDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    yarnInfoID?: SortOrder
    receivedQuantity?: SortOrder
    createdAt?: SortOrder
    _count?: YarnInformationWithDetailsCountOrderByAggregateInput
    _avg?: YarnInformationWithDetailsAvgOrderByAggregateInput
    _max?: YarnInformationWithDetailsMaxOrderByAggregateInput
    _min?: YarnInformationWithDetailsMinOrderByAggregateInput
    _sum?: YarnInformationWithDetailsSumOrderByAggregateInput
  }

  export type YarnInformationWithDetailsScalarWhereWithAggregatesInput = {
    AND?: YarnInformationWithDetailsScalarWhereWithAggregatesInput | YarnInformationWithDetailsScalarWhereWithAggregatesInput[]
    OR?: YarnInformationWithDetailsScalarWhereWithAggregatesInput[]
    NOT?: YarnInformationWithDetailsScalarWhereWithAggregatesInput | YarnInformationWithDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YarnInformationWithDetails"> | number
    yarnInfoID?: IntWithAggregatesFilter<"YarnInformationWithDetails"> | number
    receivedQuantity?: FloatWithAggregatesFilter<"YarnInformationWithDetails"> | number
    createdAt?: DateTimeWithAggregatesFilter<"YarnInformationWithDetails"> | Date | string
  }

  export type DeliveryDetailsWhereInput = {
    AND?: DeliveryDetailsWhereInput | DeliveryDetailsWhereInput[]
    OR?: DeliveryDetailsWhereInput[]
    NOT?: DeliveryDetailsWhereInput | DeliveryDetailsWhereInput[]
    id?: IntFilter<"DeliveryDetails"> | number
    orderId?: IntFilter<"DeliveryDetails"> | number
    deliveredQuantity?: FloatFilter<"DeliveryDetails"> | number
    createdAt?: DateTimeFilter<"DeliveryDetails"> | Date | string
    deliveredBy?: StringNullableFilter<"DeliveryDetails"> | string | null
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type DeliveryDetailsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveredQuantity?: SortOrder
    createdAt?: SortOrder
    deliveredBy?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type DeliveryDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeliveryDetailsWhereInput | DeliveryDetailsWhereInput[]
    OR?: DeliveryDetailsWhereInput[]
    NOT?: DeliveryDetailsWhereInput | DeliveryDetailsWhereInput[]
    orderId?: IntFilter<"DeliveryDetails"> | number
    deliveredQuantity?: FloatFilter<"DeliveryDetails"> | number
    createdAt?: DateTimeFilter<"DeliveryDetails"> | Date | string
    deliveredBy?: StringNullableFilter<"DeliveryDetails"> | string | null
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type DeliveryDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveredQuantity?: SortOrder
    createdAt?: SortOrder
    deliveredBy?: SortOrderInput | SortOrder
    _count?: DeliveryDetailsCountOrderByAggregateInput
    _avg?: DeliveryDetailsAvgOrderByAggregateInput
    _max?: DeliveryDetailsMaxOrderByAggregateInput
    _min?: DeliveryDetailsMinOrderByAggregateInput
    _sum?: DeliveryDetailsSumOrderByAggregateInput
  }

  export type DeliveryDetailsScalarWhereWithAggregatesInput = {
    AND?: DeliveryDetailsScalarWhereWithAggregatesInput | DeliveryDetailsScalarWhereWithAggregatesInput[]
    OR?: DeliveryDetailsScalarWhereWithAggregatesInput[]
    NOT?: DeliveryDetailsScalarWhereWithAggregatesInput | DeliveryDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeliveryDetails"> | number
    orderId?: IntWithAggregatesFilter<"DeliveryDetails"> | number
    deliveredQuantity?: FloatWithAggregatesFilter<"DeliveryDetails"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryDetails"> | Date | string
    deliveredBy?: StringNullableWithAggregatesFilter<"DeliveryDetails"> | string | null
  }

  export type ProformaInvoiceWhereInput = {
    AND?: ProformaInvoiceWhereInput | ProformaInvoiceWhereInput[]
    OR?: ProformaInvoiceWhereInput[]
    NOT?: ProformaInvoiceWhereInput | ProformaInvoiceWhereInput[]
    id?: IntFilter<"ProformaInvoice"> | number
    style?: StringNullableFilter<"ProformaInvoice"> | string | null
    fabricsName?: StringFilter<"ProformaInvoice"> | string
    fabricsId?: IntNullableFilter<"ProformaInvoice"> | number | null
    description?: StringNullableFilter<"ProformaInvoice"> | string | null
    finishDia?: StringNullableFilter<"ProformaInvoice"> | string | null
    unitPrice?: FloatFilter<"ProformaInvoice"> | number
    totalQuantity?: IntNullableFilter<"ProformaInvoice"> | number | null
    amount?: FloatFilter<"ProformaInvoice"> | number
    companyId?: IntFilter<"ProformaInvoice"> | number
    buyerId?: IntNullableFilter<"ProformaInvoice"> | number | null
    containOrders?: StringFilter<"ProformaInvoice"> | string
    piName?: StringFilter<"ProformaInvoice"> | string
    piNumber?: StringFilter<"ProformaInvoice"> | string
    totalPIAmount?: FloatFilter<"ProformaInvoice"> | number
    totalPIQuantity?: FloatFilter<"ProformaInvoice"> | number
    createdAt?: DateTimeFilter<"ProformaInvoice"> | Date | string
    fabricsType?: XOR<FabricsTypeNullableRelationFilter, FabricsTypeWhereInput> | null
    buyer?: XOR<BuyerNullableRelationFilter, BuyerWhereInput> | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type ProformaInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    style?: SortOrderInput | SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    finishDia?: SortOrderInput | SortOrder
    unitPrice?: SortOrder
    totalQuantity?: SortOrderInput | SortOrder
    amount?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    containOrders?: SortOrder
    piName?: SortOrder
    piNumber?: SortOrder
    totalPIAmount?: SortOrder
    totalPIQuantity?: SortOrder
    createdAt?: SortOrder
    fabricsType?: FabricsTypeOrderByWithRelationInput
    buyer?: BuyerOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type ProformaInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProformaInvoiceWhereInput | ProformaInvoiceWhereInput[]
    OR?: ProformaInvoiceWhereInput[]
    NOT?: ProformaInvoiceWhereInput | ProformaInvoiceWhereInput[]
    style?: StringNullableFilter<"ProformaInvoice"> | string | null
    fabricsName?: StringFilter<"ProformaInvoice"> | string
    fabricsId?: IntNullableFilter<"ProformaInvoice"> | number | null
    description?: StringNullableFilter<"ProformaInvoice"> | string | null
    finishDia?: StringNullableFilter<"ProformaInvoice"> | string | null
    unitPrice?: FloatFilter<"ProformaInvoice"> | number
    totalQuantity?: IntNullableFilter<"ProformaInvoice"> | number | null
    amount?: FloatFilter<"ProformaInvoice"> | number
    companyId?: IntFilter<"ProformaInvoice"> | number
    buyerId?: IntNullableFilter<"ProformaInvoice"> | number | null
    containOrders?: StringFilter<"ProformaInvoice"> | string
    piName?: StringFilter<"ProformaInvoice"> | string
    piNumber?: StringFilter<"ProformaInvoice"> | string
    totalPIAmount?: FloatFilter<"ProformaInvoice"> | number
    totalPIQuantity?: FloatFilter<"ProformaInvoice"> | number
    createdAt?: DateTimeFilter<"ProformaInvoice"> | Date | string
    fabricsType?: XOR<FabricsTypeNullableRelationFilter, FabricsTypeWhereInput> | null
    buyer?: XOR<BuyerNullableRelationFilter, BuyerWhereInput> | null
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "id">

  export type ProformaInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    style?: SortOrderInput | SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    finishDia?: SortOrderInput | SortOrder
    unitPrice?: SortOrder
    totalQuantity?: SortOrderInput | SortOrder
    amount?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    containOrders?: SortOrder
    piName?: SortOrder
    piNumber?: SortOrder
    totalPIAmount?: SortOrder
    totalPIQuantity?: SortOrder
    createdAt?: SortOrder
    _count?: ProformaInvoiceCountOrderByAggregateInput
    _avg?: ProformaInvoiceAvgOrderByAggregateInput
    _max?: ProformaInvoiceMaxOrderByAggregateInput
    _min?: ProformaInvoiceMinOrderByAggregateInput
    _sum?: ProformaInvoiceSumOrderByAggregateInput
  }

  export type ProformaInvoiceScalarWhereWithAggregatesInput = {
    AND?: ProformaInvoiceScalarWhereWithAggregatesInput | ProformaInvoiceScalarWhereWithAggregatesInput[]
    OR?: ProformaInvoiceScalarWhereWithAggregatesInput[]
    NOT?: ProformaInvoiceScalarWhereWithAggregatesInput | ProformaInvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProformaInvoice"> | number
    style?: StringNullableWithAggregatesFilter<"ProformaInvoice"> | string | null
    fabricsName?: StringWithAggregatesFilter<"ProformaInvoice"> | string
    fabricsId?: IntNullableWithAggregatesFilter<"ProformaInvoice"> | number | null
    description?: StringNullableWithAggregatesFilter<"ProformaInvoice"> | string | null
    finishDia?: StringNullableWithAggregatesFilter<"ProformaInvoice"> | string | null
    unitPrice?: FloatWithAggregatesFilter<"ProformaInvoice"> | number
    totalQuantity?: IntNullableWithAggregatesFilter<"ProformaInvoice"> | number | null
    amount?: FloatWithAggregatesFilter<"ProformaInvoice"> | number
    companyId?: IntWithAggregatesFilter<"ProformaInvoice"> | number
    buyerId?: IntNullableWithAggregatesFilter<"ProformaInvoice"> | number | null
    containOrders?: StringWithAggregatesFilter<"ProformaInvoice"> | string
    piName?: StringWithAggregatesFilter<"ProformaInvoice"> | string
    piNumber?: StringWithAggregatesFilter<"ProformaInvoice"> | string
    totalPIAmount?: FloatWithAggregatesFilter<"ProformaInvoice"> | number
    totalPIQuantity?: FloatWithAggregatesFilter<"ProformaInvoice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProformaInvoice"> | Date | string
  }

  export type PostCreateInput = {
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
    User: UserCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateInput = {
    bio?: string | null
    jobTitle?: string | null
    description?: string | null
    User: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    bio?: string | null
    jobTitle?: string | null
    description?: string | null
    userId: number
  }

  export type ProfileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    bio?: string | null
    jobTitle?: string | null
    description?: string | null
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    Post?: PostCreateNestedManyWithoutUserInput
    user?: OrderCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
    user?: OrderUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    Post?: PostUpdateManyWithoutUserNestedInput
    user?: OrderUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
    user?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanyCreateInput = {
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationCreateNestedManyWithoutCompanyInput
    buyers?: BuyerCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutCompanyInput
    buyers?: BuyerUncheckedCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUpdateManyWithoutCompanyNestedInput
    buyers?: BuyerUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutCompanyNestedInput
    buyers?: BuyerUncheckedUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuyerCreateInput = {
    buyerName?: string | null
    orders?: OrderCreateNestedManyWithoutBuyerInput
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutBuyerInput
    company: CompanyCreateNestedOneWithoutBuyersInput
  }

  export type BuyerUncheckedCreateInput = {
    id?: number
    buyerName?: string | null
    companyId: number
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerUpdateInput = {
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutBuyerNestedInput
    company?: CompanyUpdateOneRequiredWithoutBuyersNestedInput
  }

  export type BuyerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerCreateManyInput = {
    id?: number
    buyerName?: string | null
    companyId: number
  }

  export type BuyerUpdateManyMutationInput = {
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuyerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type FabricsTypeCreateInput = {
    fabricsName: string
    description?: string | null
    orders?: OrderCreateNestedManyWithoutFabricsTypeInput
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutFabricsTypeInput
  }

  export type FabricsTypeUncheckedCreateInput = {
    id?: number
    fabricsName: string
    description?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutFabricsTypeInput
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutFabricsTypeInput
  }

  export type FabricsTypeUpdateInput = {
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutFabricsTypeNestedInput
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutFabricsTypeNestedInput
  }

  export type FabricsTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutFabricsTypeNestedInput
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutFabricsTypeNestedInput
  }

  export type FabricsTypeCreateManyInput = {
    id?: number
    fabricsName: string
    description?: string | null
  }

  export type FabricsTypeUpdateManyMutationInput = {
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FabricsTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsCreateNestedManyWithoutOrderInput
    user?: UserCreateNestedOneWithoutUserInput
    buyer?: BuyerCreateNestedOneWithoutOrdersInput
    fabricsType?: FabricsTypeCreateNestedOneWithoutOrdersInput
    company: CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
    details?: OrderDetailsUncheckedCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneWithoutUserNestedInput
    buyer?: BuyerUpdateOneWithoutOrdersNestedInput
    fabricsType?: FabricsTypeUpdateOneWithoutOrdersNestedInput
    company?: CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailsCreateInput = {
    style?: string | null
    yarnCount?: string | null
    yarnBrand?: string | null
    yarnLot?: string | null
    lycraCount?: string | null
    lycraBrand?: string | null
    lycraLot?: string | null
    polyStarCount?: string | null
    polyStarBrand?: string | null
    polyStarLot?: string | null
    mc_DIA?: string | null
    e_DIA?: string | null
    f_GSM?: string | null
    sl?: string | null
    colour?: string | null
    order?: OrderCreateNestedOneWithoutDetailsInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    id?: number
    orderId?: number | null
    style?: string | null
    yarnCount?: string | null
    yarnBrand?: string | null
    yarnLot?: string | null
    lycraCount?: string | null
    lycraBrand?: string | null
    lycraLot?: string | null
    polyStarCount?: string | null
    polyStarBrand?: string | null
    polyStarLot?: string | null
    mc_DIA?: string | null
    e_DIA?: string | null
    f_GSM?: string | null
    sl?: string | null
    colour?: string | null
  }

  export type OrderDetailsUpdateInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    yarnCount?: NullableStringFieldUpdateOperationsInput | string | null
    yarnBrand?: NullableStringFieldUpdateOperationsInput | string | null
    yarnLot?: NullableStringFieldUpdateOperationsInput | string | null
    lycraCount?: NullableStringFieldUpdateOperationsInput | string | null
    lycraBrand?: NullableStringFieldUpdateOperationsInput | string | null
    lycraLot?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarCount?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarBrand?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarLot?: NullableStringFieldUpdateOperationsInput | string | null
    mc_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    e_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    f_GSM?: NullableStringFieldUpdateOperationsInput | string | null
    sl?: NullableStringFieldUpdateOperationsInput | string | null
    colour?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneWithoutDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    yarnCount?: NullableStringFieldUpdateOperationsInput | string | null
    yarnBrand?: NullableStringFieldUpdateOperationsInput | string | null
    yarnLot?: NullableStringFieldUpdateOperationsInput | string | null
    lycraCount?: NullableStringFieldUpdateOperationsInput | string | null
    lycraBrand?: NullableStringFieldUpdateOperationsInput | string | null
    lycraLot?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarCount?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarBrand?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarLot?: NullableStringFieldUpdateOperationsInput | string | null
    mc_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    e_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    f_GSM?: NullableStringFieldUpdateOperationsInput | string | null
    sl?: NullableStringFieldUpdateOperationsInput | string | null
    colour?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailsCreateManyInput = {
    id?: number
    orderId?: number | null
    style?: string | null
    yarnCount?: string | null
    yarnBrand?: string | null
    yarnLot?: string | null
    lycraCount?: string | null
    lycraBrand?: string | null
    lycraLot?: string | null
    polyStarCount?: string | null
    polyStarBrand?: string | null
    polyStarLot?: string | null
    mc_DIA?: string | null
    e_DIA?: string | null
    f_GSM?: string | null
    sl?: string | null
    colour?: string | null
  }

  export type OrderDetailsUpdateManyMutationInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    yarnCount?: NullableStringFieldUpdateOperationsInput | string | null
    yarnBrand?: NullableStringFieldUpdateOperationsInput | string | null
    yarnLot?: NullableStringFieldUpdateOperationsInput | string | null
    lycraCount?: NullableStringFieldUpdateOperationsInput | string | null
    lycraBrand?: NullableStringFieldUpdateOperationsInput | string | null
    lycraLot?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarCount?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarBrand?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarLot?: NullableStringFieldUpdateOperationsInput | string | null
    mc_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    e_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    f_GSM?: NullableStringFieldUpdateOperationsInput | string | null
    sl?: NullableStringFieldUpdateOperationsInput | string | null
    colour?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    yarnCount?: NullableStringFieldUpdateOperationsInput | string | null
    yarnBrand?: NullableStringFieldUpdateOperationsInput | string | null
    yarnLot?: NullableStringFieldUpdateOperationsInput | string | null
    lycraCount?: NullableStringFieldUpdateOperationsInput | string | null
    lycraBrand?: NullableStringFieldUpdateOperationsInput | string | null
    lycraLot?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarCount?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarBrand?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarLot?: NullableStringFieldUpdateOperationsInput | string | null
    mc_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    e_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    f_GSM?: NullableStringFieldUpdateOperationsInput | string | null
    sl?: NullableStringFieldUpdateOperationsInput | string | null
    colour?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yarnInformationCreateInput = {
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsCreateNestedManyWithoutYarnInformationInput
    order: OrderCreateNestedOneWithoutYarnDetailsInput
    company: CompanyCreateNestedOneWithoutYarnDetailsInput
  }

  export type yarnInformationUncheckedCreateInput = {
    id?: number
    companyId: number
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUncheckedCreateNestedManyWithoutYarnInformationInput
  }

  export type yarnInformationUpdateInput = {
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUpdateManyWithoutYarnInformationNestedInput
    order?: OrderUpdateOneRequiredWithoutYarnDetailsNestedInput
    company?: CompanyUpdateOneRequiredWithoutYarnDetailsNestedInput
  }

  export type yarnInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUncheckedUpdateManyWithoutYarnInformationNestedInput
  }

  export type yarnInformationCreateManyInput = {
    id?: number
    companyId: number
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type yarnInformationUpdateManyMutationInput = {
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type yarnInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type YarnInformationWithDetailsCreateInput = {
    receivedQuantity: number
    createdAt?: Date | string
    yarnInformation: yarnInformationCreateNestedOneWithoutYarnInformationWithDetailsInput
  }

  export type YarnInformationWithDetailsUncheckedCreateInput = {
    id?: number
    yarnInfoID: number
    receivedQuantity: number
    createdAt?: Date | string
  }

  export type YarnInformationWithDetailsUpdateInput = {
    receivedQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yarnInformation?: yarnInformationUpdateOneRequiredWithoutYarnInformationWithDetailsNestedInput
  }

  export type YarnInformationWithDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    yarnInfoID?: IntFieldUpdateOperationsInput | number
    receivedQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YarnInformationWithDetailsCreateManyInput = {
    id?: number
    yarnInfoID: number
    receivedQuantity: number
    createdAt?: Date | string
  }

  export type YarnInformationWithDetailsUpdateManyMutationInput = {
    receivedQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YarnInformationWithDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    yarnInfoID?: IntFieldUpdateOperationsInput | number
    receivedQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryDetailsCreateInput = {
    deliveredQuantity: number
    createdAt?: Date | string
    deliveredBy?: string | null
    order: OrderCreateNestedOneWithoutDeliveryDetailsInput
  }

  export type DeliveryDetailsUncheckedCreateInput = {
    id?: number
    orderId: number
    deliveredQuantity: number
    createdAt?: Date | string
    deliveredBy?: string | null
  }

  export type DeliveryDetailsUpdateInput = {
    deliveredQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredBy?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutDeliveryDetailsNestedInput
  }

  export type DeliveryDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryDetailsCreateManyInput = {
    id?: number
    orderId: number
    deliveredQuantity: number
    createdAt?: Date | string
    deliveredBy?: string | null
  }

  export type DeliveryDetailsUpdateManyMutationInput = {
    deliveredQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProformaInvoiceCreateInput = {
    style?: string | null
    fabricsName: string
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
    fabricsType?: FabricsTypeCreateNestedOneWithoutProformaInvoicesInput
    buyer?: BuyerCreateNestedOneWithoutProformaInvoicesInput
    company: CompanyCreateNestedOneWithoutProformaInvoicesInput
  }

  export type ProformaInvoiceUncheckedCreateInput = {
    id?: number
    style?: string | null
    fabricsName: string
    fabricsId?: number | null
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    companyId: number
    buyerId?: number | null
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type ProformaInvoiceUpdateInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fabricsType?: FabricsTypeUpdateOneWithoutProformaInvoicesNestedInput
    buyer?: BuyerUpdateOneWithoutProformaInvoicesNestedInput
    company?: CompanyUpdateOneRequiredWithoutProformaInvoicesNestedInput
  }

  export type ProformaInvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProformaInvoiceCreateManyInput = {
    id?: number
    style?: string | null
    fabricsName: string
    fabricsId?: number | null
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    companyId: number
    buyerId?: number | null
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type ProformaInvoiceUpdateManyMutationInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProformaInvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ProfileNullableRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlock?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlock?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlock?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type YarnInformationListRelationFilter = {
    every?: yarnInformationWhereInput
    some?: yarnInformationWhereInput
    none?: yarnInformationWhereInput
  }

  export type BuyerListRelationFilter = {
    every?: BuyerWhereInput
    some?: BuyerWhereInput
    none?: BuyerWhereInput
  }

  export type ProformaInvoiceListRelationFilter = {
    every?: ProformaInvoiceWhereInput
    some?: ProformaInvoiceWhereInput
    none?: ProformaInvoiceWhereInput
  }

  export type yarnInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuyerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProformaInvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    shortForm?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    shortForm?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    shortForm?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type BuyerCountOrderByAggregateInput = {
    id?: SortOrder
    buyerName?: SortOrder
    companyId?: SortOrder
  }

  export type BuyerAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type BuyerMaxOrderByAggregateInput = {
    id?: SortOrder
    buyerName?: SortOrder
    companyId?: SortOrder
  }

  export type BuyerMinOrderByAggregateInput = {
    id?: SortOrder
    buyerName?: SortOrder
    companyId?: SortOrder
  }

  export type BuyerSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type FabricsTypeCountOrderByAggregateInput = {
    id?: SortOrder
    fabricsName?: SortOrder
    description?: SortOrder
  }

  export type FabricsTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FabricsTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    fabricsName?: SortOrder
    description?: SortOrder
  }

  export type FabricsTypeMinOrderByAggregateInput = {
    id?: SortOrder
    fabricsName?: SortOrder
    description?: SortOrder
  }

  export type FabricsTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrderDetailsNullableRelationFilter = {
    is?: OrderDetailsWhereInput | null
    isNot?: OrderDetailsWhereInput | null
  }

  export type DeliveryDetailsListRelationFilter = {
    every?: DeliveryDetailsWhereInput
    some?: DeliveryDetailsWhereInput
    none?: DeliveryDetailsWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BuyerNullableRelationFilter = {
    is?: BuyerWhereInput | null
    isNot?: BuyerWhereInput | null
  }

  export type FabricsTypeNullableRelationFilter = {
    is?: FabricsTypeWhereInput | null
    isNot?: FabricsTypeWhereInput | null
  }

  export type DeliveryDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    companyName?: SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrder
    buyerName?: SortOrder
    season?: SortOrder
    pmNumber?: SortOrder
    poNumber?: SortOrder
    boNumber?: SortOrder
    invoiceNumber?: SortOrder
    orderedDate?: SortOrder
    targetDate?: SortOrder
    createdAt?: SortOrder
    orderQuantity?: SortOrder
    restQuantity?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    isProformaInvoiceCreated?: SortOrder
    userId?: SortOrder
    proformaInvoiceId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    fabricsId?: SortOrder
    orderQuantity?: SortOrder
    restQuantity?: SortOrder
    userId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    companyName?: SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrder
    buyerName?: SortOrder
    season?: SortOrder
    pmNumber?: SortOrder
    poNumber?: SortOrder
    boNumber?: SortOrder
    invoiceNumber?: SortOrder
    orderedDate?: SortOrder
    targetDate?: SortOrder
    createdAt?: SortOrder
    orderQuantity?: SortOrder
    restQuantity?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    isProformaInvoiceCreated?: SortOrder
    userId?: SortOrder
    proformaInvoiceId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    companyName?: SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrder
    buyerName?: SortOrder
    season?: SortOrder
    pmNumber?: SortOrder
    poNumber?: SortOrder
    boNumber?: SortOrder
    invoiceNumber?: SortOrder
    orderedDate?: SortOrder
    targetDate?: SortOrder
    createdAt?: SortOrder
    orderQuantity?: SortOrder
    restQuantity?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    isProformaInvoiceCreated?: SortOrder
    userId?: SortOrder
    proformaInvoiceId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    fabricsId?: SortOrder
    orderQuantity?: SortOrder
    restQuantity?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OrderNullableRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    style?: SortOrder
    yarnCount?: SortOrder
    yarnBrand?: SortOrder
    yarnLot?: SortOrder
    lycraCount?: SortOrder
    lycraBrand?: SortOrder
    lycraLot?: SortOrder
    polyStarCount?: SortOrder
    polyStarBrand?: SortOrder
    polyStarLot?: SortOrder
    mc_DIA?: SortOrder
    e_DIA?: SortOrder
    f_GSM?: SortOrder
    sl?: SortOrder
    colour?: SortOrder
  }

  export type OrderDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    style?: SortOrder
    yarnCount?: SortOrder
    yarnBrand?: SortOrder
    yarnLot?: SortOrder
    lycraCount?: SortOrder
    lycraBrand?: SortOrder
    lycraLot?: SortOrder
    polyStarCount?: SortOrder
    polyStarBrand?: SortOrder
    polyStarLot?: SortOrder
    mc_DIA?: SortOrder
    e_DIA?: SortOrder
    f_GSM?: SortOrder
    sl?: SortOrder
    colour?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    style?: SortOrder
    yarnCount?: SortOrder
    yarnBrand?: SortOrder
    yarnLot?: SortOrder
    lycraCount?: SortOrder
    lycraBrand?: SortOrder
    lycraLot?: SortOrder
    polyStarCount?: SortOrder
    polyStarBrand?: SortOrder
    polyStarLot?: SortOrder
    mc_DIA?: SortOrder
    e_DIA?: SortOrder
    f_GSM?: SortOrder
    sl?: SortOrder
    colour?: SortOrder
  }

  export type OrderDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type YarnInformationWithDetailsListRelationFilter = {
    every?: YarnInformationWithDetailsWhereInput
    some?: YarnInformationWithDetailsWhereInput
    none?: YarnInformationWithDetailsWhereInput
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type YarnInformationWithDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type yarnInformationCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    bookingQuantity?: SortOrder
    restQuantity?: SortOrder
    yarn?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type yarnInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    bookingQuantity?: SortOrder
    restQuantity?: SortOrder
    orderId?: SortOrder
  }

  export type yarnInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    bookingQuantity?: SortOrder
    restQuantity?: SortOrder
    yarn?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type yarnInformationMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    bookingQuantity?: SortOrder
    restQuantity?: SortOrder
    yarn?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type yarnInformationSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    bookingQuantity?: SortOrder
    restQuantity?: SortOrder
    orderId?: SortOrder
  }

  export type YarnInformationRelationFilter = {
    is?: yarnInformationWhereInput
    isNot?: yarnInformationWhereInput
  }

  export type YarnInformationWithDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    yarnInfoID?: SortOrder
    receivedQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type YarnInformationWithDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    yarnInfoID?: SortOrder
    receivedQuantity?: SortOrder
  }

  export type YarnInformationWithDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    yarnInfoID?: SortOrder
    receivedQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type YarnInformationWithDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    yarnInfoID?: SortOrder
    receivedQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type YarnInformationWithDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    yarnInfoID?: SortOrder
    receivedQuantity?: SortOrder
  }

  export type DeliveryDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveredQuantity?: SortOrder
    createdAt?: SortOrder
    deliveredBy?: SortOrder
  }

  export type DeliveryDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveredQuantity?: SortOrder
  }

  export type DeliveryDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveredQuantity?: SortOrder
    createdAt?: SortOrder
    deliveredBy?: SortOrder
  }

  export type DeliveryDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveredQuantity?: SortOrder
    createdAt?: SortOrder
    deliveredBy?: SortOrder
  }

  export type DeliveryDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveredQuantity?: SortOrder
  }

  export type ProformaInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrder
    description?: SortOrder
    finishDia?: SortOrder
    unitPrice?: SortOrder
    totalQuantity?: SortOrder
    amount?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    containOrders?: SortOrder
    piName?: SortOrder
    piNumber?: SortOrder
    totalPIAmount?: SortOrder
    totalPIQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProformaInvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    fabricsId?: SortOrder
    unitPrice?: SortOrder
    totalQuantity?: SortOrder
    amount?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    totalPIAmount?: SortOrder
    totalPIQuantity?: SortOrder
  }

  export type ProformaInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrder
    description?: SortOrder
    finishDia?: SortOrder
    unitPrice?: SortOrder
    totalQuantity?: SortOrder
    amount?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    containOrders?: SortOrder
    piName?: SortOrder
    piNumber?: SortOrder
    totalPIAmount?: SortOrder
    totalPIQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProformaInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    fabricsName?: SortOrder
    fabricsId?: SortOrder
    description?: SortOrder
    finishDia?: SortOrder
    unitPrice?: SortOrder
    totalQuantity?: SortOrder
    amount?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    containOrders?: SortOrder
    piName?: SortOrder
    piNumber?: SortOrder
    totalPIAmount?: SortOrder
    totalPIQuantity?: SortOrder
    createdAt?: SortOrder
  }

  export type ProformaInvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    fabricsId?: SortOrder
    unitPrice?: SortOrder
    totalQuantity?: SortOrder
    amount?: SortOrder
    companyId?: SortOrder
    buyerId?: SortOrder
    totalPIAmount?: SortOrder
    totalPIQuantity?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostInput, UserUpdateWithoutPostInput>, UserUncheckedUpdateWithoutPostInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type yarnInformationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<yarnInformationCreateWithoutCompanyInput, yarnInformationUncheckedCreateWithoutCompanyInput> | yarnInformationCreateWithoutCompanyInput[] | yarnInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutCompanyInput | yarnInformationCreateOrConnectWithoutCompanyInput[]
    createMany?: yarnInformationCreateManyCompanyInputEnvelope
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
  }

  export type BuyerCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BuyerCreateWithoutCompanyInput, BuyerUncheckedCreateWithoutCompanyInput> | BuyerCreateWithoutCompanyInput[] | BuyerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BuyerCreateOrConnectWithoutCompanyInput | BuyerCreateOrConnectWithoutCompanyInput[]
    createMany?: BuyerCreateManyCompanyInputEnvelope
    connect?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCompanyInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProformaInvoiceCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProformaInvoiceCreateWithoutCompanyInput, ProformaInvoiceUncheckedCreateWithoutCompanyInput> | ProformaInvoiceCreateWithoutCompanyInput[] | ProformaInvoiceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutCompanyInput | ProformaInvoiceCreateOrConnectWithoutCompanyInput[]
    createMany?: ProformaInvoiceCreateManyCompanyInputEnvelope
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
  }

  export type yarnInformationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<yarnInformationCreateWithoutCompanyInput, yarnInformationUncheckedCreateWithoutCompanyInput> | yarnInformationCreateWithoutCompanyInput[] | yarnInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutCompanyInput | yarnInformationCreateOrConnectWithoutCompanyInput[]
    createMany?: yarnInformationCreateManyCompanyInputEnvelope
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
  }

  export type BuyerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BuyerCreateWithoutCompanyInput, BuyerUncheckedCreateWithoutCompanyInput> | BuyerCreateWithoutCompanyInput[] | BuyerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BuyerCreateOrConnectWithoutCompanyInput | BuyerCreateOrConnectWithoutCompanyInput[]
    createMany?: BuyerCreateManyCompanyInputEnvelope
    connect?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProformaInvoiceUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProformaInvoiceCreateWithoutCompanyInput, ProformaInvoiceUncheckedCreateWithoutCompanyInput> | ProformaInvoiceCreateWithoutCompanyInput[] | ProformaInvoiceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutCompanyInput | ProformaInvoiceCreateOrConnectWithoutCompanyInput[]
    createMany?: ProformaInvoiceCreateManyCompanyInputEnvelope
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
  }

  export type yarnInformationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<yarnInformationCreateWithoutCompanyInput, yarnInformationUncheckedCreateWithoutCompanyInput> | yarnInformationCreateWithoutCompanyInput[] | yarnInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutCompanyInput | yarnInformationCreateOrConnectWithoutCompanyInput[]
    upsert?: yarnInformationUpsertWithWhereUniqueWithoutCompanyInput | yarnInformationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: yarnInformationCreateManyCompanyInputEnvelope
    set?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    disconnect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    delete?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    update?: yarnInformationUpdateWithWhereUniqueWithoutCompanyInput | yarnInformationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: yarnInformationUpdateManyWithWhereWithoutCompanyInput | yarnInformationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: yarnInformationScalarWhereInput | yarnInformationScalarWhereInput[]
  }

  export type BuyerUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BuyerCreateWithoutCompanyInput, BuyerUncheckedCreateWithoutCompanyInput> | BuyerCreateWithoutCompanyInput[] | BuyerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BuyerCreateOrConnectWithoutCompanyInput | BuyerCreateOrConnectWithoutCompanyInput[]
    upsert?: BuyerUpsertWithWhereUniqueWithoutCompanyInput | BuyerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BuyerCreateManyCompanyInputEnvelope
    set?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    disconnect?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    delete?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    connect?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    update?: BuyerUpdateWithWhereUniqueWithoutCompanyInput | BuyerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BuyerUpdateManyWithWhereWithoutCompanyInput | BuyerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BuyerScalarWhereInput | BuyerScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCompanyInput | OrderUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCompanyInput | OrderUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCompanyInput | OrderUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProformaInvoiceUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProformaInvoiceCreateWithoutCompanyInput, ProformaInvoiceUncheckedCreateWithoutCompanyInput> | ProformaInvoiceCreateWithoutCompanyInput[] | ProformaInvoiceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutCompanyInput | ProformaInvoiceCreateOrConnectWithoutCompanyInput[]
    upsert?: ProformaInvoiceUpsertWithWhereUniqueWithoutCompanyInput | ProformaInvoiceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProformaInvoiceCreateManyCompanyInputEnvelope
    set?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    disconnect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    delete?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    update?: ProformaInvoiceUpdateWithWhereUniqueWithoutCompanyInput | ProformaInvoiceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProformaInvoiceUpdateManyWithWhereWithoutCompanyInput | ProformaInvoiceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
  }

  export type yarnInformationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<yarnInformationCreateWithoutCompanyInput, yarnInformationUncheckedCreateWithoutCompanyInput> | yarnInformationCreateWithoutCompanyInput[] | yarnInformationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutCompanyInput | yarnInformationCreateOrConnectWithoutCompanyInput[]
    upsert?: yarnInformationUpsertWithWhereUniqueWithoutCompanyInput | yarnInformationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: yarnInformationCreateManyCompanyInputEnvelope
    set?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    disconnect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    delete?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    update?: yarnInformationUpdateWithWhereUniqueWithoutCompanyInput | yarnInformationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: yarnInformationUpdateManyWithWhereWithoutCompanyInput | yarnInformationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: yarnInformationScalarWhereInput | yarnInformationScalarWhereInput[]
  }

  export type BuyerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BuyerCreateWithoutCompanyInput, BuyerUncheckedCreateWithoutCompanyInput> | BuyerCreateWithoutCompanyInput[] | BuyerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BuyerCreateOrConnectWithoutCompanyInput | BuyerCreateOrConnectWithoutCompanyInput[]
    upsert?: BuyerUpsertWithWhereUniqueWithoutCompanyInput | BuyerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BuyerCreateManyCompanyInputEnvelope
    set?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    disconnect?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    delete?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    connect?: BuyerWhereUniqueInput | BuyerWhereUniqueInput[]
    update?: BuyerUpdateWithWhereUniqueWithoutCompanyInput | BuyerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BuyerUpdateManyWithWhereWithoutCompanyInput | BuyerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BuyerScalarWhereInput | BuyerScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCompanyInput | OrderUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCompanyInput | OrderUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCompanyInput | OrderUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProformaInvoiceUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProformaInvoiceCreateWithoutCompanyInput, ProformaInvoiceUncheckedCreateWithoutCompanyInput> | ProformaInvoiceCreateWithoutCompanyInput[] | ProformaInvoiceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutCompanyInput | ProformaInvoiceCreateOrConnectWithoutCompanyInput[]
    upsert?: ProformaInvoiceUpsertWithWhereUniqueWithoutCompanyInput | ProformaInvoiceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProformaInvoiceCreateManyCompanyInputEnvelope
    set?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    disconnect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    delete?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    update?: ProformaInvoiceUpdateWithWhereUniqueWithoutCompanyInput | ProformaInvoiceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProformaInvoiceUpdateManyWithWhereWithoutCompanyInput | ProformaInvoiceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProformaInvoiceCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ProformaInvoiceCreateWithoutBuyerInput, ProformaInvoiceUncheckedCreateWithoutBuyerInput> | ProformaInvoiceCreateWithoutBuyerInput[] | ProformaInvoiceUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutBuyerInput | ProformaInvoiceCreateOrConnectWithoutBuyerInput[]
    createMany?: ProformaInvoiceCreateManyBuyerInputEnvelope
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutBuyersInput = {
    create?: XOR<CompanyCreateWithoutBuyersInput, CompanyUncheckedCreateWithoutBuyersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBuyersInput
    connect?: CompanyWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProformaInvoiceUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ProformaInvoiceCreateWithoutBuyerInput, ProformaInvoiceUncheckedCreateWithoutBuyerInput> | ProformaInvoiceCreateWithoutBuyerInput[] | ProformaInvoiceUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutBuyerInput | ProformaInvoiceCreateOrConnectWithoutBuyerInput[]
    createMany?: ProformaInvoiceCreateManyBuyerInputEnvelope
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProformaInvoiceUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ProformaInvoiceCreateWithoutBuyerInput, ProformaInvoiceUncheckedCreateWithoutBuyerInput> | ProformaInvoiceCreateWithoutBuyerInput[] | ProformaInvoiceUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutBuyerInput | ProformaInvoiceCreateOrConnectWithoutBuyerInput[]
    upsert?: ProformaInvoiceUpsertWithWhereUniqueWithoutBuyerInput | ProformaInvoiceUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ProformaInvoiceCreateManyBuyerInputEnvelope
    set?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    disconnect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    delete?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    update?: ProformaInvoiceUpdateWithWhereUniqueWithoutBuyerInput | ProformaInvoiceUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ProformaInvoiceUpdateManyWithWhereWithoutBuyerInput | ProformaInvoiceUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
  }

  export type CompanyUpdateOneRequiredWithoutBuyersNestedInput = {
    create?: XOR<CompanyCreateWithoutBuyersInput, CompanyUncheckedCreateWithoutBuyersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBuyersInput
    upsert?: CompanyUpsertWithoutBuyersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutBuyersInput, CompanyUpdateWithoutBuyersInput>, CompanyUncheckedUpdateWithoutBuyersInput>
  }

  export type OrderUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProformaInvoiceUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ProformaInvoiceCreateWithoutBuyerInput, ProformaInvoiceUncheckedCreateWithoutBuyerInput> | ProformaInvoiceCreateWithoutBuyerInput[] | ProformaInvoiceUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutBuyerInput | ProformaInvoiceCreateOrConnectWithoutBuyerInput[]
    upsert?: ProformaInvoiceUpsertWithWhereUniqueWithoutBuyerInput | ProformaInvoiceUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ProformaInvoiceCreateManyBuyerInputEnvelope
    set?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    disconnect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    delete?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    update?: ProformaInvoiceUpdateWithWhereUniqueWithoutBuyerInput | ProformaInvoiceUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ProformaInvoiceUpdateManyWithWhereWithoutBuyerInput | ProformaInvoiceUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutFabricsTypeInput = {
    create?: XOR<OrderCreateWithoutFabricsTypeInput, OrderUncheckedCreateWithoutFabricsTypeInput> | OrderCreateWithoutFabricsTypeInput[] | OrderUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFabricsTypeInput | OrderCreateOrConnectWithoutFabricsTypeInput[]
    createMany?: OrderCreateManyFabricsTypeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProformaInvoiceCreateNestedManyWithoutFabricsTypeInput = {
    create?: XOR<ProformaInvoiceCreateWithoutFabricsTypeInput, ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput> | ProformaInvoiceCreateWithoutFabricsTypeInput[] | ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput | ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput[]
    createMany?: ProformaInvoiceCreateManyFabricsTypeInputEnvelope
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutFabricsTypeInput = {
    create?: XOR<OrderCreateWithoutFabricsTypeInput, OrderUncheckedCreateWithoutFabricsTypeInput> | OrderCreateWithoutFabricsTypeInput[] | OrderUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFabricsTypeInput | OrderCreateOrConnectWithoutFabricsTypeInput[]
    createMany?: OrderCreateManyFabricsTypeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProformaInvoiceUncheckedCreateNestedManyWithoutFabricsTypeInput = {
    create?: XOR<ProformaInvoiceCreateWithoutFabricsTypeInput, ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput> | ProformaInvoiceCreateWithoutFabricsTypeInput[] | ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput | ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput[]
    createMany?: ProformaInvoiceCreateManyFabricsTypeInputEnvelope
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutFabricsTypeNestedInput = {
    create?: XOR<OrderCreateWithoutFabricsTypeInput, OrderUncheckedCreateWithoutFabricsTypeInput> | OrderCreateWithoutFabricsTypeInput[] | OrderUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFabricsTypeInput | OrderCreateOrConnectWithoutFabricsTypeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFabricsTypeInput | OrderUpsertWithWhereUniqueWithoutFabricsTypeInput[]
    createMany?: OrderCreateManyFabricsTypeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFabricsTypeInput | OrderUpdateWithWhereUniqueWithoutFabricsTypeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFabricsTypeInput | OrderUpdateManyWithWhereWithoutFabricsTypeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProformaInvoiceUpdateManyWithoutFabricsTypeNestedInput = {
    create?: XOR<ProformaInvoiceCreateWithoutFabricsTypeInput, ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput> | ProformaInvoiceCreateWithoutFabricsTypeInput[] | ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput | ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput[]
    upsert?: ProformaInvoiceUpsertWithWhereUniqueWithoutFabricsTypeInput | ProformaInvoiceUpsertWithWhereUniqueWithoutFabricsTypeInput[]
    createMany?: ProformaInvoiceCreateManyFabricsTypeInputEnvelope
    set?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    disconnect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    delete?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    update?: ProformaInvoiceUpdateWithWhereUniqueWithoutFabricsTypeInput | ProformaInvoiceUpdateWithWhereUniqueWithoutFabricsTypeInput[]
    updateMany?: ProformaInvoiceUpdateManyWithWhereWithoutFabricsTypeInput | ProformaInvoiceUpdateManyWithWhereWithoutFabricsTypeInput[]
    deleteMany?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutFabricsTypeNestedInput = {
    create?: XOR<OrderCreateWithoutFabricsTypeInput, OrderUncheckedCreateWithoutFabricsTypeInput> | OrderCreateWithoutFabricsTypeInput[] | OrderUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFabricsTypeInput | OrderCreateOrConnectWithoutFabricsTypeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFabricsTypeInput | OrderUpsertWithWhereUniqueWithoutFabricsTypeInput[]
    createMany?: OrderCreateManyFabricsTypeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFabricsTypeInput | OrderUpdateWithWhereUniqueWithoutFabricsTypeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFabricsTypeInput | OrderUpdateManyWithWhereWithoutFabricsTypeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProformaInvoiceUncheckedUpdateManyWithoutFabricsTypeNestedInput = {
    create?: XOR<ProformaInvoiceCreateWithoutFabricsTypeInput, ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput> | ProformaInvoiceCreateWithoutFabricsTypeInput[] | ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput[]
    connectOrCreate?: ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput | ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput[]
    upsert?: ProformaInvoiceUpsertWithWhereUniqueWithoutFabricsTypeInput | ProformaInvoiceUpsertWithWhereUniqueWithoutFabricsTypeInput[]
    createMany?: ProformaInvoiceCreateManyFabricsTypeInputEnvelope
    set?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    disconnect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    delete?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    connect?: ProformaInvoiceWhereUniqueInput | ProformaInvoiceWhereUniqueInput[]
    update?: ProformaInvoiceUpdateWithWhereUniqueWithoutFabricsTypeInput | ProformaInvoiceUpdateWithWhereUniqueWithoutFabricsTypeInput[]
    updateMany?: ProformaInvoiceUpdateManyWithWhereWithoutFabricsTypeInput | ProformaInvoiceUpdateManyWithWhereWithoutFabricsTypeInput[]
    deleteMany?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
  }

  export type OrderDetailsCreateNestedOneWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput
    connect?: OrderDetailsWhereUniqueInput
  }

  export type yarnInformationCreateNestedManyWithoutOrderInput = {
    create?: XOR<yarnInformationCreateWithoutOrderInput, yarnInformationUncheckedCreateWithoutOrderInput> | yarnInformationCreateWithoutOrderInput[] | yarnInformationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutOrderInput | yarnInformationCreateOrConnectWithoutOrderInput[]
    createMany?: yarnInformationCreateManyOrderInputEnvelope
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
  }

  export type DeliveryDetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<DeliveryDetailsCreateWithoutOrderInput, DeliveryDetailsUncheckedCreateWithoutOrderInput> | DeliveryDetailsCreateWithoutOrderInput[] | DeliveryDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryDetailsCreateOrConnectWithoutOrderInput | DeliveryDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: DeliveryDetailsCreateManyOrderInputEnvelope
    connect?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInput
    connect?: UserWhereUniqueInput
  }

  export type BuyerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutOrdersInput
    connect?: BuyerWhereUniqueInput
  }

  export type FabricsTypeCreateNestedOneWithoutOrdersInput = {
    create?: XOR<FabricsTypeCreateWithoutOrdersInput, FabricsTypeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FabricsTypeCreateOrConnectWithoutOrdersInput
    connect?: FabricsTypeWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput = {
    create?: XOR<CompanyCreateWithoutOrderWithCompanyNamesInput, CompanyUncheckedCreateWithoutOrderWithCompanyNamesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderWithCompanyNamesInput
    connect?: CompanyWhereUniqueInput
  }

  export type OrderDetailsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput
    connect?: OrderDetailsWhereUniqueInput
  }

  export type yarnInformationUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<yarnInformationCreateWithoutOrderInput, yarnInformationUncheckedCreateWithoutOrderInput> | yarnInformationCreateWithoutOrderInput[] | yarnInformationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutOrderInput | yarnInformationCreateOrConnectWithoutOrderInput[]
    createMany?: yarnInformationCreateManyOrderInputEnvelope
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
  }

  export type DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<DeliveryDetailsCreateWithoutOrderInput, DeliveryDetailsUncheckedCreateWithoutOrderInput> | DeliveryDetailsCreateWithoutOrderInput[] | DeliveryDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryDetailsCreateOrConnectWithoutOrderInput | DeliveryDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: DeliveryDetailsCreateManyOrderInputEnvelope
    connect?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderDetailsUpdateOneWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput
    upsert?: OrderDetailsUpsertWithoutOrderInput
    disconnect?: OrderDetailsWhereInput | boolean
    delete?: OrderDetailsWhereInput | boolean
    connect?: OrderDetailsWhereUniqueInput
    update?: XOR<XOR<OrderDetailsUpdateToOneWithWhereWithoutOrderInput, OrderDetailsUpdateWithoutOrderInput>, OrderDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type yarnInformationUpdateManyWithoutOrderNestedInput = {
    create?: XOR<yarnInformationCreateWithoutOrderInput, yarnInformationUncheckedCreateWithoutOrderInput> | yarnInformationCreateWithoutOrderInput[] | yarnInformationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutOrderInput | yarnInformationCreateOrConnectWithoutOrderInput[]
    upsert?: yarnInformationUpsertWithWhereUniqueWithoutOrderInput | yarnInformationUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: yarnInformationCreateManyOrderInputEnvelope
    set?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    disconnect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    delete?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    update?: yarnInformationUpdateWithWhereUniqueWithoutOrderInput | yarnInformationUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: yarnInformationUpdateManyWithWhereWithoutOrderInput | yarnInformationUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: yarnInformationScalarWhereInput | yarnInformationScalarWhereInput[]
  }

  export type DeliveryDetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DeliveryDetailsCreateWithoutOrderInput, DeliveryDetailsUncheckedCreateWithoutOrderInput> | DeliveryDetailsCreateWithoutOrderInput[] | DeliveryDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryDetailsCreateOrConnectWithoutOrderInput | DeliveryDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: DeliveryDetailsUpsertWithWhereUniqueWithoutOrderInput | DeliveryDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DeliveryDetailsCreateManyOrderInputEnvelope
    set?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    disconnect?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    delete?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    connect?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    update?: DeliveryDetailsUpdateWithWhereUniqueWithoutOrderInput | DeliveryDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DeliveryDetailsUpdateManyWithWhereWithoutOrderInput | DeliveryDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DeliveryDetailsScalarWhereInput | DeliveryDetailsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInput
    upsert?: UserUpsertWithoutUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserInput, UserUpdateWithoutUserInput>, UserUncheckedUpdateWithoutUserInput>
  }

  export type BuyerUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutOrdersInput
    upsert?: BuyerUpsertWithoutOrdersInput
    disconnect?: BuyerWhereInput | boolean
    delete?: BuyerWhereInput | boolean
    connect?: BuyerWhereUniqueInput
    update?: XOR<XOR<BuyerUpdateToOneWithWhereWithoutOrdersInput, BuyerUpdateWithoutOrdersInput>, BuyerUncheckedUpdateWithoutOrdersInput>
  }

  export type FabricsTypeUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<FabricsTypeCreateWithoutOrdersInput, FabricsTypeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FabricsTypeCreateOrConnectWithoutOrdersInput
    upsert?: FabricsTypeUpsertWithoutOrdersInput
    disconnect?: FabricsTypeWhereInput | boolean
    delete?: FabricsTypeWhereInput | boolean
    connect?: FabricsTypeWhereUniqueInput
    update?: XOR<XOR<FabricsTypeUpdateToOneWithWhereWithoutOrdersInput, FabricsTypeUpdateWithoutOrdersInput>, FabricsTypeUncheckedUpdateWithoutOrdersInput>
  }

  export type CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput = {
    create?: XOR<CompanyCreateWithoutOrderWithCompanyNamesInput, CompanyUncheckedCreateWithoutOrderWithCompanyNamesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderWithCompanyNamesInput
    upsert?: CompanyUpsertWithoutOrderWithCompanyNamesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutOrderWithCompanyNamesInput, CompanyUpdateWithoutOrderWithCompanyNamesInput>, CompanyUncheckedUpdateWithoutOrderWithCompanyNamesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutOrderInput
    upsert?: OrderDetailsUpsertWithoutOrderInput
    disconnect?: OrderDetailsWhereInput | boolean
    delete?: OrderDetailsWhereInput | boolean
    connect?: OrderDetailsWhereUniqueInput
    update?: XOR<XOR<OrderDetailsUpdateToOneWithWhereWithoutOrderInput, OrderDetailsUpdateWithoutOrderInput>, OrderDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type yarnInformationUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<yarnInformationCreateWithoutOrderInput, yarnInformationUncheckedCreateWithoutOrderInput> | yarnInformationCreateWithoutOrderInput[] | yarnInformationUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: yarnInformationCreateOrConnectWithoutOrderInput | yarnInformationCreateOrConnectWithoutOrderInput[]
    upsert?: yarnInformationUpsertWithWhereUniqueWithoutOrderInput | yarnInformationUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: yarnInformationCreateManyOrderInputEnvelope
    set?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    disconnect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    delete?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    connect?: yarnInformationWhereUniqueInput | yarnInformationWhereUniqueInput[]
    update?: yarnInformationUpdateWithWhereUniqueWithoutOrderInput | yarnInformationUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: yarnInformationUpdateManyWithWhereWithoutOrderInput | yarnInformationUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: yarnInformationScalarWhereInput | yarnInformationScalarWhereInput[]
  }

  export type DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DeliveryDetailsCreateWithoutOrderInput, DeliveryDetailsUncheckedCreateWithoutOrderInput> | DeliveryDetailsCreateWithoutOrderInput[] | DeliveryDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryDetailsCreateOrConnectWithoutOrderInput | DeliveryDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: DeliveryDetailsUpsertWithWhereUniqueWithoutOrderInput | DeliveryDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DeliveryDetailsCreateManyOrderInputEnvelope
    set?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    disconnect?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    delete?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    connect?: DeliveryDetailsWhereUniqueInput | DeliveryDetailsWhereUniqueInput[]
    update?: DeliveryDetailsUpdateWithWhereUniqueWithoutOrderInput | DeliveryDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DeliveryDetailsUpdateManyWithWhereWithoutOrderInput | DeliveryDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DeliveryDetailsScalarWhereInput | DeliveryDetailsScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutDetailsInput = {
    create?: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneWithoutDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDetailsInput
    upsert?: OrderUpsertWithoutDetailsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDetailsInput, OrderUpdateWithoutDetailsInput>, OrderUncheckedUpdateWithoutDetailsInput>
  }

  export type YarnInformationWithDetailsCreateNestedManyWithoutYarnInformationInput = {
    create?: XOR<YarnInformationWithDetailsCreateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput> | YarnInformationWithDetailsCreateWithoutYarnInformationInput[] | YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput[]
    connectOrCreate?: YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput | YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput[]
    createMany?: YarnInformationWithDetailsCreateManyYarnInformationInputEnvelope
    connect?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
  }

  export type OrderCreateNestedOneWithoutYarnDetailsInput = {
    create?: XOR<OrderCreateWithoutYarnDetailsInput, OrderUncheckedCreateWithoutYarnDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutYarnDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutYarnDetailsInput = {
    create?: XOR<CompanyCreateWithoutYarnDetailsInput, CompanyUncheckedCreateWithoutYarnDetailsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutYarnDetailsInput
    connect?: CompanyWhereUniqueInput
  }

  export type YarnInformationWithDetailsUncheckedCreateNestedManyWithoutYarnInformationInput = {
    create?: XOR<YarnInformationWithDetailsCreateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput> | YarnInformationWithDetailsCreateWithoutYarnInformationInput[] | YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput[]
    connectOrCreate?: YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput | YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput[]
    createMany?: YarnInformationWithDetailsCreateManyYarnInformationInputEnvelope
    connect?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
  }

  export type YarnInformationWithDetailsUpdateManyWithoutYarnInformationNestedInput = {
    create?: XOR<YarnInformationWithDetailsCreateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput> | YarnInformationWithDetailsCreateWithoutYarnInformationInput[] | YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput[]
    connectOrCreate?: YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput | YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput[]
    upsert?: YarnInformationWithDetailsUpsertWithWhereUniqueWithoutYarnInformationInput | YarnInformationWithDetailsUpsertWithWhereUniqueWithoutYarnInformationInput[]
    createMany?: YarnInformationWithDetailsCreateManyYarnInformationInputEnvelope
    set?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    disconnect?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    delete?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    connect?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    update?: YarnInformationWithDetailsUpdateWithWhereUniqueWithoutYarnInformationInput | YarnInformationWithDetailsUpdateWithWhereUniqueWithoutYarnInformationInput[]
    updateMany?: YarnInformationWithDetailsUpdateManyWithWhereWithoutYarnInformationInput | YarnInformationWithDetailsUpdateManyWithWhereWithoutYarnInformationInput[]
    deleteMany?: YarnInformationWithDetailsScalarWhereInput | YarnInformationWithDetailsScalarWhereInput[]
  }

  export type OrderUpdateOneRequiredWithoutYarnDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutYarnDetailsInput, OrderUncheckedCreateWithoutYarnDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutYarnDetailsInput
    upsert?: OrderUpsertWithoutYarnDetailsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutYarnDetailsInput, OrderUpdateWithoutYarnDetailsInput>, OrderUncheckedUpdateWithoutYarnDetailsInput>
  }

  export type CompanyUpdateOneRequiredWithoutYarnDetailsNestedInput = {
    create?: XOR<CompanyCreateWithoutYarnDetailsInput, CompanyUncheckedCreateWithoutYarnDetailsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutYarnDetailsInput
    upsert?: CompanyUpsertWithoutYarnDetailsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutYarnDetailsInput, CompanyUpdateWithoutYarnDetailsInput>, CompanyUncheckedUpdateWithoutYarnDetailsInput>
  }

  export type YarnInformationWithDetailsUncheckedUpdateManyWithoutYarnInformationNestedInput = {
    create?: XOR<YarnInformationWithDetailsCreateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput> | YarnInformationWithDetailsCreateWithoutYarnInformationInput[] | YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput[]
    connectOrCreate?: YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput | YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput[]
    upsert?: YarnInformationWithDetailsUpsertWithWhereUniqueWithoutYarnInformationInput | YarnInformationWithDetailsUpsertWithWhereUniqueWithoutYarnInformationInput[]
    createMany?: YarnInformationWithDetailsCreateManyYarnInformationInputEnvelope
    set?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    disconnect?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    delete?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    connect?: YarnInformationWithDetailsWhereUniqueInput | YarnInformationWithDetailsWhereUniqueInput[]
    update?: YarnInformationWithDetailsUpdateWithWhereUniqueWithoutYarnInformationInput | YarnInformationWithDetailsUpdateWithWhereUniqueWithoutYarnInformationInput[]
    updateMany?: YarnInformationWithDetailsUpdateManyWithWhereWithoutYarnInformationInput | YarnInformationWithDetailsUpdateManyWithWhereWithoutYarnInformationInput[]
    deleteMany?: YarnInformationWithDetailsScalarWhereInput | YarnInformationWithDetailsScalarWhereInput[]
  }

  export type yarnInformationCreateNestedOneWithoutYarnInformationWithDetailsInput = {
    create?: XOR<yarnInformationCreateWithoutYarnInformationWithDetailsInput, yarnInformationUncheckedCreateWithoutYarnInformationWithDetailsInput>
    connectOrCreate?: yarnInformationCreateOrConnectWithoutYarnInformationWithDetailsInput
    connect?: yarnInformationWhereUniqueInput
  }

  export type yarnInformationUpdateOneRequiredWithoutYarnInformationWithDetailsNestedInput = {
    create?: XOR<yarnInformationCreateWithoutYarnInformationWithDetailsInput, yarnInformationUncheckedCreateWithoutYarnInformationWithDetailsInput>
    connectOrCreate?: yarnInformationCreateOrConnectWithoutYarnInformationWithDetailsInput
    upsert?: yarnInformationUpsertWithoutYarnInformationWithDetailsInput
    connect?: yarnInformationWhereUniqueInput
    update?: XOR<XOR<yarnInformationUpdateToOneWithWhereWithoutYarnInformationWithDetailsInput, yarnInformationUpdateWithoutYarnInformationWithDetailsInput>, yarnInformationUncheckedUpdateWithoutYarnInformationWithDetailsInput>
  }

  export type OrderCreateNestedOneWithoutDeliveryDetailsInput = {
    create?: XOR<OrderCreateWithoutDeliveryDetailsInput, OrderUncheckedCreateWithoutDeliveryDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutDeliveryDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutDeliveryDetailsInput, OrderUncheckedCreateWithoutDeliveryDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryDetailsInput
    upsert?: OrderUpsertWithoutDeliveryDetailsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDeliveryDetailsInput, OrderUpdateWithoutDeliveryDetailsInput>, OrderUncheckedUpdateWithoutDeliveryDetailsInput>
  }

  export type FabricsTypeCreateNestedOneWithoutProformaInvoicesInput = {
    create?: XOR<FabricsTypeCreateWithoutProformaInvoicesInput, FabricsTypeUncheckedCreateWithoutProformaInvoicesInput>
    connectOrCreate?: FabricsTypeCreateOrConnectWithoutProformaInvoicesInput
    connect?: FabricsTypeWhereUniqueInput
  }

  export type BuyerCreateNestedOneWithoutProformaInvoicesInput = {
    create?: XOR<BuyerCreateWithoutProformaInvoicesInput, BuyerUncheckedCreateWithoutProformaInvoicesInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutProformaInvoicesInput
    connect?: BuyerWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutProformaInvoicesInput = {
    create?: XOR<CompanyCreateWithoutProformaInvoicesInput, CompanyUncheckedCreateWithoutProformaInvoicesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProformaInvoicesInput
    connect?: CompanyWhereUniqueInput
  }

  export type FabricsTypeUpdateOneWithoutProformaInvoicesNestedInput = {
    create?: XOR<FabricsTypeCreateWithoutProformaInvoicesInput, FabricsTypeUncheckedCreateWithoutProformaInvoicesInput>
    connectOrCreate?: FabricsTypeCreateOrConnectWithoutProformaInvoicesInput
    upsert?: FabricsTypeUpsertWithoutProformaInvoicesInput
    disconnect?: FabricsTypeWhereInput | boolean
    delete?: FabricsTypeWhereInput | boolean
    connect?: FabricsTypeWhereUniqueInput
    update?: XOR<XOR<FabricsTypeUpdateToOneWithWhereWithoutProformaInvoicesInput, FabricsTypeUpdateWithoutProformaInvoicesInput>, FabricsTypeUncheckedUpdateWithoutProformaInvoicesInput>
  }

  export type BuyerUpdateOneWithoutProformaInvoicesNestedInput = {
    create?: XOR<BuyerCreateWithoutProformaInvoicesInput, BuyerUncheckedCreateWithoutProformaInvoicesInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutProformaInvoicesInput
    upsert?: BuyerUpsertWithoutProformaInvoicesInput
    disconnect?: BuyerWhereInput | boolean
    delete?: BuyerWhereInput | boolean
    connect?: BuyerWhereUniqueInput
    update?: XOR<XOR<BuyerUpdateToOneWithWhereWithoutProformaInvoicesInput, BuyerUpdateWithoutProformaInvoicesInput>, BuyerUncheckedUpdateWithoutProformaInvoicesInput>
  }

  export type CompanyUpdateOneRequiredWithoutProformaInvoicesNestedInput = {
    create?: XOR<CompanyCreateWithoutProformaInvoicesInput, CompanyUncheckedCreateWithoutProformaInvoicesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProformaInvoicesInput
    upsert?: CompanyUpsertWithoutProformaInvoicesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProformaInvoicesInput, CompanyUpdateWithoutProformaInvoicesInput>, CompanyUncheckedUpdateWithoutProformaInvoicesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    user?: OrderCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    user?: OrderUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
  }

  export type UserUpdateWithoutPostInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    user?: OrderUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    user?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    Post?: PostCreateNestedManyWithoutUserInput
    user?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
    user?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    Post?: PostUpdateManyWithoutUserNestedInput
    user?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
    user?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutUserInput = {
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsCreateNestedManyWithoutOrderInput
    buyer?: BuyerCreateNestedOneWithoutOrdersInput
    fabricsType?: FabricsTypeCreateNestedOneWithoutOrdersInput
    company: CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsUncheckedCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    bio?: string | null
    jobTitle?: string | null
    description?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio?: string | null
    jobTitle?: string | null
    description?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    orderNumber?: StringFilter<"Order"> | string
    companyId?: IntFilter<"Order"> | number
    buyerId?: IntNullableFilter<"Order"> | number | null
    companyName?: StringNullableFilter<"Order"> | string | null
    fabricsName?: StringFilter<"Order"> | string
    fabricsId?: IntNullableFilter<"Order"> | number | null
    buyerName?: StringFilter<"Order"> | string
    season?: StringNullableFilter<"Order"> | string | null
    pmNumber?: StringNullableFilter<"Order"> | string | null
    poNumber?: StringNullableFilter<"Order"> | string | null
    boNumber?: StringNullableFilter<"Order"> | string | null
    invoiceNumber?: StringNullableFilter<"Order"> | string | null
    orderedDate?: DateTimeFilter<"Order"> | Date | string
    targetDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    orderQuantity?: FloatFilter<"Order"> | number
    restQuantity?: FloatFilter<"Order"> | number
    updatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    status?: StringNullableFilter<"Order"> | string | null
    isProformaInvoiceCreated?: BoolFilter<"Order"> | boolean
    userId?: IntNullableFilter<"Order"> | number | null
    proformaInvoiceId?: StringNullableFilter<"Order"> | string | null
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yarnInformationCreateWithoutCompanyInput = {
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsCreateNestedManyWithoutYarnInformationInput
    order: OrderCreateNestedOneWithoutYarnDetailsInput
  }

  export type yarnInformationUncheckedCreateWithoutCompanyInput = {
    id?: number
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUncheckedCreateNestedManyWithoutYarnInformationInput
  }

  export type yarnInformationCreateOrConnectWithoutCompanyInput = {
    where: yarnInformationWhereUniqueInput
    create: XOR<yarnInformationCreateWithoutCompanyInput, yarnInformationUncheckedCreateWithoutCompanyInput>
  }

  export type yarnInformationCreateManyCompanyInputEnvelope = {
    data: yarnInformationCreateManyCompanyInput | yarnInformationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type BuyerCreateWithoutCompanyInput = {
    buyerName?: string | null
    orders?: OrderCreateNestedManyWithoutBuyerInput
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutBuyerInput
  }

  export type BuyerUncheckedCreateWithoutCompanyInput = {
    id?: number
    buyerName?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerCreateOrConnectWithoutCompanyInput = {
    where: BuyerWhereUniqueInput
    create: XOR<BuyerCreateWithoutCompanyInput, BuyerUncheckedCreateWithoutCompanyInput>
  }

  export type BuyerCreateManyCompanyInputEnvelope = {
    data: BuyerCreateManyCompanyInput | BuyerCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCompanyInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsCreateNestedManyWithoutOrderInput
    user?: UserCreateNestedOneWithoutUserInput
    buyer?: BuyerCreateNestedOneWithoutOrdersInput
    fabricsType?: FabricsTypeCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCompanyInput = {
    id?: number
    orderNumber: string
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
    details?: OrderDetailsUncheckedCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCompanyInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput>
  }

  export type OrderCreateManyCompanyInputEnvelope = {
    data: OrderCreateManyCompanyInput | OrderCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProformaInvoiceCreateWithoutCompanyInput = {
    style?: string | null
    fabricsName: string
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
    fabricsType?: FabricsTypeCreateNestedOneWithoutProformaInvoicesInput
    buyer?: BuyerCreateNestedOneWithoutProformaInvoicesInput
  }

  export type ProformaInvoiceUncheckedCreateWithoutCompanyInput = {
    id?: number
    style?: string | null
    fabricsName: string
    fabricsId?: number | null
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    buyerId?: number | null
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type ProformaInvoiceCreateOrConnectWithoutCompanyInput = {
    where: ProformaInvoiceWhereUniqueInput
    create: XOR<ProformaInvoiceCreateWithoutCompanyInput, ProformaInvoiceUncheckedCreateWithoutCompanyInput>
  }

  export type ProformaInvoiceCreateManyCompanyInputEnvelope = {
    data: ProformaInvoiceCreateManyCompanyInput | ProformaInvoiceCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type yarnInformationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: yarnInformationWhereUniqueInput
    update: XOR<yarnInformationUpdateWithoutCompanyInput, yarnInformationUncheckedUpdateWithoutCompanyInput>
    create: XOR<yarnInformationCreateWithoutCompanyInput, yarnInformationUncheckedCreateWithoutCompanyInput>
  }

  export type yarnInformationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: yarnInformationWhereUniqueInput
    data: XOR<yarnInformationUpdateWithoutCompanyInput, yarnInformationUncheckedUpdateWithoutCompanyInput>
  }

  export type yarnInformationUpdateManyWithWhereWithoutCompanyInput = {
    where: yarnInformationScalarWhereInput
    data: XOR<yarnInformationUpdateManyMutationInput, yarnInformationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type yarnInformationScalarWhereInput = {
    AND?: yarnInformationScalarWhereInput | yarnInformationScalarWhereInput[]
    OR?: yarnInformationScalarWhereInput[]
    NOT?: yarnInformationScalarWhereInput | yarnInformationScalarWhereInput[]
    id?: IntFilter<"yarnInformation"> | number
    companyId?: IntFilter<"yarnInformation"> | number
    bookingQuantity?: FloatFilter<"yarnInformation"> | number
    restQuantity?: FloatFilter<"yarnInformation"> | number
    yarn?: StringNullableFilter<"yarnInformation"> | string | null
    orderId?: IntFilter<"yarnInformation"> | number
    createdAt?: DateTimeFilter<"yarnInformation"> | Date | string
    updatedAt?: DateTimeNullableFilter<"yarnInformation"> | Date | string | null
  }

  export type BuyerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: BuyerWhereUniqueInput
    update: XOR<BuyerUpdateWithoutCompanyInput, BuyerUncheckedUpdateWithoutCompanyInput>
    create: XOR<BuyerCreateWithoutCompanyInput, BuyerUncheckedCreateWithoutCompanyInput>
  }

  export type BuyerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: BuyerWhereUniqueInput
    data: XOR<BuyerUpdateWithoutCompanyInput, BuyerUncheckedUpdateWithoutCompanyInput>
  }

  export type BuyerUpdateManyWithWhereWithoutCompanyInput = {
    where: BuyerScalarWhereInput
    data: XOR<BuyerUpdateManyMutationInput, BuyerUncheckedUpdateManyWithoutCompanyInput>
  }

  export type BuyerScalarWhereInput = {
    AND?: BuyerScalarWhereInput | BuyerScalarWhereInput[]
    OR?: BuyerScalarWhereInput[]
    NOT?: BuyerScalarWhereInput | BuyerScalarWhereInput[]
    id?: IntFilter<"Buyer"> | number
    buyerName?: StringNullableFilter<"Buyer"> | string | null
    companyId?: IntFilter<"Buyer"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutCompanyInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCompanyInput, OrderUncheckedUpdateWithoutCompanyInput>
    create: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCompanyInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCompanyInput, OrderUncheckedUpdateWithoutCompanyInput>
  }

  export type OrderUpdateManyWithWhereWithoutCompanyInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProformaInvoiceUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProformaInvoiceWhereUniqueInput
    update: XOR<ProformaInvoiceUpdateWithoutCompanyInput, ProformaInvoiceUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProformaInvoiceCreateWithoutCompanyInput, ProformaInvoiceUncheckedCreateWithoutCompanyInput>
  }

  export type ProformaInvoiceUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProformaInvoiceWhereUniqueInput
    data: XOR<ProformaInvoiceUpdateWithoutCompanyInput, ProformaInvoiceUncheckedUpdateWithoutCompanyInput>
  }

  export type ProformaInvoiceUpdateManyWithWhereWithoutCompanyInput = {
    where: ProformaInvoiceScalarWhereInput
    data: XOR<ProformaInvoiceUpdateManyMutationInput, ProformaInvoiceUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProformaInvoiceScalarWhereInput = {
    AND?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
    OR?: ProformaInvoiceScalarWhereInput[]
    NOT?: ProformaInvoiceScalarWhereInput | ProformaInvoiceScalarWhereInput[]
    id?: IntFilter<"ProformaInvoice"> | number
    style?: StringNullableFilter<"ProformaInvoice"> | string | null
    fabricsName?: StringFilter<"ProformaInvoice"> | string
    fabricsId?: IntNullableFilter<"ProformaInvoice"> | number | null
    description?: StringNullableFilter<"ProformaInvoice"> | string | null
    finishDia?: StringNullableFilter<"ProformaInvoice"> | string | null
    unitPrice?: FloatFilter<"ProformaInvoice"> | number
    totalQuantity?: IntNullableFilter<"ProformaInvoice"> | number | null
    amount?: FloatFilter<"ProformaInvoice"> | number
    companyId?: IntFilter<"ProformaInvoice"> | number
    buyerId?: IntNullableFilter<"ProformaInvoice"> | number | null
    containOrders?: StringFilter<"ProformaInvoice"> | string
    piName?: StringFilter<"ProformaInvoice"> | string
    piNumber?: StringFilter<"ProformaInvoice"> | string
    totalPIAmount?: FloatFilter<"ProformaInvoice"> | number
    totalPIQuantity?: FloatFilter<"ProformaInvoice"> | number
    createdAt?: DateTimeFilter<"ProformaInvoice"> | Date | string
  }

  export type OrderCreateWithoutBuyerInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsCreateNestedManyWithoutOrderInput
    user?: UserCreateNestedOneWithoutUserInput
    fabricsType?: FabricsTypeCreateNestedOneWithoutOrdersInput
    company: CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput
  }

  export type OrderUncheckedCreateWithoutBuyerInput = {
    id?: number
    orderNumber: string
    companyId: number
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
    details?: OrderDetailsUncheckedCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderCreateManyBuyerInputEnvelope = {
    data: OrderCreateManyBuyerInput | OrderCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ProformaInvoiceCreateWithoutBuyerInput = {
    style?: string | null
    fabricsName: string
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
    fabricsType?: FabricsTypeCreateNestedOneWithoutProformaInvoicesInput
    company: CompanyCreateNestedOneWithoutProformaInvoicesInput
  }

  export type ProformaInvoiceUncheckedCreateWithoutBuyerInput = {
    id?: number
    style?: string | null
    fabricsName: string
    fabricsId?: number | null
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    companyId: number
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type ProformaInvoiceCreateOrConnectWithoutBuyerInput = {
    where: ProformaInvoiceWhereUniqueInput
    create: XOR<ProformaInvoiceCreateWithoutBuyerInput, ProformaInvoiceUncheckedCreateWithoutBuyerInput>
  }

  export type ProformaInvoiceCreateManyBuyerInputEnvelope = {
    data: ProformaInvoiceCreateManyBuyerInput | ProformaInvoiceCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutBuyersInput = {
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutBuyersInput = {
    id?: number
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutBuyersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutBuyersInput, CompanyUncheckedCreateWithoutBuyersInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
  }

  export type OrderUpdateManyWithWhereWithoutBuyerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ProformaInvoiceUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ProformaInvoiceWhereUniqueInput
    update: XOR<ProformaInvoiceUpdateWithoutBuyerInput, ProformaInvoiceUncheckedUpdateWithoutBuyerInput>
    create: XOR<ProformaInvoiceCreateWithoutBuyerInput, ProformaInvoiceUncheckedCreateWithoutBuyerInput>
  }

  export type ProformaInvoiceUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ProformaInvoiceWhereUniqueInput
    data: XOR<ProformaInvoiceUpdateWithoutBuyerInput, ProformaInvoiceUncheckedUpdateWithoutBuyerInput>
  }

  export type ProformaInvoiceUpdateManyWithWhereWithoutBuyerInput = {
    where: ProformaInvoiceScalarWhereInput
    data: XOR<ProformaInvoiceUpdateManyMutationInput, ProformaInvoiceUncheckedUpdateManyWithoutBuyerInput>
  }

  export type CompanyUpsertWithoutBuyersInput = {
    update: XOR<CompanyUpdateWithoutBuyersInput, CompanyUncheckedUpdateWithoutBuyersInput>
    create: XOR<CompanyCreateWithoutBuyersInput, CompanyUncheckedCreateWithoutBuyersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutBuyersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutBuyersInput, CompanyUncheckedUpdateWithoutBuyersInput>
  }

  export type CompanyUpdateWithoutBuyersInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutBuyersInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type OrderCreateWithoutFabricsTypeInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsCreateNestedManyWithoutOrderInput
    user?: UserCreateNestedOneWithoutUserInput
    buyer?: BuyerCreateNestedOneWithoutOrdersInput
    company: CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput
  }

  export type OrderUncheckedCreateWithoutFabricsTypeInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
    details?: OrderDetailsUncheckedCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutFabricsTypeInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFabricsTypeInput, OrderUncheckedCreateWithoutFabricsTypeInput>
  }

  export type OrderCreateManyFabricsTypeInputEnvelope = {
    data: OrderCreateManyFabricsTypeInput | OrderCreateManyFabricsTypeInput[]
    skipDuplicates?: boolean
  }

  export type ProformaInvoiceCreateWithoutFabricsTypeInput = {
    style?: string | null
    fabricsName: string
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
    buyer?: BuyerCreateNestedOneWithoutProformaInvoicesInput
    company: CompanyCreateNestedOneWithoutProformaInvoicesInput
  }

  export type ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput = {
    id?: number
    style?: string | null
    fabricsName: string
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    companyId: number
    buyerId?: number | null
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type ProformaInvoiceCreateOrConnectWithoutFabricsTypeInput = {
    where: ProformaInvoiceWhereUniqueInput
    create: XOR<ProformaInvoiceCreateWithoutFabricsTypeInput, ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput>
  }

  export type ProformaInvoiceCreateManyFabricsTypeInputEnvelope = {
    data: ProformaInvoiceCreateManyFabricsTypeInput | ProformaInvoiceCreateManyFabricsTypeInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutFabricsTypeInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutFabricsTypeInput, OrderUncheckedUpdateWithoutFabricsTypeInput>
    create: XOR<OrderCreateWithoutFabricsTypeInput, OrderUncheckedCreateWithoutFabricsTypeInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutFabricsTypeInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutFabricsTypeInput, OrderUncheckedUpdateWithoutFabricsTypeInput>
  }

  export type OrderUpdateManyWithWhereWithoutFabricsTypeInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutFabricsTypeInput>
  }

  export type ProformaInvoiceUpsertWithWhereUniqueWithoutFabricsTypeInput = {
    where: ProformaInvoiceWhereUniqueInput
    update: XOR<ProformaInvoiceUpdateWithoutFabricsTypeInput, ProformaInvoiceUncheckedUpdateWithoutFabricsTypeInput>
    create: XOR<ProformaInvoiceCreateWithoutFabricsTypeInput, ProformaInvoiceUncheckedCreateWithoutFabricsTypeInput>
  }

  export type ProformaInvoiceUpdateWithWhereUniqueWithoutFabricsTypeInput = {
    where: ProformaInvoiceWhereUniqueInput
    data: XOR<ProformaInvoiceUpdateWithoutFabricsTypeInput, ProformaInvoiceUncheckedUpdateWithoutFabricsTypeInput>
  }

  export type ProformaInvoiceUpdateManyWithWhereWithoutFabricsTypeInput = {
    where: ProformaInvoiceScalarWhereInput
    data: XOR<ProformaInvoiceUpdateManyMutationInput, ProformaInvoiceUncheckedUpdateManyWithoutFabricsTypeInput>
  }

  export type OrderDetailsCreateWithoutOrderInput = {
    style?: string | null
    yarnCount?: string | null
    yarnBrand?: string | null
    yarnLot?: string | null
    lycraCount?: string | null
    lycraBrand?: string | null
    lycraLot?: string | null
    polyStarCount?: string | null
    polyStarBrand?: string | null
    polyStarLot?: string | null
    mc_DIA?: string | null
    e_DIA?: string | null
    f_GSM?: string | null
    sl?: string | null
    colour?: string | null
  }

  export type OrderDetailsUncheckedCreateWithoutOrderInput = {
    id?: number
    style?: string | null
    yarnCount?: string | null
    yarnBrand?: string | null
    yarnLot?: string | null
    lycraCount?: string | null
    lycraBrand?: string | null
    lycraLot?: string | null
    polyStarCount?: string | null
    polyStarBrand?: string | null
    polyStarLot?: string | null
    mc_DIA?: string | null
    e_DIA?: string | null
    f_GSM?: string | null
    sl?: string | null
    colour?: string | null
  }

  export type OrderDetailsCreateOrConnectWithoutOrderInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
  }

  export type yarnInformationCreateWithoutOrderInput = {
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsCreateNestedManyWithoutYarnInformationInput
    company: CompanyCreateNestedOneWithoutYarnDetailsInput
  }

  export type yarnInformationUncheckedCreateWithoutOrderInput = {
    id?: number
    companyId: number
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUncheckedCreateNestedManyWithoutYarnInformationInput
  }

  export type yarnInformationCreateOrConnectWithoutOrderInput = {
    where: yarnInformationWhereUniqueInput
    create: XOR<yarnInformationCreateWithoutOrderInput, yarnInformationUncheckedCreateWithoutOrderInput>
  }

  export type yarnInformationCreateManyOrderInputEnvelope = {
    data: yarnInformationCreateManyOrderInput | yarnInformationCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryDetailsCreateWithoutOrderInput = {
    deliveredQuantity: number
    createdAt?: Date | string
    deliveredBy?: string | null
  }

  export type DeliveryDetailsUncheckedCreateWithoutOrderInput = {
    id?: number
    deliveredQuantity: number
    createdAt?: Date | string
    deliveredBy?: string | null
  }

  export type DeliveryDetailsCreateOrConnectWithoutOrderInput = {
    where: DeliveryDetailsWhereUniqueInput
    create: XOR<DeliveryDetailsCreateWithoutOrderInput, DeliveryDetailsUncheckedCreateWithoutOrderInput>
  }

  export type DeliveryDetailsCreateManyOrderInputEnvelope = {
    data: DeliveryDetailsCreateManyOrderInput | DeliveryDetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUserInput = {
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    Post?: PostCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    email?: string | null
    password?: string | null
    isAdmin?: boolean
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isBlock?: boolean
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
  }

  export type BuyerCreateWithoutOrdersInput = {
    buyerName?: string | null
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutBuyerInput
    company: CompanyCreateNestedOneWithoutBuyersInput
  }

  export type BuyerUncheckedCreateWithoutOrdersInput = {
    id?: number
    buyerName?: string | null
    companyId: number
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerCreateOrConnectWithoutOrdersInput = {
    where: BuyerWhereUniqueInput
    create: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
  }

  export type FabricsTypeCreateWithoutOrdersInput = {
    fabricsName: string
    description?: string | null
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutFabricsTypeInput
  }

  export type FabricsTypeUncheckedCreateWithoutOrdersInput = {
    id?: number
    fabricsName: string
    description?: string | null
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutFabricsTypeInput
  }

  export type FabricsTypeCreateOrConnectWithoutOrdersInput = {
    where: FabricsTypeWhereUniqueInput
    create: XOR<FabricsTypeCreateWithoutOrdersInput, FabricsTypeUncheckedCreateWithoutOrdersInput>
  }

  export type CompanyCreateWithoutOrderWithCompanyNamesInput = {
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationCreateNestedManyWithoutCompanyInput
    buyers?: BuyerCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOrderWithCompanyNamesInput = {
    id?: number
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutCompanyInput
    buyers?: BuyerUncheckedCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutOrderWithCompanyNamesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutOrderWithCompanyNamesInput, CompanyUncheckedCreateWithoutOrderWithCompanyNamesInput>
  }

  export type OrderDetailsUpsertWithoutOrderInput = {
    update: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailsCreateWithoutOrderInput, OrderDetailsUncheckedCreateWithoutOrderInput>
    where?: OrderDetailsWhereInput
  }

  export type OrderDetailsUpdateToOneWithWhereWithoutOrderInput = {
    where?: OrderDetailsWhereInput
    data: XOR<OrderDetailsUpdateWithoutOrderInput, OrderDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailsUpdateWithoutOrderInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    yarnCount?: NullableStringFieldUpdateOperationsInput | string | null
    yarnBrand?: NullableStringFieldUpdateOperationsInput | string | null
    yarnLot?: NullableStringFieldUpdateOperationsInput | string | null
    lycraCount?: NullableStringFieldUpdateOperationsInput | string | null
    lycraBrand?: NullableStringFieldUpdateOperationsInput | string | null
    lycraLot?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarCount?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarBrand?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarLot?: NullableStringFieldUpdateOperationsInput | string | null
    mc_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    e_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    f_GSM?: NullableStringFieldUpdateOperationsInput | string | null
    sl?: NullableStringFieldUpdateOperationsInput | string | null
    colour?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    yarnCount?: NullableStringFieldUpdateOperationsInput | string | null
    yarnBrand?: NullableStringFieldUpdateOperationsInput | string | null
    yarnLot?: NullableStringFieldUpdateOperationsInput | string | null
    lycraCount?: NullableStringFieldUpdateOperationsInput | string | null
    lycraBrand?: NullableStringFieldUpdateOperationsInput | string | null
    lycraLot?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarCount?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarBrand?: NullableStringFieldUpdateOperationsInput | string | null
    polyStarLot?: NullableStringFieldUpdateOperationsInput | string | null
    mc_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    e_DIA?: NullableStringFieldUpdateOperationsInput | string | null
    f_GSM?: NullableStringFieldUpdateOperationsInput | string | null
    sl?: NullableStringFieldUpdateOperationsInput | string | null
    colour?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yarnInformationUpsertWithWhereUniqueWithoutOrderInput = {
    where: yarnInformationWhereUniqueInput
    update: XOR<yarnInformationUpdateWithoutOrderInput, yarnInformationUncheckedUpdateWithoutOrderInput>
    create: XOR<yarnInformationCreateWithoutOrderInput, yarnInformationUncheckedCreateWithoutOrderInput>
  }

  export type yarnInformationUpdateWithWhereUniqueWithoutOrderInput = {
    where: yarnInformationWhereUniqueInput
    data: XOR<yarnInformationUpdateWithoutOrderInput, yarnInformationUncheckedUpdateWithoutOrderInput>
  }

  export type yarnInformationUpdateManyWithWhereWithoutOrderInput = {
    where: yarnInformationScalarWhereInput
    data: XOR<yarnInformationUpdateManyMutationInput, yarnInformationUncheckedUpdateManyWithoutOrderInput>
  }

  export type DeliveryDetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: DeliveryDetailsWhereUniqueInput
    update: XOR<DeliveryDetailsUpdateWithoutOrderInput, DeliveryDetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<DeliveryDetailsCreateWithoutOrderInput, DeliveryDetailsUncheckedCreateWithoutOrderInput>
  }

  export type DeliveryDetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: DeliveryDetailsWhereUniqueInput
    data: XOR<DeliveryDetailsUpdateWithoutOrderInput, DeliveryDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type DeliveryDetailsUpdateManyWithWhereWithoutOrderInput = {
    where: DeliveryDetailsScalarWhereInput
    data: XOR<DeliveryDetailsUpdateManyMutationInput, DeliveryDetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type DeliveryDetailsScalarWhereInput = {
    AND?: DeliveryDetailsScalarWhereInput | DeliveryDetailsScalarWhereInput[]
    OR?: DeliveryDetailsScalarWhereInput[]
    NOT?: DeliveryDetailsScalarWhereInput | DeliveryDetailsScalarWhereInput[]
    id?: IntFilter<"DeliveryDetails"> | number
    orderId?: IntFilter<"DeliveryDetails"> | number
    deliveredQuantity?: FloatFilter<"DeliveryDetails"> | number
    createdAt?: DateTimeFilter<"DeliveryDetails"> | Date | string
    deliveredBy?: StringNullableFilter<"DeliveryDetails"> | string | null
  }

  export type UserUpsertWithoutUserInput = {
    update: XOR<UserUpdateWithoutUserInput, UserUncheckedUpdateWithoutUserInput>
    create: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserInput, UserUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    Post?: PostUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlock?: BoolFieldUpdateOperationsInput | boolean
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BuyerUpsertWithoutOrdersInput = {
    update: XOR<BuyerUpdateWithoutOrdersInput, BuyerUncheckedUpdateWithoutOrdersInput>
    create: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
    where?: BuyerWhereInput
  }

  export type BuyerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: BuyerWhereInput
    data: XOR<BuyerUpdateWithoutOrdersInput, BuyerUncheckedUpdateWithoutOrdersInput>
  }

  export type BuyerUpdateWithoutOrdersInput = {
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutBuyerNestedInput
    company?: CompanyUpdateOneRequiredWithoutBuyersNestedInput
  }

  export type BuyerUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type FabricsTypeUpsertWithoutOrdersInput = {
    update: XOR<FabricsTypeUpdateWithoutOrdersInput, FabricsTypeUncheckedUpdateWithoutOrdersInput>
    create: XOR<FabricsTypeCreateWithoutOrdersInput, FabricsTypeUncheckedCreateWithoutOrdersInput>
    where?: FabricsTypeWhereInput
  }

  export type FabricsTypeUpdateToOneWithWhereWithoutOrdersInput = {
    where?: FabricsTypeWhereInput
    data: XOR<FabricsTypeUpdateWithoutOrdersInput, FabricsTypeUncheckedUpdateWithoutOrdersInput>
  }

  export type FabricsTypeUpdateWithoutOrdersInput = {
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutFabricsTypeNestedInput
  }

  export type FabricsTypeUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutFabricsTypeNestedInput
  }

  export type CompanyUpsertWithoutOrderWithCompanyNamesInput = {
    update: XOR<CompanyUpdateWithoutOrderWithCompanyNamesInput, CompanyUncheckedUpdateWithoutOrderWithCompanyNamesInput>
    create: XOR<CompanyCreateWithoutOrderWithCompanyNamesInput, CompanyUncheckedCreateWithoutOrderWithCompanyNamesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutOrderWithCompanyNamesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutOrderWithCompanyNamesInput, CompanyUncheckedUpdateWithoutOrderWithCompanyNamesInput>
  }

  export type CompanyUpdateWithoutOrderWithCompanyNamesInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUpdateManyWithoutCompanyNestedInput
    buyers?: BuyerUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOrderWithCompanyNamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutCompanyNestedInput
    buyers?: BuyerUncheckedUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type OrderCreateWithoutDetailsInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    yarnDetails?: yarnInformationCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsCreateNestedManyWithoutOrderInput
    user?: UserCreateNestedOneWithoutUserInput
    buyer?: BuyerCreateNestedOneWithoutOrdersInput
    fabricsType?: FabricsTypeCreateNestedOneWithoutOrdersInput
    company: CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput
  }

  export type OrderUncheckedCreateWithoutDetailsInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutOrderInput
    deliveryDetails?: DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
  }

  export type OrderUpsertWithoutDetailsInput = {
    update: XOR<OrderUpdateWithoutDetailsInput, OrderUncheckedUpdateWithoutDetailsInput>
    create: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDetailsInput, OrderUncheckedUpdateWithoutDetailsInput>
  }

  export type OrderUpdateWithoutDetailsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneWithoutUserNestedInput
    buyer?: BuyerUpdateOneWithoutOrdersNestedInput
    fabricsType?: FabricsTypeUpdateOneWithoutOrdersNestedInput
    company?: CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput
  }

  export type OrderUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type YarnInformationWithDetailsCreateWithoutYarnInformationInput = {
    receivedQuantity: number
    createdAt?: Date | string
  }

  export type YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput = {
    id?: number
    receivedQuantity: number
    createdAt?: Date | string
  }

  export type YarnInformationWithDetailsCreateOrConnectWithoutYarnInformationInput = {
    where: YarnInformationWithDetailsWhereUniqueInput
    create: XOR<YarnInformationWithDetailsCreateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput>
  }

  export type YarnInformationWithDetailsCreateManyYarnInformationInputEnvelope = {
    data: YarnInformationWithDetailsCreateManyYarnInformationInput | YarnInformationWithDetailsCreateManyYarnInformationInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutYarnDetailsInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsCreateNestedOneWithoutOrderInput
    deliveryDetails?: DeliveryDetailsCreateNestedManyWithoutOrderInput
    user?: UserCreateNestedOneWithoutUserInput
    buyer?: BuyerCreateNestedOneWithoutOrdersInput
    fabricsType?: FabricsTypeCreateNestedOneWithoutOrdersInput
    company: CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput
  }

  export type OrderUncheckedCreateWithoutYarnDetailsInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
    details?: OrderDetailsUncheckedCreateNestedOneWithoutOrderInput
    deliveryDetails?: DeliveryDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutYarnDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutYarnDetailsInput, OrderUncheckedCreateWithoutYarnDetailsInput>
  }

  export type CompanyCreateWithoutYarnDetailsInput = {
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    buyers?: BuyerCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutYarnDetailsInput = {
    id?: number
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    buyers?: BuyerUncheckedCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    proformaInvoices?: ProformaInvoiceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutYarnDetailsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutYarnDetailsInput, CompanyUncheckedCreateWithoutYarnDetailsInput>
  }

  export type YarnInformationWithDetailsUpsertWithWhereUniqueWithoutYarnInformationInput = {
    where: YarnInformationWithDetailsWhereUniqueInput
    update: XOR<YarnInformationWithDetailsUpdateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedUpdateWithoutYarnInformationInput>
    create: XOR<YarnInformationWithDetailsCreateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedCreateWithoutYarnInformationInput>
  }

  export type YarnInformationWithDetailsUpdateWithWhereUniqueWithoutYarnInformationInput = {
    where: YarnInformationWithDetailsWhereUniqueInput
    data: XOR<YarnInformationWithDetailsUpdateWithoutYarnInformationInput, YarnInformationWithDetailsUncheckedUpdateWithoutYarnInformationInput>
  }

  export type YarnInformationWithDetailsUpdateManyWithWhereWithoutYarnInformationInput = {
    where: YarnInformationWithDetailsScalarWhereInput
    data: XOR<YarnInformationWithDetailsUpdateManyMutationInput, YarnInformationWithDetailsUncheckedUpdateManyWithoutYarnInformationInput>
  }

  export type YarnInformationWithDetailsScalarWhereInput = {
    AND?: YarnInformationWithDetailsScalarWhereInput | YarnInformationWithDetailsScalarWhereInput[]
    OR?: YarnInformationWithDetailsScalarWhereInput[]
    NOT?: YarnInformationWithDetailsScalarWhereInput | YarnInformationWithDetailsScalarWhereInput[]
    id?: IntFilter<"YarnInformationWithDetails"> | number
    yarnInfoID?: IntFilter<"YarnInformationWithDetails"> | number
    receivedQuantity?: FloatFilter<"YarnInformationWithDetails"> | number
    createdAt?: DateTimeFilter<"YarnInformationWithDetails"> | Date | string
  }

  export type OrderUpsertWithoutYarnDetailsInput = {
    update: XOR<OrderUpdateWithoutYarnDetailsInput, OrderUncheckedUpdateWithoutYarnDetailsInput>
    create: XOR<OrderCreateWithoutYarnDetailsInput, OrderUncheckedCreateWithoutYarnDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutYarnDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutYarnDetailsInput, OrderUncheckedUpdateWithoutYarnDetailsInput>
  }

  export type OrderUpdateWithoutYarnDetailsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUpdateOneWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneWithoutUserNestedInput
    buyer?: BuyerUpdateOneWithoutOrdersNestedInput
    fabricsType?: FabricsTypeUpdateOneWithoutOrdersNestedInput
    company?: CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput
  }

  export type OrderUncheckedUpdateWithoutYarnDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type CompanyUpsertWithoutYarnDetailsInput = {
    update: XOR<CompanyUpdateWithoutYarnDetailsInput, CompanyUncheckedUpdateWithoutYarnDetailsInput>
    create: XOR<CompanyCreateWithoutYarnDetailsInput, CompanyUncheckedCreateWithoutYarnDetailsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutYarnDetailsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutYarnDetailsInput, CompanyUncheckedUpdateWithoutYarnDetailsInput>
  }

  export type CompanyUpdateWithoutYarnDetailsInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    buyers?: BuyerUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutYarnDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    buyers?: BuyerUncheckedUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type yarnInformationCreateWithoutYarnInformationWithDetailsInput = {
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    order: OrderCreateNestedOneWithoutYarnDetailsInput
    company: CompanyCreateNestedOneWithoutYarnDetailsInput
  }

  export type yarnInformationUncheckedCreateWithoutYarnInformationWithDetailsInput = {
    id?: number
    companyId: number
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type yarnInformationCreateOrConnectWithoutYarnInformationWithDetailsInput = {
    where: yarnInformationWhereUniqueInput
    create: XOR<yarnInformationCreateWithoutYarnInformationWithDetailsInput, yarnInformationUncheckedCreateWithoutYarnInformationWithDetailsInput>
  }

  export type yarnInformationUpsertWithoutYarnInformationWithDetailsInput = {
    update: XOR<yarnInformationUpdateWithoutYarnInformationWithDetailsInput, yarnInformationUncheckedUpdateWithoutYarnInformationWithDetailsInput>
    create: XOR<yarnInformationCreateWithoutYarnInformationWithDetailsInput, yarnInformationUncheckedCreateWithoutYarnInformationWithDetailsInput>
    where?: yarnInformationWhereInput
  }

  export type yarnInformationUpdateToOneWithWhereWithoutYarnInformationWithDetailsInput = {
    where?: yarnInformationWhereInput
    data: XOR<yarnInformationUpdateWithoutYarnInformationWithDetailsInput, yarnInformationUncheckedUpdateWithoutYarnInformationWithDetailsInput>
  }

  export type yarnInformationUpdateWithoutYarnInformationWithDetailsInput = {
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutYarnDetailsNestedInput
    company?: CompanyUpdateOneRequiredWithoutYarnDetailsNestedInput
  }

  export type yarnInformationUncheckedUpdateWithoutYarnInformationWithDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateWithoutDeliveryDetailsInput = {
    orderNumber: string
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
    details?: OrderDetailsCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationCreateNestedManyWithoutOrderInput
    user?: UserCreateNestedOneWithoutUserInput
    buyer?: BuyerCreateNestedOneWithoutOrdersInput
    fabricsType?: FabricsTypeCreateNestedOneWithoutOrdersInput
    company: CompanyCreateNestedOneWithoutOrderWithCompanyNamesInput
  }

  export type OrderUncheckedCreateWithoutDeliveryDetailsInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
    details?: OrderDetailsUncheckedCreateNestedOneWithoutOrderInput
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDeliveryDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDeliveryDetailsInput, OrderUncheckedCreateWithoutDeliveryDetailsInput>
  }

  export type OrderUpsertWithoutDeliveryDetailsInput = {
    update: XOR<OrderUpdateWithoutDeliveryDetailsInput, OrderUncheckedUpdateWithoutDeliveryDetailsInput>
    create: XOR<OrderCreateWithoutDeliveryDetailsInput, OrderUncheckedCreateWithoutDeliveryDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDeliveryDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDeliveryDetailsInput, OrderUncheckedUpdateWithoutDeliveryDetailsInput>
  }

  export type OrderUpdateWithoutDeliveryDetailsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneWithoutUserNestedInput
    buyer?: BuyerUpdateOneWithoutOrdersNestedInput
    fabricsType?: FabricsTypeUpdateOneWithoutOrdersNestedInput
    company?: CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput
  }

  export type OrderUncheckedUpdateWithoutDeliveryDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type FabricsTypeCreateWithoutProformaInvoicesInput = {
    fabricsName: string
    description?: string | null
    orders?: OrderCreateNestedManyWithoutFabricsTypeInput
  }

  export type FabricsTypeUncheckedCreateWithoutProformaInvoicesInput = {
    id?: number
    fabricsName: string
    description?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutFabricsTypeInput
  }

  export type FabricsTypeCreateOrConnectWithoutProformaInvoicesInput = {
    where: FabricsTypeWhereUniqueInput
    create: XOR<FabricsTypeCreateWithoutProformaInvoicesInput, FabricsTypeUncheckedCreateWithoutProformaInvoicesInput>
  }

  export type BuyerCreateWithoutProformaInvoicesInput = {
    buyerName?: string | null
    orders?: OrderCreateNestedManyWithoutBuyerInput
    company: CompanyCreateNestedOneWithoutBuyersInput
  }

  export type BuyerUncheckedCreateWithoutProformaInvoicesInput = {
    id?: number
    buyerName?: string | null
    companyId: number
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerCreateOrConnectWithoutProformaInvoicesInput = {
    where: BuyerWhereUniqueInput
    create: XOR<BuyerCreateWithoutProformaInvoicesInput, BuyerUncheckedCreateWithoutProformaInvoicesInput>
  }

  export type CompanyCreateWithoutProformaInvoicesInput = {
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationCreateNestedManyWithoutCompanyInput
    buyers?: BuyerCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutProformaInvoicesInput = {
    id?: number
    companyName: string
    location: string
    email?: string | null
    contact?: string | null
    shortForm?: string | null
    yarnDetails?: yarnInformationUncheckedCreateNestedManyWithoutCompanyInput
    buyers?: BuyerUncheckedCreateNestedManyWithoutCompanyInput
    orderWithCompanyNames?: OrderUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutProformaInvoicesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProformaInvoicesInput, CompanyUncheckedCreateWithoutProformaInvoicesInput>
  }

  export type FabricsTypeUpsertWithoutProformaInvoicesInput = {
    update: XOR<FabricsTypeUpdateWithoutProformaInvoicesInput, FabricsTypeUncheckedUpdateWithoutProformaInvoicesInput>
    create: XOR<FabricsTypeCreateWithoutProformaInvoicesInput, FabricsTypeUncheckedCreateWithoutProformaInvoicesInput>
    where?: FabricsTypeWhereInput
  }

  export type FabricsTypeUpdateToOneWithWhereWithoutProformaInvoicesInput = {
    where?: FabricsTypeWhereInput
    data: XOR<FabricsTypeUpdateWithoutProformaInvoicesInput, FabricsTypeUncheckedUpdateWithoutProformaInvoicesInput>
  }

  export type FabricsTypeUpdateWithoutProformaInvoicesInput = {
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutFabricsTypeNestedInput
  }

  export type FabricsTypeUncheckedUpdateWithoutProformaInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutFabricsTypeNestedInput
  }

  export type BuyerUpsertWithoutProformaInvoicesInput = {
    update: XOR<BuyerUpdateWithoutProformaInvoicesInput, BuyerUncheckedUpdateWithoutProformaInvoicesInput>
    create: XOR<BuyerCreateWithoutProformaInvoicesInput, BuyerUncheckedCreateWithoutProformaInvoicesInput>
    where?: BuyerWhereInput
  }

  export type BuyerUpdateToOneWithWhereWithoutProformaInvoicesInput = {
    where?: BuyerWhereInput
    data: XOR<BuyerUpdateWithoutProformaInvoicesInput, BuyerUncheckedUpdateWithoutProformaInvoicesInput>
  }

  export type BuyerUpdateWithoutProformaInvoicesInput = {
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    company?: CompanyUpdateOneRequiredWithoutBuyersNestedInput
  }

  export type BuyerUncheckedUpdateWithoutProformaInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type CompanyUpsertWithoutProformaInvoicesInput = {
    update: XOR<CompanyUpdateWithoutProformaInvoicesInput, CompanyUncheckedUpdateWithoutProformaInvoicesInput>
    create: XOR<CompanyCreateWithoutProformaInvoicesInput, CompanyUncheckedCreateWithoutProformaInvoicesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProformaInvoicesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProformaInvoicesInput, CompanyUncheckedUpdateWithoutProformaInvoicesInput>
  }

  export type CompanyUpdateWithoutProformaInvoicesInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUpdateManyWithoutCompanyNestedInput
    buyers?: BuyerUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutProformaInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    shortForm?: NullableStringFieldUpdateOperationsInput | string | null
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutCompanyNestedInput
    buyers?: BuyerUncheckedUpdateManyWithoutCompanyNestedInput
    orderWithCompanyNames?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    createdAt?: Date | string
    content?: string | null
    published?: boolean
  }

  export type OrderCreateManyUserInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    proformaInvoiceId?: string | null
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUpdateWithoutUserInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUpdateManyWithoutOrderNestedInput
    buyer?: BuyerUpdateOneWithoutOrdersNestedInput
    fabricsType?: FabricsTypeUpdateOneWithoutOrdersNestedInput
    company?: CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yarnInformationCreateManyCompanyInput = {
    id?: number
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BuyerCreateManyCompanyInput = {
    id?: number
    buyerName?: string | null
  }

  export type OrderCreateManyCompanyInput = {
    id?: number
    orderNumber: string
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
  }

  export type ProformaInvoiceCreateManyCompanyInput = {
    id?: number
    style?: string | null
    fabricsName: string
    fabricsId?: number | null
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    buyerId?: number | null
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type yarnInformationUpdateWithoutCompanyInput = {
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUpdateManyWithoutYarnInformationNestedInput
    order?: OrderUpdateOneRequiredWithoutYarnDetailsNestedInput
  }

  export type yarnInformationUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUncheckedUpdateManyWithoutYarnInformationNestedInput
  }

  export type yarnInformationUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BuyerUpdateWithoutCompanyInput = {
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    proformaInvoices?: ProformaInvoiceUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    proformaInvoices?: ProformaInvoiceUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutCompanyInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneWithoutUserNestedInput
    buyer?: BuyerUpdateOneWithoutOrdersNestedInput
    fabricsType?: FabricsTypeUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProformaInvoiceUpdateWithoutCompanyInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fabricsType?: FabricsTypeUpdateOneWithoutProformaInvoicesNestedInput
    buyer?: BuyerUpdateOneWithoutProformaInvoicesNestedInput
  }

  export type ProformaInvoiceUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProformaInvoiceUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyBuyerInput = {
    id?: number
    orderNumber: string
    companyId: number
    companyName?: string | null
    fabricsName: string
    fabricsId?: number | null
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
  }

  export type ProformaInvoiceCreateManyBuyerInput = {
    id?: number
    style?: string | null
    fabricsName: string
    fabricsId?: number | null
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    companyId: number
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutBuyerInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneWithoutUserNestedInput
    fabricsType?: FabricsTypeUpdateOneWithoutOrdersNestedInput
    company?: CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput
  }

  export type OrderUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProformaInvoiceUpdateWithoutBuyerInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fabricsType?: FabricsTypeUpdateOneWithoutProformaInvoicesNestedInput
    company?: CompanyUpdateOneRequiredWithoutProformaInvoicesNestedInput
  }

  export type ProformaInvoiceUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProformaInvoiceUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    fabricsId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyFabricsTypeInput = {
    id?: number
    orderNumber: string
    companyId: number
    buyerId?: number | null
    companyName?: string | null
    fabricsName: string
    buyerName: string
    season?: string | null
    pmNumber?: string | null
    poNumber?: string | null
    boNumber?: string | null
    invoiceNumber?: string | null
    orderedDate?: Date | string
    targetDate?: Date | string | null
    createdAt?: Date | string
    orderQuantity: number
    restQuantity: number
    updatedAt?: Date | string | null
    status?: string | null
    isProformaInvoiceCreated?: boolean
    userId?: number | null
    proformaInvoiceId?: string | null
  }

  export type ProformaInvoiceCreateManyFabricsTypeInput = {
    id?: number
    style?: string | null
    fabricsName: string
    description?: string | null
    finishDia?: string | null
    unitPrice: number
    totalQuantity?: number | null
    amount: number
    companyId: number
    buyerId?: number | null
    containOrders: string
    piName: string
    piNumber: string
    totalPIAmount: number
    totalPIQuantity: number
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutFabricsTypeInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneWithoutUserNestedInput
    buyer?: BuyerUpdateOneWithoutOrdersNestedInput
    company?: CompanyUpdateOneRequiredWithoutOrderWithCompanyNamesNestedInput
  }

  export type OrderUncheckedUpdateWithoutFabricsTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailsUncheckedUpdateOneWithoutOrderNestedInput
    yarnDetails?: yarnInformationUncheckedUpdateManyWithoutOrderNestedInput
    deliveryDetails?: DeliveryDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutFabricsTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    pmNumber?: NullableStringFieldUpdateOperationsInput | string | null
    poNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isProformaInvoiceCreated?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    proformaInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProformaInvoiceUpdateWithoutFabricsTypeInput = {
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerUpdateOneWithoutProformaInvoicesNestedInput
    company?: CompanyUpdateOneRequiredWithoutProformaInvoicesNestedInput
  }

  export type ProformaInvoiceUncheckedUpdateWithoutFabricsTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProformaInvoiceUncheckedUpdateManyWithoutFabricsTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: NullableStringFieldUpdateOperationsInput | string | null
    fabricsName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    finishDia?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    buyerId?: NullableIntFieldUpdateOperationsInput | number | null
    containOrders?: StringFieldUpdateOperationsInput | string
    piName?: StringFieldUpdateOperationsInput | string
    piNumber?: StringFieldUpdateOperationsInput | string
    totalPIAmount?: FloatFieldUpdateOperationsInput | number
    totalPIQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type yarnInformationCreateManyOrderInput = {
    id?: number
    companyId: number
    bookingQuantity: number
    restQuantity: number
    yarn?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DeliveryDetailsCreateManyOrderInput = {
    id?: number
    deliveredQuantity: number
    createdAt?: Date | string
    deliveredBy?: string | null
  }

  export type yarnInformationUpdateWithoutOrderInput = {
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUpdateManyWithoutYarnInformationNestedInput
    company?: CompanyUpdateOneRequiredWithoutYarnDetailsNestedInput
  }

  export type yarnInformationUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    yarnInformationWithDetails?: YarnInformationWithDetailsUncheckedUpdateManyWithoutYarnInformationNestedInput
  }

  export type yarnInformationUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    bookingQuantity?: FloatFieldUpdateOperationsInput | number
    restQuantity?: FloatFieldUpdateOperationsInput | number
    yarn?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryDetailsUpdateWithoutOrderInput = {
    deliveredQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryDetailsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryDetailsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YarnInformationWithDetailsCreateManyYarnInformationInput = {
    id?: number
    receivedQuantity: number
    createdAt?: Date | string
  }

  export type YarnInformationWithDetailsUpdateWithoutYarnInformationInput = {
    receivedQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YarnInformationWithDetailsUncheckedUpdateWithoutYarnInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    receivedQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YarnInformationWithDetailsUncheckedUpdateManyWithoutYarnInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    receivedQuantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuyerCountOutputTypeDefaultArgs instead
     */
    export type BuyerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuyerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricsTypeCountOutputTypeDefaultArgs instead
     */
    export type FabricsTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricsTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YarnInformationCountOutputTypeDefaultArgs instead
     */
    export type YarnInformationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YarnInformationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuyerDefaultArgs instead
     */
    export type BuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuyerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FabricsTypeDefaultArgs instead
     */
    export type FabricsTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FabricsTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDetailsDefaultArgs instead
     */
    export type OrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use yarnInformationDefaultArgs instead
     */
    export type yarnInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = yarnInformationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YarnInformationWithDetailsDefaultArgs instead
     */
    export type YarnInformationWithDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YarnInformationWithDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryDetailsDefaultArgs instead
     */
    export type DeliveryDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProformaInvoiceDefaultArgs instead
     */
    export type ProformaInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProformaInvoiceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}