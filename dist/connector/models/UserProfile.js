"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileToJSON = exports.UserProfileFromJSONTyped = exports.UserProfileFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function UserProfileFromJSON(json) {
    return UserProfileFromJSONTyped(json, false);
}
exports.UserProfileFromJSON = UserProfileFromJSON;
function UserProfileFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'picture': !(0, runtime_1.exists)(json, 'picture') ? undefined : json['picture'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'created': !(0, runtime_1.exists)(json, 'created') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': !(0, runtime_1.exists)(json, 'updated') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'username': !(0, runtime_1.exists)(json, 'username') ? undefined : json['username'],
        'id': json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'aesthetics': (0, _1.AestheticsFromJSON)(json['aesthetics']),
        'vanityname': !(0, runtime_1.exists)(json, 'vanityname') ? undefined : json['vanityname'],
        'allocation': !(0, runtime_1.exists)(json, 'allocation') ? undefined : (0, _1.AllocationCloudFromJSON)(json['allocation']),
        'providers': !(0, runtime_1.exists)(json, 'providers') ? undefined : (0, _1.ExternalProvidersFromJSON)(json['providers']),
        'auth0': !(0, runtime_1.exists)(json, 'auth0') ? undefined : (0, _1.Auth0UserMetadataFromJSON)(json['auth0']),
    };
}
exports.UserProfileFromJSONTyped = UserProfileFromJSONTyped;
function UserProfileToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'picture': value.picture,
        'email': value.email,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'username': value.username,
        'id': value.id,
        'name': value.name,
        'aesthetics': (0, _1.AestheticsToJSON)(value.aesthetics),
        'vanityname': value.vanityname,
        'allocation': (0, _1.AllocationCloudToJSON)(value.allocation),
        'providers': (0, _1.ExternalProvidersToJSON)(value.providers),
        'auth0': (0, _1.Auth0UserMetadataToJSON)(value.auth0),
    };
}
exports.UserProfileToJSON = UserProfileToJSON;