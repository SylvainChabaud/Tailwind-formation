/**
 * @flow
 * @relayHash ff7b03ff40d7bee7fd3c5589cb16d0a1
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
export type createItemMutationVariables = {|
  itemToCreate?: ?ItemToCreate
|};
export type createItemMutationResponse = {|
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
export type createItemMutation = {|
  variables: createItemMutationVariables,
  response: createItemMutationResponse,
|};
*/


/*
mutation createItemMutation(
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
    "name": "createItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "ff7b03ff40d7bee7fd3c5589cb16d0a1",
    "metadata": {},
    "name": "createItemMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da630cc1e6fe544b25c374851dc529a7';

module.exports = node;
