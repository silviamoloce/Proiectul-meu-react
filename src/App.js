import ExpenseItem from './componente/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {id: 'e1',
      title: 'Biscuiti Sucre',
      amount: 3,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },

    {id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className='MainDiv'>
    <ExpenseItem 
    denumire={expenses[0].title} 
    suma={expenses[0].amount} 
    data= {expenses[0].date}
    />

    <ExpenseItem denumire={expenses[1].title} suma={expenses[1].amount} data= {expenses[1].date}></ExpenseItem>
    <ExpenseItem denumire={expenses[2].title} suma={expenses[2].amount} data= {expenses[2].date}></ExpenseItem>
    <ExpenseItem denumire={expenses[3].title} suma={expenses[3].amount} data= {expenses[3].date}></ExpenseItem>

    </div>
  

  );
}

export default App;
