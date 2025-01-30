# PDF.js viewer with Hypothesis

A web PDF viewer (PDF.js) with Hypothesis added.

This is a copy of Mozilla's [PDF.js
viewer](https://mozilla.github.io/pdf.js/web/viewer.html) with Hypothesis
annotation tools added.

## When to use this project

If you want to embed or link to a PDF on your site with annotation using
Hypothesis enabled, the easiest way is using our proxy server: `https://via.hypothes.is/<PDF URL>`.

For example, to embed a PDF on your site using Hypothesis, you can add an HTML
snippet such as the following to your page:

```html
<iframe width="800" height="600" src="https://via.hypothes.is/https://publisher.com/article.pdf">
</iframe>
```

There are situations where the proxy server may not be suitable:

- If the PDF is not publicly accessible (for example, it is behind a paywall,
  requires a login or is on a corporate intranet)
- If you want to make customizations to the PDF viewer (for example, to add
  custom analytics scripts or change the configuration of the Hypothesis
  client)
- If you are running your own instance of the Hypothesis annotation server

If any of the above apply, this project may be useful.

To use it, add the files from this repository to your site and embed or link to
`viewer/web/viewer.html?file=<PDF URL>`.

## Usage

Clone this repository, then run:

```sh
# Navigate to the project's root directory
cd pdf.js-hypothes.is

# If using Python 2, start a simple HTTP server...
python -m SimpleHTTPServer
# ...or if using Python 3
python -m http.server 8000

# Then run the command below or navigate to the URL in your browser
open http://localhost:8000/viewer/web/viewer.html
```

The default PDF should render and the Hypothesis annotation tools will appear
when you select text.

## Viewing Your Own PDFs

The `viewer/web/viewer.html` file supports a `file` query parameter which
specifies the URL of a PDF to load. This PDF must either be hosted on the same
origin or be served with [appropriate headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
that allow it to be loaded from the viewer's origin.

For example:

```
http://localhost:8000/viewer/web/viewer.html?file=%2Fyourpdf.pdf
```

`%2F` is the URL escaped form of `/`--so this assumes you have a `yourpdf.pdf`
file hosted at `http://localhost:8000/`

## License

The PDF.js files in `viewer/` are licensed under the Apache License 2.0.

The Hypothesis annotation tools are loaded from the public service at
https://hypothes.is, so there's no additional licensing needed. See the
[hypothesis/h](http://github.com/hypothesis/h) project if you'd like to host
your own.

## Updating PDF.js

The `tools/update-pdfjs.py` script can be used to update PDF.js to a newer version.

**Warning:** New PDF.js releases may have changes that make them incompatible
with the Hypothesis client. Be sure to test carefully after updating.
