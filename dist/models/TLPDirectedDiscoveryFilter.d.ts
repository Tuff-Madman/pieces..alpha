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
import { TLPDirectedDiscoveryFilterEnum } from './index';
/**
 * Contains enum which represents code block type
 * @export
 * @interface TLPDirectedDiscoveryFilter
 */
export interface TLPDirectedDiscoveryFilter {
    /**
     *
     * @type {TLPDirectedDiscoveryFilterEnum}
     * @memberof TLPDirectedDiscoveryFilter
     */
    name: TLPDirectedDiscoveryFilterEnum;
}
export declare function TLPDirectedDiscoveryFilterFromJSON(json: any): TLPDirectedDiscoveryFilter;
export declare function TLPDirectedDiscoveryFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPDirectedDiscoveryFilter;
export declare function TLPDirectedDiscoveryFilterToJSON(value?: TLPDirectedDiscoveryFilter | null): any;
