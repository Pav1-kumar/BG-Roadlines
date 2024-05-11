import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.invoice_number}</h4>
      <p><strong> Vehicle Number : </strong>{workout.vehicle_number}</p>
      <p><strong>Customer Code : </strong>{workout.customer_code}</p>

      <p><strong> Customer Name : </strong>{workout.customer_name}</p>
      <p><strong>Quantity(MT) : </strong>{workout.quantity}</p>
      <p><strong>PerTon Fright(INR) : </strong>{workout.perTon_fright}</p>
      <p><strong>Fright(INR) : </strong>{workout.fright}</p>
      <p><strong>Shortage(INR) : </strong>{workout.shortage}</p>
      <p><strong> Damage(INR) : </strong>{workout.damage}</p>
      <p><strong>Net Amount(INR) : </strong>{workout.net_amount}</p>
      



      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails