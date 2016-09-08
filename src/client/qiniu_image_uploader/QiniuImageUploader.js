// require('./QiniuImageUploader.less');
import QNUploadZone from "../../components/qiniu_upload_zone";

class QiniuImageUploader extends React.Component {

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
                 <QNUploadZone tokenUrl="/qntoken" host="http://7sbkh6.com1.z0.glb.clouddn.com" onUploaded={this.onUploaded.bind(this)} accept="image/*"/>
                 {!url?null:<img src={url}/>}
            </div>
        );
    }

    onUploaded(files){
        console.log(files[0])
        this.setState({url:files[0].url});
    }


    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

module.exports = QiniuImageUploader;
