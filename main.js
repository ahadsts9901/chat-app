setInterval(() => {

    let month = moment().format('dddd MMMM Do YYYY, h:mm a')

    document.getElementById('date').innerText = month

}, 1);