const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado;', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para `saveCartItems`.', async () => {
    await saveCartItems('<ol><li>Item</li></ol>'); 
    expect(localStorage.setItem).toHaveBeenCalledWith("cartItems", "<ol><li>Item</li></ol>");
  })
  });
