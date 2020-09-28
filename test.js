(async () => {
    const response = await fetch('https://krapipl.imumk.ru:8443/api/mobilev1/update', {
        method: 'post',
        body: JSON.stringify({data: ''}),
        headers: {
            'Content-type': 'application/json',
        },
    });

    if (!response.ok){
        //do something
        return
    }

    const data = await response.json();
    console.log(data);
})();


//https://www.imumk.ru/svc/coursecover/4306  на конце id