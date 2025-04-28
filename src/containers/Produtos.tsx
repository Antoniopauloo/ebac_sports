import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'
import { useAppSelector } from '../store/hooks'

type ProdutosProps = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  adicionarAoCarrinho,
  favoritar
}: ProdutosProps) => {
  const { itens: favoritosRedux } = useAppSelector((state) => state.favoritos)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritosRedux.some((f) => f.id === produto.id)}
          aoComprar={adicionarAoCarrinho}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
