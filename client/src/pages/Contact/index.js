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
        if(field === "name"){
            this.setState({name: event.target.value});
        }
        if(field === "email"){
            this.setState({email: event.target.value});
        }
        if(field === "message"){
            this.setState({message: event.target.value});
        }
            
    }

     handleSubmit = (event) =>{
    
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
            if(response.data.status === "failed"){
                console.log("Message Failed")
            }
        })
    
}


    render(){
        let buttontext = this.state.status;
    return (
        <>
        <form onSubmit={this.handleSubmit.bind(this)} method={`post`}>
            <Card className={`card contact`}>
            <div id={`contact`}
            className={`contact_header`}>
                <h1>Hello and Welcome!</h1>
            </div>
                
                <Tile 
                className={`tile_contact`} 
                parallax={0.05}
                positive={' '}>                    
                    <Tile 
                    className={`tile_contact-name`} 
                    parallax={0.05}
                    positive={''}>
                        <input 
                        className={`input`}
                        type={`text`} 
                        placeholder={`name please`}
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                        />
                   </Tile>
                    <Tile 
                    className={`tile_contact-email`} 
                    parallax={0.07}
                    positive={''}>
                        <input 
                        className={`input`} 
                        type={`email`} 
                        placeholder={`email please`}
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                        />
                   </Tile>
                    <Tile 
                    className={`tile_contact-textarea`} 
                    parallax={0.01}
                    positive={'-'}>
                        <textarea 
                        className={`input`} 
                        placeholder={"something would like to say"}
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        required
                        
                        />
                   </Tile>
                    <Tile 
                    className={`tile_contact-submit`} 
                    parallax={0.01}
                    positive={'-'}>
                        <button type={`submit`} className={` input input-submit`} placeholder={"something would like to say"}>{buttontext}</button>}
                   </Tile>
                </Tile>
            </Card>
            </form>
            </>
     )
    }
}

export default Contact




