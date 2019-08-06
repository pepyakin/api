> # Interface: ConstantCodec

## Hierarchy

* `Codec`

  * **ConstantCodec**

## Index

### Properties

* [encodedLength](_consts_types_.constantcodec.md#encodedlength)
* [hash](_consts_types_.constantcodec.md#hash)
* [isEmpty](_consts_types_.constantcodec.md#isempty)
* [meta](_consts_types_.constantcodec.md#meta)

### Methods

* [eq](_consts_types_.constantcodec.md#eq)
* [toHex](_consts_types_.constantcodec.md#tohex)
* [toJSON](_consts_types_.constantcodec.md#tojson)
* [toRawType](_consts_types_.constantcodec.md#torawtype)
* [toString](_consts_types_.constantcodec.md#tostring)
* [toU8a](_consts_types_.constantcodec.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:73](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:78](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L78)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:83](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L83)*

**`description`** Checks if the value is an empty value

___

###  meta

• **meta**: *`MetaV7`*

*Defined in [consts/types.ts:9](https://github.com/polkadot-js/api/blob/1b94f0c/packages/api-metadata/src/consts/types.ts#L9)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:88](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:93](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L93)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJson`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:98](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L98)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:103](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L103)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:108](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L108)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/1b94f0c/packages/types/src/types.ts#L114)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*