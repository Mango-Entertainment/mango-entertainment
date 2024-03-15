
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Selection
 * 
 */
export type Selection = $Result.DefaultSelection<Prisma.$SelectionPayload>
/**
 * Model RegularThumb
 * 
 */
export type RegularThumb = $Result.DefaultSelection<Prisma.$RegularThumbPayload>
/**
 * Model TrendingThumb
 * 
 */
export type TrendingThumb = $Result.DefaultSelection<Prisma.$TrendingThumbPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.selection`: Exposes CRUD operations for the **Selection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Selections
    * const selections = await prisma.selection.findMany()
    * ```
    */
  get selection(): Prisma.SelectionDelegate<ExtArgs>;

  /**
   * `prisma.regularThumb`: Exposes CRUD operations for the **RegularThumb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegularThumbs
    * const regularThumbs = await prisma.regularThumb.findMany()
    * ```
    */
  get regularThumb(): Prisma.RegularThumbDelegate<ExtArgs>;

  /**
   * `prisma.trendingThumb`: Exposes CRUD operations for the **TrendingThumb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrendingThumbs
    * const trendingThumbs = await prisma.trendingThumb.findMany()
    * ```
    */
  get trendingThumb(): Prisma.TrendingThumbDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.11.0
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
    User: 'User',
    Selection: 'Selection',
    RegularThumb: 'RegularThumb',
    TrendingThumb: 'TrendingThumb'
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
      modelProps: 'user' | 'selection' | 'regularThumb' | 'trendingThumb'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
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
      Selection: {
        payload: Prisma.$SelectionPayload<ExtArgs>
        fields: Prisma.SelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SelectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SelectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload>
          }
          findFirst: {
            args: Prisma.SelectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SelectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload>
          }
          findMany: {
            args: Prisma.SelectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload>[]
          }
          create: {
            args: Prisma.SelectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload>
          }
          createMany: {
            args: Prisma.SelectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SelectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload>
          }
          update: {
            args: Prisma.SelectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload>
          }
          deleteMany: {
            args: Prisma.SelectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SelectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SelectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SelectionPayload>
          }
          aggregate: {
            args: Prisma.SelectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSelection>
          }
          groupBy: {
            args: Prisma.SelectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SelectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SelectionCountArgs<ExtArgs>,
            result: $Utils.Optional<SelectionCountAggregateOutputType> | number
          }
        }
      }
      RegularThumb: {
        payload: Prisma.$RegularThumbPayload<ExtArgs>
        fields: Prisma.RegularThumbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegularThumbFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegularThumbFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload>
          }
          findFirst: {
            args: Prisma.RegularThumbFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegularThumbFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload>
          }
          findMany: {
            args: Prisma.RegularThumbFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload>[]
          }
          create: {
            args: Prisma.RegularThumbCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload>
          }
          createMany: {
            args: Prisma.RegularThumbCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RegularThumbDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload>
          }
          update: {
            args: Prisma.RegularThumbUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload>
          }
          deleteMany: {
            args: Prisma.RegularThumbDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RegularThumbUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RegularThumbUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularThumbPayload>
          }
          aggregate: {
            args: Prisma.RegularThumbAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRegularThumb>
          }
          groupBy: {
            args: Prisma.RegularThumbGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RegularThumbGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegularThumbCountArgs<ExtArgs>,
            result: $Utils.Optional<RegularThumbCountAggregateOutputType> | number
          }
        }
      }
      TrendingThumb: {
        payload: Prisma.$TrendingThumbPayload<ExtArgs>
        fields: Prisma.TrendingThumbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendingThumbFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendingThumbFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload>
          }
          findFirst: {
            args: Prisma.TrendingThumbFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendingThumbFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload>
          }
          findMany: {
            args: Prisma.TrendingThumbFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload>[]
          }
          create: {
            args: Prisma.TrendingThumbCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload>
          }
          createMany: {
            args: Prisma.TrendingThumbCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrendingThumbDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload>
          }
          update: {
            args: Prisma.TrendingThumbUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload>
          }
          deleteMany: {
            args: Prisma.TrendingThumbDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrendingThumbUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrendingThumbUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrendingThumbPayload>
          }
          aggregate: {
            args: Prisma.TrendingThumbAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrendingThumb>
          }
          groupBy: {
            args: Prisma.TrendingThumbGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrendingThumbGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendingThumbCountArgs<ExtArgs>,
            result: $Utils.Optional<TrendingThumbCountAggregateOutputType> | number
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerk_id: string | null
    name: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerk_id: string | null
    name: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerk_id: number
    name: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerk_id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerk_id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerk_id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerk_id: string
    name: string
    email: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    clerk_id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerk_id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerk_id: string
      name: string
      email: string
      role: string
      createdAt: Date
      updatedAt: Date
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
    readonly id: FieldRef<"User", 'String'>
    readonly clerk_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Selection
   */

  export type AggregateSelection = {
    _count: SelectionCountAggregateOutputType | null
    _avg: SelectionAvgAggregateOutputType | null
    _sum: SelectionSumAggregateOutputType | null
    _min: SelectionMinAggregateOutputType | null
    _max: SelectionMaxAggregateOutputType | null
  }

  export type SelectionAvgAggregateOutputType = {
    year: number | null
  }

  export type SelectionSumAggregateOutputType = {
    year: number | null
  }

  export type SelectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    year: number | null
    category: string | null
    rating: string | null
    is_bookmarked: boolean | null
    is_trending: boolean | null
  }

  export type SelectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    year: number | null
    category: string | null
    rating: string | null
    is_bookmarked: boolean | null
    is_trending: boolean | null
  }

  export type SelectionCountAggregateOutputType = {
    id: number
    title: number
    year: number
    category: number
    rating: number
    is_bookmarked: number
    is_trending: number
    _all: number
  }


  export type SelectionAvgAggregateInputType = {
    year?: true
  }

  export type SelectionSumAggregateInputType = {
    year?: true
  }

  export type SelectionMinAggregateInputType = {
    id?: true
    title?: true
    year?: true
    category?: true
    rating?: true
    is_bookmarked?: true
    is_trending?: true
  }

  export type SelectionMaxAggregateInputType = {
    id?: true
    title?: true
    year?: true
    category?: true
    rating?: true
    is_bookmarked?: true
    is_trending?: true
  }

  export type SelectionCountAggregateInputType = {
    id?: true
    title?: true
    year?: true
    category?: true
    rating?: true
    is_bookmarked?: true
    is_trending?: true
    _all?: true
  }

  export type SelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Selection to aggregate.
     */
    where?: SelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selections to fetch.
     */
    orderBy?: SelectionOrderByWithRelationInput | SelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Selections
    **/
    _count?: true | SelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SelectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SelectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelectionMaxAggregateInputType
  }

  export type GetSelectionAggregateType<T extends SelectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelection[P]>
      : GetScalarType<T[P], AggregateSelection[P]>
  }




  export type SelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelectionWhereInput
    orderBy?: SelectionOrderByWithAggregationInput | SelectionOrderByWithAggregationInput[]
    by: SelectionScalarFieldEnum[] | SelectionScalarFieldEnum
    having?: SelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelectionCountAggregateInputType | true
    _avg?: SelectionAvgAggregateInputType
    _sum?: SelectionSumAggregateInputType
    _min?: SelectionMinAggregateInputType
    _max?: SelectionMaxAggregateInputType
  }

  export type SelectionGroupByOutputType = {
    id: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
    _count: SelectionCountAggregateOutputType | null
    _avg: SelectionAvgAggregateOutputType | null
    _sum: SelectionSumAggregateOutputType | null
    _min: SelectionMinAggregateOutputType | null
    _max: SelectionMaxAggregateOutputType | null
  }

  type GetSelectionGroupByPayload<T extends SelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelectionGroupByOutputType[P]>
            : GetScalarType<T[P], SelectionGroupByOutputType[P]>
        }
      >
    >


  export type SelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    category?: boolean
    rating?: boolean
    is_bookmarked?: boolean
    is_trending?: boolean
    RegularThumb?: boolean | Selection$RegularThumbArgs<ExtArgs>
    TrendingThumb?: boolean | Selection$TrendingThumbArgs<ExtArgs>
  }, ExtArgs["result"]["selection"]>

  export type SelectionSelectScalar = {
    id?: boolean
    title?: boolean
    year?: boolean
    category?: boolean
    rating?: boolean
    is_bookmarked?: boolean
    is_trending?: boolean
  }

  export type SelectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RegularThumb?: boolean | Selection$RegularThumbArgs<ExtArgs>
    TrendingThumb?: boolean | Selection$TrendingThumbArgs<ExtArgs>
  }


  export type $SelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Selection"
    objects: {
      RegularThumb: Prisma.$RegularThumbPayload<ExtArgs> | null
      TrendingThumb: Prisma.$TrendingThumbPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      year: number
      category: string
      rating: string
      is_bookmarked: boolean
      is_trending: boolean
    }, ExtArgs["result"]["selection"]>
    composites: {}
  }


  type SelectionGetPayload<S extends boolean | null | undefined | SelectionDefaultArgs> = $Result.GetResult<Prisma.$SelectionPayload, S>

  type SelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SelectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SelectionCountAggregateInputType | true
    }

  export interface SelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Selection'], meta: { name: 'Selection' } }
    /**
     * Find zero or one Selection that matches the filter.
     * @param {SelectionFindUniqueArgs} args - Arguments to find a Selection
     * @example
     * // Get one Selection
     * const selection = await prisma.selection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SelectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SelectionFindUniqueArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Selection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SelectionFindUniqueOrThrowArgs} args - Arguments to find a Selection
     * @example
     * // Get one Selection
     * const selection = await prisma.selection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SelectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SelectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Selection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionFindFirstArgs} args - Arguments to find a Selection
     * @example
     * // Get one Selection
     * const selection = await prisma.selection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SelectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SelectionFindFirstArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Selection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionFindFirstOrThrowArgs} args - Arguments to find a Selection
     * @example
     * // Get one Selection
     * const selection = await prisma.selection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SelectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SelectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Selections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Selections
     * const selections = await prisma.selection.findMany()
     * 
     * // Get first 10 Selections
     * const selections = await prisma.selection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selectionWithIdOnly = await prisma.selection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SelectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SelectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Selection.
     * @param {SelectionCreateArgs} args - Arguments to create a Selection.
     * @example
     * // Create one Selection
     * const Selection = await prisma.selection.create({
     *   data: {
     *     // ... data to create a Selection
     *   }
     * })
     * 
    **/
    create<T extends SelectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SelectionCreateArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Selections.
     *     @param {SelectionCreateManyArgs} args - Arguments to create many Selections.
     *     @example
     *     // Create many Selections
     *     const selection = await prisma.selection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SelectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SelectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Selection.
     * @param {SelectionDeleteArgs} args - Arguments to delete one Selection.
     * @example
     * // Delete one Selection
     * const Selection = await prisma.selection.delete({
     *   where: {
     *     // ... filter to delete one Selection
     *   }
     * })
     * 
    **/
    delete<T extends SelectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SelectionDeleteArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Selection.
     * @param {SelectionUpdateArgs} args - Arguments to update one Selection.
     * @example
     * // Update one Selection
     * const selection = await prisma.selection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SelectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SelectionUpdateArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Selections.
     * @param {SelectionDeleteManyArgs} args - Arguments to filter Selections to delete.
     * @example
     * // Delete a few Selections
     * const { count } = await prisma.selection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SelectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SelectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Selections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Selections
     * const selection = await prisma.selection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SelectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SelectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Selection.
     * @param {SelectionUpsertArgs} args - Arguments to update or create a Selection.
     * @example
     * // Update or create a Selection
     * const selection = await prisma.selection.upsert({
     *   create: {
     *     // ... data to create a Selection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Selection we want to update
     *   }
     * })
    **/
    upsert<T extends SelectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SelectionUpsertArgs<ExtArgs>>
    ): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Selections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionCountArgs} args - Arguments to filter Selections to count.
     * @example
     * // Count the number of Selections
     * const count = await prisma.selection.count({
     *   where: {
     *     // ... the filter for the Selections we want to count
     *   }
     * })
    **/
    count<T extends SelectionCountArgs>(
      args?: Subset<T, SelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Selection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SelectionAggregateArgs>(args: Subset<T, SelectionAggregateArgs>): Prisma.PrismaPromise<GetSelectionAggregateType<T>>

    /**
     * Group by Selection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelectionGroupByArgs} args - Group by arguments.
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
      T extends SelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SelectionGroupByArgs['orderBy'] }
        : { orderBy?: SelectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Selection model
   */
  readonly fields: SelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Selection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    RegularThumb<T extends Selection$RegularThumbArgs<ExtArgs> = {}>(args?: Subset<T, Selection$RegularThumbArgs<ExtArgs>>): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    TrendingThumb<T extends Selection$TrendingThumbArgs<ExtArgs> = {}>(args?: Subset<T, Selection$TrendingThumbArgs<ExtArgs>>): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Selection model
   */ 
  interface SelectionFieldRefs {
    readonly id: FieldRef<"Selection", 'String'>
    readonly title: FieldRef<"Selection", 'String'>
    readonly year: FieldRef<"Selection", 'Int'>
    readonly category: FieldRef<"Selection", 'String'>
    readonly rating: FieldRef<"Selection", 'String'>
    readonly is_bookmarked: FieldRef<"Selection", 'Boolean'>
    readonly is_trending: FieldRef<"Selection", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Selection findUnique
   */
  export type SelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * Filter, which Selection to fetch.
     */
    where: SelectionWhereUniqueInput
  }


  /**
   * Selection findUniqueOrThrow
   */
  export type SelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * Filter, which Selection to fetch.
     */
    where: SelectionWhereUniqueInput
  }


  /**
   * Selection findFirst
   */
  export type SelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * Filter, which Selection to fetch.
     */
    where?: SelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selections to fetch.
     */
    orderBy?: SelectionOrderByWithRelationInput | SelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Selections.
     */
    cursor?: SelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Selections.
     */
    distinct?: SelectionScalarFieldEnum | SelectionScalarFieldEnum[]
  }


  /**
   * Selection findFirstOrThrow
   */
  export type SelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * Filter, which Selection to fetch.
     */
    where?: SelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selections to fetch.
     */
    orderBy?: SelectionOrderByWithRelationInput | SelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Selections.
     */
    cursor?: SelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Selections.
     */
    distinct?: SelectionScalarFieldEnum | SelectionScalarFieldEnum[]
  }


  /**
   * Selection findMany
   */
  export type SelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * Filter, which Selections to fetch.
     */
    where?: SelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Selections to fetch.
     */
    orderBy?: SelectionOrderByWithRelationInput | SelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Selections.
     */
    cursor?: SelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Selections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Selections.
     */
    skip?: number
    distinct?: SelectionScalarFieldEnum | SelectionScalarFieldEnum[]
  }


  /**
   * Selection create
   */
  export type SelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Selection.
     */
    data: XOR<SelectionCreateInput, SelectionUncheckedCreateInput>
  }


  /**
   * Selection createMany
   */
  export type SelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Selections.
     */
    data: SelectionCreateManyInput | SelectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Selection update
   */
  export type SelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Selection.
     */
    data: XOR<SelectionUpdateInput, SelectionUncheckedUpdateInput>
    /**
     * Choose, which Selection to update.
     */
    where: SelectionWhereUniqueInput
  }


  /**
   * Selection updateMany
   */
  export type SelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Selections.
     */
    data: XOR<SelectionUpdateManyMutationInput, SelectionUncheckedUpdateManyInput>
    /**
     * Filter which Selections to update
     */
    where?: SelectionWhereInput
  }


  /**
   * Selection upsert
   */
  export type SelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Selection to update in case it exists.
     */
    where: SelectionWhereUniqueInput
    /**
     * In case the Selection found by the `where` argument doesn't exist, create a new Selection with this data.
     */
    create: XOR<SelectionCreateInput, SelectionUncheckedCreateInput>
    /**
     * In case the Selection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SelectionUpdateInput, SelectionUncheckedUpdateInput>
  }


  /**
   * Selection delete
   */
  export type SelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
    /**
     * Filter which Selection to delete.
     */
    where: SelectionWhereUniqueInput
  }


  /**
   * Selection deleteMany
   */
  export type SelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Selections to delete
     */
    where?: SelectionWhereInput
  }


  /**
   * Selection.RegularThumb
   */
  export type Selection$RegularThumbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    where?: RegularThumbWhereInput
  }


  /**
   * Selection.TrendingThumb
   */
  export type Selection$TrendingThumbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    where?: TrendingThumbWhereInput
  }


  /**
   * Selection without action
   */
  export type SelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Selection
     */
    select?: SelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SelectionInclude<ExtArgs> | null
  }



  /**
   * Model RegularThumb
   */

  export type AggregateRegularThumb = {
    _count: RegularThumbCountAggregateOutputType | null
    _min: RegularThumbMinAggregateOutputType | null
    _max: RegularThumbMaxAggregateOutputType | null
  }

  export type RegularThumbMinAggregateOutputType = {
    id: string | null
    large: string | null
    small: string | null
    medium: string | null
    selection_id: string | null
  }

  export type RegularThumbMaxAggregateOutputType = {
    id: string | null
    large: string | null
    small: string | null
    medium: string | null
    selection_id: string | null
  }

  export type RegularThumbCountAggregateOutputType = {
    id: number
    large: number
    small: number
    medium: number
    selection_id: number
    _all: number
  }


  export type RegularThumbMinAggregateInputType = {
    id?: true
    large?: true
    small?: true
    medium?: true
    selection_id?: true
  }

  export type RegularThumbMaxAggregateInputType = {
    id?: true
    large?: true
    small?: true
    medium?: true
    selection_id?: true
  }

  export type RegularThumbCountAggregateInputType = {
    id?: true
    large?: true
    small?: true
    medium?: true
    selection_id?: true
    _all?: true
  }

  export type RegularThumbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegularThumb to aggregate.
     */
    where?: RegularThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularThumbs to fetch.
     */
    orderBy?: RegularThumbOrderByWithRelationInput | RegularThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegularThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularThumbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegularThumbs
    **/
    _count?: true | RegularThumbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegularThumbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegularThumbMaxAggregateInputType
  }

  export type GetRegularThumbAggregateType<T extends RegularThumbAggregateArgs> = {
        [P in keyof T & keyof AggregateRegularThumb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegularThumb[P]>
      : GetScalarType<T[P], AggregateRegularThumb[P]>
  }




  export type RegularThumbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularThumbWhereInput
    orderBy?: RegularThumbOrderByWithAggregationInput | RegularThumbOrderByWithAggregationInput[]
    by: RegularThumbScalarFieldEnum[] | RegularThumbScalarFieldEnum
    having?: RegularThumbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegularThumbCountAggregateInputType | true
    _min?: RegularThumbMinAggregateInputType
    _max?: RegularThumbMaxAggregateInputType
  }

  export type RegularThumbGroupByOutputType = {
    id: string
    large: string
    small: string
    medium: string
    selection_id: string
    _count: RegularThumbCountAggregateOutputType | null
    _min: RegularThumbMinAggregateOutputType | null
    _max: RegularThumbMaxAggregateOutputType | null
  }

  type GetRegularThumbGroupByPayload<T extends RegularThumbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegularThumbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegularThumbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegularThumbGroupByOutputType[P]>
            : GetScalarType<T[P], RegularThumbGroupByOutputType[P]>
        }
      >
    >


  export type RegularThumbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    large?: boolean
    small?: boolean
    medium?: boolean
    selection_id?: boolean
    Selection?: boolean | SelectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regularThumb"]>

  export type RegularThumbSelectScalar = {
    id?: boolean
    large?: boolean
    small?: boolean
    medium?: boolean
    selection_id?: boolean
  }

  export type RegularThumbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Selection?: boolean | SelectionDefaultArgs<ExtArgs>
  }


  export type $RegularThumbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegularThumb"
    objects: {
      Selection: Prisma.$SelectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      large: string
      small: string
      medium: string
      selection_id: string
    }, ExtArgs["result"]["regularThumb"]>
    composites: {}
  }


  type RegularThumbGetPayload<S extends boolean | null | undefined | RegularThumbDefaultArgs> = $Result.GetResult<Prisma.$RegularThumbPayload, S>

  type RegularThumbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegularThumbFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegularThumbCountAggregateInputType | true
    }

  export interface RegularThumbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegularThumb'], meta: { name: 'RegularThumb' } }
    /**
     * Find zero or one RegularThumb that matches the filter.
     * @param {RegularThumbFindUniqueArgs} args - Arguments to find a RegularThumb
     * @example
     * // Get one RegularThumb
     * const regularThumb = await prisma.regularThumb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegularThumbFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RegularThumbFindUniqueArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RegularThumb that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RegularThumbFindUniqueOrThrowArgs} args - Arguments to find a RegularThumb
     * @example
     * // Get one RegularThumb
     * const regularThumb = await prisma.regularThumb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegularThumbFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularThumbFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RegularThumb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularThumbFindFirstArgs} args - Arguments to find a RegularThumb
     * @example
     * // Get one RegularThumb
     * const regularThumb = await prisma.regularThumb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegularThumbFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularThumbFindFirstArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RegularThumb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularThumbFindFirstOrThrowArgs} args - Arguments to find a RegularThumb
     * @example
     * // Get one RegularThumb
     * const regularThumb = await prisma.regularThumb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegularThumbFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularThumbFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RegularThumbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularThumbFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegularThumbs
     * const regularThumbs = await prisma.regularThumb.findMany()
     * 
     * // Get first 10 RegularThumbs
     * const regularThumbs = await prisma.regularThumb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regularThumbWithIdOnly = await prisma.regularThumb.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegularThumbFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularThumbFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RegularThumb.
     * @param {RegularThumbCreateArgs} args - Arguments to create a RegularThumb.
     * @example
     * // Create one RegularThumb
     * const RegularThumb = await prisma.regularThumb.create({
     *   data: {
     *     // ... data to create a RegularThumb
     *   }
     * })
     * 
    **/
    create<T extends RegularThumbCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RegularThumbCreateArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RegularThumbs.
     *     @param {RegularThumbCreateManyArgs} args - Arguments to create many RegularThumbs.
     *     @example
     *     // Create many RegularThumbs
     *     const regularThumb = await prisma.regularThumb.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegularThumbCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularThumbCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegularThumb.
     * @param {RegularThumbDeleteArgs} args - Arguments to delete one RegularThumb.
     * @example
     * // Delete one RegularThumb
     * const RegularThumb = await prisma.regularThumb.delete({
     *   where: {
     *     // ... filter to delete one RegularThumb
     *   }
     * })
     * 
    **/
    delete<T extends RegularThumbDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RegularThumbDeleteArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RegularThumb.
     * @param {RegularThumbUpdateArgs} args - Arguments to update one RegularThumb.
     * @example
     * // Update one RegularThumb
     * const regularThumb = await prisma.regularThumb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegularThumbUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RegularThumbUpdateArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RegularThumbs.
     * @param {RegularThumbDeleteManyArgs} args - Arguments to filter RegularThumbs to delete.
     * @example
     * // Delete a few RegularThumbs
     * const { count } = await prisma.regularThumb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegularThumbDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularThumbDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegularThumbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularThumbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegularThumbs
     * const regularThumb = await prisma.regularThumb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegularThumbUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RegularThumbUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegularThumb.
     * @param {RegularThumbUpsertArgs} args - Arguments to update or create a RegularThumb.
     * @example
     * // Update or create a RegularThumb
     * const regularThumb = await prisma.regularThumb.upsert({
     *   create: {
     *     // ... data to create a RegularThumb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegularThumb we want to update
     *   }
     * })
    **/
    upsert<T extends RegularThumbUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RegularThumbUpsertArgs<ExtArgs>>
    ): Prisma__RegularThumbClient<$Result.GetResult<Prisma.$RegularThumbPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RegularThumbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularThumbCountArgs} args - Arguments to filter RegularThumbs to count.
     * @example
     * // Count the number of RegularThumbs
     * const count = await prisma.regularThumb.count({
     *   where: {
     *     // ... the filter for the RegularThumbs we want to count
     *   }
     * })
    **/
    count<T extends RegularThumbCountArgs>(
      args?: Subset<T, RegularThumbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegularThumbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegularThumb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularThumbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegularThumbAggregateArgs>(args: Subset<T, RegularThumbAggregateArgs>): Prisma.PrismaPromise<GetRegularThumbAggregateType<T>>

    /**
     * Group by RegularThumb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularThumbGroupByArgs} args - Group by arguments.
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
      T extends RegularThumbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegularThumbGroupByArgs['orderBy'] }
        : { orderBy?: RegularThumbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegularThumbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegularThumbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegularThumb model
   */
  readonly fields: RegularThumbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegularThumb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegularThumbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Selection<T extends SelectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SelectionDefaultArgs<ExtArgs>>): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the RegularThumb model
   */ 
  interface RegularThumbFieldRefs {
    readonly id: FieldRef<"RegularThumb", 'String'>
    readonly large: FieldRef<"RegularThumb", 'String'>
    readonly small: FieldRef<"RegularThumb", 'String'>
    readonly medium: FieldRef<"RegularThumb", 'String'>
    readonly selection_id: FieldRef<"RegularThumb", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RegularThumb findUnique
   */
  export type RegularThumbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * Filter, which RegularThumb to fetch.
     */
    where: RegularThumbWhereUniqueInput
  }


  /**
   * RegularThumb findUniqueOrThrow
   */
  export type RegularThumbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * Filter, which RegularThumb to fetch.
     */
    where: RegularThumbWhereUniqueInput
  }


  /**
   * RegularThumb findFirst
   */
  export type RegularThumbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * Filter, which RegularThumb to fetch.
     */
    where?: RegularThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularThumbs to fetch.
     */
    orderBy?: RegularThumbOrderByWithRelationInput | RegularThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegularThumbs.
     */
    cursor?: RegularThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularThumbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegularThumbs.
     */
    distinct?: RegularThumbScalarFieldEnum | RegularThumbScalarFieldEnum[]
  }


  /**
   * RegularThumb findFirstOrThrow
   */
  export type RegularThumbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * Filter, which RegularThumb to fetch.
     */
    where?: RegularThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularThumbs to fetch.
     */
    orderBy?: RegularThumbOrderByWithRelationInput | RegularThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegularThumbs.
     */
    cursor?: RegularThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularThumbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegularThumbs.
     */
    distinct?: RegularThumbScalarFieldEnum | RegularThumbScalarFieldEnum[]
  }


  /**
   * RegularThumb findMany
   */
  export type RegularThumbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * Filter, which RegularThumbs to fetch.
     */
    where?: RegularThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularThumbs to fetch.
     */
    orderBy?: RegularThumbOrderByWithRelationInput | RegularThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegularThumbs.
     */
    cursor?: RegularThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularThumbs.
     */
    skip?: number
    distinct?: RegularThumbScalarFieldEnum | RegularThumbScalarFieldEnum[]
  }


  /**
   * RegularThumb create
   */
  export type RegularThumbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * The data needed to create a RegularThumb.
     */
    data: XOR<RegularThumbCreateInput, RegularThumbUncheckedCreateInput>
  }


  /**
   * RegularThumb createMany
   */
  export type RegularThumbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegularThumbs.
     */
    data: RegularThumbCreateManyInput | RegularThumbCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RegularThumb update
   */
  export type RegularThumbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * The data needed to update a RegularThumb.
     */
    data: XOR<RegularThumbUpdateInput, RegularThumbUncheckedUpdateInput>
    /**
     * Choose, which RegularThumb to update.
     */
    where: RegularThumbWhereUniqueInput
  }


  /**
   * RegularThumb updateMany
   */
  export type RegularThumbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegularThumbs.
     */
    data: XOR<RegularThumbUpdateManyMutationInput, RegularThumbUncheckedUpdateManyInput>
    /**
     * Filter which RegularThumbs to update
     */
    where?: RegularThumbWhereInput
  }


  /**
   * RegularThumb upsert
   */
  export type RegularThumbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * The filter to search for the RegularThumb to update in case it exists.
     */
    where: RegularThumbWhereUniqueInput
    /**
     * In case the RegularThumb found by the `where` argument doesn't exist, create a new RegularThumb with this data.
     */
    create: XOR<RegularThumbCreateInput, RegularThumbUncheckedCreateInput>
    /**
     * In case the RegularThumb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegularThumbUpdateInput, RegularThumbUncheckedUpdateInput>
  }


  /**
   * RegularThumb delete
   */
  export type RegularThumbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
    /**
     * Filter which RegularThumb to delete.
     */
    where: RegularThumbWhereUniqueInput
  }


  /**
   * RegularThumb deleteMany
   */
  export type RegularThumbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegularThumbs to delete
     */
    where?: RegularThumbWhereInput
  }


  /**
   * RegularThumb without action
   */
  export type RegularThumbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularThumb
     */
    select?: RegularThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegularThumbInclude<ExtArgs> | null
  }



  /**
   * Model TrendingThumb
   */

  export type AggregateTrendingThumb = {
    _count: TrendingThumbCountAggregateOutputType | null
    _min: TrendingThumbMinAggregateOutputType | null
    _max: TrendingThumbMaxAggregateOutputType | null
  }

  export type TrendingThumbMinAggregateOutputType = {
    id: string | null
    large: string | null
    small: string | null
    selection_id: string | null
  }

  export type TrendingThumbMaxAggregateOutputType = {
    id: string | null
    large: string | null
    small: string | null
    selection_id: string | null
  }

  export type TrendingThumbCountAggregateOutputType = {
    id: number
    large: number
    small: number
    selection_id: number
    _all: number
  }


  export type TrendingThumbMinAggregateInputType = {
    id?: true
    large?: true
    small?: true
    selection_id?: true
  }

  export type TrendingThumbMaxAggregateInputType = {
    id?: true
    large?: true
    small?: true
    selection_id?: true
  }

  export type TrendingThumbCountAggregateInputType = {
    id?: true
    large?: true
    small?: true
    selection_id?: true
    _all?: true
  }

  export type TrendingThumbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingThumb to aggregate.
     */
    where?: TrendingThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingThumbs to fetch.
     */
    orderBy?: TrendingThumbOrderByWithRelationInput | TrendingThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendingThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingThumbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrendingThumbs
    **/
    _count?: true | TrendingThumbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendingThumbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendingThumbMaxAggregateInputType
  }

  export type GetTrendingThumbAggregateType<T extends TrendingThumbAggregateArgs> = {
        [P in keyof T & keyof AggregateTrendingThumb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrendingThumb[P]>
      : GetScalarType<T[P], AggregateTrendingThumb[P]>
  }




  export type TrendingThumbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingThumbWhereInput
    orderBy?: TrendingThumbOrderByWithAggregationInput | TrendingThumbOrderByWithAggregationInput[]
    by: TrendingThumbScalarFieldEnum[] | TrendingThumbScalarFieldEnum
    having?: TrendingThumbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendingThumbCountAggregateInputType | true
    _min?: TrendingThumbMinAggregateInputType
    _max?: TrendingThumbMaxAggregateInputType
  }

  export type TrendingThumbGroupByOutputType = {
    id: string
    large: string
    small: string
    selection_id: string
    _count: TrendingThumbCountAggregateOutputType | null
    _min: TrendingThumbMinAggregateOutputType | null
    _max: TrendingThumbMaxAggregateOutputType | null
  }

  type GetTrendingThumbGroupByPayload<T extends TrendingThumbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendingThumbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendingThumbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendingThumbGroupByOutputType[P]>
            : GetScalarType<T[P], TrendingThumbGroupByOutputType[P]>
        }
      >
    >


  export type TrendingThumbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    large?: boolean
    small?: boolean
    selection_id?: boolean
    Selection?: boolean | SelectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendingThumb"]>

  export type TrendingThumbSelectScalar = {
    id?: boolean
    large?: boolean
    small?: boolean
    selection_id?: boolean
  }

  export type TrendingThumbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Selection?: boolean | SelectionDefaultArgs<ExtArgs>
  }


  export type $TrendingThumbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrendingThumb"
    objects: {
      Selection: Prisma.$SelectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      large: string
      small: string
      selection_id: string
    }, ExtArgs["result"]["trendingThumb"]>
    composites: {}
  }


  type TrendingThumbGetPayload<S extends boolean | null | undefined | TrendingThumbDefaultArgs> = $Result.GetResult<Prisma.$TrendingThumbPayload, S>

  type TrendingThumbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrendingThumbFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrendingThumbCountAggregateInputType | true
    }

  export interface TrendingThumbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrendingThumb'], meta: { name: 'TrendingThumb' } }
    /**
     * Find zero or one TrendingThumb that matches the filter.
     * @param {TrendingThumbFindUniqueArgs} args - Arguments to find a TrendingThumb
     * @example
     * // Get one TrendingThumb
     * const trendingThumb = await prisma.trendingThumb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrendingThumbFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrendingThumbFindUniqueArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrendingThumb that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrendingThumbFindUniqueOrThrowArgs} args - Arguments to find a TrendingThumb
     * @example
     * // Get one TrendingThumb
     * const trendingThumb = await prisma.trendingThumb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrendingThumbFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrendingThumbFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrendingThumb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingThumbFindFirstArgs} args - Arguments to find a TrendingThumb
     * @example
     * // Get one TrendingThumb
     * const trendingThumb = await prisma.trendingThumb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrendingThumbFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrendingThumbFindFirstArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrendingThumb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingThumbFindFirstOrThrowArgs} args - Arguments to find a TrendingThumb
     * @example
     * // Get one TrendingThumb
     * const trendingThumb = await prisma.trendingThumb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrendingThumbFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrendingThumbFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrendingThumbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingThumbFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrendingThumbs
     * const trendingThumbs = await prisma.trendingThumb.findMany()
     * 
     * // Get first 10 TrendingThumbs
     * const trendingThumbs = await prisma.trendingThumb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendingThumbWithIdOnly = await prisma.trendingThumb.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrendingThumbFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrendingThumbFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrendingThumb.
     * @param {TrendingThumbCreateArgs} args - Arguments to create a TrendingThumb.
     * @example
     * // Create one TrendingThumb
     * const TrendingThumb = await prisma.trendingThumb.create({
     *   data: {
     *     // ... data to create a TrendingThumb
     *   }
     * })
     * 
    **/
    create<T extends TrendingThumbCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrendingThumbCreateArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrendingThumbs.
     *     @param {TrendingThumbCreateManyArgs} args - Arguments to create many TrendingThumbs.
     *     @example
     *     // Create many TrendingThumbs
     *     const trendingThumb = await prisma.trendingThumb.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrendingThumbCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrendingThumbCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrendingThumb.
     * @param {TrendingThumbDeleteArgs} args - Arguments to delete one TrendingThumb.
     * @example
     * // Delete one TrendingThumb
     * const TrendingThumb = await prisma.trendingThumb.delete({
     *   where: {
     *     // ... filter to delete one TrendingThumb
     *   }
     * })
     * 
    **/
    delete<T extends TrendingThumbDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrendingThumbDeleteArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrendingThumb.
     * @param {TrendingThumbUpdateArgs} args - Arguments to update one TrendingThumb.
     * @example
     * // Update one TrendingThumb
     * const trendingThumb = await prisma.trendingThumb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrendingThumbUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrendingThumbUpdateArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrendingThumbs.
     * @param {TrendingThumbDeleteManyArgs} args - Arguments to filter TrendingThumbs to delete.
     * @example
     * // Delete a few TrendingThumbs
     * const { count } = await prisma.trendingThumb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrendingThumbDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrendingThumbDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendingThumbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingThumbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrendingThumbs
     * const trendingThumb = await prisma.trendingThumb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrendingThumbUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrendingThumbUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrendingThumb.
     * @param {TrendingThumbUpsertArgs} args - Arguments to update or create a TrendingThumb.
     * @example
     * // Update or create a TrendingThumb
     * const trendingThumb = await prisma.trendingThumb.upsert({
     *   create: {
     *     // ... data to create a TrendingThumb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrendingThumb we want to update
     *   }
     * })
    **/
    upsert<T extends TrendingThumbUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrendingThumbUpsertArgs<ExtArgs>>
    ): Prisma__TrendingThumbClient<$Result.GetResult<Prisma.$TrendingThumbPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrendingThumbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingThumbCountArgs} args - Arguments to filter TrendingThumbs to count.
     * @example
     * // Count the number of TrendingThumbs
     * const count = await prisma.trendingThumb.count({
     *   where: {
     *     // ... the filter for the TrendingThumbs we want to count
     *   }
     * })
    **/
    count<T extends TrendingThumbCountArgs>(
      args?: Subset<T, TrendingThumbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendingThumbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrendingThumb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingThumbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrendingThumbAggregateArgs>(args: Subset<T, TrendingThumbAggregateArgs>): Prisma.PrismaPromise<GetTrendingThumbAggregateType<T>>

    /**
     * Group by TrendingThumb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingThumbGroupByArgs} args - Group by arguments.
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
      T extends TrendingThumbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendingThumbGroupByArgs['orderBy'] }
        : { orderBy?: TrendingThumbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrendingThumbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendingThumbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrendingThumb model
   */
  readonly fields: TrendingThumbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrendingThumb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendingThumbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Selection<T extends SelectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SelectionDefaultArgs<ExtArgs>>): Prisma__SelectionClient<$Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the TrendingThumb model
   */ 
  interface TrendingThumbFieldRefs {
    readonly id: FieldRef<"TrendingThumb", 'String'>
    readonly large: FieldRef<"TrendingThumb", 'String'>
    readonly small: FieldRef<"TrendingThumb", 'String'>
    readonly selection_id: FieldRef<"TrendingThumb", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TrendingThumb findUnique
   */
  export type TrendingThumbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * Filter, which TrendingThumb to fetch.
     */
    where: TrendingThumbWhereUniqueInput
  }


  /**
   * TrendingThumb findUniqueOrThrow
   */
  export type TrendingThumbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * Filter, which TrendingThumb to fetch.
     */
    where: TrendingThumbWhereUniqueInput
  }


  /**
   * TrendingThumb findFirst
   */
  export type TrendingThumbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * Filter, which TrendingThumb to fetch.
     */
    where?: TrendingThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingThumbs to fetch.
     */
    orderBy?: TrendingThumbOrderByWithRelationInput | TrendingThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingThumbs.
     */
    cursor?: TrendingThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingThumbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingThumbs.
     */
    distinct?: TrendingThumbScalarFieldEnum | TrendingThumbScalarFieldEnum[]
  }


  /**
   * TrendingThumb findFirstOrThrow
   */
  export type TrendingThumbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * Filter, which TrendingThumb to fetch.
     */
    where?: TrendingThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingThumbs to fetch.
     */
    orderBy?: TrendingThumbOrderByWithRelationInput | TrendingThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingThumbs.
     */
    cursor?: TrendingThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingThumbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingThumbs.
     */
    distinct?: TrendingThumbScalarFieldEnum | TrendingThumbScalarFieldEnum[]
  }


  /**
   * TrendingThumb findMany
   */
  export type TrendingThumbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * Filter, which TrendingThumbs to fetch.
     */
    where?: TrendingThumbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingThumbs to fetch.
     */
    orderBy?: TrendingThumbOrderByWithRelationInput | TrendingThumbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrendingThumbs.
     */
    cursor?: TrendingThumbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingThumbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingThumbs.
     */
    skip?: number
    distinct?: TrendingThumbScalarFieldEnum | TrendingThumbScalarFieldEnum[]
  }


  /**
   * TrendingThumb create
   */
  export type TrendingThumbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * The data needed to create a TrendingThumb.
     */
    data: XOR<TrendingThumbCreateInput, TrendingThumbUncheckedCreateInput>
  }


  /**
   * TrendingThumb createMany
   */
  export type TrendingThumbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrendingThumbs.
     */
    data: TrendingThumbCreateManyInput | TrendingThumbCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TrendingThumb update
   */
  export type TrendingThumbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * The data needed to update a TrendingThumb.
     */
    data: XOR<TrendingThumbUpdateInput, TrendingThumbUncheckedUpdateInput>
    /**
     * Choose, which TrendingThumb to update.
     */
    where: TrendingThumbWhereUniqueInput
  }


  /**
   * TrendingThumb updateMany
   */
  export type TrendingThumbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrendingThumbs.
     */
    data: XOR<TrendingThumbUpdateManyMutationInput, TrendingThumbUncheckedUpdateManyInput>
    /**
     * Filter which TrendingThumbs to update
     */
    where?: TrendingThumbWhereInput
  }


  /**
   * TrendingThumb upsert
   */
  export type TrendingThumbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * The filter to search for the TrendingThumb to update in case it exists.
     */
    where: TrendingThumbWhereUniqueInput
    /**
     * In case the TrendingThumb found by the `where` argument doesn't exist, create a new TrendingThumb with this data.
     */
    create: XOR<TrendingThumbCreateInput, TrendingThumbUncheckedCreateInput>
    /**
     * In case the TrendingThumb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendingThumbUpdateInput, TrendingThumbUncheckedUpdateInput>
  }


  /**
   * TrendingThumb delete
   */
  export type TrendingThumbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
    /**
     * Filter which TrendingThumb to delete.
     */
    where: TrendingThumbWhereUniqueInput
  }


  /**
   * TrendingThumb deleteMany
   */
  export type TrendingThumbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingThumbs to delete
     */
    where?: TrendingThumbWhereInput
  }


  /**
   * TrendingThumb without action
   */
  export type TrendingThumbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingThumb
     */
    select?: TrendingThumbSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrendingThumbInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerk_id: 'clerk_id',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SelectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    year: 'year',
    category: 'category',
    rating: 'rating',
    is_bookmarked: 'is_bookmarked',
    is_trending: 'is_trending'
  };

  export type SelectionScalarFieldEnum = (typeof SelectionScalarFieldEnum)[keyof typeof SelectionScalarFieldEnum]


  export const RegularThumbScalarFieldEnum: {
    id: 'id',
    large: 'large',
    small: 'small',
    medium: 'medium',
    selection_id: 'selection_id'
  };

  export type RegularThumbScalarFieldEnum = (typeof RegularThumbScalarFieldEnum)[keyof typeof RegularThumbScalarFieldEnum]


  export const TrendingThumbScalarFieldEnum: {
    id: 'id',
    large: 'large',
    small: 'small',
    selection_id: 'selection_id'
  };

  export type TrendingThumbScalarFieldEnum = (typeof TrendingThumbScalarFieldEnum)[keyof typeof TrendingThumbScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerk_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerk_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    clerk_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerk_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerk_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SelectionWhereInput = {
    AND?: SelectionWhereInput | SelectionWhereInput[]
    OR?: SelectionWhereInput[]
    NOT?: SelectionWhereInput | SelectionWhereInput[]
    id?: StringFilter<"Selection"> | string
    title?: StringFilter<"Selection"> | string
    year?: IntFilter<"Selection"> | number
    category?: StringFilter<"Selection"> | string
    rating?: StringFilter<"Selection"> | string
    is_bookmarked?: BoolFilter<"Selection"> | boolean
    is_trending?: BoolFilter<"Selection"> | boolean
    RegularThumb?: XOR<RegularThumbNullableRelationFilter, RegularThumbWhereInput> | null
    TrendingThumb?: XOR<TrendingThumbNullableRelationFilter, TrendingThumbWhereInput> | null
  }

  export type SelectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    is_bookmarked?: SortOrder
    is_trending?: SortOrder
    RegularThumb?: RegularThumbOrderByWithRelationInput
    TrendingThumb?: TrendingThumbOrderByWithRelationInput
  }

  export type SelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SelectionWhereInput | SelectionWhereInput[]
    OR?: SelectionWhereInput[]
    NOT?: SelectionWhereInput | SelectionWhereInput[]
    title?: StringFilter<"Selection"> | string
    year?: IntFilter<"Selection"> | number
    category?: StringFilter<"Selection"> | string
    rating?: StringFilter<"Selection"> | string
    is_bookmarked?: BoolFilter<"Selection"> | boolean
    is_trending?: BoolFilter<"Selection"> | boolean
    RegularThumb?: XOR<RegularThumbNullableRelationFilter, RegularThumbWhereInput> | null
    TrendingThumb?: XOR<TrendingThumbNullableRelationFilter, TrendingThumbWhereInput> | null
  }, "id">

  export type SelectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    is_bookmarked?: SortOrder
    is_trending?: SortOrder
    _count?: SelectionCountOrderByAggregateInput
    _avg?: SelectionAvgOrderByAggregateInput
    _max?: SelectionMaxOrderByAggregateInput
    _min?: SelectionMinOrderByAggregateInput
    _sum?: SelectionSumOrderByAggregateInput
  }

  export type SelectionScalarWhereWithAggregatesInput = {
    AND?: SelectionScalarWhereWithAggregatesInput | SelectionScalarWhereWithAggregatesInput[]
    OR?: SelectionScalarWhereWithAggregatesInput[]
    NOT?: SelectionScalarWhereWithAggregatesInput | SelectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Selection"> | string
    title?: StringWithAggregatesFilter<"Selection"> | string
    year?: IntWithAggregatesFilter<"Selection"> | number
    category?: StringWithAggregatesFilter<"Selection"> | string
    rating?: StringWithAggregatesFilter<"Selection"> | string
    is_bookmarked?: BoolWithAggregatesFilter<"Selection"> | boolean
    is_trending?: BoolWithAggregatesFilter<"Selection"> | boolean
  }

  export type RegularThumbWhereInput = {
    AND?: RegularThumbWhereInput | RegularThumbWhereInput[]
    OR?: RegularThumbWhereInput[]
    NOT?: RegularThumbWhereInput | RegularThumbWhereInput[]
    id?: StringFilter<"RegularThumb"> | string
    large?: StringFilter<"RegularThumb"> | string
    small?: StringFilter<"RegularThumb"> | string
    medium?: StringFilter<"RegularThumb"> | string
    selection_id?: StringFilter<"RegularThumb"> | string
    Selection?: XOR<SelectionRelationFilter, SelectionWhereInput>
  }

  export type RegularThumbOrderByWithRelationInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    medium?: SortOrder
    selection_id?: SortOrder
    Selection?: SelectionOrderByWithRelationInput
  }

  export type RegularThumbWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    selection_id?: string
    AND?: RegularThumbWhereInput | RegularThumbWhereInput[]
    OR?: RegularThumbWhereInput[]
    NOT?: RegularThumbWhereInput | RegularThumbWhereInput[]
    large?: StringFilter<"RegularThumb"> | string
    small?: StringFilter<"RegularThumb"> | string
    medium?: StringFilter<"RegularThumb"> | string
    Selection?: XOR<SelectionRelationFilter, SelectionWhereInput>
  }, "id" | "selection_id">

  export type RegularThumbOrderByWithAggregationInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    medium?: SortOrder
    selection_id?: SortOrder
    _count?: RegularThumbCountOrderByAggregateInput
    _max?: RegularThumbMaxOrderByAggregateInput
    _min?: RegularThumbMinOrderByAggregateInput
  }

  export type RegularThumbScalarWhereWithAggregatesInput = {
    AND?: RegularThumbScalarWhereWithAggregatesInput | RegularThumbScalarWhereWithAggregatesInput[]
    OR?: RegularThumbScalarWhereWithAggregatesInput[]
    NOT?: RegularThumbScalarWhereWithAggregatesInput | RegularThumbScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegularThumb"> | string
    large?: StringWithAggregatesFilter<"RegularThumb"> | string
    small?: StringWithAggregatesFilter<"RegularThumb"> | string
    medium?: StringWithAggregatesFilter<"RegularThumb"> | string
    selection_id?: StringWithAggregatesFilter<"RegularThumb"> | string
  }

  export type TrendingThumbWhereInput = {
    AND?: TrendingThumbWhereInput | TrendingThumbWhereInput[]
    OR?: TrendingThumbWhereInput[]
    NOT?: TrendingThumbWhereInput | TrendingThumbWhereInput[]
    id?: StringFilter<"TrendingThumb"> | string
    large?: StringFilter<"TrendingThumb"> | string
    small?: StringFilter<"TrendingThumb"> | string
    selection_id?: StringFilter<"TrendingThumb"> | string
    Selection?: XOR<SelectionRelationFilter, SelectionWhereInput>
  }

  export type TrendingThumbOrderByWithRelationInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    selection_id?: SortOrder
    Selection?: SelectionOrderByWithRelationInput
  }

  export type TrendingThumbWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    selection_id?: string
    AND?: TrendingThumbWhereInput | TrendingThumbWhereInput[]
    OR?: TrendingThumbWhereInput[]
    NOT?: TrendingThumbWhereInput | TrendingThumbWhereInput[]
    large?: StringFilter<"TrendingThumb"> | string
    small?: StringFilter<"TrendingThumb"> | string
    Selection?: XOR<SelectionRelationFilter, SelectionWhereInput>
  }, "id" | "selection_id">

  export type TrendingThumbOrderByWithAggregationInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    selection_id?: SortOrder
    _count?: TrendingThumbCountOrderByAggregateInput
    _max?: TrendingThumbMaxOrderByAggregateInput
    _min?: TrendingThumbMinOrderByAggregateInput
  }

  export type TrendingThumbScalarWhereWithAggregatesInput = {
    AND?: TrendingThumbScalarWhereWithAggregatesInput | TrendingThumbScalarWhereWithAggregatesInput[]
    OR?: TrendingThumbScalarWhereWithAggregatesInput[]
    NOT?: TrendingThumbScalarWhereWithAggregatesInput | TrendingThumbScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrendingThumb"> | string
    large?: StringWithAggregatesFilter<"TrendingThumb"> | string
    small?: StringWithAggregatesFilter<"TrendingThumb"> | string
    selection_id?: StringWithAggregatesFilter<"TrendingThumb"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerk_id: string
    name: string
    email: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerk_id: string
    name: string
    email: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    clerk_id: string
    name: string
    email: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerk_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelectionCreateInput = {
    id?: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
    RegularThumb?: RegularThumbCreateNestedOneWithoutSelectionInput
    TrendingThumb?: TrendingThumbCreateNestedOneWithoutSelectionInput
  }

  export type SelectionUncheckedCreateInput = {
    id?: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
    RegularThumb?: RegularThumbUncheckedCreateNestedOneWithoutSelectionInput
    TrendingThumb?: TrendingThumbUncheckedCreateNestedOneWithoutSelectionInput
  }

  export type SelectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
    RegularThumb?: RegularThumbUpdateOneWithoutSelectionNestedInput
    TrendingThumb?: TrendingThumbUpdateOneWithoutSelectionNestedInput
  }

  export type SelectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
    RegularThumb?: RegularThumbUncheckedUpdateOneWithoutSelectionNestedInput
    TrendingThumb?: TrendingThumbUncheckedUpdateOneWithoutSelectionNestedInput
  }

  export type SelectionCreateManyInput = {
    id?: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
  }

  export type SelectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SelectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegularThumbCreateInput = {
    id?: string
    large: string
    small: string
    medium: string
    Selection: SelectionCreateNestedOneWithoutRegularThumbInput
  }

  export type RegularThumbUncheckedCreateInput = {
    id?: string
    large: string
    small: string
    medium: string
    selection_id: string
  }

  export type RegularThumbUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    Selection?: SelectionUpdateOneRequiredWithoutRegularThumbNestedInput
  }

  export type RegularThumbUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    selection_id?: StringFieldUpdateOperationsInput | string
  }

  export type RegularThumbCreateManyInput = {
    id?: string
    large: string
    small: string
    medium: string
    selection_id: string
  }

  export type RegularThumbUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
  }

  export type RegularThumbUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
    selection_id?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingThumbCreateInput = {
    id?: string
    large: string
    small: string
    Selection: SelectionCreateNestedOneWithoutTrendingThumbInput
  }

  export type TrendingThumbUncheckedCreateInput = {
    id?: string
    large: string
    small: string
    selection_id: string
  }

  export type TrendingThumbUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    Selection?: SelectionUpdateOneRequiredWithoutTrendingThumbNestedInput
  }

  export type TrendingThumbUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    selection_id?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingThumbCreateManyInput = {
    id?: string
    large: string
    small: string
    selection_id: string
  }

  export type TrendingThumbUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingThumbUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    selection_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerk_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerk_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerk_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RegularThumbNullableRelationFilter = {
    is?: RegularThumbWhereInput | null
    isNot?: RegularThumbWhereInput | null
  }

  export type TrendingThumbNullableRelationFilter = {
    is?: TrendingThumbWhereInput | null
    isNot?: TrendingThumbWhereInput | null
  }

  export type SelectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    is_bookmarked?: SortOrder
    is_trending?: SortOrder
  }

  export type SelectionAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type SelectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    is_bookmarked?: SortOrder
    is_trending?: SortOrder
  }

  export type SelectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    is_bookmarked?: SortOrder
    is_trending?: SortOrder
  }

  export type SelectionSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SelectionRelationFilter = {
    is?: SelectionWhereInput
    isNot?: SelectionWhereInput
  }

  export type RegularThumbCountOrderByAggregateInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    medium?: SortOrder
    selection_id?: SortOrder
  }

  export type RegularThumbMaxOrderByAggregateInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    medium?: SortOrder
    selection_id?: SortOrder
  }

  export type RegularThumbMinOrderByAggregateInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    medium?: SortOrder
    selection_id?: SortOrder
  }

  export type TrendingThumbCountOrderByAggregateInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    selection_id?: SortOrder
  }

  export type TrendingThumbMaxOrderByAggregateInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    selection_id?: SortOrder
  }

  export type TrendingThumbMinOrderByAggregateInput = {
    id?: SortOrder
    large?: SortOrder
    small?: SortOrder
    selection_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegularThumbCreateNestedOneWithoutSelectionInput = {
    create?: XOR<RegularThumbCreateWithoutSelectionInput, RegularThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: RegularThumbCreateOrConnectWithoutSelectionInput
    connect?: RegularThumbWhereUniqueInput
  }

  export type TrendingThumbCreateNestedOneWithoutSelectionInput = {
    create?: XOR<TrendingThumbCreateWithoutSelectionInput, TrendingThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: TrendingThumbCreateOrConnectWithoutSelectionInput
    connect?: TrendingThumbWhereUniqueInput
  }

  export type RegularThumbUncheckedCreateNestedOneWithoutSelectionInput = {
    create?: XOR<RegularThumbCreateWithoutSelectionInput, RegularThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: RegularThumbCreateOrConnectWithoutSelectionInput
    connect?: RegularThumbWhereUniqueInput
  }

  export type TrendingThumbUncheckedCreateNestedOneWithoutSelectionInput = {
    create?: XOR<TrendingThumbCreateWithoutSelectionInput, TrendingThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: TrendingThumbCreateOrConnectWithoutSelectionInput
    connect?: TrendingThumbWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RegularThumbUpdateOneWithoutSelectionNestedInput = {
    create?: XOR<RegularThumbCreateWithoutSelectionInput, RegularThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: RegularThumbCreateOrConnectWithoutSelectionInput
    upsert?: RegularThumbUpsertWithoutSelectionInput
    disconnect?: RegularThumbWhereInput | boolean
    delete?: RegularThumbWhereInput | boolean
    connect?: RegularThumbWhereUniqueInput
    update?: XOR<XOR<RegularThumbUpdateToOneWithWhereWithoutSelectionInput, RegularThumbUpdateWithoutSelectionInput>, RegularThumbUncheckedUpdateWithoutSelectionInput>
  }

  export type TrendingThumbUpdateOneWithoutSelectionNestedInput = {
    create?: XOR<TrendingThumbCreateWithoutSelectionInput, TrendingThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: TrendingThumbCreateOrConnectWithoutSelectionInput
    upsert?: TrendingThumbUpsertWithoutSelectionInput
    disconnect?: TrendingThumbWhereInput | boolean
    delete?: TrendingThumbWhereInput | boolean
    connect?: TrendingThumbWhereUniqueInput
    update?: XOR<XOR<TrendingThumbUpdateToOneWithWhereWithoutSelectionInput, TrendingThumbUpdateWithoutSelectionInput>, TrendingThumbUncheckedUpdateWithoutSelectionInput>
  }

  export type RegularThumbUncheckedUpdateOneWithoutSelectionNestedInput = {
    create?: XOR<RegularThumbCreateWithoutSelectionInput, RegularThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: RegularThumbCreateOrConnectWithoutSelectionInput
    upsert?: RegularThumbUpsertWithoutSelectionInput
    disconnect?: RegularThumbWhereInput | boolean
    delete?: RegularThumbWhereInput | boolean
    connect?: RegularThumbWhereUniqueInput
    update?: XOR<XOR<RegularThumbUpdateToOneWithWhereWithoutSelectionInput, RegularThumbUpdateWithoutSelectionInput>, RegularThumbUncheckedUpdateWithoutSelectionInput>
  }

  export type TrendingThumbUncheckedUpdateOneWithoutSelectionNestedInput = {
    create?: XOR<TrendingThumbCreateWithoutSelectionInput, TrendingThumbUncheckedCreateWithoutSelectionInput>
    connectOrCreate?: TrendingThumbCreateOrConnectWithoutSelectionInput
    upsert?: TrendingThumbUpsertWithoutSelectionInput
    disconnect?: TrendingThumbWhereInput | boolean
    delete?: TrendingThumbWhereInput | boolean
    connect?: TrendingThumbWhereUniqueInput
    update?: XOR<XOR<TrendingThumbUpdateToOneWithWhereWithoutSelectionInput, TrendingThumbUpdateWithoutSelectionInput>, TrendingThumbUncheckedUpdateWithoutSelectionInput>
  }

  export type SelectionCreateNestedOneWithoutRegularThumbInput = {
    create?: XOR<SelectionCreateWithoutRegularThumbInput, SelectionUncheckedCreateWithoutRegularThumbInput>
    connectOrCreate?: SelectionCreateOrConnectWithoutRegularThumbInput
    connect?: SelectionWhereUniqueInput
  }

  export type SelectionUpdateOneRequiredWithoutRegularThumbNestedInput = {
    create?: XOR<SelectionCreateWithoutRegularThumbInput, SelectionUncheckedCreateWithoutRegularThumbInput>
    connectOrCreate?: SelectionCreateOrConnectWithoutRegularThumbInput
    upsert?: SelectionUpsertWithoutRegularThumbInput
    connect?: SelectionWhereUniqueInput
    update?: XOR<XOR<SelectionUpdateToOneWithWhereWithoutRegularThumbInput, SelectionUpdateWithoutRegularThumbInput>, SelectionUncheckedUpdateWithoutRegularThumbInput>
  }

  export type SelectionCreateNestedOneWithoutTrendingThumbInput = {
    create?: XOR<SelectionCreateWithoutTrendingThumbInput, SelectionUncheckedCreateWithoutTrendingThumbInput>
    connectOrCreate?: SelectionCreateOrConnectWithoutTrendingThumbInput
    connect?: SelectionWhereUniqueInput
  }

  export type SelectionUpdateOneRequiredWithoutTrendingThumbNestedInput = {
    create?: XOR<SelectionCreateWithoutTrendingThumbInput, SelectionUncheckedCreateWithoutTrendingThumbInput>
    connectOrCreate?: SelectionCreateOrConnectWithoutTrendingThumbInput
    upsert?: SelectionUpsertWithoutTrendingThumbInput
    connect?: SelectionWhereUniqueInput
    update?: XOR<XOR<SelectionUpdateToOneWithWhereWithoutTrendingThumbInput, SelectionUpdateWithoutTrendingThumbInput>, SelectionUncheckedUpdateWithoutTrendingThumbInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RegularThumbCreateWithoutSelectionInput = {
    id?: string
    large: string
    small: string
    medium: string
  }

  export type RegularThumbUncheckedCreateWithoutSelectionInput = {
    id?: string
    large: string
    small: string
    medium: string
  }

  export type RegularThumbCreateOrConnectWithoutSelectionInput = {
    where: RegularThumbWhereUniqueInput
    create: XOR<RegularThumbCreateWithoutSelectionInput, RegularThumbUncheckedCreateWithoutSelectionInput>
  }

  export type TrendingThumbCreateWithoutSelectionInput = {
    id?: string
    large: string
    small: string
  }

  export type TrendingThumbUncheckedCreateWithoutSelectionInput = {
    id?: string
    large: string
    small: string
  }

  export type TrendingThumbCreateOrConnectWithoutSelectionInput = {
    where: TrendingThumbWhereUniqueInput
    create: XOR<TrendingThumbCreateWithoutSelectionInput, TrendingThumbUncheckedCreateWithoutSelectionInput>
  }

  export type RegularThumbUpsertWithoutSelectionInput = {
    update: XOR<RegularThumbUpdateWithoutSelectionInput, RegularThumbUncheckedUpdateWithoutSelectionInput>
    create: XOR<RegularThumbCreateWithoutSelectionInput, RegularThumbUncheckedCreateWithoutSelectionInput>
    where?: RegularThumbWhereInput
  }

  export type RegularThumbUpdateToOneWithWhereWithoutSelectionInput = {
    where?: RegularThumbWhereInput
    data: XOR<RegularThumbUpdateWithoutSelectionInput, RegularThumbUncheckedUpdateWithoutSelectionInput>
  }

  export type RegularThumbUpdateWithoutSelectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
  }

  export type RegularThumbUncheckedUpdateWithoutSelectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    medium?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingThumbUpsertWithoutSelectionInput = {
    update: XOR<TrendingThumbUpdateWithoutSelectionInput, TrendingThumbUncheckedUpdateWithoutSelectionInput>
    create: XOR<TrendingThumbCreateWithoutSelectionInput, TrendingThumbUncheckedCreateWithoutSelectionInput>
    where?: TrendingThumbWhereInput
  }

  export type TrendingThumbUpdateToOneWithWhereWithoutSelectionInput = {
    where?: TrendingThumbWhereInput
    data: XOR<TrendingThumbUpdateWithoutSelectionInput, TrendingThumbUncheckedUpdateWithoutSelectionInput>
  }

  export type TrendingThumbUpdateWithoutSelectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingThumbUncheckedUpdateWithoutSelectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
  }

  export type SelectionCreateWithoutRegularThumbInput = {
    id?: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
    TrendingThumb?: TrendingThumbCreateNestedOneWithoutSelectionInput
  }

  export type SelectionUncheckedCreateWithoutRegularThumbInput = {
    id?: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
    TrendingThumb?: TrendingThumbUncheckedCreateNestedOneWithoutSelectionInput
  }

  export type SelectionCreateOrConnectWithoutRegularThumbInput = {
    where: SelectionWhereUniqueInput
    create: XOR<SelectionCreateWithoutRegularThumbInput, SelectionUncheckedCreateWithoutRegularThumbInput>
  }

  export type SelectionUpsertWithoutRegularThumbInput = {
    update: XOR<SelectionUpdateWithoutRegularThumbInput, SelectionUncheckedUpdateWithoutRegularThumbInput>
    create: XOR<SelectionCreateWithoutRegularThumbInput, SelectionUncheckedCreateWithoutRegularThumbInput>
    where?: SelectionWhereInput
  }

  export type SelectionUpdateToOneWithWhereWithoutRegularThumbInput = {
    where?: SelectionWhereInput
    data: XOR<SelectionUpdateWithoutRegularThumbInput, SelectionUncheckedUpdateWithoutRegularThumbInput>
  }

  export type SelectionUpdateWithoutRegularThumbInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
    TrendingThumb?: TrendingThumbUpdateOneWithoutSelectionNestedInput
  }

  export type SelectionUncheckedUpdateWithoutRegularThumbInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
    TrendingThumb?: TrendingThumbUncheckedUpdateOneWithoutSelectionNestedInput
  }

  export type SelectionCreateWithoutTrendingThumbInput = {
    id?: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
    RegularThumb?: RegularThumbCreateNestedOneWithoutSelectionInput
  }

  export type SelectionUncheckedCreateWithoutTrendingThumbInput = {
    id?: string
    title: string
    year: number
    category: string
    rating: string
    is_bookmarked: boolean
    is_trending: boolean
    RegularThumb?: RegularThumbUncheckedCreateNestedOneWithoutSelectionInput
  }

  export type SelectionCreateOrConnectWithoutTrendingThumbInput = {
    where: SelectionWhereUniqueInput
    create: XOR<SelectionCreateWithoutTrendingThumbInput, SelectionUncheckedCreateWithoutTrendingThumbInput>
  }

  export type SelectionUpsertWithoutTrendingThumbInput = {
    update: XOR<SelectionUpdateWithoutTrendingThumbInput, SelectionUncheckedUpdateWithoutTrendingThumbInput>
    create: XOR<SelectionCreateWithoutTrendingThumbInput, SelectionUncheckedCreateWithoutTrendingThumbInput>
    where?: SelectionWhereInput
  }

  export type SelectionUpdateToOneWithWhereWithoutTrendingThumbInput = {
    where?: SelectionWhereInput
    data: XOR<SelectionUpdateWithoutTrendingThumbInput, SelectionUncheckedUpdateWithoutTrendingThumbInput>
  }

  export type SelectionUpdateWithoutTrendingThumbInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
    RegularThumb?: RegularThumbUpdateOneWithoutSelectionNestedInput
  }

  export type SelectionUncheckedUpdateWithoutTrendingThumbInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    is_bookmarked?: BoolFieldUpdateOperationsInput | boolean
    is_trending?: BoolFieldUpdateOperationsInput | boolean
    RegularThumb?: RegularThumbUncheckedUpdateOneWithoutSelectionNestedInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SelectionDefaultArgs instead
     */
    export type SelectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SelectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegularThumbDefaultArgs instead
     */
    export type RegularThumbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegularThumbDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrendingThumbDefaultArgs instead
     */
    export type TrendingThumbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrendingThumbDefaultArgs<ExtArgs>

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