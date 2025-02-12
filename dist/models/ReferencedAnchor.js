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
exports.ReferencedAnchorToJSON = exports.ReferencedAnchorFromJSONTyped = exports.ReferencedAnchorFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function ReferencedAnchorFromJSON(json) {
    return ReferencedAnchorFromJSONTyped(json, false);
}
exports.ReferencedAnchorFromJSON = ReferencedAnchorFromJSON;
function ReferencedAnchorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : (0, index_1.FlattenedAnchorFromJSON)(json['reference']),
    };
}
exports.ReferencedAnchorFromJSONTyped = ReferencedAnchorFromJSONTyped;
function ReferencedAnchorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'reference': (0, index_1.FlattenedAnchorToJSON)(value.reference),
    };
}
exports.ReferencedAnchorToJSON = ReferencedAnchorToJSON;
