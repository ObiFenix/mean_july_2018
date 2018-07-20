var hashMap = [];
hashMap.length = 30;  // set the capacity by defining the length of the array
String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;// bitwise operators are used to manipulate the string in binary
        hash &= hash;
    }
    return hash;// by the end of the loop, the hash is unique to this string
}
    // Now, when we need a particular string's hash code, we may call its hashCode method, which we just created
    var hashedKey = "role".hashCode();
    // console.log(hashedKey);

function mod(input, div){
    return (input % div + div) % div;
    }
    // console.log(hashedKey % 30);
    // use the function to get the index position where we should store our data
    var idx = mod(hashedKey, hashMap.length);
    // console.log(idx);

function insert(key,value,hashMap){
    var hashedKey = key.hashCode();
    var index = mod(hashedKey, hashMap.length);
    if (hashMap[index] == undefined){
        hashMap[index]=[[key,value]];
    }
    else{
        for (var i=0;i<hashMap[index].length;i++){
            if(hashMap[index][i][0]==key){
                hashMap[index][i][1]=value;
                return hashMap;
            }
        hashMap[index].push[key,value];
        }
    }
    // console.log(index);
    return hashMap;
}

insert('role','pet',hashMap);
insert('role','micah',hashMap);
insert("species", "Snorkasaurus",hashMap);
insert("type", "dinosaur",hashMap);
insert("owner", "Fred Flintstone",hashMap);
insert("creator", "Hanna-Barbera",hashMap);
console.log(hashMap);
