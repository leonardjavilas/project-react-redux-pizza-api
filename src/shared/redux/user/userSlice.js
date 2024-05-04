import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAddress } from '../../services/apiGeocoding'

// configuramos el initialState for user
const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, _action) => {
        state.address = 'loading'
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position
        state.address = action.payload.address
        state.status = 'idle'
      })
      .addCase(fetchAddress.rejected, (state, _action) => {
        state.status = 'error'
        state.error =
          'There was a problem getting your address. Make sure to fill this field!'
      }),
})

export const { updateName } = userSlice.actions

export default userSlice.reducer

// utils functions
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

// actions async with redux thunk
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition()
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    }

    // 2) Then we use geocoding API to get a description of the user's address and others data
    const addressObj = await getAddress(position)
    const address = `${addressObj?.locality}, ${addressObj?.city}, ${addressObj?.countryName}`

    // 3) Then we return an object with data that we are interested in.
    // PAYLOAD of the FULFILLED state
    return { position, address }
  },
)
