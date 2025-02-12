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
    ReferencedAsset,
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './index';

/**
 * A collection of Assets specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]
 * 
 * FlattenedAssets prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 * 
 * i.e. Asset asset = FlattenedAssets.iterable[0] => Format format = asset.preview => String id = format.asset => String id
 * @export
 * @interface FlattenedAssets
 */
export interface FlattenedAssets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedAsset>}
     * @memberof FlattenedAssets
     */
    iterable?: Array<ReferencedAsset>;
    /**
     * This is a Map<String, int> where the the key is an asset id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedAssets
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAssets
     */
    score?: Score;
}

export function FlattenedAssetsFromJSON(json: any): FlattenedAssets {
    return FlattenedAssetsFromJSONTyped(json, false);
}

export function FlattenedAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAssets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': !exists(json, 'iterable') ? undefined : ((json['iterable'] as Array<any>).map(ReferencedAssetFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedAssetsToJSON(value?: FlattenedAssets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': value.iterable === undefined ? undefined : ((value.iterable as Array<any>).map(ReferencedAssetToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}


