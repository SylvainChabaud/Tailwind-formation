/**
 * @flow
 * @relayHash 6d0a42e7f9acc15f074058471227800e
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
export type updateItemMutationVariables = {|
  itemIdToUpdate: string,
  itemToUpdate?: ?ItemToCreate,
|};
export type updateItemMutationResponse = {|
  +updateItem: ?{|
    +ok: ?boolean,
    +error: ?string,
  |}
|};
export type updateItemMutation = {|
  variables: updateItemMutationVariables,
  response: updateItemMutationResponse,
|};
*/


/*
mutation updateItemMutation(
  $itemIdToUpdate: ID!
  $itemToUpdate: ItemToCreate
) {
  updateItem(itemIdToUpdate: $itemIdToUpdate, itemToUpdate: $itemToUpdate) {
    ok
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemIdToUpdate"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemToUpdate"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "itemIdToUpdate",
        "variableName": "itemIdToUpdate"
      },
      {
        "kind": "Variable",
        "name": "itemToUpdate",
        "variableName": "itemToUpdate"
      }
    ],
    "concreteType": "ItemResponse",
    "kind": "LinkedField",
    "name": "updateItem",
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
    "name": "updateItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "6d0a42e7f9acc15f074058471227800e",
    "metadata": {},
    "name": "updateItemMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e85a71b7954a15f21793b4f0bd858760';

module.exports = node;
