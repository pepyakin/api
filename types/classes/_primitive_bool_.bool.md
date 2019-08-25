> # Class: Bool

**`name`** Bool

**`description`** 
Representation for a boolean value in the system. It extends the base JS `Boolean` class

## Hierarchy

* `Boolean`

  * **Bool**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_bool_.bool.md#constructor)

### Properties

* [Boolean](_primitive_bool_.bool.md#static-boolean)

### Accessors

* [encodedLength](_primitive_bool_.bool.md#encodedlength)
* [hash](_primitive_bool_.bool.md#hash)
* [isEmpty](_primitive_bool_.bool.md#isempty)
* [isFalse](_primitive_bool_.bool.md#isfalse)
* [isTrue](_primitive_bool_.bool.md#istrue)

### Methods

* [eq](_primitive_bool_.bool.md#eq)
* [toHex](_primitive_bool_.bool.md#tohex)
* [toJSON](_primitive_bool_.bool.md#tojson)
* [toRawType](_primitive_bool_.bool.md#torawtype)
* [toString](_primitive_bool_.bool.md#tostring)
* [toU8a](_primitive_bool_.bool.md#tou8a)

## Constructors

###  constructor

\+ **new Bool**(`value`: [Bool](_primitive_bool_.bool.md) | `Boolean` | `Uint8Array` | boolean | number): *[Bool](_primitive_bool_.bool.md)*

*Defined in [primitive/Bool.ts:18](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Bool](_primitive_bool_.bool.md) \| `Boolean` \| `Uint8Array` \| boolean \| number | false |

**Returns:** *[Bool](_primitive_bool_.bool.md)*

## Properties

### `Static` Boolean

▪ **Boolean**: *`BooleanConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:540

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [primitive/Bool.ts:39](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [primitive/Bool.ts:46](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [primitive/Bool.ts:53](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L53)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** *boolean*

___

###  isFalse

• **get isFalse**(): *boolean*

*Defined in [primitive/Bool.ts:60](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L60)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** *boolean*

___

###  isTrue

• **get isTrue**(): *boolean*

*Defined in [primitive/Bool.ts:67](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L67)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:74](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L74)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [primitive/Bool.ts:85](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L85)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:92](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L92)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *boolean*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:99](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L99)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:106](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L106)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Bool.ts:115](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/primitive/Bool.ts#L115)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*