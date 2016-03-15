import React from "react";
import ReactDOM from  "react-dom";
import ActivityTable from "./js/ActivityTable"
import AppBar from 'material-ui/lib/app-bar';
import ComingAct from "./js/ComingAct";
import ImportantAct from "./js/ImportantAct";
import LastAct from "./js/LastAct";
import EntryForm from "./js/EntryForm";

require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");

const styles = {

  marginTop: "100px",
};
const tableShape ={

	maxHeight : "250px",
	overflow  : "Auto"
};

class Layout extends React.Component{

	constructor(){
		super();
		
		this.state = {
			activityList : []
		};
		
	}
	componentDidMount(){

		this.loadDataFromServer(function(output){
			this.setState({
				activityList : output
			});

		}.bind(this));
	}
	loadDataFromServer(handleData){

		$.ajax({

			type   : "GET",
			url    : "data/activityList.json",
			cache  : false,
			success: function(data){

				handleData(data.activityList);

			}.bind(this)
		});
	}
	submitNewList = (obj) => { 

		console.log("okay__"+ JSON.stringify(obj));
		var len = this.state.activityList.length;
		var item =  this.state.activityList;
		item.push({

			id          : len+1,
			name        :  obj.name,
			date		:  obj.date.toString(),
			description :  obj.des,
			priority   :  "normal"
		});

		this.setState({
			activityList : item
		});
	}
	render(){
		
		return (
			<div>
				<AppBar
				    title="You Acitivity tracker "
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				 /> 
				
				<div className = "container" style = {styles}>
					<div className = "row"> 
						<h3 className ="col-sm-12"> Today's Acitivity List: </h3>
					</div>
					<div className ="row">
						<div className = "col-sm-8" >
							<div className ="row">
								<div className = "col-sm-12" style = {tableShape}> 
									<ActivityTable  activityList =  {this.state.activityList} />
								</div>
								<div className = "col-sm-8">
									<EntryForm submitNewList = {this.submitNewList}/>
								</div>
							</div> 
						</div>
						<div className ="col-sm-4">
							<div className = "row">
								<div className="col-sm-12">
									<ComingAct />
								</div>
								<div className = "col-sm-10">
									<ImportantAct />
								</div>
								<div className = "col-sm-12">
									<LastAct />
								</div>

							</div>
						</div>
					</div>

				</div>
  			</div>
			
		);
	}
}

ReactDOM.render(<Layout />, document.getElementById("app"))