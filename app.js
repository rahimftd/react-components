class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      bolded: false
    };
  }

  onListItemClick(event) {
    this.setState({
      done: !this.state.done
    });
  }

  onItemMouseOver(event) {
    this.setState({
      bolded: !this.state.bolded
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.bolded ? 'bold' : ''
    };

    return (
      <li style={style}  onMouseOver={this.onItemMouseOver.bind(this)} onMouseOut={this.onItemMouseOver.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <div>
    <h1>Grocery List</h1>
    <ul>
    {props.list.map(item =>
      <GroceryListItem item={item} key={item}/>
    )}
    </ul>
  </div>
);

var App = () => (
  <GroceryList list={['Milk', 'Bread', 'Eggs']}/>
);

ReactDOM.render(<App />, document.getElementById("app"));
