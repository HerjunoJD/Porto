import styled, { css } from "styled-components";

const BodyText = styled.p`
    opacity: 0;
    font-size: x-small;
    text-align: left;
    `

const CardDiv = styled.div`
  ${props =>
    props.bg
      ? css`
          background-image: radial-gradient(
                189.96% 351.18% at 10% 70%,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0.1) 8%,
                #08090a 99.74%
            ),
            url(${props.bg});
          &:hover {
            background-image: radial-gradient(
                189.96% 61.18% at 50% 38.82%,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.7) 73.22%,
                #08090a 99.74%
              ),
              url(${props.bg});
          }
        `
      : css`
          background-image: url('/img/download.jpg');
          background-position: center;
          &:hover {
            background-image: radial-gradient(
                189.96% 61.18% at 50% 38.82%,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.9) 73.22%,
                #08090a 99.74%
              ),
              url(${props.bg});
          }
        `}
  padding: 20px;
  background-size: cover;
  margin: 0.75rem;
  cursor: pointer;
  color: white;
  width: 25vw;
  height: 25vh;
  border-radius: 2em;
  &:hover ${BodyText} {
    opacity: 1;
  }
`

const Title = styled.h3`
    margin: 0;
    font-size: 1em;
    text-align: left;
    `

const PortoBox = props => {
    return(
        <>
            <a href={props.href}>
                <CardDiv bg={props.bg}>
                    <Title>{props.title}</Title>
                    <BodyText>
                        {props.project}
                        <br />
                        {props.tools}
                        <br />
                        {props.role}
                    </BodyText>
                </CardDiv>
            </a>
        </>
    )
}

export default PortoBox;