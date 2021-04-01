const getFamilyRelationships = (relationships,source,target) => {
    const structure = {};
    const path = [];
    const paths = [];
    const visited = {};
    createFamilyStructure(structure,relationships);
    dfs(source,target,structure,path,paths,visited)
    console.log(paths)
}

const iterativeDFS = (structure,head) => {
    const stack = [head];
    const visited=  {};
    while(stack.length !== 0){
        const top = stack.pop();
        visited[top] = true;
        const neighbours = structure[top];
        if(neighbours){
        	neighbours.forEach((neighbour) => {
            if(!visited[neighbour.name])
                stack.push(neighbour.name)
        	});
        }
    }
}

const dfs = (source,target,structure,path,paths,visited) => {
    path.push(source);
		visited[source] = true;
    if(source === target){
        paths.push([...path]);
        path.pop();
        visited[source] = false;
        return;
    }

    const neighbours = structure[source];
    for(let i = 0;i<neighbours.length;i++){
    		if(!visited[neighbours[i].name]){
        	    dfs(neighbours[i].name,target,structure,path,paths,visited);
        }
    }
    path.pop();
    visited[source] = false;
}

const createFamilyStructure = (structure,relationships) => {
    for(let i = 0;i<relationships.length;i++){
        const r = relationships[i];
        const start = r[0];
        if(structure[start]){
            const s = structure[start];
            s.push(createNode(r[2],r[1]));
        } else{
            structure[start] = [createNode(r[2],r[1])];
        }
    }
}

const createNode = (name,relation) => ({
    name,
    relation
});