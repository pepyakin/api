> # Class: StorageKey

**`name`** StorageKey

**`description`** 
A representation of a storage key (typically hashed) in the system. It can be
constructed by passing in a raw key or a StorageEntry with (optional) arguments.

## Hierarchy

  * [Bytes](_primitive_bytes_.bytes.md)

  * **StorageKey**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_storagekey_.storagekey.md#constructor)

### Accessors

* [encodedLength](_primitive_storagekey_.storagekey.md#encodedlength)
* [hash](_primitive_storagekey_.storagekey.md#hash)
* [isEmpty](_primitive_storagekey_.storagekey.md#isempty)
* [length](_primitive_storagekey_.storagekey.md#length)
* [meta](_primitive_storagekey_.storagekey.md#meta)
* [method](_primitive_storagekey_.storagekey.md#method)
* [outputType](_primitive_storagekey_.storagekey.md#outputtype)
* [section](_primitive_storagekey_.storagekey.md#section)

### Methods

* [bitLength](_primitive_storagekey_.storagekey.md#bitlength)
* [eq](_primitive_storagekey_.storagekey.md#eq)
* [subarray](_primitive_storagekey_.storagekey.md#subarray)
* [toHex](_primitive_storagekey_.storagekey.md#tohex)
* [toJSON](_primitive_storagekey_.storagekey.md#tojson)
* [toRawType](_primitive_storagekey_.storagekey.md#torawtype)
* [toString](_primitive_storagekey_.storagekey.md#tostring)
* [toU8a](_primitive_storagekey_.storagekey.md#tou8a)
* [decodeStorageKey](_primitive_storagekey_.storagekey.md#static-decodestoragekey)
* [getMeta](_primitive_storagekey_.storagekey.md#static-getmeta)
* [getType](_primitive_storagekey_.storagekey.md#static-gettype)

## Constructors

###  constructor

\+ **new StorageKey**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a) | [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any], `override`: `Partial<StorageKeyExtra>`): *[StorageKey](_primitive_storagekey_.storagekey.md)*

*Overrides [Bytes](_primitive_bytes_.bytes.md).[constructor](_primitive_bytes_.bytes.md#constructor)*

*Defined in [primitive/StorageKey.ts:45](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L45)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) \| [StorageKey](_primitive_storagekey_.storagekey.md) \| [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) \| [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] | - |
`override` | `Partial<StorageKeyExtra>` |  {} |

**Returns:** *[StorageKey](_primitive_storagekey_.storagekey.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[encodedLength](_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [primitive/Bytes.ts:65](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/Bytes.ts#L65)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[hash](_codec_u8a_.u8a.md#hash)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *`MetaV7` | undefined*

*Defined in [primitive/StorageKey.ts:122](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L122)*

**`description`** The metadata or `undefined` when not available

**Returns:** *`MetaV7` | undefined*

___

###  method

• **get method**(): *string | undefined*

*Defined in [primitive/StorageKey.ts:129](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L129)*

**`description`** The key method or `undefined` when not specified

**Returns:** *string | undefined*

___

###  outputType

• **get outputType**(): *string | undefined*

*Defined in [primitive/StorageKey.ts:136](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L136)*

**`description`** The output type, `null` when not available

**Returns:** *string | undefined*

___

###  section

• **get section**(): *string | undefined*

*Defined in [primitive/StorageKey.ts:143](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L143)*

**`description`** The key section or `undefined` when not specified

**Returns:** *string | undefined*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[bitLength](_codec_u8a_.u8a.md#bitlength)*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L73)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:88](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L88)*

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

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:95](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L95)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:102](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toRawType](_primitive_bytes_.bytes.md#torawtype)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [primitive/Bytes.ts:72](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/Bytes.ts#L72)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:116](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/codec/U8a.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toU8a](_primitive_bytes_.bytes.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [primitive/Bytes.ts:80](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/Bytes.ts#L80)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeStorageKey

▸ **decodeStorageKey**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a) | [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *`Decoded`*

*Defined in [primitive/StorageKey.ts:58](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) \| [StorageKey](_primitive_storagekey_.storagekey.md) \| [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) \| [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *`Decoded`*

___

### `Static` getMeta

▸ **getMeta**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *`MetaV7` | undefined*

*Defined in [primitive/StorageKey.ts:91](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) \| [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) \| [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *`MetaV7` | undefined*

___

### `Static` getType

▸ **getType**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *string | undefined*

*Defined in [primitive/StorageKey.ts:105](https://github.com/polkadot-js/api/blob/438c02d/packages/types/src/primitive/StorageKey.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) \| [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) \| [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *string | undefined*