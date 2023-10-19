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
    Hint,
    HintFromJSON,
    HintToJSON,
    Hints,
    HintsFromJSON,
    HintsToJSON,
    SeededHint,
    SeededHintFromJSON,
    SeededHintToJSON,
} from '../models';

export interface HintsCreateNewHintRequest {
    seededHint?: SeededHint;
}

export interface HintsDeleteSpecificHintRequest {
    hint: string;
}

/**
 * 
 */
export class HintsApi extends runtime.BaseAPI {

    /**
     * This will create a hint.
     * /hints/create [POST]
     */
    async hintsCreateNewHintRaw(requestParameters: HintsCreateNewHintRequest): Promise<runtime.ApiResponse<Hint>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/hints/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededHintToJSON(requestParameters.seededHint),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => HintFromJSON(jsonValue));
    }

    /**
     * This will create a hint.
     * /hints/create [POST]
     */
    async hintsCreateNewHint(requestParameters: HintsCreateNewHintRequest): Promise<Hint> {
        const response = await this.hintsCreateNewHintRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will delete a specific hint.
     * /hints/{hint}/delete [POST]
     */
    async hintsDeleteSpecificHintRaw(requestParameters: HintsDeleteSpecificHintRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.hint === null || requestParameters.hint === undefined) {
            throw new runtime.RequiredError('hint','Required parameter requestParameters.hint was null or undefined when calling hintsDeleteSpecificHint.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/hints/{hint}/delete`.replace(`{${"hint"}}`, encodeURIComponent(String(requestParameters.hint))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a specific hint.
     * /hints/{hint}/delete [POST]
     */
    async hintsDeleteSpecificHint(requestParameters: HintsDeleteSpecificHintRequest): Promise<void> {
        await this.hintsDeleteSpecificHintRaw(requestParameters);
    }

    /**
     * This will get a snapshot of all of the hints.
     * /hints [GET]
     */
    async hintsSnapshotRaw(): Promise<runtime.ApiResponse<Hints>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/hints`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => HintsFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all of the hints.
     * /hints [GET]
     */
    async hintsSnapshot(): Promise<Hints> {
        const response = await this.hintsSnapshotRaw();
        return await response.value();
    }

}