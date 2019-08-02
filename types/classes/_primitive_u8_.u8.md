> # Class: U8

**`name`** U8

**`description`** 
An 8-bit unsigned integer

## Hierarchy

  * [UInt](_codec_uint_.uint.md)

  * **U8**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_u8_.u8.md#constructor)

### Methods

* [toHex](_primitive_u8_.u8.md#tohex)
* [toRawType](_primitive_u8_.u8.md#torawtype)
* [toU8a](_primitive_u8_.u8.md#tou8a)

## Constructors

###  constructor

\+ **new U8**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[U8](_primitive_u8_.u8.md)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U8.ts:14](https://github.com/polkadot-js/api/blob/1706309/packages/types/src/primitive/U8.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[U8](_primitive_u8_.u8.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/1706309/packages/types/src/codec/UInt.ts#L37)*

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

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/1706309/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/1706309/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*