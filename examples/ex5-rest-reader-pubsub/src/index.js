import React from 'react';
import ReactDOM from 'react-dom';
var RestReader=require('react-restui/lib/client/rest_reader');
var RestfulTable=require('react-restui/lib/client/rest_table');
var PubSub=require('pubsub-js');

const Viewer=props=><pre>{JSON.stringify(props.data,null,2)}</pre>

function publishChange(){
  PubSub.publish('changed');
}   
     
ReactDOM.render(
  <div>
   <RestReader url='/api/post' view={Viewer} subscribe={["changed"]}/> 
   <RestfulTable url='/api/post' keyField="_id" 
    insertRow={true}  options={{afterTableComplete:publishChange}} cellEdit={{afterSaveCell:publishChange}}>                
        <TableHeaderColumn dataField="title" >title</TableHeaderColumn>
        <TableHeaderColumn dataField="content" >content</TableHeaderColumn>
   </RestfulTable>
  </div>,
  document.getElementById('root')
);

