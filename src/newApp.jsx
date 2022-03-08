import { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      totalTask: 0,
      finished: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.term !== '') {
      this.setState({
        term: '',
        items: [
          ...this.state.items,
          { id: this.state.totalTask, term: this.state.term, finished: false },
        ],
        totalTask: this.state.totalTask + 1,
      });
    }
  };

  handleClick(e, id) {
    e.preventDefault();
    let count = 0;

    this.setState({
      items: this.state.items.map((item) => {
        if (id === item.id) {
          if (item.finished) {
            return { ...item };
          } else {
            count++;
            return { ...item, finished: true };
          }
        }
        return { ...item };
      }),
      finished: count,
    });
  }

  render() {
    console.log(this.state.items);

    return (
      <>
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
        <div>
          <h2>Todo List</h2>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Add</button>
          </form>
          {`${this.state.finished} remaining out of ${this.state.totalTask} tasks`}
          <ul>
            {this.state.items.map((item, index) => (
              <li
                key={index}
                onClick={(e) => this.handleClick(e, item.id)}
                className={!item.finished ? 'is-done' : ''}
              >
                {item.term} - {item.finished}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
