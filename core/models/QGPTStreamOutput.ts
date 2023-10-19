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
    QGPTQuestionOutput,
    QGPTQuestionOutputFromJSON,
    QGPTQuestionOutputFromJSONTyped,
    QGPTQuestionOutputToJSON,
    QGPTRelevanceOutput,
    QGPTRelevanceOutputFromJSON,
    QGPTRelevanceOutputFromJSONTyped,
    QGPTRelevanceOutputToJSON,
    QGPTStreamEnum,
    QGPTStreamEnumFromJSON,
    QGPTStreamEnumFromJSONTyped,
    QGPTStreamEnumToJSON,
} from './';

/**
 * This is the out for the /qgpt/stream endpoint.
 * @export
 * @interface QGPTStreamOutput
 */
export interface QGPTStreamOutput {
    /**
     * This is the id used to represent the stream of response. this will always be present. We will use the value passed inby the client, or we will generate one.
     * @type {string}
     * @memberof QGPTStreamOutput
     */
    request?: string;
    /**
     * 
     * @type {QGPTRelevanceOutput}
     * @memberof QGPTStreamOutput
     */
    relevance?: QGPTRelevanceOutput;
    /**
     * 
     * @type {QGPTQuestionOutput}
     * @memberof QGPTStreamOutput
     */
    question?: QGPTQuestionOutput;
    /**
     * 
     * @type {QGPTStreamEnum}
     * @memberof QGPTStreamOutput
     */
    status?: QGPTStreamEnum;
    /**
     * This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question)
     * @type {string}
     * @memberof QGPTStreamOutput
     */
    conversation: string;
}

export function QGPTStreamOutputFromJSON(json: any): QGPTStreamOutput {
    return QGPTStreamOutputFromJSONTyped(json, false);
}

export function QGPTStreamOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTStreamOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'request': !exists(json, 'request') ? undefined : json['request'],
        'relevance': !exists(json, 'relevance') ? undefined : QGPTRelevanceOutputFromJSON(json['relevance']),
        'question': !exists(json, 'question') ? undefined : QGPTQuestionOutputFromJSON(json['question']),
        'status': !exists(json, 'status') ? undefined : QGPTStreamEnumFromJSON(json['status']),
        'conversation': json['conversation'],
    };
}

export function QGPTStreamOutputToJSON(value?: QGPTStreamOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'request': value.request,
        'relevance': QGPTRelevanceOutputToJSON(value.relevance),
        'question': QGPTQuestionOutputToJSON(value.question),
        'status': QGPTStreamEnumToJSON(value.status),
        'conversation': value.conversation,
    };
}

