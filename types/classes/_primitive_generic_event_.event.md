> # Class: Event <**S, T, V, E**>

**`name`** Event

**`description`** 
A representation of a system event. These are generated via the [Metadata](_metadata_metadata_.metadata.md) interfaces and
specific to a specific Substrate runtime

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Event**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_event_.event.md#constructor)

### Accessors

* [Type](_primitive_generic_event_.event.md#type)
* [data](_primitive_generic_event_.event.md#data)
* [encodedLength](_primitive_generic_event_.event.md#encodedlength)
* [hash](_primitive_generic_event_.event.md#hash)
* [index](_primitive_generic_event_.event.md#index)
* [isEmpty](_primitive_generic_event_.event.md#isempty)
* [meta](_primitive_generic_event_.event.md#meta)
* [method](_primitive_generic_event_.event.md#method)
* [section](_primitive_generic_event_.event.md#section)
* [typeDef](_primitive_generic_event_.event.md#typedef)

### Methods

* [eq](_primitive_generic_event_.event.md#eq)
* [get](_primitive_generic_event_.event.md#get)
* [getAtIndex](_primitive_generic_event_.event.md#getatindex)
* [toArray](_primitive_generic_event_.event.md#toarray)
* [toHex](_primitive_generic_event_.event.md#tohex)
* [toJSON](_primitive_generic_event_.event.md#tojson)
* [toRawType](_primitive_generic_event_.event.md#torawtype)
* [toString](_primitive_generic_event_.event.md#tostring)
* [toU8a](_primitive_generic_event_.event.md#tou8a)
* [decodeEvent](_primitive_generic_event_.event.md#static-decodeevent)
* [injectMetadata](_primitive_generic_event_.event.md#static-injectmetadata)
* [with](_primitive_generic_event_.event.md#static-with)

## Constructors

###  constructor

\+ **new Event**(`_value?`: [Uint8Array](_codec_u8a_.u8a.md#static-uint8array)): *[Event](_primitive_generic_event_.event.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Generic/Event.ts:79](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`_value?` | [Uint8Array](_codec_u8a_.u8a.md#static-uint8array) |

**Returns:** *[Event](_primitive_generic_event_.event.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  data

• **get data**(): *[EventData](_primitive_generic_event_.eventdata.md)*

*Defined in [primitive/Generic/Event.ts:138](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L138)*

**`description`** The wrapped [EventData](_primitive_generic_event_.eventdata.md)

**Returns:** *[EventData](_primitive_generic_event_.eventdata.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *[EventId](../modules/_interfaces_system_types_.md#eventid)*

*Defined in [primitive/Generic/Event.ts:145](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L145)*

**`description`** The [EventId](../modules/_interfaces_system_types_.md#eventid), identifying the raw event

**Returns:** *[EventId](../modules/_interfaces_system_types_.md#eventid)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *`EventMetadataV7`*

*Defined in [primitive/Generic/Event.ts:152](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L152)*

**`description`** The [EventMetadata](_metadata_v0_events_.eventmetadata.md) with the documentation

**Returns:** *`EventMetadataV7`*

___

###  method

• **get method**(): *string*

*Defined in [primitive/Generic/Event.ts:159](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L159)*

**`description`** The method string identifying the event

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Defined in [primitive/Generic/Event.ts:166](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L166)*

**`description`** The section string identifying the event

**Returns:** *string*

___

###  typeDef

• **get typeDef**(): *[TypeDef](../interfaces/_codec_types_.typedef.md)[]*

*Defined in [primitive/Generic/Event.ts:173](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L173)*

**`description`** The [TypeDef](../interfaces/_codec_types_.typedef.md) for the event

**Returns:** *[TypeDef](../interfaces/_codec_types_.typedef.md)[]*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L205)*

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

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L212)*

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

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L270)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeEvent

▸ **decodeEvent**(`value`: `Uint8Array`): *object*

*Defined in [primitive/Generic/Event.ts:91](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L91)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | `Uint8Array` |  new Uint8Array() |

**Returns:** *object*

___

### `Static` injectMetadata

▸ **injectMetadata**(`metadata`: [Metadata](_metadata_metadata_.metadata.md)): *void*

*Defined in [primitive/Generic/Event.ts:114](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/primitive/Generic/Event.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [Metadata](_metadata_metadata_.metadata.md) |

**Returns:** *void*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*