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
import {
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './';

/**
 * This is a specific model that will let us know at what time this user was using the application.
 * @export
 * @interface Session
 */
export interface Session {
    /**
     * The UUID of the current Session
     * @type {string}
     * @memberof Session
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Session
     */
    opened: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Session
     */
    closed?: GroupedTimestamp;
}

export function SessionFromJSON(json: any): Session {
    return SessionFromJSONTyped(json, false);
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'opened': GroupedTimestampFromJSON(json['opened']),
        'closed': !exists(json, 'closed') ? undefined : GroupedTimestampFromJSON(json['closed']),
    };
}

export function SessionToJSON(value?: Session | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'opened': GroupedTimestampToJSON(value.opened),
        'closed': GroupedTimestampToJSON(value.closed),
    };
}

