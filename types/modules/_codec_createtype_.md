> # External module: "codec/createType"

## Index

### Functions

* [ClassOf](_codec_createtype_.md#classof)
* [ClassOfUnsafe](_codec_createtype_.md#classofunsafe)
* [createClass](_codec_createtype_.md#createclass)
* [createType](_codec_createtype_.md#createtype)
* [createTypeUnsafe](_codec_createtype_.md#createtypeunsafe)
* [getTypeClass](_codec_createtype_.md#gettypeclass)
* [getTypeClassMap](_codec_createtype_.md#gettypeclassmap)
* [getTypeDef](_codec_createtype_.md#gettypedef)
* [typeSplit](_codec_createtype_.md#typesplit)

## Functions

###  ClassOf

▸ **ClassOf**<**K**>(`name`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*`InterfaceRegistry[K]`*›*

*Defined in [codec/createType.ts:203](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L203)*

**Type parameters:**

▪ **K**: *keyof InterfaceRegistry*

**Parameters:**

Name | Type |
------ | ------ |
`name` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`InterfaceRegistry[K]`*›*

___

###  ClassOfUnsafe

▸ **ClassOfUnsafe**<**T**, **K**>(`name`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

*Defined in [codec/createType.ts:198](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L198)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`name` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

___

###  createClass

▸ **createClass**<**T**, **K**>(`type`: `K`): *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

*Defined in [codec/createType.ts:189](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L189)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`type` | `K` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`FromReg<T, K>`*›*

___

###  createType

▸ **createType**<**K**>(`type`: `K`, ...`params`: any[]): *`InterfaceRegistry[K]`*

*Defined in [codec/createType.ts:372](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L372)*

Create an instance of a `type` with a given `value`.

**Type parameters:**

▪ **K**: *keyof InterfaceRegistry*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | `K` | A recognizable string representing the type to create an instance from |
`...params` | any[] | - |

**Returns:** *`InterfaceRegistry[K]`*

___

###  createTypeUnsafe

▸ **createTypeUnsafe**<**T**, **K**>(`type`: `K`, `params`: any[], `isPedantic?`: undefined | false | true): *`FromReg<T, K>`*

*Defined in [codec/createType.ts:351](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L351)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | `K` | - |
`params` | any[] |  [] |
`isPedantic?` | undefined \| false \| true | - |

**Returns:** *`FromReg<T, K>`*

___

###  getTypeClass

▸ **getTypeClass**<**T**>(`value`: [TypeDef](../interfaces/_codec_types_.typedef.md), `Fallback?`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/createType.ts:218](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L218)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [TypeDef](../interfaces/_codec_types_.typedef.md) |
`Fallback?` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

___

###  getTypeClassMap

▸ **getTypeClassMap**(`defs`: [TypeDef](../interfaces/_codec_types_.typedef.md)[]): *object*

*Defined in [codec/createType.ts:208](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`defs` | [TypeDef](../interfaces/_codec_types_.typedef.md)[] |

**Returns:** *object*

● \[▪ **index**: *string*\]: [Constructor](../interfaces/_types_.constructor.md)

___

###  getTypeDef

▸ **getTypeDef**(`_type`: string, `name?`: undefined | string): *[TypeDef](../interfaces/_codec_types_.typedef.md)*

*Defined in [codec/createType.ts:113](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`_type` | string |
`name?` | undefined \| string |

**Returns:** *[TypeDef](../interfaces/_codec_types_.typedef.md)*

___

###  typeSplit

▸ **typeSplit**(`type`: string): *string[]*

*Defined in [codec/createType.ts:31](https://github.com/polkadot-js/api/blob/9bd5c09/packages/types/src/codec/createType.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string[]*