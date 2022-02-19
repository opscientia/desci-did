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

        }
    }
```
