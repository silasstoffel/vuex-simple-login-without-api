<template>
    <Fragment>
        <Menu></Menu>
        <main role="main" class="flex-shrink-0">
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
        <Footer></Footer>
    </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer";

export default {
    name: "App",
    components: {
        Fragment,
        Menu,
        Footer,
    },
};
</script>

<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */

main > .container {
    padding: 60px 15px 0;
}

.footer {
    background-color: #f5f5f5;
}

.footer > .container {
    padding-right: 15px;
    padding-left: 15px;
}

footer {
    position: fixed;
    height: 65px;
    bottom: 0;
    width: 100%;
}

code {
    font-size: 80%;
}
</style>
