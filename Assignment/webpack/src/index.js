import ('./style.css')


import React from "react"
import ReactDom from "react-dom"
import logo from "./logo.png"
import layslogo from "./lays.png"

let heading = document.createElement("h1")
heading.textContent="this is my heading"

let image = document.createElement('img')
image.classList="logo"
image.src=layslogo

let apple = document.createElement('img')
apple.classList="apple"
apple.src=logo

// document.getElementById('root').append(heading,image,apple)
// ReactDom.render(
//     // React.createElement('h1',null,"this is my heading"),
//     <h1>hello
//     <i className="yellow">  this is my div</i>
//     </h1>
//     ,
//     document.getElementById('root')
// )

document.getElementById('root').append(heading,image,apple)
