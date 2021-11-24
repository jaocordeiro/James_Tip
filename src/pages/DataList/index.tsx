import {useContext} from 'react'
import {ProdContext, ProdutoProps} from '../../contexts/ProductContext'
import {Theme} from '../../components/Theme'
import * as C from './styles';
import { Link } from 'react-router-dom';

export const DataList = () => {

  const {produtos, deleteProduto} = useContext(ProdContext)

  const handleDeleteProduto = (id:string) => {
    deleteProduto(id)
  }

  return (
    <Theme title='Lista de Registros'>
      <C.Container>
        <C.CreateList>
          <C.ActionList>
            <C.Actions>Produto</C.Actions>
            <C.Actions>Valor</C.Actions>
            <C.Actions>Categoria</C.Actions>
            <C.Actions>Código</C.Actions>
            <C.Actions>Fornecedor</C.Actions>
            <C.Actions>Ações</C.Actions>
          </C.ActionList>
          {produtos.map((produto:ProdutoProps) => 
            <C.ItemList key={produto.cdProduto}>
              <C.BlockList>
                {produto.nomeProduto}
              </C.BlockList>
              <C.BlockList>
                {produto.vlProduto}
              </C.BlockList>
              <C.BlockList>
                {produto.ctProduto}
              </C.BlockList>
              <C.BlockList>
                {produto.cdProduto}
              </C.BlockList>
              <C.BlockList>
                {produto.nomeFornecedor}
              </C.BlockList>
              <Link to={"/editregister/"+produto.cdProduto}
                style={{
                  height: '30px',
                  width: '50px',
                  backgroundColor: '#34a1ff',
                  color: '#000000',
                  outline: '0',
                  border: '2px solid #084da2',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '5px'
                }}
              >
                Editar
              </Link>
              <C.Button
                onClick={()=> handleDeleteProduto(produto.cdProduto)}
                style={{
                  height: '30px',
                  width: '50px',
                  backgroundColor: '#ff3c00',
                  color: '#000000',
                  outline: '0',
                  border: '2px solid #ff0e0e',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '5px'
                }}
              >
                Delete
                </C.Button>
            </C.ItemList> 
          )}
        </C.CreateList>
      </C.Container>
    </Theme>  
    )
}