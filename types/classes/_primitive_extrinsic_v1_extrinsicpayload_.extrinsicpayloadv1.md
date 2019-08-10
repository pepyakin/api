> # Class: ExtrinsicPayloadV1 <**S, T, V, E**>

**`name`** ExtrinsicPayloadV1

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

  1-8 bytes: The Transaction Compact<Index/Nonce> as provided in the transaction itself.
  2+ bytes: The Function Descriptor as provided in the transaction itself.
  1/2 bytes: The Transaction Era as provided in the transaction itself.
  32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ExtrinsicPayloadV1**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#type)
* [blockHash](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#blockhash)
* [encodedLength](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#encodedlength)
* [era](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#era)
* [hash](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#hash)
* [isEmpty](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#isempty)
* [method](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#method)
* [nonce](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#nonce)

### Methods

* [eq](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#eq)
* [get](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#get)
* [getAtIndex](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#getatindex)
* [sign](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#sign)
* [toArray](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#toarray)
* [toHex](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tohex)
* [toJSON](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tojson)
* [toRawType](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#torawtype)
* [toString](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tostring)
* [toU8a](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tou8a)
* [with](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV1**(`value?`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v1/ExtrinsicPayload.ts:26](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  blockHash

• **get blockHash**(): *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

*Defined in [primitive/Extrinsic/v1/ExtrinsicPayload.ts:39](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L39)*

**`description`** The block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/v1/ExtrinsicPayload.ts:53](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L53)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[U8a](_codec_u8a_.u8a.md)*

*Defined in [primitive/Extrinsic/v1/ExtrinsicPayload.ts:46](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L46)*

**`description`** The [U8a](_codec_u8a_.u8a.md) contained in the payload

**Returns:** *[U8a](_codec_u8a_.u8a.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹*[Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)*›*

*Defined in [primitive/Extrinsic/v1/ExtrinsicPayload.ts:60](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L60)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹*[Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)*›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L205)*

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

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L212)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md)): *`Uint8Array`*

*Defined in [primitive/Extrinsic/v1/ExtrinsicPayload.ts:68](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L68)*

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

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L270)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*