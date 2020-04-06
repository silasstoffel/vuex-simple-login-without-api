<template>
    <header>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">Vuex Init</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                v-show="isAuthorized"
                class="collapse navbar-collapse"
                id="navbarCollapse"
            >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/#/dashboard">
                            Home <span class="sr-only"></span>
                        </a>
                    </li>
                </ul>

                <ul v-show="isAuthorized" class="navbar-nav ml-md-auto mr-md-1">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <svg
                                class="bi bi-person-fill"
                                width="18"
                                height="18"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            {{ user.name }}
                        </a>
                        <div
                            class="dropdown-menu dropdown-menu-md-right"
                            aria-labelledby="navbarDropdown"
                        >
                            <a
                                href="/#/"
                                class="dropdown-item"
                                v-on:click="signOut"
                            >
                                Sair
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    name: "Menu",
    computed: {
        ...mapState({
            session: (state) => state.session.data,
        }),
        ...mapGetters("session", ["isAuthorized", "user"]),
    },
    methods: {
        ...mapActions("session", ["destroy"]),
        signOut() {
            this.destroy();
            this.$router.push("/sign-in");
        },
    },
};
</script>
