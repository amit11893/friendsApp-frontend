import React, {useContext} from 'react';
import {UsersContext} from '../App';

export default function UserList (){
    let {users} = useContext(UsersContext);

    return(<div>
        {users.length ?
        users.map(user => (<User
         key={user.id}
         id={user.id}
        name={`${user.firstName} ${user.lastName}`} image={user.avatar}/>)): null}
    </div>)
}

function User (props){
    let {changeUsers} = useContext(UsersContext);
    return (<div>
        <p>{props.name}</p>
        <button onClick={() => changeUsers(props.id, 1)}>Friends</button>
        <button onClick={() => changeUsers(props.id, 2)}>Friends of Friends</button>
        <image src={props.image}/>
    </div>)
}
