
let _max_project_id = 100
export function addProject(projectName){
    return {
        type : 'PROJECTS_ADD',
        payload : { id : ++_max_project_id, name : projectName}
    }
}