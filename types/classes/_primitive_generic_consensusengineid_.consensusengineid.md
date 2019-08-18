> # Class: ConsensusEngineId

**`name`** ConsensusEngineId

**`description`** 
A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']

## Hierarchy

  * [U32](_primitive_u32_.u32.md)

  * **ConsensusEngineId**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_consensusengineid_.consensusengineid.md#constructor)

### Accessors

* [isAura](_primitive_generic_consensusengineid_.consensusengineid.md#isaura)
* [isBabe](_primitive_generic_consensusengineid_.consensusengineid.md#isbabe)
* [isGrandpa](_primitive_generic_consensusengineid_.consensusengineid.md#isgrandpa)

### Methods

* [extractAuthor](_primitive_generic_consensusengineid_.consensusengineid.md#extractauthor)
* [toHex](_primitive_generic_consensusengineid_.consensusengineid.md#tohex)
* [toRawType](_primitive_generic_consensusengineid_.consensusengineid.md#torawtype)
* [toString](_primitive_generic_consensusengineid_.consensusengineid.md#tostring)
* [toU8a](_primitive_generic_consensusengineid_.consensusengineid.md#tou8a)
* [idToString](_primitive_generic_consensusengineid_.consensusengineid.md#static-idtostring)
* [stringToId](_primitive_generic_consensusengineid_.consensusengineid.md#static-stringtoid)

## Constructors

###  constructor

\+ **new ConsensusEngineId**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)*

*Inherited from [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)*

## Accessors

###  isAura

• **get isAura**(): *boolean*

*Defined in [primitive/Generic/ConsensusEngineId.ts:43](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L43)*

**`description`** `true` if the engine matches aura

**Returns:** *boolean*

___

###  isBabe

• **get isBabe**(): *boolean*

*Defined in [primitive/Generic/ConsensusEngineId.ts:50](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L50)*

**`description`** `true` is the engine matches babe

**Returns:** *boolean*

___

###  isGrandpa

• **get isGrandpa**(): *boolean*

*Defined in [primitive/Generic/ConsensusEngineId.ts:57](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L57)*

**`description`** `true` is the engine matches grandpa

**Returns:** *boolean*

## Methods

###  extractAuthor

▸ **extractAuthor**(`bytes`: [Bytes](_primitive_bytes_.bytes.md), `sessionValidators`: [AccountId](_primitive_generic_accountid_.accountid.md)[]): *[AccountId](_primitive_generic_accountid_.accountid.md) | undefined*

*Defined in [primitive/Generic/ConsensusEngineId.ts:82](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L82)*

**`description`** From the input bytes, decode into an author

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | [Bytes](_primitive_bytes_.bytes.md) |
`sessionValidators` | [AccountId](_primitive_generic_accountid_.accountid.md)[] |

**Returns:** *[AccountId](_primitive_generic_accountid_.accountid.md) | undefined*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [primitive/Generic/ConsensusEngineId.ts:95](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L95)*

**`description`** Override the default toString to return a 4-byte string

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` idToString

▸ **idToString**(`input`: number | `BN`): *string*

*Defined in [primitive/Generic/ConsensusEngineId.ts:26](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number \| `BN` |

**Returns:** *string*

___

### `Static` stringToId

▸ **stringToId**(`input`: string): *number*

*Defined in [primitive/Generic/ConsensusEngineId.ts:33](https://github.com/polkadot-js/api/blob/b8d8b7e/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *number*