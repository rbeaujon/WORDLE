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
            <button type="button" className={message.btn} onClick={() => 
             endGame()} >Restart game 
            </button>
            <button type="button" className={message.error} onClick={() => 
             close()} >Close
            </button>
            </div>
          </div>
        </div>
        )
      }
    
       
}
export default Home;