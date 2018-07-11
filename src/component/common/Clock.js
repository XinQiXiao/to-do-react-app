import React, { Component } from 'react'


class Clock extends Component{
	constructor(props){
		super(props)

		this.state = {
			date: new Date(),
			isLogin: false
		}

		this.posts = [
			{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
			{id: 2, title: 'Installation', content: 'You can install React from npm.'}
		]
	}

	componentDidMount(){
		this.timerID = setInterval(()=> this._tick(), 1000)
	}

	componentWillUnmount(){
		clearInterval(this.timerID)
	}

	_tick(){
		this.setState({
			date: new Date()
		})
	}

	_btnClick = (e)=>{
		// console.log('_btnClick this=>', this, '\n e=>', e)
		e.preventDefault()
		this.setState(preState => ({
			isLogin: !preState.isLogin
		}))
	}

	render(){
		const { date, isLogin } = this.state
		return (
			<div >
				<h1>Hello, world!</h1>
				<h2>It is {date.toLocaleTimeString()}</h2>
				<button onClick={this._btnClick}>Click me.</button>
				{isLogin && <span>current</span>}
				<br/>
				<Blog posts={this.posts} />
			</div>
		)
	}
}

function Blog(props){
	const { posts = [] } = props
	const sidebar = (
		<ul>
			{posts.map((post) => 
				<li key={post.id}>
					{post.title}
				</li>
			)}
		</ul>
	)
	const content = posts.map((post) => 
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	)
	return (
		<div>
			{sidebar}
			<hr />
			{content}
		</div>
	)
}

export default Clock
