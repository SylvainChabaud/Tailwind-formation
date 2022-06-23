/**
 * @flow
 * @relayHash 2538508f52515c58886e0a5d80280d95
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QItemsQueryVariables = {|
  itemId: string
|};
export type QItemsQueryResponse = {|
  +getItemById: ?{|
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
export type QItemsQuery = {|
  variables: QItemsQueryVariables,
  response: QItemsQueryResponse,
|};
*/


/*
query QItemsQuery(
  $itemId: ID!
) {
  getItemById(itemId: $itemId) {
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
    "name": "itemId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "itemId",
        "variableName": "itemId"
      }
    ],
    "concreteType": "ItemResponse",
    "kind": "LinkedField",
    "name": "getItemById",
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
    "name": "QItemsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QItemsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "2538508f52515c58886e0a5d80280d95",
    "metadata": {},
    "name": "QItemsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'deed51cc2980f015fb5afdec45708ba7';

module.exports = node;
