> # Interface: Codec

**`name`** Codec

**`description`** 
The base Codec interface. All types implement the interface provided here. Additionally
implementors can add their own specific interfaces and helpres with getters and functions.
The Codec Base is however required for operating as an encoding/decoding layer

## Hierarchy

* **Codec**

  * [MetadataInterface](_metadata_types_.metadatainterface.md)

  * [IMethod](_types_.imethod.md)

  * [IExtrinsicSignature](_types_.iextrinsicsignature.md)

  * [IExtrinsicEra](_types_.iextrinsicera.md)

  * [IExtrinsicImpl](_types_.iextrinsicimpl.md)

## Implemented by

* [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md)
* [AccountId](../classes/_primitive_generic_accountid_.accountid.md)
* [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md)
* [AccountInfo](_interfaces_deprecated_types_.accountinfo.md)
* [Address](../classes/_primitive_generic_address_.address.md)
* [AliveContractInfo](_interfaces_contracts_types_.alivecontractinfo.md)
* [AssetOptions](_interfaces_genericasset_types_.assetoptions.md)
* [AttestedCandidate](_interfaces_parachains_types_.attestedcandidate.md)
* [BalanceLock](_interfaces_balances_types_.balancelock.md)
* [Base](../classes/_codec_base_.base.md)
* [Bidder](_interfaces_parachains_types_.bidder.md)
* [Block](../classes/_primitive_generic_block_.block.md)
* [BlockAttestations](_interfaces_attestations_types_.blockattestations.md)
* [Bool](../classes/_primitive_bool_.bool.md)
* [Bytes](../classes/_primitive_bytes_.bytes.md)
* [Call](../classes/_primitive_generic_call_.call.md)
* [CallIndex](../classes/_primitive_generic_call_.callindex.md)
* [CallMetadata](../classes/_metadata_v0_modules_.callmetadata.md)
* [CandidateReceipt](_interfaces_parachains_types_.candidatereceipt.md)
* [ChainProperties](_interfaces_rpc_types_.chainproperties.md)
* [CodecDate](../classes/_codec_date_.codecdate.md)
* [CodecSet](../classes/_codec_set_.codecset.md)
* [Compact](../classes/_codec_compact_.compact.md)
* [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md)
* [ContractInfo](_interfaces_contracts_types_.contractinfo.md)
* [Conviction](_interfaces_democracy_types_.conviction.md)
* [Data](../classes/_primitive_data_.data.md)
* [Digest](../classes/_primitive_generic_digest_.digest.md)
* [DigestItem](../classes/_primitive_generic_digest_.digestitem.md)
* [DoubleMapType](../classes/_metadata_v5_storage_.doublemaptype.md)
* [DoubleMapType](../classes/_metadata_v4_storage_.doublemaptype.md)
* [DoubleMapType](../classes/_metadata_v3_storage_.doublemaptype.md)
* [Enum](../classes/_codec_enumtype_.enum.md)
* [EraRewards](_interfaces_staking_types_.erarewards.md)
* [Event](../classes/_primitive_generic_event_.event.md)
* [EventData](../classes/_primitive_generic_event_.eventdata.md)
* [EventMetadata](../classes/_metadata_v0_events_.eventmetadata.md)
* [EventRecord](_interfaces_system_types_.eventrecord.md)
* [EventRecord0to76](_interfaces_system_types_.eventrecord0to76.md)
* [Exposure](_interfaces_staking_types_.exposure.md)
* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)
* [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)
* [ExtrinsicExtraV2](../classes/_primitive_extrinsic_v2_extrinsicextra_.extrinsicextrav2.md)
* [ExtrinsicOrHash](_interfaces_rpc_types_.extrinsicorhash.md)
* [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)
* [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)
* [ExtrinsicPayloadV2](../classes/_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)
* [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)
* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicStatus](_interfaces_rpc_types_.extrinsicstatus.md)
* [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)
* [FunctionArgumentMetadata](../classes/_metadata_v0_modules_.functionargumentmetadata.md)
* [FunctionArgumentMetadata](../classes/_metadata_v1_calls_.functionargumentmetadata.md)
* [FunctionMetadata](../classes/_metadata_v0_modules_.functionmetadata.md)
* [FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)
* [H160](../classes/_primitive_h160_.h160.md)
* [H256](../classes/_primitive_h256_.h256.md)
* [H512](../classes/_primitive_h512_.h512.md)
* [Header](_interfaces_runtime_types_.header.md)
* [Health](_interfaces_rpc_types_.health.md)
* [Heartbeat](_interfaces_imonline_types_.heartbeat.md)
* [I128](../classes/_primitive_i128_.i128.md)
* [I16](../classes/_primitive_i16_.i16.md)
* [I256](../classes/_primitive_i256_.i256.md)
* [I32](../classes/_primitive_i32_.i32.md)
* [I64](../classes/_primitive_i64_.i64.md)
* [I64Fixed](../classes/_primitive_i64fixed_.i64fixed.md)
* [I8](../classes/_primitive_i8_.i8.md)
* [IHash](_types_.ihash.md)
* [ImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md)
* [IncludedBlocks](_interfaces_attestations_types_.includedblocks.md)
* [IncomingParachain](_interfaces_parachains_types_.incomingparachain.md)
* [IncomingParachainDeploy](_interfaces_parachains_types_.incomingparachaindeploy.md)
* [IncomingParachainFixed](_interfaces_parachains_types_.incomingparachainfixed.md)
* [IndividualExposure](_interfaces_staking_types_.individualexposure.md)
* [Int](../classes/_codec_int_.int.md)
* [Linkage](../classes/_codec_linkage_.linkage.md)
* [LinkageResult](../classes/_codec_linkage_.linkageresult.md)
* [MagicNumber](../classes/_metadata_magicnumber_.magicnumber.md)
* [MapType](../classes/_metadata_v0_storage_.maptype.md)
* [MapType](../classes/_metadata_v2_storage_.maptype.md)
* [MapType](../classes/_metadata_v4_storage_.maptype.md)
* [Metadata](../classes/_metadata_metadata_.metadata.md)
* [MetadataV0](../classes/_metadata_v0_metadata_.metadatav0.md)
* [MetadataV1](../classes/_metadata_v1_metadata_.metadatav1.md)
* [MetadataV2](../classes/_metadata_v2_metadata_.metadatav2.md)
* [MetadataV3](../classes/_metadata_v3_metadata_.metadatav3.md)
* [MetadataV4](../classes/_metadata_v4_metadata_.metadatav4.md)
* [MetadataV5](../classes/_metadata_v5_metadata_.metadatav5.md)
* [MetadataV6](../classes/_metadata_v6_metadata_.metadatav6.md)
* [MetadataV7](../classes/_metadata_v7_metadata_.metadatav7.md)
* [MetadataVersioned](../classes/_metadata_metadataversioned_.metadataversioned.md)
* [ModuleConstantMetadata](../classes/_metadata_v6_constants_.moduleconstantmetadata.md)
* [ModuleMetadata](../classes/_metadata_v4_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v5_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v1_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v6_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v3_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v7_metadata_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v0_modules_.modulemetadata.md)
* [ModuleMetadata](../classes/_metadata_v2_metadata_.modulemetadata.md)
* [MoreAttestations](_interfaces_attestations_types_.moreattestations.md)
* [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md)
* [NetworkState](_interfaces_rpc_types_.networkstate.md)
* [NewAccountOutcome](_interfaces_deprecated_types_.newaccountoutcome.md)
* [NewBidder](_interfaces_parachains_types_.newbidder.md)
* [Null](../classes/_primitive_null_.null.md)
* [OpaqueNetworkState](_interfaces_imonline_types_.opaquenetworkstate.md)
* [Option](../classes/_codec_option_.option.md)
* [Origin](../classes/_primitive_generic_origin_.origin.md)
* [OuterDispatchCall](../classes/_metadata_v0_calls_.outerdispatchcall.md)
* [OuterDispatchMetadata](../classes/_metadata_v0_calls_.outerdispatchmetadata.md)
* [OuterEventEventMetadata](../classes/_metadata_v0_events_.outereventeventmetadata.md)
* [OuterEventMetadata](../classes/_metadata_v0_events_.outereventmetadata.md)
* [Owner](_interfaces_genericasset_types_.owner.md)
* [ParachainDispatchOrigin](_interfaces_parachains_types_.parachaindispatchorigin.md)
* [PeerInfo](_interfaces_rpc_types_.peerinfo.md)
* [PendingPause](_interfaces_grandpa_types_.pendingpause.md)
* [PendingResume](_interfaces_grandpa_types_.pendingresume.md)
* [PermissionVersions](_interfaces_genericasset_types_.permissionversions.md)
* [PermissionsV1](_interfaces_genericasset_types_.permissionsv1.md)
* [Phase](_interfaces_system_types_.phase.md)
* [PlainType](../classes/_metadata_v0_storage_.plaintype.md)
* [PrefabWasmModule](_interfaces_contracts_types_.prefabwasmmodule.md)
* [RawAuraBorosPreDigest](_interfaces_abrs_types_.rawauraborospredigest.md)
* [RawAuraPreDigest](_interfaces_aura_types_.rawaurapredigest.md)
* [RawBabePreDigest](_interfaces_babe_types_.rawbabepredigest.md)
* [ReferendumInfo](_interfaces_democracy_types_.referenduminfo.md)
* [RewardDestination](_interfaces_staking_types_.rewarddestination.md)
* [RuntimeModuleMetadata](../classes/_metadata_v0_modules_.runtimemodulemetadata.md)
* [RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)
* [Schedule](_interfaces_contracts_types_.schedule.md)
* [SignedBlock](_interfaces_runtime_types_.signedblock.md)
* [SlotRange](_interfaces_parachains_types_.slotrange.md)
* [StakingLedger](_interfaces_staking_types_.stakingledger.md)
* [StorageChangeSet](_interfaces_rpc_types_.storagechangeset.md)
* [StorageData](../classes/_primitive_storagedata_.storagedata.md)
* [StorageFunctionMetadata](../classes/_metadata_v3_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v4_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v0_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v5_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v2_storage_.storagefunctionmetadata.md)
* [StorageFunctionModifier](../classes/_metadata_v0_storage_.storagefunctionmodifier.md)
* [StorageFunctionType](../classes/_metadata_v3_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v4_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v2_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v0_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v5_storage_.storagefunctiontype.md)
* [StorageHasher](../classes/_primitive_storagehasher_.storagehasher.md)
* [StorageKey](../classes/_primitive_storagekey_.storagekey.md)
* [StorageMetadata](../classes/_metadata_v0_storage_.storagemetadata.md)
* [StorageMetadata](../classes/_metadata_v7_storage_.storagemetadata.md)
* [StoredPendingChange](_interfaces_grandpa_types_.storedpendingchange.md)
* [StoredState](_interfaces_grandpa_types_.storedstate.md)
* [Struct](../classes/_codec_struct_.struct.md)
* [StructAny](../classes/_codec_structany_.structany.md)
* [Text](../classes/_primitive_text_.text.md)
* [TreasuryProposal](_interfaces_treasury_types_.treasuryproposal.md)
* [Tuple](../classes/_codec_tuple_.tuple.md)
* [Type](../classes/_primitive_type_.type.md)
* [U128](../classes/_primitive_u128_.u128.md)
* [U16](../classes/_primitive_u16_.u16.md)
* [U256](../classes/_primitive_u256_.u256.md)
* [U32](../classes/_primitive_u32_.u32.md)
* [U64](../classes/_primitive_u64_.u64.md)
* [U8](../classes/_primitive_u8_.u8.md)
* [U8a](../classes/_codec_u8a_.u8a.md)
* [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)
* [UInt](../classes/_codec_uint_.uint.md)
* [USize](../classes/_primitive_usize_.usize.md)
* [UncleEntryItem](_interfaces_authorship_types_.uncleentryitem.md)
* [Unconstructable](../classes/_primitive_unconstructable_.unconstructable.md)
* [UnlockChunk](_interfaces_staking_types_.unlockchunk.md)
* [UpwardMessage](_interfaces_parachains_types_.upwardmessage.md)
* [ValidatorPrefs](_interfaces_staking_types_.validatorprefs.md)
* [ValidityAttestation](_interfaces_parachains_types_.validityattestation.md)
* [Vec](../classes/_codec_vec_.vec.md)
* [VecAny](../classes/_codec_vecany_.vecany.md)
* [VecFixed](../classes/_codec_vecfixed_.vecfixed.md)
* [VestingSchedule](_interfaces_balances_types_.vestingschedule.md)
* [Vote](../classes/_primitive_generic_vote_.vote.md)
* [VoteThreshold](_interfaces_elections_types_.votethreshold.md)
* [VoterInfo](_interfaces_elections_types_.voterinfo.md)
* [Votes](_interfaces_collective_types_.votes.md)
* [WithdrawReasons](_interfaces_balances_types_.withdrawreasons.md)

## Index

### Properties

* [encodedLength](_types_.codec.md#encodedlength)
* [hash](_types_.codec.md#hash)
* [isEmpty](_types_.codec.md#isempty)

### Methods

* [eq](_types_.codec.md#eq)
* [toHex](_types_.codec.md#tohex)
* [toJSON](_types_.codec.md#tojson)
* [toRawType](_types_.codec.md#torawtype)
* [toString](_types_.codec.md#tostring)
* [toU8a](_types_.codec.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Defined in [types.ts:73](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:78](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L78)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Defined in [types.ts:83](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L83)*

**`description`** Checks if the value is an empty value

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [types.ts:88](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L93)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L98)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L103)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [types.ts:108](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L108)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/40cf70f/packages/types/src/types.ts#L114)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*