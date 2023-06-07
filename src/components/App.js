import React from 'react';

import './App.css';
import { useReducer } from 'react';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from "../reducers"
import { changeOperations,beClear,addToMemory,applyNumber,
  addToTotal,clearMemory} from '../actions';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(addToMemory())}/>
              <CalcButton value={"MR"} onClick={() => dispatch(addToTotal())}/>
              <CalcButton value={"MC"} onClick={()=> dispatch(clearMemory()) }/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
              <CalcButton value={2} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
              <CalcButton value={3} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
              <CalcButton value={5} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
              <CalcButton value={6} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
              <CalcButton value={8} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
              <CalcButton value={9} onClick={(e) => dispatch(applyNumber(e.target.value))}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => dispatch(changeOperations(e.target.value))} value={"+"}/>
              <CalcButton onClick={(e) => dispatch(changeOperations(e.target.value))} value={"*"}/>
              <CalcButton onClick={(e) => dispatch(changeOperations(e.target.value))} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => dispatch(beClear())} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
