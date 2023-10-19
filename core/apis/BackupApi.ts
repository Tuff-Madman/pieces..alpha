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
    Asset,
    AssetFromJSON,
    AssetToJSON,
    Assets,
    AssetsFromJSON,
    AssetsToJSON,
} from '../models';

export interface BackupRequest {
    assets?: Assets;
}

export interface BackupAssetRequest {
    asset?: Asset;
}

/**
 * 
 */
export class BackupApi extends runtime.BaseAPI {

    /**
     * /backup [POST]
     */
    async backupRaw(requestParameters: BackupRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/backup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetsToJSON(requestParameters.assets),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * /backup [POST]
     */
    async backup(requestParameters: BackupRequest): Promise<void> {
        await this.backupRaw(requestParameters);
    }

    /**
     * /backup/asset [POST]
     */
    async backupAssetRaw(requestParameters: BackupAssetRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/backup/asset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetToJSON(requestParameters.asset),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * /backup/asset [POST]
     */
    async backupAsset(requestParameters: BackupAssetRequest): Promise<void> {
        await this.backupAssetRaw(requestParameters);
    }

}