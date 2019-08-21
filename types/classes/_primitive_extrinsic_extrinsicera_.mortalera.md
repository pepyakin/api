> # Class: MortalEra

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Hierarchy

  * [Tuple](_codec_tuple_.tuple.md)

  * **MortalEra**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_extrinsicera_.mortalera.md#constructor)

### Accessors

* [Types](_primitive_extrinsic_extrinsicera_.mortalera.md#types)
* [encodedLength](_primitive_extrinsic_extrinsicera_.mortalera.md#encodedlength)
* [hash](_primitive_extrinsic_extrinsicera_.mortalera.md#hash)
* [isEmpty](_primitive_extrinsic_extrinsicera_.mortalera.md#isempty)
* [length](_primitive_extrinsic_extrinsicera_.mortalera.md#length)
* [period](_primitive_extrinsic_extrinsicera_.mortalera.md#period)
* [phase](_primitive_extrinsic_extrinsicera_.mortalera.md#phase)

### Methods

* [birth](_primitive_extrinsic_extrinsicera_.mortalera.md#birth)
* [death](_primitive_extrinsic_extrinsicera_.mortalera.md#death)
* [eq](_primitive_extrinsic_extrinsicera_.mortalera.md#eq)
* [filter](_primitive_extrinsic_extrinsicera_.mortalera.md#filter)
* [map](_primitive_extrinsic_extrinsicera_.mortalera.md#map)
* [toArray](_primitive_extrinsic_extrinsicera_.mortalera.md#toarray)
* [toHex](_primitive_extrinsic_extrinsicera_.mortalera.md#tohex)
* [toJSON](_primitive_extrinsic_extrinsicera_.mortalera.md#tojson)
* [toRawType](_primitive_extrinsic_extrinsicera_.mortalera.md#torawtype)
* [toString](_primitive_extrinsic_extrinsicera_.mortalera.md#tostring)
* [toU8a](_primitive_extrinsic_extrinsicera_.mortalera.md#tou8a)
* [with](_primitive_extrinsic_extrinsicera_.mortalera.md#static-with)

## Constructors

###  constructor

\+ **new MortalEra**(`value?`: `MortalMethod` | `Uint8Array` | number[] | string): *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:50](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | `MortalMethod` \| `Uint8Array` \| number[] \| string |

**Returns:** *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Tuple.ts#L81)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:101](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L101)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [codec/AbstractArray.ts:34](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L34)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:41](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L41)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:48](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L48)*

**`description`** The length of the value

**Returns:** *number*

___

###  period

• **get period**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:108](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L108)*

**`description`** The period of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

___

###  phase

• **get phase**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:115](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L115)*

**`description`** The phase of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

## Methods

###  birth

▸ **birth**(`current`: `BN` | number): *number*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:152](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L152)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

**Parameters:**

Name | Type |
------ | ------ |
`current` | `BN` \| number |

**Returns:** *number*

___

###  death

▸ **death**(`current`: `BN` | number): *number*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:164](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L164)*

**`description`** Get the block number of the first block at which the era has ended.

**Parameters:**

Name | Type |
------ | ------ |
`current` | `BN` \| number |

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:126](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L126)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`U`[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:135](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L135)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *`U`[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:63](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L63)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:70](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/AbstractArray.ts#L70)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:122](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L122)*

**`description`** Returns a JSON representation of the actual value

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Tuple.ts#L90)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Tuple.ts#L103)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:137](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L137)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TupleTypes`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/codec/Tuple.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TupleTypes` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Tuple](_codec_tuple_.tuple.md)*›*