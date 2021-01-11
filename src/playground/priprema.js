// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
class Person{

}
const me=new Person('aaa');
console.log(me);
const app={
    title:'Stavke',
    options:[]
};
const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.opcija.value;
    if(option){
        app.options.push(option);
        e.target.elements.opcija.value='';
        e.target.elements.opcija.focus();
        renderApp();
    }
    
};
const removeAll=()=>{
    app.options=[];
    renderApp();
};
const onMakeDesition=()=>{
    const number=Math.floor(Math.random()*app.options.length);
    const option=app.options[number];
  alert(option);
};

const putanja=document.getElementById('app');

const renderApp=()=>{
    const Template=(
        <div>
          <h1>{app.title} </h1>
          <p>{app.options.length}</p>   
          <button disabled={app.options.length === 0} onClick={onMakeDesition}>What shauld J do</button>
          <button onClick={removeAll}>Remove All</button>
           <ol>
             {app.options.map((option)=><li kay={option}>{option}</li>)}
           </ol>
          <form onSubmit={onFormSubmit}>
             <input type="text" name="opcija"/>
             <button>Add option</button>
          </form>         
        </div>);    
       
        ReactDOM.render(Template,putanja);
};
renderApp();