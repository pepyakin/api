> # Class: ModuleMetadata <**S, T, V, E**>

**`name`** ModuleMetadata

**`description`** 
The definition of a module in the system

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ModuleMetadata**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v7_metadata_.modulemetadata.md#constructor)

### Accessors

* [Type](_metadata_v7_metadata_.modulemetadata.md#type)
* [calls](_metadata_v7_metadata_.modulemetadata.md#calls)
* [constants](_metadata_v7_metadata_.modulemetadata.md#constants)
* [encodedLength](_metadata_v7_metadata_.modulemetadata.md#encodedlength)
* [events](_metadata_v7_metadata_.modulemetadata.md#events)
* [hash](_metadata_v7_metadata_.modulemetadata.md#hash)
* [isEmpty](_metadata_v7_metadata_.modulemetadata.md#isempty)
* [name](_metadata_v7_metadata_.modulemetadata.md#name)
* [prefix](_metadata_v7_metadata_.modulemetadata.md#prefix)
* [storage](_metadata_v7_metadata_.modulemetadata.md#storage)

### Methods

* [eq](_metadata_v7_metadata_.modulemetadata.md#eq)
* [get](_metadata_v7_metadata_.modulemetadata.md#get)
* [getAtIndex](_metadata_v7_metadata_.modulemetadata.md#getatindex)
* [toArray](_metadata_v7_metadata_.modulemetadata.md#toarray)
* [toHex](_metadata_v7_metadata_.modulemetadata.md#tohex)
* [toJSON](_metadata_v7_metadata_.modulemetadata.md#tojson)
* [toRawType](_metadata_v7_metadata_.modulemetadata.md#torawtype)
* [toString](_metadata_v7_metadata_.modulemetadata.md#tostring)
* [toU8a](_metadata_v7_metadata_.modulemetadata.md#tou8a)
* [with](_metadata_v7_metadata_.modulemetadata.md#static-with)

## Constructors

###  constructor

\+ **new ModuleMetadata**(`value?`: any): *[ModuleMetadata](_metadata_v7_metadata_.modulemetadata.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v7/Metadata.ts:23](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/Metadata/v7/Metadata.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[ModuleMetadata](_metadata_v7_metadata_.modulemetadata.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  calls

• **get calls**(): *[Option](_codec_option_.option.md)‹*[Vec](_codec_vec_.vec.md)‹*[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*›*›*

*Defined in [Metadata/v7/Metadata.ts:37](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/Metadata/v7/Metadata.ts#L37)*

**`description`** the module calls

**Returns:** *[Option](_codec_option_.option.md)‹*[Vec](_codec_vec_.vec.md)‹*[FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)*›*›*

___

###  constants

• **get constants**(): *[Vec](_codec_vec_.vec.md)‹*[ModuleConstantMetadata](_metadata_v6_constants_.moduleconstantmetadata.md)*›*

*Defined in [Metadata/v7/Metadata.ts:44](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/Metadata/v7/Metadata.ts#L44)*

**`description`** the module constants

**Returns:** *[Vec](_codec_vec_.vec.md)‹*[ModuleConstantMetadata](_metadata_v6_constants_.moduleconstantmetadata.md)*›*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  events

• **get events**(): *[Option](_codec_option_.option.md)‹*[Vec](_codec_vec_.vec.md)‹*[EventMetadata](_metadata_v0_events_.eventmetadata.md)*›*›*

*Defined in [Metadata/v7/Metadata.ts:51](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/Metadata/v7/Metadata.ts#L51)*

**`description`** the module events

**Returns:** *[Option](_codec_option_.option.md)‹*[Vec](_codec_vec_.vec.md)‹*[EventMetadata](_metadata_v0_events_.eventmetadata.md)*›*›*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  name

• **get name**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v7/Metadata.ts:58](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/Metadata/v7/Metadata.ts#L58)*

**`description`** the module name

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  prefix

• **get prefix**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v7/Metadata.ts:65](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/Metadata/v7/Metadata.ts#L65)*

**`description`** the module prefix

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  storage

• **get storage**(): *[Option](_codec_option_.option.md)‹*[StorageMetadata](_metadata_v7_storage_.storagemetadata.md)*›*

*Defined in [Metadata/v7/Metadata.ts:72](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/Metadata/v7/Metadata.ts#L72)*

**`description`** the associated module storage

**Returns:** *[Option](_codec_option_.option.md)‹*[StorageMetadata](_metadata_v7_storage_.storagemetadata.md)*›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L205)*

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

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L212)*

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

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L270)*

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

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/54e9a81/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*