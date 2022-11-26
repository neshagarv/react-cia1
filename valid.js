import React,{useState} from 'react'
import './App.css';
function Valid()
{
 const[username, setusername]=useState("")
 const[password, setpassword]=useState("")
 const[email,setemail]=useState("")

 const[error,setEror]=useState(false)

 const handleState=(e)=>{
        e.preventDefault();
   if(username.length==0 || password.length==0 || email.length==0)
   {  setEror(true) }
   if(username && password && email)
   {
    console.log("username:", username , "\npassword: ",password ,"\nemail:", email)
   } 
}
return( 
    <>
   <form onSubmit={handleState}>
   <div className='col'>
   <div id='header'><h3>Form Validation</h3></div>
    <div>
        <p id='cen'>Enter your username</p>
        <input type="text" onChange={e=>setusername(e.target.value)}></input>
    </div>
      {error && username.length===0 ?
    <label id='error'>Please fill the column</label>:""}
    <div>
        <p id='cen'>Enter your Email</p>
        <input type="email" onChange={e=>setemail(e.target.value)}></input>
    </div>
    {error && email.length!='@'?
    <label id='error'>Invalid Email</label>:""}
    {error && email.length===0 ?
    <label id='error'>Invalid Email</label>:""}
   <div>
         <p id='cen'>Enter your password</p>
         <input type="password" onChange={e=>setpassword(e.target.value)}></input>
    </div>
    {error && password.length===0 ?
    <label id='error'>Please fill the password</label>:""}

    {error && password.length===3 ?
    <label id='error'>weak</label>:""}

    {error && password.length===6 ?
    <label id='error3'>Good</label>:""}

    {error && password.length===8 ?
    <label id='error8'>Strong</label>:""}

    {error && password.length>8 ?
    <label id='error9'>VeryStrong</label>:""}

    <div> 
         <button type="Submit">Submit</button>
    </div> 
    </div>
    </form>
    </>
 )
  }
  export default Valid;