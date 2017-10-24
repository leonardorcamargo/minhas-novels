<template>
  <header>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <router-link
            class="navbar-item"
            to="Inicio"
          >
            Minhas Novels
          </router-link>

          <div
            class="navbar-burger"
            :class="{ 'is-active': navbarIsOpen }"
            data-target="navbarMenu"
            @click.prevent="openNavbarMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item item-link" to="Atividades">Atividades</router-link>
            <router-link class="navbar-item item-link" to="Explorar">Explorar</router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field">
                <p class="control">
                  <a class="button is-info">
                    <span class="icon">
                      <i class="material-icons" aria-hidden="true">person</i>
                    </span>
                    <span>Entrar</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      navbarIsOpen: false,
    };
  },
  methods: {
    openNavbarMenu() {
      this.navbarIsOpen = !this.navbarIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-link:hover {
  border-top: 5px solid #0D58C8;
};
</style>
