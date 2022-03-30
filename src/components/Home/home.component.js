import { PureComponent } from 'react';
import  Keyboard  from '../Keyboard/';
import  './home.style.css';

export class Home extends PureComponent {

    render() {
      
      let { word, empty } = this.props;
      return (
        <div>
          <div className='container'>
           {
            word.map((key) => ( 
            <div>{key}</div>
          ))}
          {
            empty.map((vacio, id) => ( 
            <div id={id}>{vacio}</div>
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