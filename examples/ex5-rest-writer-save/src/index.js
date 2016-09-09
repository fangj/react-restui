import React from 'react';
import ReactDOM from 'react-dom';
import Form from "react-jsonschema-form";
import PubSub from 'pubsub-js';
var RestReader=require('react-restui/lib/client/rest_reader');

const Viewer=props=><pre>{JSON.stringify(props.data,null,2)}</pre>

function publishChange(){
  PubSub.publish('changed');
}

var RestWriter=require('react-restui/lib/client/rest_writer');

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const todoForm=(props)=><Form schema={schema} onSubmit={(obj)=>props.save(obj.formData).then(publishChange)}/>

ReactDOM.render(
  <div>
    <RestWriter url="/api/post" view={todoForm} />
    <RestReader url='/api/post' view={Viewer} subscribe={["changed"]}/> 
  </div> ,
  document.getElementById('root')
);

