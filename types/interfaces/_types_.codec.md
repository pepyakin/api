> # Interface: Codec

**`name`** Codec

**`description`** 
The base Codec interface. All types implement the interface provided here. Additionally
implementors can add their own specific interfaces and helpres with getters and functions.
The Codec Base is however required for operating as an encoding/decoding layer

## Hierarchy

* **Codec**

  * [MetadataInterface](_metadata_types_.metadatainterface.md)

  * [CompactEncodable](_codec_compact_.compactencodable.md)

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
* [CallMetadataV0](_interfaces_metadata_types_.callmetadatav0.md)
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
* [DoubleMapTypeV3](_interfaces_metadata_types_.doublemaptypev3.md)
* [DoubleMapTypeV4](_interfaces_metadata_types_.doublemaptypev4.md)
* [DoubleMapTypeV5](_interfaces_metadata_types_.doublemaptypev5.md)
* [Enum](../classes/_codec_enum_.enum.md)
* [EraRewards](_interfaces_staking_types_.erarewards.md)
* [Event](../classes/_primitive_generic_event_.event.md)
* [EventData](../classes/_primitive_generic_event_.eventdata.md)
* [EventMetadataV0](_interfaces_metadata_types_.eventmetadatav0.md)
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
* [Forcing](_interfaces_staking_types_.forcing.md)
* [FunctionArgumentMetadataV0](_interfaces_metadata_types_.functionargumentmetadatav0.md)
* [FunctionMetadataV0](_interfaces_metadata_types_.functionmetadatav0.md)
* [FunctionMetadataV1](_interfaces_metadata_types_.functionmetadatav1.md)
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
* [MapTypeV0](_interfaces_metadata_types_.maptypev0.md)
* [MapTypeV2](_interfaces_metadata_types_.maptypev2.md)
* [MapTypeV4](_interfaces_metadata_types_.maptypev4.md)
* [Metadata](../classes/_metadata_metadata_.metadata.md)
* [MetadataV0](_interfaces_metadata_types_.metadatav0.md)
* [MetadataV1](_interfaces_metadata_types_.metadatav1.md)
* [MetadataV2](../classes/_metadata_v2_metadata_.metadatav2.md)
* [MetadataV3](../classes/_metadata_v3_metadata_.metadatav3.md)
* [MetadataV4](../classes/_metadata_v4_metadata_.metadatav4.md)
* [MetadataV5](../classes/_metadata_v5_metadata_.metadatav5.md)
* [MetadataV6](../classes/_metadata_v6_metadata_.metadatav6.md)
* [MetadataV7](../classes/_metadata_v7_metadata_.metadatav7.md)
* [MetadataVersioned](../classes/_metadata_metadataversioned_.metadataversioned.md)
* [ModuleConstantMetadataV6](_interfaces_metadata_types_.moduleconstantmetadatav6.md)
* [ModuleMetadataV0](_interfaces_metadata_types_.modulemetadatav0.md)
* [ModuleMetadataV1](_interfaces_metadata_types_.modulemetadatav1.md)
* [ModuleMetadataV2](../classes/_metadata_v2_metadata_.modulemetadatav2.md)
* [ModuleMetadataV3](../classes/_metadata_v3_metadata_.modulemetadatav3.md)
* [ModuleMetadataV4](../classes/_metadata_v4_metadata_.modulemetadatav4.md)
* [ModuleMetadataV5](../classes/_metadata_v5_metadata_.modulemetadatav5.md)
* [ModuleMetadataV6](../classes/_metadata_v6_metadata_.modulemetadatav6.md)
* [ModuleMetadataV7](../classes/_metadata_v7_metadata_.modulemetadatav7.md)
* [MoreAttestations](_interfaces_attestations_types_.moreattestations.md)
* [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md)
* [NetworkState](_interfaces_rpc_types_.networkstate.md)
* [NewAccountOutcome](_interfaces_deprecated_types_.newaccountoutcome.md)
* [NewBidder](_interfaces_parachains_types_.newbidder.md)
* [Null](../classes/_primitive_null_.null.md)
* [OffenceDetails](_interfaces_offences_types_.offencedetails.md)
* [OpaqueNetworkState](_interfaces_imonline_types_.opaquenetworkstate.md)
* [Option](../classes/_codec_option_.option.md)
* [Origin](../classes/_primitive_generic_origin_.origin.md)
* [OuterDispatchCallV0](_interfaces_metadata_types_.outerdispatchcallv0.md)
* [OuterDispatchMetadataV0](_interfaces_metadata_types_.outerdispatchmetadatav0.md)
* [OuterEventMetadataV0](_interfaces_metadata_types_.outereventmetadatav0.md)
* [Owner](_interfaces_genericasset_types_.owner.md)
* [ParachainDispatchOrigin](_interfaces_parachains_types_.parachaindispatchorigin.md)
* [PeerInfo](_interfaces_rpc_types_.peerinfo.md)
* [PendingPause](_interfaces_grandpa_types_.pendingpause.md)
* [PendingResume](_interfaces_grandpa_types_.pendingresume.md)
* [PermissionVersions](_interfaces_genericasset_types_.permissionversions.md)
* [PermissionsV1](_interfaces_genericasset_types_.permissionsv1.md)
* [Phase](_interfaces_system_types_.phase.md)
* [PrefabWasmModule](_interfaces_contracts_types_.prefabwasmmodule.md)
* [RawAuraPreDigest](_interfaces_aura_types_.rawaurapredigest.md)
* [RawBabePreDigest](_interfaces_babe_types_.rawbabepredigest.md)
* [RawBabePreDigestPrimary](_interfaces_babe_types_.rawbabepredigestprimary.md)
* [RawBabePreDigestSecondary](_interfaces_babe_types_.rawbabepredigestsecondary.md)
* [ReferendumInfo](_interfaces_democracy_types_.referenduminfo.md)
* [RewardDestination](_interfaces_staking_types_.rewarddestination.md)
* [RuntimeModuleMetadataV0](_interfaces_metadata_types_.runtimemodulemetadatav0.md)
* [RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)
* [Schedule](_interfaces_contracts_types_.schedule.md)
* [SignedBlock](_interfaces_runtime_types_.signedblock.md)
* [SlashJournalEntry](_interfaces_staking_types_.slashjournalentry.md)
* [SlotRange](_interfaces_parachains_types_.slotrange.md)
* [StakingLedger](_interfaces_staking_types_.stakingledger.md)
* [StorageChangeSet](_interfaces_rpc_types_.storagechangeset.md)
* [StorageData](../classes/_primitive_storagedata_.storagedata.md)
* [StorageFunctionMetadata](../classes/_metadata_v3_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v5_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v2_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v4_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadataV0](_interfaces_metadata_types_.storagefunctionmetadatav0.md)
* [StorageFunctionModifierV0](_interfaces_metadata_types_.storagefunctionmodifierv0.md)
* [StorageFunctionType](../classes/_metadata_v2_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v5_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v4_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v3_storage_.storagefunctiontype.md)
* [StorageFunctionTypeV0](_interfaces_metadata_types_.storagefunctiontypev0.md)
* [StorageHasher](../classes/_primitive_storagehasher_.storagehasher.md)
* [StorageKey](../classes/_primitive_storagekey_.storagekey.md)
* [StorageMetadata](../classes/_metadata_v7_storage_.storagemetadata.md)
* [StorageMetadataV0](_interfaces_metadata_types_.storagemetadatav0.md)
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

*Defined in [types.ts:76](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:81](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L81)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L96)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L111)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Defined in [types.ts:117](https://github.com/polkadot-js/api/blob/71d4a7e/packages/types/src/types.ts#L117)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*