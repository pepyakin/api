> # Class: DigestItem

**`name`** DigestItem

**`description`** 
A [Enum](_codec_enumtype_.enum.md) the specifies the specific item in the logs of a [Digest](_primitive_generic_digest_.digest.md)

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **DigestItem**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_digest_.digestitem.md#constructor)

### Accessors

* [asAuthoritiesChange](_primitive_generic_digest_.digestitem.md#asauthoritieschange)
* [asChangesTrieRoot](_primitive_generic_digest_.digestitem.md#aschangestrieroot)
* [asConsensus](_primitive_generic_digest_.digestitem.md#asconsensus)
* [asOther](_primitive_generic_digest_.digestitem.md#asother)
* [asPreRuntime](_primitive_generic_digest_.digestitem.md#aspreruntime)
* [asSeal](_primitive_generic_digest_.digestitem.md#asseal)
* [asSealV0](_primitive_generic_digest_.digestitem.md#assealv0)
* [encodedLength](_primitive_generic_digest_.digestitem.md#encodedlength)
* [hash](_primitive_generic_digest_.digestitem.md#hash)
* [index](_primitive_generic_digest_.digestitem.md#index)
* [isAuthoritiesChange](_primitive_generic_digest_.digestitem.md#isauthoritieschange)
* [isChangesTrieRoot](_primitive_generic_digest_.digestitem.md#ischangestrieroot)
* [isConsensus](_primitive_generic_digest_.digestitem.md#isconsensus)
* [isEmpty](_primitive_generic_digest_.digestitem.md#isempty)
* [isNone](_primitive_generic_digest_.digestitem.md#isnone)
* [isNull](_primitive_generic_digest_.digestitem.md#isnull)
* [isOther](_primitive_generic_digest_.digestitem.md#isother)
* [isPreRuntime](_primitive_generic_digest_.digestitem.md#ispreruntime)
* [isSeal](_primitive_generic_digest_.digestitem.md#isseal)
* [isSealV0](_primitive_generic_digest_.digestitem.md#issealv0)
* [type](_primitive_generic_digest_.digestitem.md#type)
* [value](_primitive_generic_digest_.digestitem.md#value)

### Methods

* [eq](_primitive_generic_digest_.digestitem.md#eq)
* [toHex](_primitive_generic_digest_.digestitem.md#tohex)
* [toJSON](_primitive_generic_digest_.digestitem.md#tojson)
* [toNumber](_primitive_generic_digest_.digestitem.md#tonumber)
* [toRawType](_primitive_generic_digest_.digestitem.md#torawtype)
* [toString](_primitive_generic_digest_.digestitem.md#tostring)
* [toU8a](_primitive_generic_digest_.digestitem.md#tou8a)
* [with](_primitive_generic_digest_.digestitem.md#static-with)

## Constructors

###  constructor

\+ **new DigestItem**(`value`: any): *[DigestItem](_primitive_generic_digest_.digestitem.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [primitive/Generic/Digest.ts:20](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[DigestItem](_primitive_generic_digest_.digestitem.md)*

## Accessors

###  asAuthoritiesChange

• **get asAuthoritiesChange**(): *[Vec](_codec_vec_.vec.md)‹*[AuthorityId](../modules/_interfaces_consensus_types_.md#authorityid)*›*

*Defined in [primitive/Generic/Digest.ts:36](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L36)*

**`description`** Returns the item as a [Vec<AuthorityId>](../interfaces/_interfaceregistry_.interfaceregistry.md#vec<authorityid>)

**Returns:** *[Vec](_codec_vec_.vec.md)‹*[AuthorityId](../modules/_interfaces_consensus_types_.md#authorityid)*›*

___

###  asChangesTrieRoot

• **get asChangesTrieRoot**(): *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

*Defined in [primitive/Generic/Digest.ts:45](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L45)*

**`description`** Returns the item as a [[ChangesTrieRoot]]

**Returns:** *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

___

###  asConsensus

• **get asConsensus**(): *[Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)*

*Defined in [primitive/Generic/Digest.ts:54](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L54)*

**`desciption`** Retuns the item as a [Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)

**Returns:** *[Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)*

___

###  asOther

• **get asOther**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [primitive/Generic/Digest.ts:63](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L63)*

**`description`** Returns the item as a [Bytes](_primitive_bytes_.bytes.md)

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  asPreRuntime

• **get asPreRuntime**(): *[PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)*

*Defined in [primitive/Generic/Digest.ts:72](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L72)*

**`description`** Returns the item as a [PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)

**Returns:** *[PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)*

___

###  asSeal

• **get asSeal**(): *[Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)*

*Defined in [primitive/Generic/Digest.ts:81](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L81)*

**`description`** Returns the item as a [Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)

**Returns:** *[Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)*

___

###  asSealV0

• **get asSealV0**(): *[SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)*

*Defined in [primitive/Generic/Digest.ts:90](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L90)*

**`description`** Returns the item as a [SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)

**Returns:** *[SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:166](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L166)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:173](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L173)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isAuthoritiesChange

• **get isAuthoritiesChange**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:99](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L99)*

**`description`** Returns true on [[AuthoritiesChange]]

**Returns:** *boolean*

___

###  isChangesTrieRoot

• **get isChangesTrieRoot**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:106](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L106)*

**`description`** Returns true on [[ChangesTrieRoot]]

**Returns:** *boolean*

___

###  isConsensus

• **get isConsensus**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:113](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L113)*

**`description`** Returns true on [Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:180](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L180)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:187](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L187)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isOther

• **get isOther**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:120](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L120)*

**`description`** Returns true on [[Other]]

**Returns:** *boolean*

___

###  isPreRuntime

• **get isPreRuntime**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:127](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L127)*

**`description`** Returns true on [PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)

**Returns:** *boolean*

___

###  isSeal

• **get isSeal**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:134](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L134)*

**`description`** Returns true on [Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)

**Returns:** *boolean*

___

###  isSealV0

• **get isSealV0**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:141](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L141)*

**`description`** Returns true on [SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Overrides [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [primitive/Generic/Digest.ts:155](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L155)*

**`description`** Returns the type of engine

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L201)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L208)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/EnumType.ts:223](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L223)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [primitive/Generic/Digest.ts:148](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/primitive/Generic/Digest.ts#L148)*

**`description`** Converts the Object to JSON, typically used for RPC transfers. For logs, we overrides to produce the hex version (sligning with substrate gives in actual JSON responses)

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:239](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L239)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:246](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:261](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L261)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:271](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L271)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `Record<string, InterfaceTypes | Constructor>` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:130](https://github.com/polkadot-js/api/blob/9954477/packages/types/src/codec/EnumType.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*