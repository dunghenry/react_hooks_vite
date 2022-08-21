import React from 'react'
import Effect from './components/effect';
import LayoutEffect from './components/layouteffect';
import Memo from './components/memo';
import State from './components/state'
import UseId from './components/uesid';
import UseCallback from './components/usecallback';
import UseContext from './components/usecontext';
import ChildCpn from './components/usecontext/ChildCpn';
import UseImperativeHandle from './components/useimperativehandle';
import UseMemo from './components/usememo';
import UseReducer from './components/usereducer';
import UseRef from './components/useref';
import UseTransition from './components/usetransition';
import Form from './components/usetransitions/Form';
const App = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      {/* <State /> */}
      {/* {show && <Effect />}
      <button onClick={() => setShow(!show)}>Set Show</button>
      <LayoutEffect/> */}
      {/* <UseId /> */}
      {/* <Memo/> */}
      {/* <UseCallback/> */}
      {/* <UseMemo/> */}
      {/* <UseContext>
        <ChildCpn />
      </UseContext> */}
      {/* <UseRef /> */}
      {/* <UseReducer/> */}

      {/* <UseTransition/> */}

      {/* <UseImperativeHandle/> */}

      <Form/>
    </div>
  )
}

export default App