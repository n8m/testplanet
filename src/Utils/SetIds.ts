//TODO fix ANY types
const setIds = (arr:any) => {
    return arr.forEach( (item:any, i:number) => item.id = i);
};

export default setIds;