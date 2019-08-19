> # Class: Enum

**`name`** Enum

**`description`** 
This implements an enum, that based on the value wraps a different type. It is effectively
an extension to enum where the value type is determined by the actual index.

## Hierarchy

* [Base](_codec_base_.base.md)‹*[Codec](../interfaces/_types_.codec.md)*›

  * **Enum**

  * [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

  * [Phase](../interfaces/_interfaces_system_types_.phase.md)

  * [StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)

  * [StorageFunctionType](_metadata_v3_storage_.storagefunctiontype.md)

  * [StorageFunctionType](_metadata_v4_storage_.storagefunctiontype.md)

  * [StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)

  * [StorageHasher](_primitive_storagehasher_.storagehasher.md)

  * [DigestItem](_primitive_generic_digest_.digestitem.md)

  * [VoteThreshold](../interfaces/_interfaces_elections_types_.votethreshold.md)

  * [Conviction](../interfaces/_interfaces_democracy_types_.conviction.md)

  * [UncleEntryItem](../interfaces/_interfaces_authorship_types_.uncleentryitem.md)

  * [RawBabePreDigest](../interfaces/_interfaces_babe_types_.rawbabepredigest.md)

  * [ContractInfo](../interfaces/_interfaces_contracts_types_.contractinfo.md)

  * [NewAccountOutcome](../interfaces/_interfaces_deprecated_types_.newaccountoutcome.md)

  * [Owner](../interfaces/_interfaces_genericasset_types_.owner.md)

  * [PermissionVersions](../interfaces/_interfaces_genericasset_types_.permissionversions.md)

  * [StoredState](../interfaces/_interfaces_grandpa_types_.storedstate.md)

  * [Forcing](../interfaces/_interfaces_staking_types_.forcing.md)

  * [RewardDestination](../interfaces/_interfaces_staking_types_.rewarddestination.md)

  * [Bidder](../interfaces/_interfaces_parachains_types_.bidder.md)

  * [IncomingParachain](../interfaces/_interfaces_parachains_types_.incomingparachain.md)

  * [ParachainDispatchOrigin](../interfaces/_interfaces_parachains_types_.parachaindispatchorigin.md)

  * [SlotRange](../interfaces/_interfaces_parachains_types_.slotrange.md)

  * [ValidityAttestation](../interfaces/_interfaces_parachains_types_.validityattestation.md)

  * [ExtrinsicOrHash](../interfaces/_interfaces_rpc_types_.extrinsicorhash.md)

  * [ExtrinsicStatus](../interfaces/_interfaces_rpc_types_.extrinsicstatus.md)

  * [StorageFunctionModifierV0](../interfaces/_interfaces_metadata_types_.storagefunctionmodifierv0.md)

  * [StorageFunctionTypeV0](../interfaces/_interfaces_metadata_types_.storagefunctiontypev0.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_enum_.enum.md#constructor)

### Accessors

* [encodedLength](_codec_enum_.enum.md#encodedlength)
* [hash](_codec_enum_.enum.md#hash)
* [index](_codec_enum_.enum.md#index)
* [isEmpty](_codec_enum_.enum.md#isempty)
* [isNone](_codec_enum_.enum.md#isnone)
* [isNull](_codec_enum_.enum.md#isnull)
* [type](_codec_enum_.enum.md#type)
* [value](_codec_enum_.enum.md#value)

### Methods

* [eq](_codec_enum_.enum.md#eq)
* [toHex](_codec_enum_.enum.md#tohex)
* [toJSON](_codec_enum_.enum.md#tojson)
* [toNumber](_codec_enum_.enum.md#tonumber)
* [toRawType](_codec_enum_.enum.md#torawtype)
* [toString](_codec_enum_.enum.md#tostring)
* [toU8a](_codec_enum_.enum.md#tou8a)
* [with](_codec_enum_.enum.md#static-with)

## Constructors

###  constructor

\+ **new Enum**(`def`: `Record<string, InterfaceTypes | Constructor>` | string[], `value?`: any, `index?`: number | [Enum](_codec_enum_.enum.md)): *[Enum](_codec_enum_.enum.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:62](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |
`value?` | any |
`index?` | number \| [Enum](_codec_enum_.enum.md) |

**Returns:** *[Enum](_codec_enum_.enum.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:171](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Defined in [codec/Enum.ts:178](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L178)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Defined in [codec/Enum.ts:185](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L185)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Defined in [codec/Enum.ts:192](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L192)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Defined in [codec/Enum.ts:199](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L199)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Enum.ts:206](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L206)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:213](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L213)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Enum.ts:228](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:235](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L235)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [codec/Enum.ts:244](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L244)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:251](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L251)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:262](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:272](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L272)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `Record<string, InterfaceTypes | Constructor>` | string[]): *`EnumConstructor<Enum>`*

*Defined in [codec/Enum.ts:135](https://github.com/polkadot-js/api/blob/6fee15b/packages/types/src/codec/Enum.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `Record<string, InterfaceTypes \| Constructor>` \| string[] |

**Returns:** *`EnumConstructor<Enum>`*