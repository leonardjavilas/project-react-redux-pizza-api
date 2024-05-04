import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import { deleteItem } from '../../../shared/redux/cart/cartSlice'

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch()

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  )
}

export default DeleteItem
