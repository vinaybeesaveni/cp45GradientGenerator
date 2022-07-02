import styled from 'styled-components'

export const UnorderedList = styled.ul`
  padding: 0;
  margin-top: 25px;
  list-style: none;
  width: 68%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
export const Button = styled.button`
  background-color: #ededed;
  color: black;
  border: none;
  width: 120px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 15px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  cursor: pointer;
`
