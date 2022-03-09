All things that run the show from the backend are here
1. Schema definition
2. deployment scripts
3. verification / proof code


## Schema fields
what fields do we need to have?
- Name
- username / handle
- bio
- twitter - ID + proof info
- ORCID - ID + proof
- github - ID + proof

## Schema definition
The actual schema that we'll [deploy](https://developers.ceramic.network/tools/glaze/deploy-from-cli/) as a TileDocument to ceramic testnet

```
    {
        "$schema":"http://json-schema.org/draft-07/schema#",
        "title":"DeSci DID alpha-0.1",
        "type":"object",
        "properties":{
            // Important stuff here
        }
    }
```

# Walkthrough
> Following this: https://developers.ceramic.network/tools/glaze/example/

First off, install packages
```
npm install @ceramicnetwork/http-client @glazed/datamodel @glazed/did-datastore dids key-did-provider-ed25519 key-did-resolver uint8arrays
npm install --dev @glazed/devtools
```

Then run `create-model.mjs`
```
node --experimental-json-modules create-model.mjs
```

# Documentation
- `create-model.mjs` - imports JSON schema from `schema.json` and deploys schema as a ceramic document, getting back relevant schemaID in `model.json`
- `run.mjs` - executed after create-model.mjs, this interacts with the previously deployed schema - fetches previously written DID document, and writes a new one
