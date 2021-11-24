import {createContext, useState, ReactNode} from "react";

export interface ProdutoProps {
  cdProduto: string;
  ctProduto: string;
  nomeProduto: string;
  nomeFornecedor: string;
  vlProduto: number | string;
}

interface ProdComponentProps {
  children: ReactNode;
}

export const ProdContext = createContext <any>(undefined)

export const ProdComponent = ({children}: ProdComponentProps) => {

  const [produtos, setProdutos] = useState <ProdutoProps[]>(()=> {
    let itensSave: null | string = localStorage.getItem('storeageProd')
      if(itensSave) return JSON.parse(itensSave)
      return[]
  })

  let addProduto = (produto: ProdutoProps) => {
    setProdutos((oldProducts) => {
      let newsProds = [...oldProducts, produto]
      localStorage.setItem('storeageProd', JSON.stringify(newsProds))
      return newsProds
    } )
  }

  let editProduto = (cdProduto:string, produto:ProdutoProps) => {
    setProdutos((oldProducts) => {
      let indexProd = oldProducts.findIndex((produto:ProdutoProps) => produto.cdProduto === cdProduto)
        oldProducts.splice(indexProd, 1, produto)
        localStorage.setItem('storeageProd', JSON.stringify(oldProducts))
          return oldProducts
    } )
  }
  
  let deleteProduto = (cdProduto:string) => {
    setProdutos((oldProducts) => {
      let deleteProd = oldProducts.filter((produto:ProdutoProps) => produto.cdProduto !== cdProduto)
        localStorage.setItem('storeageProd', JSON.stringify(deleteProd))
          return deleteProd
    } )
  }

  return (
    <ProdContext.Provider value={{produtos, addProduto, deleteProduto, editProduto}}>
      {children}
    </ProdContext.Provider>
  )
}
