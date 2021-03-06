import mongoose from 'mongoose';

const { Schema } = mongoose;

const valoMapSchema = new Schema({
  mapName: String,
  description: String,
  country: String,
  releaseDate: String,
  bombSites: String,
  teleporters: String,
  imageUrl: [String],
});

export type ValoMapDocument = mongoose.Document & {
  mapName: String;
  description: String,
  country: String;
  releaseDate: String;
  bombSites: String;
  teleporters: String;
  imageUrl: String[];
};

export const ValoMap = mongoose.model<ValoMapDocument>('ValoMap', valoMapSchema, 'valomaps');
