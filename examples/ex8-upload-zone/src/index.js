import React from 'react';
import ReactDOM from 'react-dom';

var UploadZone=require('react-restui/lib/client/upload_zone');

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
                 <UploadZone url="/upload" onUploaded={this.onUploaded.bind(this)} accept="image/*">
                 {!url?null:<img src={url} style={{maxWidth:"200px",maxHeight:"200px"}}/>}
                 </UploadZone>
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

