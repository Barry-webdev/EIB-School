import { type SchemaTypeDefinition } from 'sanity';
import activite from "./activite";
import actualite from './actualite';
import album from './album'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [actualite, activite, album],
}
