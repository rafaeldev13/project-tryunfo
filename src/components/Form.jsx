import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo, */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="text">
            Nome:
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="textarea">
            Descricão:
            <input
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="number1">
            Attr1:
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="number2">
            Attr2:
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="number3">
            Attr3:
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="text">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="select">
            Raridade:
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            {' '}
            <label htmlFor="checkbox">
              Super Trybe Trunfo
              <input
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
            <button
              type="submit"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </label>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  /* hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
