> # Class: AbstractArray <**T**>

**`name`** AbstractArray

**`description`** 
This manages codec arrays. It is an extension to Array, providing
specific encoding/decoding on top of the base type.

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

* `Array<T>`

  * **AbstractArray**

  * [Vec](_codec_vec_.vec.md)

  * [Tuple](_codec_tuple_.tuple.md)

  * [VecFixed](_codec_vecfixed_.vecfixed.md)

  * [VecAny](_codec_vecany_.vecany.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

* \[ **n**: *number*\]: `T`

## Index

### Properties

* [Array](_codec_abstractarray_.abstractarray.md#static-array)

### Accessors

* [encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)
* [hash](_codec_abstractarray_.abstractarray.md#hash)
* [isEmpty](_codec_abstractarray_.abstractarray.md#isempty)
* [length](_codec_abstractarray_.abstractarray.md#length)

### Methods

* [eq](_codec_abstractarray_.abstractarray.md#eq)
* [filter](_codec_abstractarray_.abstractarray.md#filter)
* [map](_codec_abstractarray_.abstractarray.md#map)
* [toArray](_codec_abstractarray_.abstractarray.md#toarray)
* [toHex](_codec_abstractarray_.abstractarray.md#tohex)
* [toJSON](_codec_abstractarray_.abstractarray.md#tojson)
* [toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)
* [toString](_codec_abstractarray_.abstractarray.md#tostring)
* [toU8a](_codec_abstractarray_.abstractarray.md#tou8a)

## Properties

### `Static` Array

▪ **Array**: *`ArrayConstructor`*

Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1368

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/AbstractArray.ts:25](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L25)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [codec/AbstractArray.ts:34](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L34)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/AbstractArray.ts:41](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L41)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides void*

*Defined in [codec/AbstractArray.ts:48](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L48)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`T`[]*

*Overrides void*

*Defined in [codec/AbstractArray.ts:126](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L126)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: `T`, `index`: number, `array`: `T`[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `T`[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *`T`[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Overrides void*

*Defined in [codec/AbstractArray.ts:135](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L135)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: `T`, `index`: number, `array`: `T`[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `T`[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *`T`[]*

*Defined in [codec/AbstractArray.ts:63](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L63)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`T`[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [codec/AbstractArray.ts:70](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L70)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/AbstractArray.ts:77](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

### `Abstract` toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/AbstractArray.ts:86](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L86)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:91](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L91)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/AbstractArray.ts:104](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/codec/AbstractArray.ts#L104)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*