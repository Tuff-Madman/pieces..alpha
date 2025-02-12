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
exports.AssetFilterPhraseToJSON = exports.AssetFilterPhraseFromJSONTyped = exports.AssetFilterPhraseFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function AssetFilterPhraseFromJSON(json) {
    return AssetFilterPhraseFromJSONTyped(json, false);
}
exports.AssetFilterPhraseFromJSON = AssetFilterPhraseFromJSON;
function AssetFilterPhraseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
        'annotation': !(0, runtime_1.exists)(json, 'annotation') ? undefined : json['annotation'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'content': !(0, runtime_1.exists)(json, 'content') ? undefined : json['content'],
        'options': !(0, runtime_1.exists)(json, 'options') ? undefined : (0, index_1.AssetFilterPhraseOptionsFromJSON)(json['options']),
    };
}
exports.AssetFilterPhraseFromJSONTyped = AssetFilterPhraseFromJSONTyped;
function AssetFilterPhraseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'value': value.value,
        'annotation': value.annotation,
        'title': value.title,
        'content': value.content,
        'options': (0, index_1.AssetFilterPhraseOptionsToJSON)(value.options),
    };
}
exports.AssetFilterPhraseToJSON = AssetFilterPhraseToJSON;
