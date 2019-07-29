> # Class: Blueprint

## Hierarchy

* [RxBase](_rxbase_.rxbase.md)

  * **Blueprint**

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹*"rxjs"*›

## Index

### Constructors

* [constructor](_rxblueprint_.blueprint.md#constructor)

### Properties

* [abi](_rxblueprint_.blueprint.md#abi)
* [api](_rxblueprint_.blueprint.md#api)
* [apiContracts](_rxblueprint_.blueprint.md#apicontracts)
* [codeHash](_rxblueprint_.blueprint.md#codehash)

### Methods

* [deployContract](_rxblueprint_.blueprint.md#deploycontract)

## Constructors

###  constructor

\+ **new Blueprint**(`api`: `ApiRx`, `abi`: [ContractABI](../interfaces/_types_.contractabi.md) | `Abi`, `codeHash`: string | `Hash`): *[Blueprint](_rxblueprint_.blueprint.md)*

*Overrides [RxBase](_rxbase_.rxbase.md).[constructor](_rxbase_.rxbase.md#constructor)*

*Defined in [RxBlueprint.ts:38](https://github.com/polkadot-js/api/blob/0d68f98/packages/api-contract/src/RxBlueprint.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiRx` |
`abi` | [ContractABI](../interfaces/_types_.contractabi.md) \| `Abi` |
`codeHash` | string \| `Hash` |

**Returns:** *[Blueprint](_rxblueprint_.blueprint.md)*

## Properties

###  abi

• **abi**: *`Abi`*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[abi](_rxbase_.rxbase.md#abi)*

*Defined in [RxBase.ts:14](https://github.com/polkadot-js/api/blob/0d68f98/packages/api-contract/src/RxBase.ts#L14)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹*"rxjs"*›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[api](_rxbase_.rxbase.md#api)*

*Defined in [RxBase.ts:16](https://github.com/polkadot-js/api/blob/0d68f98/packages/api-contract/src/RxBase.ts#L16)*

___

###  apiContracts

• **apiContracts**: *`SubmittableModuleExtrinsics<"rxjs">`*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[apiContracts](../interfaces/_types_.contractbase.md#apicontracts)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[apiContracts](_rxbase_.rxbase.md#apicontracts)*

*Defined in [RxBase.ts:18](https://github.com/polkadot-js/api/blob/0d68f98/packages/api-contract/src/RxBase.ts#L18)*

___

###  codeHash

• **codeHash**: *`Hash`*

*Defined in [RxBlueprint.ts:38](https://github.com/polkadot-js/api/blob/0d68f98/packages/api-contract/src/RxBlueprint.ts#L38)*

## Methods

###  deployContract

▸ **deployContract**(`endowment`: number | `BN`, `maxGas`: number | `BN`, ...`params`: any[]): *[BlueprintCreate](../interfaces/_rxblueprint_.blueprintcreate.md)*

*Defined in [RxBlueprint.ts:46](https://github.com/polkadot-js/api/blob/0d68f98/packages/api-contract/src/RxBlueprint.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`endowment` | number \| `BN` |
`maxGas` | number \| `BN` |
`...params` | any[] |

**Returns:** *[BlueprintCreate](../interfaces/_rxblueprint_.blueprintcreate.md)*