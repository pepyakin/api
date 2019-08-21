> # Class: MetadataVersioned <**S, T, V, E**>

**`name`** MetadataVersioned

**`description`** 
The versioned runtime metadata as a decoded structure

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **MetadataVersioned**

  * [Metadata](_metadata_metadata_.metadata.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_metadataversioned_.metadataversioned.md#constructor)

### Accessors

* [Type](_metadata_metadataversioned_.metadataversioned.md#type)
* [asLatest](_metadata_metadataversioned_.metadataversioned.md#aslatest)
* [asV0](_metadata_metadataversioned_.metadataversioned.md#asv0)
* [asV1](_metadata_metadataversioned_.metadataversioned.md#asv1)
* [asV2](_metadata_metadataversioned_.metadataversioned.md#asv2)
* [asV3](_metadata_metadataversioned_.metadataversioned.md#asv3)
* [asV4](_metadata_metadataversioned_.metadataversioned.md#asv4)
* [asV5](_metadata_metadataversioned_.metadataversioned.md#asv5)
* [asV6](_metadata_metadataversioned_.metadataversioned.md#asv6)
* [asV7](_metadata_metadataversioned_.metadataversioned.md#asv7)
* [encodedLength](_metadata_metadataversioned_.metadataversioned.md#encodedlength)
* [hash](_metadata_metadataversioned_.metadataversioned.md#hash)
* [isEmpty](_metadata_metadataversioned_.metadataversioned.md#isempty)
* [magicNumber](_metadata_metadataversioned_.metadataversioned.md#magicnumber)
* [version](_metadata_metadataversioned_.metadataversioned.md#version)

### Methods

* [eq](_metadata_metadataversioned_.metadataversioned.md#eq)
* [get](_metadata_metadataversioned_.metadataversioned.md#get)
* [getAtIndex](_metadata_metadataversioned_.metadataversioned.md#getatindex)
* [getUniqTypes](_metadata_metadataversioned_.metadataversioned.md#getuniqtypes)
* [toArray](_metadata_metadataversioned_.metadataversioned.md#toarray)
* [toHex](_metadata_metadataversioned_.metadataversioned.md#tohex)
* [toJSON](_metadata_metadataversioned_.metadataversioned.md#tojson)
* [toRawType](_metadata_metadataversioned_.metadataversioned.md#torawtype)
* [toString](_metadata_metadataversioned_.metadataversioned.md#tostring)
* [toU8a](_metadata_metadataversioned_.metadataversioned.md#tou8a)
* [typesToMap](_metadata_metadataversioned_.metadataversioned.md#static-typestomap)
* [with](_metadata_metadataversioned_.metadataversioned.md#static-with)

## Constructors

###  constructor

\+ **new MetadataVersioned**(`value?`: any): *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/MetadataVersioned.ts:187](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  asLatest

• **get asLatest**(): *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

*Defined in [Metadata/MetadataVersioned.ts:299](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L299)*

**`description`** Returns the wrapped values as a latest version object

**Returns:** *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

___

###  asV0

• **get asV0**(): *[MetadataV0](../interfaces/_interfaces_metadata_types_.metadatav0.md)*

*Defined in [Metadata/MetadataVersioned.ts:241](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L241)*

**`description`** Returns the wrapped metadata as a V0 object

**Returns:** *[MetadataV0](../interfaces/_interfaces_metadata_types_.metadatav0.md)*

___

###  asV1

• **get asV1**(): *[MetadataV1](../interfaces/_interfaces_metadata_types_.metadatav1.md)*

*Defined in [Metadata/MetadataVersioned.ts:250](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L250)*

**`description`** Returns the wrapped values as a V1 object

**Returns:** *[MetadataV1](../interfaces/_interfaces_metadata_types_.metadatav1.md)*

___

###  asV2

• **get asV2**(): *[MetadataV2](_metadata_v2_metadata_.metadatav2.md)*

*Defined in [Metadata/MetadataVersioned.ts:257](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L257)*

**`description`** Returns the wrapped values as a V2 object

**Returns:** *[MetadataV2](_metadata_v2_metadata_.metadatav2.md)*

___

###  asV3

• **get asV3**(): *[MetadataV3](_metadata_v3_metadata_.metadatav3.md)*

*Defined in [Metadata/MetadataVersioned.ts:264](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L264)*

**`description`** Returns the wrapped values as a V3 object

**Returns:** *[MetadataV3](_metadata_v3_metadata_.metadatav3.md)*

___

###  asV4

• **get asV4**(): *[MetadataV4](_metadata_v4_metadata_.metadatav4.md)*

*Defined in [Metadata/MetadataVersioned.ts:271](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L271)*

**`description`** Returns the wrapped values as a V4 object

**Returns:** *[MetadataV4](_metadata_v4_metadata_.metadatav4.md)*

___

###  asV5

• **get asV5**(): *[MetadataV5](_metadata_v5_metadata_.metadatav5.md)*

*Defined in [Metadata/MetadataVersioned.ts:278](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L278)*

**`description`** Returns the wrapped values as a V5 object

**Returns:** *[MetadataV5](_metadata_v5_metadata_.metadatav5.md)*

___

###  asV6

• **get asV6**(): *[MetadataV6](_metadata_v6_metadata_.metadatav6.md)*

*Defined in [Metadata/MetadataVersioned.ts:285](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L285)*

**`description`** Returns the wrapped values as a V6 object

**Returns:** *[MetadataV6](_metadata_v6_metadata_.metadatav6.md)*

___

###  asV7

• **get asV7**(): *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

*Defined in [Metadata/MetadataVersioned.ts:292](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L292)*

**`description`** Returns the wrapped values as a V7 object

**Returns:** *[MetadataV7](_metadata_v7_metadata_.metadatav7.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  magicNumber

• **get magicNumber**(): *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

*Defined in [Metadata/MetadataVersioned.ts:220](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L220)*

**`description`** 

**Returns:** *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

___

###  version

• **get version**(): *number*

*Defined in [Metadata/MetadataVersioned.ts:234](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L234)*

**`description`** the metadata version this structure represents

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  getUniqTypes

▸ **getUniqTypes**(`throwError`: boolean): *string[]*

*Defined in [Metadata/MetadataVersioned.ts:303](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/Metadata/MetadataVersioned.ts#L303)*

**Parameters:**

Name | Type |
------ | ------ |
`throwError` | boolean |

**Returns:** *string[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L248)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L257)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L265)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: `Record<string, Constructor>`): *`Record<string, string>`*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, Constructor>` |

**Returns:** *`Record<string, string>`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/67d6c50/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*