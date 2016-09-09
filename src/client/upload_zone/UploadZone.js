require('./UploadZone.less');
var Dropzone = require('react-dropzone');
var agent = require('superagent-promise')(require('superagent'),Promise);

const DefaultView=(props)=><div style={{fontSize:"120px",textAlign:"center"}}>+</div>

class UploadZone extends React.Component {


    static propTypes  ={
        children: React.PropTypes.node, // Contents of the dropzone
        url: React.PropTypes.string.isRequired,
        onUploaded:React.PropTypes.func.isRequired
    };


    constructor(props) {
        super(props);
        this.state = {
            children:props.children
        };
    }

    render() {
        let me = this;
        const {url,onUploaded,...others}=this.props;
        return (
            <Dropzone onDrop={this.onDrop.bind(this)} {...others}>
              {this.state.children||<DefaultView/>}
            </Dropzone>
        );
    }

    onDrop(files) {
        let me=this;
        console.log('Received files: ', files);
        var file=files[0];
        if(!file){return;}
        const {url,onUploaded}=this.props;
        if(!onUploaded||typeof onUploaded !== 'function'){return;}
        agent.post(url)
        .attach('files',file,file.name)
        .on('progress', me.onProgress.bind(me))
        .then(res => {
            var result=res.body;
            file.url=result.url;
            onUploaded([file]);
        });
    }

    onProgress(e){

    }

    componentWillReceiveProps(nextProps) {
        this.setState({children:nextProps.children})
    }



}

module.exports = UploadZone;
