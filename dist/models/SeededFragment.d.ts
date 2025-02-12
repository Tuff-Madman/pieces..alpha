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
import { EmbeddedModelSchema, FragmentMetadata, TransferableBytes, TransferableString } from './index';
/**
 * This will be either a TransferableString or TransferableBytes that represent your fragment. ONLY Pass one or the other DONT pass both or neither.
 * @export
 * @interface SeededFragment
 */
export interface SeededFragment {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededFragment
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TransferableString}
     * @memberof SeededFragment
     */
    string?: TransferableString;
    /**
     *
     * @type {TransferableBytes}
     * @memberof SeededFragment
     */
    bytes?: TransferableBytes;
    /**
     *
     * @type {FragmentMetadata}
     * @memberof SeededFragment
     */
    metadata?: FragmentMetadata;
}
export declare function SeededFragmentFromJSON(json: any): SeededFragment;
export declare function SeededFragmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededFragment;
export declare function SeededFragmentToJSON(value?: SeededFragment | null): any;
