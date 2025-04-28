import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import { toast } from 'react-toastify'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index >= 0) {
        state.itens.splice(index, 1)
        toast.info(`${action.payload.nome} removido dos favoritos`)
      } else {
        state.itens.push(action.payload)
        toast.success(`${action.payload.nome} adicionado aos favoritos!`)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
