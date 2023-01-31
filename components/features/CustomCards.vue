<script lang="ts" setup></script>

<template>
  <article class="container px-4 py-5">
    <h2 class="pb-2 border-bottom">Custom Cards</h2>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-1.jpg')">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Short Title, long jacket
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://github.com/twbs.png" alt="bootstrap" class="rounded-circle border border-white" width="32" height="32">
              </li>
              <li class="d-flex align-items-center me-3">
                <i class="bi bi-geo-fill me-2"></i>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <i class="bi bi-calendar3 me-2"></i>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-2.jpg')">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Much longer title that wraps to multiple lines
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://github.com/twbs.png" alt="bootstrap" class="rounded-circle border border-white" width="32" height="32">
              </li>
              <li class="d-flex align-items-center me-3">
                <i class="bi bi-geo-fill me-2"></i>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <i class="bi bi-calendar3 me-2"></i>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-3.jpg')">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Another longer title belongs here
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://github.com/twbs.png" alt="bootstrap" class="rounded-circle border border-white" width="32" height="32">
              </li>
              <li class="d-flex align-items-center me-3">
                <i class="bi bi-geo-fill me-2"></i>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <i class="bi bi-calendar3 me-2"></i>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
