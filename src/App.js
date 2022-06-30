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
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,

    } = this.state;

    const maxCard = 90;
    const maxSoma = 210;

    if (cardName.length === 0) { return true; }
    if (cardDescription.length === 0) { return true; }
    if (cardImage.length === 0) { return true; }
    if (cardRare === ' ') { return true; }
    if (Number(cardAttr1) < 0 || Number(cardAttr1) > maxCard) { return true; }
    if (Number(cardAttr2) < 0 || Number(cardAttr2) > maxCard) { return true; }
    if (Number(cardAttr3) < 0 || Number(cardAttr3) > maxCard) { return true; }
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxSoma) {
      return true;
    }
    return false;
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
      buttonDisabled,
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
          isSaveButtonDisabled={ buttonDisabled }
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
