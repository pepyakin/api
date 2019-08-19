> # External module: "elections/approvalsOfAt"

## Index

### Functions

* [approvalsOfAt](_elections_approvalsofat_.md#approvalsofat)

## Functions

###  approvalsOfAt

▸ **approvalsOfAt**(`api`: `ApiInterfaceRx`): *function*

*Defined in [elections/approvalsOfAt.ts:26](https://github.com/polkadot-js/api/blob/6fee15b/packages/api-derive/src/elections/approvalsOfAt.ts#L26)*

**`name`** approvalsOfAt

**`example`** 
<BR>

```javascript
api.derive.elections.approvalsOfAt(ALICE, new BN(0), (approvals) => {
  // approvals === [false, true, ...]
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An array of boolean approvals for the account and set index, converted from the returned ApprovalFlag.

▸ (`who`: `AccountId`, `at`: `SetIndex`): *`Observable<boolean[]>`*

**Parameters:**

Name | Type |
------ | ------ |
`who` | `AccountId` |
`at` | `SetIndex` |