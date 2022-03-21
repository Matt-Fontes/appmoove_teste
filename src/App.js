import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/main/main';
import Recipe from './pages/recipe/recipe';

function App() {
  return (
	  	<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Main/>}/>
					<Route path='/receita' element={<Recipe/>}/>
				</Routes>
			
    	</BrowserRouter>
  );
}

export default App;
