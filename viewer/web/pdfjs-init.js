'use strict';

// nb. After making changes to this file, the copy in the viewer/web/ dir
// must be updated.

// Listen for `webviewerloaded` event to configure the viewer after its files
// have been loaded but before it is initialized.
//
// PDF.js >= v2.10.377 fires this event at the parent document if it is embedded
// in a same-origin iframe. See https://github.com/mozilla/pdf.js/pull/11837.
try {
  parent.document.addEventListener('webviewerloaded', onViewerLoaded);
} catch (err) {
  // Parent document is cross-origin. The event will be fired at the current
  // document instead.
  document.addEventListener('webviewerloaded', onViewerLoaded);
}

function onViewerLoaded() {
  // Wait for the PDF viewer to be fully initialized and then load the Hypothesis client.
  PDFViewerApplication.initializedPromise.then(() => {
    const embedScript = document.createElement('script');
    embedScript.src = 'https://hypothes.is/embed.js';
    document.body.appendChild(embedScript);
  });
}
