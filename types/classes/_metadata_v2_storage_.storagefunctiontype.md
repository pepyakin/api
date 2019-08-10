> # Class: StorageFunctionType

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **StorageFunctionType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v2_storage_.storagefunctiontype.md#constructor)

### Accessors

* [asMap](_metadata_v2_storage_.storagefunctiontype.md#asmap)
* [asType](_metadata_v2_storage_.storagefunctiontype.md#astype)
* [encodedLength](_metadata_v2_storage_.storagefunctiontype.md#encodedlength)
* [hash](_metadata_v2_storage_.storagefunctiontype.md#hash)
* [index](_metadata_v2_storage_.storagefunctiontype.md#index)
* [isEmpty](_metadata_v2_storage_.storagefunctiontype.md#isempty)
* [isMap](_metadata_v2_storage_.storagefunctiontype.md#ismap)
* [isNone](_metadata_v2_storage_.storagefunctiontype.md#isnone)
* [isNull](_metadata_v2_storage_.storagefunctiontype.md#isnull)
* [isPlainType](_metadata_v2_storage_.storagefunctiontype.md#isplaintype)
* [type](_metadata_v2_storage_.storagefunctiontype.md#type)
* [value](_metadata_v2_storage_.storagefunctiontype.md#value)

### Methods

* [eq](_metadata_v2_storage_.storagefunctiontype.md#eq)
* [toHex](_metadata_v2_storage_.storagefunctiontype.md#tohex)
* [toJSON](_metadata_v2_storage_.storagefunctiontype.md#tojson)
* [toNumber](_metadata_v2_storage_.storagefunctiontype.md#tonumber)
* [toRawType](_metadata_v2_storage_.storagefunctiontype.md#torawtype)
* [toString](_metadata_v2_storage_.storagefunctiontype.md#tostring)
* [toU8a](_metadata_v2_storage_.storagefunctiontype.md#tou8a)
* [with](_metadata_v2_storage_.storagefunctiontype.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionType**(`value?`: any, `index?`: undefined | number): *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [Metadata/v2/Storage.ts:55](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/Metadata/v2/Storage.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |
`index?` | undefined \| number |

**Returns:** *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

## Accessors

###  asMap

• **get asMap**(): *[MapType](_metadata_v2_storage_.maptype.md)*

*Defined in [Metadata/v2/Storage.ts:66](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/Metadata/v2/Storage.ts#L66)*

**`description`** The value as a mapped value

**Returns:** *[MapType](_metadata_v2_storage_.maptype.md)*

___

###  asType

• **get asType**(): *[PlainType](_metadata_v0_storage_.plaintype.md)*

*Defined in [Metadata/v2/Storage.ts:75](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/Metadata/v2/Storage.ts#L75)*

**`description`** The value as a [Type](_codec_struct_.struct.md#type) value

**Returns:** *[PlainType](_metadata_v0_storage_.plaintype.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L165)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L172)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isMap

• **get isMap**(): *boolean*

*Defined in [Metadata/v2/Storage.ts:84](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/Metadata/v2/Storage.ts#L84)*

**`description`** `true` if the storage entry is a map

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L179)*

**`description`** Checks if the Enum points to a [Null](../enums/_codec_types_.typedefinfo.md#null) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L186)*

**`description`** Checks if the Enum points to a [Null](../enums/_codec_types_.typedefinfo.md#null) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isPlainType

• **get isPlainType**(): *boolean*

*Defined in [Metadata/v2/Storage.ts:91](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/Metadata/v2/Storage.ts#L91)*

**`description`** `true` if the storage entry is a plain type

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:193](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L193)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:200](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L200)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/EnumType.ts:207](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L207)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/EnumType.ts:222](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L222)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:229](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L229)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:238](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L238)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:245](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L245)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [Metadata/v2/Storage.ts:98](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/Metadata/v2/Storage.ts#L98)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:270](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L270)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*