import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: rgb(0, 0, 0, 0.05);
    padding: 0;
    margin: 0;
    `
const Box = styled.div`
    margin-left: 1em;
    margin-right: 1em;
    display: flex;
    `

const Text = styled.p`
    font-size: 1.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    `



const WebHeader = props => {
    return(
        <Header>
            <Box>
                <Text>{props.text}</Text>
            </Box>
            <Box>
                <a href='#skills'><Text>Skills</Text></a>
                <a href='#portofolio'><Text>Portofolio</Text></a>
                <a href='#contact'><Text>Contact Me</Text></a>
            </Box>
        </Header>
    )
};

export default WebHeader;