/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// General variables.
export const baseUrl: string = 'http://127.0.0.1:8080';

// Variables for the screen allowing
// users to submit a link.
export const appName: string = 'MOCHA';
export const nameLabel: string = 'Name';
export const linkIdLabel: string = 'Link';
export const linkPrefix: string = 'Link ID';
export const guideHeading: string = 'Guide';
export const failureHeading: string = 'Error';
export const submitButtonLabel: string = 'Submit';
export const successHeading: string = 'Link saved!';
export const failureMessage: string = 'Please try again later';
export const guideText: string = 'Fill the "Name" field with a name and put the link\'s URL into the "Link" field. Click "Submit" to save your link.';

// Variables for the screen showing data
// about a retrieved link.
export const linkLabel: string = 'Link';
export const heading: string = 'Link Info';
export const errorColor: string = '#FF5733';
export const shaLabel: string = 'SHA-256 Sum';
export const loadingColor: string = '#F5F5EC';
export const visitLabel: string = 'Visit Link';
export const errorLoadingHeading: string = 'Error';
export const timeSubmitted: string = 'Time submitted';
export const loadingStatusHeading: string = 'Loading';
export const loadingStatusText: string = 'Your content is loading.';
export const errorLoadingText: string = 'Your content could not be loaded.';
export const pretext: string = 'Here you can see the information about the submitted link.';

// Exporting everything.
export default {
    baseUrl,
    pretext,
    appName,
    heading,
    shaLabel,
    guideText,
    linkLabel,
    nameLabel,
    errorColor,
    visitLabel,
    linkPrefix,
    linkIdLabel,
    loadingColor,
    guideHeading,
    timeSubmitted,
    failureHeading,
    successHeading,
    failureMessage,
    errorLoadingText,
    loadingStatusText,
    submitButtonLabel,
    errorLoadingHeading,
    loadingStatusHeading
};