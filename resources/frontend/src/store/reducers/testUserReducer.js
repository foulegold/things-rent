

const initialState = { user_id: 1, name: "testUser" }

function testUserReducer(state = initialState, action) {
  switch (action.type) {
    case "q":
      break;

    default:
      return state
  }
}

export default testUserReducer