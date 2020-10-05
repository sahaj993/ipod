import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>IPod</h1>
      <div className='container'>
        <div className='container-circle'>
          <div className='menu'>MENU</div>
          <div className='reverse'/><img alt='rev' src='https://www.flaticon.com/svg/static/icons/svg/1073/1073804.svg'/>
          <div className='forward'/><img alt='for' src='https://www.flaticon.com/svg/static/icons/svg/1073/1073796.svg'/>
          <div className='play'/><img alt='play' src='https://www.flaticon.com/svg/static/icons/svg/1073/1073777.svg'/>
          <div className='circle'/>
        </div>
      </div>
    </div>
  );
}

export default App;
