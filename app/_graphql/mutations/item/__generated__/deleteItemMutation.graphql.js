/**
 * @flow
 * @relayHash bcf3e1c94411bfe395370364797f23f8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteItemMutationVariables = {|
  itemIdToDelete: string
|};
export type deleteItemMutationResponse = {|
  +deleteItem: ?{|
    +ok: ?boolean,
    +error: ?string,
  |}
|};
export type deleteItemMutation = {|
  variables: deleteItemMutationVariables,
  response: deleteItemMutationResponse,
|};
*/


/*
mutation deleteItemMutation(
  $itemIdToDelete: ID!
) {
  deleteItem(itemIdToDelete: $itemIdToDelete) {
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
    "name": "itemIdToDelete"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "itemIdToDelete",
        "variableName": "itemIdToDelete"
      }
    ],
    "concreteType": "ItemResponse",
    "kind": "LinkedField",
    "name": "deleteItem",
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
    "name": "deleteItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "bcf3e1c94411bfe395370364797f23f8",
    "metadata": {},
    "name": "deleteItemMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f4c01a207567867c2d2cbdb024082a56';

module.exports = node;
