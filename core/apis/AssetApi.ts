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
    AssetReclassification,
    AssetReclassificationFromJSON,
    AssetReclassificationToJSON,
    Conversations,
    ConversationsFromJSON,
    ConversationsToJSON,
    ExportedAsset,
    ExportedAssetFromJSON,
    ExportedAssetToJSON,
    Formats,
    FormatsFromJSON,
    FormatsToJSON,
    SeededAccessor,
    SeededAccessorFromJSON,
    SeededAccessorToJSON,
    SeededScoreIncrement,
    SeededScoreIncrementFromJSON,
    SeededScoreIncrementToJSON,
} from '../models';

export interface AssetAssociateTagRequest {
    asset: string;
    tag: string;
}

export interface AssetDisassociateTagRequest {
    tag: string;
    asset: string;
}

export interface AssetFormatsRequest {
    asset: string;
    transferables?: boolean;
}

export interface AssetReclassifyRequest {
    transferables?: boolean;
    assetReclassification?: AssetReclassification;
}

export interface AssetScoresIncrementRequest {
    asset: string;
    seededScoreIncrement?: SeededScoreIncrement;
}

export interface AssetSnapshotRequest {
    asset: string;
    transferables?: boolean;
}

export interface AssetSnapshotPostRequest {
    asset: string;
    transferables?: boolean;
    seededAccessor?: SeededAccessor;
}

export interface AssetSpecificAssetConversationsRequest {
    asset: string;
    transferables?: boolean;
}

export interface AssetSpecificAssetExportRequest {
    asset: string;
    exportType: AssetSpecificAssetExportExportTypeEnum;
}

export interface AssetUpdateRequest {
    transferables?: boolean;
    asset?: Asset;
}

export interface AssociateWebsiteRequest {
    asset: string;
    website: string;
}

export interface DisassociateWebsiteRequest {
    website: string;
    asset: string;
}

/**
 * 
 */
export class AssetApi extends runtime.BaseAPI {

    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    async assetAssociateTagRaw(requestParameters: AssetAssociateTagRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetAssociateTag.');
        }

        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling assetAssociateTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/tags/associate/{tag}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    async assetAssociateTag(requestParameters: AssetAssociateTagRequest): Promise<void> {
        await this.assetAssociateTagRaw(requestParameters);
    }

    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    async assetDisassociateTagRaw(requestParameters: AssetDisassociateTagRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling assetDisassociateTag.');
        }

        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetDisassociateTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/tags/disassociate/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    async assetDisassociateTag(requestParameters: AssetDisassociateTagRequest): Promise<void> {
        await this.assetDisassociateTagRaw(requestParameters);
    }

    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    async assetFormatsRaw(requestParameters: AssetFormatsRequest): Promise<runtime.ApiResponse<Formats>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetFormats.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/formats`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FormatsFromJSON(jsonValue));
    }

    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    async assetFormats(requestParameters: AssetFormatsRequest): Promise<Formats> {
        const response = await this.assetFormatsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    async assetReclassifyRaw(requestParameters: AssetReclassifyRequest): Promise<runtime.ApiResponse<Asset>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/reclassify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetReclassificationToJSON(requestParameters.assetReclassification),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    async assetReclassify(requestParameters: AssetReclassifyRequest): Promise<Asset> {
        const response = await this.assetReclassifyRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    async assetScoresIncrementRaw(requestParameters: AssetScoresIncrementRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetScoresIncrement.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/{asset}/scores/increment`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededScoreIncrementToJSON(requestParameters.seededScoreIncrement),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    async assetScoresIncrement(requestParameters: AssetScoresIncrementRequest): Promise<void> {
        await this.assetScoresIncrementRaw(requestParameters);
    }

    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    async assetSnapshotRaw(requestParameters: AssetSnapshotRequest): Promise<runtime.ApiResponse<Asset>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSnapshot.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    async assetSnapshot(requestParameters: AssetSnapshotRequest): Promise<Asset> {
        const response = await this.assetSnapshotRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    async assetSnapshotPostRaw(requestParameters: AssetSnapshotPostRequest): Promise<runtime.ApiResponse<Asset>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSnapshotPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededAccessorToJSON(requestParameters.seededAccessor),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    async assetSnapshotPost(requestParameters: AssetSnapshotPostRequest): Promise<Asset> {
        const response = await this.assetSnapshotPostRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    async assetSpecificAssetConversationsRaw(requestParameters: AssetSpecificAssetConversationsRequest): Promise<runtime.ApiResponse<Conversations>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSpecificAssetConversations.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/conversations`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationsFromJSON(jsonValue));
    }

    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    async assetSpecificAssetConversations(requestParameters: AssetSpecificAssetConversationsRequest): Promise<Conversations> {
        const response = await this.assetSpecificAssetConversationsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    async assetSpecificAssetExportRaw(requestParameters: AssetSpecificAssetExportRequest): Promise<runtime.ApiResponse<ExportedAsset>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling assetSpecificAssetExport.');
        }

        if (requestParameters.exportType === null || requestParameters.exportType === undefined) {
            throw new runtime.RequiredError('exportType','Required parameter requestParameters.exportType was null or undefined when calling assetSpecificAssetExport.');
        }

        const queryParameters: any = {};

        if (requestParameters.exportType !== undefined) {
            queryParameters['export_type'] = requestParameters.exportType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/export`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportedAssetFromJSON(jsonValue));
    }

    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    async assetSpecificAssetExport(requestParameters: AssetSpecificAssetExportRequest): Promise<ExportedAsset> {
        const response = await this.assetSpecificAssetExportRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    async assetUpdateRaw(requestParameters: AssetUpdateRequest): Promise<runtime.ApiResponse<Asset>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/asset/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetToJSON(requestParameters.asset),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFromJSON(jsonValue));
    }

    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    async assetUpdate(requestParameters: AssetUpdateRequest): Promise<Asset> {
        const response = await this.assetUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    async associateWebsiteRaw(requestParameters: AssociateWebsiteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling associateWebsite.');
        }

        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling associateWebsite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/websites/associate/{website}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    async associateWebsite(requestParameters: AssociateWebsiteRequest): Promise<void> {
        await this.associateWebsiteRaw(requestParameters);
    }

    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    async disassociateWebsiteRaw(requestParameters: DisassociateWebsiteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling disassociateWebsite.');
        }

        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling disassociateWebsite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/asset/{asset}/websites/disassociate/{website}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    async disassociateWebsite(requestParameters: DisassociateWebsiteRequest): Promise<void> {
        await this.disassociateWebsiteRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum AssetSpecificAssetExportExportTypeEnum {
    Html = 'HTML',
    Md = 'MD'
}
