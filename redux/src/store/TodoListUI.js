import React, {Component} from 'react'
import {Input, Button, List} from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{marginleft: '10px', marginTop: '10px'}}>
    <div>
    <Input value={props.inputValue} placehold="todo info" style={{width: '300px', marginRight:'10px'}}
      onChange={props.handleChange}
    />
    <Button type="primary" onClick={props.BtnClick}>提交</Button>
    </div>
    <List
      style={{marginTop:'10px', width: '300px'}}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={props.state.list}
      renderItem={(item, index) => (
        <List.Item onClick={() => {props.handleItemDelete(index)}}>
          {item}
        </List.Item>
      )}
    >
    </List>
    </div>
  )
}
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{marginleft: '10px', marginTop: '10px'}}>
//         <div>
//         <Input value={props.inputValue} placehold="todo info" style={{width: '300px', marginRight:'10px'}}
//           onChange={props.handleChange}
//         />
//         <Button type="primary" onClick={props.BtnClick}>提交</Button>
//         </div>
//         <List
//           style={{marginTop:'10px', width: '300px'}}
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={props.state.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => {props.handleItemDelete(index)}}>
//               {item}
//             </List.Item>
//           )}
//         >
//         </List>
//       </div>
//     )
//   }
// }

export default TodoListUI