export function coursesFetch() {
    return async dispatch => {
        try {
            const response = await fetch('https://krapipl.imumk.ru:8443/api/mobilev1/update', {
                method: 'post',
                body: JSON.stringify({data: ''}),
                headers: {
                    'Content-type': 'application/json',
                },
            });

            if (!response.ok){
                dispatch(doNothing());
                return
            }

            const data = await response.json();

            if (data.result !== 'Ok'){
                console.log(data.errorMessage);
                dispatch(doNothing());
                return;
            }
            dispatch(addCourses(data.items));
        } catch (e) {
            console.log(e.message);
            dispatch(doNothing());
        }
    };
}


function addCourses(courses) {
    return {
        type: 'ADD_COURSES',
        payload: courses,
    }

}


export function setFindString(string){
    return {
        type: 'SET_FIND_STRING',
        payload: string,
    }
}


export function setFindSubject(string){
    return {
        type: 'SET_FIND_SUBJECT',
        payload: string,
    }
}


export function setFindGenre(string){
    return {
        type: 'SET_FIND_GENRE',
        payload: string,
    }
}


export function setFindGrade(string){
    return {
        type: 'SET_FIND_GRADE',
        payload: string,
    }
}


function doNothing() {
    return {
        type: 'NOTHING',
    }
}


export function setUnit(unit){
    return {
        type: 'SET_UNIT',
        payload: unit,
    }
}