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
    QGPTQuestionOutput,
    QGPTQuestionOutputFromJSON,
    QGPTQuestionOutputFromJSONTyped,
    QGPTQuestionOutputToJSON,
    RelevantQGPTSeeds,
    RelevantQGPTSeedsFromJSON,
    RelevantQGPTSeedsFromJSONTyped,
    RelevantQGPTSeedsToJSON,
} from './index';

/**
 * This is the returned value from /code_gpt/relevance.
 * 
 * This will return the snippets that we found are relevant to the query you provided.
 * 
 * (optional) answer: in the case you provided question: true, then we will also return to you the answer to your question.
 * 
 * Note:
 * - relevant: this is required property and will represent the relevant snippets, to your specific query.(NOTE: these snippet will all have respective id's and seed defined. even though id and seed are optional)
 * @export
 * @interface QGPTRelevanceOutput
 */
export interface QGPTRelevanceOutput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTRelevanceOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {QGPTQuestionOutput}
     * @memberof QGPTRelevanceOutput
     */
    answer?: QGPTQuestionOutput;
    /**
     * 
     * @type {RelevantQGPTSeeds}
     * @memberof QGPTRelevanceOutput
     */
    relevant: RelevantQGPTSeeds;
}

export function QGPTRelevanceOutputFromJSON(json: any): QGPTRelevanceOutput {
    return QGPTRelevanceOutputFromJSONTyped(json, false);
}

export function QGPTRelevanceOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTRelevanceOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'answer': !exists(json, 'answer') ? undefined : QGPTQuestionOutputFromJSON(json['answer']),
        'relevant': RelevantQGPTSeedsFromJSON(json['relevant']),
    };
}

export function QGPTRelevanceOutputToJSON(value?: QGPTRelevanceOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'answer': QGPTQuestionOutputToJSON(value.answer),
        'relevant': RelevantQGPTSeedsToJSON(value.relevant),
    };
}


