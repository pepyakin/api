> # Interface: ISubmittableResult

## Hierarchy

* **ISubmittableResult**

## Implemented by

* [SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)

## Index

### Properties

* [events](_submittableextrinsic_.isubmittableresult.md#events)
* [isCompleted](_submittableextrinsic_.isubmittableresult.md#iscompleted)
* [isError](_submittableextrinsic_.isubmittableresult.md#iserror)
* [isFinalized](_submittableextrinsic_.isubmittableresult.md#isfinalized)
* [status](_submittableextrinsic_.isubmittableresult.md#status)

### Methods

* [findRecord](_submittableextrinsic_.isubmittableresult.md#findrecord)

## Properties

###  events

• **events**: *`EventRecord`[]*

*Defined in [SubmittableExtrinsic.ts:21](https://github.com/polkadot-js/api/blob/a9c752a/packages/api/src/SubmittableExtrinsic.ts#L21)*

___

###  isCompleted

• **isCompleted**: *boolean*

*Defined in [SubmittableExtrinsic.ts:23](https://github.com/polkadot-js/api/blob/a9c752a/packages/api/src/SubmittableExtrinsic.ts#L23)*

___

###  isError

• **isError**: *boolean*

*Defined in [SubmittableExtrinsic.ts:24](https://github.com/polkadot-js/api/blob/a9c752a/packages/api/src/SubmittableExtrinsic.ts#L24)*

___

###  isFinalized

• **isFinalized**: *boolean*

*Defined in [SubmittableExtrinsic.ts:25](https://github.com/polkadot-js/api/blob/a9c752a/packages/api/src/SubmittableExtrinsic.ts#L25)*

___

###  status

• **status**: *`ExtrinsicStatus`*

*Defined in [SubmittableExtrinsic.ts:22](https://github.com/polkadot-js/api/blob/a9c752a/packages/api/src/SubmittableExtrinsic.ts#L22)*

## Methods

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *`EventRecord` | undefined*

*Defined in [SubmittableExtrinsic.ts:27](https://github.com/polkadot-js/api/blob/a9c752a/packages/api/src/SubmittableExtrinsic.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *`EventRecord` | undefined*