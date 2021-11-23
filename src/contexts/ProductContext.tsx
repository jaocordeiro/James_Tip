import {createContext, useState, ReactNode} from "react";

interface ProdutoProps {
    cdProduto: string;
    ctProduto: string;
    nomeProduto: string;
    nomeFornecedor: string;
    vlProduto: number;
}

interface ProdComponentProps {
    children: ReactNode;
}

export const ProdContext = createContext <any>(undefined)

export const ProdComponent = ({children}: ProdComponentProps) => {
    const [produtos, setProdutos] = useState <ProdutoProps[]>([])
console.log('Context', produtos);

    let addProduto = (produto: ProdutoProps) => {
        setProdutos((oldProducts) => ([...oldProducts, produto]))
    }

    return (
        <ProdContext.Provider value={{produtos, addProduto}}>
            {children}
        </ProdContext.Provider>
    )
}
