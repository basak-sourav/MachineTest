import React from 'react'

class Search extends React.Component
{
    constructor(){
        super()
        this.state={
            filter:'',
            data:[
                {
                    name:"sourav",
                    username:"basak_sourav"
                },
                {
                    name:"xyz",
                    username:"xyz_dft"
                }

            ]
        }
    }
    searchText=(e)=>
  {
 
  this.setState({filter:e.target.value})
 }
  render()
  {
    let{filter,data}=this.state;
    let dataSearch=data.filter(item=>{
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(filter.toLocaleLowerCase()))
   });
      return(
          <> 
             <center>
                 <h1>Search items</h1>
                 Search:<input type="text" value={filter} onChange={this.searchText.bind(this)}/>
                   
                     {
                         dataSearch.map((item)=>
                         { 
                             return(
                                <table>
                                <tr>
                                    <th>name</th>
                                    <th>username</th>
                                </tr>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                </tr>
                            </table>
                             )
                             
                         })
                     }
                           
                          
                 
             </center>
          </>
      )
  }
}

export default Search