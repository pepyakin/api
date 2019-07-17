> # Class: VoterInfo <**S, T, V, E**>

**`name`** VoterInfo

**`description`** 
The activity status of a voter.

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **VoterInfo**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_voterinfo_.voterinfo.md#constructor)

#### Accessors

* [Type](_type_voterinfo_.voterinfo.md#type)
* [encodedLength](_type_voterinfo_.voterinfo.md#encodedlength)
* [isEmpty](_type_voterinfo_.voterinfo.md#isempty)
* [lastActive](_type_voterinfo_.voterinfo.md#lastactive)
* [lastWin](_type_voterinfo_.voterinfo.md#lastwin)
* [pot](_type_voterinfo_.voterinfo.md#pot)
* [stake](_type_voterinfo_.voterinfo.md#stake)

#### Methods

* [eq](_type_voterinfo_.voterinfo.md#eq)
* [get](_type_voterinfo_.voterinfo.md#get)
* [getAtIndex](_type_voterinfo_.voterinfo.md#getatindex)
* [toArray](_type_voterinfo_.voterinfo.md#toarray)
* [toHex](_type_voterinfo_.voterinfo.md#tohex)
* [toJSON](_type_voterinfo_.voterinfo.md#tojson)
* [toRawType](_type_voterinfo_.voterinfo.md#torawtype)
* [toString](_type_voterinfo_.voterinfo.md#tostring)
* [toU8a](_type_voterinfo_.voterinfo.md#tou8a)
* [with](_type_voterinfo_.voterinfo.md#static-with)

## Constructors

###  constructor

\+ **new VoterInfo**(`value?`: any): *[VoterInfo](_type_voterinfo_.voterinfo.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/VoterInfo.ts:15](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/type/VoterInfo.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[VoterInfo](_type_voterinfo_.voterinfo.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L163)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L176)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L148)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  lastActive

• **get lastActive**(): *[VoteIndex](_type_voteindex_.voteindex.md)*

*Defined in [type/VoterInfo.ts:28](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/type/VoterInfo.ts#L28)*

**`description`** Last VoteIndex in which this voter assigned (or initialized) approvals.

**Returns:** *[VoteIndex](_type_voteindex_.voteindex.md)*

___

###  lastWin

• **get lastWin**(): *[VoteIndex](_type_voteindex_.voteindex.md)*

*Defined in [type/VoterInfo.ts:36](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/type/VoterInfo.ts#L36)*

**`description`** Last VoteIndex in which one of this voter's approvals won.
Note that `last_win = N` indicates a last win at index `N-1`, hence `last_win = 0` means no win ever.

**Returns:** *[VoteIndex](_type_voteindex_.voteindex.md)*

___

###  pot

• **get pot**(): *[Balance](_primitive_balance_.balance.md)*

*Defined in [type/VoterInfo.ts:43](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/type/VoterInfo.ts#L43)*

**`description`** The amount of stored weight as a result of not winning but changing approvals.

**Returns:** *[Balance](_primitive_balance_.balance.md)*

___

###  stake

• **get stake**(): *[Balance](_primitive_balance_.balance.md)*

*Defined in [type/VoterInfo.ts:50](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/type/VoterInfo.ts#L50)*

**`description`** Current staked amount. A lock equal to this value always exists.

**Returns:** *[Balance](_primitive_balance_.balance.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L187)*

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

*Defined in [codec/Struct.ts:195](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L195)*

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

*Defined in [codec/Struct.ts:202](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L202)*

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

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L209)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L216)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:223](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L223)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L239)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L252)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L260)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/ff69c43/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*