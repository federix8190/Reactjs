function getGreeting(user) {
    if (user) {
        return 'Hello ' + formatName(user) + '!';
    }
    return 'Hello, Stranger !'
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: './img/avatar/464720ad7f89e5a5efe743c52fee2663?s=400&d=robohash&r=x'
};

const element = (
  <div>
      <h1>{getGreeting()}</h1>
      <h2>Good to see you here.</h2>
      <img src={user.avatarUrl} />;
      <h2>{getGreeting(user)}</h2>
  </div>
);

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

class Welcome2 extends React.Component {
    render() {
        //return <h1>Hello, {this.props.name}</h1>;
        return <div>
            <h1>Hello, {this.props.name}</h1>
            <h2>Good to see you here.</h2>
            <img src={this.props.avatarUrl} />;
            <h2>{getGreeting(user)}</h2>
        </div>
    }
}

class Login extends React.Component {
    render() {
    }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
      <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
      </div>
    );
}

/*export default class myTable extends React.Component {
    createTable = () => {
        let table = []
        for (let i = 0; i < 3; i++) {
          let children = []
          for (let j = 0; j < 5; j++) {
                children.push(<td>{'Column ${j + 1}'}</td>)
          }
          table.push(<tr>{children}</tr>)
        }
        return table
    }
    
    render() {
        return(
          <table>{this.createTable()}</table>
        )
    }
    
}*/

const element3 = <Welcome2 name="Sara" 
  avatarUrl="./img/avatar/464720ad7f89e5a5efe743c52fee2663.png" />;

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

//ReactDOM.render(<Grilla />, document.getElementById('root2'));
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

//setInterval(tick, 1000);