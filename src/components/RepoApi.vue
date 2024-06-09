<template>
  <div class="container flex flex-col">

    <div class="flex flex-row gap-4  text-center items-center mx-auto">
      <label for="search">Search Repository</label>
      <input type="search" name="search" id="" placeholder="Search Repositories"  @keydown ='filterRepositories'  class="p-2 text-slate-200 rounded-xl">
    </div>

   <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
    <div
      v-for="repo in currentItems"
      :key="repo.id"
      class=" card card-compact w-96  bg-base-100 shadow-xl mx-auto my-4"
    >
      
        <h1 class="font-bold text-2xl">
          {{ repo.name }}
        </h1> <br>
        <span>Date : {{ repo.created_at }}</span> <br>
        <span class="text-green-400">Language : {{ repo.language }}</span> <br>
        <span class="my-2">Stars : {{ repo.stargazers_count }}</span> <br>
        <span class="my-2">Visibility : {{ repo.visibility }}</span>
        <div class="flex flex-row justify-center gap-2">
           <span class="flex flex-row justify-evenly gap-4 mt-6">Visit
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>    
            </span>
          <Button class="bg-green-300 text-black my-4  p-2 rounded-lg">
            <a :href="repo.html_url" target="_blank"> {{ repo.name }}</a>
          </Button>
        </div>
      </div>
   </div>
    </div>

    <div>
      <Button
        v-for="page in totalPages"
        :key="page"
        @click="handlePageChange(page)"
        class="text-center m-1 p-2 rounded-lg focus:bg-green-400 hover:bg-slate-400"
      >
        {{ page }}
      </Button>
    </div>
</template>

<script>
import { ref, onMounted, computed, cloneVNode } from "vue";
import axios from "axios";

export default {
  setup() {
    const repositories = ref([]);
    const filteredRepositories = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = 4;

    const indexOfLastItem = computed(() => currentPage.value * itemsPerPage);
    const indexOfFirstItem = computed(
      () => indexOfLastItem.value - itemsPerPage
    );
    const currentItems = computed(() =>
      filteredRepositories.value.slice(
        indexOfFirstItem.value,
        indexOfLastItem.value
      )
    );
    
        const totalPages = computed(() =>
          Math.ceil(filteredRepositories.value.length / itemsPerPage)
        );

    onMounted(async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Joker4mas/repos"
        );
        repositories.value = response.data;
        filteredRepositories.value = response.data;
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    });

    const handlePageChange = (pageNumber) => {
      currentPage.value = pageNumber;
    };

    const filterRepositories = (event) => {
      const searchTerm = event.target.value.toLowerCase();
      filteredRepositories.value = repositories.value.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm)
      );
    };

    return {
      repositories,
      filteredRepositories,
      currentPage,
      itemsPerPage,
      currentItems,
      totalPages,
      handlePageChange,
      filterRepositories,
    };
  },
};
</script>
