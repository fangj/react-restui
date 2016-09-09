# QiniuQiniuUploadZone

QiniuUploadZone用于上传文件到服务器

Server:

引用中间件，参数为(app,ACCESS_KEY,SECRET_KEY,bucket)
require('./qntoken')(app,"qiniu ACCESS_KEY","qiniu SECRET_KEY","qiniu bucket");


Client:

<QiniuUploadZone tokenUrl="/qntoken" host="http://...qiniu.com图片在七牛服务器的host" onUploaded={this.onUploaded.bind(this)} />


属性：

tokenUrl:返回七牛uptoken的地址 
host:七牛文件服务器的host
onUploaded:上传完成的回调
其他:参考react-dropzone组件。

样例：

```js
var QiniuUploadZone=require('react-restui/lib/client/qiniu_upload_zone');

class ImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {url}=this.state;
        return (
            <div className="image_uploader">
                 <QiniuUploadZone tokenUrl="/qntoken" host="http://7sbkh6.com1.z0.glb.clouddn.com" onUploaded={this.onUploaded.bind(this)} accept="image/*">
                 {!url?null:<img src={url} style={{maxWidth:"200px",maxHeight:"200px"}}/>}
                 </QiniuUploadZone>
            </div>
        );
    }

    onUploaded(files){
        console.log(files[0])
        this.setState({url:files[0].url});
    }
}

ReactDOM.render(
  <ImageUploader/>,
  document.getElementById('root')
);


```

## Examples

node app.js  
open http://localhost:3000

![img](screenshots/upload_zone_01.png)