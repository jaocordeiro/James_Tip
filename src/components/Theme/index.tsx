import { ReactNode } from 'react'
import * as T from './styles'
import {Header} from '../Header'
import { Link } from 'react-router-dom'

interface Props {
    children: ReactNode
    title: string
}

export const Theme = ({children, title}: Props) => {
  return (
    <T.Container>
      <T.Area>
        <Header title={title}/>
        <T.Steps>
            <T.Sidebar>
              <Link to="/"
                style={{
                  height: '30px',
                  width: '130px',
                  backgroundColor: '#00b9ff',
                  color: '#000000',
                  marginTop: '30px',
                  outline: '0',
                  border: '2px solid #084da2',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Cadastro
              </Link>
              <Link to="/list"
                style={{
                  height: '30px',
                  width: '130px',
                  backgroundColor: '#00b9ff',
                  color: '#000000',
                  marginTop: '30px',
                  outline: '0',
                  border: '2px solid #084da2',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Ver Produtos
              </Link>
            </T.Sidebar>
            <T.Page>
                {children}
            </T.Page>
        </T.Steps>
      </T.Area>
    </T.Container>
  )
}