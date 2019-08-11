> # Class: ExtrinsicV1 <**S, T, V, E**>

**`name`** ExtrinsicV1

**`description`** 
The first generation of compact extrinsics

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **ExtrinsicV1**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#constructor)

### Accessors

* [Type](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#type)
* [encodedLength](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#encodedlength)
* [hash](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#hash)
* [isEmpty](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#isempty)
* [method](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#method)
* [signature](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#signature)
* [version](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#version)

### Methods

* [addSignature](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#addsignature)
* [eq](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#eq)
* [get](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#get)
* [getAtIndex](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#getatindex)
* [sign](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#sign)
* [toArray](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#toarray)
* [toHex](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tohex)
* [toJSON](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tojson)
* [toRawType](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#torawtype)
* [toString](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tostring)
* [toU8a](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#tou8a)
* [decodeExtrinsic](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#static-decodeextrinsic)
* [with](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV1**(`value?`: `Uint8Array` | [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md), `__namedParameters`: object): *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | `Uint8Array` \| [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md) | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:57](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Call](_primitive_generic_call_.call.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:64](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L64)*

**`description`** The [Call](_primitive_generic_call_.call.md) this extrinsic wraps

**Returns:** *[Call](_primitive_generic_call_.call.md)*

___

###  signature

• **get signature**(): *`ExtrinsicSignature`*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:71](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L71)*

**`description`** The [[ExtrinsicSignature]]

**Returns:** *`ExtrinsicSignature`*

___

###  version

• **get version**(): *number*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:78](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L78)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_primitive_generic_address_.address.md) | `Uint8Array` | string, `signature`: `Uint8Array` | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | `Uint8Array` | string): *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:85](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L85)*

**`description`** Add an [[ExtrinsicSignature]] to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_primitive_generic_address_.address.md) \| `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) \| `Uint8Array` \| string |

**Returns:** *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L188)*

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

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L196)*

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

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_.signatureoptions.md)): *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:94](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L94)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L240)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L253)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L261)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value?`: `Uint8Array` | [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md), `isSigned`: boolean): *[ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | `Uint8Array` \| [ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV1](../interfaces/_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md)*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/2a5fd1c/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*