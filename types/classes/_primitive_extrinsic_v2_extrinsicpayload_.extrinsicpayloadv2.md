> # Class: ExtrinsicPayloadV2 <**S, T, V, E**>

**`name`** ExtrinsicPayloadV2

**`description`** 
A signing payload for an [Extrinsic](../modules/_interfaces_runtime_types_.md#extrinsic). For the final encoding, it is variable length based
on the contents included

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ExtrinsicPayloadV2**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#type)
* [blockHash](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#blockhash)
* [encodedLength](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#encodedlength)
* [era](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#era)
* [hash](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#hash)
* [isEmpty](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#isempty)
* [method](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#method)
* [nonce](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#nonce)
* [tip](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tip)

### Methods

* [eq](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#eq)
* [get](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#get)
* [getAtIndex](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#getatindex)
* [sign](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#sign)
* [toArray](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#toarray)
* [toHex](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tohex)
* [toJSON](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tojson)
* [toRawType](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#torawtype)
* [toString](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tostring)
* [toU8a](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tou8a)
* [typesToMap](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#static-typestomap)
* [with](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV2**(`value?`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:28](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  blockHash

• **get blockHash**(): *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:42](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L42)*

**`description`** The block [Hash](../modules/_interfaces_runtime_types_.md#hash) the signature applies to (mortal/immortal)

**Returns:** *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:49](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L49)*

**`description`** The [ExtrinsicEra](../modules/_interfaces_runtime_types_.md#extrinsicera)

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:56](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L56)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹*[Index](../modules/_interfaces_runtime_types_.md#index)*›*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:63](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L63)*

**`description`** The [Index](../modules/_interfaces_runtime_types_.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹*[Index](../modules/_interfaces_runtime_types_.md#index)*›*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹*[Balance](../modules/_interfaces_runtime_types_.md#balance)*›*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:70](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L70)*

**`description`** The tip [Balance](../modules/_interfaces_runtime_types_.md#balance)

**Returns:** *[Compact](_codec_compact_.compact.md)‹*[Balance](../modules/_interfaces_runtime_types_.md#balance)*›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md)): *`Uint8Array`*

*Defined in [primitive/Extrinsic/v2/ExtrinsicPayload.ts:77](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L77)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |

**Returns:** *`Uint8Array`*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L248)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L257)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L265)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: `Record<string, Constructor>`): *`Record<string, string>`*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, Constructor>` |

**Returns:** *`Record<string, string>`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/dc1104b/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*