// api geocoding backend
import { API_URL_GEO } from '../constants/constants'

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `${API_URL_GEO}?latitude=${latitude}&longitude=${longitude}`,
  )

  if (!res.ok) throw new Error('Failed to get address')

  const data = await res.json()

  return data
}
