> # Class: StorageFunctionMetadata <**S, T, V, E**>

**`name`** StorageFunctionMetadata

**`description`** 
The definition of a storage function

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **StorageFunctionMetadata**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v5_storage_.storagefunctionmetadata.md#constructor)

### Accessors

* [Type](_metadata_v5_storage_.storagefunctionmetadata.md#type)
* [documentation](_metadata_v5_storage_.storagefunctionmetadata.md#documentation)
* [encodedLength](_metadata_v5_storage_.storagefunctionmetadata.md#encodedlength)
* [fallback](_metadata_v5_storage_.storagefunctionmetadata.md#fallback)
* [hash](_metadata_v5_storage_.storagefunctionmetadata.md#hash)
* [isEmpty](_metadata_v5_storage_.storagefunctionmetadata.md#isempty)
* [modifier](_metadata_v5_storage_.storagefunctionmetadata.md#modifier)
* [name](_metadata_v5_storage_.storagefunctionmetadata.md#name)
* [type](_metadata_v5_storage_.storagefunctionmetadata.md#type)

### Methods

* [eq](_metadata_v5_storage_.storagefunctionmetadata.md#eq)
* [get](_metadata_v5_storage_.storagefunctionmetadata.md#get)
* [getAtIndex](_metadata_v5_storage_.storagefunctionmetadata.md#getatindex)
* [toArray](_metadata_v5_storage_.storagefunctionmetadata.md#toarray)
* [toHex](_metadata_v5_storage_.storagefunctionmetadata.md#tohex)
* [toJSON](_metadata_v5_storage_.storagefunctionmetadata.md#tojson)
* [toRawType](_metadata_v5_storage_.storagefunctionmetadata.md#torawtype)
* [toString](_metadata_v5_storage_.storagefunctionmetadata.md#tostring)
* [toU8a](_metadata_v5_storage_.storagefunctionmetadata.md#tou8a)
* [with](_metadata_v5_storage_.storagefunctionmetadata.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionMetadata**(`value?`: [StorageFunctionMetadataValue](../interfaces/_metadata_v5_storage_.storagefunctionmetadatavalue.md) | `Uint8Array`): *[StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v5/Storage.ts:114](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/Metadata/v5/Storage.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [StorageFunctionMetadataValue](../interfaces/_metadata_v5_storage_.storagefunctionmetadatavalue.md) \| `Uint8Array` |

**Returns:** *[StorageFunctionMetadata](_metadata_v5_storage_.storagefunctionmetadata.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  documentation

• **get documentation**(): *[Vec](_codec_vec_.vec.md)‹*[Text](_primitive_text_.text.md)*›*

*Defined in [Metadata/v5/Storage.ts:135](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/Metadata/v5/Storage.ts#L135)*

**`description`** The [Text](_primitive_text_.text.md) documentation

**Returns:** *[Vec](_codec_vec_.vec.md)‹*[Text](_primitive_text_.text.md)*›*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  fallback

• **get fallback**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [Metadata/v5/Storage.ts:128](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/Metadata/v5/Storage.ts#L128)*

**`description`** The default value of the storage function

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  modifier

• **get modifier**(): *[StorageFunctionModifier](_metadata_v0_storage_.storagefunctionmodifier.md)*

*Defined in [Metadata/v5/Storage.ts:149](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/Metadata/v5/Storage.ts#L149)*

**`description`** The modifier

**Returns:** *[StorageFunctionModifier](_metadata_v0_storage_.storagefunctionmodifier.md)*

___

###  name

• **get name**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v5/Storage.ts:142](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/Metadata/v5/Storage.ts#L142)*

**`description`** The key name

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  type

• **get type**(): *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

*Defined in [Metadata/v5/Storage.ts:156](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/Metadata/v5/Storage.ts#L156)*

**`description`** The [StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)

**Returns:** *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L240)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L253)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L261)*

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

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/f30354e/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*