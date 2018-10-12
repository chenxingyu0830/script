var fs = require('fs')  //使用文件系统模块
try{
    var dirName = process.argv[2]   //参数从第2个开始传递
    try{
        fs.mkdirSync("C:\\Users\\cxy\\Desktop\\" + dirName)    
        process.chdir("C:\\Users\\cxy\\Desktop\\" + dirName)  
        fs.mkdirSync('css') 
        fs.mkdirSync('js')  
        
        fs.writeFileSync("index.html","<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
        fs.writeFileSync("./css/style.css","h1{color: red;}")
        fs.writeFileSync("./js/main.js","var string = \"Hello World\";\nalert(string)")
        
        console.log("success create in Desktop")
        process.exit(0)
    }catch(err2){
        console.log("error!")      
    }

}catch(err1){   //如果桌面创建不成功建在D盘
    fs.mkdirSync("D:\\" + dirName)    
    process.chdir("D:\\" + dirName)  
    fs.mkdirSync('css') 
    fs.mkdirSync('js')  
    
    fs.writeFileSync("index.html","<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")      
    fs.writeFileSync("./css/style.css","h1{color: red;}")
    fs.writeFileSync("./js/main.js","var string = \"Hello World\";\nalert(string)")
    
    console.log("success create in D盘")
    process.exit(0)     
}
