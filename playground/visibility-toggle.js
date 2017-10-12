/**
 * Created by root on 10/8/17.
 */

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility)
            };
        })
    }
    render(){
        return (
            <div>
                <h1> Hello </h1 >
                <button onClick={this.handleToggleVisibility}> {!this.state.visibility ? 'Show details' : 'Hide details'}</button>
                {this.state.visibility && (
                    <p>Hey here are some details!</p>
                )}
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);

