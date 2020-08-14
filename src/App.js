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
    srsearch: "this.state.WikiSearchTerms",
    format: "json"
};

    url = url + '?origin=*';
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];

      });

    fetch(url)
      .then(

        function (response) {
          
          return response.json();
      

        }



    ) 

      .then(

        function (response) {
         // console.log(response.query.search[0].pageid);


          for (var key in response.query.search) {

            pointerToThis.state.wikiSearchReturnValues.push({

              queryResultPageFullURL: 'no link',
              queryResultPageID: response.query.search[key].pageid,
          queryResultPageTitle: response.query.search[key].title,
          queryResultPageSnippet: response.query.search[key].snippet



             });


          }


        }


      )


      .then(

        function (response) {
          for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
    
   // console.log(pointerToThis.state.wikiSearchReturnValues);

  
     let page = pointerToThis.state.wikiSearchReturnValues[key2];
 
   let pageID = page.queryResultPageID;

     let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

  fetch(urlForRetrievingPageURLByPageID)
    .then(

      function (response) {

        return response.json();

      }

  )

    .then(

      function (response) {
    
    page.queryResultPageFullURL = response.query.pages[pageID].fullurl;

      pointerToThis.forceUpdate();


      }

      )



          }



        }


   )

}






  changeWkikiSearchTerm = (e) => {
    this.setState({
      wikiSearchTerms: e.target.value
    });


  }
   
   render() {

    let wikiSearchResults = [];

    // console.log(this.state.wikiSearchReturnValues);

    

     return (
    <div className="App">
     
    <h1>WIKIPEDIA VIEWER</h1>

    <form action="">
      <input type="text" value={this.state.WikiSearchTerms || ''} onChange={this.changeWikiSearchTerms} placeholder='Search Wikipedia Articles' />
          <button type='submit' onClick={this.useWikiSearchEngine}>Search</button>



    </form>

    {wikiSearchResults}


    </div>
  );



   }


 
}

export default App;