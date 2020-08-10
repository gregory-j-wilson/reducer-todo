export const ADD_NEW_TODO = 'ADD_NEW_TODO'

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const FILTER_TODOS = 'FILTER_TODOS'


export const initialState = {
    todo: [

        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987587
        },

        {
            item: 'PRACTICE JAVASCRIPT',
            completed: false,
            id: 3892987588
        },

        {
            item: 'Relax a little',
            completed: false,
            id: 3892987589
        }

    ]
}


export const reducer = (state, action) => {
    switch(action.type) {

        case ADD_NEW_TODO:

            return {...state, todo: [...state.todo, action.payload ] 
              }
        
        case TOGGLE_TODO:

            return {
                ...state, 
                todo: state.todo.map(item => {
                    if (item.id === action.payload.id) {
                      return {
                        ...item,
                        completed: !item.completed
                      };
                    } else {
                      return item;
                    }
                  })
            }

        case FILTER_TODOS:

            return {
                ...state,
                todo: state.todo.filter(item => {
                    if (!item.completed) {
                      return item
                    }
                    else {
                      return null
                    }
                  })

            }


        default: 
            return state;
    }
}

