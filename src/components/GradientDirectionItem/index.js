import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, changeDirection} = props
  const onChangeDirection = () => {
    changeDirection(details.value)
  }
  return (
    <li key={details.directionId}>
      <Button type="button" active={isActive} onClick={onChangeDirection}>
        {details.displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
