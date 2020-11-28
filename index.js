// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}
function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}
function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let newDrivers = drivers.slice()
    newDrivers.push(name)
    return newDrivers
}
function prependDriver(name){
    let newDrivers = drivers.slice()
    newDrivers.unshift(name)
    return newDrivers
}
function removeLastDriver(){
    let newDrivers = drivers.slice(0, drivers.length - 1)
    return newDrivers
}
function removeFirstDriver(){
    let newDrivers = drivers.slice(1)
    return newDrivers
}