/**
 * @flow
 * @relayHash f9ccd7723a07e902d62fb45834ca036e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ItemToCreate = {|
  category?: ?string,
  group?: ?string,
  name?: ?string,
|};
export type QCreateItemMutationVariables = {|
  itemToCreate?: ?ItemToCreate
|};
export type QCreateItemMutationResponse = {|
  +createItem: ?{|
    +ok: ?boolean,
    +error: ?string,
    +item: ?{|
      +name: ?string,
      +category: ?string,
      +group: ?string,
      +createdAt: ?string,
      +updatedAt: ?string,
    |},
  |}
|};
export type QCreateItemMutation = {|
  variables: QCreateItemMutationVariables,
  response: QCreateItemMutationResponse,
|};
*/


/*
mutation QCreateItemMutation(
  $itemToCreate: ItemToCreate
) {
  createItem(itemToCreate: $itemToCreate) {
    ok
    error
    item {
      name
      category
      group
      createdAt
      updatedAt
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemToCreate"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "itemToCreate",
        "variableName": "itemToCreate"
      }
    ],
    "concreteType": "ItemResponse",
    "kind": "LinkedField",
    "name": "createItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "group",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QCreateItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QCreateItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "f9ccd7723a07e902d62fb45834ca036e",
    "metadata": {},
    "name": "QCreateItemMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '792a33bb4338f62c45fc1dab353f529e';

module.exports = node;
