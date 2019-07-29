> # External module: "interfaces/runtime/types"

## Index

### Interfaces

* [Header](../interfaces/_interfaces_runtime_types_.header.md)
* [SignedBlock](../interfaces/_interfaces_runtime_types_.signedblock.md)

### Type aliases

* [AccountId](_interfaces_runtime_types_.md#accountid)
* [AccountIdOf](_interfaces_runtime_types_.md#accountidof)
* [AccountIndex](_interfaces_runtime_types_.md#accountindex)
* [Address](_interfaces_runtime_types_.md#address)
* [Balance](_interfaces_runtime_types_.md#balance)
* [BalanceOf](_interfaces_runtime_types_.md#balanceof)
* [Block](_interfaces_runtime_types_.md#block)
* [BlockNumber](_interfaces_runtime_types_.md#blocknumber)
* [Call](_interfaces_runtime_types_.md#call)
* [Consensus](_interfaces_runtime_types_.md#consensus)
* [ConsensusEngineId](_interfaces_runtime_types_.md#consensusengineid)
* [Digest](_interfaces_runtime_types_.md#digest)
* [DigestItem](_interfaces_runtime_types_.md#digestitem)
* [Ed25519Signature](_interfaces_runtime_types_.md#ed25519signature)
* [Extrinsic](_interfaces_runtime_types_.md#extrinsic)
* [ExtrinsicEra](_interfaces_runtime_types_.md#extrinsicera)
* [ExtrinsicPayload](_interfaces_runtime_types_.md#extrinsicpayload)
* [Hash](_interfaces_runtime_types_.md#hash)
* [ImmortalEra](_interfaces_runtime_types_.md#immortalera)
* [Index](_interfaces_runtime_types_.md#index)
* [Justification](_interfaces_runtime_types_.md#justification)
* [KeyTypeId](_interfaces_runtime_types_.md#keytypeid)
* [KeyValue](_interfaces_runtime_types_.md#keyvalue)
* [LockIdentifier](_interfaces_runtime_types_.md#lockidentifier)
* [Moment](_interfaces_runtime_types_.md#moment)
* [MortalEra](_interfaces_runtime_types_.md#mortalera)
* [Origin](_interfaces_runtime_types_.md#origin)
* [Perbill](_interfaces_runtime_types_.md#perbill)
* [Permill](_interfaces_runtime_types_.md#permill)
* [Phantom](_interfaces_runtime_types_.md#phantom)
* [PreRuntime](_interfaces_runtime_types_.md#preruntime)
* [Seal](_interfaces_runtime_types_.md#seal)
* [SealV0](_interfaces_runtime_types_.md#sealv0)
* [Signature](_interfaces_runtime_types_.md#signature)
* [Sr25519Signature](_interfaces_runtime_types_.md#sr25519signature)
* [StorageData](_interfaces_runtime_types_.md#storagedata)
* [ValidatorId](_interfaces_runtime_types_.md#validatorid)
* [Weight](_interfaces_runtime_types_.md#weight)
* [WeightMultiplier](_interfaces_runtime_types_.md#weightmultiplier)

## Type aliases

###  AccountId

Ƭ **AccountId**: *`GenericAccountId`*

*Defined in [interfaces/runtime/types.ts:8](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L8)*

GenericAccountId

___

###  AccountIdOf

Ƭ **AccountIdOf**: *[AccountId](../classes/_primitive_generic_accountid_.accountid.md)*

*Defined in [interfaces/runtime/types.ts:11](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L11)*

AccountId

___

###  AccountIndex

Ƭ **AccountIndex**: *`GenericAccountIndex`*

*Defined in [interfaces/runtime/types.ts:14](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L14)*

GenericAccountIndex

___

###  Address

Ƭ **Address**: *`GenericAddress`*

*Defined in [interfaces/runtime/types.ts:17](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L17)*

GenericAddress

___

###  Balance

Ƭ **Balance**: *[u128](../interfaces/_interfaceregistry_.interfaceregistry.md#u128)*

*Defined in [interfaces/runtime/types.ts:20](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L20)*

u128

___

###  BalanceOf

Ƭ **BalanceOf**: *[Balance](_interfaces_runtime_types_.md#balance)*

*Defined in [interfaces/runtime/types.ts:23](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L23)*

Balance

___

###  Block

Ƭ **Block**: *`GenericBlock`*

*Defined in [interfaces/runtime/types.ts:26](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L26)*

GenericBlock

___

###  BlockNumber

Ƭ **BlockNumber**: *[u64](../interfaces/_interfaceregistry_.interfaceregistry.md#u64)*

*Defined in [interfaces/runtime/types.ts:29](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L29)*

u64

___

###  Call

Ƭ **Call**: *`GenericCall`*

*Defined in [interfaces/runtime/types.ts:32](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L32)*

GenericCall

___

###  Consensus

Ƭ **Consensus**: *[[ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md), [Bytes](../classes/_primitive_bytes_.bytes.md)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/runtime/types.ts:35](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L35)*

[ConsensusEngineId, Bytes] & Codec

___

###  ConsensusEngineId

Ƭ **ConsensusEngineId**: *`GenericConsensusEngineId`*

*Defined in [interfaces/runtime/types.ts:38](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L38)*

GenericConsensusEngineId

___

###  Digest

Ƭ **Digest**: *`GenericDigest`*

*Defined in [interfaces/runtime/types.ts:41](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L41)*

GenericDigest

___

###  DigestItem

Ƭ **DigestItem**: *`GenericDigestItem`*

*Defined in [interfaces/runtime/types.ts:44](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L44)*

GenericDigestItem

___

###  Ed25519Signature

Ƭ **Ed25519Signature**: *[Signature](_interfaces_runtime_types_.md#signature)*

*Defined in [interfaces/runtime/types.ts:47](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L47)*

Signature

___

###  Extrinsic

Ƭ **Extrinsic**: *`GenericExtrinsic`*

*Defined in [interfaces/runtime/types.ts:50](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L50)*

GenericExtrinsic

___

###  ExtrinsicEra

Ƭ **ExtrinsicEra**: *`GenericExtrinsicEra`*

*Defined in [interfaces/runtime/types.ts:53](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L53)*

GenericExtrinsicEra

___

###  ExtrinsicPayload

Ƭ **ExtrinsicPayload**: *`GenericExtrinsicPayload`*

*Defined in [interfaces/runtime/types.ts:56](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L56)*

GenericExtrinsicPayload

___

###  Hash

Ƭ **Hash**: *[H256](../classes/_primitive_h256_.h256.md)*

*Defined in [interfaces/runtime/types.ts:59](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L59)*

H256

___

###  ImmortalEra

Ƭ **ImmortalEra**: *`GenericImmortalEra`*

*Defined in [interfaces/runtime/types.ts:76](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L76)*

GenericImmortalEra

___

###  Index

Ƭ **Index**: *[u64](../interfaces/_interfaceregistry_.interfaceregistry.md#u64)*

*Defined in [interfaces/runtime/types.ts:79](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L79)*

u64

___

###  Justification

Ƭ **Justification**: *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Defined in [interfaces/runtime/types.ts:82](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L82)*

Bytes

___

###  KeyTypeId

Ƭ **KeyTypeId**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/runtime/types.ts:85](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L85)*

u32

___

###  KeyValue

Ƭ **KeyValue**: *[[StorageKey](../classes/_primitive_storagekey_.storagekey.md), [StorageData](_interfaces_runtime_types_.md#storagedata)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/runtime/types.ts:88](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L88)*

[StorageKey, StorageData] & Codec

___

###  LockIdentifier

Ƭ **LockIdentifier**: *[Vec](../classes/_codec_vec_.vec.md)‹*[u8](../interfaces/_interfaceregistry_.interfaceregistry.md#u8)*›*

*Defined in [interfaces/runtime/types.ts:91](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L91)*

Vec<u8>

___

###  Moment

Ƭ **Moment**: *[u64](../interfaces/_interfaceregistry_.interfaceregistry.md#u64)*

*Defined in [interfaces/runtime/types.ts:94](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L94)*

u64

___

###  MortalEra

Ƭ **MortalEra**: *`GenericMortalEra`*

*Defined in [interfaces/runtime/types.ts:97](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L97)*

GenericMortalEra

___

###  Origin

Ƭ **Origin**: *`GenericOrigin`*

*Defined in [interfaces/runtime/types.ts:100](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L100)*

GenericOrigin

___

###  Perbill

Ƭ **Perbill**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/runtime/types.ts:103](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L103)*

u32

___

###  Permill

Ƭ **Permill**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/runtime/types.ts:106](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L106)*

u32

___

###  Phantom

Ƭ **Phantom**: *[Null](../classes/_primitive_null_.null.md)*

*Defined in [interfaces/runtime/types.ts:109](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L109)*

Null

___

###  PreRuntime

Ƭ **PreRuntime**: *[[ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md), [Bytes](../classes/_primitive_bytes_.bytes.md)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/runtime/types.ts:112](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L112)*

[ConsensusEngineId, Bytes] & Codec

___

###  Seal

Ƭ **Seal**: *[[ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md), [Bytes](../classes/_primitive_bytes_.bytes.md)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/runtime/types.ts:115](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L115)*

[ConsensusEngineId, Bytes] & Codec

___

###  SealV0

Ƭ **SealV0**: *[[u64](../interfaces/_interfaceregistry_.interfaceregistry.md#u64), [Signature](_interfaces_runtime_types_.md#signature)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/runtime/types.ts:118](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L118)*

[u64, Signature] & Codec

___

###  Signature

Ƭ **Signature**: *[H512](../classes/_primitive_h512_.h512.md)*

*Defined in [interfaces/runtime/types.ts:121](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L121)*

H512

___

###  Sr25519Signature

Ƭ **Sr25519Signature**: *[Signature](_interfaces_runtime_types_.md#signature)*

*Defined in [interfaces/runtime/types.ts:132](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L132)*

Signature

___

###  StorageData

Ƭ **StorageData**: *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Defined in [interfaces/runtime/types.ts:135](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L135)*

Bytes

___

###  ValidatorId

Ƭ **ValidatorId**: *[AccountId](../classes/_primitive_generic_accountid_.accountid.md)*

*Defined in [interfaces/runtime/types.ts:138](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L138)*

AccountId

___

###  Weight

Ƭ **Weight**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/runtime/types.ts:141](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L141)*

u32

___

###  WeightMultiplier

Ƭ **WeightMultiplier**: *[Fixed64](../interfaces/_interfaceregistry_.interfaceregistry.md#fixed64)*

*Defined in [interfaces/runtime/types.ts:144](https://github.com/polkadot-js/api/blob/9dd0c6c/packages/types/src/interfaces/runtime/types.ts#L144)*

Fixed64