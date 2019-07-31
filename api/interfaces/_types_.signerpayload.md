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

*Defined in [types.ts:237](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L237)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [types.ts:242](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L242)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [types.ts:247](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L247)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [types.ts:252](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L252)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [types.ts:257](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L257)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [types.ts:262](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L262)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [types.ts:267](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L267)*

**`description`** The nonce for this transaction, in hex

___

###  tip

• **tip**: *string*

*Defined in [types.ts:272](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L272)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [types.ts:277](https://github.com/polkadot-js/api/blob/19c3e4b/packages/api/src/types.ts#L277)*

**`description`** The version of the extrinsic we are dealing with