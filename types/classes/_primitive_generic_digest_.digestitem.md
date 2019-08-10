> # Class: DigestItem

**`name`** DigestItem

**`description`** 
A [Enum](../enums/_codec_types_.typedefinfo.md#enum) the specifies the specific item in the logs of a [Digest](_primitive_generic_digest_.digest.md)

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

*Defined in [primitive/Generic/Digest.ts:21](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[DigestItem](_primitive_generic_digest_.digestitem.md)*

## Accessors

###  asAuthoritiesChange

• **get asAuthoritiesChange**(): *[Vec](_codec_vec_.vec.md)‹*[AuthorityId](../modules/_interfaces_consensus_types_.md#authorityid)*›*

*Defined in [primitive/Generic/Digest.ts:37](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L37)*

**`description`** Returns the item as a [Vec<AuthorityId>](../interfaces/_interfaceregistry_.interfaceregistry.md#vec<authorityid>)

**Returns:** *[Vec](_codec_vec_.vec.md)‹*[AuthorityId](../modules/_interfaces_consensus_types_.md#authorityid)*›*

___

###  asChangesTrieRoot

• **get asChangesTrieRoot**(): *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

*Defined in [primitive/Generic/Digest.ts:46](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L46)*

**`description`** Returns the item as a [[ChangesTrieRoot]]

**Returns:** *[Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)*

___

###  asConsensus

• **get asConsensus**(): *[Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)*

*Defined in [primitive/Generic/Digest.ts:55](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L55)*

**`desciption`** Retuns the item as a [Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)

**Returns:** *[Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)*

___

###  asOther

• **get asOther**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [primitive/Generic/Digest.ts:64](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L64)*

**`description`** Returns the item as a [Bytes](_primitive_bytes_.bytes.md)

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  asPreRuntime

• **get asPreRuntime**(): *[PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)*

*Defined in [primitive/Generic/Digest.ts:73](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L73)*

**`description`** Returns the item as a [PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)

**Returns:** *[PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)*

___

###  asSeal

• **get asSeal**(): *[Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)*

*Defined in [primitive/Generic/Digest.ts:82](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L82)*

**`description`** Returns the item as a [Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)

**Returns:** *[Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)*

___

###  asSealV0

• **get asSealV0**(): *[SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)*

*Defined in [primitive/Generic/Digest.ts:91](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L91)*

**`description`** Returns the item as a [SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)

**Returns:** *[SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L165)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L172)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isAuthoritiesChange

• **get isAuthoritiesChange**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:100](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L100)*

**`description`** Returns true on [[AuthoritiesChange]]

**Returns:** *boolean*

___

###  isChangesTrieRoot

• **get isChangesTrieRoot**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:107](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L107)*

**`description`** Returns true on [[ChangesTrieRoot]]

**Returns:** *boolean*

___

###  isConsensus

• **get isConsensus**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:114](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L114)*

**`description`** Returns true on [Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L179)*

**`description`** Checks if the Enum points to a [Null](../enums/_codec_types_.typedefinfo.md#null) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L186)*

**`description`** Checks if the Enum points to a [Null](../enums/_codec_types_.typedefinfo.md#null) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isOther

• **get isOther**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:121](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L121)*

**`description`** Returns true on [[Other]]

**Returns:** *boolean*

___

###  isPreRuntime

• **get isPreRuntime**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:128](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L128)*

**`description`** Returns true on [PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)

**Returns:** *boolean*

___

###  isSeal

• **get isSeal**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:135](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L135)*

**`description`** Returns true on [Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)

**Returns:** *boolean*

___

###  isSealV0

• **get isSealV0**(): *boolean*

*Defined in [primitive/Generic/Digest.ts:142](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L142)*

**`description`** Returns true on [SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Overrides [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [primitive/Generic/Digest.ts:156](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L156)*

**`description`** Returns the type of engine

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:200](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L200)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/EnumType.ts:207](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L207)*

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

*Defined in [codec/EnumType.ts:222](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L222)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [primitive/Generic/Digest.ts:149](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/primitive/Generic/Digest.ts#L149)*

**`description`** Converts the Object to JSON, typically used for RPC transfers. For logs, we overrides to produce the hex version (sligning with substrate gives in actual JSON responses)

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:238](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L238)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/EnumType.ts:245](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L245)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:260](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L260)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/EnumType.ts:270](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L270)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | string[]): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/1c885a2/packages/types/src/codec/EnumType.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*