> # Class: Digest <**S, T, V, E**>

**`name`** Digest

**`description`** 
A [Header](../interfaces/_interfaceregistry_.interfaceregistry.md#header) Digest

## Type parameters

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Digest**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_digest_.digest.md#constructor)

### Accessors

* [Type](_primitive_generic_digest_.digest.md#type)
* [encodedLength](_primitive_generic_digest_.digest.md#encodedlength)
* [hash](_primitive_generic_digest_.digest.md#hash)
* [isEmpty](_primitive_generic_digest_.digest.md#isempty)
* [logs](_primitive_generic_digest_.digest.md#logs)

### Methods

* [eq](_primitive_generic_digest_.digest.md#eq)
* [get](_primitive_generic_digest_.digest.md#get)
* [getAtIndex](_primitive_generic_digest_.digest.md#getatindex)
* [logsWith](_primitive_generic_digest_.digest.md#logswith)
* [logsWithout](_primitive_generic_digest_.digest.md#logswithout)
* [toArray](_primitive_generic_digest_.digest.md#toarray)
* [toHex](_primitive_generic_digest_.digest.md#tohex)
* [toJSON](_primitive_generic_digest_.digest.md#tojson)
* [toRawType](_primitive_generic_digest_.digest.md#torawtype)
* [toString](_primitive_generic_digest_.digest.md#tostring)
* [toU8a](_primitive_generic_digest_.digest.md#tou8a)
* [with](_primitive_generic_digest_.digest.md#static-with)

## Constructors

###  constructor

\+ **new Digest**(`value`: any): *[Digest](_primitive_generic_digest_.digest.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Generic/Digest.ts:166](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/primitive/Generic/Digest.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *[Digest](_primitive_generic_digest_.digest.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L166)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L179)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L190)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L151)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  logs

• **get logs**(): *[Vec](_codec_vec_.vec.md)‹*[DigestItem](_primitive_generic_digest_.digestitem.md)*›*

*Defined in [primitive/Generic/Digest.ts:176](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/primitive/Generic/Digest.ts#L176)*

**`description`** The [DigestItem](_primitive_generic_digest_.digestitem.md) logs

**Returns:** *[Vec](_codec_vec_.vec.md)‹*[DigestItem](_primitive_generic_digest_.digestitem.md)*›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L197)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L205)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L212)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  logsWith

▸ **logsWith**(...`include`: string[]): *[Vec](_codec_vec_.vec.md)‹*[DigestItem](_primitive_generic_digest_.digestitem.md)*›*

*Defined in [primitive/Generic/Digest.ts:183](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/primitive/Generic/Digest.ts#L183)*

**`description`** The [DigestItem](_primitive_generic_digest_.digestitem.md) logs, filtered, filter items included. This is useful for derive functionality where only a certain type of log is to be returned.

**Parameters:**

Name | Type |
------ | ------ |
`...include` | string[] |

**Returns:** *[Vec](_codec_vec_.vec.md)‹*[DigestItem](_primitive_generic_digest_.digestitem.md)*›*

___

###  logsWithout

▸ **logsWithout**(...`exclude`: string[]): *[Vec](_codec_vec_.vec.md)‹*[DigestItem](_primitive_generic_digest_.digestitem.md)*›*

*Defined in [primitive/Generic/Digest.ts:190](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/primitive/Generic/Digest.ts#L190)*

**`description`** The [DigestItem](_primitive_generic_digest_.digestitem.md) logs, filtered, filter items exluded. This is useful for stripping headers for eg. WASM runtime execution.

**Parameters:**

Name | Type |
------ | ------ |
`...exclude` | string[] |

**Returns:** *[Vec](_codec_vec_.vec.md)‹*[DigestItem](_primitive_generic_digest_.digestitem.md)*›*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L219)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L226)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L233)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L262)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:270](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L270)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/60148f2/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*