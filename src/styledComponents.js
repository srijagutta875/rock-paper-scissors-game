import styled from 'styled-components'

export const GameContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
export const UpperCard = styled.div`
  border-style: solid;
  border-color: #ffffff;
  border-radius: 5px;
  border-width: 3px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
`
export const FirstCard = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Bree Serif';
`

export const SecondCard = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  font-family: 'Bree Serif';
  align-items: center;
  border-radius: 5px;
  min-width: 200px;
`
export const MiddleCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`

export const LastCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const Button = styled.button`
  height: 30px;
  width: 100px;
  color: #223a5f;
  background-color: #ffffff;
  font-family: 'Bree Serif';
  border-style: none;
  border-radius: 5px;
`
export const ModalContainer = styled.div`
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
`
export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const Image = styled.img`
  height: 60vh;
  width: 60vw;
`
export const Score = styled.p`
  font-family: 'Roboto';
`
export const ChoiceButton = styled.button`
  background-color: transparent;
  border-style: none;
  height: 300px;
  width: 300px;
`
export const ChoiceImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 0px;
`

export const ResultsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
export const ExtraCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
