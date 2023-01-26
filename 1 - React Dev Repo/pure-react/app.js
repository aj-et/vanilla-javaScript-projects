const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {class: 'title'}, 'React IS rendered'),
        React.createElement(Person, {name: 'Aaron', occupation: 'VoIP Engineer'}, null),
        React.createElement(Person, {name: 'Naomi', occupation: 'DSO Processor'}, null),
        React.createElement(Person, {name: 'Alfonso', occupation: 'Food Services'}, null),
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);