> # Interface: IExtrinsic

## Hierarchy

* `IExtrinsicSignable<IExtrinsic>`

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

*Defined in [types.ts:159](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L159)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [types.ts:160](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L160)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [types.ts:161](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L161)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [types.ts:162](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L162)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:76](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [types.ts:170](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L170)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [types.ts:164](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L164)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [IMethod](_types_.imethod.md).[hash](_types_.imethod.md#hash)*

*Overrides [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:163](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L163)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:86](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [types.ts:169](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L169)*

___

###  length

• **length**: *number*

*Defined in [types.ts:214](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L214)*

___

###  meta

• **meta**: *[FunctionMetadataV7](_interfaceregistry_.interfaceregistry.md#functionmetadatav7)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [types.ts:165](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L165)*

___

###  method

• **method**: *[Call](../classes/_primitive_generic_call_.call.md)*

*Defined in [types.ts:215](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L215)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹*[Index](../modules/_interfaces_runtime_types_.md#index)*›*

*Inherited from void*

*Defined in [types.ts:171](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L171)*

___

###  signature

• **signature**: *[IHash](_types_.ihash.md)*

*Inherited from void*

*Defined in [types.ts:172](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L172)*

___

###  signer

• **signer**: *[Address](../classes/_primitive_generic_address_.address.md)*

*Inherited from void*

*Defined in [types.ts:173](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L173)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹*[Balance](../modules/_interfaces_runtime_types_.md#balance)*›*

*Inherited from void*

*Defined in [types.ts:174](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L174)*

___

###  type

• **type**: *number*

*Defined in [types.ts:216](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L216)*

___

###  version

• **version**: *number*

*Defined in [types.ts:217](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L217)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_generic_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[IExtrinsic](_types_.iextrinsic.md)*

*Inherited from void*

*Defined in [types.ts:201](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L201)*

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

*Defined in [types.ts:91](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Inherited from void*

*Defined in [types.ts:202](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L202)*

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

*Defined in [types.ts:96](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L96)*

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

*Defined in [types.ts:101](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L111)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:117](https://github.com/polkadot-js/api/blob/895ed80/packages/types/src/types.ts#L117)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*