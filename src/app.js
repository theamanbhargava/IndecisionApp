class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : ['Thing one', 'Thing two', 'Thing three','Thing four']
        };
    };
    handleDeleteOptions(){
        this.setState (() => {
            return {
                options : []
            }
        })
    }
    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }
        else if(this.state.options.includes(option)){
            return 'This option already exists';
        }
        this.setState((prevState) => {
           return {
               options : prevState.options.concat([option])
           }
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action handlePick = {this.handlePick} hasOptions = {this.state.options.length > 0}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>
                    {this.state.error}
                </p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Add Choice"/>
                    <button>Submit Form</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
