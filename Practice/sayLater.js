const sayLater = (text, when) => {
    let task = () => console.log(text)
    setTimeout(task, when)
}

sayLater('hello', 1000)
sayLater('good', 5000)