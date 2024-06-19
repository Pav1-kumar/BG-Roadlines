import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  
  const [invoice_number, setInvoice_number] = useState('')
  const [vehicle_number, setVehicle_number] = useState('')
  const [customer_code, setCustomer_code] = useState('')
  const [customer_name, setCustomer_name] = useState('')
  const [quantity, setQuantity] = useState('')
  const [perTon_fright, setPerTon_fright] = useState('')
  const [fright, setFright] = useState('')
  const [shortage, setShortage] = useState('')
  const [damage, setDamage] = useState('')
  const [net_amount, setNet_amount] = useState('')
  const [date, setDate] = useState('')
  
  
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {date, invoice_number, vehicle_number, customer_code, customer_name, quantity, perTon_fright, fright, shortage, damage, net_amount}

    const response = await fetch('https://bg-roadlines-backend.onrender.com/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setDate('')
      setInvoice_number('')
      setVehicle_number('')
      setCustomer_code('')
      setCustomer_name('')
      setQuantity('')
      setPerTon_fright('')
      setFright('')
      setShortage('')
      setDamage('')
      setNet_amount('')
      
  
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Make an Entry</h3>

<label>Date:</label>
      <input 
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className={emptyFields.includes('date') ? 'error' : ''}
      />
    

<label>Invoice Number:</label>
      <input 
        type="text"
        onChange={(e) => setInvoice_number(e.target.value)}
        value={invoice_number}
        className={emptyFields.includes('invoice_number') ? 'error' : ''}
      />

<label>Vehicle Number:</label>
      <input 
        type="text"
        onChange={(e) => setVehicle_number(e.target.value)}
        value={vehicle_number}
        className={emptyFields.includes('vehicle_number') ? 'error' : ''}
      />

<label>Customer Code:</label>
      <input 
        type="text"
        onChange={(e) => setCustomer_code(e.target.value)}
        value={customer_code}
        className={emptyFields.includes('customer_code') ? 'error' : ''}
      />

<label>Customer Name:</label>
      <input 
        type="text"
        onChange={(e) => setCustomer_name(e.target.value)}
        value={ customer_name}
        className={emptyFields.includes('customer_name') ? 'error' : ''}
      />

<label>Quantity(MT):</label>
      <input 
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        className={emptyFields.includes('quantity') ? 'error' : ''}
      />

<label>PerTon Fright(INR):</label>
      <input 
        type="number"
        onChange={(e) => setPerTon_fright(e.target.value)}
        value={perTon_fright}
        className={emptyFields.includes('perTon_fright') ? 'error' : ''}
      />

<label>Fright(INR):</label>
      <input 
        type="number"
        onChange={(e) => setFright(e.target.value)}
        value={fright}
        className={emptyFields.includes('fright') ? 'error' : ''}
      />

<label>Shortage(INR):</label>
      <input 
        type="number"
        onChange={(e) => setShortage(e.target.value)}
        value={shortage}
        className={emptyFields.includes('shortage') ? 'error' : ''}
      />

<label>Damage(INR): </label>
      <input 
        type="number"
        onChange={(e) => setDamage(e.target.value)}
        value={damage}
        className={emptyFields.includes('damage') ? 'error' : ''}
      />

<label> Net Amount(INR):</label>
      <input 
        type="number"
        onChange={(e) => setNet_amount(e.target.value)}
        value={net_amount}
        className={emptyFields.includes('net_amount') ? 'error' : ''}
      />

      <button>Add Vehicle</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
