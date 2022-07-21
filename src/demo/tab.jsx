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
        <div className={`TabContent `}>
           {
             this.state.active === '时间' ? 
             <div className='content'>
                <h3 className='title'>
                  这是一段文字111111
                </h3>
                <p className='sub'>这是一段描述111111</p>
                <span className='des'>
                  这是一段描述111111
                </span>
             </div>
             :
             <div>
                <h3>
                  这是一段文字22222
                </h3>
                <p>这是一段描述22222</p>
                <span>
                  这是一段描述222222
                </span>
             </div>
           }
        </div>
      </>
    )
  }
}
