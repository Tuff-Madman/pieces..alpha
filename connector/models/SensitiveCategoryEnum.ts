/* tslint:disable */
/* eslint-disable */
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

/**
 * This is the enum that is use to describe the category of our Sensitive Model.
 * @export
 * @enum {string}
 */
export enum SensitiveCategoryEnum {
    Secret = 'SECRET',
    ApiKey = 'API_KEY',
    ClientId = 'CLIENT_ID',
    ClientSecret = 'CLIENT_SECRET',
    SecretKey = 'SECRET_KEY',
    ApiToken = 'API_TOKEN',
    AccessKey = 'ACCESS_KEY',
    AccessToken = 'ACCESS_TOKEN',
    Url = 'URL',
    PublicKey = 'PUBLIC_KEY',
    PrivateKey = 'PRIVATE_KEY',
    ApiId = 'API_ID',
    WebHookUrl = 'WEB_HOOK_URL'
}

export function SensitiveCategoryEnumFromJSON(json: any): SensitiveCategoryEnum {
    return SensitiveCategoryEnumFromJSONTyped(json, false);
}

export function SensitiveCategoryEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensitiveCategoryEnum {
    return json as SensitiveCategoryEnum;
}

export function SensitiveCategoryEnumToJSON(value?: SensitiveCategoryEnum | null): any {
    return value as any;
}
