import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           userId:'',
           title:'',
           body:''
        }
      }
  render() {
    const {userId,title,body} = this.state
    return (
      <div>
        <form>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="title" value={title}/>
            </div>
            <div>
                <input type="text" name="body" value={body}/>
            </div>
        </form>
      </div>
    )
  }
}

export default PostForm