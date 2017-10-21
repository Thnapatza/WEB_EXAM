import React from 'react';

class Second extends React.Component {
	 render() {
    return (
      <div>
 		<button onClick={() => this.addTodoList()}>Get data</button>
 		<button onClick={() => this.addTodoList()}>Clear</button>
      </div>
    );
  }
}
export default Second;