import React from 'react';

import './index.css';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

    wikiSearchReturnValues: [],
      wikiSearchTerms: ''
    }

  }


  useWikiSearchEngine = (e) => {

    e.preventDefault();

    this.setState({
      wikiSearchReturnValues: []
    });

    const pointerToThis = this;
    // console.log(this);

    
   
var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "search",
    srsearch: "Nelson Mandela",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        if (response.query.search[0].title === "Nelson Mandela"){
            console.log("Your search page 'Nelson Mandela' exists on English Wikipedia" );
        }
    })
    .catch(function(error){console.log(error);});


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
    <input type="text" value={this.state.WikiSearchTerms} onChange={this.changeWkikiSearchTerm} placeholder='Search WIKIPEDIA Articles' />

    <button type="submit" onClick={this.useWikiSearchEngine}>SEARCH</button>

    {wikiSearchResults}



    </form>
    </div>
  );



   }


 
}

export default App;
