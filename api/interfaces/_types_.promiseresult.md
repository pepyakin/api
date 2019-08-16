> # Interface: PromiseResult <**F**>

## Type parameters

▪ **F**: *`AnyFunction`*

## Hierarchy

* **PromiseResult**

## Callable

▸ (...`args`: `Parameters<F>`): *`Promise<ObsInnerType<ReturnType<F>>>`*

*Defined in [types.ts:61](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

**Returns:** *`Promise<ObsInnerType<ReturnType<F>>>`*

▸ (...`args`: `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(...`args`: `Parameters<F>`): *`Promise<T>`*

*Defined in [types.ts:63](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L63)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Parameters<F>` |

**Returns:** *`Promise<T>`*

▸ <**T**>(...`args`: `Push<Parameters<F>, Callback<T>>`): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:64](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L64)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Push<Parameters<F>, Callback<T>>` |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*