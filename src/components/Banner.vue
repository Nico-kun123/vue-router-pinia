<template>
    <div class="wrapper__banner">

        <img src="../assets/Banner.png" alt="Banner" />
        <h1 class="text-3xl font-bold underline">
            This Project uses Vue Router, Pinia & Typescript!
        </h1>
    </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 18pt;
  position: relative;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

.wrapper__banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    
    & img {
        width: 100%;
        max-width: 800px;
    }
}
</style>
