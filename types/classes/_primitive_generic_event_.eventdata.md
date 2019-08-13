> # Class: EventData

**`name`** EventData

**`description`** 
Wrapper for the actual data that forms part of an [Event](_primitive_generic_event_.event.md)

## Hierarchy

  * [Tuple](_codec_tuple_.tuple.md)

  * **EventData**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_event_.eventdata.md#constructor)

### Accessors

* [Types](_primitive_generic_event_.eventdata.md#types)
* [encodedLength](_primitive_generic_event_.eventdata.md#encodedlength)
* [hash](_primitive_generic_event_.eventdata.md#hash)
* [isEmpty](_primitive_generic_event_.eventdata.md#isempty)
* [length](_primitive_generic_event_.eventdata.md#length)
* [meta](_primitive_generic_event_.eventdata.md#meta)
* [method](_primitive_generic_event_.eventdata.md#method)
* [section](_primitive_generic_event_.eventdata.md#section)
* [typeDef](_primitive_generic_event_.eventdata.md#typedef)

### Methods

* [eq](_primitive_generic_event_.eventdata.md#eq)
* [filter](_primitive_generic_event_.eventdata.md#filter)
* [map](_primitive_generic_event_.eventdata.md#map)
* [toArray](_primitive_generic_event_.eventdata.md#toarray)
* [toHex](_primitive_generic_event_.eventdata.md#tohex)
* [toJSON](_primitive_generic_event_.eventdata.md#tojson)
* [toRawType](_primitive_generic_event_.eventdata.md#torawtype)
* [toString](_primitive_generic_event_.eventdata.md#tostring)
* [toU8a](_primitive_generic_event_.eventdata.md#tou8a)
* [with](_primitive_generic_event_.eventdata.md#static-with)

## Constructors

###  constructor

\+ **new EventData**(`Types`: [Constructor](../interfaces/_types_.constructor.md)[], `value`: `Uint8Array`, `typeDef`: [TypeDef](../interfaces/_codec_types_.typedef.md)[], `meta`: `EventMetadataV7`, `section`: string, `method`: string): *[EventData](_primitive_generic_event_.eventdata.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [primitive/Generic/Event.ts:32](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/primitive/Generic/Event.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | [Constructor](../interfaces/_types_.constructor.md)[] |
`value` | `Uint8Array` |
`typeDef` | [TypeDef](../interfaces/_codec_types_.typedef.md)[] |
`meta` | `EventMetadataV7` |
`section` | string |
`method` | string |

**Returns:** *[EventData](_primitive_generic_event_.eventdata.md)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/Tuple.ts#L81)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/Tuple.ts:70](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/Tuple.ts#L70)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [codec/AbstractArray.ts:34](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L34)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:41](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L41)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:48](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L48)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *`EventMetadataV7`*

*Defined in [primitive/Generic/Event.ts:46](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/primitive/Generic/Event.ts#L46)*

**`description`** The wrapped [EventMetadata](_metadata_v0_events_.eventmetadata.md)

**Returns:** *`EventMetadataV7`*

___

###  method

• **get method**(): *string*

*Defined in [primitive/Generic/Event.ts:53](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/primitive/Generic/Event.ts#L53)*

**`description`** The method as a string

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Defined in [primitive/Generic/Event.ts:60](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/primitive/Generic/Event.ts#L60)*

**`description`** The section as a string

**Returns:** *string*

___

###  typeDef

• **get typeDef**(): *[TypeDef](../interfaces/_codec_types_.typedef.md)[]*

*Defined in [primitive/Generic/Event.ts:67](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/primitive/Generic/Event.ts#L67)*

**`description`** The [TypeDef](../interfaces/_codec_types_.typedef.md) for this event

**Returns:** *[TypeDef](../interfaces/_codec_types_.typedef.md)[]*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:126](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L126)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:135](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L135)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:63](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L63)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:70](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L70)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:77](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/AbstractArray.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/Tuple.ts#L90)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/Tuple.ts#L103)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/Tuple.ts:112](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/Tuple.ts#L112)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TupleTypes`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/677e63b/packages/types/src/codec/Tuple.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TupleTypes` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*