<template lang="pug">
    div
        CpMenu
        <nuxt/>
</template>

<script>
    import CpMenu from '~/components/Menu.vue'

    export default {
        components: {
            CpMenu
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/modules/variables.scss';
  
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  ul {
    width: map-get($size, "menu");
    position: fixed;
    min-height: 100vh;
    background-color: #000000;
    color: #ffffff;
    .logo {
        text-align: center;
        margin: 30px 0;
        img {
            width: 60%;
            display: inline-block;
        }
    }
    > li.menu-item {
        padding: 15px 30px 15px 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            &:before {
                
            }
        }
        i {
            margin-right: 15px;
        }
        a {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            color: #fff;
            font-size: 13px;
            text-transform: uppercase;
        }
    }
  }

</style>
