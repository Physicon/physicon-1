const initialState = {
    courses: [],
    findSubject: '',
    findGenre: '',
    findGrade: '',
    findString: '',
    unit: 'руб',
};


export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COURSES':
            return {...state, courses: [...action.payload]};
        case 'SET_FIND_SUBJECT':
            return {...state, findSubject: action.payload};
        case 'SET_FIND_GENRE':
            return {...state, findGenre: action.payload};
        case 'SET_FIND_GRADE':
            return {...state, findGrade: action.payload};
        case 'SET_FIND_STRING':
            return {...state, findString: action.payload};
        case 'SET_UNIT':
            return {...state, unit: action.payload};
        default:
            return state;
    }
}