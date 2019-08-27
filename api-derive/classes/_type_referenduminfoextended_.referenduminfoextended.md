> # Class: ReferendumInfoExtended <**S, T, V, E**>

**`name`** ReferendumInfoExtended

**`description`** 
A [[ReferendumInfo]] with an additional `index` field

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* ReferendumInfo

  * **ReferendumInfoExtended**

## Implements

* Codec

## Index

### Constructors

* [constructor](_type_referenduminfoextended_.referenduminfoextended.md#constructor)

### Properties

* [__@toStringTag](_type_referenduminfoextended_.referenduminfoextended.md#__@tostringtag)
* [delay](_type_referenduminfoextended_.referenduminfoextended.md#delay)
* [end](_type_referenduminfoextended_.referenduminfoextended.md#end)
* [proposal](_type_referenduminfoextended_.referenduminfoextended.md#proposal)
* [size](_type_referenduminfoextended_.referenduminfoextended.md#size)
* [threshold](_type_referenduminfoextended_.referenduminfoextended.md#threshold)

### Accessors

* [Type](_type_referenduminfoextended_.referenduminfoextended.md#type)
* [encodedLength](_type_referenduminfoextended_.referenduminfoextended.md#encodedlength)
* [hash](_type_referenduminfoextended_.referenduminfoextended.md#hash)
* [index](_type_referenduminfoextended_.referenduminfoextended.md#index)
* [isEmpty](_type_referenduminfoextended_.referenduminfoextended.md#isempty)

### Methods

* [__@iterator](_type_referenduminfoextended_.referenduminfoextended.md#__@iterator)
* [clear](_type_referenduminfoextended_.referenduminfoextended.md#clear)
* [delete](_type_referenduminfoextended_.referenduminfoextended.md#delete)
* [entries](_type_referenduminfoextended_.referenduminfoextended.md#entries)
* [eq](_type_referenduminfoextended_.referenduminfoextended.md#eq)
* [forEach](_type_referenduminfoextended_.referenduminfoextended.md#foreach)
* [get](_type_referenduminfoextended_.referenduminfoextended.md#get)
* [getAtIndex](_type_referenduminfoextended_.referenduminfoextended.md#getatindex)
* [has](_type_referenduminfoextended_.referenduminfoextended.md#has)
* [keys](_type_referenduminfoextended_.referenduminfoextended.md#keys)
* [set](_type_referenduminfoextended_.referenduminfoextended.md#set)
* [toArray](_type_referenduminfoextended_.referenduminfoextended.md#toarray)
* [toHex](_type_referenduminfoextended_.referenduminfoextended.md#tohex)
* [toJSON](_type_referenduminfoextended_.referenduminfoextended.md#tojson)
* [toRawType](_type_referenduminfoextended_.referenduminfoextended.md#torawtype)
* [toString](_type_referenduminfoextended_.referenduminfoextended.md#tostring)
* [toU8a](_type_referenduminfoextended_.referenduminfoextended.md#tou8a)
* [values](_type_referenduminfoextended_.referenduminfoextended.md#values)
* [typesToMap](_type_referenduminfoextended_.referenduminfoextended.md#static-typestomap)
* [with](_type_referenduminfoextended_.referenduminfoextended.md#static-with)

## Constructors

###  constructor

\+ **new ReferendumInfoExtended**(`value`: ReferendumInfo | [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md), `index?`: BN | number): *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

*Overrides void*

*Defined in [type/ReferendumInfoExtended.ts:21](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api-derive/src/type/ReferendumInfoExtended.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ReferendumInfo \| [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md) |
`index?` | BN \| number |

**Returns:** *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  delay

• **delay**: *BlockNumber*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/democracy/types.ts:43](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/interfaces/democracy/types.ts#L43)*

BlockNumber

___

###  end

• **end**: *BlockNumber*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/democracy/types.ts:37](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/interfaces/democracy/types.ts#L37)*

BlockNumber

___

###  proposal

• **proposal**: *Proposal*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/democracy/types.ts:39](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/interfaces/democracy/types.ts#L39)*

Proposal

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  threshold

• **threshold**: *VoteThreshold*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/interfaces/democracy/types.ts:41](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/interfaces/democracy/types.ts#L41)*

VoteThreshold

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  index

• **get index**(): *ReferendumIndex*

*Defined in [type/ReferendumInfoExtended.ts:34](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api-derive/src/type/ReferendumInfoExtended.ts#L34)*

**`description`** Convenience getter, returns the referendumIndex

**Returns:** *ReferendumIndex*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

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

▸ **entries**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L188)*

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

▸ (`value`: Codec, `key`: keyof S, `map`: Map‹keyof S, Codec›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`key` | keyof S |
`map` | Map‹keyof S, Codec› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L196)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

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

▸ **keys**(): *IterableIterator‹keyof S›*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹keyof S›*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject*

*Overrides void*

*Defined in [type/ReferendumInfoExtended.ts:41](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api-derive/src/type/ReferendumInfoExtended.ts#L41)*

**`description`** Creates the JSON representation

**Returns:** *AnyJsonObject*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L248)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L257)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L265)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹Codec›*

*Inherited from void*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128

Returns an iterable of values in the map

**Returns:** *IterableIterator‹Codec›*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:237](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*