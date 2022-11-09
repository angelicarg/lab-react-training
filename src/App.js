import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  const card2 = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: 'new Date (1992-07-14)',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: 'new Date(1988-05-11)',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  return (
    <div className="App">
      <div>
        <h3>Iteração 1</h3>
        {card2.map((element) => {
          return (
            <IdCard
              picture={element.picture}
              lastName={element.lastName}
              firstName={element.firstName}
              gender={element.gender}
              height={element.height}
              birth={element.birth}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
