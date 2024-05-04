import { useFetcher } from 'react-router-dom'
import Button from '../Button/Button'
import { updateOrder } from '../../../shared/services/apiRestaurant'

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher()

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  )
}

export default UpdateOrder

export async function action({ _request, params }) {
  const data = { priority: true }
  await updateOrder(params.orderId, data)
  return null
}
