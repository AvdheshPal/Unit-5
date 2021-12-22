import ('./style.css')

import logo from './logo.png'
import layslogo from './lays.png'

let heading = document.createElement("h1")
heading.textContent="this is my heading"

let image = document.createElement('img')
image.classList="logo"
image.src=layslogo

let apple = document.createElement('img')
apple.classList="apple"
apple.src=logo

document.getElementById('root').append(heading,image,apple)
