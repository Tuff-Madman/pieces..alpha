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


import * as runtime from '../runtime';
import {
    ConversationMessage,
    ConversationMessageFromJSON,
    ConversationMessageToJSON,
    SeededScoreIncrement,
    SeededScoreIncrementFromJSON,
    SeededScoreIncrementToJSON,
} from '../models';

export interface AssociateAnnotationRequest {
    annotation: string;
    message: string;
}

export interface DisassociateAnnotationRequest {
    annotation: string;
    message: string;
}

export interface MessageScoresIncrementRequest {
    message: string;
    seededScoreIncrement?: SeededScoreIncrement;
}

export interface MessageSpecificMessageSnapshotRequest {
    message: string;
    transferables?: boolean;
}

export interface MessageSpecificMessageUpdateRequest {
    transferables?: boolean;
    conversationMessage?: ConversationMessage;
}

/**
 * 
 */
export class ConversationMessageApi extends runtime.BaseAPI {

    /**
     * This will associate a message with an annotation.
     * /message/{message}/annotations/associate/{annotation} [POST]
     */
    async associateAnnotationRaw(requestParameters: AssociateAnnotationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.annotation === null || requestParameters.annotation === undefined) {
            throw new runtime.RequiredError('annotation','Required parameter requestParameters.annotation was null or undefined when calling associateAnnotation.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling associateAnnotation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{message}/annotations/associate/{annotation}`.replace(`{${"annotation"}}`, encodeURIComponent(String(requestParameters.annotation))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a message with an annotation.
     * /message/{message}/annotations/associate/{annotation} [POST]
     */
    async associateAnnotation(requestParameters: AssociateAnnotationRequest): Promise<void> {
        await this.associateAnnotationRaw(requestParameters);
    }

    /**
     * This will enable us to dissassociate a message from an annotation.
     * /message/{message}/annotations/disassociate/{annotation} [POST]
     */
    async disassociateAnnotationRaw(requestParameters: DisassociateAnnotationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.annotation === null || requestParameters.annotation === undefined) {
            throw new runtime.RequiredError('annotation','Required parameter requestParameters.annotation was null or undefined when calling disassociateAnnotation.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling disassociateAnnotation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{message}/annotations/disassociate/{annotation}`.replace(`{${"annotation"}}`, encodeURIComponent(String(requestParameters.annotation))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a message from an annotation.
     * /message/{message}/annotations/disassociate/{annotation} [POST]
     */
    async disassociateAnnotation(requestParameters: DisassociateAnnotationRequest): Promise<void> {
        await this.disassociateAnnotationRaw(requestParameters);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/message/{message}/scores/increment\' [POST]
     */
    async messageScoresIncrementRaw(requestParameters: MessageScoresIncrementRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling messageScoresIncrement.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/{message}/scores/increment`.replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededScoreIncrementToJSON(requestParameters.seededScoreIncrement),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/message/{message}/scores/increment\' [POST]
     */
    async messageScoresIncrement(requestParameters: MessageScoresIncrementRequest): Promise<void> {
        await this.messageScoresIncrementRaw(requestParameters);
    }

    /**
     * This will get a specific snapshot of a message
     * /message/{message} [GET]
     */
    async messageSpecificMessageSnapshotRaw(requestParameters: MessageSpecificMessageSnapshotRequest): Promise<runtime.ApiResponse<ConversationMessage>> {
        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling messageSpecificMessageSnapshot.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{message}`.replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationMessageFromJSON(jsonValue));
    }

    /**
     * This will get a specific snapshot of a message
     * /message/{message} [GET]
     */
    async messageSpecificMessageSnapshot(requestParameters: MessageSpecificMessageSnapshotRequest): Promise<ConversationMessage> {
        const response = await this.messageSpecificMessageSnapshotRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will update a conversation message.
     * /message/update [GET]
     */
    async messageSpecificMessageUpdateRaw(requestParameters: MessageSpecificMessageUpdateRequest): Promise<runtime.ApiResponse<ConversationMessage>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConversationMessageToJSON(requestParameters.conversationMessage),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationMessageFromJSON(jsonValue));
    }

    /**
     * This will update a conversation message.
     * /message/update [GET]
     */
    async messageSpecificMessageUpdate(requestParameters: MessageSpecificMessageUpdateRequest): Promise<ConversationMessage> {
        const response = await this.messageSpecificMessageUpdateRaw(requestParameters);
        return await response.value();
    }

}
