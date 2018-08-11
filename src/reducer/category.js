let initialState = [];

export default (state = initialState, action) => {


  let { type, payload } = action;

  console.log('in reducer');
  console.log({ type });
  console.log({ payload });

  switch (type) {

    case 'CATEGORY_CREATE': return [...state, payload];

    case 'CATEGORY_UPDATE': return state.map(category => {
      if (category.id === payload.id) {
        payload.editing = false;
        return payload;
      } else {
        return category;
      }
    });

    case 'CATEGORY_DESTROY': return state.filter(category => category.id !== payload.id);

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