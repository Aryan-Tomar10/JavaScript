class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const aryan = new user('Aryan')
// console.log(aryan.createId())

const iphone = new Teacher('iphone', 'iphone@g.com')
iphone.logMe()