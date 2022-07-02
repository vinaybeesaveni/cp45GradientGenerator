import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`
export const MainHeading = styled.h1`
  color: white;
  font-size: 27px;
  font-weight: 400;
  text-align: center;
  max-width: 300px;
`
export const Para = styled.p`
  color: #ededed;
  font-size: 20px;
`
export const UnorderedList = styled.ul`
  padding: 0;
  margin-top: 25px;
  list-style: none;
  width: 68%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
  }
`

export const Button = styled.button`
  background-color: #00c9b7;
  color: black;
  border: none;
  width: 120px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-top: 30px;
  cursor: pointer;
`
export const Pick = styled.p`
  color: #ededed;
  font-size: 25px;
  margin-top: 0;
`
export const MainInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 63%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
  @media screen and (min-width: 992px) {
    width: 20%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  @media screen and (min-width: 768px) {
    height: 100px;
  }
`
export const LabelPara = styled.p`
  color: white;
`
export const Input = styled.input`
  background-color: ${props => props.bgColor};
  width: 80px;
  height: 40px;
  border: none;
  cursor: pointer;
`
