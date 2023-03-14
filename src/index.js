import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Hello extends React.Component {
  // state = {
  //   n: "World"
  // }
  render() {
    return (
      <section>
        <div className='login-sec'>
          <form action="#">
            <h1>Login</h1>
            <div className='input-sec'>
              <input type="text" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className='input-sec'>
              <input type="password" id="psw" required />
              <label htmlFor="psw">Password</label>
            </div>
            <div className='forget-sec'>
              <label htmlFor="rem">
                <input type="checkbox" id="rem" />Remember me 
                <a href="#">Forget Password</a>
              </label>
            </div>
            <div>
              <button type='submit'>Sign in</button>
            </div>
            <div className='register-sec'>
              <p>Don't have a account 
                <a href="#">Register here</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }

}
const el = <Hello />;

ReactDOM.render(
  el,
  document.getElementById('root')
);