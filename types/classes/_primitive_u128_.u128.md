> # Class: U128

**`name`** U128

**`description`** 
A 128-bit unsigned integer

## Hierarchy

  * [UInt](_codec_uint_.uint.md)

  * **U128**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_u128_.u128.md#constructor)

### Methods

* [toHex](_primitive_u128_.u128.md#tohex)
* [toRawType](_primitive_u128_.u128.md#torawtype)
* [toU8a](_primitive_u128_.u128.md#tou8a)

## Constructors

###  constructor

\+ **new U128**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[U128](_primitive_u128_.u128.md)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U128.ts:14](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/U128.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[U128](_primitive_u128_.u128.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/UInt.ts#L37)*

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

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*