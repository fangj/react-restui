import React from 'react';
import ReactDOM from 'react-dom';

import Form from "react-jsonschema-form";
var restField=require('react-restui/lib/client/rest_field');
require('./style.less');



const schema = {
  title: "Article",
  type: "object",
  required: ["title"],
  properties: {
    username: {type: "string", title: "username", default: "jack"},
    post: {title:'post', type: "string"}
  }
};

const PostField=restField({url:'/api/post',keyField:'_id',thumbView:ThumbView});
const fields = {post: PostField};
const uiSchema = {
  post:{"ui:field": "post"}
}

const ThumbView=(props)=><div>{props.data?props.data.title:""}</div>

ReactDOM.render(
    <Form schema={schema}
     uiSchema={uiSchema}
     fields={fields}/>
,
  document.getElementById('root')
);
