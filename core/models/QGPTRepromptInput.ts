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
    QGPTConversation,
    QGPTConversationFromJSON,
    QGPTConversationFromJSONTyped,
    QGPTConversationToJSON,
} from './';

/**
 * Query is your followup question.
 * 
 * Conversation is a list of the back and fourth with the qgpt bot.
 * where the first entry in the array was the last message sent.
 * @export
 * @interface QGPTRepromptInput
 */
export interface QGPTRepromptInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTRepromptInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof QGPTRepromptInput
     */
    query: string;
    /**
     * 
     * @type {QGPTConversation}
     * @memberof QGPTRepromptInput
     */
    conversation: QGPTConversation;
    /**
     * optional application id
     * @type {string}
     * @memberof QGPTRepromptInput
     */
    application?: string;
    /**
     * optional model id
     * @type {string}
     * @memberof QGPTRepromptInput
     */
    model?: string;
}

export function QGPTRepromptInputFromJSON(json: any): QGPTRepromptInput {
    return QGPTRepromptInputFromJSONTyped(json, false);
}

export function QGPTRepromptInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTRepromptInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'query': json['query'],
        'conversation': QGPTConversationFromJSON(json['conversation']),
        'application': !exists(json, 'application') ? undefined : json['application'],
        'model': !exists(json, 'model') ? undefined : json['model'],
    };
}

export function QGPTRepromptInputToJSON(value?: QGPTRepromptInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'query': value.query,
        'conversation': QGPTConversationToJSON(value.conversation),
        'application': value.application,
        'model': value.model,
    };
}

