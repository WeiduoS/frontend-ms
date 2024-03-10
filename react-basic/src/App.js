import logo from './logo.svg';
import './App.css';
import {useState} from "react";


const count = 100;
function getName() {
    return 'jack'
}
const list = [
    { id: 1001, name: 'Vue' },
    { id: 1002, name: 'React' },
    { id: 1003, name: 'Angular' },
]

const isLogin = true;

const articleType = 1;
function getArticleTem() {
    if(articleType === 1) {
        return <div>我是无图模式</div>
    } else if(articleType === 2) {
        return <div>我是单图模式</div>
    } else return <div>我是三图模式</div>
}

function Button() {
    return <button>a button</button>
}

function App() {
    // function clickHandler() {
    //     console.log('我被点击了！！')
    // }

    // function clickHandler(e) {
    //     console.log('我被点击了！！', e)
    // }

    // function clickHandler(name) {
    //     console.log('我被点击了！！', name)
    // }

    function clickHandler(name, e) {
        console.log('我被点击了！！', name)
    }

    const [num, setNum] = useState(0);


    return (
    <div className="App">
            this is App
            {/* 使用引号传递字符 */}
            {'this is message'}
            {/* 识别js变量 */}
            {count}
            {/* 函数调用 */}
            {getName()}
            {/* 方法调用 */}
            {new Date().getDate()}
            <div style={{color: 'red'}}>this is div</div>

            {/* 渲染列表 */}
            {/* map 循环哪个结构 return结构 */}
            <ul>
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>

            {/* 逻辑与 && */}
            {isLogin && <span>this is span</span>}
            {/* 三元运算 */}
            {isLogin ? <span>jack</span> : <span>loading...</span>}

            {getArticleTem()}

            {/*<button onClick={clickHandler}>Click me</button>*/}
            {/*<button onClick={() => clickHandler('jack')}>Click me</button>*/}
            <button onClick={(e) => clickHandler('jack', e)}>Click me</button>
            {/* 使用组件 */}
            <Button/>
            <Button></Button>

            <button onClick={() => setNum(num + 1)}>{num}</button>

            <span className={'foo'}> this is a foo class</span>
        </div>
    );
}

export default App;
