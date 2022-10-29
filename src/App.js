import Papa from 'papaparse';
import './App.css';

function App() {
  const csvData = '2,3,4,5,3,4'
  console.log(Papa.parse(csvData))
  return (
   <>
    <h1>hi {Papa.parse(csvData)}</h1>
   </>
  );
}

export default App;
