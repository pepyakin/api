> # Class: H256

**`name`** H256

**`description`** 
Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and
as a sane default for fixed-length hash representations.

## Hierarchy

  * [U8aFixed](_codec_u8afixed_.u8afixed.md)

  * **H256**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IHash](../interfaces/_types_.ihash.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_h256_.h256.md#constructor)

### Accessors

* [encodedLength](_primitive_h256_.h256.md#encodedlength)
* [hash](_primitive_h256_.h256.md#hash)
* [isEmpty](_primitive_h256_.h256.md#isempty)
* [length](_primitive_h256_.h256.md#length)

### Methods

* [bitLength](_primitive_h256_.h256.md#bitlength)
* [eq](_primitive_h256_.h256.md#eq)
* [subarray](_primitive_h256_.h256.md#subarray)
* [toHex](_primitive_h256_.h256.md#tohex)
* [toJSON](_primitive_h256_.h256.md#tojson)
* [toRawType](_primitive_h256_.h256.md#torawtype)
* [toString](_primitive_h256_.h256.md#tostring)
* [toU8a](_primitive_h256_.h256.md#tou8a)
* [with](_primitive_h256_.h256.md#static-with)

## Constructors

###  constructor

\+ **new H256**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[H256](_primitive_h256_.h256.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [primitive/H256.ts:15](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/primitive/H256.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[H256](_primitive_h256_.h256.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:37](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L37)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[hash](_codec_u8a_.u8a.md#hash)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[bitLength](_codec_u8a_.u8a.md#bitlength)*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L73)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:88](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L88)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined \| number | The position to end at  |

**Returns:** *`Uint8Array`*

___

###  toHex

▸ **toHex**(): *string*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:95](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L95)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:102](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [primitive/H256.ts:23](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/primitive/H256.ts#L23)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:116](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:125](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8a.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*