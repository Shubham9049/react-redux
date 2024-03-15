import React from "react"


function User(props){
    // console.log(props.data.name)
    const {data}=props
    console.log(data)
return(
    <div>
        <h1>user component</h1>
        <h2>hello my name is {data.name} and my age is {data.age}</h2>
    </div>
)
}

export default User;