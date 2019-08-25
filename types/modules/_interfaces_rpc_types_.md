> # External module: "interfaces/rpc/types"

## Index

### Interfaces

* [ChainProperties](../interfaces/_interfaces_rpc_types_.chainproperties.md)
* [ExtrinsicOrHash](../interfaces/_interfaces_rpc_types_.extrinsicorhash.md)
* [ExtrinsicStatus](../interfaces/_interfaces_rpc_types_.extrinsicstatus.md)
* [Health](../interfaces/_interfaces_rpc_types_.health.md)
* [NetworkState](../interfaces/_interfaces_rpc_types_.networkstate.md)
* [PeerInfo](../interfaces/_interfaces_rpc_types_.peerinfo.md)
* [RuntimeVersion](../interfaces/_interfaces_rpc_types_.runtimeversion.md)
* [StorageChangeSet](../interfaces/_interfaces_rpc_types_.storagechangeset.md)

### Type aliases

* [ApiId](_interfaces_rpc_types_.md#apiid)
* [KeyValueOption](_interfaces_rpc_types_.md#keyvalueoption)
* [RuntimeVersionApi](_interfaces_rpc_types_.md#runtimeversionapi)

## Type aliases

###  ApiId

Ƭ **ApiId**: *`Uint8Array` & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/rpc/types.ts:10](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/interfaces/rpc/types.ts#L10)*

Uint8Array & Codec

___

###  KeyValueOption

Ƭ **KeyValueOption**: *[[StorageKey](../classes/_primitive_storagekey_.storagekey.md), [Option](../classes/_codec_option_.option.md)‹*[StorageData](../classes/_primitive_storagedata_.storagedata.md)*›] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/rpc/types.ts:69](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/interfaces/rpc/types.ts#L69)*

[StorageKey, Option<StorageData>] & Codec

___

###  RuntimeVersionApi

Ƭ **RuntimeVersionApi**: *[[ApiId](_interfaces_rpc_types_.md#apiid), [u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/rpc/types.ts:108](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/interfaces/rpc/types.ts#L108)*

[ApiId, u32] & Codec