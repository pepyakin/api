> # External module: "types"

## Index

### Interfaces

* [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)
* [AnyJsonObject](../interfaces/_types_.anyjsonobject.md)
* [CallFunction](../interfaces/_types_.callfunction.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)
* [IHash](../interfaces/_types_.ihash.md)
* [IKeyringPair](../interfaces/_types_.ikeyringpair.md)
* [IMethod](../interfaces/_types_.imethod.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)
* [SignatureOptions](../interfaces/_types_.signatureoptions.md)

### Type aliases

* [AnyFunction](_types_.md#anyfunction)
* [AnyJson](_types_.md#anyjson)
* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [ArgsDef](_types_.md#argsdef)
* [Callback](_types_.md#callback)
* [Calls](_types_.md#calls)
* [CodecArg](_types_.md#codecarg)
* [CodecTo](_types_.md#codecto)
* [ConstructorDef](_types_.md#constructordef)
* [InterfaceTypes](_types_.md#interfacetypes)
* [ModulesWithCalls](_types_.md#moduleswithcalls)
* [RegistryTypes](_types_.md#registrytypes)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [types.ts:51](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L51)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Defined in [types.ts:63](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L63)*

___

###  AnyNumber

Ƭ **AnyNumber**: *`BN` | `Uint8Array` | number | string*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L53)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L55)*

___

###  AnyU8a

Ƭ **AnyU8a**: *`Uint8Array` | number[] | string*

*Defined in [types.ts:57](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L57)*

___

###  ArgsDef

Ƭ **ArgsDef**: *`Record<string, Constructor>`*

*Defined in [types.ts:155](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L155)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [types.ts:44](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L44)*

#### Type declaration:

▸ (`result`: `T`): *void | `Promise<void>`*

**Parameters:**

Name | Type |
------ | ------ |
`result` | `T` |

___

###  Calls

Ƭ **Calls**: *`Record<string, CallFunction>`*

*Defined in [types.ts:29](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L29)*

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | `BN` | boolean | string | `Uint8Array` | boolean | number | string | undefined | `CodecArgArray` | `CodecArgObject`*

*Defined in [types.ts:42](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L42)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [types.ts:123](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L123)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *`Record<string, Constructor<T>>`*

*Defined in [types.ts:130](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L130)*

___

###  InterfaceTypes

Ƭ **InterfaceTypes**: *keyof InterfaceRegistry*

*Defined in [types.ts:18](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L18)*

___

###  ModulesWithCalls

Ƭ **ModulesWithCalls**: *`Record<string, Calls>`*

*Defined in [types.ts:31](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L31)*

___

###  RegistryTypes

Ƭ **RegistryTypes**: *`Record<string, Constructor | string | Record<string, string> | object | object>`*

*Defined in [types.ts:132](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/types.ts#L132)*