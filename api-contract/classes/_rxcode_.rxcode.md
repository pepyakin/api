> # Class: RxCode

## Hierarchy

* [RxBase](_rxbase_.rxbase.md)

  * **RxCode**

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹*"rxjs"*›

## Index

### Constructors

* [constructor](_rxcode_.rxcode.md#constructor)

### Properties

* [abi](_rxcode_.rxcode.md#abi)
* [api](_rxcode_.rxcode.md#api)
* [apiContracts](_rxcode_.rxcode.md#apicontracts)
* [code](_rxcode_.rxcode.md#code)

### Methods

* [createBlueprint](_rxcode_.rxcode.md#createblueprint)

## Constructors

###  constructor

\+ **new RxCode**(`api`: `ApiRx`, `abi`: [ContractABI](../interfaces/_types_.contractabi.md) | `Abi`, `wasm`: string | `Uint8Array`): *[RxCode](_rxcode_.rxcode.md)*

*Overrides [RxBase](_rxbase_.rxbase.md).[constructor](_rxbase_.rxbase.md#constructor)*

*Defined in [RxCode.ts:51](https://github.com/polkadot-js/api/blob/5ee2caf/packages/api-contract/src/RxCode.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiRx` |
`abi` | [ContractABI](../interfaces/_types_.contractabi.md) \| `Abi` |
`wasm` | string \| `Uint8Array` |

**Returns:** *[RxCode](_rxcode_.rxcode.md)*

## Properties

###  abi

• **abi**: *`Abi`*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[abi](_rxbase_.rxbase.md#abi)*

*Defined in [RxBase.ts:14](https://github.com/polkadot-js/api/blob/5ee2caf/packages/api-contract/src/RxBase.ts#L14)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹*"rxjs"*›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[api](_rxbase_.rxbase.md#api)*

*Defined in [RxBase.ts:16](https://github.com/polkadot-js/api/blob/5ee2caf/packages/api-contract/src/RxBase.ts#L16)*

___

###  apiContracts

• **apiContracts**: *`SubmittableModuleExtrinsics<"rxjs">`*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[apiContracts](../interfaces/_types_.contractbase.md#apicontracts)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[apiContracts](_rxbase_.rxbase.md#apicontracts)*

*Defined in [RxBase.ts:18](https://github.com/polkadot-js/api/blob/5ee2caf/packages/api-contract/src/RxBase.ts#L18)*

___

###  code

• **code**: *`Uint8Array`*

*Defined in [RxCode.ts:51](https://github.com/polkadot-js/api/blob/5ee2caf/packages/api-contract/src/RxCode.ts#L51)*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | `BN`): *[CodePutCode](../interfaces/_rxcode_.codeputcode.md)*

*Defined in [RxCode.ts:59](https://github.com/polkadot-js/api/blob/5ee2caf/packages/api-contract/src/RxCode.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number \| `BN` |

**Returns:** *[CodePutCode](../interfaces/_rxcode_.codeputcode.md)*