import React, { Component } from 'react';
import DigimonCard from "./components/DigimonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import digimon from "./digimon.json";



class App extends Component {
    
    state = {
      digimon,
      selected: [],
      Score: 0,
      TopScore: 0
    };

    shuffleArray = array => {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    digimonSelect = key => {
      let val = this.state.Score;
      if(this.state.selected.indexOf(key) === -1){
        val++
        this.state.selected.push(key);
      if (this.state.Score >= this.state.TopScore){
        this.setState({
          TopScore: (this.state.Score + 1)
        })
      }
      this.setState({
        Score: val
      })
    }else{
      console.log("no")
      this.setState({
        Score: 0,
        selected: []
      })
    }
    };
    render() {
        const shuffledDigimon = this.shuffleArray(this.state.digimon);
        return (
            <Wrapper>
            <Title><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8906595b-0440-4480-85fc-fa5129fa1d9c/d7pa8gd-2ae6a265-22f2-403d-b4f5-8e4945390721.png/v1/fill/w_1024,h_1024,strp/digimon_tamers_icon_by_bazookatone_d7pa8gd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzg5MDY1OTViLTA0NDAtNDQ4MC04NWZjLWZhNTEyOWZhMWQ5Y1wvZDdwYThnZC0yYWU2YTI2NS0yMmYyLTQwM2QtYjRmNS04ZTQ5NDUzOTA3MjEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eu7mKDoqo-T3CyZnJLwO22pwkqv4ZTNwYzWLIgaDkhA" height="200" width="200"/>igimon List Score: {this.state.Score} Top Score: {this.state.TopScore}</Title>
                {shuffledDigimon.map(digimon => (
                  <DigimonCard
                  id={digimon.id}
                  name={digimon.name}
                  image={digimon.image}
                  digimonSelect={this.digimonSelect}
                />
                ))}

            </Wrapper>
        );
    }
}

export default App;
