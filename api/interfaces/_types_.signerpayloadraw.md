> # Interface: SignerPayloadRaw

## Hierarchy

* [SignerPayloadRawBase](_types_.signerpayloadrawbase.md)

  * **SignerPayloadRaw**

## Index

### Properties

* [address](_types_.signerpayloadraw.md#address)
* [data](_types_.signerpayloadraw.md#data)
* [type](_types_.signerpayloadraw.md#type)

## Properties

###  address

• **address**: *string*

*Defined in [types.ts:278](https://github.com/polkadot-js/api/blob/8da5261/packages/api/src/types.ts#L278)*

**`description`** The ss-58 encoded address

___

###  data

• **data**: *string*

*Inherited from [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[data](_types_.signerpayloadrawbase.md#data)*

*Defined in [types.ts:266](https://github.com/polkadot-js/api/blob/8da5261/packages/api/src/types.ts#L266)*

**`description`** The hex-encoded data for this request

___

###  type

• **type**: *"bytes" | "payload"*

*Overrides [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[type](_types_.signerpayloadrawbase.md#optional-type)*

*Defined in [types.ts:283](https://github.com/polkadot-js/api/blob/8da5261/packages/api/src/types.ts#L283)*

**`description`** The type of the contained data