/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing all static
// layout variables from
// the configuration file.
import {
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
} from '../config.ts';

// Importing the "Home" component 
// for the main home page.
import { Home } from './home.tsx';

// Importing the "Route" component
// for making separate routes.
import { Route } from 'react-router';

// Importing the "Routes" component
// for grouping routes.
import { Routes } from 'react-router';

// Importing the "BrowserRouter" component
// for managing a group of routes.
import { BrowserRouter } from "react-router";

// Importing the "RetrieveData" component
// for rendering links with a certain ID.
import { RetrieveData } from './retrieve.tsx';

// Importing the "createRoot" function to
// create the root at the document's body.
import { createRoot } from 'react-dom/client';

// Calling the "render" function 
// on the document's body to render
// the app.
createRoot(document.body).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
       <Home 
        baseUrl={baseUrl} 
        appName={appName} 
        nameLabel={nameLabel} 
        linkLabel={linkIdLabel} 
        guideHeading={guideHeading} 
        submitButtonLabel={submitButtonLabel} 
        guideText={guideText} 
        failureHeading={failureHeading} 
        successHeading={successHeading} 
        failureMessage={failureMessage} 
        linkPrefix={linkPrefix}
        />
      }/>
        <Route path="/:id" element={
         <RetrieveData 
          name={appName}
          baseUrl={baseUrl}
          pretext={pretext}
          heading={heading}
          shaLabel={shaLabel}
          idLabel={linkIdLabel}
          linkLabel={linkLabel}
          errorColor={errorColor}
          visitLabel={visitLabel}
          loadingColor={loadingColor}
          timeSubmitted={timeSubmitted}
          errorLoadingText={errorLoadingText}
          loadingStatusText={loadingStatusText}
          errorLoadingHeading={errorLoadingHeading}
          loadingStatusHeading={loadingStatusHeading}          
          />
        }/>
    </Routes>
  </BrowserRouter>
);