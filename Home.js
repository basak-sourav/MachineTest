import React from 'react'
class Home extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      
      act: 0,
      index: '',
     // filter:'',
      datas: [],
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  Submit = (e) =>{                          //fetch the data
    e.preventDefault();
    

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let username = this.refs.username.value;

    if(this.state.act === 0){   
      let data = {
        name, username
      }
      datas.push(data);
    }else{                      
      let index = this.state.index;
      datas[index].name = name;
      datas[index].username = username;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

   Delete = (i) => {                             //delete the data
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  Edit = (i) => {                                //update the data
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.username.value = data.username;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  
//  searchText=(e)=>
//  {                                                  //try to implementing search 
//   let data = this.state.datas[e];
//   this.refs.name.value = data.name;
//   this.refs.username.value = data.username; 
//   this.setState({fi:e.target.value})
 //}
  render() 
  {
    // let{filter,data}=this.state;
    // let dataSearch=data.filter(item=>{
    //   return Object.keys(item).some(key =>
    //     item[key].toLowerCase().includes(filter.toLocaleLowerCase()))
   // })
    let datas = this.state.datas;
    return (
      <>
        <form ref="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="username" placeholder="your username" className="formField" />
          <button onClick={(e)=>this.Submit(e)} className="myButton">Submit </button>
          
        </form>
       {/* // Search:<input type="text" value={filter} onChange={this.searchText.bind(this)}/> */}
        
          {datas.map((data, i) =>
            <li key={i} >
              {i+1}. {data.name}, {data.username}
              <button onClick={()=>this.Delete(i)} className="myListButton">Delete</button>
              <button onClick={()=>this.Edit(i)} className="myListButton">Edit </button>
            </li>
          )}
           {/* {dataSearch.map(item =>
           <li>
             {item.name}
           {item.username}
           </li>
            
          )} */}
        
      </>
    );
  }
}

export default Home