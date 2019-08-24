> # External module: "codec/create/createType"

## Index

### Functions

* [createType](_codec_create_createtype_.md#createtype)
* [createTypeUnsafe](_codec_create_createtype_.md#createtypeunsafe)

## Functions

###  createType

▸ **createType**<**K**>(`type`: `K`, ...`params`: any[]): *`InterfaceRegistry[K]`*

*Defined in [codec/create/createType.ts:59](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/codec/create/createType.ts#L59)*

Create an instance of a `type` with a given `params`.

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_.md#interfacetypes)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | `K` | A recognizable string representing the type to create an instance from |
`...params` | any[] | The value to instantiate the type with  |

**Returns:** *`InterfaceRegistry[K]`*

___

###  createTypeUnsafe

▸ **createTypeUnsafe**<**T**, **K**>(`type`: `K`, `params`: any[], `isPedantic?`: undefined | false | true): *[FromReg](_codec_create_types_.md#fromreg)‹*`T`*, *`K`*›*

*Defined in [codec/create/createType.ts:45](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/codec/create/createType.ts#L45)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | `K` | - |
`params` | any[] |  [] |
`isPedantic?` | undefined \| false \| true | - |

**Returns:** *[FromReg](_codec_create_types_.md#fromreg)‹*`T`*, *`K`*›*