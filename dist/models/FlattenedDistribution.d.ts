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
import { EmbeddedModelSchema, GitHubDistribution, GroupedTimestamp, MailgunDistribution } from './index';
/**
 *
 * @export
 * @interface FlattenedDistribution
 */
export interface FlattenedDistribution {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof FlattenedDistribution
     */
    id: string;
    /**
     * This is the UUId of the share.
     * @type {string}
     * @memberof FlattenedDistribution
     */
    share: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedDistribution
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedDistribution
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedDistribution
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {MailgunDistribution}
     * @memberof FlattenedDistribution
     */
    mailgun?: MailgunDistribution;
    /**
     *
     * @type {GitHubDistribution}
     * @memberof FlattenedDistribution
     */
    github?: GitHubDistribution;
}
export declare function FlattenedDistributionFromJSON(json: any): FlattenedDistribution;
export declare function FlattenedDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedDistribution;
export declare function FlattenedDistributionToJSON(value?: FlattenedDistribution | null): any;
