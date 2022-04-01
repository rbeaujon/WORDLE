import { PureComponent } from 'react';
import  Keyboard  from '../Keyboard/';
import  './home.style.css';

export class Home extends PureComponent {

    render() {
      
      let { words, empty } = this.props;
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
        </div>
        )
      }
    
       
}
export default Home;