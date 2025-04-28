import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import { toast } from 'react-toastify'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.find((item) => item.id === action.payload.id)) {
        state.itens.push(action.payload)
        toast.success(`${action.payload.nome} adicionado ao carrinho!`)
      } else {
        toast.warning(`${action.payload.nome} já está no carrinho!`)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
