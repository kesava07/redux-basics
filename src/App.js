import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, addCounter, subCounter } from './Store/Actions/CountersActions';
import { fetchData } from './Store/Actions/DataActions';

class App extends Component {
  render() {
    const { incrementCount, counterValue, decrementCount, addCounter, subCounter, title, data, loading, dataAction } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <div className="card card-body bg-secondary shadow-lg">
              <h1>{title} Value {counterValue}</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card card-body bg-light mt-5 shadow-sm">
              <div className="container text-center">
                <button onClick={dataAction} className="btn btn-info mr-2">dataAction</button>
                <button onClick={incrementCount} className="btn btn-primary mr-2">Incriment</button>
                <button onClick={decrementCount} className="btn btn-danger  mr-2">Decrement</button>
                <button onClick={addCounter} className="btn btn-success  mr-2">Incriment By 10</button>
                <button onClick={subCounter} className="btn btn-warning  mr-2">Decrement By 20</button>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              {loading && <div> Loading....</div>}
              {data && data.map(val => {
                return (
                  <div className="col-md-4 mb-2" key={val.id}>
                    <div className="card card-body shadow-sm">
                      <h1>{val.id}</h1>
                      <p>{val.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  counterValue: state.counter.count,
  title: state.counter.title,
  data: state.data.data,
  error: state.data.error,
  loading: state.data.loading
})

const mapDispathToprops = dispatch => ({
  incrementCount: () => dispatch(increment()),
  decrementCount: () => dispatch(decrement()),
  addCounter: () => dispatch(addCounter(10)),
  subCounter: () => dispatch(subCounter(20)),
  dataAction: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispathToprops)(App);
