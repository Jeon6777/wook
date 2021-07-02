// import { useState } from "react"
const axios = require('axios')
var state = {
    id: '',
    pw: ''
}

const auth = () => {
    axios({
        url:'/auth',
        method:'post',
        data:state
    })
    console.log("state")
    console.log(state)
}

// const [id, setId] = useState("");
// const [pw, setPw] = useState("");

// const authUser = () =>{
    
// }

export default () => (
    <div>
        <form id="authForm" onSubmit={auth}>
            <input type="text" name="id" onChange={state.id=this.value}/><br/>
            <input type="password" name="pw" onChange={state.pw=this.value}/>
            <input type="submit" value="보내기" />
        </form>
    </div>
)