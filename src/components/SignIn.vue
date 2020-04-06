<template>
    <form v-on:submit.prevent="signIn">
        <div class="form-group">
            <label for="email">E-mail</label>
            <input
                v-model="login.email"
                type="email"
                class="form-control form-control-lg"
                id="email"
                required
            />
        </div>

        <div class="form-group">
            <label for="pwd">Password</label>
            <input
                v-model="login.password"
                type="password"
                class="form-control form-control-lg"
                id="pwd"
                required
            />
        </div>

        <button type="submit" class="btn btn-lg btn-primary">Login</button>
    </form>
</template>

<script>
import { mapActions, mapGetters /*mapState*/ } from "vuex";
export default {
    name: "SingIn",
    created() {
        if (this.isAuthorized) {
            this.$router.push("/dashboard");
        }
    },
    data() {
        return {
            login: { email: "mestre@tagtec.com.br", password: "" },
        };
    },
    methods: {
        ...mapActions("session", ["start"]),
        async signIn() {
            await this.start(this.login);
            this.$router.push("/dashboard");
        },
    },
    computed: {
        /*
        ...mapState("session", {
            session: (state) => state.data,
        }),
        */
        ...mapGetters("session", ["isAuthorized"]),
    },
};
</script>
