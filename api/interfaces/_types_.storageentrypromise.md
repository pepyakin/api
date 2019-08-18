> # Interface: StorageEntryPromise

## Hierarchy

* `StorageEntryBase<Promise<Codec>, Promise<Hash>, Promise<u64>>`

* [StorageEntryPromiseOverloads](_types_.storageentrypromiseoverloads.md)

  * **StorageEntryPromise**

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<T>`*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L98)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<T>`*

▸ <**T**>(`callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:99](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L99)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:100](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L100)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: `CodecArg`, `arg2`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L101)*

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

*Inherited from void*

*Defined in [types.ts:84](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L84)*

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

*Inherited from void*

*Defined in [types.ts:85](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L85)*

___

###  hash

• **hash**: *function*

*Inherited from void*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L86)*

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

*Inherited from void*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L87)*

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

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L111)*

___

###  size

• **size**: *function*

*Inherited from void*

*Defined in [types.ts:88](https://github.com/polkadot-js/api/blob/c7c76f6/packages/api/src/types.ts#L88)*

#### Type declaration:

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<u64>`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |