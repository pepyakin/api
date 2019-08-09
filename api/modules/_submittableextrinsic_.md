> # External module: "SubmittableExtrinsic"

## Index

### Classes

* [SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)

### Interfaces

* [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md)
* [SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)

### Type aliases

* [SumbitableResultResult](_submittableextrinsic_.md#sumbitableresultresult)
* [SumbitableResultSubscription](_submittableextrinsic_.md#sumbitableresultsubscription)

### Functions

* [createSubmittableExtrinsic](_submittableextrinsic_.md#createsubmittableextrinsic)

## Type aliases

###  SumbitableResultResult

Ƭ **SumbitableResultResult**: *`SumbitableResultResult<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:30](https://github.com/polkadot-js/api/blob/debb1dc/packages/api/src/SubmittableExtrinsic.ts#L30)*

___

###  SumbitableResultSubscription

Ƭ **SumbitableResultSubscription**: *`SumbitableResultSubscription<ApiType>`*

*Defined in [SubmittableExtrinsic.ts:35](https://github.com/polkadot-js/api/blob/debb1dc/packages/api/src/SubmittableExtrinsic.ts#L35)*

## Functions

###  createSubmittableExtrinsic

▸ **createSubmittableExtrinsic**<**ApiType**>(`type`: [ApiTypes](_types_.md#apitypes), `api`: [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md), `decorateMethod`: `decorateMethod`, `extrinsic`: `Call` | `Uint8Array` | string, `trackingCb?`: `Callback<ISubmittableResult>`): *[SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:109](https://github.com/polkadot-js/api/blob/debb1dc/packages/api/src/SubmittableExtrinsic.ts#L109)*

**Type parameters:**

▪ **ApiType**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ApiTypes](_types_.md#apitypes) |
`api` | [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md) |
`decorateMethod` | `decorateMethod` |
`extrinsic` | `Call` \| `Uint8Array` \| string |
`trackingCb?` | `Callback<ISubmittableResult>` |

**Returns:** *[SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)‹*`ApiType`*›*