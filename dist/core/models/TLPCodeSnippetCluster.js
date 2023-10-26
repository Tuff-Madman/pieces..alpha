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
exports.TLPCodeSnippetClusterToJSON = exports.TLPCodeSnippetClusterFromJSONTyped = exports.TLPCodeSnippetClusterFromJSON = void 0;
const runtime_1 = require("../runtime");
const EmbeddedModelSchema_1 = require("./EmbeddedModelSchema");
const TLPCodeSnippetClusterMember_1 = require("./TLPCodeSnippetClusterMember");
function TLPCodeSnippetClusterFromJSON(json) {
    return TLPCodeSnippetClusterFromJSONTyped(json, false);
}
exports.TLPCodeSnippetClusterFromJSON = TLPCodeSnippetClusterFromJSON;
function TLPCodeSnippetClusterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, EmbeddedModelSchema_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'text': json['text'],
        'size': json['size'],
        'index': json['index'],
        'related': !(0, runtime_1.exists)(json, 'related') ? undefined : (json['related'].map(TLPCodeSnippetClusterMember_1.TLPCodeSnippetClusterMemberFromJSON)),
    };
}
exports.TLPCodeSnippetClusterFromJSONTyped = TLPCodeSnippetClusterFromJSONTyped;
function TLPCodeSnippetClusterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, EmbeddedModelSchema_1.EmbeddedModelSchemaToJSON)(value.schema),
        'text': value.text,
        'size': value.size,
        'index': value.index,
        'related': value.related === undefined ? undefined : (value.related.map(TLPCodeSnippetClusterMember_1.TLPCodeSnippetClusterMemberToJSON)),
    };
}
exports.TLPCodeSnippetClusterToJSON = TLPCodeSnippetClusterToJSON;