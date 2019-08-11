> # Class: StructAny

**`name`** Json

**`description`** 
Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
implements a Codec, it is limited in that it can only be used with input objects via RPC,
i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys

## Hierarchy

* `Map<string, any>`

  * **StructAny**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_structany_.structany.md#constructor)

### Properties

* [Map](_codec_structany_.structany.md#static-map)

### Accessors

* [encodedLength](_codec_structany_.structany.md#encodedlength)
* [hash](_codec_structany_.structany.md#hash)
* [isEmpty](_codec_structany_.structany.md#isempty)

### Methods

* [eq](_codec_structany_.structany.md#eq)
* [toHex](_codec_structany_.structany.md#tohex)
* [toJSON](_codec_structany_.structany.md#tojson)
* [toRawType](_codec_structany_.structany.md#torawtype)
* [toString](_codec_structany_.structany.md#tostring)
* [toU8a](_codec_structany_.structany.md#tou8a)

## Constructors

###  constructor

\+ **new StructAny**(`value?`: object | null): *[StructAny](_codec_structany_.structany.md)*

*Defined in [codec/StructAny.ts:22](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | object \| null |

**Returns:** *[StructAny](_codec_structany_.structany.md)*

## Properties

### `Static` Map

▪ **Map**: *`MapConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/StructAny.ts:49](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L49)*

**`description`** Always 0, never encodes as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [codec/StructAny.ts:56](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L56)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/StructAny.ts:63](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L63)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:70](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L70)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/StructAny.ts:77](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L77)*

**`description`** Unimplemented, will throw

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:84](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L84)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:95](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L95)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:102](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L102)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/StructAny.ts:110](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/StructAny.ts#L110)*

**`description`** Unimplemented, will throw

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined \| false \| true |

**Returns:** *`Uint8Array`*