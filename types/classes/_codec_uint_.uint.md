> # Class: UInt

**`name`** UInt

**`description`** 
A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
this handles the encoding and decoding of those numbers. Upon construction
the bitLength is provided and any additional use keeps the number to this
length. This extends `BN`, so all methods available on a normal `BN` object
is available here.

## Hierarchy

* `AbstractInt`

  * **UInt**

  * [U64](_primitive_u64_.u64.md)

  * [U16](_primitive_u16_.u16.md)

  * [U8](_primitive_u8_.u8.md)

  * [U128](_primitive_u128_.u128.md)

  * [U256](_primitive_u256_.u256.md)

  * [U32](_primitive_u32_.u32.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_uint_.uint.md#constructor)

### Methods

* [toHex](_codec_uint_.uint.md#tohex)
* [toRawType](_codec_uint_.uint.md#torawtype)
* [toU8a](_codec_uint_.uint.md#tou8a)

## Constructors

###  constructor

\+ **new UInt**(`value`: [AnyNumber](../modules/_types_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[UInt](_codec_uint_.uint.md)*

*Overrides void*

*Defined in [codec/UInt.ts:22](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/UInt.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** *[UInt](_codec_uint_.uint.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*