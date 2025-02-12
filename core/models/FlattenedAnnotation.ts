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
    AnnotationTypeEnum,
    AnnotationTypeEnumFromJSON,
    AnnotationTypeEnumFromJSONTyped,
    AnnotationTypeEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedConversationMessages,
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    ReferencedAnchor,
    ReferencedAnchorFromJSON,
    ReferencedAnchorFromJSONTyped,
    ReferencedAnchorToJSON,
    ReferencedAsset,
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
    ReferencedConversation,
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
    ReferencedModel,
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
    ReferencedPerson,
    ReferencedPersonFromJSON,
    ReferencedPersonFromJSONTyped,
    ReferencedPersonToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './index';

/**
 * This is the flattened Version of the annotation, IMPORTANT: when referencing these, ONLY Take the UUID, do NOT polinate(ie w/ asset/person/model) the FlattenedAnnotation as it can create an infinite loop.
 * @export
 * @interface FlattenedAnnotation
 */
export interface FlattenedAnnotation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnnotation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAnnotation
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnnotation
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnnotation
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnnotation
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof FlattenedAnnotation
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {ReferencedAsset}
     * @memberof FlattenedAnnotation
     */
    asset?: ReferencedAsset;
    /**
     * 
     * @type {ReferencedPerson}
     * @memberof FlattenedAnnotation
     */
    person?: ReferencedPerson;
    /**
     * 
     * @type {AnnotationTypeEnum}
     * @memberof FlattenedAnnotation
     */
    type: AnnotationTypeEnum;
    /**
     * This is the text of the annotation.
     * @type {string}
     * @memberof FlattenedAnnotation
     */
    text: string;
    /**
     * 
     * @type {ReferencedModel}
     * @memberof FlattenedAnnotation
     */
    model?: ReferencedModel;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAnnotation
     */
    pseudo?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAnnotation
     */
    favorited?: boolean;
    /**
     * 
     * @type {ReferencedAnchor}
     * @memberof FlattenedAnnotation
     */
    anchor?: ReferencedAnchor;
    /**
     * 
     * @type {ReferencedConversation}
     * @memberof FlattenedAnnotation
     */
    conversation?: ReferencedConversation;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAnnotation
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof FlattenedAnnotation
     */
    messages?: FlattenedConversationMessages;
}

export function FlattenedAnnotationFromJSON(json: any): FlattenedAnnotation {
    return FlattenedAnnotationFromJSONTyped(json, false);
}

export function FlattenedAnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnnotation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'asset': !exists(json, 'asset') ? undefined : ReferencedAssetFromJSON(json['asset']),
        'person': !exists(json, 'person') ? undefined : ReferencedPersonFromJSON(json['person']),
        'type': AnnotationTypeEnumFromJSON(json['type']),
        'text': json['text'],
        'model': !exists(json, 'model') ? undefined : ReferencedModelFromJSON(json['model']),
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
        'favorited': !exists(json, 'favorited') ? undefined : json['favorited'],
        'anchor': !exists(json, 'anchor') ? undefined : ReferencedAnchorFromJSON(json['anchor']),
        'conversation': !exists(json, 'conversation') ? undefined : ReferencedConversationFromJSON(json['conversation']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'messages': !exists(json, 'messages') ? undefined : FlattenedConversationMessagesFromJSON(json['messages']),
    };
}

export function FlattenedAnnotationToJSON(value?: FlattenedAnnotation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'asset': ReferencedAssetToJSON(value.asset),
        'person': ReferencedPersonToJSON(value.person),
        'type': AnnotationTypeEnumToJSON(value.type),
        'text': value.text,
        'model': ReferencedModelToJSON(value.model),
        'pseudo': value.pseudo,
        'favorited': value.favorited,
        'anchor': ReferencedAnchorToJSON(value.anchor),
        'conversation': ReferencedConversationToJSON(value.conversation),
        'score': ScoreToJSON(value.score),
        'messages': FlattenedConversationMessagesToJSON(value.messages),
    };
}


