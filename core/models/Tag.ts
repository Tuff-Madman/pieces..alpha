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
    FlattenedAssets,
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedPersons,
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    Relationship,
    RelationshipFromJSON,
    RelationshipFromJSONTyped,
    RelationshipToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
    TagCategoryEnum,
    TagCategoryEnumFromJSON,
    TagCategoryEnumFromJSONTyped,
    TagCategoryEnumToJSON,
} from './index';

/**
 * This represents a fully polinated Tag, that is either attached to an asset or a format that adds additional information "tags" to describe itself.Helps improve Search and other contextual information that is useful for the user.
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Tag
     */
    schema?: EmbeddedModelSchema;
    /**
     * UUID that represents the tag.
     * @type {string}
     * @memberof Tag
     */
    id: string;
    /**
     * represnts the value of a tag.
     * @type {string}
     * @memberof Tag
     */
    text: string;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof Tag
     */
    mechanisms?: { [key: string]: MechanismEnum; };
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof Tag
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Tag
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Tag
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Tag
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {TagCategoryEnum}
     * @memberof Tag
     */
    category: TagCategoryEnum;
    /**
     * 
     * @type {Relationship}
     * @memberof Tag
     */
    relationship?: Relationship;
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof Tag
     */
    interactions?: number;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof Tag
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {Score}
     * @memberof Tag
     */
    score?: Score;
}

export function TagFromJSON(json: any): Tag {
    return TagFromJSONTyped(json, false);
}

export function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'text': json['text'],
        'mechanisms': !exists(json, 'mechanisms') ? undefined : (mapValues(json['mechanisms'], MechanismEnumFromJSON)),
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'category': TagCategoryEnumFromJSON(json['category']),
        'relationship': !exists(json, 'relationship') ? undefined : RelationshipFromJSON(json['relationship']),
        'interactions': !exists(json, 'interactions') ? undefined : json['interactions'],
        'persons': !exists(json, 'persons') ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function TagToJSON(value?: Tag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'text': value.text,
        'mechanisms': value.mechanisms === undefined ? undefined : (mapValues(value.mechanisms, MechanismEnumToJSON)),
        'assets': FlattenedAssetsToJSON(value.assets),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'category': TagCategoryEnumToJSON(value.category),
        'relationship': RelationshipToJSON(value.relationship),
        'interactions': value.interactions,
        'persons': FlattenedPersonsToJSON(value.persons),
        'score': ScoreToJSON(value.score),
    };
}


