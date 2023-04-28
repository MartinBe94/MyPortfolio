import './Contact.css'
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDataStore } from '../Hooks/useDatastore';
import { useRef} from 'react'
import emailjs from '@emailjs/browser'



export const ContactForm =()=>{

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

    const form = useRef();
    
    const handleSubmit = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
      

      emailjs.sendForm('service_e682ozq', 'template_25txqla', form.current, 'r_SWyYMdkPvk2QaHW')
        .then((result) => {
            // show the user a success message
        }, (error) => {
            // show the user an error
        });

        alert("Your message is sended 😎")

        setMessage('');
        setEmail('');
        setName('');
    };

    return (
      <form ref={form} onSubmit={handleSubmit}>
    <div className="mailtome">
    <p>Name:</p>
    <input 
    type="text" 
    id='name'
    name="user_name" 
    placeholder='Enter name' 
    onChange={event => setName(event.target.value)}
    value={name}
    />

    <p>Email:</p>
    <input 
    type="email" 
    id='email'
    name="user_email" 
    placeholder='example@gmail.com'
    onChange={event => setEmail(event.target.value)}
    value={email}
    />
        
    <p>Message:</p>
    <textarea 
    className="message" 
    name="message" 
    type="text" 
    id='message'
    placeholder='Enter text here'
    onChange={event => setMessage(event.target.value)}
    value={message}
    />
    <p><button type="submit" className='send' value="Send"
    >Submit</button></p>
    </div>
      </form>
    );
   };

    // const [data,setData] = useState({name:"",email:"",text:""})

    // const [name, setName] = useDataStore(
    //     (state) => [state.name, state.setName],
    //     shallow
    //   );
    //   const nameRef = useRef(undefined);
    //   const onSubmitNameHandler = (event) => {
    //     event.preventDefault();
    //     console.log(nameRef.current.value);
    //     setName(nameRef.current.value);
    //   };
    //   useEffect(() => {
    //     console.log("Connected to chat room!");
    //     return () => {
    //       console.log("Disconnected from chat room!");
    //     };
    //   }, []);
    //   useEffect(() => {
    //     console.log("Logged in as " + name);
    //   }, [name]);
    //   return (
    //     <>
    //       <p>Hej ifrån App2!</p>
         
    //     </>


    // const handleChange= (e) =>{
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setData({...data, [name]:value})
    // }

    // const handleSubmit= (e) =>{
    //     e.preventDefault()
    //     alert(info)
    // }

//     const nameRef = useRef(null)
// const emailRef = useRef(null)
// const messageRef =  useRef(null)

// const handleSubmit = (event) => {
//     event.preventDefault()

//     const data = {
//           name: nameRef.current.value,
//           email: emailRef.current.value,
//           message: messageRef.current.value
//           }
//     alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
//     data.value="";

// }


    // return(
    //     <>

{/* <form onSubmit={(event) => onSubmitNameHandler(event)}>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              ref={nameRef}
            ></input>
          </form> */}

    //     <form method='post' onSubmit={handleSubmit}>
    // <div className="mailtome">
    // <p>Name:</p>
    // <input 
    // type="text" 
    // id='name'
    // name="name" 
    // placeholder='Enter name' 
    // tabIndex="1"
    // ref={nameRef}
    // />

    // <p>Email:</p>
    // <input 
    // type="text" 
    // id='email'
    // name="email" 
    // placeholder='example@gmail.com' 
    // tabIndex="2"
    // ref={emailRef}
    // />
        
    // <p>Message:</p>
    // <textarea 
    // className="message" 
    // name="message" 
    // type="text" 
    // id='text'
    // placeholder='Enter text here' 
    // tabIndex="3"
    // ref={messageRef}
    // />
    // <p><button type="submit" className='send'>Submit</button></p>
    // </div>
    // </form>
    // </>
    // )
    //     }
              