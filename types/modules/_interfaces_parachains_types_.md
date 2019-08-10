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

*Defined in [interfaces/parachains/types.ts:18](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L18)*

u32

___

###  BalanceUpload

Ƭ **BalanceUpload**: *[[AccountId](../classes/_primitive_generic_accountid_.accountid.md), [u64](../interfaces/_interfaceregistry_.interfaceregistry.md#u64)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:21](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L21)*

[AccountId, u64] & Codec

___

###  CollatorSignature

Ƭ **CollatorSignature**: *[Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#signature)*

*Defined in [interfaces/parachains/types.ts:56](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L56)*

Signature

___

###  EgressQueueRoot

Ƭ **EgressQueueRoot**: *[[ParaId](_interfaces_parachains_types_.md#paraid), [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:59](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L59)*

[ParaId, Hash] & Codec

___

###  HeadData

Ƭ **HeadData**: *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Defined in [interfaces/parachains/types.ts:62](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L62)*

Bytes

___

###  LeasePeriod

Ƭ **LeasePeriod**: *[BlockNumber](../interfaces/_interfaceregistry_.interfaceregistry.md#blocknumber)*

*Defined in [interfaces/parachains/types.ts:97](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L97)*

BlockNumber

___

###  LeasePeriodOf

Ƭ **LeasePeriodOf**: *[LeasePeriod](_interfaces_parachains_types_.md#leaseperiod)*

*Defined in [interfaces/parachains/types.ts:100](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L100)*

LeasePeriod

___

###  ParaId

Ƭ **ParaId**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/parachains/types.ts:119](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L119)*

u32

___

###  ParaIdOf

Ƭ **ParaIdOf**: *[ParaId](_interfaces_parachains_types_.md#paraid)*

*Defined in [interfaces/parachains/types.ts:122](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L122)*

ParaId

___

###  SubId

Ƭ **SubId**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/parachains/types.ts:149](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L149)*

u32

___

###  ValidatorIndex

Ƭ **ValidatorIndex**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/parachains/types.ts:160](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L160)*

u32

___

###  ValidityVote

Ƭ **ValidityVote**: *[[ValidatorIndex](_interfaces_parachains_types_.md#validatorindex), [ValidityAttestation](../interfaces/_interfaces_parachains_types_.validityattestation.md)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:177](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L177)*

[ValidatorIndex, ValidityAttestation] & Codec

___

###  WinningData

Ƭ **WinningData**: *[Vec](../classes/_codec_vec_.vec.md)‹*[WinningDataEntry](_interfaces_parachains_types_.md#winningdataentry)*›*

*Defined in [interfaces/parachains/types.ts:180](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L180)*

Vec<WinningDataEntry>

___

###  WinningDataEntry

Ƭ **WinningDataEntry**: *[[AccountId](../classes/_primitive_generic_accountid_.accountid.md), [ParaIdOf](_interfaces_parachains_types_.md#paraidof), [BalanceOf](../interfaces/_interfaceregistry_.interfaceregistry.md#balanceof)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/parachains/types.ts:183](https://github.com/polkadot-js/api/blob/aa3de43/packages/types/src/interfaces/parachains/types.ts#L183)*

[AccountId, ParaIdOf, BalanceOf] & Codec