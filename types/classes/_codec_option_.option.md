> # Class: Option <**T**>

**`name`** Option

**`description`** 
An Option is an optional field. Basically the first byte indicates that there is
is value to follow. If the byte is `1` there is an actual value. So the Option
implements that - decodes, checks for optionality and wraps the required structure
with a value if/as required/found.

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

* [Base](_codec_base_.base.md)‹*`T`*›

  * **Option**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_option_.option.md#constructor)

### Accessors

* [encodedLength](_codec_option_.option.md#encodedlength)
* [hash](_codec_option_.option.md#hash)
* [isEmpty](_codec_option_.option.md#isempty)
* [isNone](_codec_option_.option.md#isnone)
* [isSome](_codec_option_.option.md#issome)
* [value](_codec_option_.option.md#value)

### Methods

* [eq](_codec_option_.option.md#eq)
* [toHex](_codec_option_.option.md#tohex)
* [toJSON](_codec_option_.option.md#tojson)
* [toRawType](_codec_option_.option.md#torawtype)
* [toString](_codec_option_.option.md#tostring)
* [toU8a](_codec_option_.option.md#tou8a)
* [unwrap](_codec_option_.option.md#unwrap)
* [unwrapOr](_codec_option_.option.md#unwrapor)
* [decodeOption](_codec_option_.option.md#static-decodeoption)
* [with](_codec_option_.option.md#static-with)

## Constructors

###  constructor

\+ **new Option**(`Type`: [Constructor](../interfaces/_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes), `value?`: any): *[Option](_codec_option_.option.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:22](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md) \| [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`value?` | any |

**Returns:** *[Option](_codec_option_.option.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Option.ts:62](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L62)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Overrides [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Option.ts:70](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L70)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Defined in [codec/Option.ts:77](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L77)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isSome

• **get isSome**(): *boolean*

*Defined in [codec/Option.ts:84](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L84)*

**`description`** Checks if the Option has a value

**Returns:** *boolean*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:91](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L91)*

**`description`** The actual value for the Option

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Option.ts:98](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L98)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Option.ts:109](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L109)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Base.ts:60](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Base.ts#L60)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(`isBare?`: undefined | false | true): *string*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Option.ts:120](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L120)*

**`description`** Returns the base runtime type name for this instance

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined \| false \| true |

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:67](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Option.ts:132](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L132)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

###  unwrap

▸ **unwrap**(): *`T`*

*Defined in [codec/Option.ts:150](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L150)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** *`T`*

___

###  unwrapOr

▸ **unwrapOr**<**O**>(`defaultValue`: `O`): *`T` | `O`*

*Defined in [codec/Option.ts:162](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L162)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | `O` | The value to return if the option isNone  |

**Returns:** *`T` | `O`*

___

### `Static` decodeOption

▸ **decodeOption**(`Type`: [Constructor](../interfaces/_types_.constructor.md), `value?`: any): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Option.ts:32](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md) |
`value?` | any |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](../interfaces/_types_.constructor.md)‹*[Option](_codec_option_.option.md)‹*`O`*›*›*

*Defined in [codec/Option.ts:51](https://github.com/polkadot-js/api/blob/908e9a8/packages/types/src/codec/Option.ts#L51)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md) \| [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Option](_codec_option_.option.md)‹*`O`*›*›*