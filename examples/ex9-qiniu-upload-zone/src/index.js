import React from 'react';
import ReactDOM from 'react-dom';

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

