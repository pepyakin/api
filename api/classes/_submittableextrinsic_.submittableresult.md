> # Class: SubmittableResult

## Hierarchy

* **SubmittableResult**

## Implements

* [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md)

## Index

### Constructors

* [constructor](_submittableextrinsic_.submittableresult.md#constructor)

### Properties

* [events](_submittableextrinsic_.submittableresult.md#events)
* [status](_submittableextrinsic_.submittableresult.md#status)

### Accessors

* [isCompleted](_submittableextrinsic_.submittableresult.md#iscompleted)
* [isError](_submittableextrinsic_.submittableresult.md#iserror)
* [isFinalized](_submittableextrinsic_.submittableresult.md#isfinalized)

### Methods

* [findRecord](_submittableextrinsic_.submittableresult.md#findrecord)

## Constructors

###  constructor

\+ **new SubmittableResult**(`__namedParameters`: object): *[SubmittableResult](_submittableextrinsic_.submittableresult.md)*

*Defined in [SubmittableExtrinsic.ts:66](https://github.com/polkadot-js/api/blob/07b89e7/packages/api/src/SubmittableExtrinsic.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[SubmittableResult](_submittableextrinsic_.submittableresult.md)*

## Properties

###  events

• **events**: *`EventRecord`[]*

*Implementation of [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md).[events](../interfaces/_submittableextrinsic_.isubmittableresult.md#events)*

*Defined in [SubmittableExtrinsic.ts:64](https://github.com/polkadot-js/api/blob/07b89e7/packages/api/src/SubmittableExtrinsic.ts#L64)*

___

###  status

• **status**: *`ExtrinsicStatus`*

*Implementation of [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md).[status](../interfaces/_submittableextrinsic_.isubmittableresult.md#status)*

*Defined in [SubmittableExtrinsic.ts:66](https://github.com/polkadot-js/api/blob/07b89e7/packages/api/src/SubmittableExtrinsic.ts#L66)*

## Accessors

###  isCompleted

• **get isCompleted**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:73](https://github.com/polkadot-js/api/blob/07b89e7/packages/api/src/SubmittableExtrinsic.ts#L73)*

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:77](https://github.com/polkadot-js/api/blob/07b89e7/packages/api/src/SubmittableExtrinsic.ts#L77)*

**Returns:** *boolean*

___

###  isFinalized

• **get isFinalized**(): *boolean*

*Defined in [SubmittableExtrinsic.ts:81](https://github.com/polkadot-js/api/blob/07b89e7/packages/api/src/SubmittableExtrinsic.ts#L81)*

**Returns:** *boolean*

## Methods

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *`EventRecord` | undefined*

*Implementation of [ISubmittableResult](../interfaces/_submittableextrinsic_.isubmittableresult.md)*

*Defined in [SubmittableExtrinsic.ts:88](https://github.com/polkadot-js/api/blob/07b89e7/packages/api/src/SubmittableExtrinsic.ts#L88)*

**`description`** Finds an EventRecord for the specified method & section

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *`EventRecord` | undefined*