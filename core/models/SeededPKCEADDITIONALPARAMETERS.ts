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
/**
 * Append any additional parameter to the end of your request, and it will be sent to the provider. For example, access_type=offline (for Google Refresh Tokens) , display=popup (for Windows Live popup mode).
 * @export
 * @interface SeededPKCEADDITIONALPARAMETERS
 */
export interface SeededPKCEADDITIONALPARAMETERS {
    /**
     * 
     * @type {string}
     * @memberof SeededPKCEADDITIONALPARAMETERS
     */
    accessType?: SeededPKCEADDITIONALPARAMETERSAccessTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SeededPKCEADDITIONALPARAMETERS
     */
    display?: SeededPKCEADDITIONALPARAMETERSDisplayEnum;
}

/**
* @export
* @enum {string}
*/
export enum SeededPKCEADDITIONALPARAMETERSAccessTypeEnum {
    Offline = 'offline'
}/**
* @export
* @enum {string}
*/
export enum SeededPKCEADDITIONALPARAMETERSDisplayEnum {
    Popup = 'popup'
}

export function SeededPKCEADDITIONALPARAMETERSFromJSON(json: any): SeededPKCEADDITIONALPARAMETERS {
    return SeededPKCEADDITIONALPARAMETERSFromJSONTyped(json, false);
}

export function SeededPKCEADDITIONALPARAMETERSFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededPKCEADDITIONALPARAMETERS {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessType': !exists(json, 'access_type') ? undefined : json['access_type'],
        'display': !exists(json, 'display') ? undefined : json['display'],
    };
}

export function SeededPKCEADDITIONALPARAMETERSToJSON(value?: SeededPKCEADDITIONALPARAMETERS | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_type': value.accessType,
        'display': value.display,
    };
}

