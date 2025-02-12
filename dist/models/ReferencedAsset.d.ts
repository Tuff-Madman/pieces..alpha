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
import { EmbeddedModelSchema, FlattenedAsset } from './index';
/**
 * A reference to a asset, which at minimum must have the asset's id. But in the case of a hydrated client API it may have a populated reference of type Asset.
 * @export
 * @interface ReferencedAsset
 */
export interface ReferencedAsset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedAsset
     */
    id: string;
    /**
     *
     * @type {FlattenedAsset}
     * @memberof ReferencedAsset
     */
    reference?: FlattenedAsset;
}
export declare function ReferencedAssetFromJSON(json: any): ReferencedAsset;
export declare function ReferencedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedAsset;
export declare function ReferencedAssetToJSON(value?: ReferencedAsset | null): any;
