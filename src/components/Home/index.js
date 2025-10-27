import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import Cart from '../Cart'

import {
  GameContainer,
  UpperCard,
  FirstCard,
  SecondCard,
  MiddleCard,
  LastCard,
  Button,
  ModalContainer,
  CloseButtonContainer,
  Image,
  Score,
  ChoiceImage,
  ResultsCard,
  NewCard,
  ExtraCard,
} from '../../styledComponents'

class Home extends Component {
  state = {score: 0, gamesCard: true, currentId: '', opponentId: '', result: ''}

  buttonClick = id => {
    const {choicesList} = this.props
    const random = Math.floor(Math.random() * choicesList.length)
    const opponentId = choicesList[random].id
    let result = ''
    if (id === opponentId) {
      result = 'IT IS DRAW'
    } else if (
      (id === 'ROCK' && opponentId === 'SCISSORS') ||
      (id === 'PAPER' && opponentId === 'ROCK') ||
      (id === 'SCISSORS' && opponentId === 'PAPER')
    ) {
      result = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else {
      result = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
    this.setState({
      gamesCard: false,
      currentId: id,
      opponentId,
      result,
    })
  }

  playAgain = () => {
    this.setState({
      gamesCard: true,
      currentId: '',
      opponentId: '',
      result: '',
    })
  }

  renderLower = () => {
    const {choicesList} = this.props
    const {gamesCard, opponentId, currentId, result} = this.state
    const opponentChoice = choicesList.find(each => each.id === opponentId)
    const choice = choicesList.find(each => each.id === currentId)
    const currentImageUrl = choice ? choice.imageUrl : ''
    const opponent = opponentChoice ? opponentChoice.imageUrl : ''
    return (
      <>
        {gamesCard ? (
          choicesList.map(eachItem => (
            <Cart
              key={eachItem.id}
              details={eachItem}
              buttonClick={this.buttonClick}
            />
          ))
        ) : (
          <>
            <ResultsCard>
              <ExtraCard>
                <NewCard>
                  <p>YOU</p>
                  <ChoiceImage src={currentImageUrl} alt="your choice" />
                </NewCard>
                <NewCard>
                  <p>OPPONENT</p>
                  <ChoiceImage src={opponent} alt="opponent choice" />
                </NewCard>
              </ExtraCard>
              <NewCard>
                <p>{result}</p>
                <Button onClick={this.playAgain}>PLAY AGAIN</Button>
              </NewCard>
            </ResultsCard>
          </>
        )}
      </>
    )
  }

  render() {
    const {score} = this.state
    return (
      <GameContainer>
        <UpperCard>
          <FirstCard>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </FirstCard>
          <SecondCard>
            <p>Score</p>
            <Score>{score}</Score>
          </SecondCard>
        </UpperCard>
        <MiddleCard>{this.renderLower()}</MiddleCard>
        <LastCard>
          <Popup modal trigger={<Button type="button">RULES</Button>}>
            {close => (
              <>
                <ModalContainer>
                  <CloseButtonContainer>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine />
                    </button>
                  </CloseButtonContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              </>
            )}
          </Popup>
        </LastCard>
      </GameContainer>
    )
  }
}
export default Home
