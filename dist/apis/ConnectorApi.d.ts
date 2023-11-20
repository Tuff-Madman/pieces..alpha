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
import * as runtime from '../runtime';
import { Context, SeededConnectorConnection, SeededConnectorTracking } from '../models';
export interface ConnectRequest {
    seededConnectorConnection?: SeededConnectorConnection;
}
export interface TrackRequest {
    application: string;
    seededConnectorTracking?: SeededConnectorTracking;
}
/**
 *
 */
export declare class ConnectorApi extends runtime.BaseAPI {
    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    connectRaw(requestParameters: ConnectRequest): Promise<runtime.ApiResponse<Context>>;
    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    connect(requestParameters: ConnectRequest): Promise<Context>;
    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    trackRaw(requestParameters: TrackRequest): Promise<runtime.ApiResponse<string>>;
    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    track(requestParameters: TrackRequest): Promise<string>;
}