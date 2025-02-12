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
exports.ContextToJSON = exports.ContextFromJSONTyped = exports.ContextFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function ContextFromJSON(json) {
    return ContextFromJSONTyped(json, false);
}
exports.ContextFromJSON = ContextFromJSON;
function ContextFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'os': json['os'],
        'application': (0, index_1.ApplicationFromJSON)(json['application']),
        'health': (0, index_1.HealthFromJSON)(json['health']),
        'user': !(0, runtime_1.exists)(json, 'user') ? undefined : (0, index_1.UserProfileFromJSON)(json['user']),
    };
}
exports.ContextFromJSONTyped = ContextFromJSONTyped;
function ContextToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'os': value.os,
        'application': (0, index_1.ApplicationToJSON)(value.application),
        'health': (0, index_1.HealthToJSON)(value.health),
        'user': (0, index_1.UserProfileToJSON)(value.user),
    };
}
exports.ContextToJSON = ContextToJSON;
