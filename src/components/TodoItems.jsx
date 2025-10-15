import './CSS/TodoItems.css'
import cross from './assets/cross.png'
import nottick from './assets/not_tick.png'
import tick from './assets/tick.png'


const TodoItems = ({no, display, text, setTodos}) => {

  const deleteItem = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((todo) => todo.no !== no)
    setTodos(data);
  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"))
    for (let i = 0; i < data.length; i++){
      if (data[i].no === no){
        if(data[i].display === ""){
          data[i].display = "line-through";
        }
        else{
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display === "" ? <img src={nottick} alt="not_tick" /> : <img src={tick} alt="tick" />}
        <div className='todoitems-text'>{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={() => {deleteItem(no)}} src={cross} alt="cross"/>
    </div>
  )
}

export default TodoItems