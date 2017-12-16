import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      cardArray:[
          {
              id: 1,
              img: "/styles/images/amazon.png",
              clicked: 0

          },
          {
              id: 2,
              img: "/styles/images/apple.png",
              clicked: 0
          },
          {
              id: 3,
              img: "/styles/images/facebook.png')",
              clicked: 0
          },
          {
              id: 4,
              img: "/styles/images/google.png')",
              clicked: 0
          },
          {
              id: 5,
              img: "/styles/images/instagram.png')",
              clicked: 0
          },
          {
              id: 6,
              img: "/styles/images/jetbrains.png')",
              clicked: 0
          },
          {
              id: 7,
              img: "/styles/images/microsoft.png')",
              clicked: 0
          },
          {
              id: 8,
              img: "/styles/images/netflix.png')",
              clicked: 0
          },
          {
              id: 9,
              img: "/styles/images/snapchat.png')",
              clicked: 0
          },
          {
              id: 10,
              img: "/styles/images/tesla.png')",
              clicked: 0
          },
          {
              id: 11,
              img: "/styles/images/twitter.png')",
              clicked: 0
          },
          {
              id: 12,
              img: "/styles/images/uber.png')",
              clicked: 0
          }
      ],
      score: 0,
      topScore: 0,
      message: ""
  };

  checkClick = id => {
      for(var i = 0; i < this.state.cardArray.length; i++) {
          if(id === this.state.cardArray[i].id) {
              if(this.state.cardArray[i].clicked === 0) {
                  this.state.cardArray[i].clicked = 1;
                  this.state.message = "Correct!";
                  this.state.score++;
                  if(this.state.score > this.state.topScore) {
                      this.state.topScore = this.state.score;
                  }
                  console.log(this.state.score);
                  this.shuffleCards();
              } else {
                  for(var i=0; i < this.state.cardArray.length; i++) {
                      this.state.cardArray[i].clicked = 0;
                  }
                  this.state.message = "Incorrect!";
                  this.state.score = 0;
                  console.log(this.state.score);
                  this.shuffleCards();
              }
          }
      }
  };

  shuffleCards = () => {
    let newArray = [];
    while(this.state.cardArray.length > 0) {
        var tempArray = this.state.cardArray;
        var randomCard = Math.floor(Math.random()*tempArray.length);
        newArray.push(this.state.cardArray[randomCard]);
        tempArray.splice(randomCard, 1);
    };
    this.setState({cardArray: newArray});
  };


  render() {
    return (
        <div>
            <Navbar score={this.state.score} topscore={this.state.topScore} message={this.state.message} />
            <Header/>
          <Wrapper>
            {this.state.cardArray.map(friend => (
              <Card
                  alt={friend.id}
                  img={friend.img}
                  checkClick={this.checkClick}
                  clicked={friend.clicked}
              />
            ))}
          </Wrapper>
        </div>
    );
  }
}

export default App;
