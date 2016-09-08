var ReactBSTable = require('react-bootstrap-table');  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
// var Promise=require('bluebird');
var agent = require('superagent-promise')(require('superagent'),Promise);

class RestfulTable extends React.Component {

   static propTypes = {
    url:React.PropTypes.string.isRequired,
    keyField:React.PropTypes.string.isRequired
   }

    constructor(props) {
        super(props);
        this.state = {
          data:[]
        };
    }

    render() {
        const me=this;
        var optionsProp = {
          afterDeleteRow: me.onAfterDeleteRow.bind(me),  // A hook for after droping rows.
          afterInsertRow: me.onAfterInsertRow.bind(me),   // A hook for after insert rows
        };
        var cellEditProp = {
          mode: "click",
          blurToSave: true,
          afterSaveCell: me.onAfterSaveCell.bind(me)
        };

        const {data,keyField,cellEdit,options,...others}=this.props;
        cellEditProp=Object.assign({},cellEdit,cellEditProp);
        optionsProp=Object.assign({},options,optionsProp);
        var remote=this.props.remote;
        if(remote===undefined){
          remote=true;
        }
        return (
          <BootstrapTable 
                data={this.state.data} keyField={keyField} remote={remote} cellEdit={cellEditProp} options={optionsProp} {...others}>
           {this.props.children}
          </BootstrapTable>
 
        );
    }

    onAfterDeleteRow(rowKeys){
      const me=this;
      console.log('delete',rowKeys)
      const key=rowKeys[0]; //目前只删除第一行
      const {url}=this.props;
      agent.del(url+'/'+key).then(resp=>{
        console.log(resp.body);
        var {data}=me.state;
        data = data.filter((product) => {
          return product._id !== key;
        });

        this.setState({
          data: data
        });
      })

    }
    onAfterInsertRow(row){
      const {url,keyField}=this.props;
      agent.post(url,row).then(resp=>{
        console.log(resp.body)
        var {data}=this.state;
        data.push(resp.body);
        this.setState({data});
      })
    }

    onAfterSaveCell(row, cellName, cellValue){
      const {cellEdit}=this.props;

      row[cellName]=cellValue;
      const {url,keyField}=this.props;
      agent.put(url+'/'+row[keyField],row).then(resp=>{
        if(typeof cellEdit.afterSaveCell=='function'){
          cellEdit.afterSaveCell(row, cellName, cellValue);
        }
      })
    }

    componentDidMount() {
      const {url}=this.props;
      agent.get(url).then(resp=>{
        const data=resp.body;
        this.setState({data});
      })
    }

}

module.exports = RestfulTable;
