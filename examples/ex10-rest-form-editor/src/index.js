import React from 'react';
import ReactDOM from 'react-dom';

require('./browser.less');
var RestFormEditor=require('react-restui/lib/client/rest_form_editor');
const ThumbView=(props)=><div>{props.data?props.data.title:"新建"}</div>

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


ReactDOM.render(
    <RestFormEditor schema={schema}
                    url="/api/post"
                    keyField="_id"
                    thumbView={ThumbView}/>
,
  document.getElementById('root')
);
