> # Class: ExtrinsicSignatureV2 <**S, T, V, E**>

**`name`** ExtrinsicSignature

**`description`** 
A container for the [Signature](../modules/_interfaces_runtime_types_.md#signature) associated with a specific [Extrinsic](../modules/_interfaces_runtime_types_.md#extrinsic)

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ExtrinsicSignatureV2**

  * [ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#type)
* [encodedLength](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#encodedlength)
* [era](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#era)
* [extra](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#extra)
* [hash](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#hash)
* [isEmpty](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#isempty)
* [isSigned](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#issigned)
* [nonce](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#nonce)
* [signature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signature)
* [signer](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signer)
* [tip](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tip)

### Methods

* [addSignature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#addsignature)
* [eq](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#eq)
* [get](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#get)
* [getAtIndex](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#getatindex)
* [sign](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#sign)
* [toArray](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#toarray)
* [toHex](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tohex)
* [toJSON](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tojson)
* [toRawType](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#torawtype)
* [toString](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tostring)
* [toU8a](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tou8a)
* [decodeExtrinsicSignature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#static-decodeextrinsicsignature)
* [with](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV2**(`value`: [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | `Uint8Array` | undefined, `__namedParameters`: object): *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:23](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) \| `Uint8Array` \| undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:47](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L47)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:70](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L70)*

**`description`** The [ExtrinsicEra](../modules/_interfaces_runtime_types_.md#extrinsicera) (mortal or immortal) this signature applies to

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  extra

• **get extra**(): *[ExtrinsicExtraV2](_primitive_extrinsic_v2_extrinsicextra_.extrinsicextrav2.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:63](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L63)*

**`description`** Returns the extra extrinsic info

**Returns:** *[ExtrinsicExtraV2](_primitive_extrinsic_v2_extrinsicextra_.extrinsicextrav2.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:56](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L56)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹*[Index](../modules/_interfaces_runtime_types_.md#index)*›*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:77](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L77)*

**`description`** The [Index](../modules/_interfaces_runtime_types_.md#index) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹*[Index](../modules/_interfaces_runtime_types_.md#index)*›*

___

###  signature

• **get signature**(): *[Signature](../modules/_interfaces_runtime_types_.md#signature)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:84](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L84)*

**`description`** The actuall [Signature](../modules/_interfaces_runtime_types_.md#signature) hash

**Returns:** *[Signature](../modules/_interfaces_runtime_types_.md#signature)*

___

###  signer

• **get signer**(): *[Address](_primitive_generic_address_.address.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:91](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L91)*

**`description`** The [Address](../modules/_interfaces_runtime_types_.md#address) that signed

**Returns:** *[Address](_primitive_generic_address_.address.md)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹*[Balance](../modules/_interfaces_runtime_types_.md#balance)*›*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:98](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L98)*

**`description`** The [Balance](../modules/_interfaces_runtime_types_.md#balance) tip

**Returns:** *[Compact](_codec_compact_.compact.md)‹*[Balance](../modules/_interfaces_runtime_types_.md#balance)*›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_primitive_generic_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:116](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L116)*

**`description`** Adds a raw signature

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_primitive_generic_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L188)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L196)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`method`: [Call](_primitive_generic_call_.call.md), `account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `__namedParameters`: object): *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:127](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L127)*

**`description`** Generate a payload and pplies the signature from a keypair

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Call](_primitive_generic_call_.call.md) |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`__namedParameters` | object |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L240)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L253)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:146](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L146)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(`value`: [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | `Uint8Array` | undefined, `isSigned`: boolean): *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | `Uint8Array`*

*Defined in [primitive/Extrinsic/v2/ExtrinsicSignature.ts:32](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) \| `Uint8Array` \| undefined | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | `Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*