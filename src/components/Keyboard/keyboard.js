import { connect } from 'react-redux';
import { keyboardAction } from '../../store/wordle.actions';
import './keyboard.style.css'

export const mapStateToProps = (state) => ({
});
export const mapDispatchToProps = (dispatch) => ({
    keyboardAction: (value) => dispatch(keyboardAction(value))
});
const keyboard = ['Q','W','E','R','T','Y','U','I','O','P','DEL','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
function Keyboard(props) {
return (
    <div className='keyboard'>
    { keyboard.map((key) => ( 
        <input type="button" value={key} onClick={() => props.keyboardAction(key) } />
    ))}
    </div>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);