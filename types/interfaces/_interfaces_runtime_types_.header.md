> # Interface: Header <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](../classes/_codec_struct_.struct.md)

  * **Header**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.header.md#constructor)

### Properties

* [digest](_interfaces_runtime_types_.header.md#digest)
* [extrinsicsRoot](_interfaces_runtime_types_.header.md#extrinsicsroot)
* [number](_interfaces_runtime_types_.header.md#number)
* [parentHash](_interfaces_runtime_types_.header.md#parenthash)
* [stateRoot](_interfaces_runtime_types_.header.md#stateroot)

### Accessors

* [Type](_interfaces_runtime_types_.header.md#type)
* [encodedLength](_interfaces_runtime_types_.header.md#encodedlength)
* [hash](_interfaces_runtime_types_.header.md#hash)
* [isEmpty](_interfaces_runtime_types_.header.md#isempty)

### Methods

* [eq](_interfaces_runtime_types_.header.md#eq)
* [get](_interfaces_runtime_types_.header.md#get)
* [getAtIndex](_interfaces_runtime_types_.header.md#getatindex)
* [toArray](_interfaces_runtime_types_.header.md#toarray)
* [toHex](_interfaces_runtime_types_.header.md#tohex)
* [toJSON](_interfaces_runtime_types_.header.md#tojson)
* [toRawType](_interfaces_runtime_types_.header.md#torawtype)
* [toString](_interfaces_runtime_types_.header.md#tostring)
* [toU8a](_interfaces_runtime_types_.header.md#tou8a)
* [with](_interfaces_runtime_types_.header.md#static-with)

## Constructors

###  constructor

\+ **new Header**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[] | string, `jsonMap`: `Map<keyof S, string>`): *[Header](_interfaces_runtime_types_.header.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] \| string |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[Header](_interfaces_runtime_types_.header.md)*

## Properties

###  digest

• **digest**: *[Digest](../classes/_primitive_generic_digest_.digest.md)*

*Defined in [interfaces/runtime/types.ts:75](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/runtime/types.ts#L75)*

Digest

___

###  extrinsicsRoot

• **extrinsicsRoot**: *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [interfaces/runtime/types.ts:73](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/runtime/types.ts#L73)*

Hash

___

###  number

• **number**: *[Compact](../classes/_codec_compact_.compact.md)‹*[BlockNumber](../modules/_interfaces_runtime_types_.md#blocknumber)*›*

*Defined in [interfaces/runtime/types.ts:69](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/runtime/types.ts#L69)*

Compact<BlockNumber>

___

###  parentHash

• **parentHash**: *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [interfaces/runtime/types.ts:67](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/runtime/types.ts#L67)*

Hash

___

###  stateRoot

• **stateRoot**: *[Hash](../modules/_interfaces_runtime_types_.md#hash)*

*Defined in [interfaces/runtime/types.ts:71](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/runtime/types.ts#L71)*

Hash

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L205)*

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

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L212)*

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

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L270)*

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

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*