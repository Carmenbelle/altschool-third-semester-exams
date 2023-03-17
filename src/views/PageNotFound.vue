<template>
    <div class="w-full h-[100vh]  bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center ">
        <div class="w-full text-center m-auto ">
            <h2 class="  text-lg ">Oops! Page Not Found</h2>
            
                <h1 class="text-[200px] text-gray-800 m-0 font-extrabold ">4 0 4</h1>
            
            <p class="  text-lg ">We can't find the page you're looking for.</p>
            <router-link to="/" class=" text-white ">Back Home </router-link>
        </div>
    </div>

</template>

<script>

    export default{
        name: 'PageNotFound',
    }
</script>