"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengedPKCEToJSON = exports.ChallengedPKCEFromJSONTyped = exports.ChallengedPKCEFromJSON = exports.ChallengedPKCEMethodEnum = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
/**
* @export
* @enum {string}
*/
var ChallengedPKCEMethodEnum;
(function (ChallengedPKCEMethodEnum) {
    ChallengedPKCEMethodEnum["S256"] = "S256";
})(ChallengedPKCEMethodEnum || (exports.ChallengedPKCEMethodEnum = ChallengedPKCEMethodEnum = {}));
function ChallengedPKCEFromJSON(json) {
    return ChallengedPKCEFromJSONTyped(json, false);
}
exports.ChallengedPKCEFromJSON = ChallengedPKCEFromJSON;
function ChallengedPKCEFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'state': json['state'],
        'nonce': json['nonce'],
        'challenge': json['challenge'],
        'method': json['method'],
        'verifier': json['verifier'],
    };
}
exports.ChallengedPKCEFromJSONTyped = ChallengedPKCEFromJSONTyped;
function ChallengedPKCEToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'state': value.state,
        'nonce': value.nonce,
        'challenge': value.challenge,
        'method': value.method,
        'verifier': value.verifier,
    };
}
exports.ChallengedPKCEToJSON = ChallengedPKCEToJSON;
