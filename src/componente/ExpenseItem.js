import './ExpenseItem.css'

function ExpenseItem(props) {

  return( 
  <div className='expense-item'>
    <div>{expenseDate.toISOString}</div>
    <div className='expense-item__description'>{props.titlu}</div>
    <div className='expense-item__price'>{props.pret}</div>
  </div>);
}

export default ExpenseItem
