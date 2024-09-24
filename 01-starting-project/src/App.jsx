import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {


/**
 * We have may ways to wrap the child elements into the return and avoid unnessacry use of div in DOM
 * Way1: Using Fragment from react library
 *  Example: 
 * <Fragment>
 *  <Header/>
 *  <menu></menu>
 * </Fragment>
 * 
 * Way2: Simply adding <></> at starting and ending 
 * Example: 
 * <>
 *  <Header/>
 *  <menu></menu>
 * </>
 */
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;