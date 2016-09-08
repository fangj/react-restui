// require('./QiniuUploadZone.less');

var Dropzone = require('react-dropzone');
var agent = require('superagent-promise')(require('superagent'),Promise);
var path=require('path');

function makeFileName(originalname){
    var extname=path.extname(originalname);
    var basename=path.basename(originalname,extname);
    return basename + '-' + Date.now()+extname;
}
const defaultView=(props)=><div style={{fontSize:"120px",textAlign:"center"}}>+</div>

class QiniuUploadZone extends React.Component {

    static propTypes  ={
        view: React.PropTypes.element,
        tokenUrl: React.PropTypes.string.isRequired,
        host: React.PropTypes.string.isRequired,
        onUploaded:React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {uptoken}=this.state;
        if(!uptoken){
            return null;
        }
        const {view,host,tokenUrl,onUploaded,...others}=this.props;
        const View=view||defaultView;
        return (
            <Dropzone onDrop={this.onDrop.bind(this)} {...others}>
              <View/>
            </Dropzone>
        );
    }

    onDrop(files) {
        let me=this;
        const {uptoken}=this.state;
        if(!uptoken){return;}
        console.log('Received files: ', files);
        var file=files[0];
        if(!file){return;}
        const {host,onUploaded}=this.props;
        if(!onUploaded||typeof onUploaded !== 'function'){return;}

        var uploadUrl = 'http://upload.qiniu.com'
        if (window.location.protocol === 'https:') {
          uploadUrl = 'https://up.qbox.me/'
        }
        var key=makeFileName(file.name);
        agent.post(uploadUrl)
            .field('key', key)
            .field('token', uptoken)
            .field('x:filename', file.name)
            .field('x:size', file.size)
            .attach('file', file, file.name)
            .set('Accept', 'application/json')
            // .on('progress', me.onProgress.bind(me))
            .then(res => {
                var result=res.body;
                file.url=host+"/"+result.key;
                onUploaded([file]);
            });
    }

    onProgress(e){

    }

    componentWillMount() {
    }

    componentDidMount() {
        const {tokenUrl}=this.props;
        agent.get(tokenUrl).then(res=>{
            var result=res.body;
            this.setState({uptoken:result.uptoken});
        })
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

module.exports = QiniuUploadZone;
