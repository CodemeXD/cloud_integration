import Header from './Header';
import './App.css';
import Head from './Head';

function App() {
  return (
    <div className="App">
    <Head/>
    <div className='map'>
    <iframe width="523" height="403" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=Sicogi%20Abidjan+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
    </div>
  );
}

export default App;
