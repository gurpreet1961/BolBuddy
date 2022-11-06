// import React from 'react'
import React, {useState} from 'react'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import asl from '../images/ASL.pdf'
import './Signup.css'

function Readings() {

    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }
  return (
    <div className="reading">
    <center>
    <header className="reading-header">
    <p> Page {pageNumber} of {numPages}</p>
      { pageNumber > 1 && 
      <button className='form-group form-submit' onClick={changePageBack}>Previous Page</button>
      }
      {
        pageNumber < numPages &&
        <button className='form-group form-submit' onClick={changePageNext} style={{marginLeft:"10px"}}>Next Page</button>
      }
      <Document file={asl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="500" width="800" pageNumber={pageNumber} />
      </Document>
    
    </header>
    </center>
    {/* <center>
      <div>
        <Document file={asl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(
            new Array(numPages),
            (el,index) => (
              <Page 
                key={`page_${index+1}`}
                pageNumber={index+1}
              />
            )
          )}
        </Document>
      </div>
    </center> */}
  </div>
);
}

export default Readings