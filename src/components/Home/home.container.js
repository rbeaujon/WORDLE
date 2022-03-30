import { connect } from 'react-redux';
import { PureComponent } from 'react';
import Home from './home.component';

export const mapStateToProps = (state) => {
  return {
    attempts: state.wordleReducer.attempts,
    hits: state.wordleReducer.hits,
    word: state.wordleReducer.word
}}
export const mapDispatchToProps = (dispatch) => ({
});

export class HomeContainer extends PureComponent {

  state = {
    empty:[]
   }

fill(){
  let { attempts } = this.props;

  const empty = 30 - attempts;
    if(attempts === 0){ 
      
      for (var i=0; i<empty; i++) {
        this.setState = {
          empty: this.state.empty.push('')
        }
     }}
    else{
        this.setState = {
          empty: this.state.empty.pop('')
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
          />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

