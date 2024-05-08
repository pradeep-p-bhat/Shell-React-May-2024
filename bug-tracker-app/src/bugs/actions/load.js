import axios from 'axios';

function getDataFromMemory(){
    return [
      {
        id: 1,
        name: "Server communication failure",
        isClosed: false,
        createdAt: new Date(),
      },
      {
        id: 2,
        name: "Data integrity checks failed",
        isClosed: true,
        createdAt: new Date(),
      },
    ];
}

function getDataFromServer(){
    let p = axios.get('http://localhost:3030/bugs');
    let p2 = p.then(function(response){
        return response.data;
    })
    return p2;

}

// using the asyncMiddleware (thunk)
export function load(){
    return function(dispatch){
        const p = getDataFromServer();
        p.then(function(bugs){
            const action = { type: "BUGS_INIT", payload: bugs };
            dispatch(action);
        })
        
    } 
} 


// using the promiseMiddleware
/* 
export function load() {
    const p = getDataFromServer();
    const p2 = p.then(function (bugs) {
      const action = { type: "BUGS_INIT", payload: bugs };
      return action
    });
    return p2;
} 
*/