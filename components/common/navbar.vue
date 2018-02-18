<template>
  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          <i class="fa fa-globe">&nbsp;</i>Region
        </a>
        <div class="navbar-dropdown is-boxed">
          <nuxt-link class="navbar-item" :to="switchLocalePath('en')">
            UK
          </nuxt-link>
          <nuxt-link class="navbar-item" :to="switchLocalePath('french')">
            Wallonia
          </nuxt-link>
          <nuxt-link class="navbar-item" :to="switchLocalePath('dutch')">
            Vlaanderen
          </nuxt-link>
          <nuxt-link class="navbar-item" to="Wallonie">
            Netherlands
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <nuxt-link class="button is-info"
               :to="localePath('about')">
              <span class="icon">
                <i class="fa fa-info"></i>
              </span>
              <span>
                Info
              </span>
            </nuxt-link>
          </p>
          <p class="control">
            <nuxt-link class="button is-primary" :to="localePath('statics')">
              <span class="icon">
                <i class="fa fa-line-chart"></i>
              </span>
              <span>Statics</span>
            </nuxt-link>
          </p>
          <p class="control">
            <nuxt-link class="button is-danger" :to="localePath('index')">
              <span class="icon">
                <i class="fa fa-home"></i>
              </span>
              <span>Home</span>
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>