import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './componentes.css'
import { Button } from 'reactstrap';

var page = 0
var url = {
    stars1: '>9279',
    stars2: '8000..9279',
    forks1: '>2050',
    forks2: '1500..2050',
}

export default class Table extends Component {
    constructor() {
        super()
        this.state = {arrayProjeto:[],lecense:0,linguagem:0, continua: true}
        this.download = this.download.bind(this)
    }
    componentDidMount() {  
        this.timer = setInterval(() => this.fetchQuotes(), 5000)
    }
    fetchQuotes(){
        page++
        if(this.state.continua){
            fetch(`https://api.github.com/search/repositories?q=stars%3A${page > 10 ? url.stars2 : url.stars1}&per_page=20000&page= ${page > 10 ? page - 10: page }` )
            // fetch(`https://api.github.com/search/repositories?q=forks%3A${page >= 11 ? url.forks2 : url.forks1}&per_page=2000&page= ${page > 10 ? page - 10 : page }`)
                .then(response => response.json())
                .then(projetos => {
                    console.log(page)
                    projetos.items.map(function (proj) {  //verifica se possui licença
                        proj.license = proj.license ? proj.license.name : 'copyright'
                        return true
                    })
                    for (let i = 0; i < projetos.items.length; i++) {
                        if (projetos.items[i].language != null && this.state.arrayProjeto.length <= 999) {
                            this.setState({ arrayProjeto: this.state.arrayProjeto.concat(projetos.items[i]) })
                        }

                        if (this.state.arrayProjeto.length === 999) {
                            console.log('fumego')
                            this.setState({continua : false})
                        }
                    }
                }).catch(error =>{
                    page--
                    console.log('Erro ->' +  error)
                })
        }
    }
    componentWillUnmount(){
        this.timer = null
    }

    download(){
        var fileDownload = require('js-file-download');
        fileDownload(JSON.stringify(this.state.arrayProjeto), 'Estrela.json');
    }
    render() {
        return (
            <div id='tabela' >
                <Button color="secondary" onClick = {this.download} >Luiz</Button>
                <BootstrapTable data={ this.state.arrayProjeto} exportCSV={true} pagination>
                    <TableHeaderColumn dataField='id'               dataSort={ true } width='0%' isKey > Product ID          </TableHeaderColumn>
                    <TableHeaderColumn dataField='name'             dataSort={ true }> name                </TableHeaderColumn>
                    <TableHeaderColumn dataField='created_at'       dataSort={ true }> created_at          </TableHeaderColumn>
                    <TableHeaderColumn dataField='size'             dataSort={ true }> size                </TableHeaderColumn>
                   
                    <TableHeaderColumn dataField='stargazers_count' dataSort={true}> stargazers_count      </TableHeaderColumn>
                    <TableHeaderColumn dataField='forks_count'      dataSort={ true }> forks_count         </TableHeaderColumn>
                    <TableHeaderColumn dataField='license'          dataSort={ true }> license             </TableHeaderColumn>
                    <TableHeaderColumn dataField='language'         dataSort={ true }> linguagem           </TableHeaderColumn>
                    <TableHeaderColumn dataField='open_issues_count'dataSort={ true }> open_issues_count   </TableHeaderColumn>
                    <TableHeaderColumn dataField='fork'             dataSort={ true }> fork                </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

