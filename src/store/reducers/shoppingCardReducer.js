import {
  SET_LIST,
  SET_PAYMENT,
  SET_ADDRESS,
  SET_LASTSELECTED_ADDRESS,
  DECREASE_LIST,
  FILTERED_PRODUCT,
  CHECKED_PRODUCT,
} from "../actions/shoppingCardActions";

const storedShoppingCard = localStorage.getItem("sepet");

const initialState = {
  card: storedShoppingCard
    ? JSON.parse(storedShoppingCard)
    : [{ count: 0, checked: false, product: {} }],
  payment: {},
  address: [],
  lastSelectedAddres: {}
};

const shoppingCardReducer = (state = initialState, action) => {
  let updatedCard;

  switch (action.type) {
    case SET_LIST:
      const existingProduct = state.card.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct !== -1) {
        updatedCard = [...state.card];
        updatedCard[existingProduct] = {
          ...updatedCard[existingProduct],
          count: updatedCard[existingProduct].count + 1,
        };
      } else {
        updatedCard = [
          ...state.card,
          { count: 1, checked: true, product: action.payload },
        ];
      }
      break;

    case CHECKED_PRODUCT:
      updatedCard = state.card.map((item) => {
        if (item.product.id === action.payload.product.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
      break;

    case DECREASE_LIST:
      const decreasedProduct = state.card.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (decreasedProduct !== -1) {
        updatedCard = [...state.card];
        updatedCard[decreasedProduct] = {
          ...updatedCard[decreasedProduct],
          count:
            updatedCard[decreasedProduct].count - 1 > 1
              ? updatedCard[decreasedProduct].count - 1
              : 1,
        };
      }
      break;

    case FILTERED_PRODUCT:
      updatedCard = state.card.filter(
        (cards) => cards.product.id !== action.payload.id
      );
      break;

    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    case SET_LASTSELECTED_ADDRESS:
      return {
        ...state,
        lastSelectedAddres: action.payload
      };

    default:
      return state;
  }

  localStorage.setItem("sepet", JSON.stringify(updatedCard));

  return {
    ...state,
    card: updatedCard,
  };
};

export default shoppingCardReducer;
