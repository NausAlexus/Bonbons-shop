import { useState, useEffect } from "react";
import "./Form.css";
import { RxCross1 } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";
import { InputMask } from '@react-input/mask';

const Form = ({
  deliveryOption,
  FormOpen,
  closeForm,
  ItemData,
  totalPrice,
  getUserData,
  handleDeliveryChange,
  handleSubmit,
  formMessage,
  isFormSubmitted,
}) => {

  const [items, setItems] = useState(ItemData);

  // Синхронизация состояния `items` с `ItemData` при его обновлении
  useEffect(() => {
    setItems(ItemData);
  }, [ItemData]);



  return (
    <>
      <div
        className={`${FormOpen ? "cover-form" : ""}`}
        onClick={closeForm}
      ></div>

      <div className={`Form ${FormOpen ? "form-open" : "form-closed"}`}>
        <RxCross1 className="form-close" onClick={closeForm} />
        <div className="form-container">
        {isFormSubmitted ? ( 
            <p className="form-message-true">{formMessage}</p>
          ) : items.length === 0 ? (
            <div className="form-not-products">
              <MdProductionQuantityLimits />
              <p>Your cart is empty. To place an order, add a product.</p>
            </div>
          ) : (
            <>
              <form className="form-wrapper" action="#" onSubmit={handleSubmit}>
                <h1 className="form-title">
                  Place an order for ${totalPrice.toFixed(2)}
                </h1>
                <input
                  name="name"
                  className="form-input form-user-name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={getUserData}
                  required
                />
                <InputMask
                  name="phone"
                  type="tel"
                  mask="+375(__)-___-__-__" 
                  replacement={{ _: /\d/ }}
                  className="form-input form-user-tel"
                  placeholder="+375(XX)-XXX-XX-XX"
                  title="Enter your phone"
                  onChange={getUserData}
                  required
                />
                <textarea
                  name="comment"
                  className="form-input form-user-text"
                  type="text"
                  placeholder="Add order note"
                  onChange={getUserData}
                />

                <div className="form-radio">
                  <label
                    className={deliveryOption === "pickup" ? "underlined" : ""}
                  >
                    <input
                      type="radio"
                      value="pickup"
                      checked={deliveryOption === "pickup"}
                      onChange={handleDeliveryChange}
                      style={{ display: "none" }} // Скрываем стандартный радио элемент
                    />
                    Pickup
                  </label>
                  <label
                    className={
                      deliveryOption === "delivery" ? "underlined" : ""
                    }
                  >
                    <input
                      type="radio"
                      value="delivery"
                      checked={deliveryOption === "delivery"}
                      onChange={handleDeliveryChange}
                      style={{ display: "none" }} // Скрываем стандартный радио элемент
                    />
                    Delivery
                  </label>
                </div>

                {deliveryOption === "delivery" && (
                  <input
                    name="address"
                    className="form-input form-user-adress"
                    type="text"
                    placeholder="Enter your address"
                    onChange={getUserData}
                    required
                  />
                )}

                <button className="form-submit" type="submit">
                  Design
                </button>
                {formMessage && <p className="form-message">{formMessage}</p>}
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
