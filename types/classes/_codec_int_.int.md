> # Class: Int

**`name`** Int

**`description`** 
A generic signed integer codec. For Substrate all numbers are Little Endian encoded,
this handles the encoding and decoding of those numbers. Upon construction
the bitLength is provided and any additional use keeps the number to this
length. This extends `BN`, so all methods available on a normal `BN` object
is available here.

## Hierarchy

* `AbstractInt`

  * **Int**

  * [I8](_primitive_i8_.i8.md)

  * [I16](_primitive_i16_.i16.md)

  * [I32](_primitive_i32_.i32.md)

  * [I64](_primitive_i64_.i64.md)

  * [I128](_primitive_i128_.i128.md)

  * [I256](_primitive_i256_.i256.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_int_.int.md#constructor)

### Methods

* [toHex](_codec_int_.int.md#tohex)
* [toRawType](_codec_int_.int.md#torawtype)
* [toU8a](_codec_int_.int.md#tou8a)

## Constructors

###  constructor

\+ **new Int**(`value`: [AnyNumber](../modules/_types_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[Int](_codec_int_.int.md)*

*Overrides void*

*Defined in [codec/Int.ts:21](https://github.com/polkadot-js/api/blob/782f4f1/packages/types/src/codec/Int.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_UINT_BITS |
`isHexJson` | boolean | true |

**Returns:** *[Int](_codec_int_.int.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Overrides void*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/782f4f1/packages/types/src/codec/Int.ts#L36)*

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

*Defined in [codec/Int.ts:47](https://github.com/polkadot-js/api/blob/782f4f1/packages/types/src/codec/Int.ts#L47)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [codec/Int.ts:56](https://github.com/polkadot-js/api/blob/782f4f1/packages/types/src/codec/Int.ts#L56)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*