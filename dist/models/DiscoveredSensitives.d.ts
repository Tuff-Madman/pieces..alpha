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
import { DiscoveredSensitive, EmbeddedModelSchema } from './index';
/**
 *
 * @export
 * @interface DiscoveredSensitives
 */
export interface DiscoveredSensitives {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredSensitives
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<DiscoveredSensitive>}
     * @memberof DiscoveredSensitives
     */
    iterable: Array<DiscoveredSensitive>;
    /**
     *
     * @type {string}
     * @memberof DiscoveredSensitives
     */
    application: string;
}
export declare function DiscoveredSensitivesFromJSON(json: any): DiscoveredSensitives;
export declare function DiscoveredSensitivesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredSensitives;
export declare function DiscoveredSensitivesToJSON(value?: DiscoveredSensitives | null): any;
