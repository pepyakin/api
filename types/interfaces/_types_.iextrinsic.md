> # Interface: IExtrinsic

## Hierarchy

* `ExtrinsicSignatureBase`

  * [IMethod](_types_.imethod.md)

  * **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_types_.iextrinsic.md#args)
* [argsDef](_types_.iextrinsic.md#argsdef)
* [callIndex](_types_.iextrinsic.md#callindex)
* [data](_types_.iextrinsic.md#data)
* [encodedLength](_types_.iextrinsic.md#encodedlength)
* [era](_types_.iextrinsic.md#era)
* [hasOrigin](_types_.iextrinsic.md#hasorigin)
* [hash](_types_.iextrinsic.md#hash)
* [isEmpty](_types_.iextrinsic.md#isempty)
* [isSigned](_types_.iextrinsic.md#issigned)
* [length](_types_.iextrinsic.md#length)
* [meta](_types_.iextrinsic.md#meta)
* [method](_types_.iextrinsic.md#method)
* [nonce](_types_.iextrinsic.md#nonce)
* [signature](_types_.iextrinsic.md#signature)
* [signer](_types_.iextrinsic.md#signer)
* [tip](_types_.iextrinsic.md#tip)
* [type](_types_.iextrinsic.md#type)
* [version](_types_.iextrinsic.md#version)

### Methods

* [addSignature](_types_.iextrinsic.md#addsignature)
* [eq](_types_.iextrinsic.md#eq)
* [sign](_types_.iextrinsic.md#sign)
* [toHex](_types_.iextrinsic.md#tohex)
* [toJSON](_types_.iextrinsic.md#tojson)
* [toRawType](_types_.iextrinsic.md#torawtype)
* [toString](_types_.iextrinsic.md#tostring)
* [toU8a](_types_.iextrinsic.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_.codec.md)[]*

*Inherited from [IMethod](_types_.imethod.md).[args](_types_.imethod.md#args)*

*Defined in [types.ts:157](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L157)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [types.ts:158](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L158)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [types.ts:159](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L159)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [types.ts:160](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L160)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:73](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [types.ts:168](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L168)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [types.ts:162](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L162)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [IMethod](_types_.imethod.md).[hash](_types_.imethod.md#hash)*

*Overrides [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:161](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L161)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:83](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L83)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [types.ts:167](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L167)*

___

###  length

• **length**: *number*

*Defined in [types.ts:206](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L206)*

___

###  meta

• **meta**: *[FunctionMetadata](../classes/_metadata_v1_calls_.functionmetadata.md)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [types.ts:163](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L163)*

___

###  method

• **method**: *[Call](../classes/_primitive_generic_call_.call.md)*

*Defined in [types.ts:207](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L207)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹*[Index](_interfaceregistry_.interfaceregistry.md#index)*›*

*Inherited from void*

*Defined in [types.ts:169](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L169)*

___

###  signature

• **signature**: *[IHash](_types_.ihash.md)*

*Inherited from void*

*Defined in [types.ts:170](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L170)*

___

###  signer

• **signer**: *[Address](../classes/_primitive_generic_address_.address.md)*

*Inherited from void*

*Defined in [types.ts:171](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L171)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹*[Balance](_interfaceregistry_.interfaceregistry.md#balance)*›*

*Inherited from void*

*Defined in [types.ts:172](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L172)*

___

###  type

• **type**: *number*

*Defined in [types.ts:208](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L208)*

___

###  version

• **version**: *number*

*Defined in [types.ts:209](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L209)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_generic_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:211](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_generic_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:88](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Defined in [types.ts:212](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:93](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L93)*

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

*Defined in [types.ts:98](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L98)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L103)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:108](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L108)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:114](https://github.com/polkadot-js/api/blob/891a342/packages/types/src/types.ts#L114)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*