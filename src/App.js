import './App.css';
import Pdf from './pdf/news.pdf';
import Pdf2 from './pdf/cape_report.pdf';
import { useEffect, useState } from "react";

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {

        const url = 'https://jsonplaceholder.typicode.com/posts/1';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setData(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();

    }, []);

  return (
    <div className="App">
      <a id={'newsPdf'} href={Pdf} target={'_blank'} rel="noreferrer">{'Go to news PDF'}</a>
        <br/>
      <a id={'capePdf'} href={Pdf2} target={'_blank'} rel="noreferrer">{'Go to Cape. PDF'}</a>
        <br/>
        {data && <div>
            <h1>{'This is some fetched data:'}</h1>
            <h2 id={'fetchedTitle'}>{data.title}</h2>
            <h3 id={'fetchedId'}>{'Article ID: '+data.id}</h3>
            <p id={'fetchedData'}>{data.body}</p>
        </div>}
    </div>
  );
}

export default App;
