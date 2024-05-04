import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../../shared/redux/cart/cartSlice'

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  )
}

export default UpdateItemQuantity
