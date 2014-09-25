# PDF.js + Hypothes.is on your site

Thanks to the kind folks in the [Mozilla PDF.js project](http://github.com/mozilla/pdf.js)
we've put together a simple PDF viewing (via PDF.js) and annotating
(via Hypothes.is) web app.

## Try it out!

Clone this repo, then...
```
cd pdf.js+hypothes.is
cd viewer
# if you're on a Mac, do...
python -m SimpleHTTPServer & open http://localhost:8000/web/viewer.html
# if you're not, open your browser to that URL, and just run
python -m SimpleHTTPServer
```

The sample PDF should render and Hypothes.is comment bubble icon should be
visible in the top right corner.

## Viewing Your Own PDF's

The `viewer.html` file supports a `file` query parameter, so requesting a
different PDF hosted under this same domain, looks like this:

```
http://localhost:8000/web/viewer.html?file=%2Fyourpdf.pdf
```

`%2F` is the URL escaped form of `/`--so this assumes you have a `yourpdf.pdf`
file hosted at `http://localhost:8000/`

Loading PDF's from other URL's will require the use of a
[CORS Proxy](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#can-i-load-a-pdf-from-another-server-cross-domain-request)
...sadly.

## Annotating

1. Click the comment bubble icon in the top right.
2. Click the "Sign in" link.
3. Sign in or click the "Create an account" tab.
4. Annotate!

## License

PDF.js and the viewer bits (in `build` and `web`) are licensed under the
Apache License 2.0.

Hypothes.is embed.js is currently loaded from the live web service, so there's
no additional licensing needed (checkout the [hypothesis/h](http://github.com/hypothesis/h)
project if you'd like to host your own (`h` is BSD licensed).
