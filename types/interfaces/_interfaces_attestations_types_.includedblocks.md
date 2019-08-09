> # Interface: IncludedBlocks <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](../classes/_codec_struct_.struct.md)

  * **IncludedBlocks**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_attestations_types_.includedblocks.md#constructor)

### Properties

* [activeParachains](_interfaces_attestations_types_.includedblocks.md#activeparachains)
* [actualNumber](_interfaces_attestations_types_.includedblocks.md#actualnumber)
* [paraBlocks](_interfaces_attestations_types_.includedblocks.md#parablocks)
* [randomSeed](_interfaces_attestations_types_.includedblocks.md#randomseed)
* [session](_interfaces_attestations_types_.includedblocks.md#session)

### Accessors

* [Type](_interfaces_attestations_types_.includedblocks.md#type)
* [encodedLength](_interfaces_attestations_types_.includedblocks.md#encodedlength)
* [hash](_interfaces_attestations_types_.includedblocks.md#hash)
* [isEmpty](_interfaces_attestations_types_.includedblocks.md#isempty)

### Methods

* [eq](_interfaces_attestations_types_.includedblocks.md#eq)
* [get](_interfaces_attestations_types_.includedblocks.md#get)
* [getAtIndex](_interfaces_attestations_types_.includedblocks.md#getatindex)
* [toArray](_interfaces_attestations_types_.includedblocks.md#toarray)
* [toHex](_interfaces_attestations_types_.includedblocks.md#tohex)
* [toJSON](_interfaces_attestations_types_.includedblocks.md#tojson)
* [toRawType](_interfaces_attestations_types_.includedblocks.md#torawtype)
* [toString](_interfaces_attestations_types_.includedblocks.md#tostring)
* [toU8a](_interfaces_attestations_types_.includedblocks.md#tou8a)
* [with](_interfaces_attestations_types_.includedblocks.md#static-with)

## Constructors

###  constructor

\+ **new IncludedBlocks**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[] | string, `jsonMap`: `Map<keyof S, string>`): *[IncludedBlocks](_interfaces_attestations_types_.includedblocks.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] \| string |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[IncludedBlocks](_interfaces_attestations_types_.includedblocks.md)*

## Properties

###  activeParachains

• **activeParachains**: *[Vec](../classes/_codec_vec_.vec.md)‹*[ParaId](../modules/_interfaces_parachains_types_.md#paraid)*›*

*Defined in [interfaces/attestations/types.ts:29](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/interfaces/attestations/types.ts#L29)*

Vec<ParaId>

___

###  actualNumber

• **actualNumber**: *[BlockNumber](_interfaceregistry_.interfaceregistry.md#blocknumber)*

*Defined in [interfaces/attestations/types.ts:23](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/interfaces/attestations/types.ts#L23)*

BlockNumber

___

###  paraBlocks

• **paraBlocks**: *[Vec](../classes/_codec_vec_.vec.md)‹*[Hash](_interfaceregistry_.interfaceregistry.md#hash)*›*

*Defined in [interfaces/attestations/types.ts:31](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/interfaces/attestations/types.ts#L31)*

Vec<Hash>

___

###  randomSeed

• **randomSeed**: *[H256](../classes/_primitive_h256_.h256.md)*

*Defined in [interfaces/attestations/types.ts:27](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/interfaces/attestations/types.ts#L27)*

H256

___

###  session

• **session**: *[SessionIndex](../modules/_interfaces_session_types_.md#sessionindex)*

*Defined in [interfaces/attestations/types.ts:25](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/interfaces/attestations/types.ts#L25)*

SessionIndex

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L205)*

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

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L212)*

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

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L270)*

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

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*