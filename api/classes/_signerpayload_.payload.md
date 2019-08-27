> # Class: Payload

## Hierarchy

* [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md)

  * **Payload**

## Index

### Properties

* [address](_signerpayload_.payload.md#address)
* [blockHash](_signerpayload_.payload.md#blockhash)
* [blockNumber](_signerpayload_.payload.md#blocknumber)
* [era](_signerpayload_.payload.md#era)
* [genesisHash](_signerpayload_.payload.md#genesishash)
* [method](_signerpayload_.payload.md#method)
* [nonce](_signerpayload_.payload.md#nonce)
* [runtimeVersion](_signerpayload_.payload.md#runtimeversion)
* [tip](_signerpayload_.payload.md#tip)
* [version](_signerpayload_.payload.md#version)

### Methods

* [toPayload](_signerpayload_.payload.md#topayload)
* [toRaw](_signerpayload_.payload.md#toraw)

## Properties

###  address

• **address**: *Address*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[address](../interfaces/_signerpayload_.signerpayloadtype.md#address)*

*Defined in [SignerPayload.ts:12](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L12)*

___

###  blockHash

• **blockHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[blockHash](../interfaces/_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [SignerPayload.ts:13](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L13)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[blockNumber](../interfaces/_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L14)*

___

###  era

• **era**: *ExtrinsicEra*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[era](../interfaces/_signerpayload_.signerpayloadtype.md#era)*

*Defined in [SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L15)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[genesisHash](../interfaces/_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L16)*

___

###  method

• **method**: *Call*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[method](../interfaces/_signerpayload_.signerpayloadtype.md#method)*

*Defined in [SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L17)*

___

###  nonce

• **nonce**: *Compact‹Index›*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[nonce](../interfaces/_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L18)*

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[runtimeVersion](../interfaces/_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L19)*

___

###  tip

• **tip**: *Compact‹Balance›*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[tip](../interfaces/_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L20)*

___

###  version

• **version**: *u8*

*Inherited from [SignerPayloadType](../interfaces/_signerpayload_.signerpayloadtype.md).[version](../interfaces/_signerpayload_.signerpayloadtype.md#version)*

*Defined in [SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L21)*

## Methods

###  toPayload

▸ **toPayload**(): *[SignerPayload](../interfaces/_types_.signerpayload.md)*

*Defined in [SignerPayload.ts:43](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L43)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *[SignerPayload](../interfaces/_types_.signerpayload.md)*

___

###  toRaw

▸ **toRaw**(): *[SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)*

*Defined in [SignerPayload.ts:63](https://github.com/polkadot-js/api/blob/9b1aa6a/packages/api/src/SignerPayload.ts#L63)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** *[SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)*