> # Class: Init <**ApiType**>

## Type parameters

▪ **ApiType**

## Hierarchy

  * [Decorate](_base_decorate_.decorate.md)‹*`ApiType`*›

  * **Init**

## Index

### Constructors

* [constructor](_base_init_.init.md#constructor)

### Methods

* [off](_base_init_.init.md#off)
* [on](_base_init_.init.md#on)
* [once](_base_init_.init.md#once)
* [registerTypes](_base_init_.init.md#abstract-registertypes)

## Constructors

###  constructor

\+ **new Init**(`options`: [ApiOptions](../interfaces/_types_.apioptions.md), `type`: [ApiTypes](../modules/_types_.md#apitypes)): *[Init](_base_init_.init.md)*

*Overrides [Decorate](_base_decorate_.decorate.md).[constructor](_base_decorate_.decorate.md#constructor)*

*Defined in [base/Init.ts:41](https://github.com/polkadot-js/api/blob/35a2960/packages/api/src/base/Init.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ApiOptions](../interfaces/_types_.apioptions.md) |
`type` | [ApiTypes](../modules/_types_.md#apitypes) |

**Returns:** *[Init](_base_init_.init.md)*

## Methods

###  off

▸ **off**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[off](_base_events_.events.md#off)*

*Defined in [base/Events.ts:66](https://github.com/polkadot-js/api/blob/35a2960/packages/api/src/base/Events.ts#L66)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = (): void => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

**Parameters:**

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to unregister.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[on](_base_events_.events.md#on)*

*Defined in [base/Events.ts:39](https://github.com/polkadot-js/api/blob/35a2960/packages/api/src/base/Events.ts#L39)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[once](_base_events_.events.md#once)*

*Defined in [base/Events.ts:91](https://github.com/polkadot-js/api/blob/35a2960/packages/api/src/base/Events.ts#L91)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Abstract` registerTypes

▸ **registerTypes**(`types?`: `RegistryTypes`): *void*

*Defined in [base/Init.ts:66](https://github.com/polkadot-js/api/blob/35a2960/packages/api/src/base/Init.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`types?` | `RegistryTypes` |

**Returns:** *void*