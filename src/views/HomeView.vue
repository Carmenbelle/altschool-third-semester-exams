<template>
  <div class="container overflow-y-scroll">
    <section>
      <div class="hero_section w-full h-[700px] md:h-[600px] relative">
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
                  <h5 class="text-orange-300 text-lg hidden md:block">e-commence</h5>
                </div>
              </a>
            </div>
            <nav
              class="flex justify-end gap-x-6 md:gap-x-16 mr-8 md:mr-28 p-2 md:mb-2"
            >
              <router-link
                to="/login"
                class="border text-center p-2 md:p-3 w-20 md:w-24 rounded-md font-normal md:font-medium text-lg text-white"
                >Login</router-link
              >
              <router-link
                to="/signup"
                class="border text-center p-2 md:p-3 w-18 md:w-22 rounded-md font-normal md:font-medium text-lg text-white"
                >SignUp</router-link
              >
            </nav>
          </header>

          <section class="container">
            <div
              class="text-white text-center text-5xl font-semibold md:font-extrabold"
            >
              <h1>E-Commence</h1>
            </div>

            <div
              class="flex flex-col space-y-16 md:space-y-0 md:flex-row p-10 md:p-20"
            >
              <div class="md:w-1/2 mt-20 md:ml-8 space-y-6 md:space-y-4">
                <h1 class="text-white text-start text-4xl font-bold">
                  It's Time For Our Summer Gadget Sale
                </h1>
                <p class="text-white text-start text-3xl font-bold">
                  <a href="/signup">
                    <button
                      class="border font-semibold p-2 rounded-md hover:rounded-lg text-orange-400 hover:text-gray-300 hover:text-[1.870rem]"
                    >
                      Signup
                    </button>
                  </a>
                  for More Details...
                </p>
              </div>
              <div class="w-full md:w-1/2 flex justify-center md:mt-0 relative">
                <img
                  alt="gadgets"
                  src="../assets/gadgets.png"
                  class="w-full md:w-[2500px] md:mt-0"
                />

                <div
                  class="border w-[100px] h-[100px] bg-orange-400 rounded-full absolute text-white text-4xl flex justify-center items-center md:top-8 md:right-28 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <h4 class="">40%</h4>
                </div>
              </div>
            </div>
          </section>

          <section class="container mb-8 pb-8 p-16">
            <h2 class="text-center text-5xl font-bold text-blue-800 mb-20">
              These deals are hot hot!
            </h2>
            <div class="flex flex-col lg:flex-row justify-around p-8 container">
              <div class="relative lg:w-1/4 md:w-full mb-20">
                <img src="../assets/product1.png" alt="gad" />
                <div
                  class="border w-[100px] h-[100px] bg-orange-400 rounded-full absolute text-white text-4xl flex justify-center items-center top-0 right-8 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <h4 class="">60%</h4>
                </div>
              </div>

              <div class="relative lg:w-1/4 md:w-full mb-20">
                <img src="../assets/product2.png" alt="gad" />
                <div
                  class="border w-[100px] h-[100px] bg-orange-400 rounded-full absolute text-white text-4xl flex justify-center items-center top-2 right-8 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <h4 class="">30%</h4>
                </div>
              </div>

              <div class="relative lg:w-1/4 md:w-full mb-20">
                <img src="../assets/product3.png" alt="gad" />
                <div
                  class="border w-[100px] h-[100px] bg-orange-400 rounded-full absolute text-white text-4xl flex justify-center items-center top-0 right-8 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <h4 class="">40%</h4>
                </div>
              </div>

              <div class="relative lg:w-1/4 md:w-full mb-20">
                <img src="../assets/product4.png" alt="gad" />
                <div
                  class="border w-[100px] h-[100px] bg-orange-400 rounded-full absolute text-white text-4xl flex justify-center items-center top-0 right-8 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <h4 class="">70%</h4>
                </div>
              </div>
            </div>
          </section>

          <footer class="w-full py-4 bg-gray-700">
      <div
        class="container flex flex-col md:flex-row item-start md:justify-around text-white py-10 p-28 "
      >
        <div>
          <div>
            <img
              alt="logo"
              src="../assets/Logo3.png"
              class="w-10 md:w-12 cursor-pointer"
            />
          </div>
          <p class="w-[200px] py-4">Hurry and all forms of Gadgets on-demand and pocket friendly prices with durable life span.</p>
          <div>
            <p class="text-green-500 text-lg">SPONSORS</p>
            <div class="flex">
              <a href="https://www.altschoolafrica.com/" target="_blank" >
                <img src="../assets/alt1.png" alt="altschool" class="w-[100px] h-[100px]" />
              </a>
              <a href="https://talentql.com/" target="_blank" >
                <img src="../assets/talentql-1.png" alt="talentQL" class="w-[100px] h-[100px]" />
              </a>


            </div>
          </div>
        </div>

        <div>
          <div class=" py-14 text-center ">
            <p class="text-green-500 leading-10 text-lg">Contact</p>
            <ul>
              <li class="flex space-x-4">
                <span>
                  <font-awesome-icon icon="fa-solid fa-user-secret" />
                </span>
                <p>Federal house estate, Lugbe, Abuja</p>
              </li>
              <li class="flex space-x-4">
                <span>
                  <font-awesome-icon icon="fa-solid fa-user-secret" />
                </span>
                <p>Federal house estate, Lugbe, Abuja</p>
              </li>
              <li class="flex space-x-4">
                <span>
                  <font-awesome-icon icon="fa-solid fa-user-secret" />
                </span>
                <p>Federal house estate, Lugbe, Abuja</p>
              </li>
            </ul>
            
          </div>  
        </div>

        <div class="py-14 ">
          <h5 class="text-green-500 text-lg px-4 leading-10 ">Legal</h5>
          <ul>
            <li>Business Policy</li>
            <li>Mode of Operation</li>
            <li>Legal Right</li>
          </ul>
        </div>
      </div>
    </footer>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    // HelloWorld
  },
};
</script>

