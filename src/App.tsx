import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'


const App: React.FC = () => {
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => { alert(index) }}>
          <MenuItem index={0}>
            cool link
          </MenuItem>
          <MenuItem index={1} disabled>
            cool link1
          </MenuItem>
          <MenuItem index={2}>
            cool link2
          </MenuItem>
        </Menu>


        <Button >Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} disabled onClick={() => alert('111')}>Hello1111</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello1111111111</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>Hello1111111111</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled >baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">baidu Link</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
