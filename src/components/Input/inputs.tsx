import React from 'react'
import * as I from './styles'

interface PropsInput {
    label: string;
    id: string;
    value: any;
    handleChangeInput: React.Dispatch<React.SetStateAction<any>>
}

export const Input = ({label, id, value, handleChangeInput}: PropsInput) => {
    return (
        <I.BoxInput>
            <I.Label htmlFor={id}>{label}</I.Label>
            <I.Input id={id} value={value} onChange={({target}) => handleChangeInput(target.value)} />
        </I.BoxInput>
    )
}