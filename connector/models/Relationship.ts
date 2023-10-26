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

import { exists, mapValues } from '../runtime';
import {
    Edges,
    EdgesFromJSON,
    EdgesFromJSONTyped,
    EdgesToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    Embeddings,
    EmbeddingsFromJSON,
    EmbeddingsFromJSONTyped,
    EmbeddingsToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './';

/**
 * A relationship expresses a graph of like types, to build a relationship graph. 
 *  To get the type of relationship, this is for ie Asset, tag, website, format ...etc, you will need to iterate through the edges and get the root or you can just get the first edge's type as a relationship can only be expressed through same type
 * @export
 * @interface Relationship
 */
export interface Relationship {
    /**
     * 
     * @type {string}
     * @memberof Relationship
     */
    id: string;
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Relationship
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Embeddings}
     * @memberof Relationship
     */
    embeddings: Embeddings;
    /**
     * 
     * @type {Edges}
     * @memberof Relationship
     */
    edges: Edges;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Relationship
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Relationship
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Relationship
     */
    deleted?: GroupedTimestamp;
}

export function RelationshipFromJSON(json: any): Relationship {
    return RelationshipFromJSONTyped(json, false);
}

export function RelationshipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Relationship {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'embeddings': EmbeddingsFromJSON(json['embeddings']),
        'edges': EdgesFromJSON(json['edges']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
    };
}

export function RelationshipToJSON(value?: Relationship | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'embeddings': EmbeddingsToJSON(value.embeddings),
        'edges': EdgesToJSON(value.edges),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
    };
}

