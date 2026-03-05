
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Reponse
 * 
 */
export type Reponse = $Result.DefaultSelection<Prisma.$ReponsePayload>
/**
 * Model Partie
 * 
 */
export type Partie = $Result.DefaultSelection<Prisma.$PartiePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reponse`: Exposes CRUD operations for the **Reponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reponses
    * const reponses = await prisma.reponse.findMany()
    * ```
    */
  get reponse(): Prisma.ReponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partie`: Exposes CRUD operations for the **Partie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parties
    * const parties = await prisma.partie.findMany()
    * ```
    */
  get partie(): Prisma.PartieDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Utilisateur: 'Utilisateur',
    Question: 'Question',
    Reponse: 'Reponse',
    Partie: 'Partie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "question" | "reponse" | "partie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Reponse: {
        payload: Prisma.$ReponsePayload<ExtArgs>
        fields: Prisma.ReponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>
          }
          findFirst: {
            args: Prisma.ReponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>
          }
          findMany: {
            args: Prisma.ReponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>[]
          }
          create: {
            args: Prisma.ReponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>
          }
          createMany: {
            args: Prisma.ReponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>[]
          }
          delete: {
            args: Prisma.ReponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>
          }
          update: {
            args: Prisma.ReponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>
          }
          deleteMany: {
            args: Prisma.ReponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>[]
          }
          upsert: {
            args: Prisma.ReponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsePayload>
          }
          aggregate: {
            args: Prisma.ReponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReponse>
          }
          groupBy: {
            args: Prisma.ReponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReponseCountArgs<ExtArgs>
            result: $Utils.Optional<ReponseCountAggregateOutputType> | number
          }
        }
      }
      Partie: {
        payload: Prisma.$PartiePayload<ExtArgs>
        fields: Prisma.PartieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          findFirst: {
            args: Prisma.PartieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          findMany: {
            args: Prisma.PartieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>[]
          }
          create: {
            args: Prisma.PartieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          createMany: {
            args: Prisma.PartieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>[]
          }
          delete: {
            args: Prisma.PartieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          update: {
            args: Prisma.PartieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          deleteMany: {
            args: Prisma.PartieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>[]
          }
          upsert: {
            args: Prisma.PartieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartiePayload>
          }
          aggregate: {
            args: Prisma.PartieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartie>
          }
          groupBy: {
            args: Prisma.PartieGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartieGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartieCountArgs<ExtArgs>
            result: $Utils.Optional<PartieCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    question?: QuestionOmit
    reponse?: ReponseOmit
    partie?: PartieOmit
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
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    parties: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parties?: boolean | UtilisateurCountOutputTypeCountPartiesArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartieWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    reponses: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reponses?: boolean | QuestionCountOutputTypeCountReponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountReponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
    pointsTotaux: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
    pointsTotaux: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    nomUtilisateur: string | null
    email: string | null
    motDePasseHash: string | null
    pointsTotaux: number | null
    dateInscription: Date | null
    lastLogin: Date | null
    isVerified: boolean | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiresAt: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    nomUtilisateur: string | null
    email: string | null
    motDePasseHash: string | null
    pointsTotaux: number | null
    dateInscription: Date | null
    lastLogin: Date | null
    isVerified: boolean | null
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiresAt: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nomUtilisateur: number
    email: number
    motDePasseHash: number
    pointsTotaux: number
    dateInscription: number
    lastLogin: number
    isVerified: number
    verificationToken: number
    verificationTokenExpiresAt: number
    resetPasswordToken: number
    resetPasswordTokenExpiresAt: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
    pointsTotaux?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
    pointsTotaux?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    nomUtilisateur?: true
    email?: true
    motDePasseHash?: true
    pointsTotaux?: true
    dateInscription?: true
    lastLogin?: true
    isVerified?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiresAt?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nomUtilisateur?: true
    email?: true
    motDePasseHash?: true
    pointsTotaux?: true
    dateInscription?: true
    lastLogin?: true
    isVerified?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiresAt?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nomUtilisateur?: true
    email?: true
    motDePasseHash?: true
    pointsTotaux?: true
    dateInscription?: true
    lastLogin?: true
    isVerified?: true
    verificationToken?: true
    verificationTokenExpiresAt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiresAt?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    nomUtilisateur: string
    email: string
    motDePasseHash: string
    pointsTotaux: number
    dateInscription: Date
    lastLogin: Date | null
    isVerified: boolean
    verificationToken: string | null
    verificationTokenExpiresAt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiresAt: Date | null
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomUtilisateur?: boolean
    email?: boolean
    motDePasseHash?: boolean
    pointsTotaux?: boolean
    dateInscription?: boolean
    lastLogin?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
    parties?: boolean | Utilisateur$partiesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomUtilisateur?: boolean
    email?: boolean
    motDePasseHash?: boolean
    pointsTotaux?: boolean
    dateInscription?: boolean
    lastLogin?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomUtilisateur?: boolean
    email?: boolean
    motDePasseHash?: boolean
    pointsTotaux?: boolean
    dateInscription?: boolean
    lastLogin?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    nomUtilisateur?: boolean
    email?: boolean
    motDePasseHash?: boolean
    pointsTotaux?: boolean
    dateInscription?: boolean
    lastLogin?: boolean
    isVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpiresAt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiresAt?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomUtilisateur" | "email" | "motDePasseHash" | "pointsTotaux" | "dateInscription" | "lastLogin" | "isVerified" | "verificationToken" | "verificationTokenExpiresAt" | "resetPasswordToken" | "resetPasswordTokenExpiresAt", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parties?: boolean | Utilisateur$partiesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      parties: Prisma.$PartiePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomUtilisateur: string
      email: string
      motDePasseHash: string
      pointsTotaux: number
      dateInscription: Date
      lastLogin: Date | null
      isVerified: boolean
      verificationToken: string | null
      verificationTokenExpiresAt: Date | null
      resetPasswordToken: string | null
      resetPasswordTokenExpiresAt: Date | null
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parties<T extends Utilisateur$partiesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$partiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly nomUtilisateur: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasseHash: FieldRef<"Utilisateur", 'String'>
    readonly pointsTotaux: FieldRef<"Utilisateur", 'Int'>
    readonly dateInscription: FieldRef<"Utilisateur", 'DateTime'>
    readonly lastLogin: FieldRef<"Utilisateur", 'DateTime'>
    readonly isVerified: FieldRef<"Utilisateur", 'Boolean'>
    readonly verificationToken: FieldRef<"Utilisateur", 'String'>
    readonly verificationTokenExpiresAt: FieldRef<"Utilisateur", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"Utilisateur", 'String'>
    readonly resetPasswordTokenExpiresAt: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.parties
   */
  export type Utilisateur$partiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    where?: PartieWhereInput
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    cursor?: PartieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    difficulte: number | null
    pointsValeur: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    difficulte: number | null
    pointsValeur: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    enonce: string | null
    categorie: string | null
    difficulte: number | null
    pointsValeur: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    enonce: string | null
    categorie: string | null
    difficulte: number | null
    pointsValeur: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    enonce: number
    categorie: number
    difficulte: number
    pointsValeur: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    difficulte?: true
    pointsValeur?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    difficulte?: true
    pointsValeur?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    enonce?: true
    categorie?: true
    difficulte?: true
    pointsValeur?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    enonce?: true
    categorie?: true
    difficulte?: true
    pointsValeur?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    enonce?: true
    categorie?: true
    difficulte?: true
    pointsValeur?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    enonce: string
    categorie: string
    difficulte: number
    pointsValeur: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enonce?: boolean
    categorie?: boolean
    difficulte?: boolean
    pointsValeur?: boolean
    reponses?: boolean | Question$reponsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enonce?: boolean
    categorie?: boolean
    difficulte?: boolean
    pointsValeur?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enonce?: boolean
    categorie?: boolean
    difficulte?: boolean
    pointsValeur?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    enonce?: boolean
    categorie?: boolean
    difficulte?: boolean
    pointsValeur?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enonce" | "categorie" | "difficulte" | "pointsValeur", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reponses?: boolean | Question$reponsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      reponses: Prisma.$ReponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enonce: string
      categorie: string
      difficulte: number
      pointsValeur: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reponses<T extends Question$reponsesArgs<ExtArgs> = {}>(args?: Subset<T, Question$reponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly enonce: FieldRef<"Question", 'String'>
    readonly categorie: FieldRef<"Question", 'String'>
    readonly difficulte: FieldRef<"Question", 'Int'>
    readonly pointsValeur: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.reponses
   */
  export type Question$reponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    where?: ReponseWhereInput
    orderBy?: ReponseOrderByWithRelationInput | ReponseOrderByWithRelationInput[]
    cursor?: ReponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReponseScalarFieldEnum | ReponseScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Reponse
   */

  export type AggregateReponse = {
    _count: ReponseCountAggregateOutputType | null
    _avg: ReponseAvgAggregateOutputType | null
    _sum: ReponseSumAggregateOutputType | null
    _min: ReponseMinAggregateOutputType | null
    _max: ReponseMaxAggregateOutputType | null
  }

  export type ReponseAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type ReponseSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type ReponseMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    estCorrecte: boolean | null
    questionId: number | null
  }

  export type ReponseMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    estCorrecte: boolean | null
    questionId: number | null
  }

  export type ReponseCountAggregateOutputType = {
    id: number
    libelle: number
    estCorrecte: number
    questionId: number
    _all: number
  }


  export type ReponseAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type ReponseSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type ReponseMinAggregateInputType = {
    id?: true
    libelle?: true
    estCorrecte?: true
    questionId?: true
  }

  export type ReponseMaxAggregateInputType = {
    id?: true
    libelle?: true
    estCorrecte?: true
    questionId?: true
  }

  export type ReponseCountAggregateInputType = {
    id?: true
    libelle?: true
    estCorrecte?: true
    questionId?: true
    _all?: true
  }

  export type ReponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reponse to aggregate.
     */
    where?: ReponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponseOrderByWithRelationInput | ReponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reponses
    **/
    _count?: true | ReponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReponseMaxAggregateInputType
  }

  export type GetReponseAggregateType<T extends ReponseAggregateArgs> = {
        [P in keyof T & keyof AggregateReponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReponse[P]>
      : GetScalarType<T[P], AggregateReponse[P]>
  }




  export type ReponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReponseWhereInput
    orderBy?: ReponseOrderByWithAggregationInput | ReponseOrderByWithAggregationInput[]
    by: ReponseScalarFieldEnum[] | ReponseScalarFieldEnum
    having?: ReponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReponseCountAggregateInputType | true
    _avg?: ReponseAvgAggregateInputType
    _sum?: ReponseSumAggregateInputType
    _min?: ReponseMinAggregateInputType
    _max?: ReponseMaxAggregateInputType
  }

  export type ReponseGroupByOutputType = {
    id: number
    libelle: string
    estCorrecte: boolean
    questionId: number
    _count: ReponseCountAggregateOutputType | null
    _avg: ReponseAvgAggregateOutputType | null
    _sum: ReponseSumAggregateOutputType | null
    _min: ReponseMinAggregateOutputType | null
    _max: ReponseMaxAggregateOutputType | null
  }

  type GetReponseGroupByPayload<T extends ReponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReponseGroupByOutputType[P]>
            : GetScalarType<T[P], ReponseGroupByOutputType[P]>
        }
      >
    >


  export type ReponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    estCorrecte?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponse"]>

  export type ReponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    estCorrecte?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponse"]>

  export type ReponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    estCorrecte?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponse"]>

  export type ReponseSelectScalar = {
    id?: boolean
    libelle?: boolean
    estCorrecte?: boolean
    questionId?: boolean
  }

  export type ReponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "estCorrecte" | "questionId", ExtArgs["result"]["reponse"]>
  export type ReponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type ReponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type ReponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $ReponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reponse"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
      estCorrecte: boolean
      questionId: number
    }, ExtArgs["result"]["reponse"]>
    composites: {}
  }

  type ReponseGetPayload<S extends boolean | null | undefined | ReponseDefaultArgs> = $Result.GetResult<Prisma.$ReponsePayload, S>

  type ReponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReponseCountAggregateInputType | true
    }

  export interface ReponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reponse'], meta: { name: 'Reponse' } }
    /**
     * Find zero or one Reponse that matches the filter.
     * @param {ReponseFindUniqueArgs} args - Arguments to find a Reponse
     * @example
     * // Get one Reponse
     * const reponse = await prisma.reponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReponseFindUniqueArgs>(args: SelectSubset<T, ReponseFindUniqueArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReponseFindUniqueOrThrowArgs} args - Arguments to find a Reponse
     * @example
     * // Get one Reponse
     * const reponse = await prisma.reponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ReponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponseFindFirstArgs} args - Arguments to find a Reponse
     * @example
     * // Get one Reponse
     * const reponse = await prisma.reponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReponseFindFirstArgs>(args?: SelectSubset<T, ReponseFindFirstArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponseFindFirstOrThrowArgs} args - Arguments to find a Reponse
     * @example
     * // Get one Reponse
     * const reponse = await prisma.reponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ReponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reponses
     * const reponses = await prisma.reponse.findMany()
     * 
     * // Get first 10 Reponses
     * const reponses = await prisma.reponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reponseWithIdOnly = await prisma.reponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReponseFindManyArgs>(args?: SelectSubset<T, ReponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reponse.
     * @param {ReponseCreateArgs} args - Arguments to create a Reponse.
     * @example
     * // Create one Reponse
     * const Reponse = await prisma.reponse.create({
     *   data: {
     *     // ... data to create a Reponse
     *   }
     * })
     * 
     */
    create<T extends ReponseCreateArgs>(args: SelectSubset<T, ReponseCreateArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reponses.
     * @param {ReponseCreateManyArgs} args - Arguments to create many Reponses.
     * @example
     * // Create many Reponses
     * const reponse = await prisma.reponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReponseCreateManyArgs>(args?: SelectSubset<T, ReponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reponses and returns the data saved in the database.
     * @param {ReponseCreateManyAndReturnArgs} args - Arguments to create many Reponses.
     * @example
     * // Create many Reponses
     * const reponse = await prisma.reponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reponses and only return the `id`
     * const reponseWithIdOnly = await prisma.reponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ReponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reponse.
     * @param {ReponseDeleteArgs} args - Arguments to delete one Reponse.
     * @example
     * // Delete one Reponse
     * const Reponse = await prisma.reponse.delete({
     *   where: {
     *     // ... filter to delete one Reponse
     *   }
     * })
     * 
     */
    delete<T extends ReponseDeleteArgs>(args: SelectSubset<T, ReponseDeleteArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reponse.
     * @param {ReponseUpdateArgs} args - Arguments to update one Reponse.
     * @example
     * // Update one Reponse
     * const reponse = await prisma.reponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReponseUpdateArgs>(args: SelectSubset<T, ReponseUpdateArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reponses.
     * @param {ReponseDeleteManyArgs} args - Arguments to filter Reponses to delete.
     * @example
     * // Delete a few Reponses
     * const { count } = await prisma.reponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReponseDeleteManyArgs>(args?: SelectSubset<T, ReponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reponses
     * const reponse = await prisma.reponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReponseUpdateManyArgs>(args: SelectSubset<T, ReponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reponses and returns the data updated in the database.
     * @param {ReponseUpdateManyAndReturnArgs} args - Arguments to update many Reponses.
     * @example
     * // Update many Reponses
     * const reponse = await prisma.reponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reponses and only return the `id`
     * const reponseWithIdOnly = await prisma.reponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ReponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reponse.
     * @param {ReponseUpsertArgs} args - Arguments to update or create a Reponse.
     * @example
     * // Update or create a Reponse
     * const reponse = await prisma.reponse.upsert({
     *   create: {
     *     // ... data to create a Reponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reponse we want to update
     *   }
     * })
     */
    upsert<T extends ReponseUpsertArgs>(args: SelectSubset<T, ReponseUpsertArgs<ExtArgs>>): Prisma__ReponseClient<$Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponseCountArgs} args - Arguments to filter Reponses to count.
     * @example
     * // Count the number of Reponses
     * const count = await prisma.reponse.count({
     *   where: {
     *     // ... the filter for the Reponses we want to count
     *   }
     * })
    **/
    count<T extends ReponseCountArgs>(
      args?: Subset<T, ReponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReponseAggregateArgs>(args: Subset<T, ReponseAggregateArgs>): Prisma.PrismaPromise<GetReponseAggregateType<T>>

    /**
     * Group by Reponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponseGroupByArgs} args - Group by arguments.
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
      T extends ReponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReponseGroupByArgs['orderBy'] }
        : { orderBy?: ReponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reponse model
   */
  readonly fields: ReponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reponse model
   */
  interface ReponseFieldRefs {
    readonly id: FieldRef<"Reponse", 'Int'>
    readonly libelle: FieldRef<"Reponse", 'String'>
    readonly estCorrecte: FieldRef<"Reponse", 'Boolean'>
    readonly questionId: FieldRef<"Reponse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reponse findUnique
   */
  export type ReponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * Filter, which Reponse to fetch.
     */
    where: ReponseWhereUniqueInput
  }

  /**
   * Reponse findUniqueOrThrow
   */
  export type ReponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * Filter, which Reponse to fetch.
     */
    where: ReponseWhereUniqueInput
  }

  /**
   * Reponse findFirst
   */
  export type ReponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * Filter, which Reponse to fetch.
     */
    where?: ReponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponseOrderByWithRelationInput | ReponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reponses.
     */
    cursor?: ReponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reponses.
     */
    distinct?: ReponseScalarFieldEnum | ReponseScalarFieldEnum[]
  }

  /**
   * Reponse findFirstOrThrow
   */
  export type ReponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * Filter, which Reponse to fetch.
     */
    where?: ReponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponseOrderByWithRelationInput | ReponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reponses.
     */
    cursor?: ReponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reponses.
     */
    distinct?: ReponseScalarFieldEnum | ReponseScalarFieldEnum[]
  }

  /**
   * Reponse findMany
   */
  export type ReponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * Filter, which Reponses to fetch.
     */
    where?: ReponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponseOrderByWithRelationInput | ReponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reponses.
     */
    cursor?: ReponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    distinct?: ReponseScalarFieldEnum | ReponseScalarFieldEnum[]
  }

  /**
   * Reponse create
   */
  export type ReponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Reponse.
     */
    data: XOR<ReponseCreateInput, ReponseUncheckedCreateInput>
  }

  /**
   * Reponse createMany
   */
  export type ReponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reponses.
     */
    data: ReponseCreateManyInput | ReponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reponse createManyAndReturn
   */
  export type ReponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * The data used to create many Reponses.
     */
    data: ReponseCreateManyInput | ReponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reponse update
   */
  export type ReponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Reponse.
     */
    data: XOR<ReponseUpdateInput, ReponseUncheckedUpdateInput>
    /**
     * Choose, which Reponse to update.
     */
    where: ReponseWhereUniqueInput
  }

  /**
   * Reponse updateMany
   */
  export type ReponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reponses.
     */
    data: XOR<ReponseUpdateManyMutationInput, ReponseUncheckedUpdateManyInput>
    /**
     * Filter which Reponses to update
     */
    where?: ReponseWhereInput
    /**
     * Limit how many Reponses to update.
     */
    limit?: number
  }

  /**
   * Reponse updateManyAndReturn
   */
  export type ReponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * The data used to update Reponses.
     */
    data: XOR<ReponseUpdateManyMutationInput, ReponseUncheckedUpdateManyInput>
    /**
     * Filter which Reponses to update
     */
    where?: ReponseWhereInput
    /**
     * Limit how many Reponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reponse upsert
   */
  export type ReponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Reponse to update in case it exists.
     */
    where: ReponseWhereUniqueInput
    /**
     * In case the Reponse found by the `where` argument doesn't exist, create a new Reponse with this data.
     */
    create: XOR<ReponseCreateInput, ReponseUncheckedCreateInput>
    /**
     * In case the Reponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReponseUpdateInput, ReponseUncheckedUpdateInput>
  }

  /**
   * Reponse delete
   */
  export type ReponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
    /**
     * Filter which Reponse to delete.
     */
    where: ReponseWhereUniqueInput
  }

  /**
   * Reponse deleteMany
   */
  export type ReponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reponses to delete
     */
    where?: ReponseWhereInput
    /**
     * Limit how many Reponses to delete.
     */
    limit?: number
  }

  /**
   * Reponse without action
   */
  export type ReponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponse
     */
    select?: ReponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponse
     */
    omit?: ReponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponseInclude<ExtArgs> | null
  }


  /**
   * Model Partie
   */

  export type AggregatePartie = {
    _count: PartieCountAggregateOutputType | null
    _avg: PartieAvgAggregateOutputType | null
    _sum: PartieSumAggregateOutputType | null
    _min: PartieMinAggregateOutputType | null
    _max: PartieMaxAggregateOutputType | null
  }

  export type PartieAvgAggregateOutputType = {
    id: number | null
    scoreObtenu: number | null
    totalQuestions: number | null
    pointsGagnes: number | null
    niveauDifficulte: number | null
    utilisateurId: number | null
  }

  export type PartieSumAggregateOutputType = {
    id: number | null
    scoreObtenu: number | null
    totalQuestions: number | null
    pointsGagnes: number | null
    niveauDifficulte: number | null
    utilisateurId: number | null
  }

  export type PartieMinAggregateOutputType = {
    id: number | null
    scoreObtenu: number | null
    totalQuestions: number | null
    pointsGagnes: number | null
    categorieJouee: string | null
    niveauDifficulte: number | null
    joueLe: Date | null
    utilisateurId: number | null
  }

  export type PartieMaxAggregateOutputType = {
    id: number | null
    scoreObtenu: number | null
    totalQuestions: number | null
    pointsGagnes: number | null
    categorieJouee: string | null
    niveauDifficulte: number | null
    joueLe: Date | null
    utilisateurId: number | null
  }

  export type PartieCountAggregateOutputType = {
    id: number
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: number
    niveauDifficulte: number
    joueLe: number
    utilisateurId: number
    _all: number
  }


  export type PartieAvgAggregateInputType = {
    id?: true
    scoreObtenu?: true
    totalQuestions?: true
    pointsGagnes?: true
    niveauDifficulte?: true
    utilisateurId?: true
  }

  export type PartieSumAggregateInputType = {
    id?: true
    scoreObtenu?: true
    totalQuestions?: true
    pointsGagnes?: true
    niveauDifficulte?: true
    utilisateurId?: true
  }

  export type PartieMinAggregateInputType = {
    id?: true
    scoreObtenu?: true
    totalQuestions?: true
    pointsGagnes?: true
    categorieJouee?: true
    niveauDifficulte?: true
    joueLe?: true
    utilisateurId?: true
  }

  export type PartieMaxAggregateInputType = {
    id?: true
    scoreObtenu?: true
    totalQuestions?: true
    pointsGagnes?: true
    categorieJouee?: true
    niveauDifficulte?: true
    joueLe?: true
    utilisateurId?: true
  }

  export type PartieCountAggregateInputType = {
    id?: true
    scoreObtenu?: true
    totalQuestions?: true
    pointsGagnes?: true
    categorieJouee?: true
    niveauDifficulte?: true
    joueLe?: true
    utilisateurId?: true
    _all?: true
  }

  export type PartieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partie to aggregate.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parties
    **/
    _count?: true | PartieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartieMaxAggregateInputType
  }

  export type GetPartieAggregateType<T extends PartieAggregateArgs> = {
        [P in keyof T & keyof AggregatePartie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartie[P]>
      : GetScalarType<T[P], AggregatePartie[P]>
  }




  export type PartieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartieWhereInput
    orderBy?: PartieOrderByWithAggregationInput | PartieOrderByWithAggregationInput[]
    by: PartieScalarFieldEnum[] | PartieScalarFieldEnum
    having?: PartieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartieCountAggregateInputType | true
    _avg?: PartieAvgAggregateInputType
    _sum?: PartieSumAggregateInputType
    _min?: PartieMinAggregateInputType
    _max?: PartieMaxAggregateInputType
  }

  export type PartieGroupByOutputType = {
    id: number
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: string
    niveauDifficulte: number
    joueLe: Date
    utilisateurId: number
    _count: PartieCountAggregateOutputType | null
    _avg: PartieAvgAggregateOutputType | null
    _sum: PartieSumAggregateOutputType | null
    _min: PartieMinAggregateOutputType | null
    _max: PartieMaxAggregateOutputType | null
  }

  type GetPartieGroupByPayload<T extends PartieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartieGroupByOutputType[P]>
            : GetScalarType<T[P], PartieGroupByOutputType[P]>
        }
      >
    >


  export type PartieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scoreObtenu?: boolean
    totalQuestions?: boolean
    pointsGagnes?: boolean
    categorieJouee?: boolean
    niveauDifficulte?: boolean
    joueLe?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partie"]>

  export type PartieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scoreObtenu?: boolean
    totalQuestions?: boolean
    pointsGagnes?: boolean
    categorieJouee?: boolean
    niveauDifficulte?: boolean
    joueLe?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partie"]>

  export type PartieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scoreObtenu?: boolean
    totalQuestions?: boolean
    pointsGagnes?: boolean
    categorieJouee?: boolean
    niveauDifficulte?: boolean
    joueLe?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partie"]>

  export type PartieSelectScalar = {
    id?: boolean
    scoreObtenu?: boolean
    totalQuestions?: boolean
    pointsGagnes?: boolean
    categorieJouee?: boolean
    niveauDifficulte?: boolean
    joueLe?: boolean
    utilisateurId?: boolean
  }

  export type PartieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scoreObtenu" | "totalQuestions" | "pointsGagnes" | "categorieJouee" | "niveauDifficulte" | "joueLe" | "utilisateurId", ExtArgs["result"]["partie"]>
  export type PartieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type PartieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type PartieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $PartiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partie"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scoreObtenu: number
      totalQuestions: number
      pointsGagnes: number
      categorieJouee: string
      niveauDifficulte: number
      joueLe: Date
      utilisateurId: number
    }, ExtArgs["result"]["partie"]>
    composites: {}
  }

  type PartieGetPayload<S extends boolean | null | undefined | PartieDefaultArgs> = $Result.GetResult<Prisma.$PartiePayload, S>

  type PartieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartieCountAggregateInputType | true
    }

  export interface PartieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partie'], meta: { name: 'Partie' } }
    /**
     * Find zero or one Partie that matches the filter.
     * @param {PartieFindUniqueArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartieFindUniqueArgs>(args: SelectSubset<T, PartieFindUniqueArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartieFindUniqueOrThrowArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartieFindUniqueOrThrowArgs>(args: SelectSubset<T, PartieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieFindFirstArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartieFindFirstArgs>(args?: SelectSubset<T, PartieFindFirstArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieFindFirstOrThrowArgs} args - Arguments to find a Partie
     * @example
     * // Get one Partie
     * const partie = await prisma.partie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartieFindFirstOrThrowArgs>(args?: SelectSubset<T, PartieFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parties
     * const parties = await prisma.partie.findMany()
     * 
     * // Get first 10 Parties
     * const parties = await prisma.partie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partieWithIdOnly = await prisma.partie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartieFindManyArgs>(args?: SelectSubset<T, PartieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partie.
     * @param {PartieCreateArgs} args - Arguments to create a Partie.
     * @example
     * // Create one Partie
     * const Partie = await prisma.partie.create({
     *   data: {
     *     // ... data to create a Partie
     *   }
     * })
     * 
     */
    create<T extends PartieCreateArgs>(args: SelectSubset<T, PartieCreateArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parties.
     * @param {PartieCreateManyArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const partie = await prisma.partie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartieCreateManyArgs>(args?: SelectSubset<T, PartieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parties and returns the data saved in the database.
     * @param {PartieCreateManyAndReturnArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const partie = await prisma.partie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parties and only return the `id`
     * const partieWithIdOnly = await prisma.partie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartieCreateManyAndReturnArgs>(args?: SelectSubset<T, PartieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partie.
     * @param {PartieDeleteArgs} args - Arguments to delete one Partie.
     * @example
     * // Delete one Partie
     * const Partie = await prisma.partie.delete({
     *   where: {
     *     // ... filter to delete one Partie
     *   }
     * })
     * 
     */
    delete<T extends PartieDeleteArgs>(args: SelectSubset<T, PartieDeleteArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partie.
     * @param {PartieUpdateArgs} args - Arguments to update one Partie.
     * @example
     * // Update one Partie
     * const partie = await prisma.partie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartieUpdateArgs>(args: SelectSubset<T, PartieUpdateArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parties.
     * @param {PartieDeleteManyArgs} args - Arguments to filter Parties to delete.
     * @example
     * // Delete a few Parties
     * const { count } = await prisma.partie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartieDeleteManyArgs>(args?: SelectSubset<T, PartieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parties
     * const partie = await prisma.partie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartieUpdateManyArgs>(args: SelectSubset<T, PartieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties and returns the data updated in the database.
     * @param {PartieUpdateManyAndReturnArgs} args - Arguments to update many Parties.
     * @example
     * // Update many Parties
     * const partie = await prisma.partie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parties and only return the `id`
     * const partieWithIdOnly = await prisma.partie.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartieUpdateManyAndReturnArgs>(args: SelectSubset<T, PartieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partie.
     * @param {PartieUpsertArgs} args - Arguments to update or create a Partie.
     * @example
     * // Update or create a Partie
     * const partie = await prisma.partie.upsert({
     *   create: {
     *     // ... data to create a Partie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partie we want to update
     *   }
     * })
     */
    upsert<T extends PartieUpsertArgs>(args: SelectSubset<T, PartieUpsertArgs<ExtArgs>>): Prisma__PartieClient<$Result.GetResult<Prisma.$PartiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieCountArgs} args - Arguments to filter Parties to count.
     * @example
     * // Count the number of Parties
     * const count = await prisma.partie.count({
     *   where: {
     *     // ... the filter for the Parties we want to count
     *   }
     * })
    **/
    count<T extends PartieCountArgs>(
      args?: Subset<T, PartieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartieAggregateArgs>(args: Subset<T, PartieAggregateArgs>): Prisma.PrismaPromise<GetPartieAggregateType<T>>

    /**
     * Group by Partie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartieGroupByArgs} args - Group by arguments.
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
      T extends PartieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartieGroupByArgs['orderBy'] }
        : { orderBy?: PartieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partie model
   */
  readonly fields: PartieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Partie model
   */
  interface PartieFieldRefs {
    readonly id: FieldRef<"Partie", 'Int'>
    readonly scoreObtenu: FieldRef<"Partie", 'Int'>
    readonly totalQuestions: FieldRef<"Partie", 'Int'>
    readonly pointsGagnes: FieldRef<"Partie", 'Int'>
    readonly categorieJouee: FieldRef<"Partie", 'String'>
    readonly niveauDifficulte: FieldRef<"Partie", 'Int'>
    readonly joueLe: FieldRef<"Partie", 'DateTime'>
    readonly utilisateurId: FieldRef<"Partie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Partie findUnique
   */
  export type PartieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie findUniqueOrThrow
   */
  export type PartieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie findFirst
   */
  export type PartieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Partie findFirstOrThrow
   */
  export type PartieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Partie to fetch.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Partie findMany
   */
  export type PartieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter, which Parties to fetch.
     */
    where?: PartieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartieOrderByWithRelationInput | PartieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parties.
     */
    cursor?: PartieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    distinct?: PartieScalarFieldEnum | PartieScalarFieldEnum[]
  }

  /**
   * Partie create
   */
  export type PartieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * The data needed to create a Partie.
     */
    data: XOR<PartieCreateInput, PartieUncheckedCreateInput>
  }

  /**
   * Partie createMany
   */
  export type PartieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parties.
     */
    data: PartieCreateManyInput | PartieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partie createManyAndReturn
   */
  export type PartieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * The data used to create many Parties.
     */
    data: PartieCreateManyInput | PartieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partie update
   */
  export type PartieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * The data needed to update a Partie.
     */
    data: XOR<PartieUpdateInput, PartieUncheckedUpdateInput>
    /**
     * Choose, which Partie to update.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie updateMany
   */
  export type PartieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parties.
     */
    data: XOR<PartieUpdateManyMutationInput, PartieUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartieWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
  }

  /**
   * Partie updateManyAndReturn
   */
  export type PartieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * The data used to update Parties.
     */
    data: XOR<PartieUpdateManyMutationInput, PartieUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartieWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partie upsert
   */
  export type PartieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * The filter to search for the Partie to update in case it exists.
     */
    where: PartieWhereUniqueInput
    /**
     * In case the Partie found by the `where` argument doesn't exist, create a new Partie with this data.
     */
    create: XOR<PartieCreateInput, PartieUncheckedCreateInput>
    /**
     * In case the Partie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartieUpdateInput, PartieUncheckedUpdateInput>
  }

  /**
   * Partie delete
   */
  export type PartieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
    /**
     * Filter which Partie to delete.
     */
    where: PartieWhereUniqueInput
  }

  /**
   * Partie deleteMany
   */
  export type PartieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parties to delete
     */
    where?: PartieWhereInput
    /**
     * Limit how many Parties to delete.
     */
    limit?: number
  }

  /**
   * Partie without action
   */
  export type PartieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partie
     */
    select?: PartieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partie
     */
    omit?: PartieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartieInclude<ExtArgs> | null
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


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nomUtilisateur: 'nomUtilisateur',
    email: 'email',
    motDePasseHash: 'motDePasseHash',
    pointsTotaux: 'pointsTotaux',
    dateInscription: 'dateInscription',
    lastLogin: 'lastLogin',
    isVerified: 'isVerified',
    verificationToken: 'verificationToken',
    verificationTokenExpiresAt: 'verificationTokenExpiresAt',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordTokenExpiresAt: 'resetPasswordTokenExpiresAt'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    enonce: 'enonce',
    categorie: 'categorie',
    difficulte: 'difficulte',
    pointsValeur: 'pointsValeur'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ReponseScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    estCorrecte: 'estCorrecte',
    questionId: 'questionId'
  };

  export type ReponseScalarFieldEnum = (typeof ReponseScalarFieldEnum)[keyof typeof ReponseScalarFieldEnum]


  export const PartieScalarFieldEnum: {
    id: 'id',
    scoreObtenu: 'scoreObtenu',
    totalQuestions: 'totalQuestions',
    pointsGagnes: 'pointsGagnes',
    categorieJouee: 'categorieJouee',
    niveauDifficulte: 'niveauDifficulte',
    joueLe: 'joueLe',
    utilisateurId: 'utilisateurId'
  };

  export type PartieScalarFieldEnum = (typeof PartieScalarFieldEnum)[keyof typeof PartieScalarFieldEnum]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    nomUtilisateur?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasseHash?: StringFilter<"Utilisateur"> | string
    pointsTotaux?: IntFilter<"Utilisateur"> | number
    dateInscription?: DateTimeFilter<"Utilisateur"> | Date | string
    lastLogin?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    isVerified?: BoolFilter<"Utilisateur"> | boolean
    verificationToken?: StringNullableFilter<"Utilisateur"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"Utilisateur"> | string | null
    resetPasswordTokenExpiresAt?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    parties?: PartieListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nomUtilisateur?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    pointsTotaux?: SortOrder
    dateInscription?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpiresAt?: SortOrderInput | SortOrder
    parties?: PartieOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nomUtilisateur?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    motDePasseHash?: StringFilter<"Utilisateur"> | string
    pointsTotaux?: IntFilter<"Utilisateur"> | number
    dateInscription?: DateTimeFilter<"Utilisateur"> | Date | string
    lastLogin?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    isVerified?: BoolFilter<"Utilisateur"> | boolean
    verificationToken?: StringNullableFilter<"Utilisateur"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"Utilisateur"> | string | null
    resetPasswordTokenExpiresAt?: DateTimeNullableFilter<"Utilisateur"> | Date | string | null
    parties?: PartieListRelationFilter
  }, "id" | "nomUtilisateur" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nomUtilisateur?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    pointsTotaux?: SortOrder
    dateInscription?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpiresAt?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpiresAt?: SortOrderInput | SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    nomUtilisateur?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasseHash?: StringWithAggregatesFilter<"Utilisateur"> | string
    pointsTotaux?: IntWithAggregatesFilter<"Utilisateur"> | number
    dateInscription?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Utilisateur"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"Utilisateur"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    verificationTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Utilisateur"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    resetPasswordTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Utilisateur"> | Date | string | null
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    enonce?: StringFilter<"Question"> | string
    categorie?: StringFilter<"Question"> | string
    difficulte?: IntFilter<"Question"> | number
    pointsValeur?: IntFilter<"Question"> | number
    reponses?: ReponseListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    enonce?: SortOrder
    categorie?: SortOrder
    difficulte?: SortOrder
    pointsValeur?: SortOrder
    reponses?: ReponseOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    enonce?: StringFilter<"Question"> | string
    categorie?: StringFilter<"Question"> | string
    difficulte?: IntFilter<"Question"> | number
    pointsValeur?: IntFilter<"Question"> | number
    reponses?: ReponseListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    enonce?: SortOrder
    categorie?: SortOrder
    difficulte?: SortOrder
    pointsValeur?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    enonce?: StringWithAggregatesFilter<"Question"> | string
    categorie?: StringWithAggregatesFilter<"Question"> | string
    difficulte?: IntWithAggregatesFilter<"Question"> | number
    pointsValeur?: IntWithAggregatesFilter<"Question"> | number
  }

  export type ReponseWhereInput = {
    AND?: ReponseWhereInput | ReponseWhereInput[]
    OR?: ReponseWhereInput[]
    NOT?: ReponseWhereInput | ReponseWhereInput[]
    id?: IntFilter<"Reponse"> | number
    libelle?: StringFilter<"Reponse"> | string
    estCorrecte?: BoolFilter<"Reponse"> | boolean
    questionId?: IntFilter<"Reponse"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type ReponseOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    estCorrecte?: SortOrder
    questionId?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type ReponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReponseWhereInput | ReponseWhereInput[]
    OR?: ReponseWhereInput[]
    NOT?: ReponseWhereInput | ReponseWhereInput[]
    libelle?: StringFilter<"Reponse"> | string
    estCorrecte?: BoolFilter<"Reponse"> | boolean
    questionId?: IntFilter<"Reponse"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type ReponseOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    estCorrecte?: SortOrder
    questionId?: SortOrder
    _count?: ReponseCountOrderByAggregateInput
    _avg?: ReponseAvgOrderByAggregateInput
    _max?: ReponseMaxOrderByAggregateInput
    _min?: ReponseMinOrderByAggregateInput
    _sum?: ReponseSumOrderByAggregateInput
  }

  export type ReponseScalarWhereWithAggregatesInput = {
    AND?: ReponseScalarWhereWithAggregatesInput | ReponseScalarWhereWithAggregatesInput[]
    OR?: ReponseScalarWhereWithAggregatesInput[]
    NOT?: ReponseScalarWhereWithAggregatesInput | ReponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reponse"> | number
    libelle?: StringWithAggregatesFilter<"Reponse"> | string
    estCorrecte?: BoolWithAggregatesFilter<"Reponse"> | boolean
    questionId?: IntWithAggregatesFilter<"Reponse"> | number
  }

  export type PartieWhereInput = {
    AND?: PartieWhereInput | PartieWhereInput[]
    OR?: PartieWhereInput[]
    NOT?: PartieWhereInput | PartieWhereInput[]
    id?: IntFilter<"Partie"> | number
    scoreObtenu?: IntFilter<"Partie"> | number
    totalQuestions?: IntFilter<"Partie"> | number
    pointsGagnes?: IntFilter<"Partie"> | number
    categorieJouee?: StringFilter<"Partie"> | string
    niveauDifficulte?: IntFilter<"Partie"> | number
    joueLe?: DateTimeFilter<"Partie"> | Date | string
    utilisateurId?: IntFilter<"Partie"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type PartieOrderByWithRelationInput = {
    id?: SortOrder
    scoreObtenu?: SortOrder
    totalQuestions?: SortOrder
    pointsGagnes?: SortOrder
    categorieJouee?: SortOrder
    niveauDifficulte?: SortOrder
    joueLe?: SortOrder
    utilisateurId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type PartieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartieWhereInput | PartieWhereInput[]
    OR?: PartieWhereInput[]
    NOT?: PartieWhereInput | PartieWhereInput[]
    scoreObtenu?: IntFilter<"Partie"> | number
    totalQuestions?: IntFilter<"Partie"> | number
    pointsGagnes?: IntFilter<"Partie"> | number
    categorieJouee?: StringFilter<"Partie"> | string
    niveauDifficulte?: IntFilter<"Partie"> | number
    joueLe?: DateTimeFilter<"Partie"> | Date | string
    utilisateurId?: IntFilter<"Partie"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type PartieOrderByWithAggregationInput = {
    id?: SortOrder
    scoreObtenu?: SortOrder
    totalQuestions?: SortOrder
    pointsGagnes?: SortOrder
    categorieJouee?: SortOrder
    niveauDifficulte?: SortOrder
    joueLe?: SortOrder
    utilisateurId?: SortOrder
    _count?: PartieCountOrderByAggregateInput
    _avg?: PartieAvgOrderByAggregateInput
    _max?: PartieMaxOrderByAggregateInput
    _min?: PartieMinOrderByAggregateInput
    _sum?: PartieSumOrderByAggregateInput
  }

  export type PartieScalarWhereWithAggregatesInput = {
    AND?: PartieScalarWhereWithAggregatesInput | PartieScalarWhereWithAggregatesInput[]
    OR?: PartieScalarWhereWithAggregatesInput[]
    NOT?: PartieScalarWhereWithAggregatesInput | PartieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partie"> | number
    scoreObtenu?: IntWithAggregatesFilter<"Partie"> | number
    totalQuestions?: IntWithAggregatesFilter<"Partie"> | number
    pointsGagnes?: IntWithAggregatesFilter<"Partie"> | number
    categorieJouee?: StringWithAggregatesFilter<"Partie"> | string
    niveauDifficulte?: IntWithAggregatesFilter<"Partie"> | number
    joueLe?: DateTimeWithAggregatesFilter<"Partie"> | Date | string
    utilisateurId?: IntWithAggregatesFilter<"Partie"> | number
  }

  export type UtilisateurCreateInput = {
    nomUtilisateur: string
    email: string
    motDePasseHash: string
    pointsTotaux?: number
    dateInscription?: Date | string
    lastLogin?: Date | string | null
    isVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    parties?: PartieCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    nomUtilisateur: string
    email: string
    motDePasseHash: string
    pointsTotaux?: number
    dateInscription?: Date | string
    lastLogin?: Date | string | null
    isVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
    parties?: PartieUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    nomUtilisateur?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    pointsTotaux?: IntFieldUpdateOperationsInput | number
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parties?: PartieUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomUtilisateur?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    pointsTotaux?: IntFieldUpdateOperationsInput | number
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parties?: PartieUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    nomUtilisateur: string
    email: string
    motDePasseHash: string
    pointsTotaux?: number
    dateInscription?: Date | string
    lastLogin?: Date | string | null
    isVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
  }

  export type UtilisateurUpdateManyMutationInput = {
    nomUtilisateur?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    pointsTotaux?: IntFieldUpdateOperationsInput | number
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomUtilisateur?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    pointsTotaux?: IntFieldUpdateOperationsInput | number
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionCreateInput = {
    enonce: string
    categorie: string
    difficulte: number
    pointsValeur: number
    reponses?: ReponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    enonce: string
    categorie: string
    difficulte: number
    pointsValeur: number
    reponses?: ReponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    enonce?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    difficulte?: IntFieldUpdateOperationsInput | number
    pointsValeur?: IntFieldUpdateOperationsInput | number
    reponses?: ReponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enonce?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    difficulte?: IntFieldUpdateOperationsInput | number
    pointsValeur?: IntFieldUpdateOperationsInput | number
    reponses?: ReponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    enonce: string
    categorie: string
    difficulte: number
    pointsValeur: number
  }

  export type QuestionUpdateManyMutationInput = {
    enonce?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    difficulte?: IntFieldUpdateOperationsInput | number
    pointsValeur?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enonce?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    difficulte?: IntFieldUpdateOperationsInput | number
    pointsValeur?: IntFieldUpdateOperationsInput | number
  }

  export type ReponseCreateInput = {
    libelle: string
    estCorrecte?: boolean
    question: QuestionCreateNestedOneWithoutReponsesInput
  }

  export type ReponseUncheckedCreateInput = {
    id?: number
    libelle: string
    estCorrecte?: boolean
    questionId: number
  }

  export type ReponseUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    estCorrecte?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutReponsesNestedInput
  }

  export type ReponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    estCorrecte?: BoolFieldUpdateOperationsInput | boolean
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type ReponseCreateManyInput = {
    id?: number
    libelle: string
    estCorrecte?: boolean
    questionId: number
  }

  export type ReponseUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    estCorrecte?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    estCorrecte?: BoolFieldUpdateOperationsInput | boolean
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type PartieCreateInput = {
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: string
    niveauDifficulte: number
    joueLe?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutPartiesInput
  }

  export type PartieUncheckedCreateInput = {
    id?: number
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: string
    niveauDifficulte: number
    joueLe?: Date | string
    utilisateurId: number
  }

  export type PartieUpdateInput = {
    scoreObtenu?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    pointsGagnes?: IntFieldUpdateOperationsInput | number
    categorieJouee?: StringFieldUpdateOperationsInput | string
    niveauDifficulte?: IntFieldUpdateOperationsInput | number
    joueLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutPartiesNestedInput
  }

  export type PartieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreObtenu?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    pointsGagnes?: IntFieldUpdateOperationsInput | number
    categorieJouee?: StringFieldUpdateOperationsInput | string
    niveauDifficulte?: IntFieldUpdateOperationsInput | number
    joueLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type PartieCreateManyInput = {
    id?: number
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: string
    niveauDifficulte: number
    joueLe?: Date | string
    utilisateurId: number
  }

  export type PartieUpdateManyMutationInput = {
    scoreObtenu?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    pointsGagnes?: IntFieldUpdateOperationsInput | number
    categorieJouee?: StringFieldUpdateOperationsInput | string
    niveauDifficulte?: IntFieldUpdateOperationsInput | number
    joueLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreObtenu?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    pointsGagnes?: IntFieldUpdateOperationsInput | number
    categorieJouee?: StringFieldUpdateOperationsInput | string
    niveauDifficulte?: IntFieldUpdateOperationsInput | number
    joueLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PartieListRelationFilter = {
    every?: PartieWhereInput
    some?: PartieWhereInput
    none?: PartieWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PartieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nomUtilisateur?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    pointsTotaux?: SortOrder
    dateInscription?: SortOrder
    lastLogin?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiresAt?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
    pointsTotaux?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nomUtilisateur?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    pointsTotaux?: SortOrder
    dateInscription?: SortOrder
    lastLogin?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiresAt?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nomUtilisateur?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    pointsTotaux?: SortOrder
    dateInscription?: SortOrder
    lastLogin?: SortOrder
    isVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpiresAt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiresAt?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
    pointsTotaux?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ReponseListRelationFilter = {
    every?: ReponseWhereInput
    some?: ReponseWhereInput
    none?: ReponseWhereInput
  }

  export type ReponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    enonce?: SortOrder
    categorie?: SortOrder
    difficulte?: SortOrder
    pointsValeur?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    difficulte?: SortOrder
    pointsValeur?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    enonce?: SortOrder
    categorie?: SortOrder
    difficulte?: SortOrder
    pointsValeur?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    enonce?: SortOrder
    categorie?: SortOrder
    difficulte?: SortOrder
    pointsValeur?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    difficulte?: SortOrder
    pointsValeur?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type ReponseCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    estCorrecte?: SortOrder
    questionId?: SortOrder
  }

  export type ReponseAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type ReponseMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    estCorrecte?: SortOrder
    questionId?: SortOrder
  }

  export type ReponseMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    estCorrecte?: SortOrder
    questionId?: SortOrder
  }

  export type ReponseSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type PartieCountOrderByAggregateInput = {
    id?: SortOrder
    scoreObtenu?: SortOrder
    totalQuestions?: SortOrder
    pointsGagnes?: SortOrder
    categorieJouee?: SortOrder
    niveauDifficulte?: SortOrder
    joueLe?: SortOrder
    utilisateurId?: SortOrder
  }

  export type PartieAvgOrderByAggregateInput = {
    id?: SortOrder
    scoreObtenu?: SortOrder
    totalQuestions?: SortOrder
    pointsGagnes?: SortOrder
    niveauDifficulte?: SortOrder
    utilisateurId?: SortOrder
  }

  export type PartieMaxOrderByAggregateInput = {
    id?: SortOrder
    scoreObtenu?: SortOrder
    totalQuestions?: SortOrder
    pointsGagnes?: SortOrder
    categorieJouee?: SortOrder
    niveauDifficulte?: SortOrder
    joueLe?: SortOrder
    utilisateurId?: SortOrder
  }

  export type PartieMinOrderByAggregateInput = {
    id?: SortOrder
    scoreObtenu?: SortOrder
    totalQuestions?: SortOrder
    pointsGagnes?: SortOrder
    categorieJouee?: SortOrder
    niveauDifficulte?: SortOrder
    joueLe?: SortOrder
    utilisateurId?: SortOrder
  }

  export type PartieSumOrderByAggregateInput = {
    id?: SortOrder
    scoreObtenu?: SortOrder
    totalQuestions?: SortOrder
    pointsGagnes?: SortOrder
    niveauDifficulte?: SortOrder
    utilisateurId?: SortOrder
  }

  export type PartieCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PartieCreateWithoutUtilisateurInput, PartieUncheckedCreateWithoutUtilisateurInput> | PartieCreateWithoutUtilisateurInput[] | PartieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutUtilisateurInput | PartieCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PartieCreateManyUtilisateurInputEnvelope
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
  }

  export type PartieUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PartieCreateWithoutUtilisateurInput, PartieUncheckedCreateWithoutUtilisateurInput> | PartieCreateWithoutUtilisateurInput[] | PartieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutUtilisateurInput | PartieCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PartieCreateManyUtilisateurInputEnvelope
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PartieUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PartieCreateWithoutUtilisateurInput, PartieUncheckedCreateWithoutUtilisateurInput> | PartieCreateWithoutUtilisateurInput[] | PartieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutUtilisateurInput | PartieCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PartieUpsertWithWhereUniqueWithoutUtilisateurInput | PartieUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PartieCreateManyUtilisateurInputEnvelope
    set?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    disconnect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    delete?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    update?: PartieUpdateWithWhereUniqueWithoutUtilisateurInput | PartieUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PartieUpdateManyWithWhereWithoutUtilisateurInput | PartieUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PartieScalarWhereInput | PartieScalarWhereInput[]
  }

  export type PartieUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PartieCreateWithoutUtilisateurInput, PartieUncheckedCreateWithoutUtilisateurInput> | PartieCreateWithoutUtilisateurInput[] | PartieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PartieCreateOrConnectWithoutUtilisateurInput | PartieCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PartieUpsertWithWhereUniqueWithoutUtilisateurInput | PartieUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PartieCreateManyUtilisateurInputEnvelope
    set?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    disconnect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    delete?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    connect?: PartieWhereUniqueInput | PartieWhereUniqueInput[]
    update?: PartieUpdateWithWhereUniqueWithoutUtilisateurInput | PartieUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PartieUpdateManyWithWhereWithoutUtilisateurInput | PartieUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PartieScalarWhereInput | PartieScalarWhereInput[]
  }

  export type ReponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ReponseCreateWithoutQuestionInput, ReponseUncheckedCreateWithoutQuestionInput> | ReponseCreateWithoutQuestionInput[] | ReponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReponseCreateOrConnectWithoutQuestionInput | ReponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ReponseCreateManyQuestionInputEnvelope
    connect?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
  }

  export type ReponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ReponseCreateWithoutQuestionInput, ReponseUncheckedCreateWithoutQuestionInput> | ReponseCreateWithoutQuestionInput[] | ReponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReponseCreateOrConnectWithoutQuestionInput | ReponseCreateOrConnectWithoutQuestionInput[]
    createMany?: ReponseCreateManyQuestionInputEnvelope
    connect?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
  }

  export type ReponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ReponseCreateWithoutQuestionInput, ReponseUncheckedCreateWithoutQuestionInput> | ReponseCreateWithoutQuestionInput[] | ReponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReponseCreateOrConnectWithoutQuestionInput | ReponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ReponseUpsertWithWhereUniqueWithoutQuestionInput | ReponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ReponseCreateManyQuestionInputEnvelope
    set?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    disconnect?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    delete?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    connect?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    update?: ReponseUpdateWithWhereUniqueWithoutQuestionInput | ReponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ReponseUpdateManyWithWhereWithoutQuestionInput | ReponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ReponseScalarWhereInput | ReponseScalarWhereInput[]
  }

  export type ReponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ReponseCreateWithoutQuestionInput, ReponseUncheckedCreateWithoutQuestionInput> | ReponseCreateWithoutQuestionInput[] | ReponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ReponseCreateOrConnectWithoutQuestionInput | ReponseCreateOrConnectWithoutQuestionInput[]
    upsert?: ReponseUpsertWithWhereUniqueWithoutQuestionInput | ReponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ReponseCreateManyQuestionInputEnvelope
    set?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    disconnect?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    delete?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    connect?: ReponseWhereUniqueInput | ReponseWhereUniqueInput[]
    update?: ReponseUpdateWithWhereUniqueWithoutQuestionInput | ReponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ReponseUpdateManyWithWhereWithoutQuestionInput | ReponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ReponseScalarWhereInput | ReponseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutReponsesInput = {
    create?: XOR<QuestionCreateWithoutReponsesInput, QuestionUncheckedCreateWithoutReponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutReponsesInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutReponsesNestedInput = {
    create?: XOR<QuestionCreateWithoutReponsesInput, QuestionUncheckedCreateWithoutReponsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutReponsesInput
    upsert?: QuestionUpsertWithoutReponsesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutReponsesInput, QuestionUpdateWithoutReponsesInput>, QuestionUncheckedUpdateWithoutReponsesInput>
  }

  export type UtilisateurCreateNestedOneWithoutPartiesInput = {
    create?: XOR<UtilisateurCreateWithoutPartiesInput, UtilisateurUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPartiesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutPartiesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutPartiesInput, UtilisateurUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPartiesInput
    upsert?: UtilisateurUpsertWithoutPartiesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutPartiesInput, UtilisateurUpdateWithoutPartiesInput>, UtilisateurUncheckedUpdateWithoutPartiesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PartieCreateWithoutUtilisateurInput = {
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: string
    niveauDifficulte: number
    joueLe?: Date | string
  }

  export type PartieUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: string
    niveauDifficulte: number
    joueLe?: Date | string
  }

  export type PartieCreateOrConnectWithoutUtilisateurInput = {
    where: PartieWhereUniqueInput
    create: XOR<PartieCreateWithoutUtilisateurInput, PartieUncheckedCreateWithoutUtilisateurInput>
  }

  export type PartieCreateManyUtilisateurInputEnvelope = {
    data: PartieCreateManyUtilisateurInput | PartieCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type PartieUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: PartieWhereUniqueInput
    update: XOR<PartieUpdateWithoutUtilisateurInput, PartieUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<PartieCreateWithoutUtilisateurInput, PartieUncheckedCreateWithoutUtilisateurInput>
  }

  export type PartieUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: PartieWhereUniqueInput
    data: XOR<PartieUpdateWithoutUtilisateurInput, PartieUncheckedUpdateWithoutUtilisateurInput>
  }

  export type PartieUpdateManyWithWhereWithoutUtilisateurInput = {
    where: PartieScalarWhereInput
    data: XOR<PartieUpdateManyMutationInput, PartieUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type PartieScalarWhereInput = {
    AND?: PartieScalarWhereInput | PartieScalarWhereInput[]
    OR?: PartieScalarWhereInput[]
    NOT?: PartieScalarWhereInput | PartieScalarWhereInput[]
    id?: IntFilter<"Partie"> | number
    scoreObtenu?: IntFilter<"Partie"> | number
    totalQuestions?: IntFilter<"Partie"> | number
    pointsGagnes?: IntFilter<"Partie"> | number
    categorieJouee?: StringFilter<"Partie"> | string
    niveauDifficulte?: IntFilter<"Partie"> | number
    joueLe?: DateTimeFilter<"Partie"> | Date | string
    utilisateurId?: IntFilter<"Partie"> | number
  }

  export type ReponseCreateWithoutQuestionInput = {
    libelle: string
    estCorrecte?: boolean
  }

  export type ReponseUncheckedCreateWithoutQuestionInput = {
    id?: number
    libelle: string
    estCorrecte?: boolean
  }

  export type ReponseCreateOrConnectWithoutQuestionInput = {
    where: ReponseWhereUniqueInput
    create: XOR<ReponseCreateWithoutQuestionInput, ReponseUncheckedCreateWithoutQuestionInput>
  }

  export type ReponseCreateManyQuestionInputEnvelope = {
    data: ReponseCreateManyQuestionInput | ReponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ReponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ReponseWhereUniqueInput
    update: XOR<ReponseUpdateWithoutQuestionInput, ReponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<ReponseCreateWithoutQuestionInput, ReponseUncheckedCreateWithoutQuestionInput>
  }

  export type ReponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ReponseWhereUniqueInput
    data: XOR<ReponseUpdateWithoutQuestionInput, ReponseUncheckedUpdateWithoutQuestionInput>
  }

  export type ReponseUpdateManyWithWhereWithoutQuestionInput = {
    where: ReponseScalarWhereInput
    data: XOR<ReponseUpdateManyMutationInput, ReponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type ReponseScalarWhereInput = {
    AND?: ReponseScalarWhereInput | ReponseScalarWhereInput[]
    OR?: ReponseScalarWhereInput[]
    NOT?: ReponseScalarWhereInput | ReponseScalarWhereInput[]
    id?: IntFilter<"Reponse"> | number
    libelle?: StringFilter<"Reponse"> | string
    estCorrecte?: BoolFilter<"Reponse"> | boolean
    questionId?: IntFilter<"Reponse"> | number
  }

  export type QuestionCreateWithoutReponsesInput = {
    enonce: string
    categorie: string
    difficulte: number
    pointsValeur: number
  }

  export type QuestionUncheckedCreateWithoutReponsesInput = {
    id?: number
    enonce: string
    categorie: string
    difficulte: number
    pointsValeur: number
  }

  export type QuestionCreateOrConnectWithoutReponsesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutReponsesInput, QuestionUncheckedCreateWithoutReponsesInput>
  }

  export type QuestionUpsertWithoutReponsesInput = {
    update: XOR<QuestionUpdateWithoutReponsesInput, QuestionUncheckedUpdateWithoutReponsesInput>
    create: XOR<QuestionCreateWithoutReponsesInput, QuestionUncheckedCreateWithoutReponsesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutReponsesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutReponsesInput, QuestionUncheckedUpdateWithoutReponsesInput>
  }

  export type QuestionUpdateWithoutReponsesInput = {
    enonce?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    difficulte?: IntFieldUpdateOperationsInput | number
    pointsValeur?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateWithoutReponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    enonce?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    difficulte?: IntFieldUpdateOperationsInput | number
    pointsValeur?: IntFieldUpdateOperationsInput | number
  }

  export type UtilisateurCreateWithoutPartiesInput = {
    nomUtilisateur: string
    email: string
    motDePasseHash: string
    pointsTotaux?: number
    dateInscription?: Date | string
    lastLogin?: Date | string | null
    isVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
  }

  export type UtilisateurUncheckedCreateWithoutPartiesInput = {
    id?: number
    nomUtilisateur: string
    email: string
    motDePasseHash: string
    pointsTotaux?: number
    dateInscription?: Date | string
    lastLogin?: Date | string | null
    isVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpiresAt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiresAt?: Date | string | null
  }

  export type UtilisateurCreateOrConnectWithoutPartiesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutPartiesInput, UtilisateurUncheckedCreateWithoutPartiesInput>
  }

  export type UtilisateurUpsertWithoutPartiesInput = {
    update: XOR<UtilisateurUpdateWithoutPartiesInput, UtilisateurUncheckedUpdateWithoutPartiesInput>
    create: XOR<UtilisateurCreateWithoutPartiesInput, UtilisateurUncheckedCreateWithoutPartiesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutPartiesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutPartiesInput, UtilisateurUncheckedUpdateWithoutPartiesInput>
  }

  export type UtilisateurUpdateWithoutPartiesInput = {
    nomUtilisateur?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    pointsTotaux?: IntFieldUpdateOperationsInput | number
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UtilisateurUncheckedUpdateWithoutPartiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomUtilisateur?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    pointsTotaux?: IntFieldUpdateOperationsInput | number
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PartieCreateManyUtilisateurInput = {
    id?: number
    scoreObtenu: number
    totalQuestions: number
    pointsGagnes: number
    categorieJouee: string
    niveauDifficulte: number
    joueLe?: Date | string
  }

  export type PartieUpdateWithoutUtilisateurInput = {
    scoreObtenu?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    pointsGagnes?: IntFieldUpdateOperationsInput | number
    categorieJouee?: StringFieldUpdateOperationsInput | string
    niveauDifficulte?: IntFieldUpdateOperationsInput | number
    joueLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartieUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreObtenu?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    pointsGagnes?: IntFieldUpdateOperationsInput | number
    categorieJouee?: StringFieldUpdateOperationsInput | string
    niveauDifficulte?: IntFieldUpdateOperationsInput | number
    joueLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartieUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreObtenu?: IntFieldUpdateOperationsInput | number
    totalQuestions?: IntFieldUpdateOperationsInput | number
    pointsGagnes?: IntFieldUpdateOperationsInput | number
    categorieJouee?: StringFieldUpdateOperationsInput | string
    niveauDifficulte?: IntFieldUpdateOperationsInput | number
    joueLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponseCreateManyQuestionInput = {
    id?: number
    libelle: string
    estCorrecte?: boolean
  }

  export type ReponseUpdateWithoutQuestionInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    estCorrecte?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReponseUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    estCorrecte?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    estCorrecte?: BoolFieldUpdateOperationsInput | boolean
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