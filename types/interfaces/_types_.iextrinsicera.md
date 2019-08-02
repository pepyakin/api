> # Interface: IExtrinsicEra

## Hierarchy

* [Codec](_types_.codec.md)

  * **IExtrinsicEra**

## Implemented by

* [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)

## Index

### Properties

* [asImmortalEra](_types_.iextrinsicera.md#asimmortalera)
* [asMortalEra](_types_.iextrinsicera.md#asmortalera)
* [encodedLength](_types_.iextrinsicera.md#encodedlength)
* [hash](_types_.iextrinsicera.md#hash)
* [isEmpty](_types_.iextrinsicera.md#isempty)

### Methods

* [eq](_types_.iextrinsicera.md#eq)
* [toHex](_types_.iextrinsicera.md#tohex)
* [toJSON](_types_.iextrinsicera.md#tojson)
* [toRawType](_types_.iextrinsicera.md#torawtype)
* [toString](_types_.iextrinsicera.md#tostring)
* [toU8a](_types_.iextrinsicera.md#tou8a)

## Properties

###  asImmortalEra

• **asImmortalEra**: *[Codec](_types_.codec.md)*

*Defined in [types.ts:190](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L190)*

___

###  asMortalEra

• **asMortalEra**: *[Codec](_types_.codec.md)*

*Defined in [types.ts:191](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L191)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:73](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:78](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L78)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:83](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L83)*

**`description`** Checks if the value is an empty value

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:88](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L93)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L98)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L103)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:108](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L108)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/afa4b2b/packages/types/src/types.ts#L114)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*