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
import { EmbeddedModelSchema, SeededPKCEADDITIONALPARAMETERS } from './index';
/**
 * A model that initialized a PKCE Authentication Flow.
 * @export
 * @interface SeededPKCE
 */
export interface SeededPKCE {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededPKCE
     */
    schema?: EmbeddedModelSchema;
    /**
     * Indicates to Auth0 which OAuth 2.0 Flow you want to perform. Use code for Authorization Code Grant (PKCE) Flow.
     * @type {string}
     * @memberof SeededPKCE
     */
    responseType: SeededPKCEResponseTypeEnum;
    /**
     * An opaque value the clients adds to the initial request that Auth0 includes when redirecting the back to the client. This value must be used by the client to prevent CSRF attacks.
     * @type {string}
     * @memberof SeededPKCE
     */
    state: string;
    /**
     * A local key that is held as the comparator to state, thus they should be the same.
     * @type {string}
     * @memberof SeededPKCE
     */
    nonce: string;
    /**
     * http://localhost:8080/authentication/response
     * @type {string}
     * @memberof SeededPKCE
     */
    redirectUri?: string;
    /**
     * Generated challenge from the code_verifier.
     * @type {string}
     * @memberof SeededPKCE
     */
    codeChallenge: string;
    /**
     * Method used to generate the challenge. The PKCE spec defines two methods, S256 and plain, however, Auth0 supports only S256 since the latter is discouraged.
     * @type {string}
     * @memberof SeededPKCE
     */
    codeChallengeMethod: SeededPKCECodeChallengeMethodEnum;
    /**
     * https://auth.pieces.services/authorize
     * @type {string}
     * @memberof SeededPKCE
     */
    domain?: string;
    /**
     * The unique identifier of the target API you want to access.
     * i.e. https://pieces.us.auth0.com/api/v2/
     * @type {string}
     * @memberof SeededPKCE
     */
    audience?: string;
    /**
     * Provides a hint to Auth0 as to what flow should be displayed. The default behavior is to show a login page but you can override this by passing 'signup' to show the signup page instead.
     * @type {string}
     * @memberof SeededPKCE
     */
    screenHint?: SeededPKCEScreenHintEnum;
    /**
     * 	To initiate a silent authentication request, use prompt=none (see Remarks for more info).
     * @type {string}
     * @memberof SeededPKCE
     */
    prompt?: SeededPKCEPromptEnum;
    /**
     *
     * @type {string}
     * @memberof SeededPKCE
     */
    organization?: string;
    /**
     *
     * @type {string}
     * @memberof SeededPKCE
     */
    invitation?: string;
    /**
     * The scopes which you want to request authorization for. These must be separated by a space. You can request any of the standard OpenID Connect (OIDC) scopes about users, such as profile and email, custom claims that must conform to a namespaced format, or any scopes supported by the target API (for example, read:contacts). Include offline_access to get a Refresh Token.
     * @type {Array<string>}
     * @memberof SeededPKCE
     */
    scope: Array<SeededPKCEScopeEnum>;
    /**
     * Your application's Client ID.
     * @type {string}
     * @memberof SeededPKCE
     */
    clientId: string;
    /**
     *
     * @type {SeededPKCEADDITIONALPARAMETERS}
     * @memberof SeededPKCE
     */
    aDDITIONALPARAMETERS?: SeededPKCEADDITIONALPARAMETERS;
    /**
     *
     * @type {string}
     * @memberof SeededPKCE
     */
    responseMode?: SeededPKCEResponseModeEnum;
}
/**
* @export
* @enum {string}
*/
export declare enum SeededPKCEResponseTypeEnum {
    Code = "code",
    Token = "token",
    IdToken = "id_token"
} /**
* @export
* @enum {string}
*/
export declare enum SeededPKCECodeChallengeMethodEnum {
    S256 = "S256"
} /**
* @export
* @enum {string}
*/
export declare enum SeededPKCEScreenHintEnum {
    Signup = "signup"
} /**
* @export
* @enum {string}
*/
export declare enum SeededPKCEPromptEnum {
    Login = "login",
    None = "none"
} /**
* @export
* @enum {string}
*/
export declare enum SeededPKCEScopeEnum {
    OfflineAccess = "offline_access",
    Email = "email",
    Profile = "profile",
    Openid = "openid"
} /**
* @export
* @enum {string}
*/
export declare enum SeededPKCEResponseModeEnum {
    FormPost = "form_post",
    WebMessage = "web_message",
    Fragment = "fragment",
    Query = "query"
}
export declare function SeededPKCEFromJSON(json: any): SeededPKCE;
export declare function SeededPKCEFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededPKCE;
export declare function SeededPKCEToJSON(value?: SeededPKCE | null): any;
