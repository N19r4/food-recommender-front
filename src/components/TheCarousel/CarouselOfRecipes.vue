<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RecipesData } from './data/recipesData'
import router from '@/router'

onMounted(() => {
  RecipesData.getProducts().then((data: any) => (recipes.value = data))
})

const recipes = ref()
const responsiveOptions = ref([
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
])

const getSeverity = (status: any) => {
  switch (status) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warning'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}

const goToRecipe = (recipeId: number) => {
  router.push({
    path: '/recipe',
    query: {
      id: recipeId
    }
  })
}
</script>

<!-- 
   circular :autoplayInterval="3000"
 -->

<template>
  <!-- <Carousel :value="recipes" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div class="recipe__image mb-3">
          <img :src="slotProps.data.imageURL" :alt="slotProps.data.title" />
        </div>
        <div>
          <h4 class="mb-1">{{ slotProps.data.title }}</h4>
          <h6 class="mt-0 mb-3">{{ slotProps.data.description }}</h6>
          <Tag v-for="course in slotProps.data.courses" :value="course" />
        </div>
      </div>
    </template>
  </Carousel> -->
  <div class="carousel__wrapper">
    <div
      class="recipe"
      v-for="{ id, imageURL, title, description } in recipes"
      @click="goToRecipe(id)"
    >
      <div class="recipe__image" :style="`background-image: url(${imageURL});`" />
      <span class="recipe__title">{{ title }}</span>
      <span class="recipe__desc">{{ description }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel__wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 20px 27px 2px rgba(222, 222, 222, 0.75);
  }

  padding: 2rem;
  width: 18.90363rem;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0px 10px 10px 2px rgba(222, 222, 222, 0.5);
  transition: 0.5s;

  &__image {
    width: 14.55581rem;
    height: 10.271rem;
    border-radius: 22px;
    background: #d9d9d9;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &__title {
    color: #000;
    text-align: center;
    font-size: 1.25rem;
  }
}
// .p-carousel-content {
//   width: 100vw !important;
//   height: 100vh;
// }
// .recipe__image {
//   width: 100px;
//   height: 100px;
//   border-radius: 8px;
// }
// .p-carousel-item {
//   & > div {
//     border-radius: 22px;
//     background: #fff;
//     box-shadow: 0px 20px 27px 2px rgba(222, 222, 222, 0.75);
//     padding: 20px;
//   }
// }
</style>
