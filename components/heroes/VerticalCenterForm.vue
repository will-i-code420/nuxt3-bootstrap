<script lang="ts" setup></script>

<template>
  <article class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h2 class="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h2>
        <p class="col-lg-10 fs-4">
          Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
        </p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light" data-np-autofill-type="register" data-np-checked="1" data-np-watching="1">
          <div class="form-floating mb-3">
            <input type="email" id="floatingInput" class="form-control" placeholder="name@example.com" data-np-autofill-type="identity_email" data-np-uid="64a95ed6-a33e-40e1-8895-ab6286a109d9" autocomplete="off" data-np-checked="1">
            <label for="floatingInput">Email Address</label>
            <span data-np-uid="64a95ed6-a33e-40e1-8895-ab6286a109d9" style="width: 24px; min-width: 24px; height: 24px; background-image: url('moz-extension://61251820-e489-cd49-809b-708c4c257868/assets/manifestIcons/icon.svg'); right: 0px; left: 209px; top: 16px; min-height: 24px;"></span>
          </div>
          <div class="form-floating mb-3">
            <input type="password" id="floatingPassword" class="form-control" placeholder="Password" data-np-autofill-type="generate" data-np-uid="73a8b3dc-3ff9-4457-8b7c-dba6f013d989" autocomplete="off" data-np-checked="1">
            <label for="floatingPassword">Password</label>
            <span data-np-uid="73a8b3dc-3ff9-4457-8b7c-dba6f013d989" style="width: 24px; min-width: 24px; height: 24px; background-image: url('moz-extension://61251820-e489-cd49-809b-708c4c257868/assets/manifestIcons/icon.svg'); right: 0px; left: 209px; top: 16px; min-height: 24px;"></span>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" data-np-checked="1">
              Remember Me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          <hr class="my-4">
          <small class="text-muted">
            By clicking Sign up, you agree to the terms of use.
          </small>
        </form>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
