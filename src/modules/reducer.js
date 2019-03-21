import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [
    {id: 0, name:'Bulbasaur',image:'https://cdn.bulbagarden.net/upload/e/ec/001MS.png',Type1:'Grass', Type2:'Poison', Height: 12,Weight: 23,Gender:'M',Catch: '34%'},
    {id: 1, name:'Ivysaur',image:'https://cdn.bulbagarden.net/upload/6/6b/002MS.png',Type1:'Grass', Type2:'Poison',Height: 12, Weight: 23,Gender:'F',Catch: '34%'},
    {id: 2, name:'Venusaur',image:'https://cdn.bulbagarden.net/upload/d/df/003MS.png',Type1:'Grass', Type2:'Poison', Height: 9, Weight: 12,Gender:'M',Catch: '25%'},
    {id: 3, name:'Charmander',image:'https://cdn.bulbagarden.net/upload/b/bb/004MS.png',Type1:'Fire', Type2:'', Height: 8, Weight: 2,Gender:'F',Catch: '21%'},
    {id: 4, name:'Charmeleon',image:'https://cdn.bulbagarden.net/upload/d/dc/005MS.png',Type1:'Fire', Type2:'', Height: 7, Weight: 4,Gender:'M',Catch: '50%'}
  ]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, name: item.name, image: item.image, Type1: item.Type1, Type2: item.Type2, Height: item.Height , Weight: item.Weight, Gender: item.Gender, Catch: item.Catch  };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;