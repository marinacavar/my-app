import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './components/login/login';
import Registration from './components/register/register';
import Home from './components/home-page/index';
import Welcome from './components/welcome/welcome';
import Categories from './components/categories/categories';
import ToDoList from './components/todo/todo-list';
import Navbar from './components/navbar/navbar';
//  fetch('https://jsonplaceholder.typicode.com/todos/1')
      //  .then(response => response.json())
      //  .then(json => console.log(json))

const App: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [id, postaviId] = useState(1);
  const [podatak, postaviPodatak] = useState({
    body: "",
    id: null,
    title: "",
    userId: null,
  });
  function dohvatiPodatke() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => postaviPodatak(data));
      
  }

function idPromjena(e: React.ChangeEvent<HTMLInputElement>) {
  const value = Number(e.target.value);
  if (value >= 1 && value <= 100) {
    postaviId(value);
  }
}

useEffect(() => {
  dohvatiPodatke();
}, [id]);


  const handleLogin = (userEmail: string) => {
    setEmail(userEmail);
  };

  const handleLogout = () => {
    setEmail(null);
    
  };

  return (
    <>
     {/* <div> */}
 {/* <button onClick={dohvatiPodatke}>Dohvati</button> */}
 {/* </div> */}
 {/* <h1>Dohvat podataka</h1> */}
 {/* <label htmlFor='broj'>Unesi ID poruke:</label> */}
 {/* <input */}
{/* //  onChange={idPromjena} */}
{/* //  type='number' */}
{/* //  min={1} */}
{/* //  max={100} */}
{/* //  value={id} */}
  {/* // id='broj' */}
{/* //  ></input> */}
 {/* <h3>{podatak.title}</h3> */}
 {/* <p>{podatak.body}</p> */}
 <Router>
   {email && <Navbar email={email} onLogout={handleLogout} />}
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login onLogin={handleLogin} />} />
     <Route path="/register" element={<Registration />} />
     <Route path="/welcome" element={<Welcome />} />
     <Route path="/categories" element={<Categories />} />
     <Route path="/todo-list" element={<ToDoList />} />
   </Routes>
 </Router>
    </>
  );
};

export default App;