# tl;dr

On [Apache CouchDB](http://couchdb.apache.org/):

```
couchapp push . http://user:pass@couchdb-host.example.com:5984/db-name
```

Or on [Cloudant](http://cloudant.com/):

1. sign-up
2. create a database
3. generate API Key/Secret (see *Permission* for the DB)
4. ...see below...

```
couchapp push . http://apiKey:apiSecret@username.cloudant.com/db-name
```
