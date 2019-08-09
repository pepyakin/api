> # Interface: RuntimeVersion <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](../classes/_codec_struct_.struct.md)

  * **RuntimeVersion**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_rpc_types_.runtimeversion.md#constructor)

### Properties

* [apis](_interfaces_rpc_types_.runtimeversion.md#apis)
* [authoringVersion](_interfaces_rpc_types_.runtimeversion.md#authoringversion)
* [implName](_interfaces_rpc_types_.runtimeversion.md#implname)
* [implVersion](_interfaces_rpc_types_.runtimeversion.md#implversion)
* [specName](_interfaces_rpc_types_.runtimeversion.md#specname)
* [specVersion](_interfaces_rpc_types_.runtimeversion.md#specversion)

### Accessors

* [Type](_interfaces_rpc_types_.runtimeversion.md#type)
* [encodedLength](_interfaces_rpc_types_.runtimeversion.md#encodedlength)
* [hash](_interfaces_rpc_types_.runtimeversion.md#hash)
* [isEmpty](_interfaces_rpc_types_.runtimeversion.md#isempty)

### Methods

* [eq](_interfaces_rpc_types_.runtimeversion.md#eq)
* [get](_interfaces_rpc_types_.runtimeversion.md#get)
* [getAtIndex](_interfaces_rpc_types_.runtimeversion.md#getatindex)
* [toArray](_interfaces_rpc_types_.runtimeversion.md#toarray)
* [toHex](_interfaces_rpc_types_.runtimeversion.md#tohex)
* [toJSON](_interfaces_rpc_types_.runtimeversion.md#tojson)
* [toRawType](_interfaces_rpc_types_.runtimeversion.md#torawtype)
* [toString](_interfaces_rpc_types_.runtimeversion.md#tostring)
* [toU8a](_interfaces_rpc_types_.runtimeversion.md#tou8a)
* [with](_interfaces_rpc_types_.runtimeversion.md#static-with)

## Constructors

###  constructor

\+ **new RuntimeVersion**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[] | string, `jsonMap`: `Map<keyof S, string>`): *[RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] \| string |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)*

## Properties

###  apis

• **apis**: *[Vec](../classes/_codec_vec_.vec.md)‹*[RuntimeVersionApi](../modules/_interfaces_rpc_types_.md#runtimeversionapi)*›*

*Defined in [interfaces/rpc/types.ts:101](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/interfaces/rpc/types.ts#L101)*

Vec<RuntimeVersionApi>

___

###  authoringVersion

• **authoringVersion**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/rpc/types.ts:95](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/interfaces/rpc/types.ts#L95)*

u32

___

###  implName

• **implName**: *[Text](../classes/_primitive_text_.text.md)*

*Defined in [interfaces/rpc/types.ts:93](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/interfaces/rpc/types.ts#L93)*

Text

___

###  implVersion

• **implVersion**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/rpc/types.ts:99](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/interfaces/rpc/types.ts#L99)*

u32

___

###  specName

• **specName**: *[Text](../classes/_primitive_text_.text.md)*

*Defined in [interfaces/rpc/types.ts:91](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/interfaces/rpc/types.ts#L91)*

Text

___

###  specVersion

• **specVersion**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/rpc/types.ts:97](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/interfaces/rpc/types.ts#L97)*

u32

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L197)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L205)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L212)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L270)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/debb1dc/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*