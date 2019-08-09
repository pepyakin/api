> # External module: "balances/fees"

## Index

### Functions

* [fees](_balances_fees_.md#fees)

## Functions

###  fees

▸ **fees**(`api`: `ApiInterfaceRx`): *function*

*Defined in [balances/fees.ts:27](https://github.com/polkadot-js/api/blob/60148f2/packages/api-derive/src/balances/fees.ts#L27)*

**`name`** fees

**`example`** 
<BR>

```javascript
api.derive.balances.fees(([creationFee, transferFee]) => {
  console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

An object containing the combined results of the storage queries for
all relevant fees as declared in the substrate chain spec.

▸ (): *`Observable<DerivedFees>`*