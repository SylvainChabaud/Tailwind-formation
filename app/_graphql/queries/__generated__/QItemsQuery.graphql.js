/**
 * @flow
 * @relayHash 580ffb3f053bfb1b43594ea92cca1bc6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QItemsQueryVariables = {|
  itemId: string
|};
export type QItemsQueryResponse = {|
  +getItems: ?{|
    +ok: ?boolean,
    +error: ?string,
    +items: ?$ReadOnlyArray<?{|
      +name: ?string,
      +category: ?string,
      +group: ?string,
      +createdAt: ?string,
      +updatedAt: ?string,
    |}>,
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
  getItems(itemId: $itemId) {
    ok
    error
    items {
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
    "concreteType": "ItemsResponse",
    "kind": "LinkedField",
    "name": "getItems",
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
        "name": "items",
        "plural": true,
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
    "id": "580ffb3f053bfb1b43594ea92cca1bc6",
    "metadata": {},
    "name": "QItemsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '19371687a0c63b93def8d3bbd82277a4';

module.exports = node;
