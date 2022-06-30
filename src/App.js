import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  isSaveButtonDisabled = () => {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const totalCard = Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3);
    const maxCard = 90;
    const maxTotal = 210;
    if (
      cardName !== ''
      && cardImage !== ''
      && cardDescription !== ''
      && Number(cardAttr1) <= maxCard
      && Number(cardAttr1) >= 0
      && Number(cardAttr2) <= maxCard
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) <= maxCard
      && Number(cardAttr3) >= 0
      && totalCard <= maxTotal
    ) {
      return false;
    } return true;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
