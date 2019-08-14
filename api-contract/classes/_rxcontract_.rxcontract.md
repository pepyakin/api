> # Class: RxContract

## Hierarchy

* [RxBase](_rxbase_.rxbase.md)

  * **RxContract**

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹*"rxjs"*›
* [InterfaceContract](../interfaces/_types_.interfacecontract.md)

## Index

### Constructors

* [constructor](_rxcontract_.rxcontract.md#constructor)

### Properties

* [abi](_rxcontract_.rxcontract.md#abi)
* [address](_rxcontract_.rxcontract.md#address)
* [api](_rxcontract_.rxcontract.md#api)
* [apiContracts](_rxcontract_.rxcontract.md#apicontracts)
* [calls](_rxcontract_.rxcontract.md#calls)

## Constructors

###  constructor

\+ **new RxContract**(`api`: `ApiRx`, `abi`: [ContractABI](../interfaces/_types_.contractabi.md) | `Abi`, `address`: string | `AccountId` | `Address`): *[RxContract](_rxcontract_.rxcontract.md)*

*Overrides [RxBase](_rxbase_.rxbase.md).[constructor](_rxbase_.rxbase.md#constructor)*

*Defined in [RxContract.ts:29](https://github.com/polkadot-js/api/blob/a39cacc/packages/api-contract/src/RxContract.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiRx` |
`abi` | [ContractABI](../interfaces/_types_.contractabi.md) \| `Abi` |
`address` | string \| `AccountId` \| `Address` |

**Returns:** *[RxContract](_rxcontract_.rxcontract.md)*

## Properties

###  abi

• **abi**: *`Abi`*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[abi](_rxbase_.rxbase.md#abi)*

*Defined in [RxBase.ts:14](https://github.com/polkadot-js/api/blob/a39cacc/packages/api-contract/src/RxBase.ts#L14)*

___

###  address

• **address**: *`Address`*

*Implementation of [InterfaceContract](../interfaces/_types_.interfacecontract.md).[address](../interfaces/_types_.interfacecontract.md#address)*

*Defined in [RxContract.ts:27](https://github.com/polkadot-js/api/blob/a39cacc/packages/api-contract/src/RxContract.ts#L27)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹*"rxjs"*›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[api](_rxbase_.rxbase.md#api)*

*Defined in [RxBase.ts:16](https://github.com/polkadot-js/api/blob/a39cacc/packages/api-contract/src/RxBase.ts#L16)*

___

###  apiContracts

• **apiContracts**: *`SubmittableModuleExtrinsics<"rxjs">`*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[apiContracts](../interfaces/_types_.contractbase.md#apicontracts)*

*Inherited from [RxBase](_rxbase_.rxbase.md).[apiContracts](_rxbase_.rxbase.md#apicontracts)*

*Defined in [RxBase.ts:18](https://github.com/polkadot-js/api/blob/a39cacc/packages/api-contract/src/RxBase.ts#L18)*

___

###  calls

• **calls**: *[InterfaceContractCalls](../interfaces/_types_.interfacecontractcalls.md)*

*Implementation of [InterfaceContract](../interfaces/_types_.interfacecontract.md).[calls](../interfaces/_types_.interfacecontract.md#calls)*

*Defined in [RxContract.ts:29](https://github.com/polkadot-js/api/blob/a39cacc/packages/api-contract/src/RxContract.ts#L29)*