> # Interface: StorageEntryObservable

## Hierarchy

* **StorageEntryObservable**

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Codec>`*

*Defined in [types.ts:83](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Observable<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<T>`*

*Defined in [types.ts:84](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L84)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Observable<T>`*

## Index

### Properties

* [at](_types_.storageentryobservable.md#at)
* [creator](_types_.storageentryobservable.md#creator)
* [hash](_types_.storageentryobservable.md#hash)
* [key](_types_.storageentryobservable.md#key)
* [multi](_types_.storageentryobservable.md#multi)
* [size](_types_.storageentryobservable.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L86)*

#### Type declaration:

▸ (`hash`: `Hash` | `Uint8Array` | string, `arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Codec>`*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | `Hash` \| `Uint8Array` \| string |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  creator

• **creator**: *`StorageEntry`*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L87)*

___

###  hash

• **hash**: *function*

*Defined in [types.ts:88](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L88)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<Hash>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  key

• **key**: *function*

*Defined in [types.ts:89](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L89)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *string*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  multi

• **multi**: *function*

*Defined in [types.ts:90](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L90)*

#### Type declaration:

▸ <**T**>(`args`: undefined | string | number | false | true | `Codec` | `Uint8Array` | `BN` | `CodecArgArray` | `CodecArgObject` | undefined | string | number | false | true | `Codec` | `Uint8Array` | `BN` | `CodecArgArray` | `CodecArgObject`[][]): *`Observable<T[]>`*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`args` | undefined \| string \| number \| false \| true \| `Codec` \| `Uint8Array` \| `BN` \| `CodecArgArray` \| `CodecArgObject` \| undefined \| string \| number \| false \| true \| `Codec` \| `Uint8Array` \| `BN` \| `CodecArgArray` \| `CodecArgObject`[][] |

___

###  size

• **size**: *function*

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/4115b8a/packages/api/src/types.ts#L91)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Observable<u64>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |