
import React, { Component } from "react";
import "./App.css"


class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleValidation() {
    if (this.state.email === 'eduardo.lino@pucpr.br' && this.state.password === '123456') {
      this.setState({ message: 'Acessado com sucesso!' });
    } else {
      this.setState({ message: 'Usuário ou senha incorretos!' });
    }
  }


  render(){
      return(
        <section>
          <h1 className="titulo">Login</h1>
            <form className="form">
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </form>
          <button className="botao" onClick={this.handleValidation}>Acessar</button>
          <label className="mensagem">{this.state.message}</label>     
         </section>
  );
  }}

export default Login;