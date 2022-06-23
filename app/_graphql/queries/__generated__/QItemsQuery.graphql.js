/**
 * @flow
 * @relayHash 204145bfa1235117ed15ea5a8765f833
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QItemsQueryVariables = {||};
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
query QItemsQuery {
  getItems {
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
    "alias": null,
    "args": null,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QItemsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QItemsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "204145bfa1235117ed15ea5a8765f833",
    "metadata": {},
    "name": "QItemsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '13d1f981d6b2345e17c1e2da746268c9';

module.exports = node;
