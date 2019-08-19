> # External module: "types"

## Index

### Interfaces

* [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)
* [PromiseResult](../interfaces/_types_.promiseresult.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageMultiBase](../interfaces/_types_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_.queryablestoragemultipromise.md)
* [Signer](../interfaces/_types_.signer.md)
* [SignerOptions](../interfaces/_types_.signeroptions.md)
* [SignerPayload](../interfaces/_types_.signerpayload.md)
* [SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)
* [SignerPayloadRawBase](../interfaces/_types_.signerpayloadrawbase.md)
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
* [DecoratedRpc](_types_.md#decoratedrpc)
* [DecoratedRpcSection](_types_.md#decoratedrpcsection)
* [MethodResult](_types_.md#methodresult)
* [ObsInnerType](_types_.md#obsinnertype)
* [QueryableStorageEntry](_types_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [QueryableStorageMultiArgs](_types_.md#queryablestoragemultiargs)
* [RxResult](_types_.md#rxresult)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterfaceEvents

Ƭ **ApiInterfaceEvents**: *`ProviderInterfaceEmitted` | "ready"*

*Defined in [types.ts:204](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L204)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [types.ts:206](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L206)*

___

###  DecoratedRpc

Ƭ **DecoratedRpc**: *object*

*Defined in [types.ts:79](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L79)*

#### Type declaration:

___

###  DecoratedRpcSection

Ƭ **DecoratedRpcSection**: *object*

*Defined in [types.ts:73](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L73)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *`MethodResult<ApiType, F>`*

*Defined in [types.ts:69](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L69)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *`ObsInnerType<O>`*

*Defined in [types.ts:41](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L41)*

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *`QueryableStorageEntry<ApiType>`*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L114)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *`QueryableStorageMulti<ApiType>`*

*Defined in [types.ts:137](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L137)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹*`ApiType`*›, `Array`]*

*Defined in [types.ts:123](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L123)*

___

###  QueryableStorageMultiArgs

Ƭ **QueryableStorageMultiArgs**: *[QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)‹*`ApiType`*›[]*

*Defined in [types.ts:127](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L127)*

___

###  RxResult

Ƭ **RxResult**: *function*

*Defined in [types.ts:59](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L59)*

#### Type declaration:

▸ (...`args`: `Parameters<F>`): *`Observable<ObsInnerType<ReturnType<F>>>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *`Promise<function>`*

*Defined in [types.ts:43](https://github.com/polkadot-js/api/blob/a9746b3/packages/api/src/types.ts#L43)*