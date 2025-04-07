const formEL = document.querySelector('.form');

formEL.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEL);
    const data = Object.fromEntries(formData);

    //Validate that the fields have data results
    if(data.id == "" || data.director == "" || data.notable_film == ""){
        $.toaster({priority: 'danger', title : 'Error', message : 'Oops something bout to happen'});
    }
    else {
        fetch('https://directors-1.onrender.com/api/v1/directors', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/.json'
            },
            body: JSON.stringify(data)
        }) .then(res => res.json()
            .then(data => console.log(data)))
            .then(error => console.log(error))
            $.toaster({priority : 'success', title : 'Director Add', message : 'New Director'});
    }
});