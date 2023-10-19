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
    TagCategoryEnum,
    TagCategoryEnumFromJSON,
    TagCategoryEnumFromJSONTyped,
    TagCategoryEnumToJSON,
} from './';

/**
 * This is the minimum information needed when creating a Tag.
 * 
 * Default we will attach manual to a tag unless otherwise specified for mechanism.
 * 
 * you can optionally add an asset, format, or person uuid to attach this tag directly to it
 * 
 * TODO consider updating these asset,format to referenced Models
 * @export
 * @interface SeededTag
 */
export interface SeededTag {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTag
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the description of the tag.
     * @type {string}
     * @memberof SeededTag
     */
    text: string;
    /**
     * this is a uuid that references an asset.
     * @type {string}
     * @memberof SeededTag
     */
    asset?: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededTag
     */
    mechanism?: MechanismEnum;
    /**
     * (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well.
     * @type {string}
     * @memberof SeededTag
     */
    format?: string;
    /**
     * 
     * @type {TagCategoryEnum}
     * @memberof SeededTag
     */
    category?: TagCategoryEnum;
    /**
     * uuid of the person, you want to add this tag too
     * @type {string}
     * @memberof SeededTag
     */
    person?: string;
}

export function SeededTagFromJSON(json: any): SeededTag {
    return SeededTagFromJSONTyped(json, false);
}

export function SeededTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'text': json['text'],
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'format': !exists(json, 'format') ? undefined : json['format'],
        'category': !exists(json, 'category') ? undefined : TagCategoryEnumFromJSON(json['category']),
        'person': !exists(json, 'person') ? undefined : json['person'],
    };
}

export function SeededTagToJSON(value?: SeededTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'text': value.text,
        'asset': value.asset,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'format': value.format,
        'category': TagCategoryEnumToJSON(value.category),
        'person': value.person,
    };
}

