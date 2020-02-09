import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

// Klucz do API
const APIKey = "e1e523ab6c59a6828b1c64992db6e7e3";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // handleCitySubmit = e => {
  //   e.preventDefault();
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error("Nie udało się");
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       const time = new Date().toLocaleString();
  //       this.setState(state => ({
  //         date: time,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         err: false,
  //         city: state.value
  //       }));
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState(prevState => {
  //         return {
  //           err: true,
  //           city: prevState.value
  //         };
  //       });
  //     });
  // };
  componentDidMount() {
    console.log("zamontowany");
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("poprzednia wartos" + prevState.value);
    // console.log("aktualna wartosc" + this.state.value);
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Nie udało się");
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState(state => ({
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            err: false,
            city: state.value
          }));
        })
        .catch(err => {
          console.log(err);
          this.setState(prevState => {
            return {
              err: true,
              city: prevState.value
            };
          });
        });
    }
  }
  // this.setState({});

  render() {
    return (
      <div className="app">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          // submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
