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
* [ModulesWithCalls](_types_.md#moduleswithcalls)
* [RegistryTypes](_types_.md#registrytypes)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [types.ts:48](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L48)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Defined in [types.ts:60](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L60)*

___

###  AnyNumber

Ƭ **AnyNumber**: *`BN` | `Uint8Array` | number | string*

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L50)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L52)*

___

###  AnyU8a

Ƭ **AnyU8a**: *`Uint8Array` | number[] | string*

*Defined in [types.ts:54](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L54)*

___

###  ArgsDef

Ƭ **ArgsDef**: *`Record<string, Constructor>`*

*Defined in [types.ts:154](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L154)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [types.ts:41](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L41)*

#### Type declaration:

▸ (`result`: `T`): *void | `Promise<void>`*

**Parameters:**

Name | Type |
------ | ------ |
`result` | `T` |

___

###  Calls

Ƭ **Calls**: *`Record<string, CallFunction>`*

*Defined in [types.ts:26](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L26)*

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | `BN` | boolean | string | `Uint8Array` | boolean | number | string | undefined | `CodecArgArray` | `CodecArgObject`*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L39)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [types.ts:120](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L120)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *`Record<string, Constructor<T>>`*

*Defined in [types.ts:129](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L129)*

___

###  ModulesWithCalls

Ƭ **ModulesWithCalls**: *`Record<string, Calls>`*

*Defined in [types.ts:28](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L28)*

___

###  RegistryTypes

Ƭ **RegistryTypes**: *`Record<string, Constructor | string | Record<string, string> | object | object>`*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/types.ts#L131)*