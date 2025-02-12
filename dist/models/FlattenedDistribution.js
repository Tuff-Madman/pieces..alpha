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
exports.FlattenedDistributionToJSON = exports.FlattenedDistributionFromJSONTyped = exports.FlattenedDistributionFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function FlattenedDistributionFromJSON(json) {
    return FlattenedDistributionFromJSONTyped(json, false);
}
exports.FlattenedDistributionFromJSON = FlattenedDistributionFromJSON;
function FlattenedDistributionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'share': json['share'],
        'created': (0, index_1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, index_1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, index_1.GroupedTimestampFromJSON)(json['deleted']),
        'mailgun': !(0, runtime_1.exists)(json, 'mailgun') ? undefined : (0, index_1.MailgunDistributionFromJSON)(json['mailgun']),
        'github': !(0, runtime_1.exists)(json, 'github') ? undefined : (0, index_1.GitHubDistributionFromJSON)(json['github']),
    };
}
exports.FlattenedDistributionFromJSONTyped = FlattenedDistributionFromJSONTyped;
function FlattenedDistributionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'share': value.share,
        'created': (0, index_1.GroupedTimestampToJSON)(value.created),
        'updated': (0, index_1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, index_1.GroupedTimestampToJSON)(value.deleted),
        'mailgun': (0, index_1.MailgunDistributionToJSON)(value.mailgun),
        'github': (0, index_1.GitHubDistributionToJSON)(value.github),
    };
}
exports.FlattenedDistributionToJSON = FlattenedDistributionToJSON;
