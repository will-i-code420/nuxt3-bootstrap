<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-lg-flex" id="navbarSupportedContent">
      <nuxt-link class="navbar-brand col-lg-3 me-0" to="#">Navbar Logo</nuxt-link>
      <ul class="navbar-nav col-lg-6 justify-content-lg-center">
        <li class="nav-item">
          <nuxt-link class="nav-link active" aria-current="page" to="#">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">Link</nuxt-link>
        </li>
      </ul>
      <div class="d-lg-flex col-lg-3 justify-content-lg-end">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    <div class="container my-5">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 pg-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">
          Main Hero Header
        </h1>
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img src="" alt="Hero Image" class="rounded-lg-3">
        </div>
      </div>
    </div>
    <NuxtWelcome />
    <div class="container px-4 py-5">
      <h2 class="pb-2 border-bottom">Features Column w/ Icons</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          icon here
        </div>
        <h3 class="fs-2">Feature Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <nuxt-link class="icon-link d-inline-flex align-items-center" to="#">
          call to action - icon here
        </nuxt-link>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          icon here
        </div>
        <h3 class="fs-2">Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <nuxt-link class="icon-link d-inline-flex align-items-center" to="#">
          call to action - icon here
        </nuxt-link>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          icon here
        </div>
        <h3 class="fs-2">Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <nuxt-link class="icon-link d-inline-flex align-items-center" to="#">
          call to action - icon here
        </nuxt-link>
      </div>
      </div>
    </div>
  </div>
</template>
