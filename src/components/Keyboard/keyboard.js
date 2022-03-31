import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { keyboardAction } from '../../store/wordle.actions';
import './keyboard.style.css'

export const mapStateToProps = (state) => ({
});
export const mapDispatchToProps = (dispatch) => ({
    keyboardAction: (value) => dispatch(keyboardAction(value))
});

export class Keyboard extends PureComponent {
    render(){
        const keyboard1 = ['Q','W','E','R','T','Y','U','I','O','P'];
        const keyboard2 = ['A','S','D','F','G','H','J','K','L'];
        const keyboard3 = ['ENTER','Z','X','C','V','B','N','M','DEL'];
    return (
     
    <div>  
        <div>{
        keyboard1.map((key) => {
            return(
        <input type="button" value={key} onClick={() => this.props.keyboardAction(key) } />
        )})
        }</div>
        <div>{
        keyboard2.map((key2) => {
            return(
            <input type="button" value={key2} onClick={() => this.props.keyboardAction(key2) } />
        )})
        }</div>
        <div>{
        keyboard3.map((key3) => {
            return(
            <input type="button" value={key3} onClick={() => this.props.keyboardAction(key3) } />
        )})
        }</div> 
    </div>  
    )
   
     }}  

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);