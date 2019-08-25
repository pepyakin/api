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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:159](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L159)*

___

###  argsDef

• **argsDef**: *`ArgsDef`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:160](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L160)*

___

###  callIndex

• **callIndex**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:161](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L161)*

___

###  data

• **data**: *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:162](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L162)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *`IExtrinsicEra`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:170](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L170)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:164](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L164)*

___

###  hash

• **hash**: *`IHash`*

*Inherited from void*

*Overrides void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:163](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L163)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:169](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L169)*

___

###  length

• **length**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:214](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L214)*

___

###  meta

• **meta**: *`FunctionMetadataV7`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:165](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L165)*

___

###  method

• **method**: *`Call`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:215](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L215)*

___

###  nonce

• **nonce**: *`Compact<Index>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:171](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L171)*

___

###  signature

• **signature**: *`IHash`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:172](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L172)*

___

###  signer

• **signer**: *`Address`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:173](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L173)*

___

###  tip

• **tip**: *`Compact<Balance>`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:174](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L174)*

___

###  type

• **type**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:216](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L216)*

___

###  version

• **version**: *number*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:217](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L217)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: `Address` | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: `ExtrinsicPayloadValue` | `Uint8Array` | string): *`IExtrinsic`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:201](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L201)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:96](https://github.com/polkadot-js/api/blob/97a5b16/packages/api/src/SubmittableExtrinsic.ts#L96)*

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **send**(`statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:98](https://github.com/polkadot-js/api/blob/97a5b16/packages/api/src/SubmittableExtrinsic.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

___

###  sign

▸ **sign**(`account`: `IKeyringPair`, `_options`: `Partial<SignatureOptions>`): *this*

*Overrides void*

*Defined in [SubmittableExtrinsic.ts:100](https://github.com/polkadot-js/api/blob/97a5b16/packages/api/src/SubmittableExtrinsic.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` |
`_options` | `Partial<SignatureOptions>` |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options?`: `Partial<SignerOptions>`): *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:102](https://github.com/polkadot-js/api/blob/97a5b16/packages/api/src/SubmittableExtrinsic.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`options?` | `Partial<SignerOptions>` |

**Returns:** *[SumbitableResultResult](../modules/_submittableextrinsic_.md#sumbitableresultresult)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `statusCb`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:104](https://github.com/polkadot-js/api/blob/97a5b16/packages/api/src/SubmittableExtrinsic.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | `IKeyringPair` \| string \| `AccountId` \| `Address` |
`statusCb` | `Callback<ISubmittableResult>` |

**Returns:** *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

▸ **signAndSend**(`account`: `IKeyringPair` | string | `AccountId` | `Address`, `options`: `Partial<SignerOptions>`, `statusCb?`: `Callback<ISubmittableResult>`): *[SumbitableResultSubscription](../modules/_submittableextrinsic_.md#sumbitableresultsubscription)‹*`ApiType`*›*

*Defined in [SubmittableExtrinsic.ts:106](https://github.com/polkadot-js/api/blob/97a5b16/packages/api/src/SubmittableExtrinsic.ts#L106)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L96)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *`AnyJson`*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L111)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Inherited from void*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/types.ts:117](https://github.com/polkadot-js/api/blob/97a5b16/packages/types/src/types.ts#L117)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*