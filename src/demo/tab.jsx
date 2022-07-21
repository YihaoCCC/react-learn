import React, { Component } from 'react'
import './tab.css'

export default class tab extends Component {
    state = {
        active: '时间',
        tab: ['时间','点赞']
    }
    changeTab = (name) => {
      this.setState({
        active: name
      })
    }
    render() {
    return (
      <>
        <div className='TabBox'>
          {
              this.state.tab.map((item) => {
                  return (
                      <li key={item} className={item === this.state.active?'time':'like'} onClick={() => this.changeTab(item)}>
                        按
                        
                        <span >
                        {item}
                        </span>排序
                      </li>
                  )
              })
          }
        </div>
        <div className={`TabContent ${this.state.active === '时间' ? 'time' : ' '}`}>
          {
            this.state.active === '时间' ? <div className={`timebox`}> 1</div> : <div className='likebox'> 2</div>
          }
        </div>
      </>
    )
  }
}
