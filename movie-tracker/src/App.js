import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MovieList from './components/movieList/MovieList';
import NavBar from './components/header/NavBar';
import Footer from './components/footer/footer.Module';
import MovieMetaDataView from './components/movieMetaDataView/MovieMetaDataView';
class App extends Component{

  render(){
    return(
    <BrowserRouter>
        <NavBar/>
        <Route exact path="/" component={MovieList}/>
        <Route exact path="/postermeta" component={MovieMetaDataView}/>
        <Footer />
    </BrowserRouter>
    )
  }
}
export default App;
