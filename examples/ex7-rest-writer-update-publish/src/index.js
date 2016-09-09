import React from 'react';
import ReactDOM from 'react-dom';
import Form from "react-jsonschema-form";
var RestReader=require('react-restui/lib/client/rest_reader');

const Viewer=props=><pre>{JSON.stringify(props.data,null,2)}</pre>

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

const todoForm=(props)=><Form schema={schema} formData={props.data} onSubmit={(obj)=>props.update(obj.formData)}>
        <div className="btn-toolbar">
            <button type="submit" className="btn btn-success">保存</button>
            <a className="btn btn-danger" onClick={props.remove}>删除</a>
        </div>
</Form>

ReactDOM.render(
  <div>
    <RestWriter url="/api/post" id="3xHXzqOZ75cu0IAt" view={todoForm}  publish="changed"/>
    <RestReader url="/api/post" view={Viewer} subscribe={["changed"]}/> 
  </div> ,
  document.getElementById('root')
);

