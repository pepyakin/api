> # Class: Unconstructable

**`name`** Unconstructable

**`description`** 
A type that should not be constructed

## Hierarchy

* [Null](_primitive_null_.null.md)

  * **Unconstructable**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_unconstructable_.unconstructable.md#constructor)

### Accessors

* [encodedLength](_primitive_unconstructable_.unconstructable.md#encodedlength)
* [hash](_primitive_unconstructable_.unconstructable.md#hash)
* [isEmpty](_primitive_unconstructable_.unconstructable.md#isempty)

### Methods

* [eq](_primitive_unconstructable_.unconstructable.md#eq)
* [toHex](_primitive_unconstructable_.unconstructable.md#tohex)
* [toJSON](_primitive_unconstructable_.unconstructable.md#tojson)
* [toRawType](_primitive_unconstructable_.unconstructable.md#torawtype)
* [toString](_primitive_unconstructable_.unconstructable.md#tostring)
* [toU8a](_primitive_unconstructable_.unconstructable.md#tou8a)
* [with](_primitive_unconstructable_.unconstructable.md#static-with)

## Constructors

###  constructor

\+ **new Unconstructable**(): *[Unconstructable](_primitive_unconstructable_.unconstructable.md)*

*Defined in [primitive/Unconstructable.ts:14](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Unconstructable.ts#L14)*

**Returns:** *[Unconstructable](_primitive_unconstructable_.unconstructable.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Null](_primitive_null_.null.md).[encodedLength](_primitive_null_.null.md#encodedlength)*

*Defined in [primitive/Null.ts:21](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L21)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Null](_primitive_null_.null.md).[hash](_primitive_null_.null.md#hash)*

*Defined in [primitive/Null.ts:28](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L28)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Null](_primitive_null_.null.md).[isEmpty](_primitive_null_.null.md#isempty)*

*Defined in [primitive/Null.ts:35](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L35)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[eq](_primitive_null_.null.md#eq)*

*Defined in [primitive/Null.ts:42](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L42)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Null](_primitive_null_.null.md).[toHex](_primitive_null_.null.md#tohex)*

*Defined in [primitive/Null.ts:49](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L49)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toJSON](_primitive_null_.null.md#tojson)*

*Defined in [primitive/Null.ts:56](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L56)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toRawType](_primitive_null_.null.md#torawtype)*

*Defined in [primitive/Null.ts:63](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toString](_primitive_null_.null.md#tostring)*

*Defined in [primitive/Null.ts:70](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toU8a](_primitive_null_.null.md#tou8a)*

*Defined in [primitive/Null.ts:79](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Null.ts#L79)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`typeDef`: any): *[Constructor](../interfaces/_types_.constructor.md)*

*Defined in [primitive/Unconstructable.ts:21](https://github.com/polkadot-js/api/blob/400f33f/packages/types/src/primitive/Unconstructable.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | any |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)*