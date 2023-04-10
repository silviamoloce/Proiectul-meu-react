import './ExpenseItem.css'

function ExpenseItem() {
  return( 
  <div className='expense-item'>
    <div>8.04.2023</div>
    <div className='expense-item__description'>Biscuiti Sucre</div>
    <div className='expense-item__price'>$3</div>
  </div>);
}

export default ExpenseItem
