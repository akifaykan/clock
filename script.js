let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')



setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * 6
    let ss = day.getSeconds() * 6

    hour.style.transform = `rotateZ(${ hh + (mm/12) }deg)`
    minute.style.transform = `rotateZ(${ mm }deg)`
    second.style.transform = `rotateZ(${ ss }deg)`
});
