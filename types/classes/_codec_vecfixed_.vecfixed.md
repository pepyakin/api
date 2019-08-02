> # Class: VecFixed <**T**>

**`name`** VecFixed

**`description`** 
This manages codec arrays of a fixed length

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

  * [AbstractArray](_codec_abstractarray_.abstractarray.md)‹*`T`*›

  * **VecFixed**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **n**: *number*\]: `T`

## Index

### Constructors

* [constructor](_codec_vecfixed_.vecfixed.md#constructor)

### Accessors

* [Type](_codec_vecfixed_.vecfixed.md#type)
* [encodedLength](_codec_vecfixed_.vecfixed.md#encodedlength)
* [hash](_codec_vecfixed_.vecfixed.md#hash)
* [isEmpty](_codec_vecfixed_.vecfixed.md#isempty)
* [length](_codec_vecfixed_.vecfixed.md#length)

### Methods

* [eq](_codec_vecfixed_.vecfixed.md#eq)
* [filter](_codec_vecfixed_.vecfixed.md#filter)
* [map](_codec_vecfixed_.vecfixed.md#map)
* [toArray](_codec_vecfixed_.vecfixed.md#toarray)
* [toHex](_codec_vecfixed_.vecfixed.md#tohex)
* [toJSON](_codec_vecfixed_.vecfixed.md#tojson)
* [toRawType](_codec_vecfixed_.vecfixed.md#torawtype)
* [toString](_codec_vecfixed_.vecfixed.md#tostring)
* [toU8a](_codec_vecfixed_.vecfixed.md#tou8a)
* [decodeVecFixed](_codec_vecfixed_.vecfixed.md#static-decodevecfixed)
* [with](_codec_vecfixed_.vecfixed.md#static-with)

## Constructors

###  constructor

\+ **new VecFixed**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `length`: number, `value`: [VecFixed](_codec_vecfixed_.vecfixed.md)‹*any*› | `Uint8Array` | string | any[]): *[VecFixed](_codec_vecfixed_.vecfixed.md)*

*Defined in [codec/VecFixed.ts:18](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/VecFixed.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | - |
`length` | number | - |
`value` | [VecFixed](_codec_vecfixed_.vecfixed.md)‹*any*› \| `Uint8Array` \| string \| any[] |  [] as any[] |

**Returns:** *[VecFixed](_codec_vecfixed_.vecfixed.md)*

## Accessors

###  Type

• **get Type**(): *string*

*Defined in [codec/VecFixed.ts:60](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/VecFixed.ts#L60)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:25](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L25)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [codec/AbstractArray.ts:34](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L34)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:41](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L41)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:48](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L48)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`T`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:126](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L126)*

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

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:135](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L135)*

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

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:63](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L63)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`T`[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:70](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L70)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:77](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L77)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/VecFixed.ts:71](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/VecFixed.ts#L71)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:91](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/AbstractArray.ts#L91)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *`Uint8Array`*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/VecFixed.ts:64](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/VecFixed.ts#L64)*

**Returns:** *`Uint8Array`*

___

### `Static` decodeVecFixed

▸ **decodeVecFixed**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `allocLength`: number, `value`: [VecFixed](_codec_vecfixed_.vecfixed.md)‹*any*› | `Uint8Array` | string | any[]): *`T`[]*

*Defined in [codec/VecFixed.ts:28](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/VecFixed.ts#L28)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |
`allocLength` | number |
`value` | [VecFixed](_codec_vecfixed_.vecfixed.md)‹*any*› \| `Uint8Array` \| string \| any[] |

**Returns:** *`T`[]*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`O`*›, `length`: number): *[Constructor](../interfaces/_types_.constructor.md)‹*[VecFixed](_codec_vecfixed_.vecfixed.md)‹*`O`*›*›*

*Defined in [codec/VecFixed.ts:45](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/codec/VecFixed.ts#L45)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`O`*› |
`length` | number |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[VecFixed](_codec_vecfixed_.vecfixed.md)‹*`O`*›*›*