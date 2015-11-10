# PDF.js + Hypothes.is on your site

This is an "out of the box" [PDF.js Viewer]((http://github.com/mozilla/pdf.js)) with these changes:
 - added the `<script src="https://hypothes.is/embed.js" ...></script>` code
 - customized the `viewer.js` code to generate a `rel="canonical"`--as the
   viewer URL will differ from your PDF's URL, but they should both show the
   same annotations.

The project is entirely static HTML, JS, and CSS. Enjoy!

## When to use this code

There are times when the Hypothes.is browser extension (or the [Hypothes.is Via proxy](http://via.hypothes.is/)
can't "reach" the PDF in a page because it's served in an `<iframe>` or `<embed>` tag. This code can be
hosted alongside your PDF's to provide the necessary viewer environment and directly embed Hypothes.is,
so that it can be used within the `<iframe>` to annotate the PDF.

Simply serve the `viewer.html?file=` URL's mentioned below via the `<iframe src="">` in your CMS, site, or code.

## Try it out!

Clone this repo, then...
```
# Navigate to the project's root directory
cd pdf.js+hypothes.is
# If using Python 2, start a simple HTTP server...
python -m SimpleHTTPServer
# ...or if using Python 3
python -m http.server 8000
# if you're on a Mac, do...
open http://localhost:8000/web/viewer.html
# if you're not, open your browser to that URL
```

The sample PDF should render and the Hypothes.is comment bubble icon should be
visible in the top right corner.

## Viewing Your Own PDF's

The `viewer.html` file supports a `file` query parameter, so requesting a
different PDF hosted under this same domain, looks like this:

```
http://localhost:8000/web/viewer.html?file=%2Fyourpdf.pdf
```

`%2F` is the URL escaped form of `/`--so this assumes you have a `yourpdf.pdf`
file hosted at `http://localhost:8000/`

## License

PDF.js and the viewer bits (in `build` and `web`) are licensed under the
Apache License 2.0.

Hypothes.is embed.js is currently loaded from the live web service, so there's
no additional licensing needed (checkout the [hypothesis/h](http://github.com/hypothesis/h)
project if you'd like to host your own (`h` is BSD licensed).
