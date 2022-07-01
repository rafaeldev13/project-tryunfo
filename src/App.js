import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [],
    };
  }

  hasTrunfo = () => {
    const { newCard } = this.state;
    return newCard.some((element) => element.cardTrunfo);
  }

  onSaveButtonClick = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
    } = this.state;

    const cards = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      newCard: [...prevState.newCard, cards],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }),
    () => this.setState({
      hasTrunfo: this.hasTrunfo(),
    }));
  };

  InputChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : target.value,
    }, this.buttonDisabled);
  }

  buttonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const scoreCard = 90;
    const maxScore = 210;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if ((cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0)
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 <= scoreCard
      && cardAttr2 <= scoreCard
      && cardAttr3 <= scoreCard
      && (sum <= maxScore)) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
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
      hasTrunfo,
      newCard,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.InputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <section>
          {newCard.map((param1, param2) => (
            <Card
              key={ param2 }
              cardName={ param1.cardName }
              cardDescription={ param1.cardDescription }
              cardAttr1={ param1.cardAttr1 }
              cardAttr2={ param1.cardAttr2 }
              cardAttr3={ param1.cardAttr3 }
              cardImage={ param1.cardImage }
              cardRare={ param1.cardRare }
              cardTrunfo={ param1.cardTrunfo }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
