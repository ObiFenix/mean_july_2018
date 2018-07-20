var hashMap = [];
hashMap.length = 30;  // set the capacity by defining the length of the array
String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(var i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;  // bitwise operators are used to manipulate the string in binary
        hash &= hash;                
    }
    return hash;    // by the end of the loop, the hash is unique to this string
}
// Now, when we need a particular string's hash code, we may call its hashCode method, which we just created
var hashedKey = "role".hashCode();
function mod(input, div){
    return (input % div + div) % div;
}
// use the function to get the index position where we should store our data
var idx = mod(hashedKey, hashMap.length);

function makeObject(key, value){
    var keyHash= key.hashCode();
    var newIndex = mod(keyHash, hashMap.length);
    console.log(newIndex);
    if (!hashMap[newIndex]){
        hashMap[newIndex]=[];
    }
    hashMap[newIndex].push([key,value]);
    console.log("Something happened", hashMap);
}

