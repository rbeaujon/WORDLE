import { connect } from 'react-redux';
import { PureComponent } from 'react';
import Home from './home.component';

export const mapStateToProps = (state) => {
  return {
    attempts: state.wordleReducer.attempts,
    hits: state.wordleReducer.hits,
    word: state.wordleReducer.word,
    action: state.wordleReducer.key
}}
export const mapDispatchToProps = (dispatch) => ({
});

export class HomeContainer extends PureComponent {

  
constructor(props) {
    super(props)
    this.state = { empty:[] };
}    

componentDidMount() {
   this.getWord(); //Mount the component with the new word
}  

getWord(){ //Select a random words to play
  var myWords = ['SANDY', 'APPLE', 'THREE', 'RANDOM', 'STACK', 'CLOUD'];
  var rand = Math.random()*myWords.length | 0;
  const word = myWords[rand];
  this.setState({
    word: word
  })
return word
  
}

fill(){
  let { attempts, action, word } = this.props;

  //verification how many columns empty we need to create
  const empty = 30 - attempts;
    if(attempts === 0 & action !== 'DEL' & this.state.empty <= 30){ //add the firts 30 empty cell
      
      for (var i=0; i<empty; i++) {
        
        this.state.empty.push('')
     }}
    if(attempts > 0 & action !== 'DEL' & action !== 'ENTER'){//after add one letter we delete the last cell empty
      
        this.state.empty.pop()
      }
    if(action === 'DEL' ){
      if(empty !== 30){ //condition to add a cell when it press the delete key
        this.state.empty.push('');
      }
    
    }  
    if(action === 'ENTER'){ 
      if(word.length === 5){ //Word verification when I have the 5 letters completed
        if(this.myWord === word) {
          alert('YOU WIN');
        }
      }
      else{ //send a message with error to add more letters
        alert('YOU NEED TO ADD MORE LETTERS');
      }
    } 
}

  render() {
    this.fill();
    console.log(this.state.word);
    return (
      <div>
        <Home 
          { ...this.state }
          { ...this.props }
          />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

