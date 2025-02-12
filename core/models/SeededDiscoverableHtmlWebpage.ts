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
} from './index';

/**
 * 
 * @export
 * @interface SeededDiscoverableHtmlWebpage
 */
export interface SeededDiscoverableHtmlWebpage {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableHtmlWebpage
     */
    schema?: EmbeddedModelSchema;
    /**
     * The route of the page
     * @type {string}
     * @memberof SeededDiscoverableHtmlWebpage
     */
    url: string;
    /**
     * page's html as a string
     * @type {string}
     * @memberof SeededDiscoverableHtmlWebpage
     */
    page: string;
}

export function SeededDiscoverableHtmlWebpageFromJSON(json: any): SeededDiscoverableHtmlWebpage {
    return SeededDiscoverableHtmlWebpageFromJSONTyped(json, false);
}

export function SeededDiscoverableHtmlWebpageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableHtmlWebpage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'url': json['url'],
        'page': json['page'],
    };
}

export function SeededDiscoverableHtmlWebpageToJSON(value?: SeededDiscoverableHtmlWebpage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'url': value.url,
        'page': value.page,
    };
}


