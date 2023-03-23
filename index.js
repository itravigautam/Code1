

var arr1=[1,3,7,9,12,27,33];
function divisibility(){
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]%3 ==0){
            console.log(arr1[i]);
        }
    }
}
divisibility();