import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const StyledInput = styled.TextInput`
width: ${({width}) => width -40}px;
height:60px;
margin:3px 0;
padding: 15px 20px;
border-radius:10px;
font-size:25px;
background-color:${({theme}) => theme.itemBackground};
color:${({theme})=>theme.main};
`


const Input = ()=>{
    const width = Dimensions.get('window').width;
    return <StyledInput width={width} placeholder={placeholder} />
}

export default Input;