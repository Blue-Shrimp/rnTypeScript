import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const sliceName = 'main'

type stateType = {
  myLocation: { latitude: number; longitude: number }
  markerDatas: []
  loading: boolean
  error: { code: string; message: string }
}

const initialState: stateType = {
  myLocation: {
    latitude: 37.498095,
    longitude: 127.02751,
  },
  markerDatas: [],
  loading: false,
  error: {
    code: '200',
    message: '',
  },
}

const reducers = {
  setMyLocation: (state = initialState, action: PayloadAction<{ latitude: number; longitude: number }>) => {
    state.myLocation = action.payload
  },

  setMarkerDatas: (state = initialState, action: PayloadAction<[]>) => {
    state.markerDatas = action.payload
  },

  // fetchLocationList: (state, { payload }) => {
  //   state.loading = true
  // },

  setLoading: (state = initialState, action: PayloadAction<boolean>) => {
    state.loading = action.payload
  },

  setError: (
    state = initialState,
    action: PayloadAction<{
      code: string
      message: string
    }>,
  ) => {
    state.error = action.payload
  },
}

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers,
})

export const states = (state: any) => state[sliceName]
export const actions = slice.actions
export const reducer = slice.reducer
