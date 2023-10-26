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
exports.FlattenedAnchorPointsToJSON = exports.FlattenedAnchorPointsFromJSONTyped = exports.FlattenedAnchorPointsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedAnchorPointsFromJSON(json) {
    return FlattenedAnchorPointsFromJSONTyped(json, false);
}
exports.FlattenedAnchorPointsFromJSON = FlattenedAnchorPointsFromJSON;
function FlattenedAnchorPointsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'iterable': (json['iterable'].map(_1.ReferencedAnchorPointFromJSON)),
        'indices': !(0, runtime_1.exists)(json, 'indices') ? undefined : json['indices'],
    };
}
exports.FlattenedAnchorPointsFromJSONTyped = FlattenedAnchorPointsFromJSONTyped;
function FlattenedAnchorPointsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'iterable': (value.iterable.map(_1.ReferencedAnchorPointToJSON)),
        'indices': value.indices,
    };
}
exports.FlattenedAnchorPointsToJSON = FlattenedAnchorPointsToJSON;