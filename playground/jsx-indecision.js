/**
 * Created by root on 10/9/17.
 */
console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const appRoot = document.getElementById('app');

const clear = (e) => {
    e.preventDefault();
    app.options.length = 0;
    render()
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clear}>Wipe the array</button>
            {
                numbers.map((number) => {
                    return <p key={number}>Number : {number}</p>
                })
            }
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>Item {option}</li>;
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();