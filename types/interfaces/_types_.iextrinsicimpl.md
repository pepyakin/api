> # Interface: IExtrinsicImpl

## Hierarchy

* IExtrinsicSignable‹[IExtrinsicImpl](_types_.iextrinsicimpl.md)›

* [Codec](_types_.codec.md)

  * **IExtrinsicImpl**

## Implemented by

* [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)

## Index

### Properties

* [encodedLength](_types_.iextrinsicimpl.md#encodedlength)
* [hash](_types_.iextrinsicimpl.md#hash)
* [isEmpty](_types_.iextrinsicimpl.md#isempty)
* [method](_types_.iextrinsicimpl.md#method)
* [signature](_types_.iextrinsicimpl.md#signature)
* [version](_types_.iextrinsicimpl.md#version)

### Methods

* [addSignature](_types_.iextrinsicimpl.md#addsignature)
* [eq](_types_.iextrinsicimpl.md#eq)
* [sign](_types_.iextrinsicimpl.md#sign)
* [toHex](_types_.iextrinsicimpl.md#tohex)
* [toJSON](_types_.iextrinsicimpl.md#tojson)
* [toRawType](_types_.iextrinsicimpl.md#torawtype)
* [toString](_types_.iextrinsicimpl.md#tostring)
* [toU8a](_types_.iextrinsicimpl.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:76](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:81](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L81)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *[Call](../classes/_primitive_generic_call_.call.md)*

*Defined in [types.ts:207](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L207)*

___

###  signature

• **signature**: *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [types.ts:208](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L208)*

___

###  version

• **version**: *number*

*Defined in [types.ts:209](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L209)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_generic_address_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

*Inherited from void*

*Defined in [types.ts:201](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_generic_address_.address.md) \| Uint8Array \| string |
`signature` | Uint8Array \| string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) \| Uint8Array \| string |

**Returns:** *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

*Inherited from void*

*Defined in [types.ts:202](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L202)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L96)*

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

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L111)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:117](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/types/src/types.ts#L117)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*