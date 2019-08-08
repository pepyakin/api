> # Class: AccountIndex

**`name`** AccountIndex

**`description`** 
A wrapper around an AccountIndex, which is a shortened, variable-length encoding
for an Account. We extends from [U32](_primitive_u32_.u32.md) to provide the number-like properties.

## Hierarchy

  * [U32](_primitive_u32_.u32.md)

  * **AccountIndex**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_accountindex_.accountindex.md#constructor)

### Methods

* [eq](_primitive_generic_accountindex_.accountindex.md#eq)
* [toHex](_primitive_generic_accountindex_.accountindex.md#tohex)
* [toJSON](_primitive_generic_accountindex_.accountindex.md#tojson)
* [toRawType](_primitive_generic_accountindex_.accountindex.md#torawtype)
* [toString](_primitive_generic_accountindex_.accountindex.md#tostring)
* [toU8a](_primitive_generic_accountindex_.accountindex.md#tou8a)
* [calcLength](_primitive_generic_accountindex_.accountindex.md#static-calclength)
* [decodeAccountIndex](_primitive_generic_accountindex_.accountindex.md#static-decodeaccountindex)
* [readLength](_primitive_generic_accountindex_.accountindex.md#static-readlength)
* [writeLength](_primitive_generic_accountindex_.accountindex.md#static-writelength)

## Constructors

###  constructor

\+ **new AccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *[AccountIndex](_primitive_generic_accountindex_.accountindex.md)*

*Overrides [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Defined in [primitive/Generic/AccountIndex.ts:30](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |  new BN(0) |

**Returns:** *[AccountIndex](_primitive_generic_accountindex_.accountindex.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [primitive/Generic/AccountIndex.ts:89](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L89)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [primitive/Generic/AccountIndex.ts:102](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Defined in [primitive/Generic/AccountIndex.ts:118](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L118)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [primitive/Generic/AccountIndex.ts:109](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L109)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` calcLength

▸ **calcLength**(`_value`: `BN` | number): *number*

*Defined in [primitive/Generic/AccountIndex.ts:49](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | `BN` \| number |

**Returns:** *number*

___

### `Static` decodeAccountIndex

▸ **decodeAccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *`BN` | `Uint8Array` | number | string*

*Defined in [primitive/Generic/AccountIndex.ts:37](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *`BN` | `Uint8Array` | number | string*

___

### `Static` readLength

▸ **readLength**(`input`: `Uint8Array`): *[number, number]*

*Defined in [primitive/Generic/AccountIndex.ts:63](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Uint8Array` |

**Returns:** *[number, number]*

___

### `Static` writeLength

▸ **writeLength**(`input`: `Uint8Array`): *`Uint8Array`*

*Defined in [primitive/Generic/AccountIndex.ts:77](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/types/src/primitive/Generic/AccountIndex.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Uint8Array` |

**Returns:** *`Uint8Array`*