import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stack: [],
      terminalValue: ''
    }
  }

  componentDidMount() {
    this.handleFocusInput();

    document.addEventListener('click', this.handleFocusInput.bind(this));
  }

  handleFocusInput() {
    this.nameInput.focus();
  }

  handleInputSubmit(e) {
    e.preventDefault();

    let { stack, terminalValue } = this.state;

    switch(terminalValue) {
      case 'about':
        stack.push({
          command: 'about',
          content: `
            <h2>About me</h2>

            <p>I have three years experience as a front-end developer, creating responsive websites using HTML, CSS, and JavaScript.</p>

            <p>Also, my main skill is ReactJS + Redux. So, I can create single-page applications for web.</p>

            <p>I have experience working freelance as well as on sight. I have also obtained an eye for detail and appreciation for design, knowledge of integrating with and developing server-side, as well as knowing how to efficiently project manage and work with clients and colleagues successfully.</p>

            <ul>
              <li>🔥 ReactJS + Redux technology stack</li>
              <li>🔥 Over 3 years of commercial web-development experience</li>
              <li>🔥 Good experience with PSD to HTML + CSS</li>
              <li>🔥 Strong knowledge of development processes</li>
            </ul>
          `
        });

        this.setState({ stack });
        break;
      case 'socials':
        stack.push({
          command: 'socials',
          content: `
            <h2>Socials</h2>

            <p>
              Facebook: <a target="blank" href="https://www.facebook.com/iwantvladique">https://www.facebook.com/iwantvladique</a>
            </p>

            <p>
              Telegram: <a target="blank" href="https://t.me/ethername">https://t.me/ethername</a>
            </p>
          `
        });

        this.setState({ stack });
        break;
      case 'help':
        stack.push({
          command: 'help',
          content: `
            <h2>Commands</h2>

            <p>projects - to see projects overview</p>
            <p>about - to see general information about me</p>
            <p>socials - to get my social links</p>
          `
        });

        this.setState({ stack });
        break;

      case 'projects':
        stack.push({
          command: 'projects',
          content: `
            <h2>Projects</h2>

            <section className="terminal__project">
              <h3>Globalfreelance.ua, Freelance systems LLC</h3>
              <p>Link: <a target="blank" href="http://globalfreelance.ua/">http://globalfreelance.ua/</a></p>
              <p>In this project, my main responsibility was rewriting front-end in React + Redux technologies.</p>

              <p>
                <b>Technologies</b>:
                ReactJS + Redux, PHP, jQuery, SCSS, VanillaJS, BitBucket, Jira, Jenkins
              </p>
            </section>

            <section className="terminal__project">
              <h3>Ciklum, Open Door LLC</h3>
              <p>Link: <a target="blank" href="https://homerenter.co.uk/">https://homerenter.co.uk/</a></p>

              <p>Designing and building single-page application like AirBnb, but for a long-term rental in London.</p>

              <p>
                <b>Technologies</b>:
                ReactJS, Flux (Flummox), LESS, BitBucket, Jira, CodeShip
              </p>
            </section>

            <section className="terminal__project">
              <h3>Ciklum, Trinity Mirror client</h3>
              <p>Link: <a target="blank" href="http://tmsyndication.com/">http://tmsyndication.com/</a></p>

              <p>Front-end with ReactJS for application that sends news from publishers to clients.</p>

              <p>
                <b>Technologies</b>:
                 ReactJS, BitBucket, Jira, TeamCity, Swagger
              </p>
            </section>

            <section className="terminal__project">
              <h3>EverAD</h3>
              <p>Link: <a target="blank" href="https://everad.com/">https://everad.com/</a></p>

              <p>In this project, my responsibility was to make landing pages from PSD to HTML + CSS.</p>

              <p>
                <b>Technologies</b>:
                HTML, LESS, Gulp
              </p>
            </section>
          `
        });

        this.setState({ stack });
        break;
      default:
        stack.push({
          command: terminalValue,
          content: 'Unknown command, please, type "help" to see list of all commands'
        });

        this.setState({ stack });
    }

    this.setState({ terminalValue: '' });
  }

  handleInputChange(e) {
    this.setState({ terminalValue: e.target.value });
  }

  render() {
    const { stack, terminalValue } = this.state;

    return (
      <main>
        <p>Please, type "help" and get list of all commands</p>

        {stack.map((terminalMessage, index) => {
          return(
            <section key={index} className="terminal-message">
              <div className="terminal-message__command">
                <div className="terminal__name">user@terminal</div>
                <div>{terminalMessage.command}</div>
              </div>

              <span>{renderHTML(terminalMessage.content)}</span>
            </section>
          );
        })}

        <section className="terminal">
          <div className="terminal__name">user@terminal</div>

          <form onSubmit={this.handleInputSubmit.bind(this)}>
            <input
              className="terminal__input"
              ref={(input) => { this.nameInput = input }}
              onChange={this.handleInputChange.bind(this)}
              value={terminalValue}
            />
          </form>
        </section>
      </main>
    );
  }
}

export default App;
