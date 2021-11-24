import * as H from './styles'

interface HeaderProps {
    title: string
}

export const Header = ({title}: HeaderProps) => {
    return (
        <H.Container>
            <h1>{title}</h1>
        </H.Container>
    )
}