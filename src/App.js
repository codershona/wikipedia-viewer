import React from 'react';

import './index.css';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      wikiSearchTerms: ''
    }

  }


  useWikiSearchEngine = () => {

  }

  changeWkikiSearchTerm = (e) => {
    this.setState({
      wikiSearchTerms: e.target.value
    });


  }
   
   render() {

    let wikiSearchResults = [];

     return (
    <div className="App">
     
    <h1>WIKIPEDIA VIEWER</h1>

    <form action="">
    <input type="text" value='' onChange={this.changeWkikiSearchTerm} placeholder='Search WIKIPEDIA Articles' />

    <button type="submit" onClick={this.useWikiSearchEngine}>SEARCH</button>

    {wikiSearchResults}



    </form>
    </div>
  );



   }


 
}

export default App;
