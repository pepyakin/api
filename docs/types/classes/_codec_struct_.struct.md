

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

 [Base](_codec_base_.base.md)<`T`>

**↳ Struct**

↳  [Digest](_header_.digest.md)

↳  [Header](_header_.header.md)

↳  [Block](_block_.block.md)

↳  [Tuple](_codec_tuple_.tuple.md)

↳  [EventMetadata](_metadata_.eventmetadata.md)

↳  [OuterEventMetadataEvent](_metadata_.outereventmetadataevent.md)

↳  [OuterEventMetadata](_metadata_.outereventmetadata.md)

↳  [FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)

↳  [FunctionMetadata](_metadata_.functionmetadata.md)

↳  [CallMetadata](_metadata_.callmetadata.md)

↳  [ModuleMetadata](_metadata_.modulemetadata.md)

↳  [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

↳  [StorageFunctionMetadata](_metadata_.storagefunctionmetadata.md)

↳  [StorageMetadata](_metadata_.storagemetadata.md)

↳  [RuntimeModuleMetadata](_metadata_.runtimemodulemetadata.md)

↳  [RuntimeMetadata](_metadata_.runtimemetadata.md)

↳  [KeyValue](_keyvalue_.keyvalue.md)

↳  [Justification](_bft_.justification.md)

↳  [BftAtReport](_misbehaviorreport_.bftatreport.md)

↳  [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

↳  [RuntimeVersion](_runtimeversion_.runtimeversion.md)

↳  [SignedBlock](_signedblock_.signedblock.md)

↳  [StorageChangeSet](_storagechangeset_.storagechangeset.md)

↳  [ValidatorPrefs](_validatorprefs_.validatorprefs.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Struct**(Types: *`S`*, value?: * `V` &#124; `Array`<`any`>*, jsonMap?: *`Map`<`keyof S`, `string`>*, isTuple?: *`boolean`*): [Struct](_codec_struct_.struct.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L27)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Types | `S` | - |
| `Default value` value |  `V` &#124; `Array`<`any`>|  {} as V |
| `Default value` jsonMap | `Map`<`keyof S`, `string`> |  new Map() |
| `Default value` isTuple | `boolean` | false |

**Returns:** [Struct](_codec_struct_.struct.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L27)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Defined in [codec/Struct.ts:26](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L26)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Defined in [codec/Struct.ts:76](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L76)*

**Returns:** `E`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:80](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L80)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Struct.ts:86](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Struct.ts:101](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): [Base](_codec_base_.base.md)

*Defined in [codec/Struct.ts:111](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L126)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:115](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L115)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:130](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L130)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<[Base](_codec_base_.base.md)>

*Defined in [codec/Struct.ts:147](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L147)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**<`S`,`V`,`T`>(Types: *`S`*, value: * `V` &#124; `Array`<`any`>*, isTuple: *`boolean`*): `T`

*Defined in [codec/Struct.ts:45](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L45)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value |  `V` &#124; `Array`<`any`>|
| isTuple | `boolean` |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `object`

*Defined in [codec/Struct.ts:66](https://github.com/polkadot-js/api/blob/e9030fa/packages/types/src/codec/Struct.ts#L66)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___
