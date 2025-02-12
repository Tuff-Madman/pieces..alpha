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
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    SensitiveCategoryEnum,
    SensitiveCategoryEnumFromJSON,
    SensitiveCategoryEnumFromJSONTyped,
    SensitiveCategoryEnumToJSON,
    SensitiveMetadata,
    SensitiveMetadataFromJSON,
    SensitiveMetadataFromJSONTyped,
    SensitiveMetadataToJSON,
    SensitiveSeverityEnum,
    SensitiveSeverityEnumFromJSON,
    SensitiveSeverityEnumFromJSONTyped,
    SensitiveSeverityEnumToJSON,
} from './index';

/**
 * This is the seededAssetSensitive, this does not have an id yet as we will add it on the server side.
 * 
 * can optionally pass in our mechanism here, as the default will be manual unless specified.
 * 
 * This is different that hte SeededSensitive as this is pre-before the asset has been created.(but added when the asset is created.
 * @export
 * @interface SeededAssetSensitive
 */
export interface SeededAssetSensitive {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is the string representative of the sensative piece of data.
     * @type {string}
     * @memberof SeededAssetSensitive
     */
    text: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededAssetSensitive
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {SensitiveCategoryEnum}
     * @memberof SeededAssetSensitive
     */
    category: SensitiveCategoryEnum;
    /**
     * 
     * @type {SensitiveSeverityEnum}
     * @memberof SeededAssetSensitive
     */
    severity: SensitiveSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof SeededAssetSensitive
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SeededAssetSensitive
     */
    description: string;
    /**
     * 
     * @type {SensitiveMetadata}
     * @memberof SeededAssetSensitive
     */
    metadata?: SensitiveMetadata;
}

export function SeededAssetSensitiveFromJSON(json: any): SeededAssetSensitive {
    return SeededAssetSensitiveFromJSONTyped(json, false);
}

export function SeededAssetSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetSensitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'text': json['text'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'category': SensitiveCategoryEnumFromJSON(json['category']),
        'severity': SensitiveSeverityEnumFromJSON(json['severity']),
        'name': json['name'],
        'description': json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : SensitiveMetadataFromJSON(json['metadata']),
    };
}

export function SeededAssetSensitiveToJSON(value?: SeededAssetSensitive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'text': value.text,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'category': SensitiveCategoryEnumToJSON(value.category),
        'severity': SensitiveSeverityEnumToJSON(value.severity),
        'name': value.name,
        'description': value.description,
        'metadata': SensitiveMetadataToJSON(value.metadata),
    };
}


