import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

  return( 
  <div className='expense-item'>
    <ExpenseDate data={props.data}></ExpenseDate>
    <div className='expense-item__description'>{props.denumire}</div>
    <div className='expense-item__price'>{props.suma}</div>
  </div>
  );
}

export default ExpenseItem;
