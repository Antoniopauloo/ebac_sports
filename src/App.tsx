import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { store } from './store'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './services/api'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { adicionar } from './store/reducers/carrinhoSlice'
import { toggleFavorito } from './store/reducers/favoritosSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const AppContent = () => {
  const { data: produtos = [] } = useGetProdutosQuery()
  const { itens: favoritos } = useAppSelector((state) => state.favoritos)
  const dispatch = useAppDispatch()

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionar(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    dispatch(toggleFavorito(produto))
  }

  return (
    <div className="container">
      <Header />
      <Produtos
        produtos={produtos}
        favoritos={favoritos}
        adicionarAoCarrinho={handleAdicionarAoCarrinho}
        favoritar={handleFavoritar}
      />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContent />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable={false}
        limit={3}
      />
    </Provider>
  )
}

export default App
