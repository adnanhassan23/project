class Auth {
    User=localStorage.getItem('type')
    constructor(){
        this.authenticated = this.User?true:false;
    }

    login=(type)=>{
        this.authenticated=true;
        localStorage.setItem('type', type)
    }

    logout=()=>{
        this.authenticated=false;
        localStorage.clear()
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Auth();