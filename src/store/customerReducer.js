const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export const FETCH_USERS = 'FETCH_USERS'
export const SET_USERS = 'SET_USERS'

const defaultState = {
  customers: [],
}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: action.payload }
    case SET_USERS:
      return { ...state, customers: action.payload }
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload,
        ),
      }
    default:
      return state
  }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
})

export const addManyCustomerAction = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
})
export const setUsers = (payload) => ({ type: SET_USERS, payload })

export const fetchUsers = () => ({ type: FETCH_USERS })
