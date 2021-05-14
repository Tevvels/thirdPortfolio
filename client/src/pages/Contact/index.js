import React,{Component} from 'react'
import axios from "axios";
import Card from '../../components/Card'
import Tile from '../../components/Tile'
import "./style.css"




class Contact extends Component {
    constructor(){
        super();
        this.state ={
            name:"",
            email:'',
            message:"",
            status: "Submit"
        }
    }



      handleChange = (event) =>{
        const field = event.target.id;
        console.log(field)
        if(field === "name"){
            this.setState({name: event.target.value});
        }
       else if(field === "email"){
            this.setState({email: event.target.value});
        }
      else  if(field === "message"){
            this.setState({message: event.target.value});
        }
            
    }

     handleSubmit = (event) =>{
    
        console.log(this.state)
        event.preventDefault();
        this.setState({status: "Sending"});
        axios({
            method: "POST",
            url: "http://localhost:5000/contact",
            data: this.state,
        }).then((response) =>{
            if(response.data.status === "sent"){
                console.log("message sent");
                this.setState({ name : "", email: "", status: "Submit"});
            }
          else  if(response.data.status === "failed"){
                console.log("Message Failed")
            }
        })
    
}


    render(){
        let buttontext = this.state.status;
        return (
            <>
                <Card className={`card contact`}>
                    <form onSubmit={this.handleSubmit.bind(this)} method={`POST`}>

                        <div id={`contact`} className={`contact_header`}>
                            <h1>Contact</h1>
                        </div>

                                <label className={`input_label`}>Name</label>
                                <input className={`input`} id={`name`} name={`name`} type={`text`} placeholder={`name please`} onChange={this.handleChange.bind(this)} required />

                                    <label className={`input_label`}>Email</label>                                 
                                    <input className={`input`} type={`email`} id={`email`} placeholder={`email please`} onChange={this.handleChange.bind(this)} required />

                                    <label className={`input_label`}>A brief message</label>
                                    <textarea className={`input`} placeholder={"something would like to say"} id={`message`} onChange={this.handleChange.bind(this)} required />
>
                                    <button type={`submit`} className={` input input-submit`} placeholder={"something would like to say"}>{buttontext}</button>

                    </form>
                </Card>
               
            </>
        )
    }
}

export default Contact




