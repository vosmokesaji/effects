var QWEKeyboard = "QWERTYUIOPASDFGHJKLZXCVBNM",
    ABCKeyboard = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    NineKeyboard = [
        "ABC",
        "DEF",
        "GHI",
        "JKL",
        "MNO",
        "PQRS",
        "TUV",
        "WXYZ"
    ];

var Encryption = function(){
    this.QWEKeyboard = "QWERTYUIOPASDFGHJKLZXCVBNM",
    this.ABCKeyboard = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    this.NineKeyboard = [
        "ABC",
        "DEF",
        "GHI",
        "JKL",
        "MNO",
        "PQRS",
        "TUV",
        "WXYZ"
    ],
    this.qweToabc = function(source){
        if(typeof(source) !== "string" || !source.length){
            alert("输入有误");
            return;
        }
        var cipher = "",
            sourceArr = source.toUpperCase().split(""),
            i = 0;
        for(; i < sourceArr.length; i ++){
            cipher += this.ABCKeyboard[this.QWEKeyboard.indexOf(sourceArr[i])];
        }
        return cipher;

    },
    this.abcToqwe = function(source){
        if(typeof(source) !== "string" || !source.length){
            alert("输入有误");
            return;
        }
        var cipher = "",
            sourceArr = source.toUpperCase().split(""),
            i = 0;
        for(; i < sourceArr.length; i ++){
            cipher += this.QWEKeyboard[this.ABCKeyboard.indexOf(sourceArr[i])];
        }
        return cipher;
    },
    this.toNineKeyboardNumber = function(source){
        if(typeof(source) !== "string" || !source.length){
            alert("输入有误");
            return;
        }
        var cipher = "",
            sourceArr = source.toUpperCase().split(""),
            i = 0,
            j = 0;
        for(; i < sourceArr.length; i ++){
            for(j = 0; j < this.NineKeyboard.length; j ++){
                if(this.NineKeyboard[j].indexOf(sourceArr[i]) > -1){
                    cipher += (j + 2);
                    cipher += (this.NineKeyboard[j].indexOf(sourceArr[i]) + 1);
                    break;
                }
            }
        }
        return cipher;
    }
}


var testObj = new Encryption(),
    test_abcToqwe = "AbCde",
    test_qweToabc = "qweRTYuIop",
    test_toNineKeyboardNumber = "cnzr";

var test_abcToqwe_output = testObj.abcToqwe(test_abcToqwe),
    test_qweToabc_output = testObj.qweToabc(test_qweToabc),
    test_toNineKeyboardNumber_output = testObj.toNineKeyboardNumber(test_toNineKeyboardNumber);

console.log("test_abcToqwe : " + test_abcToqwe + " --> " + test_abcToqwe_output);
console.log("test_qweToabc : " + test_qweToabc + " --> " + test_qweToabc_output);
console.log("test_toNineKeyboardNumber : " + test_toNineKeyboardNumber + " --> " + test_toNineKeyboardNumber_output);



$("body")
    .on("keydown","#input",function(e){
        if(e.keyCode == 13){
            var output = $("#input").val().split(" ").join("");
            if(!output.length){
                alert("place input your name!");
                return;
            }
            $("#input").val("");

            var changeObj = new Encryption()
            console.log(output);
            output = changeObj.abcToqwe(output);
            console.log(output);
            output = changeObj.toNineKeyboardNumber(output);
            console.log(output);
            $("#output").html(output);
        }
    })
    .on("click","#btn",function(){
        var output = $("#input").val().split(" ").join("");
        if(!output.length){
            alert("place input your name!");
            return;
        }
        $("#input").val("");

        var changeObj = new Encryption()
        console.log(output);
        output = changeObj.abcToqwe(output);
        console.log(output);
        output = changeObj.toNineKeyboardNumber(output);
        console.log(output);
        $("#output").html(output);
    })


