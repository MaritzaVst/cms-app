<template lang="pug">
    div
        ul.aside-menu
            li.logo
                img(src="../assets/images/menu-icons/logo.png" alt="")
            li.menu-item
                i.material-icons assignment
                a(href="#") Sedes
            li.menu-item
                i.material-icons settings
                a(href="#") Áreas académicas
            li.menu-item
                i.material-icons mail_outline
                a(href="#") Cursos
            li.menu-item
                i.material-icons toys
                a(href="#") Profesores
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
@import '../assets/css/modules/variables.scss';
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