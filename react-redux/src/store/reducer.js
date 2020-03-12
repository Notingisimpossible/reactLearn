const defaultState = {
  inputValue: 'helloworld',
  list: ['无敌']
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_list') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    newState.inputValue = ""
    return newState
  }
  if (action.type === 'delete_list') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}
