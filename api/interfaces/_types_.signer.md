> # Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [sign](_types_.signer.md#optional-sign)
* [update](_types_.signer.md#optional-update)

### Methods

* [signPayload](_types_.signer.md#signpayload)

## Properties

### `Optional` sign

• **sign**? : *undefined | function*

*Defined in [types.ts:297](https://github.com/polkadot-js/api/blob/0d68f98/packages/api/src/types.ts#L297)*

**`deprecated`** Implement and use signPayload instead

**`description`** Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:307](https://github.com/polkadot-js/api/blob/0d68f98/packages/api/src/types.ts#L307)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`

## Methods

###  signPayload

▸ **signPayload**(`payload`: [SignerPayload](_types_.signerpayload.md)): *`Promise<SignerResult>`*

*Defined in [types.ts:302](https://github.com/polkadot-js/api/blob/0d68f98/packages/api/src/types.ts#L302)*

**`description`** signs an extrinsic payload from a serialized form

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [SignerPayload](_types_.signerpayload.md) |

**Returns:** *`Promise<SignerResult>`*