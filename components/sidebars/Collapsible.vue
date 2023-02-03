<script lang="ts" setup></script>

<template>
  <article class="flex-shrink-0 p-3 ng-white" style="width: 280px;">
    <nuxt-link class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom" to="/">
      <i class="bi bi-bootstrap pe-none me-2" width="30" height="24"></i>
      <span class="fs-5 fw-semibold">collapsible</span>
    </nuxt-link>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" arai-expanded="true">
          Home
        </button>
        <div id="home-collapse" class="collapse show">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Overview
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Updates
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Reports
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" arai-expanded="false">
          Dashboard
        </button>
        <div id="dashboard-collapse" class="collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Overview
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Weekly
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Monthly
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Annually
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" arai-expanded="false">
          Dashboard
        </button>
        <div id="orders-collapse" class="collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                New
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Processed
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Shipped
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Returned
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" arai-expanded="false">
          Account
        </button>
        <div id="account-collapse" class="collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                New
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Profile
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Settings
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="link-dark d-inline-flex text-decoration-none rounded" to="#">
                Sign Out
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </article>
</template>

<style scoped></style>
