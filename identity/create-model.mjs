import { writeFile } from 'node:fs/promises'
import { CeramicClient } from '@ceramicnetwork/http-client'
import { ModelManager } from '@glazed/devtools'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'
import { fromString } from 'uint8arrays'

import * as scientistSchema from './schema.json'

// set DID_KEY environment variable before running this line
// to do this, run 'glaze did:create' anc copy the result into DID_KEY
const key = fromString(process.env.DID_KEY, 'base16')
// Create and authenticate the DID
const did = new DID({
  provider: new Ed25519Provider(key),
  resolver: getResolver(),
})
await did.authenticate()

// Connect to the local Ceramic node
const ceramic = new CeramicClient('http://localhost:7007')
ceramic.did = did

// Create a manager for the model
const manager = new ModelManager(ceramic)

// Step 1: create a JSON schema
const schemaID = await manager.createSchema('ScientistID', scientistSchema)

console.log(schemaID)

//Step 2: create a definition using the SchemaID
// Create the definition using the created schema ID
await manager.createDefinition('MyID', {
  name: 'My ID',
  description: 'Simple Scientist ID document',
  schema: manager.getSchemaURL(schemaID),
})

//Step 3: create an exampleNote tile using definition
// Create a tile using the created schema ID
await manager.createTile('exampleID',
  { text: 'Vitalik Buterin' },
  { schema: manager.getSchemaURL(schemaID) },
)

//Step 4: publish model to ceramic node, and write model details for later use
// Publish model to Ceramic node
const model = await manager.toPublished()

// Write published model to JSON file
await writeFile('./model.json', JSON.stringify(model))
