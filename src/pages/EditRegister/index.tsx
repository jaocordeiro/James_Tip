import React, {useState, useContext} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {ProdContext, ProdutoProps} from '../../contexts/ProductContext'
import * as C from './styles';

import {Theme} from '../../components/Theme'
import {Input} from '../../components/Input/inputs'

export const EditRegister = () => {

  const {editProduto, produtos} = useContext(ProdContext)
  const {id} = useParams()

  let produto:ProdutoProps = produtos.filter((produto:ProdutoProps)=> produto.cdProduto === id)[0]

  const [nomeProduto, setNomeProduto] = useState(produto.nomeProduto)
  const [categoriaProd, setCategoriaProd] = useState(produto.ctProduto)
  const [codigoProd, setCodigoProd] = useState(produto.cdProduto)
  const [nomeFornecedor, setNomeFornecedor] = useState(produto.nomeFornecedor)
  const [valorProduto, setValorProduto] = useState(produto.vlProduto)
  const [err, setErr] = useState(false)
  
  const navigation = useNavigate()
  
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nomeProduto || categoriaProd || codigoProd || nomeFornecedor || valorProduto) { 
      editProduto(id,{
        cdProduto: codigoProd,
        ctProduto: categoriaProd,
        nomeProduto: nomeProduto,
        nomeFornecedor: nomeFornecedor,
        vlProduto: valorProduto,
      })
      navigation('/list')
      clearInput()
    } else {
      setErr (err)
    }
  }

  function clearInput() {
    setNomeProduto("");
    setCategoriaProd("");
    setCodigoProd("");
    setNomeFornecedor("");
    setValorProduto(0);
}

  return (
    <Theme title='Editar Produto'>
      <C.Container>
        <C.NameProd>
          Editar Produto
        </C.NameProd>
        <C.Form onSubmit={handleSubmit}>
          <Input 
              label="Código do Produto" 
              id="cdProduto" 
              value={codigoProd} 
              handleChangeInput={setCodigoProd}
              name="cdProd"
          />
            {err["cdProd"] && (
              <C.Span>{err["cdProd"]}"Teste"</C.Span>
            )}
            <Input 
              label="Nome Produto" 
              id="nomeProduto" 
              value={nomeProduto} 
              handleChangeInput={setNomeProduto}
              name="nomeProd"
            />
            {err["nomeProd"] && (
              <span>{err["nomeProd"]}</span>
            )}
            <Input 
              label="Categoria Produto" 
              id="ctProduto" 
              value={categoriaProd} 
              handleChangeInput={setCategoriaProd}
              name="ctProd"
            />
            {err["ctProd"] && (
              <span>{err["ctProd"]}</span>
            )}
            <Input 
              label="Nome do Fornecedor" 
              id="NomeFornecedor" 
              value={nomeFornecedor} 
              handleChangeInput={setNomeFornecedor}
              name="nameForn"
            />
            {err["nameForn"] && (
              <span>{err["nameForn"]}</span>
            )}
            <Input 
              label="Valor do Produto" 
              id="vlProduto" 
              value={valorProduto} 
              handleChangeInput={setValorProduto}
              name="vlProd"
            />
            {err["vlProd"] && (
              <span>{err["vlProd"]}</span>
            )}
          <C.Button>Salvar</C.Button>
        </C.Form>
      </C.Container>
    </Theme>  
  )
}