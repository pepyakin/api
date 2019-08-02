> # Interface: StorageEntryPromiseOverloads

## Hierarchy

* **StorageEntryPromiseOverloads**

  * [StorageEntryPromise](_types_.storageentrypromise.md)

## Callable

▸ (`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<Codec>`*

*Defined in [types.ts:94](https://github.com/polkadot-js/api/blob/afa4b2b/packages/api/src/types.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<Codec>`*

▸ <**T**>(`arg1?`: `CodecArg`, `arg2?`: `CodecArg`): *`Promise<T>`*

*Defined in [types.ts:95](https://github.com/polkadot-js/api/blob/afa4b2b/packages/api/src/types.ts#L95)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | `CodecArg` |
`arg2?` | `CodecArg` |

**Returns:** *`Promise<T>`*

▸ <**T**>(`callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/afa4b2b/packages/api/src/types.ts#L96)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/afa4b2b/packages/api/src/types.ts#L97)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: `CodecArg`, `arg2`: `CodecArg`, `callback`: `Callback<T>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/afa4b2b/packages/api/src/types.ts#L98)*

**Type parameters:**

▪ **T**: *`Codec`*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | `CodecArg` |
`arg2` | `CodecArg` |
`callback` | `Callback<T>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*