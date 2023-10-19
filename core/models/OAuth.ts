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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    OAuthAccount,
    OAuthAccountFromJSON,
    OAuthAccountFromJSONTyped,
    OAuthAccountToJSON,
    OAuthToken,
    OAuthTokenFromJSON,
    OAuthTokenFromJSONTyped,
    OAuthTokenToJSON,
} from './';

/**
 * A model to group all of the properties associated with OAuth
 * @export
 * @interface OAuth
 */
export interface OAuth {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OAuth
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {OAuthToken}
     * @memberof OAuth
     */
    token?: OAuthToken;
    /**
     * 
     * @type {OAuthAccount}
     * @memberof OAuth
     */
    account?: OAuthAccount;
}

export function OAuthFromJSON(json: any): OAuth {
    return OAuthFromJSONTyped(json, false);
}

export function OAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'token': !exists(json, 'token') ? undefined : OAuthTokenFromJSON(json['token']),
        'account': !exists(json, 'account') ? undefined : OAuthAccountFromJSON(json['account']),
    };
}

export function OAuthToJSON(value?: OAuth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'token': OAuthTokenToJSON(value.token),
        'account': OAuthAccountToJSON(value.account),
    };
}

