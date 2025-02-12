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
import { EmbeddedModelSchema } from './index';
/**
 * This is use as the score for an asset.
 *
 * Manual: will be the raw sum of the asset activity events ranks with mechanismEnum == manual
 * Automatic: will be the raw sum of the asset activity events ranks with mechanismEnum == automatic
 * @export
 * @interface Score
 */
export interface Score {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Score
     */
    schema?: EmbeddedModelSchema;
    /**
     * These are points assigned via manual user driven events.
     * @type {number}
     * @memberof Score
     */
    manual: number;
    /**
     * These are point assigned via automatic activity events.
     * @type {number}
     * @memberof Score
     */
    automatic: number;
    /**
     *
     * @type {number}
     * @memberof Score
     */
    priority?: number;
    /**
     *
     * @type {number}
     * @memberof Score
     */
    reuse?: number;
    /**
     *
     * @type {number}
     * @memberof Score
     */
    update?: number;
    /**
     *
     * @type {number}
     * @memberof Score
     */
    reference?: number;
}
export declare function ScoreFromJSON(json: any): Score;
export declare function ScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): Score;
export declare function ScoreToJSON(value?: Score | null): any;
