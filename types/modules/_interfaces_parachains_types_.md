> # External module: "interfaces/parachains/types"

## Index

### Interfaces

* [AttestedCandidate](../interfaces/_interfaces_parachains_types_.attestedcandidate.md)
* [Bidder](../interfaces/_interfaces_parachains_types_.bidder.md)
* [CandidateReceipt](../interfaces/_interfaces_parachains_types_.candidatereceipt.md)
* [IncomingParachain](../interfaces/_interfaces_parachains_types_.incomingparachain.md)
* [IncomingParachainDeploy](../interfaces/_interfaces_parachains_types_.incomingparachaindeploy.md)
* [IncomingParachainFixed](../interfaces/_interfaces_parachains_types_.incomingparachainfixed.md)
* [NewBidder](../interfaces/_interfaces_parachains_types_.newbidder.md)
* [ParachainDispatchOrigin](../interfaces/_interfaces_parachains_types_.parachaindispatchorigin.md)
* [SlotRange](../interfaces/_interfaces_parachains_types_.slotrange.md)
* [UpwardMessage](../interfaces/_interfaces_parachains_types_.upwardmessage.md)
* [ValidityAttestation](../interfaces/_interfaces_parachains_types_.validityattestation.md)

### Type aliases

* [AuctionIndex](_interfaces_parachains_types_.md#auctionindex)
* [BalanceUpload](_interfaces_parachains_types_.md#balanceupload)
* [CollatorSignature](_interfaces_parachains_types_.md#collatorsignature)
* [EgressQueueRoot](_interfaces_parachains_types_.md#egressqueueroot)
* [HeadData](_interfaces_parachains_types_.md#headdata)
* [LeasePeriod](_interfaces_parachains_types_.md#leaseperiod)
* [LeasePeriodOf](_interfaces_parachains_types_.md#leaseperiodof)
* [ParaId](_interfaces_parachains_types_.md#paraid)
* [ParaIdOf](_interfaces_parachains_types_.md#paraidof)
* [SubId](_interfaces_parachains_types_.md#subid)
* [ValidatorIndex](_interfaces_parachains_types_.md#validatorindex)
* [ValidityVote](_interfaces_parachains_types_.md#validityvote)
* [WinningData](_interfaces_parachains_types_.md#winningdata)
* [WinningDataEntry](_interfaces_parachains_types_.md#winningdataentry)

## Type aliases

###  AuctionIndex

Ƭ **AuctionIndex**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/parachains/types.ts:17](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L17)*

u32

___

###  BalanceUpload

Ƭ **BalanceUpload**: *[[AccountId](../classes/_primitive_generic_accountid_.accountid.md), [u64](../interfaces/_interfaceregistry_.interfaceregistry.md#u64)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:20](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L20)*

[AccountId, u64] & Codec

___

###  CollatorSignature

Ƭ **CollatorSignature**: *[Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#signature)*

*Defined in [interfaces/parachains/types.ts:55](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L55)*

Signature

___

###  EgressQueueRoot

Ƭ **EgressQueueRoot**: *[[ParaId](_interfaces_parachains_types_.md#paraid), [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:58](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L58)*

[ParaId, Hash] & Codec

___

###  HeadData

Ƭ **HeadData**: *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Defined in [interfaces/parachains/types.ts:61](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L61)*

Bytes

___

###  LeasePeriod

Ƭ **LeasePeriod**: *[BlockNumber](../interfaces/_interfaceregistry_.interfaceregistry.md#blocknumber)*

*Defined in [interfaces/parachains/types.ts:96](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L96)*

BlockNumber

___

###  LeasePeriodOf

Ƭ **LeasePeriodOf**: *[LeasePeriod](_interfaces_parachains_types_.md#leaseperiod)*

*Defined in [interfaces/parachains/types.ts:99](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L99)*

LeasePeriod

___

###  ParaId

Ƭ **ParaId**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/parachains/types.ts:118](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L118)*

u32

___

###  ParaIdOf

Ƭ **ParaIdOf**: *[ParaId](_interfaces_parachains_types_.md#paraid)*

*Defined in [interfaces/parachains/types.ts:121](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L121)*

ParaId

___

###  SubId

Ƭ **SubId**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/parachains/types.ts:148](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L148)*

u32

___

###  ValidatorIndex

Ƭ **ValidatorIndex**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/parachains/types.ts:159](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L159)*

u32

___

###  ValidityVote

Ƭ **ValidityVote**: *[[ValidatorIndex](_interfaces_parachains_types_.md#validatorindex), [ValidityAttestation](../interfaces/_interfaces_parachains_types_.validityattestation.md)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:176](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L176)*

[ValidatorIndex, ValidityAttestation] & Codec

___

###  WinningData

Ƭ **WinningData**: *[Vec](../classes/_codec_vec_.vec.md)‹*[WinningDataEntry](_interfaces_parachains_types_.md#winningdataentry)*›*

*Defined in [interfaces/parachains/types.ts:179](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L179)*

Vec<WinningDataEntry>

___

###  WinningDataEntry

Ƭ **WinningDataEntry**: *[[AccountId](../classes/_primitive_generic_accountid_.accountid.md), [ParaIdOf](_interfaces_parachains_types_.md#paraidof), [BalanceOf](../interfaces/_interfaceregistry_.interfaceregistry.md#balanceof)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:182](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/interfaces/parachains/types.ts#L182)*

[AccountId, ParaIdOf, BalanceOf] & Codec