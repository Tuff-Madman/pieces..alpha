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
import { EmbeddedModelSchema } from './';
/**
 * These are the references of the formats **Only UUIDS**
 * @export
 * @interface FlattenedPreview
 */
export interface FlattenedPreview {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedPreview
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is a reference(uuid) to the base format
     * @type {string}
     * @memberof FlattenedPreview
     */
    base: string;
    /**
     * this is a reference(uuid) to the overlay format
     * @type {string}
     * @memberof FlattenedPreview
     */
    overlay?: string;
}
export declare function FlattenedPreviewFromJSON(json: any): FlattenedPreview;
export declare function FlattenedPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedPreview;
export declare function FlattenedPreviewToJSON(value?: FlattenedPreview | null): any;