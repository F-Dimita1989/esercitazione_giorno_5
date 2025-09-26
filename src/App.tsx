import './App.css'
import Counter from './components/Counter';
import Header from './components/Header';
import Input from './components/Input';
import Login from './components/Login';
import Timer from './components/Timer';
import Listener from './components/Listener';
import AbortController from './components/AbortController';
import Split from './components/Split';
import LayoutComponent from './components/LayoutComponent';

export default function App() {
  return (
    <>
    <Header />
    <Counter />
    <Timer />
    <Input />
    <Login />
    <Split />
    <LayoutComponent />
    <Listener />
    <AbortController />
    <main>
    <p>Bnevenuti! Qui costruiremo la nostra app.</p>
    </main>
    </>
  );
}