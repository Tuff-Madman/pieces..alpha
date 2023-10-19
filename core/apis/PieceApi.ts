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

export interface HtmlShareRequest {
    p: string;
}

/**
 * 
 */
export class PieceApi extends runtime.BaseAPI {

    /**
     * This is a cloud only Api. This will get a preview of your publically accessble Piece.
     * / [GET]
     */
    async htmlShareRaw(requestParameters: HtmlShareRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.p === null || requestParameters.p === undefined) {
            throw new runtime.RequiredError('p','Required parameter requestParameters.p was null or undefined when calling htmlShare.');
        }

        const queryParameters: any = {};

        if (requestParameters.p !== undefined) {
            queryParameters['p'] = requestParameters.p;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * This is a cloud only Api. This will get a preview of your publically accessble Piece.
     * / [GET]
     */
    async htmlShare(requestParameters: HtmlShareRequest): Promise<string> {
        const response = await this.htmlShareRaw(requestParameters);
        return await response.value();
    }

}