import React, {useState, useContext} from 'react';
import {ProdComponent, ProdContext} from '../../contexts/ProductContext'
import * as C from './styles';

import {Input} from '../../components/Input/inputs'

export const ProductRegister = () => {

  const [nomeProduto, setNomeProduto] = useState('')
  const [categoriaProd, setCategoriaProd] = useState('')
  const [codigoProd, setCodigoProd] = useState('')
  const [nomeFornecedor, setNomeFornecedor] = useState('')
  const [valorProduto, setValorProduto] = useState(0)

  const {addProduto} = useContext(ProdContext)
  console.log('Produto',addProduto);
  
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
      addProduto({cdProduto: codigoProd,
      ctProduto: categoriaProd,
      nomeProduto: nomeProduto,
      nomeFornecedor: nomeFornecedor,
      vlProduto: valorProduto})
  }

  return (
    <C.Container>
        <C.NameProd>
          Nome Produto
        </C.NameProd>
        <C.Form onSubmit={handleSubmit}>
          <Input 
            label="Nome Produto" 
            id="NProd" 
            value={nomeProduto} 
            handleChangeInput={setNomeProduto}
          />
          <Input 
            label="Nome Produto" 
            id="NProd" 
            value={categoriaProd} 
            handleChangeInput={setCategoriaProd}
          />
          <Input 
            label="Nome Produto" 
            id="NProd" 
            value={codigoProd} 
            handleChangeInput={setCodigoProd}
          />
          <Input 
            label="Nome Produto" 
            id="NProd" 
            value={nomeFornecedor} 
            handleChangeInput={setNomeFornecedor}
          />
          <Input 
            label="Nome Produto" 
            id="NProd" 
            value={valorProduto} 
            handleChangeInput={setValorProduto}
          />
        <C.Button>Enviar</C.Button>
      </C.Form>
    </C.Container>
  )
}