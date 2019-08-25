> # Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Index

### Properties

* [defaultRegistry](_codec_create_registry_.typeregistry.md#static-defaultregistry)

### Methods

* [get](_codec_create_registry_.typeregistry.md#get)
* [getDefinition](_codec_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_codec_create_registry_.typeregistry.md#getorthrow)
* [hasType](_codec_create_registry_.typeregistry.md#hastype)
* [register](_codec_create_registry_.typeregistry.md#register)

## Properties

### `Static` defaultRegistry

▪ **defaultRegistry**: *[TypeRegistry](_codec_create_registry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/create/registry.ts:12](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/create/registry.ts#L12)*

## Methods

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | undefined*

*Defined in [codec/create/registry.ts:61](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/create/registry.ts#L61)*

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

*Defined in [codec/create/registry.ts:83](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/create/registry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)‹*`T`*›*

*Defined in [codec/create/registry.ts:87](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/create/registry.ts#L87)*

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

*Defined in [codec/create/registry.ts:97](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/create/registry.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Defined in [codec/create/registry.ts:18](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/create/registry.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) \| [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Defined in [codec/create/registry.ts:21](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/codec/create/registry.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *void*