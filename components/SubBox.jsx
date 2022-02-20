import styled from 'styled-components'

import Image from 'next/image'

const SubBoxDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 1em;
    `
const Text = styled.p`
    font-size: 1.5em;
    margin-left: 1em;
    `

const Box = props => {
    return(
        <SubBoxDiv>
            <Image src={props.image} height='50' width='50' styles='filter: grayscale(100%);' />
            <Text>{props.text}</Text>
        </SubBoxDiv>
    )
};

export default Box;