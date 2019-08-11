> # External module: "codec/utils/mapToTypeMap"

## Index

### Functions

* [mapToTypeMap](_codec_utils_maptotypemap_.md#maptotypemap)
* [typeToConstructor](_codec_utils_maptotypemap_.md#typetoconstructor)

## Functions

###  mapToTypeMap

▸ **mapToTypeMap**(`input`: `Record<string, InterfaceTypes | Constructor>`): *`Record<string, Constructor>`*

*Defined in [codec/utils/mapToTypeMap.ts:22](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/utils/mapToTypeMap.ts#L22)*

**`description`** takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Conbstructor }`

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Record<string, InterfaceTypes \| Constructor>` |

**Returns:** *`Record<string, Constructor>`*

___

###  typeToConstructor

▸ **typeToConstructor**<**T**>(`type`: [InterfaceTypes](_types_.md#interfacetypes) | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/utils/mapToTypeMap.ts:11](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/utils/mapToTypeMap.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [InterfaceTypes](_types_.md#interfacetypes) \| [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*