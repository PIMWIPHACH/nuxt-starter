<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- Branding, when in mobile stay at bottom -->
        <div class="col-12 col-md-2 _dp-f order-md-first order-last _mgt-32px _mgt-0px-md">
          <div>
            <small>
              All Rights Reserved {{ new Date().getFullYear() }}
              <br>DENO
            </small>
          </div>
        </div>
        <!-- FooterMenu -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "~assets/styles/variables";
footer {
  position: relative;
  background: #000;
  padding: 32px 0px 32px 0px;
  color: #fff;
  @media (max-width: $md - 1px) {
    padding: 32px 0px;
  }
  &::before {
    content: "";
    width: 100%;
    height: 24px;
    /* background: $yellow-400; */
    position: absolute;
    top: 0px;
    left: 0px;
  }
}
nav {
  h5 {
    /* text-transform: capitalize; */
    @media (max-width: $md - 1px) {
      margin: 16px 0px;
    }
    @media (min-width: $md) {
      margin-bottom: 16px;
    }
  }
}
.contact-container {
  line-height: 150%;
  font-size: 0.9rem;
}
</style>
