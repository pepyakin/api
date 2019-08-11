> # External module: "elections/approvalsOf"

## Index

### Functions

* [approvalsOf](_elections_approvalsof_.md#approvalsof)

## Functions

###  approvalsOf

▸ **approvalsOf**(`api`: `ApiInterfaceRx`): *function*

*Defined in [elections/approvalsOf.ts:26](https://github.com/polkadot-js/api/blob/07b89e7/packages/api-derive/src/elections/approvalsOf.ts#L26)*

**`name`** approvalsOf

**`example`** 
<BR>

```javascript
api.derive.elections.approvalsOf(ALICE, (approvals) => {
  // approvals === [[false], [true, false], ...]
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

A nested array of boolean approvals for the given account in each voter set index, converted from its ApprovalFlag(s).

▸ (`who`: `AccountId`): *`Observable<boolean[][]>`*

**Parameters:**

Name | Type |
------ | ------ |
`who` | `AccountId` |