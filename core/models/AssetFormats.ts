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
    FlattenedAsset,
    FlattenedAssetFromJSON,
    FlattenedAssetFromJSONTyped,
    FlattenedAssetToJSON,
    Format,
    FormatFromJSON,
    FormatFromJSONTyped,
    FormatToJSON,
} from './';

/**
 * A collection of Formats for a specific asset.
 * 
 * Formats used at runtime have the capability (and are likely cross-polinated) with a deep reference to the asset meaning asset is not a String but actually a ReferencedAsset, which at minimum contains a id representing the asset as well as a reference which is undefined/null or a FlattenedAsset
 * @export
 * @interface AssetFormats
 */
export interface AssetFormats {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetFormats
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Format>}
     * @memberof AssetFormats
     */
    iterable?: Array<Format>;
    /**
     * 
     * @type {FlattenedAsset}
     * @memberof AssetFormats
     */
    asset: FlattenedAsset;
}

export function AssetFormatsFromJSON(json: any): AssetFormats {
    return AssetFormatsFromJSONTyped(json, false);
}

export function AssetFormatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFormats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': !exists(json, 'iterable') ? undefined : ((json['iterable'] as Array<any>).map(FormatFromJSON)),
        'asset': FlattenedAssetFromJSON(json['asset']),
    };
}

export function AssetFormatsToJSON(value?: AssetFormats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': value.iterable === undefined ? undefined : ((value.iterable as Array<any>).map(FormatToJSON)),
        'asset': FlattenedAssetToJSON(value.asset),
    };
}

