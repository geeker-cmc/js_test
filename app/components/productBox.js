let React=require('react');
let ProductBox;
let arr=[
   <h1>我是测试1</h1>,
   <h2>我是测试2</h2>
]
ProductBox=React.createClass({
	render:function(){
		return (
			<div>
                 <div>{arr}</div>
			</div>
			);
	}
})
module.exports=ProductBox;