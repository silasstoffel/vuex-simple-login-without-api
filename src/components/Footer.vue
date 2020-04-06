<template>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <span class="text-muted">&copy; App Vuex</span>
            <span v-show="isAuthorized" class="text-muted">
                - Você entrou como:
                <strong>{{ user.name }} ({{ user.email }})</strong>
            </span>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Footer",
    computed: {
        ...mapGetters("session", ["isAuthorized", "user"]),
    },
};
</script>
