> # Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [sign](_types_.signer.md#optional-sign)
* [signPayload](_types_.signer.md#optional-signpayload)
* [signRaw](_types_.signer.md#optional-signraw)
* [update](_types_.signer.md#optional-update)

## Properties

### `Optional` sign

• **sign**? : *undefined | function*

*Defined in [types.ts:301](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L301)*

**`deprecated`** Implement and use signPayload and/or signRaw instead

**`description`** Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

___

### `Optional` signPayload

• **signPayload**? : *undefined | function*

*Defined in [types.ts:306](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L306)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [types.ts:311](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L311)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [types.ts:316](https://github.com/polkadot-js/api/blob/f30354e/packages/api/src/types.ts#L316)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`