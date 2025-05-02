
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
 * Model quote_requests
 * 
 */
export type quote_requests = $Result.DefaultSelection<Prisma.$quote_requestsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Quote_requests
 * const quote_requests = await prisma.quote_requests.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Quote_requests
   * const quote_requests = await prisma.quote_requests.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.quote_requests`: Exposes CRUD operations for the **quote_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quote_requests
    * const quote_requests = await prisma.quote_requests.findMany()
    * ```
    */
  get quote_requests(): Prisma.quote_requestsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    quote_requests: 'quote_requests'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "quote_requests"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      quote_requests: {
        payload: Prisma.$quote_requestsPayload<ExtArgs>
        fields: Prisma.quote_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quote_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quote_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>
          }
          findFirst: {
            args: Prisma.quote_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quote_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>
          }
          findMany: {
            args: Prisma.quote_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>[]
          }
          create: {
            args: Prisma.quote_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>
          }
          createMany: {
            args: Prisma.quote_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.quote_requestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>[]
          }
          delete: {
            args: Prisma.quote_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>
          }
          update: {
            args: Prisma.quote_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>
          }
          deleteMany: {
            args: Prisma.quote_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.quote_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.quote_requestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>[]
          }
          upsert: {
            args: Prisma.quote_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quote_requestsPayload>
          }
          aggregate: {
            args: Prisma.Quote_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuote_requests>
          }
          groupBy: {
            args: Prisma.quote_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Quote_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.quote_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Quote_requestsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    quote_requests?: quote_requestsOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Model quote_requests
   */

  export type AggregateQuote_requests = {
    _count: Quote_requestsCountAggregateOutputType | null
    _avg: Quote_requestsAvgAggregateOutputType | null
    _sum: Quote_requestsSumAggregateOutputType | null
    _min: Quote_requestsMinAggregateOutputType | null
    _max: Quote_requestsMaxAggregateOutputType | null
  }

  export type Quote_requestsAvgAggregateOutputType = {
    id: number | null
    product_price: Decimal | null
  }

  export type Quote_requestsSumAggregateOutputType = {
    id: number | null
    product_price: Decimal | null
  }

  export type Quote_requestsMinAggregateOutputType = {
    id: number | null
    product_name: string | null
    phone_number: string | null
    product_price: Decimal | null
    product_unit: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quote_requestsMaxAggregateOutputType = {
    id: number | null
    product_name: string | null
    phone_number: string | null
    product_price: Decimal | null
    product_unit: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quote_requestsCountAggregateOutputType = {
    id: number
    product_name: number
    phone_number: number
    product_price: number
    product_unit: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Quote_requestsAvgAggregateInputType = {
    id?: true
    product_price?: true
  }

  export type Quote_requestsSumAggregateInputType = {
    id?: true
    product_price?: true
  }

  export type Quote_requestsMinAggregateInputType = {
    id?: true
    product_name?: true
    phone_number?: true
    product_price?: true
    product_unit?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Quote_requestsMaxAggregateInputType = {
    id?: true
    product_name?: true
    phone_number?: true
    product_price?: true
    product_unit?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Quote_requestsCountAggregateInputType = {
    id?: true
    product_name?: true
    phone_number?: true
    product_price?: true
    product_unit?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Quote_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quote_requests to aggregate.
     */
    where?: quote_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quote_requests to fetch.
     */
    orderBy?: quote_requestsOrderByWithRelationInput | quote_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quote_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quote_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quote_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quote_requests
    **/
    _count?: true | Quote_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quote_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quote_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quote_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quote_requestsMaxAggregateInputType
  }

  export type GetQuote_requestsAggregateType<T extends Quote_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuote_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuote_requests[P]>
      : GetScalarType<T[P], AggregateQuote_requests[P]>
  }




  export type quote_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quote_requestsWhereInput
    orderBy?: quote_requestsOrderByWithAggregationInput | quote_requestsOrderByWithAggregationInput[]
    by: Quote_requestsScalarFieldEnum[] | Quote_requestsScalarFieldEnum
    having?: quote_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quote_requestsCountAggregateInputType | true
    _avg?: Quote_requestsAvgAggregateInputType
    _sum?: Quote_requestsSumAggregateInputType
    _min?: Quote_requestsMinAggregateInputType
    _max?: Quote_requestsMaxAggregateInputType
  }

  export type Quote_requestsGroupByOutputType = {
    id: number
    product_name: string
    phone_number: string
    product_price: Decimal
    product_unit: string
    status: string
    created_at: Date
    updated_at: Date
    _count: Quote_requestsCountAggregateOutputType | null
    _avg: Quote_requestsAvgAggregateOutputType | null
    _sum: Quote_requestsSumAggregateOutputType | null
    _min: Quote_requestsMinAggregateOutputType | null
    _max: Quote_requestsMaxAggregateOutputType | null
  }

  type GetQuote_requestsGroupByPayload<T extends quote_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Quote_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quote_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quote_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Quote_requestsGroupByOutputType[P]>
        }
      >
    >


  export type quote_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_name?: boolean
    phone_number?: boolean
    product_price?: boolean
    product_unit?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["quote_requests"]>

  export type quote_requestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_name?: boolean
    phone_number?: boolean
    product_price?: boolean
    product_unit?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["quote_requests"]>

  export type quote_requestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_name?: boolean
    phone_number?: boolean
    product_price?: boolean
    product_unit?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["quote_requests"]>

  export type quote_requestsSelectScalar = {
    id?: boolean
    product_name?: boolean
    phone_number?: boolean
    product_price?: boolean
    product_unit?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type quote_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_name" | "phone_number" | "product_price" | "product_unit" | "status" | "created_at" | "updated_at", ExtArgs["result"]["quote_requests"]>

  export type $quote_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quote_requests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_name: string
      phone_number: string
      product_price: Prisma.Decimal
      product_unit: string
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["quote_requests"]>
    composites: {}
  }

  type quote_requestsGetPayload<S extends boolean | null | undefined | quote_requestsDefaultArgs> = $Result.GetResult<Prisma.$quote_requestsPayload, S>

  type quote_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<quote_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Quote_requestsCountAggregateInputType | true
    }

  export interface quote_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quote_requests'], meta: { name: 'quote_requests' } }
    /**
     * Find zero or one Quote_requests that matches the filter.
     * @param {quote_requestsFindUniqueArgs} args - Arguments to find a Quote_requests
     * @example
     * // Get one Quote_requests
     * const quote_requests = await prisma.quote_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends quote_requestsFindUniqueArgs>(args: SelectSubset<T, quote_requestsFindUniqueArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quote_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {quote_requestsFindUniqueOrThrowArgs} args - Arguments to find a Quote_requests
     * @example
     * // Get one Quote_requests
     * const quote_requests = await prisma.quote_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends quote_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, quote_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quote_requestsFindFirstArgs} args - Arguments to find a Quote_requests
     * @example
     * // Get one Quote_requests
     * const quote_requests = await prisma.quote_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends quote_requestsFindFirstArgs>(args?: SelectSubset<T, quote_requestsFindFirstArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quote_requestsFindFirstOrThrowArgs} args - Arguments to find a Quote_requests
     * @example
     * // Get one Quote_requests
     * const quote_requests = await prisma.quote_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends quote_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, quote_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quote_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quote_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quote_requests
     * const quote_requests = await prisma.quote_requests.findMany()
     * 
     * // Get first 10 Quote_requests
     * const quote_requests = await prisma.quote_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quote_requestsWithIdOnly = await prisma.quote_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends quote_requestsFindManyArgs>(args?: SelectSubset<T, quote_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quote_requests.
     * @param {quote_requestsCreateArgs} args - Arguments to create a Quote_requests.
     * @example
     * // Create one Quote_requests
     * const Quote_requests = await prisma.quote_requests.create({
     *   data: {
     *     // ... data to create a Quote_requests
     *   }
     * })
     * 
     */
    create<T extends quote_requestsCreateArgs>(args: SelectSubset<T, quote_requestsCreateArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quote_requests.
     * @param {quote_requestsCreateManyArgs} args - Arguments to create many Quote_requests.
     * @example
     * // Create many Quote_requests
     * const quote_requests = await prisma.quote_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends quote_requestsCreateManyArgs>(args?: SelectSubset<T, quote_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quote_requests and returns the data saved in the database.
     * @param {quote_requestsCreateManyAndReturnArgs} args - Arguments to create many Quote_requests.
     * @example
     * // Create many Quote_requests
     * const quote_requests = await prisma.quote_requests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quote_requests and only return the `id`
     * const quote_requestsWithIdOnly = await prisma.quote_requests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends quote_requestsCreateManyAndReturnArgs>(args?: SelectSubset<T, quote_requestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quote_requests.
     * @param {quote_requestsDeleteArgs} args - Arguments to delete one Quote_requests.
     * @example
     * // Delete one Quote_requests
     * const Quote_requests = await prisma.quote_requests.delete({
     *   where: {
     *     // ... filter to delete one Quote_requests
     *   }
     * })
     * 
     */
    delete<T extends quote_requestsDeleteArgs>(args: SelectSubset<T, quote_requestsDeleteArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quote_requests.
     * @param {quote_requestsUpdateArgs} args - Arguments to update one Quote_requests.
     * @example
     * // Update one Quote_requests
     * const quote_requests = await prisma.quote_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends quote_requestsUpdateArgs>(args: SelectSubset<T, quote_requestsUpdateArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quote_requests.
     * @param {quote_requestsDeleteManyArgs} args - Arguments to filter Quote_requests to delete.
     * @example
     * // Delete a few Quote_requests
     * const { count } = await prisma.quote_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends quote_requestsDeleteManyArgs>(args?: SelectSubset<T, quote_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quote_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quote_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quote_requests
     * const quote_requests = await prisma.quote_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends quote_requestsUpdateManyArgs>(args: SelectSubset<T, quote_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quote_requests and returns the data updated in the database.
     * @param {quote_requestsUpdateManyAndReturnArgs} args - Arguments to update many Quote_requests.
     * @example
     * // Update many Quote_requests
     * const quote_requests = await prisma.quote_requests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quote_requests and only return the `id`
     * const quote_requestsWithIdOnly = await prisma.quote_requests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends quote_requestsUpdateManyAndReturnArgs>(args: SelectSubset<T, quote_requestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quote_requests.
     * @param {quote_requestsUpsertArgs} args - Arguments to update or create a Quote_requests.
     * @example
     * // Update or create a Quote_requests
     * const quote_requests = await prisma.quote_requests.upsert({
     *   create: {
     *     // ... data to create a Quote_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote_requests we want to update
     *   }
     * })
     */
    upsert<T extends quote_requestsUpsertArgs>(args: SelectSubset<T, quote_requestsUpsertArgs<ExtArgs>>): Prisma__quote_requestsClient<$Result.GetResult<Prisma.$quote_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quote_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quote_requestsCountArgs} args - Arguments to filter Quote_requests to count.
     * @example
     * // Count the number of Quote_requests
     * const count = await prisma.quote_requests.count({
     *   where: {
     *     // ... the filter for the Quote_requests we want to count
     *   }
     * })
    **/
    count<T extends quote_requestsCountArgs>(
      args?: Subset<T, quote_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quote_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quote_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quote_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Quote_requestsAggregateArgs>(args: Subset<T, Quote_requestsAggregateArgs>): Prisma.PrismaPromise<GetQuote_requestsAggregateType<T>>

    /**
     * Group by Quote_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quote_requestsGroupByArgs} args - Group by arguments.
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
      T extends quote_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quote_requestsGroupByArgs['orderBy'] }
        : { orderBy?: quote_requestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, quote_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuote_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quote_requests model
   */
  readonly fields: quote_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quote_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quote_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the quote_requests model
   */
  interface quote_requestsFieldRefs {
    readonly id: FieldRef<"quote_requests", 'Int'>
    readonly product_name: FieldRef<"quote_requests", 'String'>
    readonly phone_number: FieldRef<"quote_requests", 'String'>
    readonly product_price: FieldRef<"quote_requests", 'Decimal'>
    readonly product_unit: FieldRef<"quote_requests", 'String'>
    readonly status: FieldRef<"quote_requests", 'String'>
    readonly created_at: FieldRef<"quote_requests", 'DateTime'>
    readonly updated_at: FieldRef<"quote_requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * quote_requests findUnique
   */
  export type quote_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * Filter, which quote_requests to fetch.
     */
    where: quote_requestsWhereUniqueInput
  }

  /**
   * quote_requests findUniqueOrThrow
   */
  export type quote_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * Filter, which quote_requests to fetch.
     */
    where: quote_requestsWhereUniqueInput
  }

  /**
   * quote_requests findFirst
   */
  export type quote_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * Filter, which quote_requests to fetch.
     */
    where?: quote_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quote_requests to fetch.
     */
    orderBy?: quote_requestsOrderByWithRelationInput | quote_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quote_requests.
     */
    cursor?: quote_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quote_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quote_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quote_requests.
     */
    distinct?: Quote_requestsScalarFieldEnum | Quote_requestsScalarFieldEnum[]
  }

  /**
   * quote_requests findFirstOrThrow
   */
  export type quote_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * Filter, which quote_requests to fetch.
     */
    where?: quote_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quote_requests to fetch.
     */
    orderBy?: quote_requestsOrderByWithRelationInput | quote_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quote_requests.
     */
    cursor?: quote_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quote_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quote_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quote_requests.
     */
    distinct?: Quote_requestsScalarFieldEnum | Quote_requestsScalarFieldEnum[]
  }

  /**
   * quote_requests findMany
   */
  export type quote_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * Filter, which quote_requests to fetch.
     */
    where?: quote_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quote_requests to fetch.
     */
    orderBy?: quote_requestsOrderByWithRelationInput | quote_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quote_requests.
     */
    cursor?: quote_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quote_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quote_requests.
     */
    skip?: number
    distinct?: Quote_requestsScalarFieldEnum | Quote_requestsScalarFieldEnum[]
  }

  /**
   * quote_requests create
   */
  export type quote_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * The data needed to create a quote_requests.
     */
    data: XOR<quote_requestsCreateInput, quote_requestsUncheckedCreateInput>
  }

  /**
   * quote_requests createMany
   */
  export type quote_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quote_requests.
     */
    data: quote_requestsCreateManyInput | quote_requestsCreateManyInput[]
  }

  /**
   * quote_requests createManyAndReturn
   */
  export type quote_requestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * The data used to create many quote_requests.
     */
    data: quote_requestsCreateManyInput | quote_requestsCreateManyInput[]
  }

  /**
   * quote_requests update
   */
  export type quote_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * The data needed to update a quote_requests.
     */
    data: XOR<quote_requestsUpdateInput, quote_requestsUncheckedUpdateInput>
    /**
     * Choose, which quote_requests to update.
     */
    where: quote_requestsWhereUniqueInput
  }

  /**
   * quote_requests updateMany
   */
  export type quote_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quote_requests.
     */
    data: XOR<quote_requestsUpdateManyMutationInput, quote_requestsUncheckedUpdateManyInput>
    /**
     * Filter which quote_requests to update
     */
    where?: quote_requestsWhereInput
    /**
     * Limit how many quote_requests to update.
     */
    limit?: number
  }

  /**
   * quote_requests updateManyAndReturn
   */
  export type quote_requestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * The data used to update quote_requests.
     */
    data: XOR<quote_requestsUpdateManyMutationInput, quote_requestsUncheckedUpdateManyInput>
    /**
     * Filter which quote_requests to update
     */
    where?: quote_requestsWhereInput
    /**
     * Limit how many quote_requests to update.
     */
    limit?: number
  }

  /**
   * quote_requests upsert
   */
  export type quote_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * The filter to search for the quote_requests to update in case it exists.
     */
    where: quote_requestsWhereUniqueInput
    /**
     * In case the quote_requests found by the `where` argument doesn't exist, create a new quote_requests with this data.
     */
    create: XOR<quote_requestsCreateInput, quote_requestsUncheckedCreateInput>
    /**
     * In case the quote_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quote_requestsUpdateInput, quote_requestsUncheckedUpdateInput>
  }

  /**
   * quote_requests delete
   */
  export type quote_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
    /**
     * Filter which quote_requests to delete.
     */
    where: quote_requestsWhereUniqueInput
  }

  /**
   * quote_requests deleteMany
   */
  export type quote_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quote_requests to delete
     */
    where?: quote_requestsWhereInput
    /**
     * Limit how many quote_requests to delete.
     */
    limit?: number
  }

  /**
   * quote_requests without action
   */
  export type quote_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quote_requests
     */
    select?: quote_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quote_requests
     */
    omit?: quote_requestsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Quote_requestsScalarFieldEnum: {
    id: 'id',
    product_name: 'product_name',
    phone_number: 'phone_number',
    product_price: 'product_price',
    product_unit: 'product_unit',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Quote_requestsScalarFieldEnum = (typeof Quote_requestsScalarFieldEnum)[keyof typeof Quote_requestsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type quote_requestsWhereInput = {
    AND?: quote_requestsWhereInput | quote_requestsWhereInput[]
    OR?: quote_requestsWhereInput[]
    NOT?: quote_requestsWhereInput | quote_requestsWhereInput[]
    id?: IntFilter<"quote_requests"> | number
    product_name?: StringFilter<"quote_requests"> | string
    phone_number?: StringFilter<"quote_requests"> | string
    product_price?: DecimalFilter<"quote_requests"> | Decimal | DecimalJsLike | number | string
    product_unit?: StringFilter<"quote_requests"> | string
    status?: StringFilter<"quote_requests"> | string
    created_at?: DateTimeFilter<"quote_requests"> | Date | string
    updated_at?: DateTimeFilter<"quote_requests"> | Date | string
  }

  export type quote_requestsOrderByWithRelationInput = {
    id?: SortOrder
    product_name?: SortOrder
    phone_number?: SortOrder
    product_price?: SortOrder
    product_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quote_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: quote_requestsWhereInput | quote_requestsWhereInput[]
    OR?: quote_requestsWhereInput[]
    NOT?: quote_requestsWhereInput | quote_requestsWhereInput[]
    product_name?: StringFilter<"quote_requests"> | string
    phone_number?: StringFilter<"quote_requests"> | string
    product_price?: DecimalFilter<"quote_requests"> | Decimal | DecimalJsLike | number | string
    product_unit?: StringFilter<"quote_requests"> | string
    status?: StringFilter<"quote_requests"> | string
    created_at?: DateTimeFilter<"quote_requests"> | Date | string
    updated_at?: DateTimeFilter<"quote_requests"> | Date | string
  }, "id">

  export type quote_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    product_name?: SortOrder
    phone_number?: SortOrder
    product_price?: SortOrder
    product_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: quote_requestsCountOrderByAggregateInput
    _avg?: quote_requestsAvgOrderByAggregateInput
    _max?: quote_requestsMaxOrderByAggregateInput
    _min?: quote_requestsMinOrderByAggregateInput
    _sum?: quote_requestsSumOrderByAggregateInput
  }

  export type quote_requestsScalarWhereWithAggregatesInput = {
    AND?: quote_requestsScalarWhereWithAggregatesInput | quote_requestsScalarWhereWithAggregatesInput[]
    OR?: quote_requestsScalarWhereWithAggregatesInput[]
    NOT?: quote_requestsScalarWhereWithAggregatesInput | quote_requestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"quote_requests"> | number
    product_name?: StringWithAggregatesFilter<"quote_requests"> | string
    phone_number?: StringWithAggregatesFilter<"quote_requests"> | string
    product_price?: DecimalWithAggregatesFilter<"quote_requests"> | Decimal | DecimalJsLike | number | string
    product_unit?: StringWithAggregatesFilter<"quote_requests"> | string
    status?: StringWithAggregatesFilter<"quote_requests"> | string
    created_at?: DateTimeWithAggregatesFilter<"quote_requests"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"quote_requests"> | Date | string
  }

  export type quote_requestsCreateInput = {
    product_name: string
    phone_number: string
    product_price: Decimal | DecimalJsLike | number | string
    product_unit: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type quote_requestsUncheckedCreateInput = {
    id?: number
    product_name: string
    phone_number: string
    product_price: Decimal | DecimalJsLike | number | string
    product_unit: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type quote_requestsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    product_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quote_requestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    product_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quote_requestsCreateManyInput = {
    id?: number
    product_name: string
    phone_number: string
    product_price: Decimal | DecimalJsLike | number | string
    product_unit: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type quote_requestsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    product_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quote_requestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    product_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type quote_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    phone_number?: SortOrder
    product_price?: SortOrder
    product_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quote_requestsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_price?: SortOrder
  }

  export type quote_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    phone_number?: SortOrder
    product_price?: SortOrder
    product_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quote_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    phone_number?: SortOrder
    product_price?: SortOrder
    product_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quote_requestsSumOrderByAggregateInput = {
    id?: SortOrder
    product_price?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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