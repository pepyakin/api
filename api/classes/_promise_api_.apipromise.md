> # Class: ApiPromise

# @polkadot/api/promise

## Overview

**`name`** ApiPromise

**`description`** 
ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Polkadot network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise `(value) => {}` callbacks to pass through the latest values.

The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of the subscription-based features of Polkadot (and Substrate) clients.

**`see`** [ApiRx](_rx_api_.apirx.md)

## Usage

Making rpc calls -
<BR>

```javascript
import ApiPromise from '@polkadot/api/promise';

// initialise via static create
const api = await ApiPromise.create();

// make a subscription to the network head
api.rpc.chain.subscribeNewHead((header) => {
  console.log(`Chain is at #${header.number}`);
});
```
<BR>

Subscribing to chain state -
<BR>

```javascript
import { ApiPromise, WsProvider } from '@polkadot/api';

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
const api = await new ApiPromise(provider).isReady;

// retrieve the block target time
const blockPeriod = await api.query.timestamp.blockPeriod().toNumber();
let last = 0;

// subscribe to the current block timestamp, updates automatically (callback provided)
api.query.timestamp.now((timestamp) => {
  const elapsed = last
    ? `, ${timestamp.toNumber() - last}s since last`
    : '';

  last = timestamp.toNumber();
  console.log(`timestamp ${timestamp}${elapsed} (${blockPeriod}s target)`);
});
```
<BR>

Submitting a transaction -
<BR>

```javascript
import ApiPromise from '@polkadot/api/promise';

ApiPromise.create().then((api) => {
  const nonce = await api.query.system.accountNonce(keyring.alice.address);

  api.tx.balances
    // create transfer
    transfer(keyring.bob.address, 12345)
    // sign the transcation
    .sign(keyring.alice, { nonce })
    // send the transaction (optional status callback)
    .send((status) => {
      console.log(`current status ${status.type}`);
    })
    // retrieve the submitted extrinsic hash
    .then((hash) => {
      console.log(`submitted with hash ${hash}`);
    });
});
```

## Hierarchy

* [ApiBase](_base_.apibase.md)‹*"promise"*›

  * **ApiPromise**

## Index

### Constructors

* [constructor](_promise_api_.apipromise.md#constructor)

### Accessors

* [consts](_promise_api_.apipromise.md#consts)
* [derive](_promise_api_.apipromise.md#derive)
* [extrinsicVersion](_promise_api_.apipromise.md#extrinsicversion)
* [genesisHash](_promise_api_.apipromise.md#genesishash)
* [hasSubscriptions](_promise_api_.apipromise.md#hassubscriptions)
* [isReady](_promise_api_.apipromise.md#isready)
* [libraryInfo](_promise_api_.apipromise.md#libraryinfo)
* [query](_promise_api_.apipromise.md#query)
* [queryMulti](_promise_api_.apipromise.md#querymulti)
* [rpc](_promise_api_.apipromise.md#rpc)
* [runtimeMetadata](_promise_api_.apipromise.md#runtimemetadata)
* [runtimeVersion](_promise_api_.apipromise.md#runtimeversion)
* [tx](_promise_api_.apipromise.md#tx)
* [type](_promise_api_.apipromise.md#type)

### Methods

* [clone](_promise_api_.apipromise.md#clone)
* [combineLatest](_promise_api_.apipromise.md#combinelatest)
* [disconnect](_promise_api_.apipromise.md#disconnect)
* [findCall](_promise_api_.apipromise.md#findcall)
* [off](_promise_api_.apipromise.md#off)
* [on](_promise_api_.apipromise.md#on)
* [once](_promise_api_.apipromise.md#once)
* [registerTypes](_promise_api_.apipromise.md#registertypes)
* [setSigner](_promise_api_.apipromise.md#setsigner)
* [sign](_promise_api_.apipromise.md#sign)
* [create](_promise_api_.apipromise.md#static-create)

## Constructors

###  constructor

\+ **new ApiPromise**(`options?`: [ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface`): *[ApiPromise](_promise_api_.apipromise.md)*

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [promise/Api.ts:125](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/promise/Api.ts#L125)*

**`description`** Creates an instance of the ApiPromise class

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

new Api().isReady.then((api) => {
  api.rpc.subscribeNewHead((header) => {
    console.log(`new block #${header.number.toNumber()}`);
  });
});
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` | Options to create an instance. This can be either [ApiOptions](../interfaces/_types_.apioptions.md) or an [[WsProvider]].  |

**Returns:** *[ApiPromise](_promise_api_.apipromise.md)*

## Accessors

###  consts

• **get consts**(): *`Constants`*

*Inherited from [ApiBase](_base_.apibase.md).[consts](_base_.apibase.md#consts)*

*Defined in [Base.ts:277](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L277)*

**`description`** Contains the parameter types (constants) of all modules.

The values are instances of the appropriate type and are accessible using `section`.`constantName`,

**`example`** 
<BR>

```javascript
console.log(api.consts.democracy.enactmentPeriod.toString())
```

**Returns:** *`Constants`*

___

###  derive

• **get derive**(): *`ReturnType<decorateDerive>`*

*Inherited from [ApiBase](_base_.apibase.md).[derive](_base_.apibase.md#derive)*

*Defined in [Base.ts:259](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L259)*

**`description`** Derived results that are injected into the API, allowing for combinations of various query results.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** *`ReturnType<decorateDerive>`*

___

###  extrinsicVersion

• **get extrinsicVersion**(): *number*

*Inherited from [ApiBase](_base_.apibase.md).[extrinsicVersion](_base_.apibase.md#extrinsicversion)*

*Defined in [Base.ts:159](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L159)*

**`description`** Returns th version of extrinsics in-use on this chain

**Returns:** *number*

___

###  genesisHash

• **get genesisHash**(): *`Hash`*

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:166](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L166)*

**`description`** Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** *`Hash`*

___

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Inherited from [ApiBase](_base_.apibase.md).[hasSubscriptions](_base_.apibase.md#hassubscriptions)*

*Defined in [Base.ts:175](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L175)*

**`description`** `true` when subscriptions are supported

**Returns:** *boolean*

___

###  isReady

• **get isReady**(): *`Promise<ApiPromise>`*

*Defined in [promise/Api.ts:159](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/promise/Api.ts#L159)*

**`description`** Promise that returns the first time we are connected and loaded

**Returns:** *`Promise<ApiPromise>`*

___

###  libraryInfo

• **get libraryInfo**(): *string*

*Inherited from [ApiBase](_base_.apibase.md).[libraryInfo](_base_.apibase.md#libraryinfo)*

*Defined in [Base.ts:182](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L182)*

**`description`** The library information name & version (from package.json)

**Returns:** *string*

___

###  query

• **get query**(): *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹*"promise"*›*

*Inherited from [ApiBase](_base_.apibase.md).[query](_base_.apibase.md#query)*

*Defined in [Base.ts:297](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L297)*

**`description`** Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

**`example`** 
<BR>

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹*"promise"*›*

___

###  queryMulti

• **get queryMulti**(): *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹*"promise"*›*

*Inherited from [ApiBase](_base_.apibase.md).[queryMulti](_base_.apibase.md#querymulti)*

*Defined in [Base.ts:325](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L325)*

**`description`** Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.

**`example`** 
<BR>

```javascript
const unsub = await api.queryMulti(
  [
    // you can include the storage without any parameters
    api.query.balances.totalIssuance,
    // or you can pass parameters to the storage query
    [api.query.balances.freeBalance, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
  ],
  ([existential, balance]) => {
    console.log(`You have ${balance.sub(existential)} more than the existential deposit`);

    unsub();
  }
);
```

**Returns:** *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹*"promise"*›*

___

###  rpc

• **get rpc**(): *[DecoratedRpc](../modules/_types_.md#decoratedrpc)‹*"promise"*, *`RpcInterface`*›*

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:343](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L343)*

**`description`** Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

**`example`** 
<BR>

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** *[DecoratedRpc](../modules/_types_.md#decoratedrpc)‹*"promise"*, *`RpcInterface`*›*

___

###  runtimeMetadata

• **get runtimeMetadata**(): *`Metadata`*

*Inherited from [ApiBase](_base_.apibase.md).[runtimeMetadata](_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:189](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L189)*

**`description`** Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** *`Metadata`*

___

###  runtimeVersion

• **get runtimeVersion**(): *`RuntimeVersion`*

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:198](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L198)*

**`description`** Contains the version information for the current runtime.

**Returns:** *`RuntimeVersion`*

___

###  tx

• **get tx**(): *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹*"promise"*›*

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:361](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L361)*

**`description`** Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

**`example`** 
<BR>

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalized.toHex());
  });
```

**Returns:** *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹*"promise"*›*

___

###  type

• **get type**(): *[ApiTypes](../modules/_types_.md#apitypes)*

*Inherited from [ApiBase](_base_.apibase.md).[type](_base_.apibase.md#type)*

*Defined in [Base.ts:207](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L207)*

**`description`** The type of this API instance, either 'rxjs' or 'promise'

**Returns:** *[ApiTypes](../modules/_types_.md#apitypes)*

## Methods

###  clone

▸ **clone**(): *[ApiPromise](_promise_api_.apipromise.md)*

*Defined in [promise/Api.ts:166](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/promise/Api.ts#L166)*

**`description`** Returns a clone of this ApiPromise instance (new underlying provider connection)

**Returns:** *[ApiPromise](_promise_api_.apipromise.md)*

___

###  combineLatest

▸ **combineLatest**(`fns`: [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) | [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][], `callback`: [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [promise/Api.ts:193](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/promise/Api.ts#L193)*

**`description`** Creates a combinator that can be used to combine the latest results from multiple subscriptions

**`example`** 
<BR>

```javascript
const address = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7';

// combines values from balance & nonce as it updates
api.combineLatest([
  api.rpc.chain.subscribeNewHead,
  [api.query.balances.freeBalance, address],
  (cb) => api.query.system.accountNonce(address, cb)
], ([head, balance, nonce]) => {
  console.log(`#${head.number}: You have ${balance} units, with ${nonce} transactions sent`);
});
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fns` | [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) \| [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][] | An array of function to combine, each in the form of `(cb: (value: void)) => void` |
`callback` | [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback) | A callback that will return an Array of all the values this combinator has been applied to |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [ApiBase](_base_.apibase.md).[disconnect](_base_.apibase.md#disconnect)*

*Defined in [Base.ts:370](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L370)*

**`description`** Disconnect from the underlying provider, halting all comms

**Returns:** *void*

___

###  findCall

▸ **findCall**(`callIndex`: `Uint8Array` | string): *`CallFunction`*

*Inherited from [ApiBase](_base_.apibase.md).[findCall](_base_.apibase.md#findcall)*

*Defined in [Base.ts:214](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L214)*

**`description`** Finds the definition for a specific [[Call]] based on the index supplied

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | `Uint8Array` \| string |

**Returns:** *`CallFunction`*

___

###  off

▸ **off**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [ApiBase](_base_.apibase.md).[off](_base_.apibase.md#off)*

*Defined in [Base.ts:420](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L420)*

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

*Inherited from [ApiBase](_base_.apibase.md).[on](_base_.apibase.md#on)*

*Defined in [Base.ts:393](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L393)*

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

*Inherited from [ApiBase](_base_.apibase.md).[once](_base_.apibase.md#once)*

*Defined in [Base.ts:445](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L445)*

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

###  registerTypes

▸ **registerTypes**(`types?`: `RegistryTypes`): *void*

*Inherited from [ApiBase](_base_.apibase.md).[registerTypes](_base_.apibase.md#registertypes)*

*Defined in [Base.ts:454](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L454)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | `RegistryTypes` |

**Returns:** *void*

___

###  setSigner

▸ **setSigner**(`signer`: [Signer](../interfaces/_types_.signer.md)): *void*

*Inherited from [ApiBase](_base_.apibase.md).[setSigner](_base_.apibase.md#setsigner)*

*Defined in [Base.ts:221](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L221)*

**`description`** Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Signer](../interfaces/_types_.signer.md) |

**Returns:** *void*

___

###  sign

▸ **sign**(`signer`: `KeyringSigner` | string, `data`: [SignerPayloadRawBase](../interfaces/_types_.signerpayloadrawbase.md)): *`Promise<string>`*

*Inherited from [ApiBase](_base_.apibase.md).[sign](_base_.apibase.md#sign)*

*Defined in [Base.ts:228](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/Base.ts#L228)*

**`description`** Signs a raw signer payload, string or Uint8Array

**Parameters:**

Name | Type |
------ | ------ |
`signer` | `KeyringSigner` \| string |
`data` | [SignerPayloadRawBase](../interfaces/_types_.signerpayloadrawbase.md) |

**Returns:** *`Promise<string>`*

___

### `Static` create

▸ **create**(`options`: [ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface`): *`Promise<ApiPromise>`*

*Defined in [promise/Api.ts:123](https://github.com/polkadot-js/api/blob/2e109ba/packages/api/src/promise/Api.ts#L123)*

**`description`** Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

Api.create().then(async (api) => {
  const timestamp = await api.query.timestamp.now();

  console.log(`lastest block timestamp ${timestamp}`);
});
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` |  {} | options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_types_.apioptions.md) or a provider (see the constructor arguments)  |

**Returns:** *`Promise<ApiPromise>`*