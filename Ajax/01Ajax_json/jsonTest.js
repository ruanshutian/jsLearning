
let jsonObject ={
    "name":"rst",
    "age":18,
    "address":{
        "city":"HeFei",
        "school":"USTC"
    },
    "teaching":function (){
        alert("JS");
    },
};

// alert(jsonObject.name)
// alert(jsonObject.address)
let jsonObjectStr = '{\n' +
    '    "name":"rst",\n' +
    '    "age":18,\n' +
    '    "address":{\n' +
    '        "city":"HeFei",\n' +
    '        "school":"USTC"\n' +
    '    },\n' +
    '    "teaching":function (){\n' +
    '        alert("JS");\n' +
    '    },\n' +
    '}';
let jsonStr = "alert('Hello alert')";
eval(jsonStr)
let testOnbject = eval("("+ jsonObjectStr+")");
alert(testOnbject.name);


