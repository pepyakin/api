> # Interface: SubmittableExtrinsic <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

* `IExtrinsic`

  * **SubmittableExtrinsic**

## Index

### Properties

* [args](_submittableextrinsic_.submittableextrinsic.md#args)
* [argsDef](_submittableextrinsic_.submittableextrinsic.md#argsdef)
* [callIndex](_submittableextrinsic_.submittableextrinsic.md#callindex)
* [data](_submittableextrinsic_.submittableextrinsic.md#data)
* [encodedLength](_submittableextrinsic_.submittableextrinsic.md#encodedlength)
* [era](_submittableextrinsic_.submittableextrinsic.md#era)
* [hasOrigin](_submittableextrinsic_.submittableextrinsic.md#hasorigin)
* [hash](_submittableextrinsic_.submittableextrinsic.md#hash)
* [isEmpty](_submittableextrinsic_.submittableextrinsic.md#isempty)
* [isSigned](_submittableextrinsic_.submittableextrinsic.md#issigned)
* [length](_submittableextrinsic_.submittableextrinsic.md#length)
* [meta](_submittableextrinsic_.submittableextrinsic.md#meta)
* [method](_submittableextrinsic_.submittableextrinsic.md#method)
* [nonce](_submittableextrinsic_.submittableextrinsic.md#nonce)
* [signature](_submittableextrinsic_.submittableextrinsic.md#signature)
* [signer](_submittableextrinsic_.submittableextrinsic.md#signer)
* [tip](_submittableextrinsic_.submittableextrinsic.md#tip)
* [type](_submittableextrinsic_.submittableextrinsic.md#type)
* [version](_submittableextrinsic_.submittableextrinsic.md#version)

### Methods

* [addSignature](_submittableextrinsic_.submittableextrinsic.md#addsignature)
* [eq](_submittableextrinsic_.submittableextrinsic.md#eq)
* [send](_submittableextrinsic_.submittableextrinsic.md#send)
* [sign](_submittableextrinsic_.submittableextrinsic.md#sign)
* [signAndSend](_submittableextrinsic_.submittableextrinsic.md#signandsend)
* [toHex](_submittableextrinsic_.submittableextrinsic.md#tohex)
* [toJSON](_submittableextrinsic_.submittableextrinsic.md#tojson)
* [toRawType](_submittableextrinsic_.submittableextrinsic.md#torawtype)
* [toString](_submittableextrinsic_.submittableextrinsic.md#tostring)
* [toU8a](_submittableextrinsic_.submittableextrinsic.md#tou8a)

## Properties

###  args

• **args**: *`Codec`[]*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:157](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L157)*

___

###  argsDef

• **argsDef**: *`ArgsDef`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:158](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L158)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:159](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L159)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:160](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L160)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:73](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *`IExtrinsicEra`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:168](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L168)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:162](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L162)*

___

###  hash

• **hash**: *`IHash`*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:161](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L161)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:83](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L83)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:167](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L167)*

___

###  length

• **length**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:206](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L206)*

___

###  meta

• **meta**: *`FunctionMetadata`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:163](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L163)*

___

###  method

• **method**: *`Call`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:207](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L207)*

___

###  nonce

• **nonce**: *`Compact<Index>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:169](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L169)*

___

###  signature

• **signature**: *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:170](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L170)*

___

###  signer

• **signer**: *`Address`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:171](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L171)*

___

###  tip

• **tip**: *`Compact<Balance>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:172](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L172)*

___

###  type

• **type**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:208](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L208)*

___

###  version

• **version**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:209](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L209)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: `Address` | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: `ExtrinsicPayloadValue` | `Uint8Array` | string): *`IExtrinsic`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:211](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | `Address` \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | `ExtrinsicPayloadValue` \| `Uint8Array` \| string |

**Returns:** *`IExtrinsic`*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:88](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:96](https://github.com/polkadot-js/api/blob/6999f8c/packages/api/src/SubmittableExtrinsic.ts#L96)*

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **send**(`statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:98](https://github.com/polkadot-js/api/blob/6999f8c/packages/api/src/SubmittableExtrinsic.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  sign

▸ **sign**(`account`: `IKeyringPair`, `_options`: `Partial<SignatureOptions>`): *this*

*Overrides void*

*Defined in [SubmittableExtrinsic.ts:100](https://github.com/polkadot-js/api/blob/6999f8c/packages/api/src/SubmittableExtrinsic.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` |
`_options` | `Partial<SignatureOptions>` |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options?`: `Partial<SignerOptions>`): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:102](https://github.com/polkadot-js/api/blob/6999f8c/packages/api/src/SubmittableExtrinsic.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options?` | `Partial<SignerOptions>` |

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:104](https://github.com/polkadot-js/api/blob/6999f8c/packages/api/src/SubmittableExtrinsic.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options`: `Partial<SignerOptions>`, `statusCb?`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:106](https://github.com/polkadot-js/api/blob/6999f8c/packages/api/src/SubmittableExtrinsic.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options` | `Partial<SignerOptions>` |
`statusCb?` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:93](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L93)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *`AnyJson`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:98](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L98)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:103](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L103)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:108](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L108)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/6999f8c/packages/types/src/types.ts#L114)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*