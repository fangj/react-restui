# react-rest-table

Server:

假如服务器端在/api/post提供了一套标准的CRUD服务:  

    GET     /       ->  list all
    GET     /:id    ->  read one
    POST    /       ->  insert
    PUT     /:id    ->  update
    DELETE  /:id    ->  remove

Client:

RestfulTable提供一个可以对数据进行CRUD的表格  

属性：

url:服务地址，如/api/post  
keyField: id字段的字段名  
其他属性透明传递到内层的react-bootstrap-table中。详见 [react-bootstrap-table](https://github.com/AllenFang/react-bootstrap-table)  

样例：

```js
var RestfulTable=require('react-restui/lib/client/rest_table');

<RestfulTable url='/api/post' keyField="_id" >                
    <TableHeaderColumn dataField="..." >...</TableHeaderColumn>
    <TableHeaderColumn dataField="..." >...</TableHeaderColumn>
</RestfulTable>
```

## Examples

node app.js  
open http://localhost:3000

![screenshots/edittable.png](screenshots/edittable.png)