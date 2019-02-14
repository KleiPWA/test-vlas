import React, { Component, Fragment } from 'react';
import './App.css';
import authorsJSON from './resources/data.json'
import medal from './resources/medals/1st.svg'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      doSearch: []
    };
  }

  render() {
    const authorsList = authorsJSON.map((data, index) =>
      <div className='authorContainer' key={index}>
        <div className='index'> {index + 1} </div>
        <div className='alphabet'> {data.name[0]} </div>
        <div className='nameContainer'>
          <div className='name'>{data.name}</div>
          <div className='count_pub'>{data.count_pub} публ.</div>
        </div>
        <div className='medal'>
          <img alt="medal" src={medal}></img>
        </div>
        <div className='pageViews'>{data.pageviews}</div>
      </div>
    )

    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <div className='main'>
              <div>
                <input id="funkystyling" type="text"
                  placeholder="поиск авторов по имени"
                  value={this.state.query}
                  onChange={this.doSearch} />
              </div>
              {authorsList}
            </div>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default App;
