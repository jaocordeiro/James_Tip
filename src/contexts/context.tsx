import {createContext, ReactNode, useContext, useReducer} from 'react'

type State = {
  cdProduto: string;
  ctProduto: string;
  nomeProduto: string;
  nomeFornecedor: string;
  valorProduto: number;
}

type Action = {
  type: FormActions;
  payload: any;
}

type ContextType ={
  state: State;
  dispatch: (action: Action) => void;
}

type FormProviderProps = {
  children: ReactNode;
}

const initialData: State = {
  cdProduto: '',
  ctProduto: '',
  nomeProduto: '',
  nomeFornecedor: '',
  valorProduto: 0,
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined)

//Reducer
export enum FormActions {
  setCdProduto,
  setCtProduto,
  setNomeProduto,
  setNomeFornecedor,
  setVlProduto
}
const Reducer = (state: State, action: Action) => {
  switch(action.type) {
    case FormActions.setCdProduto:
      return {...state, cdProduto: action.payload}
    case FormActions.setCtProduto:
      return {...state, ctProduto: action.payload}
    case FormActions.setNomeProduto:
      return {...state, nomeProduto: action.payload}
    case FormActions.setNomeFornecedor:
      return {...state, nomeFornecedor: action.payload}
    case FormActions.setVlProduto:
      return {...state, valorProduto: action.payload}
    default:
        return state;
  }
}

//Provider
export const Provider = ({children}: FormProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, initialData)
  const value = {state, dispatch};

  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

//Context Hook
export const useForm = () => {
  const context = useContext(FormContext)
  if(context === undefined) {
    throw new Error('useForm deve serutilizado dentro do Provider')
  }
  return context
}