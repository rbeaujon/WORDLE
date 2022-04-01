import { connect } from 'react-redux';
import { PureComponent } from 'react';
import Home from './home.component';
import { setWord, newLine, endGame, setMessage} from '../../store/wordle.actions';

export const mapStateToProps = (state) => {
  return {
    attempts: state.wordleReducer.attempts,
    hits: state.wordleReducer.hits,
    word: state.wordleReducer.word,
    words: state.wordleReducer.words,
    action: state.wordleReducer.key,
    message: state.wordleReducer.message
}}
export const mapDispatchToProps = (dispatch) => ({
  setWord: (index, color) => dispatch(setWord(index, color)),
  newLine: (hits) => dispatch(newLine(hits)),
  endGame: () => dispatch(endGame()),
  setMessage: (msg) => dispatch(setMessage(msg))
});

export class HomeContainer extends PureComponent {

  
constructor(props) {
    super(props)
    this.state = { empty:[], color:[] };
    this.endGame = this.endGame.bind(this);
    this.close = this.close.bind(this);
}    

componentDidMount() {
   this.getWord(); //Mount the component with the new word
}  

getWord(){ //Select a random words to play
  var myWords = ['SANDY', 'APPLE', 'THREE', 'RANDY', 'STACK', 'CLOUD'];
  var rand = Math.random()*myWords.length | 0;
  const word = myWords[rand];
  this.setState({
    word: word
  })
return word
  
}
endGame(){
      this.props.endGame();
      this.setState({
       empty: []
      });
}
close(){
  let message = {
  msg: 'hidden',
  win: 'hidden',
  word: 'hidden',
  error: 'hidden',
  btn: 'hidden',
  key: 'error'
  
}
this.props.setMessage(message);
}

fill(){
  let { attempts, action, word, words, hits } = this.props;
 
  //verification how many columns empty we need to create
  const empty = 30 - attempts;
  if(action !== 'error'){
    if(attempts === 0 & action !== 'DEL' & this.state.empty <= 30 ){ //add the firts 30 empty cell
      
      for (var i=0; i<empty; i++) {
        
        this.state.empty.push('')
     }}
    if(attempts > 0 & action !== 'DEL' & action !== 'ENTER' ){//after add one letter we delete the last cell empty
      
        this.state.empty.pop()
      }
    if(action === 'DEL' ){
      if(empty !== 30){ //condition to add a cell when it press the delete key
        this.state.empty.push('');
      }
    }
    }  
    if(action === 'ENTER'){
     
      if(words.length % 5 === 0 ){ //Word verification when I have the 5 letters completed
        var text = word.toString();
        text = text.replace(/,/g, '');
        let p = 0
        /* Verification for same letter and position */
          for (var x = hits * 5; x< words.length; x++) { //by UI
            var charWord = this.state.word.charAt(p);
            for (var i = 0; i< 5; i++) { // by local
              
              var charLocal = this.state.word.charAt(i);
              if(word[p] === charLocal && x !== i){ //char UI / charLocal
                //there is a similar caracter and set the state (orange), add className
                this.props.setWord(x, 'fill orange')
              }
              if(word[p] === charWord){
                //add the index into the array state color, add className 
                this.props.setWord(x, 'fill green')
              }
              var checkDoubleLettersState = this.state.word.split(word[p]).length-1;
              var checkDoubleLettersInput = text.split(word[p]).length-1;
              var checkColor = words[x].color;

              if(checkDoubleLettersState < checkDoubleLettersInput && checkColor === 'fill orange'){
                this.props.setWord(x, 'fill')
              }
          }
          p++;
        }

            // Set attempts 
            hits++;
            p++;
            this.props.newLine(hits);
           
      }
      else{ //send a message with error to add more letters
      if(word.length < 5 && this.props.message.error !== 'error') {
        let message = {
                msg: 'message',
                win: 'hidden',
                word: 'hidden',
                error: 'error',
                btn: 'hidden',
                key: 'ENTER'
              }
        this.props.setMessage(message);
      }
      
      }
             /* ENDING GAME IF */

             //The word is exactly correct
             if(text === this.state.word){ 

              let message = {
                msg: 'message',
                win: 'win',
                word: 'hidden',
                error: 'hidden'
              }
              this.props.setMessage(message);
            }
            //Reach the max attempts
            if(hits === 6){
              let message = {
                msg: 'message',
                win: 'hidden',
                word: 'word',
                error: 'hidden'
              }
              this.props.setMessage(message);
            }
    
    } 
}

  render() {
    this.fill();

    return (
      <div>
        <Home 
          { ...this.state }
          { ...this.props }
          toFind = { this.state.word }
          endGame = { this.endGame }
          close = { this.close }
          />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

