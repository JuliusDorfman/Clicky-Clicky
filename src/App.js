import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import chun_li from "./styles/images/chun_li.png"
import geese_howard from "./styles/images/geese_howard.png"
import heihachi from "./styles/images/heihachi.png"
import king_tekken from "./styles/images/king_tekken.png"
import kingkof from "./styles/images/kingkof.png"
import mbison from "./styles/images/mbison.png"
import morrigan from "./styles/images/morrigan.png"
import ryu from "./styles/images/ryu.png"
import servBot from "./styles/images/servBot.png"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      cardArray:[
          {
              id: 1,
              img: chun_li,
              clicked: 0

          },
          {
              id: 2,
              img: geese_howard,
              clicked: 0
          },
          {
              id: 3,
              img: heihachi,
              clicked: 0
          },
          {
              id: 4,
              img: king_tekken,
              clicked: 0
          },
          {
              id: 5,
              img: kingkof,
              clicked: 0
          },
          {
              id: 6,
              img: mbison,
              clicked: 0
          },
          {
              id: 7,
              img: morrigan,
              clicked: 0
          },
          {
              id: 8,
              img: ryu,
              clicked: 0
          },
          {
              id: 9,
              img: servBot,
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
            <Navbar score={this.state.score} topscore={this.state.topScore}  />
            <Header message={this.state.message}/>
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
