import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
// import SubMenu from './components/Menu/subMenu'
// import Icon from './components/Icon/icon'
// import Transition from './components/Transition/transition'
// import Button from './components/Button/button'
// import Input from './components/Input'
// import AutoComplete from './components/AutoComplete'
library.add(fas);
var App = function () {
    var _a = useState(''), title = _a[0], setTitle = _a[1];
    var postData = {
        title: 'my title',
        body: 'hello man'
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadFile = files[0];
            var formData = new FormData();
            formData.append(uploadFile.name, uploadFile);
            axios.post("http://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (res) {
                console.log(res);
            });
        }
    };
    useEffect(function () {
        // axios.get('http://jsonplaceholder.typicode.com/posts/1', {
        //   headers: {
        //     'X-Requested-With': 'XMLHttpRequest'
        //   },
        //   responseType: 'json'
        // })
        //   .then(res => {
        //     console.log(res);
        //     setTitle(res.data.title);
        //   })
        // axios.post('http://jsonplaceholder.typicode.com/posts', postData)
        //   .then(res => {
        //     console.log(res);
        //     setTitle(res.data.title);
        //   })
    });
    // const [show, setShow] = useState(false)
    // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange }))));
};
export default App;
