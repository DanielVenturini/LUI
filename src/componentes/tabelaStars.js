import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './componentes.css'

export default class Table extends Component {
    constructor() {
        super()
        this.state = {arrayProjeto:[]}
    }
    componentDidMount() {  
        for(var i=10; i>=1; i-- ){
            //fetch(`https://api.github.com/search/repositories?q=stars%3A%3E9000&per_page=100&page= ${i}` )
            fetch(`https://api.github.com/search/repositories?q=forks%3A>1000&per_page=100&page= ${i}` )
            .then(response => response.json())
            .then(projetos => {
                projetos.items.map(proj =>  //verifica se possui licença
                    proj.license = proj.license ? proj.license.name : 'null'
                )                
                for(let i=0; i<100; i++ ){   
                    if (projetos.items[i].language != null && this.state.arrayProjeto.length <= 1000){
                        this.setState({ arrayProjeto: this.state.arrayProjeto.concat(projetos.items[i]) })
                    }    
                    
                    if(this.state.arrayProjeto.length === 1000){
                        console.log('fumego')
                    }
                }
            })
        }
    }

    render() {
              
        return (
            <div id='tabela' >
                <BootstrapTable data={ this.state.arrayProjeto} exportCSV={true} pagination>
                    <TableHeaderColumn dataField='id'               dataSort={ true } width='0%' isKey > Product ID          </TableHeaderColumn>
                    <TableHeaderColumn dataField='name'             dataSort={ true }> name                </TableHeaderColumn>
                    <TableHeaderColumn dataField='created_at'       dataSort={ true }> created_at          </TableHeaderColumn>
                    <TableHeaderColumn dataField='size'             dataSort={ true }> size                </TableHeaderColumn>
                   
                    <TableHeaderColumn dataField='watchers'         dataSort={ true }> watchers            </TableHeaderColumn>
                    <TableHeaderColumn dataField='forks_count'      dataSort={ true }> forks_count         </TableHeaderColumn>
                    <TableHeaderColumn dataField='open_issues_count'dataSort={ true }> open_issues_count   </TableHeaderColumn>
                    <TableHeaderColumn dataField='license'          dataSort={ true }> license             </TableHeaderColumn>
                    <TableHeaderColumn dataField='language'         dataSort={ true }> linguagem           </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
