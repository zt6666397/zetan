import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
library.add(fas)
const App: React.FC = () => {
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme='primary' size='10x' />
        <Menu defaultIndex={'0'} onSelect={(index) => { alert(index) }}  defaultOpenSubMenus={['1']}>
          <MenuItem>
            cool link
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem >
              cool link1
          </MenuItem>
            <MenuItem >
              cool link1
          </MenuItem>
            <MenuItem >
              cool link1
          </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link2
          </MenuItem>
        </Menu>
        {/* <FontAwesomeIcon icon={faCoffee} size='10x' /> */}
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
