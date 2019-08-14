> # External module: "Metadata/util/testUtil"

## Index

### Functions

* [decodeLatestSubstrate](_metadata_util_testutil_.md#decodelatestsubstrate)
* [defaultValues](_metadata_util_testutil_.md#defaultvalues)
* [toV7](_metadata_util_testutil_.md#tov7)

## Functions

###  decodeLatestSubstrate

▸ **decodeLatestSubstrate**<**Modules**>(`version`: number, `rpcData`: string, `latestSubstrate`: object): *void*

*Defined in [Metadata/util/testUtil.ts:19](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/Metadata/util/testUtil.ts#L19)*

Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata
should decode `rpcData` and output `latestSubstrate`.

**Type parameters:**

▪ **Modules**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |
`latestSubstrate` | object |

**Returns:** *void*

___

###  defaultValues

▸ **defaultValues**(`rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:53](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/Metadata/util/testUtil.ts#L53)*

Given a Metadata, no type should throw when given its fallback value.

**Parameters:**

Name | Type |
------ | ------ |
`rpcData` | string |

**Returns:** *void*

___

###  toV7

▸ **toV7**<**Modules**>(`version`: number, `rpcData`: string): *void*

*Defined in [Metadata/util/testUtil.ts:39](https://github.com/polkadot-js/api/blob/a9c752a/packages/types/src/Metadata/util/testUtil.ts#L39)*

Given a `version`, MetadataV7 and MetadataV{version} should output the same
unique types.

**Type parameters:**

▪ **Modules**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`rpcData` | string |

**Returns:** *void*