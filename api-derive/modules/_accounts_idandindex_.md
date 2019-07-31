> # External module: "accounts/idAndIndex"

## Index

### Type aliases

* [AccountIdAndIndex](_accounts_idandindex_.md#accountidandindex)

### Functions

* [idAndIndex](_accounts_idandindex_.md#idandindex)

## Type aliases

###  AccountIdAndIndex

Ƭ **AccountIdAndIndex**: *[undefined | `AccountId`, undefined | `AccountIndex`]*

*Defined in [accounts/idAndIndex.ts:17](https://github.com/polkadot-js/api/blob/7a08b37/packages/api-derive/src/accounts/idAndIndex.ts#L17)*

## Functions

###  idAndIndex

▸ **idAndIndex**(`api`: `ApiInterfaceRx`): *function*

*Defined in [accounts/idAndIndex.ts:32](https://github.com/polkadot-js/api/blob/7a08b37/packages/api-derive/src/accounts/idAndIndex.ts#L32)*

**`name`** idAndIndex

**`description`** An array containing the [[AccountId]] and [[AccountIndex]] as optional values.

**`example`** 
<BR>

```javascript
api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
  console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

▸ (`address?`: `Address` | `AccountId` | `AccountIndex` | string | null): *`Observable<AccountIdAndIndex>`*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address?` | `Address` \| `AccountId` \| `AccountIndex` \| string \| null | An accounts address in various formats. |