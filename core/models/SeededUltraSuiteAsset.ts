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
    ClassificationSpecificEnum,
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    SeededFormat,
    SeededFormatFromJSON,
    SeededFormatFromJSONTyped,
    SeededFormatToJSON,
} from './index';

/**
 * A SeededUEAsset is the minimum data sent from UE required to create an asset within Pieces.
 * 
 * Fragment & file are both optional properties however we will throw an internal error if both fragment and file are passed through or if both are undefined.
 * @export
 * @interface SeededUltraSuiteAsset
 */
export interface SeededUltraSuiteAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededUltraSuiteAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * (optional) name is the name of the file
     * @type {string}
     * @memberof SeededUltraSuiteAsset
     */
    name?: string;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof SeededUltraSuiteAsset
     */
    ext?: ClassificationSpecificEnum;
    /**
     * 
     * @type {SeededFormat}
     * @memberof SeededUltraSuiteAsset
     */
    format: SeededFormat;
    /**
     * 
     * @type {string}
     * @memberof SeededUltraSuiteAsset
     */
    description?: string;
}

export function SeededUltraSuiteAssetFromJSON(json: any): SeededUltraSuiteAsset {
    return SeededUltraSuiteAssetFromJSONTyped(json, false);
}

export function SeededUltraSuiteAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededUltraSuiteAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ext': !exists(json, 'ext') ? undefined : ClassificationSpecificEnumFromJSON(json['ext']),
        'format': SeededFormatFromJSON(json['format']),
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function SeededUltraSuiteAssetToJSON(value?: SeededUltraSuiteAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'name': value.name,
        'ext': ClassificationSpecificEnumToJSON(value.ext),
        'format': SeededFormatToJSON(value.format),
        'description': value.description,
    };
}


