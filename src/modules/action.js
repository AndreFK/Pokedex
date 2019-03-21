const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
};
// actions
const createItem = (name, image, Type1, Type2, Height, Weight, Gender, Catch) => ({
  type: Types.CREATE_ITEM,
  payload: {name, image, Type1, Type2, Height, Weight, Gender, Catch}
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id
});

export default {
  createItem,
  deleteItem,
  Types
};
