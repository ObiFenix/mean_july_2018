var hashMap = [];
hashMap.length = 30;

String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) { return hash; }
    for (i=0; i<this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;
        hash &= hash;
    }
    return hash;
}

function mod(input, div){
    return (input % div + div) % div;
}

function hashInsert(key, val, hashMap) {
   if (key.length < 1 || hashMap.length < 1) { return undefined; }
   var hashedKey = key.hashCode();
   var idx = mod(hashedKey, hashMap.length);
   if (hashMap[idx] == undefined) { hashMap[idx] = [[key, val]]; }
   else {
      for (var i=0;i<hashMap[idx].length; i++){
         if (hashMap[idx][i][0] == key) { hashMap[idx][i][1] = val; }
         else                           { hashMap[idx].push([key, val]); }
      }
   } return hashMap;
}

hashInsert('Name','Dan',hashMap);
console.log(hashMap);

hashInsert('Name','Eric',hashMap);
console.log(hashMap);

function hashLookUp(hashMap, key){
   if(key.length < 1 || hashMap.length < 1) { return undefined; }
   var hashedKey = key.hashCode();
   var idx = mod(hashedKey, hashMap.length);
   if(hashMap[idx] != undefined){
      for (var i = 0;i<hashMap[idx].length; i++) {
         if (key == hashMap[idx][i][0]) {
            return hashMap[idx][i][1];
         }
      }
   }
   return null;
}

console.log(hashLookUp(hashMap, 'Name'));
