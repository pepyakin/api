> # Class: Null

**`name`** Null

**`description`** 
Implements a type that does not contain anything (apart from `null`)

## Hierarchy

* **Null**

  * [Unconstructable](_primitive_unconstructable_.unconstructable.md)

  * [Origin](_primitive_generic_origin_.origin.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Accessors

* [encodedLength](_primitive_null_.null.md#encodedlength)
* [hash](_primitive_null_.null.md#hash)
* [isEmpty](_primitive_null_.null.md#isempty)

### Methods

* [eq](_primitive_null_.null.md#eq)
* [toHex](_primitive_null_.null.md#tohex)
* [toJSON](_primitive_null_.null.md#tojson)
* [toRawType](_primitive_null_.null.md#torawtype)
* [toString](_primitive_null_.null.md#tostring)
* [toU8a](_primitive_null_.null.md#tou8a)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [primitive/Null.ts:21](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L21)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [primitive/Null.ts:28](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L28)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [primitive/Null.ts:35](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L35)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:42](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L42)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [primitive/Null.ts:49](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L49)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:56](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L56)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:63](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:70](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [primitive/Null.ts:79](https://github.com/polkadot-js/api/blob/5899304/packages/types/src/primitive/Null.ts#L79)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*