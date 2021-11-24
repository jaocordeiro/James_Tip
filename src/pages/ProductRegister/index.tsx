import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {ProdContext} from '../../contexts/ProductContext'
import * as C from './styles';

import {Theme} from '../../components/Theme'
import {Input} from '../../components/Input/inputs'

export const ProductRegister = () => {

  const [nomeProduto, setNomeProduto] = useState('')
  const [categoriaProd, setCategoriaProd] = useState('')
  const [codigoProd, setCodigoProd] = useState('')
  const [nomeFornecedor, setNomeFornecedor] = useState('')
  const [valorProduto, setValorProduto] = useState('')
  const [err, setErr] = useState({})
  
  const {addProduto} = useContext(ProdContext)
  const navigation = useNavigate()
    
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nomeProduto && categoriaProd && codigoProd && nomeFornecedor && valorProduto !== '') { 
      addProduto({
        cdProduto: codigoProd,
        ctProduto: categoriaProd,
        nomeProduto: nomeProduto,
        nomeFornecedor: nomeFornecedor,
        vlProduto: valorProduto,
      })
      navigation('/list')
      clearInput()
    } else {
      setErr ({
        cdProd: codigoProd ?  '' : 'Preencha o campo Codigo do Produto',
        nomeProd: nomeProduto ?  '' : 'Preencha o campo Nome Produto',
        ctProd: categoriaProd ?  '' : 'Preencha o campo categoria Produto',
        nameForn: nomeFornecedor ?  '' : 'Preencha o campo Fornecedor Produto',
        vlProd: valorProduto ?  '' : 'Preencha o campo Valor Produto',

      })
    }
  }

  function clearInput() {
    setNomeProduto("");
    setCategoriaProd("");
    setCodigoProd("");
    setNomeFornecedor("");
    setValorProduto('');
}

  return (
    <Theme title='Cadastrar Produto'>
      <C.Container>
        <C.NameProd>
          Registrar um produto
        </C.NameProd>
        <C.Form onSubmit={handleSubmit}>
          <Input 
            label="Nome Produto" 
            id="nomeProduto" 
            value={nomeProduto} 
            handleChangeInput={setNomeProduto}
            name="nomeProd"
          />
          {err["nomeProd"] && (
            <C.Span>{err["nomeProd"]}</C.Span>
          )}
          <Input 
            label="Valor do Produto" 
            id="vlProduto" 
            value={valorProduto} 
            handleChangeInput={setValorProduto}
            name="vlProd"
          />
          {err["vlProd"] && (
            <C.Span>{err["vlProd"]}</C.Span>
          )}
          <Input 
              label="Categoria Produto" 
              id="ctProduto" 
              value={categoriaProd} 
              handleChangeInput={setCategoriaProd}
              name="ctProd"
            />
            {err["ctProd"] && (
              <C.Span>{err["ctProd"]}</C.Span>
            )}
          <Input 
              label="Código do Produto" 
              id="cdProduto" 
              value={codigoProd} 
              handleChangeInput={setCodigoProd}
              name="cdProd"
          />
            {err["cdProd"] && (
              <C.Span>{err["cdProd"]}</C.Span>
            )}
            <Input 
              label="Nome do Fornecedor" 
              id="NomeFornecedor" 
              value={nomeFornecedor} 
              handleChangeInput={setNomeFornecedor}
              name="nameForn"
            />
            {err["nameForn"] && (
              <C.Span>{err["nameForn"]}</C.Span>
            )}
          <C.Button>Enviar</C.Button>
        </C.Form>
      </C.Container>
    </Theme>  
  )
}