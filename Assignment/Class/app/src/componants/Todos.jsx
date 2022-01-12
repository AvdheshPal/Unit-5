import React, { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, addTodoError, addTodoLoading, addTodoSuccess, getTodoError,getTodoLoading,getTodoSuccess } from "../Redux/Action"
export const Todos = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch();
    const {loading,todos,error} = useSelector(state => ({
        loading:state.loading,
        todos:state.todos,
        error:state.error,
    }));
    useEffect( () =>
    {
      getfun()
    },[])
    const postfun = async () => {
        dispatch(addTodoLoading());
        fetch(" http://localhost:3004/todos  ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: false, title: text }),
        })
            .then((d) => d.json())
            .then((res) => {
                dispatch(addTodoSuccess(res));
            })
            .catch((err) => {
                dispatch(addTodoError(err));
            });
    }
    async function getfun(){
        try
        {
          dispatch(getTodoLoading())
          const res = await fetch( 'http://localhost:3004/todos' )
          const data =await res.json();
    
          dispatch(getTodoSuccess(data))
          
        } catch ( err )
        {
          dispatch(getTodoError(err))
        }
    }
    return loading ? (<div> Loading...</div>) : error ? (<div>Something went wrong...</div>):(
        <div>
            <input type="text" placeholder="Enter Todo here" onChange={(e) => { setText(e.target.value); }} />
            <button onClick={() => {
                postfun();
            }} >Add</button>
            {todos.map((e, i) => <div key={i}>{e.title} - {e.status ? "Done" : "Not Done"}</div>)}
        </div>
    )
}