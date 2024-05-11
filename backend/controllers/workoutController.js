const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
  const user_id = req.user._id
  const workouts = await Workout.find({user_id}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'No such workout'})
  }
  
  res.status(200).json(workout)
}


// create new workout
const createWorkout = async (req, res) => {
  const { date,invoice_number, vehicle_number, customer_code, customer_name, quantity, perTon_fright, fright, shortage, damage, net_amount} = req.body

  let emptyFields = []

  if(!date) {
    emptyFields.push('date')
  }
  if(!invoice_number) {
    emptyFields.push('invoice_number')
  }
  if(!vehicle_number) {
    emptyFields.push('vehicle_number')
  }
  if(!customer_code) {
    emptyFields.push('customer_code')
  }
  if(!customer_name) {
    emptyFields.push('customer_name')
  }
  if(!quantity) {
    emptyFields.push('quantity')
  }
  if(!perTon_fright) {
    emptyFields.push('perTon_fright')
  }
  if(!fright) {
    emptyFields.push('fright')
  }
  if(!shortage) {
    emptyFields.push('shortage')
  }
  if(!damage) {
    emptyFields.push('damage')
  }
  if(!net_amount) {
    emptyFields.push('net_amount')
  }

  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const workout = await Workout.create({date,invoice_number, vehicle_number, customer_code, customer_name, quantity, perTon_fright, fright, shortage, damage, net_amount, user_id})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}


module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}