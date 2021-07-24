import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import  {Icon} from '../icons'

const Icon = styled.Image`
    width:30px;
    height:30px;
    margin:10px;
    tint-color:${()=>{}};
`


const IconButton = ()=>{
    return (
        <TouchableOpacity>
            <View>
                <Icon source={icon} />
            </View>
        </TouchableOpacity>
    )
}

export default IconButton;