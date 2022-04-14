import './App.css';
import Pdf from './pdf/news.pdf';
import Pdf2 from './pdf/cape_report.pdf';

function App() {
  return (
    <div className="App">
      <a id={'newsPdf'} href={Pdf} target={'_blank'} rel="noreferrer">{'Go to news PDF'}</a>
        <br/>
      <a id={'capePdf'} href={Pdf2} target={'_blank'} rel="noreferrer">{'Go to Cape. PDF'}</a>
    </div>
  );
}

export default App;
