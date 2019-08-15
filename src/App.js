import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Search from './components/Search/Search';
import RatingSearch from './components/RatingSearch/RatingSearch';
import Movie from './components/Movie/Movie';
import FormModal from './components/FormModal/FormModal';
import './App.css';

export class App extends Component {
  constructor(){
    super();
    this.state = {movies:[
      {
        name : "star wars",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
        rating : 4,
        show : true
      },
      {
        name : "constantine",
        image : "http://scd.rfi.fr/sites/filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aef_image/gettyimages-567926005_0.jpg",
        rating : 3,
        show : true
      }
    ]
    }
  }

  hideSearchMovieByNameHandler = (pattern)=>{
    if(pattern === ""){
      this.setState({
        movies : this.state.movies.map(el=>{
          el.show = true;
          return el;
        })
      })
    }else{
      this.setState({
        movies : this.state.movies.map(el=>{
          if(el.name.toUpperCase().indexOf(pattern.toUpperCase())=== -1)
            el.show = false;
            return el;
        })
      })
    }
    
  }

  hideSearchMovieByRatingHandler = (rating)=>{
    this.setState({
      movies : this.state.movies.map(el=>{
        if (el.rating < rating) {
          el.show = false;  
        }else{
          el.show = true;
        }
        return el;
        
      })
    })
  }

  addMovieHandler = (elem)=>{
    this.setState({movies : this.state.movies.concat(elem)});
  }

  modifMovieHandler = (elem,id)=>{
    this.setState({
      movies : this.state.movies.map((el,i)=>{
        if(i===id){
          el = elem;
        }
        return el;
      })
    });
  }
  render() {
    return (
      <Container className="mt-4">
        <Row className="mt-3 mb-5">
          <Col xs={8}>
            <Search search={this.hideSearchMovieByNameHandler}/>
          </Col>
          <Col xs={4}>
            <RatingSearch search={this.hideSearchMovieByRatingHandler}/>
          </Col>
        </Row>
        <Row>
          {this.state.movies.filter(elem=>elem.show).map((elem,i)=><Movie modif={this.modifMovieHandler} elemIndex={i} key={i} source={elem.image} title={elem.name} rating={elem.rating} />)}
          <FormModal add={this.addMovieHandler}/>
        </Row>
      </Container>
    )
  }
}

export default App

