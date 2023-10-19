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
} from './';

/**
 * 
 * @export
 * @interface TLPCodeFragmentSuggestedReuse
 */
export interface TLPCodeFragmentSuggestedReuse {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentSuggestedReuse
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof TLPCodeFragmentSuggestedReuse
     */
    id?: string;
}

export function TLPCodeFragmentSuggestedReuseFromJSON(json: any): TLPCodeFragmentSuggestedReuse {
    return TLPCodeFragmentSuggestedReuseFromJSONTyped(json, false);
}

export function TLPCodeFragmentSuggestedReuseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentSuggestedReuse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function TLPCodeFragmentSuggestedReuseToJSON(value?: TLPCodeFragmentSuggestedReuse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
    };
}

