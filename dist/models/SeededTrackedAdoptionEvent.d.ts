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
import { AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs, EmbeddedModelSchema } from './index';
/**
 *
 * @export
 * @interface SeededTrackedAdoptionEvent
 */
export interface SeededTrackedAdoptionEvent {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedAdoptionEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs}
     * @memberof SeededTrackedAdoptionEvent
     */
    identifierDescriptionPair?: AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs;
}
export declare function SeededTrackedAdoptionEventFromJSON(json: any): SeededTrackedAdoptionEvent;
export declare function SeededTrackedAdoptionEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedAdoptionEvent;
export declare function SeededTrackedAdoptionEventToJSON(value?: SeededTrackedAdoptionEvent | null): any;
