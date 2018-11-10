import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import './App.css'
import { Input ,Icon} from 'antd';

const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <div>
          <header>
              <img src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" />
              <div className='faxian'>发现</div>
              <div className='guanzhu'>关注</div>
              <div className='xiaoxi'>消息</div>
              <Search
                  placeholder="搜索"
                  onSearch={value => console.log(value)}
                  style={{ width: 160 }}
                  className='topipt'
              />
              <div className='xiewz'>
                  写文章
              </div>
              <div className='geren'>
                  <Icon type="user" style={{fontSize:'30px'}}/>
                  <Icon type="down" />
              </div>

          </header>
      </div>
    );
  }
}

export default App;
