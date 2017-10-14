const Layout = (props) => {
    return (
        <div>
            <h1>Header</h1>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>
            This is my page!
        </p>
    </div>
);

ReactDOM.render((
        <Layout>
            <p>This is inline</p>
        </Layout>)
    ,document.getElementById('app'));