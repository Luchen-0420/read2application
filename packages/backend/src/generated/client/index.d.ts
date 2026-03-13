
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
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Methodology
 * 
 */
export type Methodology = $Result.DefaultSelection<Prisma.$MethodologyPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model MethodologyTag
 * 
 */
export type MethodologyTag = $Result.DefaultSelection<Prisma.$MethodologyTagPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
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
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.methodology`: Exposes CRUD operations for the **Methodology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Methodologies
    * const methodologies = await prisma.methodology.findMany()
    * ```
    */
  get methodology(): Prisma.MethodologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.methodologyTag`: Exposes CRUD operations for the **MethodologyTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MethodologyTags
    * const methodologyTags = await prisma.methodologyTag.findMany()
    * ```
    */
  get methodologyTag(): Prisma.MethodologyTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Book: 'Book',
    Methodology: 'Methodology',
    Tag: 'Tag',
    MethodologyTag: 'MethodologyTag',
    Plan: 'Plan'
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
      modelProps: "book" | "methodology" | "tag" | "methodologyTag" | "plan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Methodology: {
        payload: Prisma.$MethodologyPayload<ExtArgs>
        fields: Prisma.MethodologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MethodologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MethodologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>
          }
          findFirst: {
            args: Prisma.MethodologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MethodologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>
          }
          findMany: {
            args: Prisma.MethodologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>[]
          }
          create: {
            args: Prisma.MethodologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>
          }
          createMany: {
            args: Prisma.MethodologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MethodologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>[]
          }
          delete: {
            args: Prisma.MethodologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>
          }
          update: {
            args: Prisma.MethodologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>
          }
          deleteMany: {
            args: Prisma.MethodologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MethodologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MethodologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>[]
          }
          upsert: {
            args: Prisma.MethodologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyPayload>
          }
          aggregate: {
            args: Prisma.MethodologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMethodology>
          }
          groupBy: {
            args: Prisma.MethodologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MethodologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MethodologyCountArgs<ExtArgs>
            result: $Utils.Optional<MethodologyCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      MethodologyTag: {
        payload: Prisma.$MethodologyTagPayload<ExtArgs>
        fields: Prisma.MethodologyTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MethodologyTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MethodologyTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>
          }
          findFirst: {
            args: Prisma.MethodologyTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MethodologyTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>
          }
          findMany: {
            args: Prisma.MethodologyTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>[]
          }
          create: {
            args: Prisma.MethodologyTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>
          }
          createMany: {
            args: Prisma.MethodologyTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MethodologyTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>[]
          }
          delete: {
            args: Prisma.MethodologyTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>
          }
          update: {
            args: Prisma.MethodologyTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>
          }
          deleteMany: {
            args: Prisma.MethodologyTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MethodologyTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MethodologyTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>[]
          }
          upsert: {
            args: Prisma.MethodologyTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MethodologyTagPayload>
          }
          aggregate: {
            args: Prisma.MethodologyTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMethodologyTag>
          }
          groupBy: {
            args: Prisma.MethodologyTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<MethodologyTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.MethodologyTagCountArgs<ExtArgs>
            result: $Utils.Optional<MethodologyTagCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    book?: BookOmit
    methodology?: MethodologyOmit
    tag?: TagOmit
    methodologyTag?: MethodologyTagOmit
    plan?: PlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    methodologies: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodologies?: boolean | BookCountOutputTypeCountMethodologiesArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountMethodologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MethodologyWhereInput
  }


  /**
   * Count Type MethodologyCountOutputType
   */

  export type MethodologyCountOutputType = {
    tags: number
    plans: number
  }

  export type MethodologyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | MethodologyCountOutputTypeCountTagsArgs
    plans?: boolean | MethodologyCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * MethodologyCountOutputType without action
   */
  export type MethodologyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyCountOutputType
     */
    select?: MethodologyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MethodologyCountOutputType without action
   */
  export type MethodologyCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MethodologyTagWhereInput
  }

  /**
   * MethodologyCountOutputType without action
   */
  export type MethodologyCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    methodologies: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodologies?: boolean | TagCountOutputTypeCountMethodologiesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountMethodologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MethodologyTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    coverUrl: string | null
    summary: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    coverUrl: string | null
    summary: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    coverUrl: number
    summary: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    coverUrl?: true
    summary?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    coverUrl?: true
    summary?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    coverUrl?: true
    summary?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    author: string
    coverUrl: string | null
    summary: string | null
    category: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    coverUrl?: boolean
    summary?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    methodologies?: boolean | Book$methodologiesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    coverUrl?: boolean
    summary?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    coverUrl?: boolean
    summary?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    coverUrl?: boolean
    summary?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "coverUrl" | "summary" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodologies?: boolean | Book$methodologiesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      methodologies: Prisma.$MethodologyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      coverUrl: string | null
      summary: string | null
      category: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    methodologies<T extends Book$methodologiesArgs<ExtArgs> = {}>(args?: Subset<T, Book$methodologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly coverUrl: FieldRef<"Book", 'String'>
    readonly summary: FieldRef<"Book", 'String'>
    readonly category: FieldRef<"Book", 'String'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.methodologies
   */
  export type Book$methodologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    where?: MethodologyWhereInput
    orderBy?: MethodologyOrderByWithRelationInput | MethodologyOrderByWithRelationInput[]
    cursor?: MethodologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MethodologyScalarFieldEnum | MethodologyScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Methodology
   */

  export type AggregateMethodology = {
    _count: MethodologyCountAggregateOutputType | null
    _min: MethodologyMinAggregateOutputType | null
    _max: MethodologyMaxAggregateOutputType | null
  }

  export type MethodologyMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    name: string | null
    description: string | null
    applicableScenarios: string | null
    createdAt: Date | null
  }

  export type MethodologyMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    name: string | null
    description: string | null
    applicableScenarios: string | null
    createdAt: Date | null
  }

  export type MethodologyCountAggregateOutputType = {
    id: number
    bookId: number
    name: number
    description: number
    steps: number
    applicableScenarios: number
    createdAt: number
    _all: number
  }


  export type MethodologyMinAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    description?: true
    applicableScenarios?: true
    createdAt?: true
  }

  export type MethodologyMaxAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    description?: true
    applicableScenarios?: true
    createdAt?: true
  }

  export type MethodologyCountAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    description?: true
    steps?: true
    applicableScenarios?: true
    createdAt?: true
    _all?: true
  }

  export type MethodologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Methodology to aggregate.
     */
    where?: MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methodologies to fetch.
     */
    orderBy?: MethodologyOrderByWithRelationInput | MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Methodologies
    **/
    _count?: true | MethodologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MethodologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MethodologyMaxAggregateInputType
  }

  export type GetMethodologyAggregateType<T extends MethodologyAggregateArgs> = {
        [P in keyof T & keyof AggregateMethodology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMethodology[P]>
      : GetScalarType<T[P], AggregateMethodology[P]>
  }




  export type MethodologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MethodologyWhereInput
    orderBy?: MethodologyOrderByWithAggregationInput | MethodologyOrderByWithAggregationInput[]
    by: MethodologyScalarFieldEnum[] | MethodologyScalarFieldEnum
    having?: MethodologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MethodologyCountAggregateInputType | true
    _min?: MethodologyMinAggregateInputType
    _max?: MethodologyMaxAggregateInputType
  }

  export type MethodologyGroupByOutputType = {
    id: string
    bookId: string
    name: string
    description: string
    steps: JsonValue
    applicableScenarios: string | null
    createdAt: Date
    _count: MethodologyCountAggregateOutputType | null
    _min: MethodologyMinAggregateOutputType | null
    _max: MethodologyMaxAggregateOutputType | null
  }

  type GetMethodologyGroupByPayload<T extends MethodologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MethodologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MethodologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MethodologyGroupByOutputType[P]>
            : GetScalarType<T[P], MethodologyGroupByOutputType[P]>
        }
      >
    >


  export type MethodologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    applicableScenarios?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    tags?: boolean | Methodology$tagsArgs<ExtArgs>
    plans?: boolean | Methodology$plansArgs<ExtArgs>
    _count?: boolean | MethodologyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["methodology"]>

  export type MethodologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    applicableScenarios?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["methodology"]>

  export type MethodologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    applicableScenarios?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["methodology"]>

  export type MethodologySelectScalar = {
    id?: boolean
    bookId?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    applicableScenarios?: boolean
    createdAt?: boolean
  }

  export type MethodologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "name" | "description" | "steps" | "applicableScenarios" | "createdAt", ExtArgs["result"]["methodology"]>
  export type MethodologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    tags?: boolean | Methodology$tagsArgs<ExtArgs>
    plans?: boolean | Methodology$plansArgs<ExtArgs>
    _count?: boolean | MethodologyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MethodologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type MethodologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $MethodologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Methodology"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      tags: Prisma.$MethodologyTagPayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      name: string
      description: string
      steps: Prisma.JsonValue
      applicableScenarios: string | null
      createdAt: Date
    }, ExtArgs["result"]["methodology"]>
    composites: {}
  }

  type MethodologyGetPayload<S extends boolean | null | undefined | MethodologyDefaultArgs> = $Result.GetResult<Prisma.$MethodologyPayload, S>

  type MethodologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MethodologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MethodologyCountAggregateInputType | true
    }

  export interface MethodologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Methodology'], meta: { name: 'Methodology' } }
    /**
     * Find zero or one Methodology that matches the filter.
     * @param {MethodologyFindUniqueArgs} args - Arguments to find a Methodology
     * @example
     * // Get one Methodology
     * const methodology = await prisma.methodology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MethodologyFindUniqueArgs>(args: SelectSubset<T, MethodologyFindUniqueArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Methodology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MethodologyFindUniqueOrThrowArgs} args - Arguments to find a Methodology
     * @example
     * // Get one Methodology
     * const methodology = await prisma.methodology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MethodologyFindUniqueOrThrowArgs>(args: SelectSubset<T, MethodologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Methodology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyFindFirstArgs} args - Arguments to find a Methodology
     * @example
     * // Get one Methodology
     * const methodology = await prisma.methodology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MethodologyFindFirstArgs>(args?: SelectSubset<T, MethodologyFindFirstArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Methodology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyFindFirstOrThrowArgs} args - Arguments to find a Methodology
     * @example
     * // Get one Methodology
     * const methodology = await prisma.methodology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MethodologyFindFirstOrThrowArgs>(args?: SelectSubset<T, MethodologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Methodologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Methodologies
     * const methodologies = await prisma.methodology.findMany()
     * 
     * // Get first 10 Methodologies
     * const methodologies = await prisma.methodology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const methodologyWithIdOnly = await prisma.methodology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MethodologyFindManyArgs>(args?: SelectSubset<T, MethodologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Methodology.
     * @param {MethodologyCreateArgs} args - Arguments to create a Methodology.
     * @example
     * // Create one Methodology
     * const Methodology = await prisma.methodology.create({
     *   data: {
     *     // ... data to create a Methodology
     *   }
     * })
     * 
     */
    create<T extends MethodologyCreateArgs>(args: SelectSubset<T, MethodologyCreateArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Methodologies.
     * @param {MethodologyCreateManyArgs} args - Arguments to create many Methodologies.
     * @example
     * // Create many Methodologies
     * const methodology = await prisma.methodology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MethodologyCreateManyArgs>(args?: SelectSubset<T, MethodologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Methodologies and returns the data saved in the database.
     * @param {MethodologyCreateManyAndReturnArgs} args - Arguments to create many Methodologies.
     * @example
     * // Create many Methodologies
     * const methodology = await prisma.methodology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Methodologies and only return the `id`
     * const methodologyWithIdOnly = await prisma.methodology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MethodologyCreateManyAndReturnArgs>(args?: SelectSubset<T, MethodologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Methodology.
     * @param {MethodologyDeleteArgs} args - Arguments to delete one Methodology.
     * @example
     * // Delete one Methodology
     * const Methodology = await prisma.methodology.delete({
     *   where: {
     *     // ... filter to delete one Methodology
     *   }
     * })
     * 
     */
    delete<T extends MethodologyDeleteArgs>(args: SelectSubset<T, MethodologyDeleteArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Methodology.
     * @param {MethodologyUpdateArgs} args - Arguments to update one Methodology.
     * @example
     * // Update one Methodology
     * const methodology = await prisma.methodology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MethodologyUpdateArgs>(args: SelectSubset<T, MethodologyUpdateArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Methodologies.
     * @param {MethodologyDeleteManyArgs} args - Arguments to filter Methodologies to delete.
     * @example
     * // Delete a few Methodologies
     * const { count } = await prisma.methodology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MethodologyDeleteManyArgs>(args?: SelectSubset<T, MethodologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Methodologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Methodologies
     * const methodology = await prisma.methodology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MethodologyUpdateManyArgs>(args: SelectSubset<T, MethodologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Methodologies and returns the data updated in the database.
     * @param {MethodologyUpdateManyAndReturnArgs} args - Arguments to update many Methodologies.
     * @example
     * // Update many Methodologies
     * const methodology = await prisma.methodology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Methodologies and only return the `id`
     * const methodologyWithIdOnly = await prisma.methodology.updateManyAndReturn({
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
    updateManyAndReturn<T extends MethodologyUpdateManyAndReturnArgs>(args: SelectSubset<T, MethodologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Methodology.
     * @param {MethodologyUpsertArgs} args - Arguments to update or create a Methodology.
     * @example
     * // Update or create a Methodology
     * const methodology = await prisma.methodology.upsert({
     *   create: {
     *     // ... data to create a Methodology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Methodology we want to update
     *   }
     * })
     */
    upsert<T extends MethodologyUpsertArgs>(args: SelectSubset<T, MethodologyUpsertArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Methodologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyCountArgs} args - Arguments to filter Methodologies to count.
     * @example
     * // Count the number of Methodologies
     * const count = await prisma.methodology.count({
     *   where: {
     *     // ... the filter for the Methodologies we want to count
     *   }
     * })
    **/
    count<T extends MethodologyCountArgs>(
      args?: Subset<T, MethodologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MethodologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Methodology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MethodologyAggregateArgs>(args: Subset<T, MethodologyAggregateArgs>): Prisma.PrismaPromise<GetMethodologyAggregateType<T>>

    /**
     * Group by Methodology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyGroupByArgs} args - Group by arguments.
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
      T extends MethodologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MethodologyGroupByArgs['orderBy'] }
        : { orderBy?: MethodologyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MethodologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMethodologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Methodology model
   */
  readonly fields: MethodologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Methodology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MethodologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Methodology$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Methodology$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Methodology$plansArgs<ExtArgs> = {}>(args?: Subset<T, Methodology$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Methodology model
   */
  interface MethodologyFieldRefs {
    readonly id: FieldRef<"Methodology", 'String'>
    readonly bookId: FieldRef<"Methodology", 'String'>
    readonly name: FieldRef<"Methodology", 'String'>
    readonly description: FieldRef<"Methodology", 'String'>
    readonly steps: FieldRef<"Methodology", 'Json'>
    readonly applicableScenarios: FieldRef<"Methodology", 'String'>
    readonly createdAt: FieldRef<"Methodology", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Methodology findUnique
   */
  export type MethodologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * Filter, which Methodology to fetch.
     */
    where: MethodologyWhereUniqueInput
  }

  /**
   * Methodology findUniqueOrThrow
   */
  export type MethodologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * Filter, which Methodology to fetch.
     */
    where: MethodologyWhereUniqueInput
  }

  /**
   * Methodology findFirst
   */
  export type MethodologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * Filter, which Methodology to fetch.
     */
    where?: MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methodologies to fetch.
     */
    orderBy?: MethodologyOrderByWithRelationInput | MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Methodologies.
     */
    cursor?: MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Methodologies.
     */
    distinct?: MethodologyScalarFieldEnum | MethodologyScalarFieldEnum[]
  }

  /**
   * Methodology findFirstOrThrow
   */
  export type MethodologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * Filter, which Methodology to fetch.
     */
    where?: MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methodologies to fetch.
     */
    orderBy?: MethodologyOrderByWithRelationInput | MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Methodologies.
     */
    cursor?: MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methodologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Methodologies.
     */
    distinct?: MethodologyScalarFieldEnum | MethodologyScalarFieldEnum[]
  }

  /**
   * Methodology findMany
   */
  export type MethodologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * Filter, which Methodologies to fetch.
     */
    where?: MethodologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methodologies to fetch.
     */
    orderBy?: MethodologyOrderByWithRelationInput | MethodologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Methodologies.
     */
    cursor?: MethodologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methodologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methodologies.
     */
    skip?: number
    distinct?: MethodologyScalarFieldEnum | MethodologyScalarFieldEnum[]
  }

  /**
   * Methodology create
   */
  export type MethodologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * The data needed to create a Methodology.
     */
    data: XOR<MethodologyCreateInput, MethodologyUncheckedCreateInput>
  }

  /**
   * Methodology createMany
   */
  export type MethodologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Methodologies.
     */
    data: MethodologyCreateManyInput | MethodologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Methodology createManyAndReturn
   */
  export type MethodologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * The data used to create many Methodologies.
     */
    data: MethodologyCreateManyInput | MethodologyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Methodology update
   */
  export type MethodologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * The data needed to update a Methodology.
     */
    data: XOR<MethodologyUpdateInput, MethodologyUncheckedUpdateInput>
    /**
     * Choose, which Methodology to update.
     */
    where: MethodologyWhereUniqueInput
  }

  /**
   * Methodology updateMany
   */
  export type MethodologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Methodologies.
     */
    data: XOR<MethodologyUpdateManyMutationInput, MethodologyUncheckedUpdateManyInput>
    /**
     * Filter which Methodologies to update
     */
    where?: MethodologyWhereInput
    /**
     * Limit how many Methodologies to update.
     */
    limit?: number
  }

  /**
   * Methodology updateManyAndReturn
   */
  export type MethodologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * The data used to update Methodologies.
     */
    data: XOR<MethodologyUpdateManyMutationInput, MethodologyUncheckedUpdateManyInput>
    /**
     * Filter which Methodologies to update
     */
    where?: MethodologyWhereInput
    /**
     * Limit how many Methodologies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Methodology upsert
   */
  export type MethodologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * The filter to search for the Methodology to update in case it exists.
     */
    where: MethodologyWhereUniqueInput
    /**
     * In case the Methodology found by the `where` argument doesn't exist, create a new Methodology with this data.
     */
    create: XOR<MethodologyCreateInput, MethodologyUncheckedCreateInput>
    /**
     * In case the Methodology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MethodologyUpdateInput, MethodologyUncheckedUpdateInput>
  }

  /**
   * Methodology delete
   */
  export type MethodologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
    /**
     * Filter which Methodology to delete.
     */
    where: MethodologyWhereUniqueInput
  }

  /**
   * Methodology deleteMany
   */
  export type MethodologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Methodologies to delete
     */
    where?: MethodologyWhereInput
    /**
     * Limit how many Methodologies to delete.
     */
    limit?: number
  }

  /**
   * Methodology.tags
   */
  export type Methodology$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    where?: MethodologyTagWhereInput
    orderBy?: MethodologyTagOrderByWithRelationInput | MethodologyTagOrderByWithRelationInput[]
    cursor?: MethodologyTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MethodologyTagScalarFieldEnum | MethodologyTagScalarFieldEnum[]
  }

  /**
   * Methodology.plans
   */
  export type Methodology$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Methodology without action
   */
  export type MethodologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Methodology
     */
    select?: MethodologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Methodology
     */
    omit?: MethodologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    methodologies?: boolean | Tag$methodologiesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodologies?: boolean | Tag$methodologiesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      methodologies: Prisma.$MethodologyTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    methodologies<T extends Tag$methodologiesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$methodologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.methodologies
   */
  export type Tag$methodologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    where?: MethodologyTagWhereInput
    orderBy?: MethodologyTagOrderByWithRelationInput | MethodologyTagOrderByWithRelationInput[]
    cursor?: MethodologyTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MethodologyTagScalarFieldEnum | MethodologyTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model MethodologyTag
   */

  export type AggregateMethodologyTag = {
    _count: MethodologyTagCountAggregateOutputType | null
    _min: MethodologyTagMinAggregateOutputType | null
    _max: MethodologyTagMaxAggregateOutputType | null
  }

  export type MethodologyTagMinAggregateOutputType = {
    methodologyId: string | null
    tagId: string | null
  }

  export type MethodologyTagMaxAggregateOutputType = {
    methodologyId: string | null
    tagId: string | null
  }

  export type MethodologyTagCountAggregateOutputType = {
    methodologyId: number
    tagId: number
    _all: number
  }


  export type MethodologyTagMinAggregateInputType = {
    methodologyId?: true
    tagId?: true
  }

  export type MethodologyTagMaxAggregateInputType = {
    methodologyId?: true
    tagId?: true
  }

  export type MethodologyTagCountAggregateInputType = {
    methodologyId?: true
    tagId?: true
    _all?: true
  }

  export type MethodologyTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MethodologyTag to aggregate.
     */
    where?: MethodologyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MethodologyTags to fetch.
     */
    orderBy?: MethodologyTagOrderByWithRelationInput | MethodologyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MethodologyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MethodologyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MethodologyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MethodologyTags
    **/
    _count?: true | MethodologyTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MethodologyTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MethodologyTagMaxAggregateInputType
  }

  export type GetMethodologyTagAggregateType<T extends MethodologyTagAggregateArgs> = {
        [P in keyof T & keyof AggregateMethodologyTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMethodologyTag[P]>
      : GetScalarType<T[P], AggregateMethodologyTag[P]>
  }




  export type MethodologyTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MethodologyTagWhereInput
    orderBy?: MethodologyTagOrderByWithAggregationInput | MethodologyTagOrderByWithAggregationInput[]
    by: MethodologyTagScalarFieldEnum[] | MethodologyTagScalarFieldEnum
    having?: MethodologyTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MethodologyTagCountAggregateInputType | true
    _min?: MethodologyTagMinAggregateInputType
    _max?: MethodologyTagMaxAggregateInputType
  }

  export type MethodologyTagGroupByOutputType = {
    methodologyId: string
    tagId: string
    _count: MethodologyTagCountAggregateOutputType | null
    _min: MethodologyTagMinAggregateOutputType | null
    _max: MethodologyTagMaxAggregateOutputType | null
  }

  type GetMethodologyTagGroupByPayload<T extends MethodologyTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MethodologyTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MethodologyTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MethodologyTagGroupByOutputType[P]>
            : GetScalarType<T[P], MethodologyTagGroupByOutputType[P]>
        }
      >
    >


  export type MethodologyTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    methodologyId?: boolean
    tagId?: boolean
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["methodologyTag"]>

  export type MethodologyTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    methodologyId?: boolean
    tagId?: boolean
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["methodologyTag"]>

  export type MethodologyTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    methodologyId?: boolean
    tagId?: boolean
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["methodologyTag"]>

  export type MethodologyTagSelectScalar = {
    methodologyId?: boolean
    tagId?: boolean
  }

  export type MethodologyTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"methodologyId" | "tagId", ExtArgs["result"]["methodologyTag"]>
  export type MethodologyTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type MethodologyTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type MethodologyTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $MethodologyTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MethodologyTag"
    objects: {
      methodology: Prisma.$MethodologyPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      methodologyId: string
      tagId: string
    }, ExtArgs["result"]["methodologyTag"]>
    composites: {}
  }

  type MethodologyTagGetPayload<S extends boolean | null | undefined | MethodologyTagDefaultArgs> = $Result.GetResult<Prisma.$MethodologyTagPayload, S>

  type MethodologyTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MethodologyTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MethodologyTagCountAggregateInputType | true
    }

  export interface MethodologyTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MethodologyTag'], meta: { name: 'MethodologyTag' } }
    /**
     * Find zero or one MethodologyTag that matches the filter.
     * @param {MethodologyTagFindUniqueArgs} args - Arguments to find a MethodologyTag
     * @example
     * // Get one MethodologyTag
     * const methodologyTag = await prisma.methodologyTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MethodologyTagFindUniqueArgs>(args: SelectSubset<T, MethodologyTagFindUniqueArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MethodologyTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MethodologyTagFindUniqueOrThrowArgs} args - Arguments to find a MethodologyTag
     * @example
     * // Get one MethodologyTag
     * const methodologyTag = await prisma.methodologyTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MethodologyTagFindUniqueOrThrowArgs>(args: SelectSubset<T, MethodologyTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MethodologyTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyTagFindFirstArgs} args - Arguments to find a MethodologyTag
     * @example
     * // Get one MethodologyTag
     * const methodologyTag = await prisma.methodologyTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MethodologyTagFindFirstArgs>(args?: SelectSubset<T, MethodologyTagFindFirstArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MethodologyTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyTagFindFirstOrThrowArgs} args - Arguments to find a MethodologyTag
     * @example
     * // Get one MethodologyTag
     * const methodologyTag = await prisma.methodologyTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MethodologyTagFindFirstOrThrowArgs>(args?: SelectSubset<T, MethodologyTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MethodologyTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MethodologyTags
     * const methodologyTags = await prisma.methodologyTag.findMany()
     * 
     * // Get first 10 MethodologyTags
     * const methodologyTags = await prisma.methodologyTag.findMany({ take: 10 })
     * 
     * // Only select the `methodologyId`
     * const methodologyTagWithMethodologyIdOnly = await prisma.methodologyTag.findMany({ select: { methodologyId: true } })
     * 
     */
    findMany<T extends MethodologyTagFindManyArgs>(args?: SelectSubset<T, MethodologyTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MethodologyTag.
     * @param {MethodologyTagCreateArgs} args - Arguments to create a MethodologyTag.
     * @example
     * // Create one MethodologyTag
     * const MethodologyTag = await prisma.methodologyTag.create({
     *   data: {
     *     // ... data to create a MethodologyTag
     *   }
     * })
     * 
     */
    create<T extends MethodologyTagCreateArgs>(args: SelectSubset<T, MethodologyTagCreateArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MethodologyTags.
     * @param {MethodologyTagCreateManyArgs} args - Arguments to create many MethodologyTags.
     * @example
     * // Create many MethodologyTags
     * const methodologyTag = await prisma.methodologyTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MethodologyTagCreateManyArgs>(args?: SelectSubset<T, MethodologyTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MethodologyTags and returns the data saved in the database.
     * @param {MethodologyTagCreateManyAndReturnArgs} args - Arguments to create many MethodologyTags.
     * @example
     * // Create many MethodologyTags
     * const methodologyTag = await prisma.methodologyTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MethodologyTags and only return the `methodologyId`
     * const methodologyTagWithMethodologyIdOnly = await prisma.methodologyTag.createManyAndReturn({
     *   select: { methodologyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MethodologyTagCreateManyAndReturnArgs>(args?: SelectSubset<T, MethodologyTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MethodologyTag.
     * @param {MethodologyTagDeleteArgs} args - Arguments to delete one MethodologyTag.
     * @example
     * // Delete one MethodologyTag
     * const MethodologyTag = await prisma.methodologyTag.delete({
     *   where: {
     *     // ... filter to delete one MethodologyTag
     *   }
     * })
     * 
     */
    delete<T extends MethodologyTagDeleteArgs>(args: SelectSubset<T, MethodologyTagDeleteArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MethodologyTag.
     * @param {MethodologyTagUpdateArgs} args - Arguments to update one MethodologyTag.
     * @example
     * // Update one MethodologyTag
     * const methodologyTag = await prisma.methodologyTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MethodologyTagUpdateArgs>(args: SelectSubset<T, MethodologyTagUpdateArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MethodologyTags.
     * @param {MethodologyTagDeleteManyArgs} args - Arguments to filter MethodologyTags to delete.
     * @example
     * // Delete a few MethodologyTags
     * const { count } = await prisma.methodologyTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MethodologyTagDeleteManyArgs>(args?: SelectSubset<T, MethodologyTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MethodologyTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MethodologyTags
     * const methodologyTag = await prisma.methodologyTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MethodologyTagUpdateManyArgs>(args: SelectSubset<T, MethodologyTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MethodologyTags and returns the data updated in the database.
     * @param {MethodologyTagUpdateManyAndReturnArgs} args - Arguments to update many MethodologyTags.
     * @example
     * // Update many MethodologyTags
     * const methodologyTag = await prisma.methodologyTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MethodologyTags and only return the `methodologyId`
     * const methodologyTagWithMethodologyIdOnly = await prisma.methodologyTag.updateManyAndReturn({
     *   select: { methodologyId: true },
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
    updateManyAndReturn<T extends MethodologyTagUpdateManyAndReturnArgs>(args: SelectSubset<T, MethodologyTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MethodologyTag.
     * @param {MethodologyTagUpsertArgs} args - Arguments to update or create a MethodologyTag.
     * @example
     * // Update or create a MethodologyTag
     * const methodologyTag = await prisma.methodologyTag.upsert({
     *   create: {
     *     // ... data to create a MethodologyTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MethodologyTag we want to update
     *   }
     * })
     */
    upsert<T extends MethodologyTagUpsertArgs>(args: SelectSubset<T, MethodologyTagUpsertArgs<ExtArgs>>): Prisma__MethodologyTagClient<$Result.GetResult<Prisma.$MethodologyTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MethodologyTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyTagCountArgs} args - Arguments to filter MethodologyTags to count.
     * @example
     * // Count the number of MethodologyTags
     * const count = await prisma.methodologyTag.count({
     *   where: {
     *     // ... the filter for the MethodologyTags we want to count
     *   }
     * })
    **/
    count<T extends MethodologyTagCountArgs>(
      args?: Subset<T, MethodologyTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MethodologyTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MethodologyTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MethodologyTagAggregateArgs>(args: Subset<T, MethodologyTagAggregateArgs>): Prisma.PrismaPromise<GetMethodologyTagAggregateType<T>>

    /**
     * Group by MethodologyTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodologyTagGroupByArgs} args - Group by arguments.
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
      T extends MethodologyTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MethodologyTagGroupByArgs['orderBy'] }
        : { orderBy?: MethodologyTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MethodologyTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMethodologyTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MethodologyTag model
   */
  readonly fields: MethodologyTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MethodologyTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MethodologyTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    methodology<T extends MethodologyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MethodologyDefaultArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MethodologyTag model
   */
  interface MethodologyTagFieldRefs {
    readonly methodologyId: FieldRef<"MethodologyTag", 'String'>
    readonly tagId: FieldRef<"MethodologyTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MethodologyTag findUnique
   */
  export type MethodologyTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * Filter, which MethodologyTag to fetch.
     */
    where: MethodologyTagWhereUniqueInput
  }

  /**
   * MethodologyTag findUniqueOrThrow
   */
  export type MethodologyTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * Filter, which MethodologyTag to fetch.
     */
    where: MethodologyTagWhereUniqueInput
  }

  /**
   * MethodologyTag findFirst
   */
  export type MethodologyTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * Filter, which MethodologyTag to fetch.
     */
    where?: MethodologyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MethodologyTags to fetch.
     */
    orderBy?: MethodologyTagOrderByWithRelationInput | MethodologyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MethodologyTags.
     */
    cursor?: MethodologyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MethodologyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MethodologyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MethodologyTags.
     */
    distinct?: MethodologyTagScalarFieldEnum | MethodologyTagScalarFieldEnum[]
  }

  /**
   * MethodologyTag findFirstOrThrow
   */
  export type MethodologyTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * Filter, which MethodologyTag to fetch.
     */
    where?: MethodologyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MethodologyTags to fetch.
     */
    orderBy?: MethodologyTagOrderByWithRelationInput | MethodologyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MethodologyTags.
     */
    cursor?: MethodologyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MethodologyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MethodologyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MethodologyTags.
     */
    distinct?: MethodologyTagScalarFieldEnum | MethodologyTagScalarFieldEnum[]
  }

  /**
   * MethodologyTag findMany
   */
  export type MethodologyTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * Filter, which MethodologyTags to fetch.
     */
    where?: MethodologyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MethodologyTags to fetch.
     */
    orderBy?: MethodologyTagOrderByWithRelationInput | MethodologyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MethodologyTags.
     */
    cursor?: MethodologyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MethodologyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MethodologyTags.
     */
    skip?: number
    distinct?: MethodologyTagScalarFieldEnum | MethodologyTagScalarFieldEnum[]
  }

  /**
   * MethodologyTag create
   */
  export type MethodologyTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * The data needed to create a MethodologyTag.
     */
    data: XOR<MethodologyTagCreateInput, MethodologyTagUncheckedCreateInput>
  }

  /**
   * MethodologyTag createMany
   */
  export type MethodologyTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MethodologyTags.
     */
    data: MethodologyTagCreateManyInput | MethodologyTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MethodologyTag createManyAndReturn
   */
  export type MethodologyTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * The data used to create many MethodologyTags.
     */
    data: MethodologyTagCreateManyInput | MethodologyTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MethodologyTag update
   */
  export type MethodologyTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * The data needed to update a MethodologyTag.
     */
    data: XOR<MethodologyTagUpdateInput, MethodologyTagUncheckedUpdateInput>
    /**
     * Choose, which MethodologyTag to update.
     */
    where: MethodologyTagWhereUniqueInput
  }

  /**
   * MethodologyTag updateMany
   */
  export type MethodologyTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MethodologyTags.
     */
    data: XOR<MethodologyTagUpdateManyMutationInput, MethodologyTagUncheckedUpdateManyInput>
    /**
     * Filter which MethodologyTags to update
     */
    where?: MethodologyTagWhereInput
    /**
     * Limit how many MethodologyTags to update.
     */
    limit?: number
  }

  /**
   * MethodologyTag updateManyAndReturn
   */
  export type MethodologyTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * The data used to update MethodologyTags.
     */
    data: XOR<MethodologyTagUpdateManyMutationInput, MethodologyTagUncheckedUpdateManyInput>
    /**
     * Filter which MethodologyTags to update
     */
    where?: MethodologyTagWhereInput
    /**
     * Limit how many MethodologyTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MethodologyTag upsert
   */
  export type MethodologyTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * The filter to search for the MethodologyTag to update in case it exists.
     */
    where: MethodologyTagWhereUniqueInput
    /**
     * In case the MethodologyTag found by the `where` argument doesn't exist, create a new MethodologyTag with this data.
     */
    create: XOR<MethodologyTagCreateInput, MethodologyTagUncheckedCreateInput>
    /**
     * In case the MethodologyTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MethodologyTagUpdateInput, MethodologyTagUncheckedUpdateInput>
  }

  /**
   * MethodologyTag delete
   */
  export type MethodologyTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
    /**
     * Filter which MethodologyTag to delete.
     */
    where: MethodologyTagWhereUniqueInput
  }

  /**
   * MethodologyTag deleteMany
   */
  export type MethodologyTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MethodologyTags to delete
     */
    where?: MethodologyTagWhereInput
    /**
     * Limit how many MethodologyTags to delete.
     */
    limit?: number
  }

  /**
   * MethodologyTag without action
   */
  export type MethodologyTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MethodologyTag
     */
    select?: MethodologyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MethodologyTag
     */
    omit?: MethodologyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MethodologyTagInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    title: string | null
    methodologyId: string | null
    status: string | null
    reflection: string | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    title: string | null
    methodologyId: string | null
    status: string | null
    reflection: string | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    title: number
    content: number
    methodologyId: number
    status: number
    logs: number
    reflection: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type PlanMinAggregateInputType = {
    id?: true
    title?: true
    methodologyId?: true
    status?: true
    reflection?: true
    completedAt?: true
    createdAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    title?: true
    methodologyId?: true
    status?: true
    reflection?: true
    completedAt?: true
    createdAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    methodologyId?: true
    status?: true
    logs?: true
    reflection?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    title: string
    content: JsonValue
    methodologyId: string
    status: string
    logs: JsonValue | null
    reflection: string | null
    completedAt: Date | null
    createdAt: Date
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    methodologyId?: boolean
    status?: boolean
    logs?: boolean
    reflection?: boolean
    completedAt?: boolean
    createdAt?: boolean
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    methodologyId?: boolean
    status?: boolean
    logs?: boolean
    reflection?: boolean
    completedAt?: boolean
    createdAt?: boolean
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    methodologyId?: boolean
    status?: boolean
    logs?: boolean
    reflection?: boolean
    completedAt?: boolean
    createdAt?: boolean
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    methodologyId?: boolean
    status?: boolean
    logs?: boolean
    reflection?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "methodologyId" | "status" | "logs" | "reflection" | "completedAt" | "createdAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
  }
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methodology?: boolean | MethodologyDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      methodology: Prisma.$MethodologyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: Prisma.JsonValue
      methodologyId: string
      status: string
      logs: Prisma.JsonValue | null
      reflection: string | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    methodology<T extends MethodologyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MethodologyDefaultArgs<ExtArgs>>): Prisma__MethodologyClient<$Result.GetResult<Prisma.$MethodologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly title: FieldRef<"Plan", 'String'>
    readonly content: FieldRef<"Plan", 'Json'>
    readonly methodologyId: FieldRef<"Plan", 'String'>
    readonly status: FieldRef<"Plan", 'String'>
    readonly logs: FieldRef<"Plan", 'Json'>
    readonly reflection: FieldRef<"Plan", 'String'>
    readonly completedAt: FieldRef<"Plan", 'DateTime'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    coverUrl: 'coverUrl',
    summary: 'summary',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const MethodologyScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    name: 'name',
    description: 'description',
    steps: 'steps',
    applicableScenarios: 'applicableScenarios',
    createdAt: 'createdAt'
  };

  export type MethodologyScalarFieldEnum = (typeof MethodologyScalarFieldEnum)[keyof typeof MethodologyScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const MethodologyTagScalarFieldEnum: {
    methodologyId: 'methodologyId',
    tagId: 'tagId'
  };

  export type MethodologyTagScalarFieldEnum = (typeof MethodologyTagScalarFieldEnum)[keyof typeof MethodologyTagScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    methodologyId: 'methodologyId',
    status: 'status',
    logs: 'logs',
    reflection: 'reflection',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    coverUrl?: StringNullableFilter<"Book"> | string | null
    summary?: StringNullableFilter<"Book"> | string | null
    category?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    methodologies?: MethodologyListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    coverUrl?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    methodologies?: MethodologyOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    coverUrl?: StringNullableFilter<"Book"> | string | null
    summary?: StringNullableFilter<"Book"> | string | null
    category?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    methodologies?: MethodologyListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    coverUrl?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    coverUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Book"> | string | null
    category?: StringNullableWithAggregatesFilter<"Book"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type MethodologyWhereInput = {
    AND?: MethodologyWhereInput | MethodologyWhereInput[]
    OR?: MethodologyWhereInput[]
    NOT?: MethodologyWhereInput | MethodologyWhereInput[]
    id?: StringFilter<"Methodology"> | string
    bookId?: StringFilter<"Methodology"> | string
    name?: StringFilter<"Methodology"> | string
    description?: StringFilter<"Methodology"> | string
    steps?: JsonFilter<"Methodology">
    applicableScenarios?: StringNullableFilter<"Methodology"> | string | null
    createdAt?: DateTimeFilter<"Methodology"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    tags?: MethodologyTagListRelationFilter
    plans?: PlanListRelationFilter
  }

  export type MethodologyOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    steps?: SortOrder
    applicableScenarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    book?: BookOrderByWithRelationInput
    tags?: MethodologyTagOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
  }

  export type MethodologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MethodologyWhereInput | MethodologyWhereInput[]
    OR?: MethodologyWhereInput[]
    NOT?: MethodologyWhereInput | MethodologyWhereInput[]
    bookId?: StringFilter<"Methodology"> | string
    name?: StringFilter<"Methodology"> | string
    description?: StringFilter<"Methodology"> | string
    steps?: JsonFilter<"Methodology">
    applicableScenarios?: StringNullableFilter<"Methodology"> | string | null
    createdAt?: DateTimeFilter<"Methodology"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    tags?: MethodologyTagListRelationFilter
    plans?: PlanListRelationFilter
  }, "id">

  export type MethodologyOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    steps?: SortOrder
    applicableScenarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MethodologyCountOrderByAggregateInput
    _max?: MethodologyMaxOrderByAggregateInput
    _min?: MethodologyMinOrderByAggregateInput
  }

  export type MethodologyScalarWhereWithAggregatesInput = {
    AND?: MethodologyScalarWhereWithAggregatesInput | MethodologyScalarWhereWithAggregatesInput[]
    OR?: MethodologyScalarWhereWithAggregatesInput[]
    NOT?: MethodologyScalarWhereWithAggregatesInput | MethodologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Methodology"> | string
    bookId?: StringWithAggregatesFilter<"Methodology"> | string
    name?: StringWithAggregatesFilter<"Methodology"> | string
    description?: StringWithAggregatesFilter<"Methodology"> | string
    steps?: JsonWithAggregatesFilter<"Methodology">
    applicableScenarios?: StringNullableWithAggregatesFilter<"Methodology"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Methodology"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    methodologies?: MethodologyTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    methodologies?: MethodologyTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    methodologies?: MethodologyTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type MethodologyTagWhereInput = {
    AND?: MethodologyTagWhereInput | MethodologyTagWhereInput[]
    OR?: MethodologyTagWhereInput[]
    NOT?: MethodologyTagWhereInput | MethodologyTagWhereInput[]
    methodologyId?: StringFilter<"MethodologyTag"> | string
    tagId?: StringFilter<"MethodologyTag"> | string
    methodology?: XOR<MethodologyScalarRelationFilter, MethodologyWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type MethodologyTagOrderByWithRelationInput = {
    methodologyId?: SortOrder
    tagId?: SortOrder
    methodology?: MethodologyOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type MethodologyTagWhereUniqueInput = Prisma.AtLeast<{
    methodologyId_tagId?: MethodologyTagMethodologyIdTagIdCompoundUniqueInput
    AND?: MethodologyTagWhereInput | MethodologyTagWhereInput[]
    OR?: MethodologyTagWhereInput[]
    NOT?: MethodologyTagWhereInput | MethodologyTagWhereInput[]
    methodologyId?: StringFilter<"MethodologyTag"> | string
    tagId?: StringFilter<"MethodologyTag"> | string
    methodology?: XOR<MethodologyScalarRelationFilter, MethodologyWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "methodologyId_tagId">

  export type MethodologyTagOrderByWithAggregationInput = {
    methodologyId?: SortOrder
    tagId?: SortOrder
    _count?: MethodologyTagCountOrderByAggregateInput
    _max?: MethodologyTagMaxOrderByAggregateInput
    _min?: MethodologyTagMinOrderByAggregateInput
  }

  export type MethodologyTagScalarWhereWithAggregatesInput = {
    AND?: MethodologyTagScalarWhereWithAggregatesInput | MethodologyTagScalarWhereWithAggregatesInput[]
    OR?: MethodologyTagScalarWhereWithAggregatesInput[]
    NOT?: MethodologyTagScalarWhereWithAggregatesInput | MethodologyTagScalarWhereWithAggregatesInput[]
    methodologyId?: StringWithAggregatesFilter<"MethodologyTag"> | string
    tagId?: StringWithAggregatesFilter<"MethodologyTag"> | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    title?: StringFilter<"Plan"> | string
    content?: JsonFilter<"Plan">
    methodologyId?: StringFilter<"Plan"> | string
    status?: StringFilter<"Plan"> | string
    logs?: JsonNullableFilter<"Plan">
    reflection?: StringNullableFilter<"Plan"> | string | null
    completedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    methodology?: XOR<MethodologyScalarRelationFilter, MethodologyWhereInput>
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    methodologyId?: SortOrder
    status?: SortOrder
    logs?: SortOrderInput | SortOrder
    reflection?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    methodology?: MethodologyOrderByWithRelationInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    title?: StringFilter<"Plan"> | string
    content?: JsonFilter<"Plan">
    methodologyId?: StringFilter<"Plan"> | string
    status?: StringFilter<"Plan"> | string
    logs?: JsonNullableFilter<"Plan">
    reflection?: StringNullableFilter<"Plan"> | string | null
    completedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    methodology?: XOR<MethodologyScalarRelationFilter, MethodologyWhereInput>
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    methodologyId?: SortOrder
    status?: SortOrder
    logs?: SortOrderInput | SortOrder
    reflection?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    title?: StringWithAggregatesFilter<"Plan"> | string
    content?: JsonWithAggregatesFilter<"Plan">
    methodologyId?: StringWithAggregatesFilter<"Plan"> | string
    status?: StringWithAggregatesFilter<"Plan"> | string
    logs?: JsonNullableWithAggregatesFilter<"Plan">
    reflection?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    author: string
    coverUrl?: string | null
    summary?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    methodologies?: MethodologyCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    title: string
    author: string
    coverUrl?: string | null
    summary?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    methodologies?: MethodologyUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methodologies?: MethodologyUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methodologies?: MethodologyUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    title: string
    author: string
    coverUrl?: string | null
    summary?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MethodologyCreateInput = {
    id?: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutMethodologiesInput
    tags?: MethodologyTagCreateNestedManyWithoutMethodologyInput
    plans?: PlanCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyUncheckedCreateInput = {
    id?: string
    bookId: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    tags?: MethodologyTagUncheckedCreateNestedManyWithoutMethodologyInput
    plans?: PlanUncheckedCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutMethodologiesNestedInput
    tags?: MethodologyTagUpdateManyWithoutMethodologyNestedInput
    plans?: PlanUpdateManyWithoutMethodologyNestedInput
  }

  export type MethodologyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MethodologyTagUncheckedUpdateManyWithoutMethodologyNestedInput
    plans?: PlanUncheckedUpdateManyWithoutMethodologyNestedInput
  }

  export type MethodologyCreateManyInput = {
    id?: string
    bookId: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
  }

  export type MethodologyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MethodologyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    methodologies?: MethodologyTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    methodologies?: MethodologyTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    methodologies?: MethodologyTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    methodologies?: MethodologyTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MethodologyTagCreateInput = {
    methodology: MethodologyCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutMethodologiesInput
  }

  export type MethodologyTagUncheckedCreateInput = {
    methodologyId: string
    tagId: string
  }

  export type MethodologyTagUpdateInput = {
    methodology?: MethodologyUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutMethodologiesNestedInput
  }

  export type MethodologyTagUncheckedUpdateInput = {
    methodologyId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MethodologyTagCreateManyInput = {
    methodologyId: string
    tagId: string
  }

  export type MethodologyTagUpdateManyMutationInput = {

  }

  export type MethodologyTagUncheckedUpdateManyInput = {
    methodologyId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    status?: string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    methodology: MethodologyCreateNestedOneWithoutPlansInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    methodologyId: string
    status?: string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methodology?: MethodologyUpdateOneRequiredWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    methodologyId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateManyInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    methodologyId: string
    status?: string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    methodologyId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type MethodologyListRelationFilter = {
    every?: MethodologyWhereInput
    some?: MethodologyWhereInput
    none?: MethodologyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MethodologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    coverUrl?: SortOrder
    summary?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    coverUrl?: SortOrder
    summary?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    coverUrl?: SortOrder
    summary?: SortOrder
    category?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type MethodologyTagListRelationFilter = {
    every?: MethodologyTagWhereInput
    some?: MethodologyTagWhereInput
    none?: MethodologyTagWhereInput
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type MethodologyTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MethodologyCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    steps?: SortOrder
    applicableScenarios?: SortOrder
    createdAt?: SortOrder
  }

  export type MethodologyMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    applicableScenarios?: SortOrder
    createdAt?: SortOrder
  }

  export type MethodologyMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    applicableScenarios?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MethodologyScalarRelationFilter = {
    is?: MethodologyWhereInput
    isNot?: MethodologyWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type MethodologyTagMethodologyIdTagIdCompoundUniqueInput = {
    methodologyId: string
    tagId: string
  }

  export type MethodologyTagCountOrderByAggregateInput = {
    methodologyId?: SortOrder
    tagId?: SortOrder
  }

  export type MethodologyTagMaxOrderByAggregateInput = {
    methodologyId?: SortOrder
    tagId?: SortOrder
  }

  export type MethodologyTagMinOrderByAggregateInput = {
    methodologyId?: SortOrder
    tagId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    methodologyId?: SortOrder
    status?: SortOrder
    logs?: SortOrder
    reflection?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    methodologyId?: SortOrder
    status?: SortOrder
    reflection?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    methodologyId?: SortOrder
    status?: SortOrder
    reflection?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MethodologyCreateNestedManyWithoutBookInput = {
    create?: XOR<MethodologyCreateWithoutBookInput, MethodologyUncheckedCreateWithoutBookInput> | MethodologyCreateWithoutBookInput[] | MethodologyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MethodologyCreateOrConnectWithoutBookInput | MethodologyCreateOrConnectWithoutBookInput[]
    createMany?: MethodologyCreateManyBookInputEnvelope
    connect?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
  }

  export type MethodologyUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<MethodologyCreateWithoutBookInput, MethodologyUncheckedCreateWithoutBookInput> | MethodologyCreateWithoutBookInput[] | MethodologyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MethodologyCreateOrConnectWithoutBookInput | MethodologyCreateOrConnectWithoutBookInput[]
    createMany?: MethodologyCreateManyBookInputEnvelope
    connect?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MethodologyUpdateManyWithoutBookNestedInput = {
    create?: XOR<MethodologyCreateWithoutBookInput, MethodologyUncheckedCreateWithoutBookInput> | MethodologyCreateWithoutBookInput[] | MethodologyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MethodologyCreateOrConnectWithoutBookInput | MethodologyCreateOrConnectWithoutBookInput[]
    upsert?: MethodologyUpsertWithWhereUniqueWithoutBookInput | MethodologyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: MethodologyCreateManyBookInputEnvelope
    set?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    disconnect?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    delete?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    connect?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    update?: MethodologyUpdateWithWhereUniqueWithoutBookInput | MethodologyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: MethodologyUpdateManyWithWhereWithoutBookInput | MethodologyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: MethodologyScalarWhereInput | MethodologyScalarWhereInput[]
  }

  export type MethodologyUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<MethodologyCreateWithoutBookInput, MethodologyUncheckedCreateWithoutBookInput> | MethodologyCreateWithoutBookInput[] | MethodologyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MethodologyCreateOrConnectWithoutBookInput | MethodologyCreateOrConnectWithoutBookInput[]
    upsert?: MethodologyUpsertWithWhereUniqueWithoutBookInput | MethodologyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: MethodologyCreateManyBookInputEnvelope
    set?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    disconnect?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    delete?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    connect?: MethodologyWhereUniqueInput | MethodologyWhereUniqueInput[]
    update?: MethodologyUpdateWithWhereUniqueWithoutBookInput | MethodologyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: MethodologyUpdateManyWithWhereWithoutBookInput | MethodologyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: MethodologyScalarWhereInput | MethodologyScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutMethodologiesInput = {
    create?: XOR<BookCreateWithoutMethodologiesInput, BookUncheckedCreateWithoutMethodologiesInput>
    connectOrCreate?: BookCreateOrConnectWithoutMethodologiesInput
    connect?: BookWhereUniqueInput
  }

  export type MethodologyTagCreateNestedManyWithoutMethodologyInput = {
    create?: XOR<MethodologyTagCreateWithoutMethodologyInput, MethodologyTagUncheckedCreateWithoutMethodologyInput> | MethodologyTagCreateWithoutMethodologyInput[] | MethodologyTagUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutMethodologyInput | MethodologyTagCreateOrConnectWithoutMethodologyInput[]
    createMany?: MethodologyTagCreateManyMethodologyInputEnvelope
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutMethodologyInput = {
    create?: XOR<PlanCreateWithoutMethodologyInput, PlanUncheckedCreateWithoutMethodologyInput> | PlanCreateWithoutMethodologyInput[] | PlanUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMethodologyInput | PlanCreateOrConnectWithoutMethodologyInput[]
    createMany?: PlanCreateManyMethodologyInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type MethodologyTagUncheckedCreateNestedManyWithoutMethodologyInput = {
    create?: XOR<MethodologyTagCreateWithoutMethodologyInput, MethodologyTagUncheckedCreateWithoutMethodologyInput> | MethodologyTagCreateWithoutMethodologyInput[] | MethodologyTagUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutMethodologyInput | MethodologyTagCreateOrConnectWithoutMethodologyInput[]
    createMany?: MethodologyTagCreateManyMethodologyInputEnvelope
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutMethodologyInput = {
    create?: XOR<PlanCreateWithoutMethodologyInput, PlanUncheckedCreateWithoutMethodologyInput> | PlanCreateWithoutMethodologyInput[] | PlanUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMethodologyInput | PlanCreateOrConnectWithoutMethodologyInput[]
    createMany?: PlanCreateManyMethodologyInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type BookUpdateOneRequiredWithoutMethodologiesNestedInput = {
    create?: XOR<BookCreateWithoutMethodologiesInput, BookUncheckedCreateWithoutMethodologiesInput>
    connectOrCreate?: BookCreateOrConnectWithoutMethodologiesInput
    upsert?: BookUpsertWithoutMethodologiesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutMethodologiesInput, BookUpdateWithoutMethodologiesInput>, BookUncheckedUpdateWithoutMethodologiesInput>
  }

  export type MethodologyTagUpdateManyWithoutMethodologyNestedInput = {
    create?: XOR<MethodologyTagCreateWithoutMethodologyInput, MethodologyTagUncheckedCreateWithoutMethodologyInput> | MethodologyTagCreateWithoutMethodologyInput[] | MethodologyTagUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutMethodologyInput | MethodologyTagCreateOrConnectWithoutMethodologyInput[]
    upsert?: MethodologyTagUpsertWithWhereUniqueWithoutMethodologyInput | MethodologyTagUpsertWithWhereUniqueWithoutMethodologyInput[]
    createMany?: MethodologyTagCreateManyMethodologyInputEnvelope
    set?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    disconnect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    delete?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    update?: MethodologyTagUpdateWithWhereUniqueWithoutMethodologyInput | MethodologyTagUpdateWithWhereUniqueWithoutMethodologyInput[]
    updateMany?: MethodologyTagUpdateManyWithWhereWithoutMethodologyInput | MethodologyTagUpdateManyWithWhereWithoutMethodologyInput[]
    deleteMany?: MethodologyTagScalarWhereInput | MethodologyTagScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutMethodologyNestedInput = {
    create?: XOR<PlanCreateWithoutMethodologyInput, PlanUncheckedCreateWithoutMethodologyInput> | PlanCreateWithoutMethodologyInput[] | PlanUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMethodologyInput | PlanCreateOrConnectWithoutMethodologyInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutMethodologyInput | PlanUpsertWithWhereUniqueWithoutMethodologyInput[]
    createMany?: PlanCreateManyMethodologyInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutMethodologyInput | PlanUpdateWithWhereUniqueWithoutMethodologyInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutMethodologyInput | PlanUpdateManyWithWhereWithoutMethodologyInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type MethodologyTagUncheckedUpdateManyWithoutMethodologyNestedInput = {
    create?: XOR<MethodologyTagCreateWithoutMethodologyInput, MethodologyTagUncheckedCreateWithoutMethodologyInput> | MethodologyTagCreateWithoutMethodologyInput[] | MethodologyTagUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutMethodologyInput | MethodologyTagCreateOrConnectWithoutMethodologyInput[]
    upsert?: MethodologyTagUpsertWithWhereUniqueWithoutMethodologyInput | MethodologyTagUpsertWithWhereUniqueWithoutMethodologyInput[]
    createMany?: MethodologyTagCreateManyMethodologyInputEnvelope
    set?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    disconnect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    delete?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    update?: MethodologyTagUpdateWithWhereUniqueWithoutMethodologyInput | MethodologyTagUpdateWithWhereUniqueWithoutMethodologyInput[]
    updateMany?: MethodologyTagUpdateManyWithWhereWithoutMethodologyInput | MethodologyTagUpdateManyWithWhereWithoutMethodologyInput[]
    deleteMany?: MethodologyTagScalarWhereInput | MethodologyTagScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutMethodologyNestedInput = {
    create?: XOR<PlanCreateWithoutMethodologyInput, PlanUncheckedCreateWithoutMethodologyInput> | PlanCreateWithoutMethodologyInput[] | PlanUncheckedCreateWithoutMethodologyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutMethodologyInput | PlanCreateOrConnectWithoutMethodologyInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutMethodologyInput | PlanUpsertWithWhereUniqueWithoutMethodologyInput[]
    createMany?: PlanCreateManyMethodologyInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutMethodologyInput | PlanUpdateWithWhereUniqueWithoutMethodologyInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutMethodologyInput | PlanUpdateManyWithWhereWithoutMethodologyInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type MethodologyTagCreateNestedManyWithoutTagInput = {
    create?: XOR<MethodologyTagCreateWithoutTagInput, MethodologyTagUncheckedCreateWithoutTagInput> | MethodologyTagCreateWithoutTagInput[] | MethodologyTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutTagInput | MethodologyTagCreateOrConnectWithoutTagInput[]
    createMany?: MethodologyTagCreateManyTagInputEnvelope
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
  }

  export type MethodologyTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<MethodologyTagCreateWithoutTagInput, MethodologyTagUncheckedCreateWithoutTagInput> | MethodologyTagCreateWithoutTagInput[] | MethodologyTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutTagInput | MethodologyTagCreateOrConnectWithoutTagInput[]
    createMany?: MethodologyTagCreateManyTagInputEnvelope
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
  }

  export type MethodologyTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<MethodologyTagCreateWithoutTagInput, MethodologyTagUncheckedCreateWithoutTagInput> | MethodologyTagCreateWithoutTagInput[] | MethodologyTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutTagInput | MethodologyTagCreateOrConnectWithoutTagInput[]
    upsert?: MethodologyTagUpsertWithWhereUniqueWithoutTagInput | MethodologyTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MethodologyTagCreateManyTagInputEnvelope
    set?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    disconnect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    delete?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    update?: MethodologyTagUpdateWithWhereUniqueWithoutTagInput | MethodologyTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MethodologyTagUpdateManyWithWhereWithoutTagInput | MethodologyTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MethodologyTagScalarWhereInput | MethodologyTagScalarWhereInput[]
  }

  export type MethodologyTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<MethodologyTagCreateWithoutTagInput, MethodologyTagUncheckedCreateWithoutTagInput> | MethodologyTagCreateWithoutTagInput[] | MethodologyTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MethodologyTagCreateOrConnectWithoutTagInput | MethodologyTagCreateOrConnectWithoutTagInput[]
    upsert?: MethodologyTagUpsertWithWhereUniqueWithoutTagInput | MethodologyTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MethodologyTagCreateManyTagInputEnvelope
    set?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    disconnect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    delete?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    connect?: MethodologyTagWhereUniqueInput | MethodologyTagWhereUniqueInput[]
    update?: MethodologyTagUpdateWithWhereUniqueWithoutTagInput | MethodologyTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MethodologyTagUpdateManyWithWhereWithoutTagInput | MethodologyTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MethodologyTagScalarWhereInput | MethodologyTagScalarWhereInput[]
  }

  export type MethodologyCreateNestedOneWithoutTagsInput = {
    create?: XOR<MethodologyCreateWithoutTagsInput, MethodologyUncheckedCreateWithoutTagsInput>
    connectOrCreate?: MethodologyCreateOrConnectWithoutTagsInput
    connect?: MethodologyWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutMethodologiesInput = {
    create?: XOR<TagCreateWithoutMethodologiesInput, TagUncheckedCreateWithoutMethodologiesInput>
    connectOrCreate?: TagCreateOrConnectWithoutMethodologiesInput
    connect?: TagWhereUniqueInput
  }

  export type MethodologyUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<MethodologyCreateWithoutTagsInput, MethodologyUncheckedCreateWithoutTagsInput>
    connectOrCreate?: MethodologyCreateOrConnectWithoutTagsInput
    upsert?: MethodologyUpsertWithoutTagsInput
    connect?: MethodologyWhereUniqueInput
    update?: XOR<XOR<MethodologyUpdateToOneWithWhereWithoutTagsInput, MethodologyUpdateWithoutTagsInput>, MethodologyUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutMethodologiesNestedInput = {
    create?: XOR<TagCreateWithoutMethodologiesInput, TagUncheckedCreateWithoutMethodologiesInput>
    connectOrCreate?: TagCreateOrConnectWithoutMethodologiesInput
    upsert?: TagUpsertWithoutMethodologiesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutMethodologiesInput, TagUpdateWithoutMethodologiesInput>, TagUncheckedUpdateWithoutMethodologiesInput>
  }

  export type MethodologyCreateNestedOneWithoutPlansInput = {
    create?: XOR<MethodologyCreateWithoutPlansInput, MethodologyUncheckedCreateWithoutPlansInput>
    connectOrCreate?: MethodologyCreateOrConnectWithoutPlansInput
    connect?: MethodologyWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MethodologyUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<MethodologyCreateWithoutPlansInput, MethodologyUncheckedCreateWithoutPlansInput>
    connectOrCreate?: MethodologyCreateOrConnectWithoutPlansInput
    upsert?: MethodologyUpsertWithoutPlansInput
    connect?: MethodologyWhereUniqueInput
    update?: XOR<XOR<MethodologyUpdateToOneWithWhereWithoutPlansInput, MethodologyUpdateWithoutPlansInput>, MethodologyUncheckedUpdateWithoutPlansInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MethodologyCreateWithoutBookInput = {
    id?: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    tags?: MethodologyTagCreateNestedManyWithoutMethodologyInput
    plans?: PlanCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyUncheckedCreateWithoutBookInput = {
    id?: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    tags?: MethodologyTagUncheckedCreateNestedManyWithoutMethodologyInput
    plans?: PlanUncheckedCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyCreateOrConnectWithoutBookInput = {
    where: MethodologyWhereUniqueInput
    create: XOR<MethodologyCreateWithoutBookInput, MethodologyUncheckedCreateWithoutBookInput>
  }

  export type MethodologyCreateManyBookInputEnvelope = {
    data: MethodologyCreateManyBookInput | MethodologyCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type MethodologyUpsertWithWhereUniqueWithoutBookInput = {
    where: MethodologyWhereUniqueInput
    update: XOR<MethodologyUpdateWithoutBookInput, MethodologyUncheckedUpdateWithoutBookInput>
    create: XOR<MethodologyCreateWithoutBookInput, MethodologyUncheckedCreateWithoutBookInput>
  }

  export type MethodologyUpdateWithWhereUniqueWithoutBookInput = {
    where: MethodologyWhereUniqueInput
    data: XOR<MethodologyUpdateWithoutBookInput, MethodologyUncheckedUpdateWithoutBookInput>
  }

  export type MethodologyUpdateManyWithWhereWithoutBookInput = {
    where: MethodologyScalarWhereInput
    data: XOR<MethodologyUpdateManyMutationInput, MethodologyUncheckedUpdateManyWithoutBookInput>
  }

  export type MethodologyScalarWhereInput = {
    AND?: MethodologyScalarWhereInput | MethodologyScalarWhereInput[]
    OR?: MethodologyScalarWhereInput[]
    NOT?: MethodologyScalarWhereInput | MethodologyScalarWhereInput[]
    id?: StringFilter<"Methodology"> | string
    bookId?: StringFilter<"Methodology"> | string
    name?: StringFilter<"Methodology"> | string
    description?: StringFilter<"Methodology"> | string
    steps?: JsonFilter<"Methodology">
    applicableScenarios?: StringNullableFilter<"Methodology"> | string | null
    createdAt?: DateTimeFilter<"Methodology"> | Date | string
  }

  export type BookCreateWithoutMethodologiesInput = {
    id?: string
    title: string
    author: string
    coverUrl?: string | null
    summary?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUncheckedCreateWithoutMethodologiesInput = {
    id?: string
    title: string
    author: string
    coverUrl?: string | null
    summary?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCreateOrConnectWithoutMethodologiesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutMethodologiesInput, BookUncheckedCreateWithoutMethodologiesInput>
  }

  export type MethodologyTagCreateWithoutMethodologyInput = {
    tag: TagCreateNestedOneWithoutMethodologiesInput
  }

  export type MethodologyTagUncheckedCreateWithoutMethodologyInput = {
    tagId: string
  }

  export type MethodologyTagCreateOrConnectWithoutMethodologyInput = {
    where: MethodologyTagWhereUniqueInput
    create: XOR<MethodologyTagCreateWithoutMethodologyInput, MethodologyTagUncheckedCreateWithoutMethodologyInput>
  }

  export type MethodologyTagCreateManyMethodologyInputEnvelope = {
    data: MethodologyTagCreateManyMethodologyInput | MethodologyTagCreateManyMethodologyInput[]
    skipDuplicates?: boolean
  }

  export type PlanCreateWithoutMethodologyInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    status?: string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PlanUncheckedCreateWithoutMethodologyInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    status?: string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PlanCreateOrConnectWithoutMethodologyInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutMethodologyInput, PlanUncheckedCreateWithoutMethodologyInput>
  }

  export type PlanCreateManyMethodologyInputEnvelope = {
    data: PlanCreateManyMethodologyInput | PlanCreateManyMethodologyInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithoutMethodologiesInput = {
    update: XOR<BookUpdateWithoutMethodologiesInput, BookUncheckedUpdateWithoutMethodologiesInput>
    create: XOR<BookCreateWithoutMethodologiesInput, BookUncheckedCreateWithoutMethodologiesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutMethodologiesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutMethodologiesInput, BookUncheckedUpdateWithoutMethodologiesInput>
  }

  export type BookUpdateWithoutMethodologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateWithoutMethodologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MethodologyTagUpsertWithWhereUniqueWithoutMethodologyInput = {
    where: MethodologyTagWhereUniqueInput
    update: XOR<MethodologyTagUpdateWithoutMethodologyInput, MethodologyTagUncheckedUpdateWithoutMethodologyInput>
    create: XOR<MethodologyTagCreateWithoutMethodologyInput, MethodologyTagUncheckedCreateWithoutMethodologyInput>
  }

  export type MethodologyTagUpdateWithWhereUniqueWithoutMethodologyInput = {
    where: MethodologyTagWhereUniqueInput
    data: XOR<MethodologyTagUpdateWithoutMethodologyInput, MethodologyTagUncheckedUpdateWithoutMethodologyInput>
  }

  export type MethodologyTagUpdateManyWithWhereWithoutMethodologyInput = {
    where: MethodologyTagScalarWhereInput
    data: XOR<MethodologyTagUpdateManyMutationInput, MethodologyTagUncheckedUpdateManyWithoutMethodologyInput>
  }

  export type MethodologyTagScalarWhereInput = {
    AND?: MethodologyTagScalarWhereInput | MethodologyTagScalarWhereInput[]
    OR?: MethodologyTagScalarWhereInput[]
    NOT?: MethodologyTagScalarWhereInput | MethodologyTagScalarWhereInput[]
    methodologyId?: StringFilter<"MethodologyTag"> | string
    tagId?: StringFilter<"MethodologyTag"> | string
  }

  export type PlanUpsertWithWhereUniqueWithoutMethodologyInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutMethodologyInput, PlanUncheckedUpdateWithoutMethodologyInput>
    create: XOR<PlanCreateWithoutMethodologyInput, PlanUncheckedCreateWithoutMethodologyInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutMethodologyInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutMethodologyInput, PlanUncheckedUpdateWithoutMethodologyInput>
  }

  export type PlanUpdateManyWithWhereWithoutMethodologyInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutMethodologyInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: StringFilter<"Plan"> | string
    title?: StringFilter<"Plan"> | string
    content?: JsonFilter<"Plan">
    methodologyId?: StringFilter<"Plan"> | string
    status?: StringFilter<"Plan"> | string
    logs?: JsonNullableFilter<"Plan">
    reflection?: StringNullableFilter<"Plan"> | string | null
    completedAt?: DateTimeNullableFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
  }

  export type MethodologyTagCreateWithoutTagInput = {
    methodology: MethodologyCreateNestedOneWithoutTagsInput
  }

  export type MethodologyTagUncheckedCreateWithoutTagInput = {
    methodologyId: string
  }

  export type MethodologyTagCreateOrConnectWithoutTagInput = {
    where: MethodologyTagWhereUniqueInput
    create: XOR<MethodologyTagCreateWithoutTagInput, MethodologyTagUncheckedCreateWithoutTagInput>
  }

  export type MethodologyTagCreateManyTagInputEnvelope = {
    data: MethodologyTagCreateManyTagInput | MethodologyTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type MethodologyTagUpsertWithWhereUniqueWithoutTagInput = {
    where: MethodologyTagWhereUniqueInput
    update: XOR<MethodologyTagUpdateWithoutTagInput, MethodologyTagUncheckedUpdateWithoutTagInput>
    create: XOR<MethodologyTagCreateWithoutTagInput, MethodologyTagUncheckedCreateWithoutTagInput>
  }

  export type MethodologyTagUpdateWithWhereUniqueWithoutTagInput = {
    where: MethodologyTagWhereUniqueInput
    data: XOR<MethodologyTagUpdateWithoutTagInput, MethodologyTagUncheckedUpdateWithoutTagInput>
  }

  export type MethodologyTagUpdateManyWithWhereWithoutTagInput = {
    where: MethodologyTagScalarWhereInput
    data: XOR<MethodologyTagUpdateManyMutationInput, MethodologyTagUncheckedUpdateManyWithoutTagInput>
  }

  export type MethodologyCreateWithoutTagsInput = {
    id?: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutMethodologiesInput
    plans?: PlanCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyUncheckedCreateWithoutTagsInput = {
    id?: string
    bookId: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyCreateOrConnectWithoutTagsInput = {
    where: MethodologyWhereUniqueInput
    create: XOR<MethodologyCreateWithoutTagsInput, MethodologyUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutMethodologiesInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutMethodologiesInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutMethodologiesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutMethodologiesInput, TagUncheckedCreateWithoutMethodologiesInput>
  }

  export type MethodologyUpsertWithoutTagsInput = {
    update: XOR<MethodologyUpdateWithoutTagsInput, MethodologyUncheckedUpdateWithoutTagsInput>
    create: XOR<MethodologyCreateWithoutTagsInput, MethodologyUncheckedCreateWithoutTagsInput>
    where?: MethodologyWhereInput
  }

  export type MethodologyUpdateToOneWithWhereWithoutTagsInput = {
    where?: MethodologyWhereInput
    data: XOR<MethodologyUpdateWithoutTagsInput, MethodologyUncheckedUpdateWithoutTagsInput>
  }

  export type MethodologyUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutMethodologiesNestedInput
    plans?: PlanUpdateManyWithoutMethodologyNestedInput
  }

  export type MethodologyUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutMethodologyNestedInput
  }

  export type TagUpsertWithoutMethodologiesInput = {
    update: XOR<TagUpdateWithoutMethodologiesInput, TagUncheckedUpdateWithoutMethodologiesInput>
    create: XOR<TagCreateWithoutMethodologiesInput, TagUncheckedCreateWithoutMethodologiesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutMethodologiesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutMethodologiesInput, TagUncheckedUpdateWithoutMethodologiesInput>
  }

  export type TagUpdateWithoutMethodologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutMethodologiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MethodologyCreateWithoutPlansInput = {
    id?: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutMethodologiesInput
    tags?: MethodologyTagCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyUncheckedCreateWithoutPlansInput = {
    id?: string
    bookId: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
    tags?: MethodologyTagUncheckedCreateNestedManyWithoutMethodologyInput
  }

  export type MethodologyCreateOrConnectWithoutPlansInput = {
    where: MethodologyWhereUniqueInput
    create: XOR<MethodologyCreateWithoutPlansInput, MethodologyUncheckedCreateWithoutPlansInput>
  }

  export type MethodologyUpsertWithoutPlansInput = {
    update: XOR<MethodologyUpdateWithoutPlansInput, MethodologyUncheckedUpdateWithoutPlansInput>
    create: XOR<MethodologyCreateWithoutPlansInput, MethodologyUncheckedCreateWithoutPlansInput>
    where?: MethodologyWhereInput
  }

  export type MethodologyUpdateToOneWithWhereWithoutPlansInput = {
    where?: MethodologyWhereInput
    data: XOR<MethodologyUpdateWithoutPlansInput, MethodologyUncheckedUpdateWithoutPlansInput>
  }

  export type MethodologyUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutMethodologiesNestedInput
    tags?: MethodologyTagUpdateManyWithoutMethodologyNestedInput
  }

  export type MethodologyUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MethodologyTagUncheckedUpdateManyWithoutMethodologyNestedInput
  }

  export type MethodologyCreateManyBookInput = {
    id?: string
    name: string
    description: string
    steps: JsonNullValueInput | InputJsonValue
    applicableScenarios?: string | null
    createdAt?: Date | string
  }

  export type MethodologyUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MethodologyTagUpdateManyWithoutMethodologyNestedInput
    plans?: PlanUpdateManyWithoutMethodologyNestedInput
  }

  export type MethodologyUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MethodologyTagUncheckedUpdateManyWithoutMethodologyNestedInput
    plans?: PlanUncheckedUpdateManyWithoutMethodologyNestedInput
  }

  export type MethodologyUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    applicableScenarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MethodologyTagCreateManyMethodologyInput = {
    tagId: string
  }

  export type PlanCreateManyMethodologyInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    status?: string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MethodologyTagUpdateWithoutMethodologyInput = {
    tag?: TagUpdateOneRequiredWithoutMethodologiesNestedInput
  }

  export type MethodologyTagUncheckedUpdateWithoutMethodologyInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MethodologyTagUncheckedUpdateManyWithoutMethodologyInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUpdateWithoutMethodologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateWithoutMethodologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyWithoutMethodologyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    logs?: NullableJsonNullValueInput | InputJsonValue
    reflection?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MethodologyTagCreateManyTagInput = {
    methodologyId: string
  }

  export type MethodologyTagUpdateWithoutTagInput = {
    methodology?: MethodologyUpdateOneRequiredWithoutTagsNestedInput
  }

  export type MethodologyTagUncheckedUpdateWithoutTagInput = {
    methodologyId?: StringFieldUpdateOperationsInput | string
  }

  export type MethodologyTagUncheckedUpdateManyWithoutTagInput = {
    methodologyId?: StringFieldUpdateOperationsInput | string
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