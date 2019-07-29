> # Class: U8a

**`name`** U8a

**`description`** 
A basic wrapper around Uint8Array, with no frills and no fuss. It does differ
from other implementations where it will consume the full Uint8Array as passed to it.
As such it is meant to be subclassed where the wrapper takes care of the
actual lengths instead of used directly.

## Hierarchy

* `Uint8Array`

  * **U8a**

  * [Bytes](_primitive_bytes_.bytes.md)

  * [Data](_primitive_data_.data.md)

  * [U8aFixed](_codec_u8afixed_.u8afixed.md)

  * [ImmortalEra](_primitive_extrinsic_extrinsicera_.immortalera.md)

  * [Vote](_primitive_generic_vote_.vote.md)

  * [IHash](../interfaces/_types_.ihash.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_codec_u8a_.u8a.md#constructor)

### Properties

* [Uint8Array](_codec_u8a_.u8a.md#static-uint8array)

### Accessors

* [encodedLength](_codec_u8a_.u8a.md#encodedlength)
* [hash](_codec_u8a_.u8a.md#hash)
* [isEmpty](_codec_u8a_.u8a.md#isempty)
* [length](_codec_u8a_.u8a.md#length)

### Methods

* [bitLength](_codec_u8a_.u8a.md#bitlength)
* [eq](_codec_u8a_.u8a.md#eq)
* [subarray](_codec_u8a_.u8a.md#subarray)
* [toHex](_codec_u8a_.u8a.md#tohex)
* [toJSON](_codec_u8a_.u8a.md#tojson)
* [toRawType](_codec_u8a_.u8a.md#torawtype)
* [toString](_codec_u8a_.u8a.md#tostring)
* [toU8a](_codec_u8a_.u8a.md#tou8a)

## Constructors

###  constructor

\+ **new U8a**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[U8a](_codec_u8a_.u8a.md)*

*Defined in [codec/U8a.ts:19](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[U8a](_codec_u8a_.u8a.md)*

## Properties

### `Static` Uint8Array

▪ **Uint8Array**: *`Uint8ArrayConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:2232

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/U8a.ts:37](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L37)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L73)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Overrides void*

*Defined in [codec/U8a.ts:88](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L88)*

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

*Defined in [codec/U8a.ts:95](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L95)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/U8a.ts:102](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/U8a.ts:109](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L109)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [codec/U8a.ts:116](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/U8a.ts:125](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*