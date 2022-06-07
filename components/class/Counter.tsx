import React from "react";

interface CounterProps {
  id: number
  value: number
}

interface CounterState {
  value: number
}

class Counter extends React.Component<CounterProps, CounterState> {
  state = { value: this.props.value }
  handleIncrement = (produt:{id:string}) => {
    this.setState({ value: this.state.value + 1 })
  }
  render() {
    console.log(this.props);
    
    return (
      <React.Fragment>
        <div className="flex items-center justify-center my-5">
          <h4> Title: {this.props.id}</h4>
          <span className={this.getBadgeClasess()}>{this.formatCount()}</span>
          <button onClick={ () => this.handleIncrement({id:'1'})} className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-amber-400 sm:w-auto active:bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring ml-2">Increment</button>
        </div>

      </React.Fragment>
    );
  }

  private getBadgeClasess() {
    let clasess = "block w-full px-2 py-3 text-sm font-medium text-white rounded shadow  sm:w-auto  focus:outline-none focus:ring ";
    clasess += this.state.value === 0 ? 'bg-red-600 sm:w-auto active:bg-red-600 hover:bg-red-700' : 'bg-green-600 sm:w-auto active:bg-green-600 hover:bg-green-700';
    return clasess;
  }

  formatCount() {
    const { value } = this.state
    return value === 0 ? 'Zero' : value
  }
}


// class Counter extends React.Component<CounterProps, CounterState> {
//   state = { count: this.props.value, tags: ['tag1', 'tag2'] }
//   // constructor () {
//   //   super();
//   //   this.handleIncrement = this.handleIncrement.bind(this)
//   // }
//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>
//     return <ul> {this.state.tags.map((tag, i) => <li key={i}> {tag} </li>)} </ul>
//   }
//   handleIncrement = (produt:{id:string}) => {
//     // console.log(produt.id)
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     console.log('props', this.props);
    
//     return (
//       <React.Fragment>
//         <div className="flex items-center justify-center my-5">
//           <span className={this.getBadgeClasess()}>{this.formatCount()}</span>
//           <button onClick={ () => this.handleIncrement({id:'1'})} className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-amber-400 sm:w-auto active:bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring ml-2">Increment</button>
//         </div>
//         {/* <div className="flex flex-col justify-center items-center my-5" >
//           {this.state.tags.length === 0 && 'Please create a new tag!'}
//           {this.renderTags()}
//         </div> */}

//       </React.Fragment>
//     );
//   }
//   private getBadgeClasess() {
//     let clasess = "block w-full px-2 py-3 text-sm font-medium text-white rounded shadow  sm:w-auto  focus:outline-none focus:ring ";
//     clasess += this.state.count === 0 ? 'bg-red-600 sm:w-auto active:bg-red-600 hover:bg-red-700' : 'bg-green-600 sm:w-auto active:bg-green-600 hover:bg-green-700';
//     return clasess;
//   }

//   formatCount() {
//     const { count } = this.state
//     return count === 0 ? 'Zero' : count
//   }
// }

export default Counter;