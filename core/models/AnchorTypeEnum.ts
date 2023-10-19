/* tslint:disable */
/* eslint-disable */
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

/**
 * This is an enum used to differentiate the different between different anchors. Used in the Anchor data model.
 * @export
 * @enum {string}
 */
export enum AnchorTypeEnum {
    File = 'FILE',
    Directory = 'DIRECTORY'
}

export function AnchorTypeEnumFromJSON(json: any): AnchorTypeEnum {
    return AnchorTypeEnumFromJSONTyped(json, false);
}

export function AnchorTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnchorTypeEnum {
    return json as AnchorTypeEnum;
}

export function AnchorTypeEnumToJSON(value?: AnchorTypeEnum | null): any {
    return value as any;
}
