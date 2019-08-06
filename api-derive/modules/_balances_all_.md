> # External module: "balances/all"

## Index

### Functions

* [all](_balances_all_.md#all)

## Functions

###  all

▸ **all**(`api`: `ApiInterfaceRx`): *function*

*Defined in [balances/all.ts:78](https://github.com/polkadot-js/api/blob/724c4b8/packages/api-derive/src/balances/all.ts#L78)*

**`name`** all

**`example`** 
<BR>

```javascript
const ALICE = 'F7Hs';

api.derive.balances.all(ALICE, ([accountId, lockedBalance]) => {
  console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An object containing the combined results of the storage queries for
all relevant fees as declared in the substrate chain spec.

▸ (`address`: `AccountIndex` | `AccountId` | `Address` | string): *`Observable<DerivedBalances>`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | `AccountIndex` \| `AccountId` \| `Address` \| string | An accounts Id in different formats. |