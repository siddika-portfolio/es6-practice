const person = {name:'Jack william', age:'15', job:'facebooker', gfName:'Ema watson', phone:'01729012875',friends:['raju', 'mina','bone','liza'], Address:'lalbag'};
const { gfName, phone, Address,salary} = person

// console.log(gfName,phone,salary,Address);
// console.log(gfName,phone,Address);

const friends = ['amir khan', 'Shakib khan', 'Sharuk khan', 'Salman khan'];
const [boroFriend, nextFriend,...restFriends] = friends;

// console.log(restFriends);

const complexObject = {
    name:'abc',
    info: {
        Address:'kola bagan',
        leader:'Tiger leader'
    }
}

const { leader } = complexObject.info;
console.log(leader);