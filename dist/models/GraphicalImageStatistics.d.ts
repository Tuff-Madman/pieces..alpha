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
import { EmbeddedModelSchema, GraphicalImageDescriptiveStatistics } from './';
/**
 *
 * @export
 * @interface GraphicalImageStatistics
 */
export interface GraphicalImageStatistics {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalImageStatistics
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GraphicalImageDescriptiveStatistics}
     * @memberof GraphicalImageStatistics
     */
    descriptive?: GraphicalImageDescriptiveStatistics;
}
export declare function GraphicalImageStatisticsFromJSON(json: any): GraphicalImageStatistics;
export declare function GraphicalImageStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalImageStatistics;
export declare function GraphicalImageStatisticsToJSON(value?: GraphicalImageStatistics | null): any;