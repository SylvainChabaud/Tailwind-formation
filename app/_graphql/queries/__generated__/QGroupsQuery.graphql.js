/**
 * @flow
 * @relayHash 63bed9581958d38e2905fa1528b6bb63
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QGroupsQueryVariables = {||};
export type QGroupsQueryResponse = {|
  +getGroups: ?{|
    +ok: ?boolean,
    +error: ?string,
    +groups: ?$ReadOnlyArray<?string>,
  |}
|};
export type QGroupsQuery = {|
  variables: QGroupsQueryVariables,
  response: QGroupsQueryResponse,
|};
*/


/*
query QGroupsQuery {
  getGroups {
    ok
    error
    groups
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GroupsResponse",
    "kind": "LinkedField",
    "name": "getGroups",
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
        "kind": "ScalarField",
        "name": "groups",
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
    "name": "QGroupsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QGroupsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "63bed9581958d38e2905fa1528b6bb63",
    "metadata": {},
    "name": "QGroupsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '50a5973d543b7d65ccf9cf1befa66ac6';

module.exports = node;
