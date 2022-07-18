import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';
import TestComponent from './learn/component';
import Comments from './demo/comments';
import Todo from './demo/todo';
import { useEffect } from 'react';
const testclass= {
  color: "#666"
}
let show = false

function showMessage(message) {
  show = !show
  console.log(show);
  // console.log(e);
  console.log(message);
}

function App() {
  useEffect(() => {
   let res
   async function test() {
     res = await fetch('https://www.fastmock.site/mock/a373bc4295742a91ec188c9d769e0f2d/test/message')
     console.log(res)
     console.log(123);
   }
   test()
  },[])
  return (
    <div className="App">
      <header className={classNames("App-header")}>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={testclass}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => showMessage('的萨芬士大夫')}>显示message</button>
        {show ? <span>我是message</span> : null}
        <Comments/>
        {/* {showdefH(2)} */}
        {/* {
          peopleList.map((item,index) => {
            return (<div key={index}>
           
                <li>{item.name}</li>
                <hr/>
              </div>
            )
          })
        } */}
        <TestComponent/>
        <Todo></Todo>
      </header>
      
    </div>
  );
}

export default App;
