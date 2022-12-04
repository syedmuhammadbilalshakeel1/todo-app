import './App.css';
import InputNEW from './compunt/input';
import Deletedbutton from './compunt/Deletedbutton';
import Adddbutton from './compunt/addButton';


function App() {
  return (
   <>
   <div className='main-div'>
   <InputNEW/>
   <Adddbutton/>
   <Deletedbutton/>
    </div>
   </>
  );
}
export default App;
