> # Class: Event <**S, T, V, E**>

**`name`** Event

**`description`** 
A representation of a system event. These are generated via the [Metadata](_metadata_metadata_.metadata.md) interfaces and
specific to a specific Substrate runtime

## Type parameters

▪ **S**: *`TypesDef`*

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
* [typesToMap](_primitive_generic_event_.event.md#static-typestomap)
* [with](_primitive_generic_event_.event.md#static-with)

## Constructors

###  constructor

\+ **new Event**(`_value?`: [Uint8Array](_codec_u8a_.u8a.md#static-uint8array)): *[Event](_primitive_generic_event_.event.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Generic/Event.ts:78](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`_value?` | [Uint8Array](_codec_u8a_.u8a.md#static-uint8array) |

**Returns:** *[Event](_primitive_generic_event_.event.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  data

• **get data**(): *[EventData](_primitive_generic_event_.eventdata.md)*

*Defined in [primitive/Generic/Event.ts:137](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L137)*

**`description`** The wrapped [EventData](_primitive_generic_event_.eventdata.md)

**Returns:** *[EventData](_primitive_generic_event_.eventdata.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *[EventId](../modules/_interfaces_system_types_.md#eventid)*

*Defined in [primitive/Generic/Event.ts:144](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L144)*

**`description`** The [EventId](../modules/_interfaces_system_types_.md#eventid), identifying the raw event

**Returns:** *[EventId](../modules/_interfaces_system_types_.md#eventid)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *[EventMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#eventmetadatav7)*

*Defined in [primitive/Generic/Event.ts:151](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L151)*

**`description`** The [[EventMetadata]] with the documentation

**Returns:** *[EventMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#eventmetadatav7)*

___

###  method

• **get method**(): *string*

*Defined in [primitive/Generic/Event.ts:158](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L158)*

**`description`** The method string identifying the event

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Defined in [primitive/Generic/Event.ts:165](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L165)*

**`description`** The section string identifying the event

**Returns:** *string*

___

###  typeDef

• **get typeDef**(): *[TypeDef](../interfaces/_codec_create_types_.typedef.md)[]*

*Defined in [primitive/Generic/Event.ts:172](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L172)*

**`description`** The [TypeDef](../interfaces/_codec_create_types_.typedef.md) for the event

**Returns:** *[TypeDef](../interfaces/_codec_create_types_.typedef.md)[]*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L203)*

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

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L248)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L257)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L265)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeEvent

▸ **decodeEvent**(`value`: `Uint8Array`): *object*

*Defined in [primitive/Generic/Event.ts:90](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L90)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | `Uint8Array` |  new Uint8Array() |

**Returns:** *object*

___

### `Static` injectMetadata

▸ **injectMetadata**(`metadata`: [Metadata](_metadata_metadata_.metadata.md)): *void*

*Defined in [primitive/Generic/Event.ts:113](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Generic/Event.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [Metadata](_metadata_metadata_.metadata.md) |

**Returns:** *void*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: `Record<string, Constructor>`): *`Record<string, string>`*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, Constructor>` |

**Returns:** *`Record<string, string>`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*