> # Interface: StorageEntryPromiseOverloads

## Hierarchy

* **StorageEntryPromiseOverloads**

  * [StorageEntryPromise](_types_.storageentrypromise.md)

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/8922bbf/packages/api/src/types.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<T>`*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/8922bbf/packages/api/src/types.ts#L98)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<T>`*

▸ <**T**>(`callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:99](https://github.com/polkadot-js/api/blob/8922bbf/packages/api/src/types.ts#L99)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:100](https://github.com/polkadot-js/api/blob/8922bbf/packages/api/src/types.ts#L100)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: `CodecArg`, `arg2`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/8922bbf/packages/api/src/types.ts#L101)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | `CodecArg` |
`arg2` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*