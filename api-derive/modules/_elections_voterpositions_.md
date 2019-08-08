> # External module: "elections/voterPositions"

## Index

### Functions

* [voterPositions](_elections_voterpositions_.md#voterpositions)

## Functions

###  voterPositions

▸ **voterPositions**(`api`: `ApiInterfaceRx`): *function*

*Defined in [elections/voterPositions.ts:28](https://github.com/polkadot-js/api/blob/fbd6bf1/packages/api-derive/src/elections/voterPositions.ts#L28)*

**`name`** voterPositions

**`example`** 
<BR>

```javascript
api.derive.elections.voterPositions((voters) => {
  const { index, setIndex, globalIndex } = voters[ALICE];
  console.log(`ALICE is a voter at index ${index} in voter set ${setIndex}, with global index ${globalIndex}.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An mapping of all current voter accounts to their voter set and global index.

▸ (): *`Observable<DerivedVoterPositions>`*