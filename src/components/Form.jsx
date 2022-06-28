import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="text">
            Nome:
            <input type="text" data-testid="name-input" />
          </label>
          <label htmlFor="textarea">
            Descricão:
            <input type="textarea" data-testid="description-input" />
          </label>
          <label htmlFor="number1">
            Attr1:
            <input type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="number2">
            Attr2:
            <input type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="number3">
            Attr3:
            <input type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="text">
            Imagem:
            <input type="text" data-testid="image-input" />
          </label>
          <label htmlFor="select">
            Raridade:
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            {' '}
            <label htmlFor="checkbox">
              Super Trybe Trunfo
              <input type="checkbox" data-testid="trunfo-input" />
            </label>
            <button type="submit" data-testid="save-button">Salvar</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
