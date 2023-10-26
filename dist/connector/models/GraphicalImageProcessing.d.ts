/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EmbeddedModelSchema, GraphicalImageStatistics } from './';
/**
 *
 * @export
 * @interface GraphicalImageProcessing
 */
export interface GraphicalImageProcessing {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalImageProcessing
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GraphicalImageStatistics}
     * @memberof GraphicalImageProcessing
     */
    statistics?: GraphicalImageStatistics;
}
export declare function GraphicalImageProcessingFromJSON(json: any): GraphicalImageProcessing;
export declare function GraphicalImageProcessingFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalImageProcessing;
export declare function GraphicalImageProcessingToJSON(value?: GraphicalImageProcessing | null): any;