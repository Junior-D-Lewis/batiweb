export default {
    name: 'Login',
 
   data() {
     return {
       email: "",
       password: "",
     };
   },
   methods: {
     setLogin(){
       this.$store.commit('isLogin')
     },
     setErrorFor(input, message) {
       input.style.color = "red";
       input.innerText = message;
     },
     setSuccessFor(input) {
       input.style.color = "green";
       input.innerText = "Good email";
     },
     isEmail(email) {
       const regex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return regex.test(email);
     },
     handleEmail() {
       const small = window.document.getElementById("errorMail");
       if (this.isEmail(this.email)) {
         this.setSuccessFor(small);
         return true;
       } else {
         this.setErrorFor(small, "error");
         return false;
       }
     },
     async handleForm() {
 
        if (this.handleEmail() === true) {
         let data = { email: this.email, password: this.password };
         // console.log(axios); 
 
         const response = await axios.post("http://localhost:9000/login", data);
         console.log(response);
 
         if (response.status == 200)
         {
           this.setLogin();
           localStorage.setItem('login', 'yes');
           if(response.data.isAdmin){
             localStorage.setItem('isAdmin', 'yes')
           }
 
           router.push({ path: "/MyClientSpace", params: data });
           
         }
       } else {
         return;
       } 
 
       console.log('handleForm')
     }
     
   },
 }