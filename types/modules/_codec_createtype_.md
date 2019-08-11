> # External module: "codec/createType"

## Index

### Functions

* [ClassOf](_codec_createtype_.md#classof)
* [ClassOfUnsafe](_codec_createtype_.md#classofunsafe)
* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [createTypeUnsafe](_codec_createtype_.md#createtypeunsafe)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeClassArray](_codec_createtype_.md#gettypeclassarray)
* [getTypeClassMap](_codec_createtype_.md#gettypeclassmap)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

## Functions

###  ClassOf

▸ **ClassOf**<**K**>(`name`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*`InterfaceRegistry[K]`*›*

*Defined in [codec/createType.ts:191](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L191)*

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_.md#interfacetypes)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`InterfaceRegistry[K]`*›*

___

###  ClassOfUnsafe

▸ **ClassOfUnsafe**<**T**, **K**>(`name`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

*Defined in [codec/createType.ts:186](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L186)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`name` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

___

###  createClass

▸ **createClass**<**T**, **K**>(`type`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

*Defined in [codec/createType.ts:175](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L175)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`type` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

___

###  createType

▸ **createType**<**K**>(`type`: `K`, ...`params`: any[]): *`InterfaceRegistry[K]`*

*Defined in [codec/createType.ts:366](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L366)*

Create an instance of a `type` with a given `value`.

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_.md#interfacetypes)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | `K` | A recognizable string representing the type to create an instance from |
`...params` | any[] | - |

**Returns:** *`InterfaceRegistry[K]`*

___

###  createTypeUnsafe

▸ **createTypeUnsafe**<**T**, **K**>(`type`: `K`, `params`: any[], `isPedantic?`: undefined | false | true): *`FromReg<T, K>`*

*Defined in [codec/createType.ts:345](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L345)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | `K` | - |
`params` | any[] |  [] |
`isPedantic?` | undefined \| false \| true | - |

**Returns:** *`FromReg<T, K>`*

___

###  getTypeClass

▸ **getTypeClass**<**T**>(`value`: [TypeDef](../interfaces/_codec_types_.typedef.md), `Fallback?`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/createType.ts:212](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L212)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [TypeDef](../interfaces/_codec_types_.typedef.md) |
`Fallback?` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

___

###  getTypeClassArray

▸ **getTypeClassArray**(`defs`: [TypeDef](../interfaces/_codec_types_.typedef.md)[]): *"bool" | "Option<bool>" | "Vec<bool>" | "Bytes" | "Option<Bytes>" | "Vec<Bytes>" | "Data" | "Option<Data>" | "Vec<Data>" | "H160" | "Option<H160>" | "Vec<H160>" | "H256" | "Option<H256>" | "Vec<H256>" | "H512" | "Option<H512>" | "Vec<H512>" | "i8" | "Option<i8>" | "Vec<i8>" | "i16" | "Option<i16>" | "Vec<i16>" | "i32" | "Option<i32>" | "Vec<i32>" | "i64" | "Option<i64>" | "Vec<i64>" | "Fixed64" | "Option<Fixed64>" | "Vec<Fixed64>" | "i128" | "Option<i128>" | "Vec<i128>" | "i256" | "Option<i256>" | "Vec<i256>" | "Null" | "Option<Null>" | "Vec<Null>" | "StorageData" | "Option<StorageData>" | "Vec<StorageData>" | "StorageHasher" | "Option<StorageHasher>" | "Vec<StorageHasher>" | "StorageKey" | "Option<StorageKey>" | "Vec<StorageKey>" | "Text" | "Option<Text>" | "Vec<Text>" | "Type" | "Option<Type>" | "Vec<Type>" | "u8" | "Compact<u8>" | "Option<u8>" | "Vec<u8>" | "u16" | "Compact<u16>" | "Option<u16>" | "Vec<u16>" | "u32" | "Compact<u32>" | "Option<u32>" | "Vec<u32>" | "u64" | "Compact<u64>" | "Option<u64>" | "Vec<u64>" | "u128" | "Compact<u128>" | "Option<u128>" | "Vec<u128>" | "u256" | "Compact<u256>" | "Option<u256>" | "Vec<u256>" | "usize" | "Compact<usize>" | "Option<usize>" | "Vec<usize>" | "AccountId" | "Option<AccountId>" | "Vec<AccountId>" | "AccountIdOf" | "Option<AccountIdOf>" | "Vec<AccountIdOf>" | "AccountIndex" | "Compact<AccountIndex>" | "Option<AccountIndex>" | "Vec<AccountIndex>" | "Address" | "Option<Address>" | "Vec<Address>" | "AssetId" | "Compact<AssetId>" | "Option<AssetId>" | "Vec<AssetId>" | "Balance" | "Compact<Balance>" | "Option<Balance>" | "Vec<Balance>" | "BalanceOf" | "Option<BalanceOf>" | "Vec<BalanceOf>" | "Block" | "Option<Block>" | "Vec<Block>" | "BlockNumber" | "Compact<BlockNumber>" | "Option<BlockNumber>" | "Vec<BlockNumber>" | "Call" | "Option<Call>" | "Vec<Call>" | "ConsensusEngineId" | "Compact<ConsensusEngineId>" | "Option<ConsensusEngineId>" | "Vec<ConsensusEngineId>" | "Digest" | "Option<Digest>" | "Vec<Digest>" | "DigestItem" | "Option<DigestItem>" | "Vec<DigestItem>" | "Extrinsic" | "Option<Extrinsic>" | "Vec<Extrinsic>" | "ExtrinsicEra" | "Option<ExtrinsicEra>" | "Vec<ExtrinsicEra>" | "ExtrinsicPayload" | "Option<ExtrinsicPayload>" | "Vec<ExtrinsicPayload>" | "Hash" | "Option<Hash>" | "Vec<Hash>" | "Header" | "Option<Header>" | "Vec<Header>" | "Index" | "Compact<Index>" | "Option<Index>" | "Vec<Index>" | "Justification" | "Option<Justification>" | "Vec<Justification>" | "KeyValue" | "Option<KeyValue>" | "Vec<KeyValue>" | "KeyTypeId" | "Compact<KeyTypeId>" | "Option<KeyTypeId>" | "Vec<KeyTypeId>" | "LockIdentifier" | "Option<LockIdentifier>" | "Vec<LockIdentifier>" | "Moment" | "Compact<Moment>" | "Option<Moment>" | "Vec<Moment>" | "Origin" | "Option<Origin>" | "Vec<Origin>" | "Perbill" | "Compact<Perbill>" | "Option<Perbill>" | "Vec<Perbill>" | "Permill" | "Compact<Permill>" | "Option<Permill>" | "Vec<Permill>" | "Phantom" | "Option<Phantom>" | "Vec<Phantom>" | "PhantomData" | "Option<PhantomData>" | "Vec<PhantomData>" | "Signature" | "Option<Signature>" | "Vec<Signature>" | "SignedBlock" | "Option<SignedBlock>" | "Vec<SignedBlock>" | "ValidatorId" | "Option<ValidatorId>" | "Vec<ValidatorId>" | "Weight" | "Compact<Weight>" | "Option<Weight>" | "Vec<Weight>" | "WeightMultiplier" | "Option<WeightMultiplier>" | "Vec<WeightMultiplier>" | "Ed25519Signature" | "Option<Ed25519Signature>" | "Vec<Ed25519Signature>" | "Sr25519Signature" | "Option<Sr25519Signature>" | "Vec<Sr25519Signature>" | "ImmortalEra" | "Option<ImmortalEra>" | "Vec<ImmortalEra>" | "MortalEra" | "Option<MortalEra>" | "Vec<MortalEra>" | "PreRuntime" | "Option<PreRuntime>" | "Vec<PreRuntime>" | "SealV0" | "Option<SealV0>" | "Vec<SealV0>" | "Seal" | "Option<Seal>" | "Vec<Seal>" | "Consensus" | "Option<Consensus>" | "Vec<Consensus>" | "RawAuraBorosPreDigest" | "Option<RawAuraBorosPreDigest>" | "Vec<RawAuraBorosPreDigest>" | "InclusionHeight" | "Option<InclusionHeight>" | "Vec<InclusionHeight>" | "Uncle" | "Option<Uncle>" | "Vec<Uncle>" | "UncleEntryItem" | "Option<UncleEntryItem>" | "Vec<UncleEntryItem>" | "RawAuraPreDigest" | "Option<RawAuraPreDigest>" | "Vec<RawAuraPreDigest>" | "BabeWeight" | "Compact<BabeWeight>" | "Option<BabeWeight>" | "Vec<BabeWeight>" | "RawBabePreDigest" | "Option<RawBabePreDigest>" | "Vec<RawBabePreDigest>" | "SlotNumber" | "Compact<SlotNumber>" | "Option<SlotNumber>" | "Vec<SlotNumber>" | "BalanceLock" | "Option<BalanceLock>" | "Vec<BalanceLock>" | "VestingSchedule" | "Option<VestingSchedule>" | "Vec<VestingSchedule>" | "WithdrawReasons" | "Option<WithdrawReasons>" | "Vec<WithdrawReasons>" | "MemberCount" | "Compact<MemberCount>" | "Option<MemberCount>" | "Vec<MemberCount>" | "ProposalIndex" | "Compact<ProposalIndex>" | "Option<ProposalIndex>" | "Vec<ProposalIndex>" | "Votes" | "Option<Votes>" | "Vec<Votes>" | "AuthorityId" | "Option<AuthorityId>" | "Vec<AuthorityId>" | "AliveContractInfo" | "Option<AliveContractInfo>" | "Vec<AliveContractInfo>" | "CodeHash" | "Option<CodeHash>" | "Vec<CodeHash>" | "ContractInfo" | "Option<ContractInfo>" | "Vec<ContractInfo>" | "ContractStorageKey" | "Option<ContractStorageKey>" | "Vec<ContractStorageKey>" | "Gas" | "Compact<Gas>" | "Option<Gas>" | "Vec<Gas>" | "PrefabWasmModule" | "Option<PrefabWasmModule>" | "Vec<PrefabWasmModule>" | "PrefabWasmModuleReserved" | "Option<PrefabWasmModuleReserved>" | "Vec<PrefabWasmModuleReserved>" | "Schedule" | "Option<Schedule>" | "Vec<Schedule>" | "SeedOf" | "Option<SeedOf>" | "Vec<SeedOf>" | "TombstoneContractInfo" | "Option<TombstoneContractInfo>" | "Vec<TombstoneContractInfo>" | "TrieId" | "Option<TrieId>" | "Vec<TrieId>" | "Conviction" | "Option<Conviction>" | "Vec<Conviction>" | "PropIndex" | "Compact<PropIndex>" | "Option<PropIndex>" | "Vec<PropIndex>" | "Proposal" | "Option<Proposal>" | "Vec<Proposal>" | "ReferendumIndex" | "Compact<ReferendumIndex>" | "Option<ReferendumIndex>" | "Vec<ReferendumIndex>" | "ReferendumInfo" | "Option<ReferendumInfo>" | "Vec<ReferendumInfo>" | "NewAccountOutcome" | "Option<NewAccountOutcome>" | "Vec<NewAccountOutcome>" | "Amount" | "Option<Amount>" | "Vec<Amount>" | "AssetOf" | "Compact<AssetOf>" | "Option<AssetOf>" | "Vec<AssetOf>" | "AccountInfo" | "Option<AccountInfo>" | "Vec<AccountInfo>" | "LockPeriods" | "Option<LockPeriods>" | "Vec<LockPeriods>" | "InherentOfflineReport" | "Option<InherentOfflineReport>" | "Vec<InherentOfflineReport>" | "SessionKey" | "Option<SessionKey>" | "Vec<SessionKey>" | "OpaqueKey" | "Option<OpaqueKey>" | "Vec<OpaqueKey>" | "ApprovalFlag" | "Compact<ApprovalFlag>" | "Option<ApprovalFlag>" | "Vec<ApprovalFlag>" | "SetIndex" | "Compact<SetIndex>" | "Option<SetIndex>" | "Vec<SetIndex>" | "Vote" | "Option<Vote>" | "Vec<Vote>" | "VoteIndex" | "Compact<VoteIndex>" | "Option<VoteIndex>" | "Vec<VoteIndex>" | "VoterInfo" | "Option<VoterInfo>" | "Vec<VoterInfo>" | "VoteThreshold" | "Option<VoteThreshold>" | "Vec<VoteThreshold>" | "AssetOptions" | "Option<AssetOptions>" | "Vec<AssetOptions>" | "Owner" | "Option<Owner>" | "Vec<Owner>" | "PermissionsV1" | "Option<PermissionsV1>" | "Vec<PermissionsV1>" | "PermissionVersions" | "Option<PermissionVersions>" | "Vec<PermissionVersions>" | "PermissionLatest" | "Option<PermissionLatest>" | "Vec<PermissionLatest>" | "AuthorityWeight" | "Compact<AuthorityWeight>" | "Option<AuthorityWeight>" | "Vec<AuthorityWeight>" | "NextAuthority" | "Option<NextAuthority>" | "Vec<NextAuthority>" | "PendingPause" | "Option<PendingPause>" | "Vec<PendingPause>" | "PendingResume" | "Option<PendingResume>" | "Vec<PendingResume>" | "StoredPendingChange" | "Option<StoredPendingChange>" | "Vec<StoredPendingChange>" | "StoredState" | "Option<StoredState>" | "Vec<StoredState>" | "AuthIndex" | "Compact<AuthIndex>" | "Option<AuthIndex>" | "Vec<AuthIndex>" | "AuthoritySignature" | "Option<AuthoritySignature>" | "Vec<AuthoritySignature>" | "Heartbeat" | "Option<Heartbeat>" | "Vec<Heartbeat>" | "OpaqueMultiaddr" | "Option<OpaqueMultiaddr>" | "Vec<OpaqueMultiaddr>" | "OpaquePeerId" | "Option<OpaquePeerId>" | "Vec<OpaquePeerId>" | "OpaqueNetworkState" | "Option<OpaqueNetworkState>" | "Vec<OpaqueNetworkState>" | "SessionIndex" | "Compact<SessionIndex>" | "Option<SessionIndex>" | "Vec<SessionIndex>" | "Keys" | "Option<Keys>" | "Vec<Keys>" | "SessionKeysSubstrate" | "Option<SessionKeysSubstrate>" | "Vec<SessionKeysSubstrate>" | "SessionKeysPolkadot" | "Option<SessionKeysPolkadot>" | "Vec<SessionKeysPolkadot>" | "EraIndex" | "Compact<EraIndex>" | "Option<EraIndex>" | "Vec<EraIndex>" | "EraRewards" | "Option<EraRewards>" | "Vec<EraRewards>" | "Exposure" | "Option<Exposure>" | "Vec<Exposure>" | "IndividualExposure" | "Option<IndividualExposure>" | "Vec<IndividualExposure>" | "MomentOf" | "Option<MomentOf>" | "Vec<MomentOf>" | "RewardDestination" | "Option<RewardDestination>" | "Vec<RewardDestination>" | "StakingLedger" | "Option<StakingLedger>" | "Vec<StakingLedger>" | "UnlockChunk" | "Option<UnlockChunk>" | "Vec<UnlockChunk>" | "ValidatorPrefs" | "Option<ValidatorPrefs>" | "Vec<ValidatorPrefs>" | "DigestOf" | "Option<DigestOf>" | "Vec<DigestOf>" | "Event" | "Option<Event>" | "Vec<Event>" | "EventId" | "Option<EventId>" | "Vec<EventId>" | "EventIndex" | "Compact<EventIndex>" | "Option<EventIndex>" | "Vec<EventIndex>" | "EventRecord" | "Option<EventRecord>" | "Vec<EventRecord>" | "EventRecord0to76" | "Option<EventRecord0to76>" | "Vec<EventRecord0to76>" | "Key" | "Option<Key>" | "Vec<Key>" | "Phase" | "Option<Phase>" | "Vec<Phase>" | "TreasuryProposal" | "Option<TreasuryProposal>" | "Vec<TreasuryProposal>" | "BlockAttestations" | "Option<BlockAttestations>" | "Vec<BlockAttestations>" | "IncludedBlocks" | "Option<IncludedBlocks>" | "Vec<IncludedBlocks>" | "MoreAttestations" | "Option<MoreAttestations>" | "Vec<MoreAttestations>" | "EcdsaSignature" | "Option<EcdsaSignature>" | "Vec<EcdsaSignature>" | "EthereumAddress" | "Option<EthereumAddress>" | "Vec<EthereumAddress>" | "AttestedCandidate" | "Option<AttestedCandidate>" | "Vec<AttestedCandidate>" | "AuctionIndex" | "Compact<AuctionIndex>" | "Option<AuctionIndex>" | "Vec<AuctionIndex>" | "BalanceUpload" | "Option<BalanceUpload>" | "Vec<BalanceUpload>" | "Bidder" | "Option<Bidder>" | "Vec<Bidder>" | "CandidateReceipt" | "Option<CandidateReceipt>" | "Vec<CandidateReceipt>" | "CollatorSignature" | "Option<CollatorSignature>" | "Vec<CollatorSignature>" | "EgressQueueRoot" | "Option<EgressQueueRoot>" | "Vec<EgressQueueRoot>" | "HeadData" | "Option<HeadData>" | "Vec<HeadData>" | "IncomingParachainDeploy" | "Option<IncomingParachainDeploy>" | "Vec<IncomingParachainDeploy>" | "IncomingParachainFixed" | "Option<IncomingParachainFixed>" | "Vec<IncomingParachainFixed>" | "IncomingParachain" | "Option<IncomingParachain>" | "Vec<IncomingParachain>" | "LeasePeriod" | "Option<LeasePeriod>" | "Vec<LeasePeriod>" | "LeasePeriodOf" | "Option<LeasePeriodOf>" | "Vec<LeasePeriodOf>" | "NewBidder" | "Option<NewBidder>" | "Vec<NewBidder>" | "ParaId" | "Compact<ParaId>" | "Option<ParaId>" | "Vec<ParaId>" | "ParaIdOf" | "Option<ParaIdOf>" | "Vec<ParaIdOf>" | "ParachainDispatchOrigin" | "Option<ParachainDispatchOrigin>" | "Vec<ParachainDispatchOrigin>" | "SlotRange" | "Option<SlotRange>" | "Vec<SlotRange>" | "SubId" | "Compact<SubId>" | "Option<SubId>" | "Vec<SubId>" | "UpwardMessage" | "Option<UpwardMessage>" | "Vec<UpwardMessage>" | "ValidityAttestation" | "Option<ValidityAttestation>" | "Vec<ValidityAttestation>" | "ValidatorIndex" | "Compact<ValidatorIndex>" | "Option<ValidatorIndex>" | "Vec<ValidatorIndex>" | "ValidityVote" | "Option<ValidityVote>" | "Vec<ValidityVote>" | "WinningDataEntry" | "Option<WinningDataEntry>" | "Vec<WinningDataEntry>" | "WinningData" | "Option<WinningData>" | "Vec<WinningData>" | "ApiId" | "Option<ApiId>" | "Vec<ApiId>" | "ChainProperties" | "Option<ChainProperties>" | "Vec<ChainProperties>" | "ExtrinsicOrHash" | "Option<ExtrinsicOrHash>" | "Vec<ExtrinsicOrHash>" | "ExtrinsicStatus" | "Option<ExtrinsicStatus>" | "Vec<ExtrinsicStatus>" | "Health" | "Option<Health>" | "Vec<Health>" | "KeyValueOption" | "Option<KeyValueOption>" | "Vec<KeyValueOption>" | "NetworkState" | "Option<NetworkState>" | "Vec<NetworkState>" | "PeerInfo" | "Option<PeerInfo>" | "Vec<PeerInfo>" | "RuntimeVersionApi" | "Option<RuntimeVersionApi>" | "Vec<RuntimeVersionApi>" | "RuntimeVersion" | "Option<RuntimeVersion>" | "Vec<RuntimeVersion>" | "StorageChangeSet" | "Option<StorageChangeSet>" | "Vec<StorageChangeSet>"[]*

*Defined in [codec/createType.ts:205](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`defs` | [TypeDef](../interfaces/_codec_types_.typedef.md)[] |

**Returns:** *"bool" | "Option<bool>" | "Vec<bool>" | "Bytes" | "Option<Bytes>" | "Vec<Bytes>" | "Data" | "Option<Data>" | "Vec<Data>" | "H160" | "Option<H160>" | "Vec<H160>" | "H256" | "Option<H256>" | "Vec<H256>" | "H512" | "Option<H512>" | "Vec<H512>" | "i8" | "Option<i8>" | "Vec<i8>" | "i16" | "Option<i16>" | "Vec<i16>" | "i32" | "Option<i32>" | "Vec<i32>" | "i64" | "Option<i64>" | "Vec<i64>" | "Fixed64" | "Option<Fixed64>" | "Vec<Fixed64>" | "i128" | "Option<i128>" | "Vec<i128>" | "i256" | "Option<i256>" | "Vec<i256>" | "Null" | "Option<Null>" | "Vec<Null>" | "StorageData" | "Option<StorageData>" | "Vec<StorageData>" | "StorageHasher" | "Option<StorageHasher>" | "Vec<StorageHasher>" | "StorageKey" | "Option<StorageKey>" | "Vec<StorageKey>" | "Text" | "Option<Text>" | "Vec<Text>" | "Type" | "Option<Type>" | "Vec<Type>" | "u8" | "Compact<u8>" | "Option<u8>" | "Vec<u8>" | "u16" | "Compact<u16>" | "Option<u16>" | "Vec<u16>" | "u32" | "Compact<u32>" | "Option<u32>" | "Vec<u32>" | "u64" | "Compact<u64>" | "Option<u64>" | "Vec<u64>" | "u128" | "Compact<u128>" | "Option<u128>" | "Vec<u128>" | "u256" | "Compact<u256>" | "Option<u256>" | "Vec<u256>" | "usize" | "Compact<usize>" | "Option<usize>" | "Vec<usize>" | "AccountId" | "Option<AccountId>" | "Vec<AccountId>" | "AccountIdOf" | "Option<AccountIdOf>" | "Vec<AccountIdOf>" | "AccountIndex" | "Compact<AccountIndex>" | "Option<AccountIndex>" | "Vec<AccountIndex>" | "Address" | "Option<Address>" | "Vec<Address>" | "AssetId" | "Compact<AssetId>" | "Option<AssetId>" | "Vec<AssetId>" | "Balance" | "Compact<Balance>" | "Option<Balance>" | "Vec<Balance>" | "BalanceOf" | "Option<BalanceOf>" | "Vec<BalanceOf>" | "Block" | "Option<Block>" | "Vec<Block>" | "BlockNumber" | "Compact<BlockNumber>" | "Option<BlockNumber>" | "Vec<BlockNumber>" | "Call" | "Option<Call>" | "Vec<Call>" | "ConsensusEngineId" | "Compact<ConsensusEngineId>" | "Option<ConsensusEngineId>" | "Vec<ConsensusEngineId>" | "Digest" | "Option<Digest>" | "Vec<Digest>" | "DigestItem" | "Option<DigestItem>" | "Vec<DigestItem>" | "Extrinsic" | "Option<Extrinsic>" | "Vec<Extrinsic>" | "ExtrinsicEra" | "Option<ExtrinsicEra>" | "Vec<ExtrinsicEra>" | "ExtrinsicPayload" | "Option<ExtrinsicPayload>" | "Vec<ExtrinsicPayload>" | "Hash" | "Option<Hash>" | "Vec<Hash>" | "Header" | "Option<Header>" | "Vec<Header>" | "Index" | "Compact<Index>" | "Option<Index>" | "Vec<Index>" | "Justification" | "Option<Justification>" | "Vec<Justification>" | "KeyValue" | "Option<KeyValue>" | "Vec<KeyValue>" | "KeyTypeId" | "Compact<KeyTypeId>" | "Option<KeyTypeId>" | "Vec<KeyTypeId>" | "LockIdentifier" | "Option<LockIdentifier>" | "Vec<LockIdentifier>" | "Moment" | "Compact<Moment>" | "Option<Moment>" | "Vec<Moment>" | "Origin" | "Option<Origin>" | "Vec<Origin>" | "Perbill" | "Compact<Perbill>" | "Option<Perbill>" | "Vec<Perbill>" | "Permill" | "Compact<Permill>" | "Option<Permill>" | "Vec<Permill>" | "Phantom" | "Option<Phantom>" | "Vec<Phantom>" | "PhantomData" | "Option<PhantomData>" | "Vec<PhantomData>" | "Signature" | "Option<Signature>" | "Vec<Signature>" | "SignedBlock" | "Option<SignedBlock>" | "Vec<SignedBlock>" | "ValidatorId" | "Option<ValidatorId>" | "Vec<ValidatorId>" | "Weight" | "Compact<Weight>" | "Option<Weight>" | "Vec<Weight>" | "WeightMultiplier" | "Option<WeightMultiplier>" | "Vec<WeightMultiplier>" | "Ed25519Signature" | "Option<Ed25519Signature>" | "Vec<Ed25519Signature>" | "Sr25519Signature" | "Option<Sr25519Signature>" | "Vec<Sr25519Signature>" | "ImmortalEra" | "Option<ImmortalEra>" | "Vec<ImmortalEra>" | "MortalEra" | "Option<MortalEra>" | "Vec<MortalEra>" | "PreRuntime" | "Option<PreRuntime>" | "Vec<PreRuntime>" | "SealV0" | "Option<SealV0>" | "Vec<SealV0>" | "Seal" | "Option<Seal>" | "Vec<Seal>" | "Consensus" | "Option<Consensus>" | "Vec<Consensus>" | "RawAuraBorosPreDigest" | "Option<RawAuraBorosPreDigest>" | "Vec<RawAuraBorosPreDigest>" | "InclusionHeight" | "Option<InclusionHeight>" | "Vec<InclusionHeight>" | "Uncle" | "Option<Uncle>" | "Vec<Uncle>" | "UncleEntryItem" | "Option<UncleEntryItem>" | "Vec<UncleEntryItem>" | "RawAuraPreDigest" | "Option<RawAuraPreDigest>" | "Vec<RawAuraPreDigest>" | "BabeWeight" | "Compact<BabeWeight>" | "Option<BabeWeight>" | "Vec<BabeWeight>" | "RawBabePreDigest" | "Option<RawBabePreDigest>" | "Vec<RawBabePreDigest>" | "SlotNumber" | "Compact<SlotNumber>" | "Option<SlotNumber>" | "Vec<SlotNumber>" | "BalanceLock" | "Option<BalanceLock>" | "Vec<BalanceLock>" | "VestingSchedule" | "Option<VestingSchedule>" | "Vec<VestingSchedule>" | "WithdrawReasons" | "Option<WithdrawReasons>" | "Vec<WithdrawReasons>" | "MemberCount" | "Compact<MemberCount>" | "Option<MemberCount>" | "Vec<MemberCount>" | "ProposalIndex" | "Compact<ProposalIndex>" | "Option<ProposalIndex>" | "Vec<ProposalIndex>" | "Votes" | "Option<Votes>" | "Vec<Votes>" | "AuthorityId" | "Option<AuthorityId>" | "Vec<AuthorityId>" | "AliveContractInfo" | "Option<AliveContractInfo>" | "Vec<AliveContractInfo>" | "CodeHash" | "Option<CodeHash>" | "Vec<CodeHash>" | "ContractInfo" | "Option<ContractInfo>" | "Vec<ContractInfo>" | "ContractStorageKey" | "Option<ContractStorageKey>" | "Vec<ContractStorageKey>" | "Gas" | "Compact<Gas>" | "Option<Gas>" | "Vec<Gas>" | "PrefabWasmModule" | "Option<PrefabWasmModule>" | "Vec<PrefabWasmModule>" | "PrefabWasmModuleReserved" | "Option<PrefabWasmModuleReserved>" | "Vec<PrefabWasmModuleReserved>" | "Schedule" | "Option<Schedule>" | "Vec<Schedule>" | "SeedOf" | "Option<SeedOf>" | "Vec<SeedOf>" | "TombstoneContractInfo" | "Option<TombstoneContractInfo>" | "Vec<TombstoneContractInfo>" | "TrieId" | "Option<TrieId>" | "Vec<TrieId>" | "Conviction" | "Option<Conviction>" | "Vec<Conviction>" | "PropIndex" | "Compact<PropIndex>" | "Option<PropIndex>" | "Vec<PropIndex>" | "Proposal" | "Option<Proposal>" | "Vec<Proposal>" | "ReferendumIndex" | "Compact<ReferendumIndex>" | "Option<ReferendumIndex>" | "Vec<ReferendumIndex>" | "ReferendumInfo" | "Option<ReferendumInfo>" | "Vec<ReferendumInfo>" | "NewAccountOutcome" | "Option<NewAccountOutcome>" | "Vec<NewAccountOutcome>" | "Amount" | "Option<Amount>" | "Vec<Amount>" | "AssetOf" | "Compact<AssetOf>" | "Option<AssetOf>" | "Vec<AssetOf>" | "AccountInfo" | "Option<AccountInfo>" | "Vec<AccountInfo>" | "LockPeriods" | "Option<LockPeriods>" | "Vec<LockPeriods>" | "InherentOfflineReport" | "Option<InherentOfflineReport>" | "Vec<InherentOfflineReport>" | "SessionKey" | "Option<SessionKey>" | "Vec<SessionKey>" | "OpaqueKey" | "Option<OpaqueKey>" | "Vec<OpaqueKey>" | "ApprovalFlag" | "Compact<ApprovalFlag>" | "Option<ApprovalFlag>" | "Vec<ApprovalFlag>" | "SetIndex" | "Compact<SetIndex>" | "Option<SetIndex>" | "Vec<SetIndex>" | "Vote" | "Option<Vote>" | "Vec<Vote>" | "VoteIndex" | "Compact<VoteIndex>" | "Option<VoteIndex>" | "Vec<VoteIndex>" | "VoterInfo" | "Option<VoterInfo>" | "Vec<VoterInfo>" | "VoteThreshold" | "Option<VoteThreshold>" | "Vec<VoteThreshold>" | "AssetOptions" | "Option<AssetOptions>" | "Vec<AssetOptions>" | "Owner" | "Option<Owner>" | "Vec<Owner>" | "PermissionsV1" | "Option<PermissionsV1>" | "Vec<PermissionsV1>" | "PermissionVersions" | "Option<PermissionVersions>" | "Vec<PermissionVersions>" | "PermissionLatest" | "Option<PermissionLatest>" | "Vec<PermissionLatest>" | "AuthorityWeight" | "Compact<AuthorityWeight>" | "Option<AuthorityWeight>" | "Vec<AuthorityWeight>" | "NextAuthority" | "Option<NextAuthority>" | "Vec<NextAuthority>" | "PendingPause" | "Option<PendingPause>" | "Vec<PendingPause>" | "PendingResume" | "Option<PendingResume>" | "Vec<PendingResume>" | "StoredPendingChange" | "Option<StoredPendingChange>" | "Vec<StoredPendingChange>" | "StoredState" | "Option<StoredState>" | "Vec<StoredState>" | "AuthIndex" | "Compact<AuthIndex>" | "Option<AuthIndex>" | "Vec<AuthIndex>" | "AuthoritySignature" | "Option<AuthoritySignature>" | "Vec<AuthoritySignature>" | "Heartbeat" | "Option<Heartbeat>" | "Vec<Heartbeat>" | "OpaqueMultiaddr" | "Option<OpaqueMultiaddr>" | "Vec<OpaqueMultiaddr>" | "OpaquePeerId" | "Option<OpaquePeerId>" | "Vec<OpaquePeerId>" | "OpaqueNetworkState" | "Option<OpaqueNetworkState>" | "Vec<OpaqueNetworkState>" | "SessionIndex" | "Compact<SessionIndex>" | "Option<SessionIndex>" | "Vec<SessionIndex>" | "Keys" | "Option<Keys>" | "Vec<Keys>" | "SessionKeysSubstrate" | "Option<SessionKeysSubstrate>" | "Vec<SessionKeysSubstrate>" | "SessionKeysPolkadot" | "Option<SessionKeysPolkadot>" | "Vec<SessionKeysPolkadot>" | "EraIndex" | "Compact<EraIndex>" | "Option<EraIndex>" | "Vec<EraIndex>" | "EraRewards" | "Option<EraRewards>" | "Vec<EraRewards>" | "Exposure" | "Option<Exposure>" | "Vec<Exposure>" | "IndividualExposure" | "Option<IndividualExposure>" | "Vec<IndividualExposure>" | "MomentOf" | "Option<MomentOf>" | "Vec<MomentOf>" | "RewardDestination" | "Option<RewardDestination>" | "Vec<RewardDestination>" | "StakingLedger" | "Option<StakingLedger>" | "Vec<StakingLedger>" | "UnlockChunk" | "Option<UnlockChunk>" | "Vec<UnlockChunk>" | "ValidatorPrefs" | "Option<ValidatorPrefs>" | "Vec<ValidatorPrefs>" | "DigestOf" | "Option<DigestOf>" | "Vec<DigestOf>" | "Event" | "Option<Event>" | "Vec<Event>" | "EventId" | "Option<EventId>" | "Vec<EventId>" | "EventIndex" | "Compact<EventIndex>" | "Option<EventIndex>" | "Vec<EventIndex>" | "EventRecord" | "Option<EventRecord>" | "Vec<EventRecord>" | "EventRecord0to76" | "Option<EventRecord0to76>" | "Vec<EventRecord0to76>" | "Key" | "Option<Key>" | "Vec<Key>" | "Phase" | "Option<Phase>" | "Vec<Phase>" | "TreasuryProposal" | "Option<TreasuryProposal>" | "Vec<TreasuryProposal>" | "BlockAttestations" | "Option<BlockAttestations>" | "Vec<BlockAttestations>" | "IncludedBlocks" | "Option<IncludedBlocks>" | "Vec<IncludedBlocks>" | "MoreAttestations" | "Option<MoreAttestations>" | "Vec<MoreAttestations>" | "EcdsaSignature" | "Option<EcdsaSignature>" | "Vec<EcdsaSignature>" | "EthereumAddress" | "Option<EthereumAddress>" | "Vec<EthereumAddress>" | "AttestedCandidate" | "Option<AttestedCandidate>" | "Vec<AttestedCandidate>" | "AuctionIndex" | "Compact<AuctionIndex>" | "Option<AuctionIndex>" | "Vec<AuctionIndex>" | "BalanceUpload" | "Option<BalanceUpload>" | "Vec<BalanceUpload>" | "Bidder" | "Option<Bidder>" | "Vec<Bidder>" | "CandidateReceipt" | "Option<CandidateReceipt>" | "Vec<CandidateReceipt>" | "CollatorSignature" | "Option<CollatorSignature>" | "Vec<CollatorSignature>" | "EgressQueueRoot" | "Option<EgressQueueRoot>" | "Vec<EgressQueueRoot>" | "HeadData" | "Option<HeadData>" | "Vec<HeadData>" | "IncomingParachainDeploy" | "Option<IncomingParachainDeploy>" | "Vec<IncomingParachainDeploy>" | "IncomingParachainFixed" | "Option<IncomingParachainFixed>" | "Vec<IncomingParachainFixed>" | "IncomingParachain" | "Option<IncomingParachain>" | "Vec<IncomingParachain>" | "LeasePeriod" | "Option<LeasePeriod>" | "Vec<LeasePeriod>" | "LeasePeriodOf" | "Option<LeasePeriodOf>" | "Vec<LeasePeriodOf>" | "NewBidder" | "Option<NewBidder>" | "Vec<NewBidder>" | "ParaId" | "Compact<ParaId>" | "Option<ParaId>" | "Vec<ParaId>" | "ParaIdOf" | "Option<ParaIdOf>" | "Vec<ParaIdOf>" | "ParachainDispatchOrigin" | "Option<ParachainDispatchOrigin>" | "Vec<ParachainDispatchOrigin>" | "SlotRange" | "Option<SlotRange>" | "Vec<SlotRange>" | "SubId" | "Compact<SubId>" | "Option<SubId>" | "Vec<SubId>" | "UpwardMessage" | "Option<UpwardMessage>" | "Vec<UpwardMessage>" | "ValidityAttestation" | "Option<ValidityAttestation>" | "Vec<ValidityAttestation>" | "ValidatorIndex" | "Compact<ValidatorIndex>" | "Option<ValidatorIndex>" | "Vec<ValidatorIndex>" | "ValidityVote" | "Option<ValidityVote>" | "Vec<ValidityVote>" | "WinningDataEntry" | "Option<WinningDataEntry>" | "Vec<WinningDataEntry>" | "WinningData" | "Option<WinningData>" | "Vec<WinningData>" | "ApiId" | "Option<ApiId>" | "Vec<ApiId>" | "ChainProperties" | "Option<ChainProperties>" | "Vec<ChainProperties>" | "ExtrinsicOrHash" | "Option<ExtrinsicOrHash>" | "Vec<ExtrinsicOrHash>" | "ExtrinsicStatus" | "Option<ExtrinsicStatus>" | "Vec<ExtrinsicStatus>" | "Health" | "Option<Health>" | "Vec<Health>" | "KeyValueOption" | "Option<KeyValueOption>" | "Vec<KeyValueOption>" | "NetworkState" | "Option<NetworkState>" | "Vec<NetworkState>" | "PeerInfo" | "Option<PeerInfo>" | "Vec<PeerInfo>" | "RuntimeVersionApi" | "Option<RuntimeVersionApi>" | "Vec<RuntimeVersionApi>" | "RuntimeVersion" | "Option<RuntimeVersion>" | "Vec<RuntimeVersion>" | "StorageChangeSet" | "Option<StorageChangeSet>" | "Vec<StorageChangeSet>"[]*

___

###  getTypeClassMap

▸ **getTypeClassMap**(`defs`: [TypeDef](../interfaces/_codec_types_.typedef.md)[]): *`Record<string, InterfaceTypes>`*

*Defined in [codec/createType.ts:196](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`defs` | [TypeDef](../interfaces/_codec_types_.typedef.md)[] |

**Returns:** *`Record<string, InterfaceTypes>`*

___

###  getTypeDef

▸ **getTypeDef**(`_type`: string, `name?`: undefined | string): *[TypeDef](../interfaces/_codec_types_.typedef.md)*

*Defined in [codec/createType.ts:109](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`_type` | string |
`name?` | undefined \| string |

**Returns:** *[TypeDef](../interfaces/_codec_types_.typedef.md)*

___

###  typeSplit

▸ **typeSplit**(`type`: string): *string[]*

*Defined in [codec/createType.ts:27](https://github.com/polkadot-js/api/blob/e5cc683/packages/types/src/codec/createType.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string[]*