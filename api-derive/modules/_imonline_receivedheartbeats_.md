> # External module: "imOnline/receivedHeartbeats"

## Index

### Functions

* [receivedHeartbeats](_imonline_receivedheartbeats_.md#receivedheartbeats)

## Functions

###  receivedHeartbeats

▸ **receivedHeartbeats**(`api`: `ApiInterfaceRx`): *function*

*Defined in [imOnline/receivedHeartbeats.ts:17](https://github.com/polkadot-js/api/blob/5ee2caf/packages/api-derive/src/imOnline/receivedHeartbeats.ts#L17)*

**`description`** Return a boolean array indicating whether the passed accounts had received heartbeats in the current session

**Parameters:**

Name | Type |
------ | ------ |
`api` | `ApiInterfaceRx` |

**Returns:** *function*

▸ (`addresses`: string | `AccountId`[]): *`Observable<boolean[]>`*

**Parameters:**

Name | Type |
------ | ------ |
`addresses` | string \| `AccountId`[] |