> # Class: ExtrinsicPayload

**`name`** ExtrinsicPayload

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Hierarchy

* [Base](_codec_base_.base.md)‹*[ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md) | [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md) | [ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*›

  * **ExtrinsicPayload**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#constructor)

### Accessors

* [blockHash](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#blockhash)
* [encodedLength](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#encodedlength)
* [era](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#era)
* [genesisHash](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#genesishash)
* [hash](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#hash)
* [isEmpty](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#isempty)
* [method](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#method)
* [nonce](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#nonce)
* [tip](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tip)

### Methods

* [eq](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#eq)
* [sign](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#sign)
* [toHex](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tohex)
* [toJSON](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tojson)
* [toRawType](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#torawtype)
* [toString](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tostring)
* [toU8a](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tou8a)
* [decodeExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#static-decodeextrinsicpayload)

## Constructors

###  constructor

\+ **new ExtrinsicPayload**(`value`: `Partial<ExtrinsicPayloadValue>` | `Uint8Array` | string | undefined, `__namedParameters`: object): *[ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:30](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | `Partial<ExtrinsicPayloadValue>` \| `Uint8Array` \| string \| undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)*

## Accessors

###  blockHash

• **get blockHash**(): *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:53](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L53)*

**`description`** The block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Base.ts:25](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/codec/Base.ts#L25)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:60](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L60)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  genesisHash

• **get genesisHash**(): *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:67](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L67)*

**`description`** The genesis block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to

**Returns:** *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[U8a](_codec_u8a_.u8a.md)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:75](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L75)*

**`description`** The [U8a](_codec_u8a_.u8a.md) contained in the payload

**Returns:** *[U8a](_codec_u8a_.u8a.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹*[Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)*›*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:82](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L82)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹*[Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)*›*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹*[Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance)*›*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:89](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L89)*

**`description`** The [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance)

**Returns:** *[Compact](_codec_compact_.compact.md)‹*[Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance)*›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:97](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L97)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md)): *object*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:104](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L104)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |

**Returns:** *object*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Base.ts:53](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/codec/Base.ts#L53)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:119](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L119)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Base.ts:82](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/codec/Base.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:126](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L126)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Base.ts:75](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/codec/Base.ts#L75)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeExtrinsicPayload

▸ **decodeExtrinsicPayload**(`value`: [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string | undefined, `version`: number): *[ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md) | [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md) | [ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*

*Defined in [primitive/Extrinsic/ExtrinsicPayload.ts:37](https://github.com/polkadot-js/api/blob/a39cacc/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) \| [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string \| undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *[ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md) | [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md) | [ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*