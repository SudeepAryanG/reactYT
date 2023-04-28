import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import {ClassClick} from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/higherOrderComponents/ClickCounter';
import HoverCounter from './components/higherOrderComponents/HoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import CounterTwo  from './components/RenderProps/CounterTwo';
import ComponentC from './components/Context/ComponentC';
import {UserProvider} from './components/Context/userContext';
import PostList from './components/HTTP/PostList';
import PostForm from './components/HTTP/PostForm';
class App extends Component {
  render(){
    return(
      <div className="App">
        <PostForm/>
        {/* <PostList/> */}
        {/* <UserProvider value="Sudeep">
          <ComponentC/>
        </UserProvider> */}
        
        {/* <CounterTwo 
          render={(count,incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}/>
        <CounterTwo
          render={(count,incrementCount)=>(
            <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}/> */}
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render= {(LoggedIn)=> LoggedIn ? 'Sudeep':'Aryan'}/>  */}
        {/* <ClickCounter name='Sudeep '/>
        <HoverCounter name='Aryan '/> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}
        {/* <PortalDemo/> */}
        {/* <FRParentInput/> */}
        {/* <FocusInput/> */}
        {/* <Input/> */}
        {/* <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <RegComp/> */}
        {/* <PureComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifecycleA/> */}
        {/* <Form/> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}        
        {/* <Inline/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Hello/> */}
        {/* <Welcome name="Bruce" heroName="Batman" >
        </Welcome>
        <Welcome name="Clark" heroName="Superman" >
        </Welcome>
        <Welcome name="Dayana" heroName="Wonder Women" >
        </Welcome> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is Sudeep Aryan</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Dayana" heroName="Wonder Women"/> */}
      </div>
    )
  }
}
export default App;