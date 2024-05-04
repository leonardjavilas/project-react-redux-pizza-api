import { API_URL_PIZZA } from '../constants/constants'

// abstraction functions
// get menu pizzas
export async function getMenu() {
  const res = await fetch(`${API_URL_PIZZA}/menu`)

  if (!res.ok) throw new Error('Failed to get menu')

  const { data } = await res.json()

  return data
}

// create order
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL_PIZZA}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) throw Error()
    const { data } = await res.json()
    return data
  } catch (err) {
    throw new Error('Failed to create order')
  }
}

// get order by id
export async function getOrder(id) {
  const res = await fetch(`${API_URL_PIZZA}/order/${id}`)

  if (!res.ok) throw new Error("Couldn't find order #${id}")

  const { data } = await res.json()

  return data
}

// update order by id
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL_PIZZA}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) throw Error()
    return res
  } catch (err) {
    throw Error('Failed to update order')
  }
}
