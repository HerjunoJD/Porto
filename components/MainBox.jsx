import styled, { css } from 'styled-components'

const MainBox = styled.div`
    ${props =>
        props.portofolio
        ? css`
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        height: 50vh;
        margin-top: 5em;
        overflow: auto;
        `
        : css`
        flex-direction: column;
        align-items: flex-start;
        `}
    display: flex;
    padding: 1em;
    margin-bottom: 3em;
    `

export default MainBox;