<script>
    export default {
        name: 'LoginView',
        data(){
            return{
                email: '',
                password: '',
                error: null,
                inputError: {}
            }
        },
        mounted(){
          if(localStorage.getItem('currentUser')){
            this.$router.push({name: 'products'})
          }
        },
        methods: {
            checkForErrors(){
              if(this.email === ''){
                this.inputError.email = "Email is required"
              }
              
              if(this.password === ''){
                this.inputError.password = "Password is required"
              }
              

              if(Object.keys(this.inputError).length > 0){
                return false
              }
              return true
            },

            login(){
                if(!this.checkForErrors()){
                  return
                }
                const users = JSON.parse(localStorage.getItem('users'));
                const user = users.find(user => user.email === this.email);
                const password = users.find(user => user.password === this.password);

                if(!user ){
                  return this.error = 'Invalid Credentials'
                    // console.log(users)
                }

                if(!password ){
                  return this.error = 'Invalid Credentials'
                    // console.log(users)
                }

                if(user.password !== this.password){
                 return this.error = 'Incorrect Password'
                }

                localStorage.setItem('currentUser', JSON.stringify(user))

                //set the current user in the store
                this.$store.dispatch('setCurrentUser', user)


                alert("Login was successful")

                this.$router.push({name: 'products'})
            }
        }
    }
</script>

<template>
    <div class="container w-full h-[100vh] relative">
        <img
          alt="background"
          src="../assets/backgl.jpeg"
          class="w-full h-full object-cover"
        />
        <div class="w-full h-full absolute inset-0 bg-[#374efa] bg-opacity-80">
            <header class="conainer flex justify-between p-2 mb-8">
            <div class="text-center ml-8 md:ml-16 m-auto">
              <a href="/">
                <div class="flex">
                  <img
                    alt="logo"
                    src="../assets/Logo3.png"
                    class="w-12 md:w-16 md:hover:scale-150 transition duration-700 ease-in-out cursor-pointer"
                  />
                  <h5 class="text-orange-300 hidden md:block text-lg">e-commence</h5>
                </div>
              </a>
            </div>
            <nav
              class="flex justify-end gap-x-6 md:gap-x-16 mr-8 md:mr-28 p-2 md:mb-2"
            >
              
              <router-link
                to="/signup"
                class="border text-center p-2 md:p-3 w-18 md:w-22 rounded-md font-normal md:font-medium text-lg text-white"
                >SignUp</router-link
              >
            </nav>
          </header>
            <div class="text-[#1a2934] backdrop-opacity-10 border max-w-md py-4 mx-auto bg-white bg-opacity-20 shadow-lg shadow-black-500/50 px-4 md:px-6">
                <div class="text-xl ">
                    <h1 class="text-3xl p-8 text-center font-bold">Login Page</h1>
                <form @submit.prevent="login">

                   <h3 class="text-center text-white font-medium" v-if="error">{{ error }}</h3>
                    
                    <div class="space-y-1">
                        <label for="email">Email</label>
                        <input type="text" id="email" v-model="email" class="w-full rounded-lg py-3 px-4 bg-transparent border-2 border-solid border-black"/>
                        <span class="text-xs text-yellow-300 " v-if="inputError.email">{{ inputError.email }}</span>
                    </div>
                    <div class="mt-4 space-y-1">
                        <label for="password" >Password</label>
                        <input type="password" id="password" v-model="password" class="w-full rounded-lg py-3 px-4 bg-transparent  border-2 border-solid border-black"/>
                        <span class="text-xs text-yellow-300 " v-if="inputError.password">{{ inputError.password }}</span>
                    </div>
                    <div class="text-center py-4 ">
                        <button type="submit" class="hover:text-[#30658b] font-semibold">Login</button>
                    </div>

                </form>
                <div class="text-center text-base text-[#162c3e] py-4 ">
                    <p>
                    Don't have an account? <router-link to="/signup" class="hover:text-[#13a69a]">Sign Up</router-link>
                </p>
                </div>
                </div>
            </div>
        </div>


    </div>
</template>

