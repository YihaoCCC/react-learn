import { Component } from "react";
import { commentState } from "../mokeDate/commentsDate";
import './comment.css'
class Comments extends Component {
    
    state = commentState
    changeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    submit = () => {
        this.setState({
            comments: [...this.state.comments, {
                id: Math.random(),
                ...this.state.user,
                content: this.state.content,
                time: new Date().toLocaleString(),
                collect: false
            }],
            content: ''
        })
    }
    collect = (id) => {
        this.setState({
            comments: this.state.comments.map((item) => {
                if(item.id === id) {
                    return {...item, collect: !item.collect}
                } else {
                    return item
                }
            })
        })
    }
    delComment = (id) => {
        this.setState({
            comments: this.state.comments.filter(item => item.id !== id)
        })
    }
    render() {
        return (
            <div style={{width:"1000px", background:"#111", padding: '30px 20px',position:'relative'}}>
                <h3 style={{textAlign: 'left', fontSize: '28px',color: '#fff'}}>评论</h3>
                <div className="commetInput">
                    <input onChange={this.changeContent} value={this.state.content} type="input" placeholder="爱发评论的人，运气都很棒" />
                    <div className="buttonBox">
                        <span className="limit">{this.state.content.length}/100</span>
                        <button className="mybutton" onClick={this.submit}>submit comment</button>
                    </div>
                </div>
                <h2 style={{textAlign: 'left', fontSize: '32px',color:'#fff'}}>热门评论<em>（{this.state.comments.length}）</em></h2>
                {
                    this.state.comments.map((item) => (
                        <div className="commentList" key={item.id}>
                            <img src={item.avatar} alt="" />
                            <div className="listRight">
                                <p className={`nickName ${item.vip ? 'vip' : ''}`}  > {item.name} 
                                        {item.vip ? <img src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png" alt="" /> : null}
                                </p>
                                <span className="time">{item.time}                  
                                    <svg  onClick={() => this.collect(item.id)} className={item.collect ? 'like' : null} style={{margin: '0 15px',cursor: "pointer"}} t="1654987592252"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2151" width="26" height="22">
                                        <path d="M746.112 497.76A132.48 132.48 0 0 0 784 404.752C784 331.424 724.784 272 651.776 272a132.16 132.16 0 0 0-118.304 73.392c-8.832 17.712-34.112 17.712-42.944 0A132.16 132.16 0 0 0 372.224 272C299.2 272 240 331.424 240 404.752c0 35.2 13.68 68.16 37.712 92.832 1.84 1.904 3.312 4 4.384 6.192L504.72 741.44l238.592-240.24c0.8-1.2 1.744-2.352 2.8-3.44zM192 404.752C192 304.944 272.672 224 372.224 224c55.344 0 106.192 25.248 139.776 66.624A179.872 179.872 0 0 1 651.776 224C751.328 224 832 304.944 832 404.752c0 46.192-17.376 89.68-48 122.816a24.48 24.48 0 0 1-3.248 4.048l-259.52 261.296a24 24 0 0 1-34.544-0.512l-244.752-261.28a24.176 24.176 0 0 1-4.112-5.936A180.448 180.448 0 0 1 192 404.752z" p-id="2152" fill="#8a8a8a">
                                        </path>
                                    </svg>
                                    {item.name === this.state.user.name ? <span onClick={() => this.delComment(item.id)} className="del">删除</span>: null}
                                </span>
                                <p className="content">{item.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default Comments