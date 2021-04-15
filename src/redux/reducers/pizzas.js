import axios from "axios"


const initialState = {
    items: [],
    isLoaded: false,
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }

        default:
            return state
    }
}

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
  });
  
  export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
      type: 'SET_LOADED',
      payload: false,
    });
  
    axios
      .get(
        `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
          sortBy.order
        }`,
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  };
  
  export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
  })
  
export default pizzas