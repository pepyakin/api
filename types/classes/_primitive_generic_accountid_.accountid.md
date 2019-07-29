> # Class: AccountId

**`name`** AccountId

**`description`** 
A wrapper around an AccountId/PublicKey representation. Since we are dealing with
underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
just a Uint8Array wrapper with a fixed length.

## Hierarchy

  * [U8aFixed](_codec_u8afixed_.u8afixed.md)

  * **AccountId**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_generic_accountid_.accountid.md#constructor)

### Accessors

* [encodedLength](_primitive_generic_accountid_.accountid.md#encodedlength)
* [hash](_primitive_generic_accountid_.accountid.md#hash)
* [isEmpty](_primitive_generic_accountid_.accountid.md#isempty)
* [length](_primitive_generic_accountid_.accountid.md#length)

### Methods

* [bitLength](_primitive_generic_accountid_.accountid.md#bitlength)
* [eq](_primitive_generic_accountid_.accountid.md#eq)
* [subarray](_primitive_generic_accountid_.accountid.md#subarray)
* [toHex](_primitive_generic_accountid_.accountid.md#tohex)
* [toJSON](_primitive_generic_accountid_.accountid.md#tojson)
* [toRawType](_primitive_generic_accountid_.accountid.md#torawtype)
* [toString](_primitive_generic_accountid_.accountid.md#tostring)
* [toU8a](_primitive_generic_accountid_.accountid.md#tou8a)
* [encode](_primitive_generic_accountid_.accountid.md#static-encode)
* [with](_primitive_generic_accountid_.accountid.md#static-with)

## Constructors

###  constructor

\+ **new AccountId**(`value`: [AnyU8a](../modules/_types_.md#anyu8a)): *[AccountId](_primitive_generic_accountid_.accountid.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [primitive/Generic/AccountId.ts:19](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/primitive/Generic/AccountId.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyU8a](../modules/_types_.md#anyu8a) |  new Uint8Array() |

**Returns:** *[AccountId](_primitive_generic_accountid_.accountid.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:37](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L37)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[hash](_codec_u8a_.u8a.md#hash)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[bitLength](_codec_u8a_.u8a.md#bitlength)*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [primitive/Generic/AccountId.ts:46](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/primitive/Generic/AccountId.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *`Uint8Array`*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:88](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L88)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined \| number | The position to end at  |

**Returns:** *`Uint8Array`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:95](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L95)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [primitive/Generic/AccountId.ts:53](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/primitive/Generic/AccountId.ts#L53)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [primitive/Generic/AccountId.ts:67](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/primitive/Generic/AccountId.ts#L67)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [primitive/Generic/AccountId.ts:60](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/primitive/Generic/AccountId.ts#L60)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:125](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8a.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` encode

▸ **encode**(`value`: `Uint8Array`): *string*

*Defined in [primitive/Generic/AccountId.ts:27](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/primitive/Generic/AccountId.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `Uint8Array` |

**Returns:** *string*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/0d68f98/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[U8aFixed](_codec_u8afixed_.u8afixed.md)*›*