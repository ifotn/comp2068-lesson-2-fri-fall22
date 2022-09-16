function closedFunction() {
    let counter = 1

    let increment = () => {
        console.log(counter)
        counter++
    }

    console.log('assign')
    return increment
}

// before running, assign the function to a var
let myFunction = closedFunction()

// run twice
myFunction()
myFunction()