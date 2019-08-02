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

Ƭ **ApiId**: *[Vec](../classes/_codec_vec_.vec.md)‹*[u8](../interfaces/_interfaceregistry_.interfaceregistry.md#u8)*›*

*Defined in [interfaces/rpc/types.ts:9](https://github.com/polkadot-js/api/blob/1706309/packages/types/src/interfaces/rpc/types.ts#L9)*

Vec<u8>

___

###  KeyValueOption

Ƭ **KeyValueOption**: *[[StorageKey](../classes/_primitive_storagekey_.storagekey.md), [Option](../classes/_codec_option_.option.md)‹*[StorageData](../classes/_primitive_storagedata_.storagedata.md)*›] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/rpc/types.ts:66](https://github.com/polkadot-js/api/blob/1706309/packages/types/src/interfaces/rpc/types.ts#L66)*

[StorageKey, Option<StorageData>] & Codec

___

###  RuntimeVersionApi

Ƭ **RuntimeVersionApi**: *[[ApiId](_interfaces_rpc_types_.md#apiid), [u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/rpc/types.ts:105](https://github.com/polkadot-js/api/blob/1706309/packages/types/src/interfaces/rpc/types.ts#L105)*

[ApiId, u32] & Codec