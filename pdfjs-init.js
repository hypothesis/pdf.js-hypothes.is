'use strict';

// Note: This file is not transpiled. For IE 11 compatibility, it must only
// use ES5 language features.
//
// This script can however assume that some ES2015+ library features, eg.
// Promises, will already have been polyfilled as PDF.js uses them.

// Listen for `webviewerloaded` event to configure the viewer after its files
// have been loaded but before it is initialized.
document.addEventListener('webviewerloaded', function(event) {
  var appOptions = window.PDFViewerApplicationOptions;
  var app = window.PDFViewerApplication;

  // Ensure that PDF.js viewer events such as "documentloaded" are dispatched
  // to the DOM. The client relies on this.
  appOptions.set('eventBusDispatchToDOM', true);

  // Disable preferences support, as otherwise this will result in `eventBusDispatchToDOM`
  // being overridden with the default value of `false`.
  appOptions.set('disablePreferences', true);

  // Wait for the PDF viewer to be fully initialized and then load the Hypothesis client.
  //
  // This is required because the client currently assumes that `PDFViewerApplication`
  // is fully initialized when it loads. Note that "fully initialized" only means
  // that the PDF viewer application's components have been initialized. The
  // PDF itself will still be loading, and the client will wait for that to
  // complete before fetching annotations.
  //
  var pdfjsInitialized = new Promise(function (resolve) {
    // Poll `app.initialized` as there doesn't appear to be an event that
    // we can listen to.
    var timer = setInterval(function () {
      if (app.initialized) {
        clearTimeout(timer);
        resolve();
      }
    }, 20);
  });

  pdfjsInitialized.then(function () {
    // Prevent PDF.js' `Promise` polyfill, if it was used, from being
    // overwritten by the one that ships with Hypothesis (both from core-js).
    //
    // See https://github.com/hypothesis/via/issues/81#issuecomment-531121534
    if (typeof Promise === 'function' && typeof PromiseRejectionEvent === 'undefined') {
      window.PromiseRejectionEvent = function FakePromiseRejectionEvent(type, options) {
        // core-js doesn't actually use this, it just tests for `typeof PromiseRejectionEvent`
        console.warn('Tried to construct fake `PromiseRejectionEvent`');
      };
    }

    // Load the Hypothesis client.
    var embedScript = document.createElement('script');
    embedScript.src = 'https://hypothes.is/embed.js';
    document.body.appendChild(embedScript);
  });
});
