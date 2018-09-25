import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './componentes.css'

export default class Table extends Component {
    constructor() {
        super()
        this.state = {arrayProjeto:[],lecense:0,linguagem:0}
    }
    componentDidMount() {  
        for(var i=10; i>=1; i-- ){
            //fetch(`https://api.github.com/search/repositories?q=stars%3A%3E9000&per_page=100&page= ${i}` )
            fetch(`https://api.github.com/search/repositories?q=forks%3A>1000&per_page=100&page= ${i}` )
            .then(response => response.json())
            .then(projetos => {
                projetos.items.map(function (proj) {  //verifica se possui licença
                    proj.license = proj.license ? proj.license.name : 'null'
                    return true
                }
                )                
                for(let i=0; i<100; i++ ){   
                    this.setState({ arrayProjeto: this.state.arrayProjeto.concat(projetos.items[i]) })
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
                   
                    <TableHeaderColumn dataField='stargazers_count' dataSort={true}> stargazers_count      </TableHeaderColumn>
                    <TableHeaderColumn dataField='forks_count'      dataSort={ true }> forks_count         </TableHeaderColumn>
                    <TableHeaderColumn dataField='open_issues_count'dataSort={ true }> open_issues_count   </TableHeaderColumn>
                    <TableHeaderColumn dataField='license'          dataSort={ true }> license             </TableHeaderColumn>
                    <TableHeaderColumn dataField='language'         dataSort={ true }> linguagem           </TableHeaderColumn>
                    <TableHeaderColumn dataField='open_issues_count'dataSort={ true }> open_issues_count   </TableHeaderColumn>
                    <TableHeaderColumn dataField='fork'             dataSort={ true }> fork                </TableHeaderColumn>

                </BootstrapTable>
            </div>
        )
    }
}
