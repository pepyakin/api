> # Interface: StorageEntryPromise

## Hierarchy

* [StorageEntryPromiseOverloads](_types_.storageentrypromiseoverloads.md)

  * **StorageEntryPromise**

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<T>`*

*Defined in [types.ts:113](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L113)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<T>`*

▸ <**T**>(`callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L114)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:115](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L115)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: `CodecArg`, `arg2`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:116](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L116)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | `CodecArg` |
`arg2` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

## Index

### Properties

* [at](_types_.storageentrypromise.md#at)
* [creator](_types_.storageentrypromise.md#creator)
* [hash](_types_.storageentrypromise.md#hash)
* [key](_types_.storageentrypromise.md#key)
* [multi](_types_.storageentrypromise.md#multi)
* [size](_types_.storageentrypromise.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [types.ts:126](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L126)*

#### Type declaration:

▸ (`hash`: `Hash` | `Uint8Array` | string, `arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | `Hash` \| `Uint8Array` \| string |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  creator

• **creator**: *`StorageEntry`*

*Defined in [types.ts:127](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L127)*

___

###  hash

• **hash**: *function*

*Defined in [types.ts:128](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L128)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Hash>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  key

• **key**: *function*

*Defined in [types.ts:129](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L129)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *string*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

___

###  multi

• **multi**: *[StorageEntryPromiseMulti](_types_.storageentrypromisemulti.md)*

*Defined in [types.ts:130](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L130)*

___

###  size

• **size**: *function*

*Defined in [types.ts:131](https://github.com/polkadot-js/api/blob/14f018d/packages/api/src/types.ts#L131)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<u64>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |