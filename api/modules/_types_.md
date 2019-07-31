> # External module: "types"

## Index

### Interfaces

* [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)
* [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)
* [DecoratedRpcSection](../interfaces/_types_.decoratedrpcsection.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageMultiBase](../interfaces/_types_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_.queryablestoragemultipromise.md)
* [Signer](../interfaces/_types_.signer.md)
* [SignerOptions](../interfaces/_types_.signeroptions.md)
* [SignerPayload](../interfaces/_types_.signerpayload.md)
* [SignerResult](../interfaces/_types_.signerresult.md)
* [StorageEntryObservable](../interfaces/_types_.storageentryobservable.md)
* [StorageEntryPromise](../interfaces/_types_.storageentrypromise.md)
* [StorageEntryPromiseMulti](../interfaces/_types_.storageentrypromisemulti.md)
* [StorageEntryPromiseOverloads](../interfaces/_types_.storageentrypromiseoverloads.md)
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

### Type aliases

* [ApiInterfaceEvents](_types_.md#apiinterfaceevents)
* [ApiTypes](_types_.md#apitypes)
* [MethodResult](_types_.md#methodresult)
* [ObsInnerType](_types_.md#obsinnertype)
* [PromiseResult](_types_.md#promiseresult)
* [QueryableStorageEntry](_types_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [QueryableStorageMultiArgs](_types_.md#queryablestoragemultiargs)
* [RxResult](_types_.md#rxresult)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterfaceEvents

Ƭ **ApiInterfaceEvents**: *`ProviderInterfaceEmitted` | "ready"*

*Defined in [types.ts:224](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L224)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:226](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L226)*

___

###  MethodResult

Ƭ **MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L67)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:40](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L40)*

___

###  PromiseResult

Ƭ **PromiseResult**: *function*

*Defined in [types.ts:61](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L61)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Promise<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

▸ (...`args`: `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>`): *[UnsubscribePromise](_types_.md#unsubscribepromise)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>` |

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *`QueryableStorageEntry<ApiType>`*

*Defined in [types.ts:134](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L134)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:157](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L157)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*›, `Array`]*

*Defined in [types.ts:143](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L143)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *[QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)‹*`ApiType`*›[]*

*Defined in [types.ts:147](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L147)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:58](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L58)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Observable<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *`Promise<function>`*

*Defined in [types.ts:42](https://github.com/polkadot-js/api/blob/891a342/packages/api/src/types.ts#L42)*