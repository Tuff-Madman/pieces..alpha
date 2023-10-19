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
exports.AllocationStatusToJSON = exports.AllocationStatusFromJSONTyped = exports.AllocationStatusFromJSON = void 0;
const _1 = require("./");
function AllocationStatusFromJSON(json) {
    return AllocationStatusFromJSONTyped(json, false);
}
exports.AllocationStatusFromJSON = AllocationStatusFromJSON;
function AllocationStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pod': (0, _1.AllocationStatusEnumFromJSON)(json['pod']),
        'dns': (0, _1.AllocationStatusEnumFromJSON)(json['dns']),
    };
}
exports.AllocationStatusFromJSONTyped = AllocationStatusFromJSONTyped;
function AllocationStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pod': (0, _1.AllocationStatusEnumToJSON)(value.pod),
        'dns': (0, _1.AllocationStatusEnumToJSON)(value.dns),
    };
}
exports.AllocationStatusToJSON = AllocationStatusToJSON;