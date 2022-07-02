import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  MainHeading,
  Para,
  Button,
  Pick,
  UnorderedList,
  MainInputContainer,
  InputContainer,
  LabelPara,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    firstValue: '#8ae323',
    secondValue: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeDirection = value => {
    this.setState({activeDirection: value})
  }

  onFirstValueChange = event => {
    this.setState({firstValue: event.target.value})
  }

  onSecondValueChange = event => {
    this.setState({secondValue: event.target.value})
  }

  generateGradient = () => {
    const {firstValue, secondValue, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${firstValue}, ${secondValue}`,
    })
  }

  render() {
    const {firstValue, secondValue, activeDirection, gradientValue} = this.state

    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Para>Choose Direction</Para>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              isActive={each.value === activeDirection}
              changeDirection={this.changeDirection}
            />
          ))}
        </UnorderedList>
        <Pick>Pick the Colors</Pick>
        <MainInputContainer>
          <InputContainer>
            <LabelPara>{firstValue}</LabelPara>
            <Input
              type="color"
              bgColor={firstValue}
              value={firstValue}
              onChange={this.onFirstValueChange}
            />
          </InputContainer>
          <InputContainer>
            <LabelPara>{secondValue}</LabelPara>
            <Input
              type="color"
              bgColor={secondValue}
              value={secondValue}
              onChange={this.onSecondValueChange}
            />
          </InputContainer>
        </MainInputContainer>
        <Button type="button" onClick={this.generateGradient}>
          Generate
        </Button>
      </MainContainer>
    )
  }
}

export default GradientGenerator
