const isNumber=(input)=>{
    if(typeof(input)===Number){
        return "It is a number"
    }else{
        return "It is not a number type"
    };
};

module.exports=isNumber;