// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
//
// export {firstName, lastName, year};
//用来存储session数据
function setSession({key, value = ''}) {
    //obj=>string
    let val = JSON.stringify(value);
    sessionStorage.setItem(key, val);
};

// setSession({user:{firstName:"wang",lastName:"li",year:"1996"}});
function getSession(key) {
    let val = sessionStorage.getItem(key);
    //string=>obj
    let value = JSON.parse(val);
    return value || "";
};

function isLogin() {
    let uid = getSession('uid');
    return uid ? true : false;
}

export {
    setSession,
    getSession,
    isLogin
}
