import { ReactNode } from 'react'
import * as T from './styles'
import {Header} from '../Header'

interface Props {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
  return (
    <T.Container>
      <T.Area>
        <Header/>
        <T.Steps>
            <T.Sidebar>
              .......
            </T.Sidebar>
            <T.Page>
                {children}
            </T.Page>
        </T.Steps>
      </T.Area>
    </T.Container>
  )
}