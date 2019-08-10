> # Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Index

### Properties

* [defaultRegistry](_codec_typeregistry_.typeregistry.md#static-defaultregistry)

### Methods

* [get](_codec_typeregistry_.typeregistry.md#get)
* [getDefinition](_codec_typeregistry_.typeregistry.md#getdefinition)
* [getOrThrow](_codec_typeregistry_.typeregistry.md#getorthrow)
* [hasType](_codec_typeregistry_.typeregistry.md#hastype)
* [register](_codec_typeregistry_.typeregistry.md#register)

## Properties

### `Static` defaultRegistry

▪ **defaultRegistry**: *[TypeRegistry](_codec_typeregistry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/typeRegistry.ts:12](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/typeRegistry.ts#L12)*

## Methods

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | undefined*

*Defined in [codec/typeRegistry.ts:63](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/typeRegistry.ts#L63)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [codec/typeRegistry.ts:88](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/typeRegistry.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/typeRegistry.ts:92](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/typeRegistry.ts#L92)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined \| string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [codec/typeRegistry.ts:102](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/typeRegistry.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Defined in [codec/typeRegistry.ts:18](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/typeRegistry.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) \| [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Defined in [codec/typeRegistry.ts:21](https://github.com/polkadot-js/api/blob/b595428/packages/types/src/codec/typeRegistry.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *void*