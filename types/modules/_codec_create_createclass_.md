> # External module: "codec/create/createClass"

## Index

### Functions

* [ClassOf](_codec_create_createclass_.md#classof)
* [ClassOfUnsafe](_codec_create_createclass_.md#classofunsafe)
* [createClass](_codec_create_createclass_.md#createclass)

## Functions

###  ClassOf

▸ **ClassOf**<**K**>(`name`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*`InterfaceRegistry[K]`*›*

*Defined in [codec/create/createClass.ts:26](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/create/createClass.ts#L26)*

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_.md#interfacetypes)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`InterfaceRegistry[K]`*›*

___

###  ClassOfUnsafe

▸ **ClassOfUnsafe**<**T**, **K**>(`name`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*[FromReg](_codec_create_types_.md#fromreg)‹*`T`*, *`K`*›*›*

*Defined in [codec/create/createClass.ts:21](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/create/createClass.ts#L21)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`name` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[FromReg](_codec_create_types_.md#fromreg)‹*`T`*, *`K`*›*›*

___

###  createClass

▸ **createClass**<**T**, **K**>(`type`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*[FromReg](_codec_create_types_.md#fromreg)‹*`T`*, *`K`*›*›*

*Defined in [codec/create/createClass.ts:12](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/create/createClass.ts#L12)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`type` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[FromReg](_codec_create_types_.md#fromreg)‹*`T`*, *`K`*›*›*