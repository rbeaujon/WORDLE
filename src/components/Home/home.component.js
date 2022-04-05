import { PureComponent } from 'react';
import  Keyboard  from '../Keyboard/';
import  './home.style.css';

export class Home extends PureComponent {

    render() {
      
      let { words, empty, toFind, message, endGame, close } = this.props;
    

      return (
        <div>
          
            <div className='container'>
            {
              
              words.map((key) => ( 
              <div className={key.color}>{key.letter}</div>
            ))}
            {
              empty.map((vacio, id) => ( 
              <div className='empty' id={id}>{vacio}</div>
            ))}
            </div> 
            <div className='keyboard-container'>
              <Keyboard />
            </div>
          <div className={message.msg}>
            <div className='bg'>
              <div className={message.win}>congratulations,you won</div>
              <div className={message.word}>SORRY, TRY AGAIN... THE WORD WAS "{toFind}"</div>
              <div className={message.error}>SORRY, YOU NEED TO ADD MORE LETTERS </div>
              <div className={message.welcome}>
                <h2>Let's go to play</h2>
                Guess the WORDLE in six tries.
                Each guess must be a valid five-letter word. Hit the enter button to register your attempts.
                After each guess, the color of the tiles will change to show how close your guess was to the word.
                <h4>Good luck!</h4>
                <h5>Created by Ricardo Beaujon from scratch, based and inspired by the popular game Wordle. Developed by Welsh software engineer Josh Wardle and published by The New York Times.</h5>
                              
              </div>
              <button type="button" className={message.btn} onClick={() => 
              endGame()} >Restart game 
              </button>
              <button type="button" id="close" className={message.error} onClick={() => 
              close('error')} >Close
              </button>
              <button type="button" id="close" className={message.welcome} onClick={() => 
              close('welcome')} >Close
              </button>
            </div>
          </div>
        </div>
        )
      }
    
       
}
export default Home;