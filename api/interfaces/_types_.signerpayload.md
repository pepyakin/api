> # Interface: SignerPayload

## Hierarchy

* **SignerPayload**

## Index

### Properties

* [address](_types_.signerpayload.md#address)
* [blockHash](_types_.signerpayload.md#blockhash)
* [blockNumber](_types_.signerpayload.md#blocknumber)
* [era](_types_.signerpayload.md#era)
* [genesisHash](_types_.signerpayload.md#genesishash)
* [method](_types_.signerpayload.md#method)
* [nonce](_types_.signerpayload.md#nonce)
* [tip](_types_.signerpayload.md#tip)
* [version](_types_.signerpayload.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [types.ts:219](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L219)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [types.ts:224](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L224)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [types.ts:229](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L229)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [types.ts:234](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L234)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [types.ts:239](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L239)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [types.ts:244](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L244)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [types.ts:249](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L249)*

**`description`** The nonce for this transaction, in hex

___

###  tip

• **tip**: *string*

*Defined in [types.ts:254](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L254)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [types.ts:259](https://github.com/polkadot-js/api/blob/40cf70f/packages/api/src/types.ts#L259)*

**`description`** The version of the extrinsic we are dealing with