> # External module: "chain/subscribeNewHeads"

## Index

### Type aliases

* [HeaderAndValidators](_chain_subscribenewheads_.md#headerandvalidators)

### Functions

* [subscribeNewHeads](_chain_subscribenewheads_.md#subscribenewheads)

## Type aliases

###  HeaderAndValidators

Ƭ **HeaderAndValidators**: *[`Header`, `AccountId`[]]*

*Defined in [chain/subscribeNewHeads.ts:14](https://github.com/polkadot-js/api/blob/895ed80/packages/api-derive/src/chain/subscribeNewHeads.ts#L14)*

## Functions

###  subscribeNewHeads

▸ **subscribeNewHeads**(`api`: `ApiInterfaceRx`): *function*

*Defined in [chain/subscribeNewHeads.ts:29](https://github.com/polkadot-js/api/blob/895ed80/packages/api-derive/src/chain/subscribeNewHeads.ts#L29)*

**`name`** subscribeNewHeads

**`description`** An observable of the current block header and it's author

**`example`** 
<BR>

```javascript
api.derive.chain.subscribeNewHeads(({ author, blockNumber }) => {
  console.log(`block #${blockNumber} was authored by ${author}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An array containing the block header and the block author

▸ (): *`Observable<HeaderExtended>`*