import React from 'react';
import ReactDOM from 'react-dom';
var RestReader=require('react-restui/lib/client/rest_reader');
var RestfulTable=require('react-restui/lib/client/rest_table');


const Viewer=props=><pre>{JSON.stringify(props.data,null,2)}</pre>
        
ReactDOM.render(
  <div>
   <RestReader url='/api/post' view={Viewer}/> 
   <RestfulTable url='/api/post' keyField="_id" 
    insertRow={true} deleteRow={true} >                
        <TableHeaderColumn dataField="title" >title</TableHeaderColumn>
        <TableHeaderColumn dataField="content" >content</TableHeaderColumn>
   </RestfulTable>
  </div>,
  document.getElementById('root')
);

