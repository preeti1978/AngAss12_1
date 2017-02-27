var arr = [];//create a new arr
var obj = {name:"abc",type:"private"};//go on adding objects to it
arr.push(obj);
obj ={name: "xyz", type:"public"};
arr.push(obj);
obj= {name: "test", type:"private"};
arr.push(obj);
obj={name: "Adom", type:"private"};
arr.push(obj);
obj={name: "Mahesh", type:"public"};
arr.push(obj);
obj={name: "Piyush", type:"public"};
arr.push(obj);

//the string which is going to be provided as parameter to pipe
let filterString:string="public";