> # Class: Address

**`name`** Address

**`description`** 
A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
Since we are dealing with underlying publicKeys (or shorter encoded addresses),
we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec

## Hierarchy

* [Base](_codec_base_.base.md)‹*[AccountId](_primitive_generic_accountid_.accountid.md) | [AccountIndex](_primitive_generic_accountindex_.accountindex.md)*›

  * **Address**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_address_.address.md#constructor)

### Accessors

* [encodedLength](_primitive_generic_address_.address.md#encodedlength)
* [hash](_primitive_generic_address_.address.md#hash)
* [isEmpty](_primitive_generic_address_.address.md#isempty)
* [rawLength](_primitive_generic_address_.address.md#rawlength)

### Methods

* [eq](_primitive_generic_address_.address.md#eq)
* [toHex](_primitive_generic_address_.address.md#tohex)
* [toJSON](_primitive_generic_address_.address.md#tojson)
* [toRawType](_primitive_generic_address_.address.md#torawtype)
* [toString](_primitive_generic_address_.address.md#tostring)
* [toU8a](_primitive_generic_address_.address.md#tou8a)
* [decodeAddress](_primitive_generic_address_.address.md#static-decodeaddress)

## Constructors

###  constructor

\+ **new Address**(`value`: `AnyAddress`): *[Address](_primitive_generic_address_.address.md)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [primitive/Generic/Address.ts:26](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/primitive/Generic/Address.ts#L26)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | `AnyAddress` |  new Uint8Array() |

**Returns:** *[Address](_primitive_generic_address_.address.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [primitive/Generic/Address.ts:68](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/primitive/Generic/Address.ts#L68)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  rawLength

• **get rawLength**(): *number*

*Defined in [primitive/Generic/Address.ts:82](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/primitive/Generic/Address.ts#L82)*

**`description`** The length of the raw value, either AccountIndex or AccountId

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Base.ts:46](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/Base.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [primitive/Generic/Address.ts:91](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/primitive/Generic/Address.ts#L91)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Base.ts:60](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/Base.ts#L60)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [primitive/Generic/Address.ts:98](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/primitive/Generic/Address.ts#L98)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:67](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [primitive/Generic/Address.ts:106](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/primitive/Generic/Address.ts#L106)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeAddress

▸ **decodeAddress**(`value`: `AnyAddress`): *[AccountId](_primitive_generic_accountid_.accountid.md) | [AccountIndex](_primitive_generic_accountindex_.accountindex.md)*

*Defined in [primitive/Generic/Address.ts:33](https://github.com/polkadot-js/api/blob/604812d/packages/types/src/primitive/Generic/Address.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `AnyAddress` |

**Returns:** *[AccountId](_primitive_generic_accountid_.accountid.md) | [AccountIndex](_primitive_generic_accountindex_.accountindex.md)*