
<script>

</script>

<template>
  <div>
  <div class="container flex flex-row justify-between gap-4 p-4 ">
    <div>
      <h1  class="text-2xl"><span class="text-rose-400">Jok</span><span class="text-blue-500">er4</span><span class="text-green-300">mas</span> &#x1F921;</h1>
    </div>
    <nav class="hidden lg:flex lg:flex-row gap-4 mr-4">
      <router-link to="/" class="focus:border-b-2 border-green-400 font-bold">Home</router-link>
      <router-link to="/about" class="focus:border-b-2 border-green-400 font-bold">About</router-link>
      <router-link to="/contact" class="focus:border-b-2 border-green-400 font-bold">Contact</router-link>
      <router-link to="/notFound" class="focus:border-b-2 border-green-400 font-bold">404-page</router-link>
    </nav>
    <div class="hidden"></div>
  </div>
  <hr class="">
  <div class="container">
      <router-view/>
  </div>

</div>
</template>
