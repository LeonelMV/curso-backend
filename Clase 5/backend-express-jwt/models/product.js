'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
   name: { type: String, unique: true, lowercase: true, required: true },
   value: { type: Number, select: true, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
