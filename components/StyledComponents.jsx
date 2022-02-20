import styled, { css } from 'styled-components'

export const Page = styled.section`
    ${props =>
        props.justify
        ? css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            background-color: #532C1E;
            `
        : css`
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #653A2A;
            `
        }
    ${props =>
        props.textcenter
        ? css`
            text-align: center;
            background-color: #774936;
        `
        : css`
            text-align: initial;
            `
        }
    ${props =>
        props.contact
        ? css`
            background-color: #411D13
    `
        : css`
    `
}
    `

export const Profic = styled.div`
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    background-image: url('/images/Wajah.jpg');
    background-size: 100%;
    margin-top: 2.5em;
    `

export const PageTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    margin-top: 1em;
    margin-bottom: 0;
    `
export const SectionTitle = styled.h2`
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    `

export const Blurbs = styled.p`
    font-weight: 500;
    font-family: "Times New Roman", Times, serif;
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 3em;
    `