> # External module: "interfaces/session/types"

## Index

### Type aliases

* [FullIdentification](_interfaces_session_types_.md#fullidentification)
* [IdentificationTuple](_interfaces_session_types_.md#identificationtuple)
* [Keys](_interfaces_session_types_.md#keys)
* [SessionIndex](_interfaces_session_types_.md#sessionindex)
* [SessionKeysPolkadot](_interfaces_session_types_.md#sessionkeyspolkadot)
* [SessionKeysSubstrate](_interfaces_session_types_.md#sessionkeyssubstrate)

## Type aliases

###  FullIdentification

Ƭ **FullIdentification**: *[Exposure](../interfaces/_interfaces_staking_types_.exposure.md)*

*Defined in [interfaces/session/types.ts:10](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/session/types.ts#L10)*

Exposure

___

###  IdentificationTuple

Ƭ **IdentificationTuple**: *[[ValidatorId](_interfaces_runtime_types_.md#validatorid), [FullIdentification](_interfaces_session_types_.md#fullidentification)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/session/types.ts:13](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/session/types.ts#L13)*

[ValidatorId, FullIdentification] & Codec

___

###  Keys

Ƭ **Keys**: *[SessionKeysSubstrate](_interfaces_session_types_.md#sessionkeyssubstrate)*

*Defined in [interfaces/session/types.ts:16](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/session/types.ts#L16)*

SessionKeysSubstrate

___

###  SessionIndex

Ƭ **SessionIndex**: *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/session/types.ts:19](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/session/types.ts#L19)*

u32

___

###  SessionKeysPolkadot

Ƭ **SessionKeysPolkadot**: *[[AccountId](../classes/_primitive_generic_accountid_.accountid.md), [AccountId](../classes/_primitive_generic_accountid_.accountid.md), [AccountId](../classes/_primitive_generic_accountid_.accountid.md), [AccountId](../classes/_primitive_generic_accountid_.accountid.md)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/session/types.ts:22](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/session/types.ts#L22)*

[AccountId, AccountId, AccountId, AccountId] & Codec

___

###  SessionKeysSubstrate

Ƭ **SessionKeysSubstrate**: *[[AccountId](../classes/_primitive_generic_accountid_.accountid.md), [AccountId](../classes/_primitive_generic_accountid_.accountid.md), [AccountId](../classes/_primitive_generic_accountid_.accountid.md)] & [Codec](../interfaces/_types_.codec.md)*

*Defined in [interfaces/session/types.ts:25](https://github.com/polkadot-js/api/blob/960d399/packages/types/src/interfaces/session/types.ts#L25)*

[AccountId, AccountId, AccountId] & Codec