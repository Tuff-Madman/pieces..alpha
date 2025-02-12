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
import { EmbeddedModelSchema, ReferencedTag, Score } from './index';
/**
 * This is multiple ReferencedTags(which includes an optional FlattenedTag Model within the reference model).
 * @export
 * @interface FlattenedTags
 */
export interface FlattenedTags {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedTags
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedTag>}
     * @memberof FlattenedTags
     */
    iterable: Array<ReferencedTag>;
    /**
     * This is a Map<String, int> where the the key is an tag id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedTags
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof FlattenedTags
     */
    score?: Score;
}
export declare function FlattenedTagsFromJSON(json: any): FlattenedTags;
export declare function FlattenedTagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedTags;
export declare function FlattenedTagsToJSON(value?: FlattenedTags | null): any;
