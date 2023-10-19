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
 * 
 * @export
 * @enum {string}
 */
export enum FilterOperationTypeEnum {
    And = 'AND',
    Or = 'OR'
}

export function FilterOperationTypeEnumFromJSON(json: any): FilterOperationTypeEnum {
    return FilterOperationTypeEnumFromJSONTyped(json, false);
}

export function FilterOperationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterOperationTypeEnum {
    return json as FilterOperationTypeEnum;
}

export function FilterOperationTypeEnumToJSON(value?: FilterOperationTypeEnum | null): any {
    return value as any;
}
