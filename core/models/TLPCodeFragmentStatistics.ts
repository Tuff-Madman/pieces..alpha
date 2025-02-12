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
    TLPCodeFragmentDescriptiveStatistics,
    TLPCodeFragmentDescriptiveStatisticsFromJSON,
    TLPCodeFragmentDescriptiveStatisticsFromJSONTyped,
    TLPCodeFragmentDescriptiveStatisticsToJSON,
} from './index';

/**
 * 
 * @export
 * @interface TLPCodeFragmentStatistics
 */
export interface TLPCodeFragmentStatistics {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentStatistics
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeFragmentDescriptiveStatistics}
     * @memberof TLPCodeFragmentStatistics
     */
    descriptive?: TLPCodeFragmentDescriptiveStatistics;
}

export function TLPCodeFragmentStatisticsFromJSON(json: any): TLPCodeFragmentStatistics {
    return TLPCodeFragmentStatisticsFromJSONTyped(json, false);
}

export function TLPCodeFragmentStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'descriptive': !exists(json, 'descriptive') ? undefined : TLPCodeFragmentDescriptiveStatisticsFromJSON(json['descriptive']),
    };
}

export function TLPCodeFragmentStatisticsToJSON(value?: TLPCodeFragmentStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'descriptive': TLPCodeFragmentDescriptiveStatisticsToJSON(value.descriptive),
    };
}


