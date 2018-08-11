let initialState = localStorage && localStorage.state && JSON.parse(localStorage.state) || [];

export default (state = initialState, action) => {

  let newState;
  let { type, payload } = action;

  console.log('in reducer');
  console.log({ type });
  console.log({ payload });

  switch (type) {

    case 'CATEGORY_CREATE':
      newState = [...state, payload];
      localStorage.state = JSON.stringify(newState);
      return newState;

    case 'CATEGORY_UPDATE':
      newState = state.map(category => {
        if (category.id === payload.id) {
          payload.editing = false;
          return payload;
        } else {
          return category;
        }
      });
      localStorage.state = JSON.stringify(newState);
      return newState;


    case 'CATEGORY_DESTROY':
      newState = state.filter(category => category.id !== payload.id);
      localStorage.state = JSON.stringify(newState);
      return newState;

    case 'CATEGORY_EDIT': return state.map(category => {
      if (category.id === payload.id) {
        category.editing = true;
      } else {
        category.editing = false;
      }
      return category;
    });

    case 'CANCEL_BUTTON': return state.map(category => {
      if (category.id === payload.id) {
        category.editing = false;
      }
      return category;
    });

    default: return state;
  }
};