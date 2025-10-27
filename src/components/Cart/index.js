import {Component} from 'react'

import {ChoiceButton, ChoiceImage} from '../../styledComponents'

class Cart extends Component {
  buttonClicked = () => {
    const {details, buttonClick} = this.props
    const {id} = details
    buttonClick(id)
  }

  render() {
    const {details} = this.props
    const {id, imageUrl} = details
    const data = id.toLowerCase()
    return (
      <ChoiceButton
        type="button"
        data-testid={`${data}Button`}
        onClick={this.buttonClicked}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    )
  }
}
export default Cart
