/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

/**
 * A JSON interface to save information
 * about the props the "Home" component
 * accepts.
 */
interface HomeProps{
    baseUrl: string,
    appName: string,
    guideHeading: string,
    submitButtonLabel: string,
    guideText: string,
    failureHeading: string,
    successHeading: string,
    nameLabel: string,
    linkLabel: string,
    failureMessage: string
    linkPrefix: string,
    loadingColor: string,
    errorColor: string,
    successColor: string,
}
export type { HomeProps };

/**
 * A JSON interface to save information
 * about the receieved link object.
 */
interface LinkObj {
    name: string,
    date_time: string,
    link_url: string,
    shasum: string,
    id: string
}
export type { LinkObj };

/**
 * A JSON interface to save information
 * about the props the "Heading" component
 * accepts.
 */
interface HeadingProps {
    name: string
}
export type { HeadingProps };

/**
 * A JSON interface to save information
 * about payload for posting a link.
 */
interface LinkPostPayload {
    name: string,
    link: string,
    time: string
}
export type { LinkPostPayload }

/**
 * A JSON interface to save information
 * about the props the "Pretext" component
 * accepts.
 */
interface PretextProps {
    heading: string,
    pretext: string
}
export type { PretextProps };

/**
 * A JSON interface to save information
 * about the props the "Status" component
 * accepts.
 */
interface StatusProps {
    statusHeading: string,
    statusText: string,
    color: string
}
export type { StatusProps };

/**
 * A JSON interface to save information
 * about the props of the "RetrieveData" 
 * component.
 */
interface RetrievalProps {
    loadingColor: string,
    loadingStatusHeading: string,
    loadingStatusText: string,
    errorLoadingHeading: string,
    errorLoadingText: string,
    errorColor: string,
    baseUrl: string,
    name: string,
    heading: string,
    pretext: string,
    linkLabel: string,
    timeSubmitted: string,
    shaLabel: string,
    idLabel: string,
    visitLabel: string,
}
export type { RetrievalProps };

/**
 * A JSON interface to save information
 * about the props of the "Link" 
 * component.
 */
interface LinkProps {
    name: string,
    linkLabel: string,
    link: string,
    timeSubmitted: string,
    time: string,
    shaLabel: string,
    idLabel: string,
    visitLabel: string
    id: string
}
export type { LinkProps };