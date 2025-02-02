function showForm(type){
    document.getElementById("registerForm").classList.add('d-none');
    document.getElementById("loginForm").classList.add('d-none');
    document.getElementById("flower").classList.add('d-none');
    if(type=='register'){
        document.getElementById("registerForm").classList.remove('d-none');}
    else if (type==='login'){
            document.getElementById("loginForm").classList.remove('d-none');
    }}

    function login(){

    }
    function register(){
        const fullname=document.getElementById('regFullName').value;
        const email=document.getElementById('regEmail').value;
        const password=document.getElementById('regPassword').value;
        if(!fullname){
            alert('Please Enter your full name');
            return;
        }
        if(!email){
            alert('Please Enter your email');
            return;
        }
        if(!password){
            alert('Please Enter your password');
            return;
            
        }
        const user={fullname, email,password};
        localStorage.setItem(email,JSON.stringify(user));
        alert('User Registration Successful, You can login now.')
        document.getElementById('regFullName').value='';
        document.getElementById('regEmail').value='';
        document.getElementById('regPassword').value='';
        document.getElementById("registerForm").classList.add('d-none');
        document.getElementById("loginForm").classList.remove('d-none');

    }

    function login(){
        const email=document.getElementById('logEmail').value;
        const password=document.getElementById('logPassword').value;
        
        if(!email){
            alert('Please Enter your email');
            return;
        }
        if(!password){
            alert('Please Enter your password');
            return;
            
        }
        const user=localStorage.getItem(email);
        if(!user){
            alert('No such user, try again or register for new user');
            return;
        }
        const parseUser=JSON.parse(user);
        if (password!=parseUser.password){
            alert('Incorrect Password');
            return;
        }
        document.getElementById("loginForm").classList.add('d-none');
        document.getElementById("flower").classList.remove('d-none');
        alert('Login Successful!')
        document.getElementById('logEmail').value='';
        document.getElementById('logPassword').value='';
        

    }