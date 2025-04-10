/**
 * Represents the configuration file that will be loaded on runtime.
 * This file contains important settings for making the app work as
 * intended.
 */
export interface env_config {
    /**
     * Is true if the server should use https and therefore use the
     * certificates and keys for encrypting the data.
     */
    use_https: boolean;

    /**
     * The specified port that the server will operate at.
     */
    port: number;

    /**
     * The absolute path to the location where all the resources
     * will be stored. These will include the static files generated
     * by vue for the vue app as well as other static files, ex: images.
     */
    resources_absolute_path: string;

    /**
     * The absolute path of the albums that will be used in the image
     * gallery on the website.
     */
    albums_absolute_path: string;

    /**
     * An object that contains all the configurations done for the
     * cryptography part of the server.
     */
    cryptography_config: cryptography_config;

    /** 
     * Google configuration.
     */
    google_config: google_config;
}

/**
 * Represents the configuration object for the cryptography specified
 * details. This is required due to the server running on HTTPS.
 */
export interface cryptography_config {
    /**
     * The absolute path to the folder where the certificate and key
     * is stored. For use in encrypting the data that is sent over
     * to the server.
     */
    folder_absolute_path: string;

    /**
     * The name of the certificate used. Ex: certificate1.cer, certificate1.pem
     */
    certificate_name: string;

    /**
     * The name of the key used. Ex: key1.cer, key1.pem
     */
    key_name: string;
}

/**
 * Config for the use of the google api.
 */
export interface google_config {
    /**
     * When using the google api the app does requests on behalf of this service account.
     */
    service_account: google_service_account;

    /**
     * The calendar id for use in retrieving events.
     */
    event_calendar_id: string;
}

/**
 * Interface for the google service account.
 */
export interface google_service_account {
    type: string,
    project_id: string,
    private_key_id: string,
    private_key: string,
    client_email: string,
    client_id: string,
    auth_uri: string,
    token_uri: string,
    auth_provider_x509_cert_url: string,
    client_x509_cert_url: string,
    universe_domain: string
};