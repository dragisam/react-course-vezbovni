class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options:props.options
    };
    
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOptionOut=this.handleAddOptionOut.bind(this);
    this.handleDeliteOptions=this.handleDeliteOptions.bind(this);
    this.handleDeliteOption=this.handleDeliteOption.bind(this);
  }
  componentDidMount(){
    try {
      const json= localStorage.getItem('options');
      const options=JSON.parse(json);
      if (options) {
        this.setState(()=>({options}));
       }
        } catch (error) {
      
    }
     }

  componentDidUpdate(prevProps,prevState){
   if (prevState.options.length !== this.state.options.length) {
     const json=JSON.stringify(this.state.options);
     localStorage.setItem('options',json);
     console.log('izmenjene opcije');
   }
  }
  componentWillUnmount(){
    console.log('CUM');
  }

  handlePick() {
    const number=Math.floor(Math.random()*this.state.options.length);
    const option=this.state.options[number];
    alert(option);
  }
  handleDeliteOptions(){
    this.setState(()=>({options:[]}))
  }
  handleDeliteOption(optionToRemove){
     this.setState((prevState)=>({
       options:prevState.options.filter((option)=>optionToRemove !==option
       )
      }))
  }
  
  handleAddOptionOut(option){
    this.setState((prevState)=>({options:prevState.options.concat([option])}))
  };
 
  
  render() {
   
    const podnaslov = "probna aplikacija";

    return (
      <div>
        <Header  />
        <Action 
        hasOptions={this.state.options.length > 0} 
        handlePick={this.handlePick}
        />
        <Options 
        opcije={this.state.options} 
        handleDelateOptions={this.handleDeliteOptions}
        handleDeliteOption={this.handleDeliteOption}
        />
        <AddOption handleAddOption={this.handleAddOptionOut} />
      </div>
    );
  }
}
MainApp.defaultProps={
    options:[1,2,3]
}

const Header=(props)=>{
  return (
    <div>
      <h1>{props.naslov} </h1>
     {props.podnaslov&& <h2>{props.podnaslov}</h2>} 
    </div>
  );
}
Header.defaultProps={
  naslov:'naslov'
};
// class Header extends React.Component {
//   render() {
    
//     return (
//       <div>
//         <h1>{this.props.naslov} </h1>
//         <h2>{this.props.podnaslov}</h2>
//       </div>
//     );
//   }
// }
const Action=(props)=>{
  return (
    <div>
      <button 
      onClick={props.handlePick} 
      disabled={!props.hasOptions}
      >
      Whaat shold J do?
      </button>
      
    </div>
  );
}

// class Action extends React.Component {
   
//   render() {
//     return (
//       <div>
//         <button 
//         onClick={this.props.handlePick} 
//         disabled={!this.props.hasOptions}
//         >
//         Whaat shold J do?
//         </button>
        
//       </div>
//     );
//   }
// }
const Options=(props)=>{
  return (
    <div>
      <button onClick={props.handleDelateOptions}>Remove All</button>
      {props.opcije.length === 0 && <p>molimo unesite stavku</p>}
      {props.opcije.map((opcija) => (
        <Option 
        key={opcija} 
        opcijaProp={opcija} 
        handleDeliteOption={props.handleDeliteOption}
        />
      ))}
    </div>
  );
}
// class Options extends React.Component {
  
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDelateOptions}>Remove All</button>

//         {this.props.opcije.map((opcija) => (
//           <Option key={opcija} opcijaProp={opcija} />
//         ))}
//       </div>
//     );
//   }
// }

const Option=(props)=>{
  return (
      <div>
       {props.opcijaProp}
       <button onClick={(e)=>{
         props.handleDeliteOption(props.opcijaProp)}}
         >remove</button>
      </div>);
}
// class Option extends React.Component {
//   render() {
//     return <div>{this.props.opcijaProp}</div>;
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOptionIn=this.handleAddOptionIn.bind(this);
  }
  handleAddOptionIn(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();   
    if (option) {
      this.props.handleAddOption(option);
      e.target.elements.option.value='';
      e.target.elements.option.focus();
    }
  }
  
  render() {
   
    return (
      <div>
        <form onSubmit={this.handleAddOptionIn}>
          <input type="text" name="option" />
          <button >Add option</button>
        </form>
      </div>
    );
  }
}

// const User=(props)=>{
//   return (
//     <div>
//    <p>ime:{props.name}</p>
//    <p>prezime:{props.adresa}</p> 
//     </div>
//   )
// }

ReactDOM.render(<MainApp/ >, document.getElementById("app"));
