> # Class: Call <**S, T, V, E**>

**`name`** Call

**`description`** 
Extrinsic function descriptor, as defined in
https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node.

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Call**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IMethod](../interfaces/_types_.imethod.md)

## Index

### Constructors

* [constructor](_primitive_generic_call_.call.md#constructor)

### Accessors

* [Type](_primitive_generic_call_.call.md#type)
* [args](_primitive_generic_call_.call.md#args)
* [argsDef](_primitive_generic_call_.call.md#argsdef)
* [callIndex](_primitive_generic_call_.call.md#callindex)
* [data](_primitive_generic_call_.call.md#data)
* [encodedLength](_primitive_generic_call_.call.md#encodedlength)
* [hasOrigin](_primitive_generic_call_.call.md#hasorigin)
* [hash](_primitive_generic_call_.call.md#hash)
* [isEmpty](_primitive_generic_call_.call.md#isempty)
* [meta](_primitive_generic_call_.call.md#meta)
* [methodName](_primitive_generic_call_.call.md#methodname)
* [sectionName](_primitive_generic_call_.call.md#sectionname)

### Methods

* [eq](_primitive_generic_call_.call.md#eq)
* [get](_primitive_generic_call_.call.md#get)
* [getAtIndex](_primitive_generic_call_.call.md#getatindex)
* [toArray](_primitive_generic_call_.call.md#toarray)
* [toHex](_primitive_generic_call_.call.md#tohex)
* [toJSON](_primitive_generic_call_.call.md#tojson)
* [toRawType](_primitive_generic_call_.call.md#torawtype)
* [toString](_primitive_generic_call_.call.md#tostring)
* [toU8a](_primitive_generic_call_.call.md#tou8a)
* [filterOrigin](_primitive_generic_call_.call.md#static-filterorigin)
* [findFunction](_primitive_generic_call_.call.md#static-findfunction)
* [injectMethods](_primitive_generic_call_.call.md#static-injectmethods)
* [with](_primitive_generic_call_.call.md#static-with)

## Constructors

###  constructor

\+ **new Call**(`value`: any, `meta?`: [FunctionMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatav7)): *[Call](_primitive_generic_call_.call.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Generic/Call.ts:49](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`meta?` | [FunctionMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatav7) |

**Returns:** *[Call](_primitive_generic_call_.call.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  args

• **get args**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [primitive/Generic/Call.ts:170](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L170)*

**`description`** The arguments for the function call

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_.md#argsdef)*

*Defined in [primitive/Generic/Call.ts:178](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L178)*

**`description`** Thge argument defintions

**Returns:** *[ArgsDef](../modules/_types_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *`Uint8Array`*

*Defined in [primitive/Generic/Call.ts:185](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L185)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *`Uint8Array`*

___

###  data

• **get data**(): *`Uint8Array`*

*Defined in [primitive/Generic/Call.ts:192](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L192)*

**`description`** The encoded data

**Returns:** *`Uint8Array`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [primitive/Generic/Call.ts:199](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L199)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *[FunctionMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatav7)*

*Defined in [primitive/Generic/Call.ts:208](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L208)*

**`description`** The [[FunctionMetadata]]

**Returns:** *[FunctionMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatav7)*

___

###  methodName

• **get methodName**(): *string*

*Defined in [primitive/Generic/Call.ts:215](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L215)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Defined in [primitive/Generic/Call.ts:222](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L222)*

**`description`** Returns the module containing the method

**Returns:** *string*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L203)*

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

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [primitive/Generic/Call.ts:229](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L229)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L253)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IMethod](../interfaces/_types_.imethod.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L261)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: [FunctionMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatav7)): *[FunctionArgumentMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionargumentmetadatav7)[]*

*Defined in [primitive/Generic/Call.ts:118](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [FunctionMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatav7) |

**Returns:** *[FunctionArgumentMetadataV7](../interfaces/_interfaceregistry_.interfaceregistry.md#functionargumentmetadatav7)[]*

___

### `Static` findFunction

▸ **findFunction**(`callIndex`: `Uint8Array`): *[CallFunction](../interfaces/_types_.callfunction.md)*

*Defined in [primitive/Generic/Call.ts:134](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | `Uint8Array` |

**Returns:** *[CallFunction](../interfaces/_types_.callfunction.md)*

___

### `Static` injectMethods

▸ **injectMethods**(`moduleMethods`: [ModulesWithCalls](../modules/_types_.md#moduleswithcalls)): *void*

*Defined in [primitive/Generic/Call.ts:159](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/primitive/Generic/Call.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`moduleMethods` | [ModulesWithCalls](../modules/_types_.md#moduleswithcalls) |

**Returns:** *void*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/c7c76f6/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*