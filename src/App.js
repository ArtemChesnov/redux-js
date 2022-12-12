import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  // incrementCreator,
  // decrementCreator,
  asyncIncrementCreator,
  asyncDecrementCreator,
} from './store/countReducer'
import { fetchUsers } from './store/customerReducer'
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer'
import { fetchCustomers } from './asyncActions/customers'
import { Button } from '@mui/material'

function App() {
  const dispatch = useDispatch()

  const count = useSelector((state) => state.countReducer.count)
  const customers = useSelector((state) => state.customers.customers)

  // const AddCash = () => {
  //   dispatch(incrementCreator())
  // }

  // const getCash = () => {
  //   dispatch(decrementCreator())
  // }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{ marginTop: '50px', fontSize: '3rem' }}>{count}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '50px',
          marginBottom: '50px',
        }}
      >
        <Button
          variant="contained"
          onClick={() => dispatch(asyncIncrementCreator())}
        >
          Пополнить счет
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(asyncDecrementCreator())}
        >
          Снять со счета
        </Button>
        <Button variant="contained" onClick={() => addCustomer(prompt())}>
          Добавить клиента
        </Button>
        <Button variant="contained" onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </Button>
        <Button variant="contained" onClick={() => dispatch(fetchUsers())}>
          Получить клиентов из саги
        </Button>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer, idx) => (
            <div key={idx} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Клиенты отсутствуют</div>
      )}
    </div>
  )
}

export default App
