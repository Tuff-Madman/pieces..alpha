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
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    SensitiveCategoryEnum,
    SensitiveCategoryEnumFromJSON,
    SensitiveCategoryEnumFromJSONTyped,
    SensitiveCategoryEnumToJSON,
    SensitiveSeverityEnum,
    SensitiveSeverityEnumFromJSON,
    SensitiveSeverityEnumFromJSONTyped,
    SensitiveSeverityEnumToJSON,
    TextMatch,
    TextMatchFromJSON,
    TextMatchFromJSONTyped,
    TextMatchToJSON,
} from './';

/**
 * 
 * @export
 * @interface TLPSensitive
 */
export interface TLPSensitive {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TextMatch}
     * @memberof TLPSensitive
     */
    match: TextMatch;
    /**
     * entropy of the sensitive
     * @type {number}
     * @memberof TLPSensitive
     */
    entropy?: number;
    /**
     * 
     * @type {SensitiveSeverityEnum}
     * @memberof TLPSensitive
     */
    severity: SensitiveSeverityEnum;
    /**
     * this is the description of the type of key we match with.
     * @type {string}
     * @memberof TLPSensitive
     */
    description: string;
    /**
     * 
     * @type {SensitiveCategoryEnum}
     * @memberof TLPSensitive
     */
    category: SensitiveCategoryEnum;
}

export function TLPSensitiveFromJSON(json: any): TLPSensitive {
    return TLPSensitiveFromJSONTyped(json, false);
}

export function TLPSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPSensitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'match': TextMatchFromJSON(json['match']),
        'entropy': !exists(json, 'entropy') ? undefined : json['entropy'],
        'severity': SensitiveSeverityEnumFromJSON(json['severity']),
        'description': json['description'],
        'category': SensitiveCategoryEnumFromJSON(json['category']),
    };
}

export function TLPSensitiveToJSON(value?: TLPSensitive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'match': TextMatchToJSON(value.match),
        'entropy': value.entropy,
        'severity': SensitiveSeverityEnumToJSON(value.severity),
        'description': value.description,
        'category': SensitiveCategoryEnumToJSON(value.category),
    };
}

