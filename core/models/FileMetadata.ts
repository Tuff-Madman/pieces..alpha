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
} from './index';

/**
 * This is a model for metadata of a file!
 * @export
 * @interface FileMetadata
 */
export interface FileMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FileMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the name of your file.
     * @type {string}
     * @memberof FileMetadata
     */
    name?: string;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof FileMetadata
     */
    ext?: ClassificationSpecificEnum;
    /**
     * This is the size(in bytes)
     * @type {number}
     * @memberof FileMetadata
     */
    size?: number;
}

export function FileMetadataFromJSON(json: any): FileMetadata {
    return FileMetadataFromJSONTyped(json, false);
}

export function FileMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ext': !exists(json, 'ext') ? undefined : ClassificationSpecificEnumFromJSON(json['ext']),
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function FileMetadataToJSON(value?: FileMetadata | null): any {
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
        'size': value.size,
    };
}


