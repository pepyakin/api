> # Class: MagicNumber

## Hierarchy

  * [U32](_primitive_u32_.u32.md)

  * **MagicNumber**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_magicnumber_.magicnumber.md#constructor)

### Methods

* [toHex](_metadata_magicnumber_.magicnumber.md#tohex)
* [toRawType](_metadata_magicnumber_.magicnumber.md#torawtype)
* [toU8a](_metadata_magicnumber_.magicnumber.md#tou8a)

## Constructors

###  constructor

\+ **new MagicNumber**(`value?`: any): *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

*Overrides [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Defined in [Metadata/MagicNumber.ts:11](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/Metadata/MagicNumber.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/UInt.ts#L37)*

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

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*