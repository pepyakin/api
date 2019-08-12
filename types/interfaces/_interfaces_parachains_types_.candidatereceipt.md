> # Interface: CandidateReceipt <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](../classes/_codec_struct_.struct.md)

  * **CandidateReceipt**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_parachains_types_.candidatereceipt.md#constructor)

### Properties

* [balanceUploads](_interfaces_parachains_types_.candidatereceipt.md#balanceuploads)
* [blockDataHash](_interfaces_parachains_types_.candidatereceipt.md#blockdatahash)
* [collator](_interfaces_parachains_types_.candidatereceipt.md#collator)
* [egressQueueRoots](_interfaces_parachains_types_.candidatereceipt.md#egressqueueroots)
* [fees](_interfaces_parachains_types_.candidatereceipt.md#fees)
* [headData](_interfaces_parachains_types_.candidatereceipt.md#headdata)
* [parachainIndex](_interfaces_parachains_types_.candidatereceipt.md#parachainindex)
* [signature](_interfaces_parachains_types_.candidatereceipt.md#signature)

### Accessors

* [Type](_interfaces_parachains_types_.candidatereceipt.md#type)
* [encodedLength](_interfaces_parachains_types_.candidatereceipt.md#encodedlength)
* [hash](_interfaces_parachains_types_.candidatereceipt.md#hash)
* [isEmpty](_interfaces_parachains_types_.candidatereceipt.md#isempty)

### Methods

* [eq](_interfaces_parachains_types_.candidatereceipt.md#eq)
* [get](_interfaces_parachains_types_.candidatereceipt.md#get)
* [getAtIndex](_interfaces_parachains_types_.candidatereceipt.md#getatindex)
* [toArray](_interfaces_parachains_types_.candidatereceipt.md#toarray)
* [toHex](_interfaces_parachains_types_.candidatereceipt.md#tohex)
* [toJSON](_interfaces_parachains_types_.candidatereceipt.md#tojson)
* [toRawType](_interfaces_parachains_types_.candidatereceipt.md#torawtype)
* [toString](_interfaces_parachains_types_.candidatereceipt.md#tostring)
* [toU8a](_interfaces_parachains_types_.candidatereceipt.md#tou8a)
* [with](_interfaces_parachains_types_.candidatereceipt.md#static-with)

## Constructors

###  constructor

\+ **new CandidateReceipt**(`Types`: `S`, `value`: `V` | `Map<any, any>` | any[] | string, `jsonMap`: `Map<keyof S, string>`): *[CandidateReceipt](_interfaces_parachains_types_.candidatereceipt.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:36](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | `S` | - |
`value` | `V` \| `Map<any, any>` \| any[] \| string |  {} as unknown as V |
`jsonMap` | `Map<keyof S, string>` |  new Map() |

**Returns:** *[CandidateReceipt](_interfaces_parachains_types_.candidatereceipt.md)*

## Properties

###  balanceUploads

• **balanceUploads**: *[Vec](../classes/_codec_vec_.vec.md)‹*[BalanceUpload](../modules/_interfaces_parachains_types_.md#balanceupload)*›*

*Defined in [interfaces/parachains/types.ts:46](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L46)*

Vec<BalanceUpload>

___

###  blockDataHash

• **blockDataHash**: *[Hash](_interfaceregistry_.interfaceregistry.md#hash)*

*Defined in [interfaces/parachains/types.ts:52](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L52)*

Hash

___

###  collator

• **collator**: *[AccountId](../classes/_primitive_generic_accountid_.accountid.md)*

*Defined in [interfaces/parachains/types.ts:40](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L40)*

AccountId

___

###  egressQueueRoots

• **egressQueueRoots**: *[Vec](../classes/_codec_vec_.vec.md)‹*[EgressQueueRoot](../modules/_interfaces_parachains_types_.md#egressqueueroot)*›*

*Defined in [interfaces/parachains/types.ts:48](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L48)*

Vec<EgressQueueRoot>

___

###  fees

• **fees**: *[u64](_interfaceregistry_.interfaceregistry.md#u64)*

*Defined in [interfaces/parachains/types.ts:50](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L50)*

u64

___

###  headData

• **headData**: *[HeadData](../modules/_interfaces_parachains_types_.md#headdata)*

*Defined in [interfaces/parachains/types.ts:44](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L44)*

HeadData

___

###  parachainIndex

• **parachainIndex**: *[ParaId](../modules/_interfaces_parachains_types_.md#paraid)*

*Defined in [interfaces/parachains/types.ts:38](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L38)*

ParaId

___

###  signature

• **signature**: *[CollatorSignature](../modules/_interfaces_parachains_types_.md#collatorsignature)*

*Defined in [interfaces/parachains/types.ts:42](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/interfaces/parachains/types.ts#L42)*

CollatorSignature

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L203)*

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

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L240)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L253)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L261)*

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

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/e942e68/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](_types_.constructor.md)‹*[Struct](../classes/_codec_struct_.struct.md)‹*`S`*›*›*