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

import { exists, mapValues } from '../runtime';
import {AllocationStatus, AllocationStatusFromJSON, AllocationStatusToJSON} from "./AllocationStatus";
import {GroupedTimestamp, GroupedTimestampFromJSON, GroupedTimestampToJSON} from "./GroupedTimestamp";

/**
 * connected: This is the last time that we connected to our cloud.
 * updated: This is the last time that this pod was updated.
 * @export
 * @interface Cloud
 */
export interface Cloud {
    /**
     * This is the identification of 
     * @type {string}
     * @memberof Cloud
     */
    id: string;
    /**
     * This is a reference to a UserUuid
     * @type {string}
     * @memberof Cloud
     */
    user: string;
    /**
     * 
     * @type {AllocationStatus}
     * @memberof Cloud
     */
    status: AllocationStatus;
    /**
     * this is the url to the specific users pod. ie userUUID.pieces.cloud
     * @type {string}
     * @memberof Cloud
     */
    address: string;
    /**
     * This is the specific ip that we can ping of our specific pod ie. 12.34.1234 
     * @type {string}
     * @memberof Cloud
     */
    ip: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Cloud
     */
    connected: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Cloud
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {string}
     * @memberof Cloud
     */
    version: string;
}

export function CloudFromJSON(json: any): Cloud {
    return CloudFromJSONTyped(json, false);
}

export function CloudFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cloud {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user': json['user'],
        'status': AllocationStatusFromJSON(json['status']),
        'address': json['address'],
        'ip': json['ip'],
        'connected': GroupedTimestampFromJSON(json['connected']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'version': json['version'],
    };
}

export function CloudToJSON(value?: Cloud | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'user': value.user,
        'status': AllocationStatusToJSON(value.status),
        'address': value.address,
        'ip': value.ip,
        'connected': GroupedTimestampToJSON(value.connected),
        'updated': GroupedTimestampToJSON(value.updated),
        'version': value.version,
    };
}

