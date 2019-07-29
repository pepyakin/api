> # Class: Base <**T**>

**`name`** Base

**`description`** A type extends the Base class, when it holds a value

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

* **Base**

  * [Address](_primitive_generic_address_.address.md)

  * [Enum](_codec_enumtype_.enum.md)

  * [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

  * [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)

  * [Option](_codec_option_.option.md)

  * [Compact](_codec_compact_.compact.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_base_.base.md#constructor)

### Accessors

* [encodedLength](_codec_base_.base.md#encodedlength)
* [hash](_codec_base_.base.md#hash)
* [isEmpty](_codec_base_.base.md#isempty)

### Methods

* [eq](_codec_base_.base.md#eq)
* [toHex](_codec_base_.base.md#tohex)
* [toJSON](_codec_base_.base.md#tojson)
* [toRawType](_codec_base_.base.md#torawtype)
* [toString](_codec_base_.base.md#tostring)
* [toU8a](_codec_base_.base.md#tou8a)

## Constructors

###  constructor

\+ **new Base**(`value?`: any): *[Base](_codec_base_.base.md)*

*Defined in [codec/Base.ts:16](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[Base](_codec_base_.base.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [codec/Base.ts:25](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L25)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Base.ts:46](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Base.ts:53](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L53)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Base.ts:60](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L60)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Base.ts:82](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L82)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Base.ts:67](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [codec/Base.ts:75](https://github.com/polkadot-js/api/blob/a45e313/packages/types/src/codec/Base.ts#L75)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*