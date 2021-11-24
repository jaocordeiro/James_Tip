import React from 'react'
import * as I from './styles'

interface PropsInput {
    label: string;
    id: string;
    value: any;
    name: string;
    handleChangeInput: React.Dispatch<React.SetStateAction<any>>;
}

export const Input = ({label, id, value, name, handleChangeInput}: PropsInput) => {
    return (
        <I.BoxInput>
            <I.Label htmlFor={id}>{label}</I.Label>
            <I.Input 
                id={id} 
                value={value} 
                name={name} 
                onChange={({target}) => handleChangeInput(target.value)}
                autoComplete='off'
            />
        </I.BoxInput>
    )
}