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
    Seed,
    SeedFromJSON,
    SeedFromJSONTyped,
    SeedToJSON,
} from './index';

/**
 * This is a plural model for multiple Seed.
 * @export
 * @interface Seeds
 */
export interface Seeds {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Seeds
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Seed>}
     * @memberof Seeds
     */
    iterable: Array<Seed>;
}

export function SeedsFromJSON(json: any): Seeds {
    return SeedsFromJSONTyped(json, false);
}

export function SeedsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Seeds {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SeedFromJSON)),
    };
}

export function SeedsToJSON(value?: Seeds | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SeedToJSON)),
    };
}


