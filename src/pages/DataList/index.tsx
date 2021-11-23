import {useContext} from 'react'
import {ProdContext} from '../../contexts/ProductContext'
import * as C from './styles';

export const DataList = () => {

    const {produtos} = useContext(ProdContext)
    console.log('joaao', produtos);
    

    return (
        <C.Container>
            
        </C.Container>
    )
}