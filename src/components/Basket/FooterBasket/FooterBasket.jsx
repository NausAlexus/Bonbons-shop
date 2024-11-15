import "./FooterBasket.css";

const FooterBasket = ({totalPrice, openForm, closeBasket}) => {

  const handleCheckout = () => {
    closeBasket(); // Закрываем корзину
    openForm();    // Открываем форму
  };

  return (
    <>
      <div className="basket-footer">
        <div className="title-basket-footer">
          Taxes and shipping calculated at checkout
        </div>
        <form>
          <button onClick={handleCheckout} className="price-basket-footer" type="button">
            CHECKOUT • {totalPrice.toFixed(2)}$
          </button>
        </form>
      </div>
    </>
  );
};

export default FooterBasket;
