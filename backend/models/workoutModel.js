const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({

  date : {
    type: Date,
    required: true
  },
  invoice_number : {
    type: Number,
    required: true
  },
  vehicle_number: {
    type: Number,
    required: true
  },
  customer_code: {
    type: Number,
    required: true
  },
  customer_name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  perTon_fright: {
    type: Number,
    required: true
  },
  fright: {
    type: Number,
    required: true
  },
  shortage: {
    type: Number,
    required: true
  },
  damage: {
    type: Number,
    required: true
  },
  net_amount: {
    type: Number,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)