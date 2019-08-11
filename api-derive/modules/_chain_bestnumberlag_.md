> # External module: "chain/bestNumberLag"

## Index

### Functions

* [bestNumberLag](_chain_bestnumberlag_.md#bestnumberlag)

## Functions

###  bestNumberLag

▸ **bestNumberLag**(`api`: `ApiInterfaceRx`): *function*

*Defined in [chain/bestNumberLag.ts:29](https://github.com/polkadot-js/api/blob/e5cc683/packages/api-derive/src/chain/bestNumberLag.ts#L29)*

**`name`** bestNumberLag

**`description`** Calculates the lag between finalized head and best head

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberLag((lag) => {
  console.log(`finalized is ${lag} blocks behind head`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

A number of blocks

▸ (): *`Observable<BlockNumber>`*