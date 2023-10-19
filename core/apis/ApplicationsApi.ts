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


import * as runtime from '../runtime';
import {
    Application,
    ApplicationFromJSON,
    ApplicationToJSON,
    Applications,
    ApplicationsFromJSON,
    ApplicationsToJSON,
    SeededTrackedInteractionEvent,
    SeededTrackedInteractionEventFromJSON,
    SeededTrackedInteractionEventToJSON,
    SeededTrackedKeyboardEvent,
    SeededTrackedKeyboardEventFromJSON,
    SeededTrackedKeyboardEventToJSON,
    Session,
    SessionFromJSON,
    SessionToJSON,
    TrackedApplicationInstall,
    TrackedApplicationInstallFromJSON,
    TrackedApplicationInstallToJSON,
    TrackedApplicationUpdate,
    TrackedApplicationUpdateFromJSON,
    TrackedApplicationUpdateToJSON,
    TrackedInteractionEvent,
    TrackedInteractionEventFromJSON,
    TrackedInteractionEventToJSON,
    TrackedKeyboardEvent,
    TrackedKeyboardEventFromJSON,
    TrackedKeyboardEventToJSON,
} from '../models';

export interface ApplicationsRegisterRequest {
    application?: Application;
}

export interface ApplicationsSessionCloseRequest {
    body?: string;
}

export interface ApplicationsSessionSnapshotRequest {
    session: string;
}

export interface ApplicationsSpecificApplicationSnapshotRequest {
    application: string;
}

export interface ApplicationsUsageEngagementInteractionRequest {
    seededTrackedInteractionEvent?: SeededTrackedInteractionEvent;
}

export interface ApplicationsUsageEngagementKeyboardRequest {
    seededTrackedKeyboardEvent?: SeededTrackedKeyboardEvent;
}

export interface ApplicationsUsageInstallationRequest {
    trackedApplicationInstall?: TrackedApplicationInstall;
}

export interface PostApplicationsUsageUpdatedRequest {
    trackedApplicationUpdate?: TrackedApplicationUpdate;
}

/**
 * 
 */
export class ApplicationsApi extends runtime.BaseAPI {

    /**
     * This will register a connected applicaiton.
     * /applications/register [POST]
     */
    async applicationsRegisterRaw(requestParameters: ApplicationsRegisterRequest): Promise<runtime.ApiResponse<Application>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApplicationToJSON(requestParameters.application),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     * This will register a connected applicaiton.
     * /applications/register [POST]
     */
    async applicationsRegister(requestParameters: ApplicationsRegisterRequest): Promise<Application> {
        const response = await this.applicationsRegisterRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will close your opened session! Going to want to accept a session uuid here.
     * /applications/session/close [POST]
     */
    async applicationsSessionCloseRaw(requestParameters: ApplicationsSessionCloseRequest): Promise<runtime.ApiResponse<Session>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/session/close`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * This will close your opened session! Going to want to accept a session uuid here.
     * /applications/session/close [POST]
     */
    async applicationsSessionClose(requestParameters: ApplicationsSessionCloseRequest): Promise<Session> {
        const response = await this.applicationsSessionCloseRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will open a new session. A session is when someone is using the pieces application.
     * /applications/session/open [POST]
     */
    async applicationsSessionOpenRaw(): Promise<runtime.ApiResponse<Session>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/session/open`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * This will open a new session. A session is when someone is using the pieces application.
     * /applications/session/open [POST]
     */
    async applicationsSessionOpen(): Promise<Session> {
        const response = await this.applicationsSessionOpenRaw();
        return await response.value();
    }

    /**
     * This is an endpoint to get a snapshot of a specific session.
     * /applications/sessions/{session} [GET]
     */
    async applicationsSessionSnapshotRaw(requestParameters: ApplicationsSessionSnapshotRequest): Promise<runtime.ApiResponse<Session>> {
        if (requestParameters.session === null || requestParameters.session === undefined) {
            throw new runtime.RequiredError('session','Required parameter requestParameters.session was null or undefined when calling applicationsSessionSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/sessions/{session}`.replace(`{${"session"}}`, encodeURIComponent(String(requestParameters.session))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * This is an endpoint to get a snapshot of a specific session.
     * /applications/sessions/{session} [GET]
     */
    async applicationsSessionSnapshot(requestParameters: ApplicationsSessionSnapshotRequest): Promise<Session> {
        const response = await this.applicationsSessionSnapshotRaw(requestParameters);
        return await response.value();
    }

    /**
     * /applications [GET]
     */
    async applicationsSnapshotRaw(): Promise<runtime.ApiResponse<Applications>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationsFromJSON(jsonValue));
    }

    /**
     * /applications [GET]
     */
    async applicationsSnapshot(): Promise<Applications> {
        const response = await this.applicationsSnapshotRaw();
        return await response.value();
    }

    /**
     * This will retrieve snapshot of a single application.
     * /applications/{application} [GET]
     */
    async applicationsSpecificApplicationSnapshotRaw(requestParameters: ApplicationsSpecificApplicationSnapshotRequest): Promise<runtime.ApiResponse<Application>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling applicationsSpecificApplicationSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/applications/{application}`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     * This will retrieve snapshot of a single application.
     * /applications/{application} [GET]
     */
    async applicationsSpecificApplicationSnapshot(requestParameters: ApplicationsSpecificApplicationSnapshotRequest): Promise<Application> {
        const response = await this.applicationsSpecificApplicationSnapshotRaw(requestParameters);
        return await response.value();
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).
     * /applications/usage/engagement/interaction [POST] Scoped to Apps
     */
    async applicationsUsageEngagementInteractionRaw(requestParameters: ApplicationsUsageEngagementInteractionRequest): Promise<runtime.ApiResponse<TrackedInteractionEvent>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/engagement/interaction`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededTrackedInteractionEventToJSON(requestParameters.seededTrackedInteractionEvent),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackedInteractionEventFromJSON(jsonValue));
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).
     * /applications/usage/engagement/interaction [POST] Scoped to Apps
     */
    async applicationsUsageEngagementInteraction(requestParameters: ApplicationsUsageEngagementInteractionRequest): Promise<TrackedInteractionEvent> {
        const response = await this.applicationsUsageEngagementInteractionRaw(requestParameters);
        return await response.value();
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.
     * /applications/usage/engagement/keyboard [POST] Scoped to Apps
     */
    async applicationsUsageEngagementKeyboardRaw(requestParameters: ApplicationsUsageEngagementKeyboardRequest): Promise<runtime.ApiResponse<TrackedKeyboardEvent>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/engagement/keyboard`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededTrackedKeyboardEventToJSON(requestParameters.seededTrackedKeyboardEvent),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackedKeyboardEventFromJSON(jsonValue));
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.
     * /applications/usage/engagement/keyboard [POST] Scoped to Apps
     */
    async applicationsUsageEngagementKeyboard(requestParameters: ApplicationsUsageEngagementKeyboardRequest): Promise<TrackedKeyboardEvent> {
        const response = await this.applicationsUsageEngagementKeyboardRaw(requestParameters);
        return await response.value();
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces
     * /applications/usage/installation [POST]
     */
    async applicationsUsageInstallationRaw(requestParameters: ApplicationsUsageInstallationRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/installation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TrackedApplicationInstallToJSON(requestParameters.trackedApplicationInstall),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces
     * /applications/usage/installation [POST]
     */
    async applicationsUsageInstallation(requestParameters: ApplicationsUsageInstallationRequest): Promise<void> {
        await this.applicationsUsageInstallationRaw(requestParameters);
    }

    /**
     * This is an endpoint to determine when an application has been updated 
     * /applications/usage/updated [POST]
     */
    async postApplicationsUsageUpdatedRaw(requestParameters: PostApplicationsUsageUpdatedRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/applications/usage/updated`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TrackedApplicationUpdateToJSON(requestParameters.trackedApplicationUpdate),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is an endpoint to determine when an application has been updated 
     * /applications/usage/updated [POST]
     */
    async postApplicationsUsageUpdated(requestParameters: PostApplicationsUsageUpdatedRequest): Promise<void> {
        await this.postApplicationsUsageUpdatedRaw(requestParameters);
    }

}