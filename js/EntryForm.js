import React from "react";
import ReactDOM from "react-dom";
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const styles = {


	marginTop : "20%",
	padding   : "5xp"
}

const btn ={

	width : "50%",
	marginTop: "15px"
}

export default class EntryForm extends React.Component{

	constructor(props){

		super(props);
		
		this.state = {

			entryDate : new Date(),
			entryName : "Meeting with Zero corportaiton",
			entryDes : "boogie woogie"
		}

		

		
	}
	customValueLink=(key)=>{
		return{

			value: this.state[key],
			requestChange: function(newValue){

				var newState = {};
				newState[key] = newValue;
				console.log(newValue+ "___"+key+"____"+ newState[key]);
				this.setState(newState);

			}.bind(this)
		}
	}
	submitForm = () =>{
		

		var newList = {}; 
		newList = {

			name: this.state.entryName,
			date: this.state.entryDate,
			des : this.state.entryDes
		}
		
		this.props.submitNewList(newList);
	}
	render() {

		return (
			
			<div style = {styles}>
				<h3> Entry Form: </h3>

				<DatePicker 
					value = {this.state.entryDate}
					hintText="Date" container = "inline" mode="landscape" />
				
				<TextField 
					valueLink={this.customValueLink('entryName')}
					floatingLabelText = "Acitivity Name" />

				<TextField
					valueLink={this.customValueLink('entryDes')}
					floatingLabelText = "Activity Description"
					multiLine = {true}
					rows = {1}
					rowsMax = {4} />

				<RaisedButton 
					onClick = {this.submitForm}
					label="Submit" style = {btn} />

			</div>
		);
	}
}