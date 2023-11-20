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
    SeededTrackedApplication,
    SeededTrackedApplicationFromJSON,
    SeededTrackedApplicationFromJSONTyped,
    SeededTrackedApplicationToJSON,
} from './';

/**
 * A model that is passed to the context API at bootup
 * @export
 * @interface SeededConnectorConnection
 */
export interface SeededConnectorConnection {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededConnectorConnection
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededTrackedApplication}
     * @memberof SeededConnectorConnection
     */
    application: SeededTrackedApplication;
}

export function SeededConnectorConnectionFromJSON(json: any): SeededConnectorConnection {
    return SeededConnectorConnectionFromJSONTyped(json, false);
}

export function SeededConnectorConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConnectorConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'application': SeededTrackedApplicationFromJSON(json['application']),
    };
}

export function SeededConnectorConnectionToJSON(value?: SeededConnectorConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'application': SeededTrackedApplicationToJSON(value.application),
    };
}

