> # Class: HeaderExtended <**S, T, V, E**>

**`name`** HeaderExtended

**`description`** 
A [[Block]] header with an additional `author` field that indicates the block author

## Type parameters

▪ **S**: *`ConstructorDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* `Header`

  * **HeaderExtended**

## Implements

* `Codec`

## Index

### Constructors

* [constructor](_type_headerextended_.headerextended.md#constructor)

### Properties

* [__@toStringTag](_type_headerextended_.headerextended.md#__@tostringtag)
* [digest](_type_headerextended_.headerextended.md#digest)
* [extrinsicsRoot](_type_headerextended_.headerextended.md#extrinsicsroot)
* [number](_type_headerextended_.headerextended.md#number)
* [parentHash](_type_headerextended_.headerextended.md#parenthash)
* [size](_type_headerextended_.headerextended.md#size)
* [stateRoot](_type_headerextended_.headerextended.md#stateroot)

### Accessors

* [Type](_type_headerextended_.headerextended.md#type)
* [author](_type_headerextended_.headerextended.md#author)
* [encodedLength](_type_headerextended_.headerextended.md#encodedlength)
* [hash](_type_headerextended_.headerextended.md#hash)
* [isEmpty](_type_headerextended_.headerextended.md#isempty)

### Methods

* [__@iterator](_type_headerextended_.headerextended.md#__@iterator)
* [clear](_type_headerextended_.headerextended.md#clear)
* [delete](_type_headerextended_.headerextended.md#delete)
* [entries](_type_headerextended_.headerextended.md#entries)
* [eq](_type_headerextended_.headerextended.md#eq)
* [forEach](_type_headerextended_.headerextended.md#foreach)
* [get](_type_headerextended_.headerextended.md#get)
* [getAtIndex](_type_headerextended_.headerextended.md#getatindex)
* [has](_type_headerextended_.headerextended.md#has)
* [keys](_type_headerextended_.headerextended.md#keys)
* [set](_type_headerextended_.headerextended.md#set)
* [toArray](_type_headerextended_.headerextended.md#toarray)
* [toHex](_type_headerextended_.headerextended.md#tohex)
* [toJSON](_type_headerextended_.headerextended.md#tojson)
* [toRawType](_type_headerextended_.headerextended.md#torawtype)
* [toString](_type_headerextended_.headerextended.md#tostring)
* [toU8a](_type_headerextended_.headerextended.md#tou8a)
* [values](_type_headerextended_.headerextended.md#values)
* [with](_type_headerextended_.headerextended.md#static-with)

## Constructors

###  constructor

\+ **new HeaderExtended**(`header`: `Header` | null, `sessionValidators`: `AccountId`[]): *[HeaderExtended](_type_headerextended_.headerextended.md)*

*Overrides void*

*Defined in [type/HeaderExtended.ts:20](https://github.com/polkadot-js/api/blob/14f018d/packages/api-derive/src/type/HeaderExtended.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`header` | `Header` \| null |  null |
`sessionValidators` | `AccountId`[] |  [] |

**Returns:** *[HeaderExtended](_type_headerextended_.headerextended.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  digest

• **digest**: *`Digest`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/runtime/types.ts:75](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/interfaces/runtime/types.ts#L75)*

Digest

___

###  extrinsicsRoot

• **extrinsicsRoot**: *`Hash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/runtime/types.ts:73](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/interfaces/runtime/types.ts#L73)*

Hash

___

###  number

• **number**: *`Compact<BlockNumber>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/runtime/types.ts:69](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/interfaces/runtime/types.ts#L69)*

Compact<BlockNumber>

___

###  parentHash

• **parentHash**: *`Hash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/runtime/types.ts:67](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/interfaces/runtime/types.ts#L67)*

Hash

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  stateRoot

• **stateRoot**: *`Hash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/runtime/types.ts:71](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/interfaces/runtime/types.ts#L71)*

Hash

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  author

• **get author**(): *`AccountId` | undefined*

*Defined in [type/HeaderExtended.ts:64](https://github.com/polkadot-js/api/blob/14f018d/packages/api-derive/src/type/HeaderExtended.ts#L64)*

**`description`** Convenience method, returns the author for the block

**Returns:** *`AccountId` | undefined*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *`IHash`*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  __@iterator

▸ **__@iterator**(): *`IterableIterator<[keyof S, Codec]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113

Returns an iterable of entries in the map.

**Returns:** *`IterableIterator<[keyof S, Codec]>`*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *`IterableIterator<[keyof S, Codec]>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *`IterableIterator<[keyof S, Codec]>`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L197)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: `Codec`, `key`: keyof S, `map`: `Map<keyof S, Codec>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `Codec` |
`key` | keyof S |
`map` | `Map<keyof S, Codec>` |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *`Codec` | undefined*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L205)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *`Codec` | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *`Codec`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L212)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *`Codec`*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *`IterableIterator<keyof S>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123

Returns an iterable of keys in the map

**Returns:** *`IterableIterator<keyof S>`*

___

###  set

▸ **set**(`key`: keyof S, `value`: `Codec`): *this*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | `Codec` |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *`Codec`[]*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Codec`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJsonObject`*

*Overrides void*

*Defined in [type/HeaderExtended.ts:71](https://github.com/polkadot-js/api/blob/14f018d/packages/api-derive/src/type/HeaderExtended.ts#L71)*

**`description`** Creates the JSON representation

**Returns:** *`AnyJsonObject`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L270)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  values

▸ **values**(): *`IterableIterator<Codec>`*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128

Returns an iterable of values in the map

**Returns:** *`IterableIterator<Codec>`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *`Constructor<Struct<S>>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/14f018d/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *`ConstructorDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *`Constructor<Struct<S>>`*