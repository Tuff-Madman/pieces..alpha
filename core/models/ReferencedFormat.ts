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
    FlattenedFormat,
    FlattenedFormatFromJSON,
    FlattenedFormatFromJSONTyped,
    FlattenedFormatToJSON,
} from './index';

/**
 * A reference to a format which at minimum must have the format's id. But in the case of a hydrated client API it may have a populated reference of type Format.
 * @export
 * @interface ReferencedFormat
 */
export interface ReferencedFormat {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     * The id of the Format
     * @type {string}
     * @memberof ReferencedFormat
     */
    id: string;
    /**
     * 
     * @type {FlattenedFormat}
     * @memberof ReferencedFormat
     */
    reference?: FlattenedFormat;
}

export function ReferencedFormatFromJSON(json: any): ReferencedFormat {
    return ReferencedFormatFromJSONTyped(json, false);
}

export function ReferencedFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedFormatFromJSON(json['reference']),
    };
}

export function ReferencedFormatToJSON(value?: ReferencedFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedFormatToJSON(value.reference),
    };
}


