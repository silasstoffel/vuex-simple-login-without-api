<template>
    <div class="row">
        <h3>#Dashboad</h3>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
    name: "Dashboard",
    computed: {
        ...mapState({
            session: (state) => state.session.data,
        }),
        ...mapGetters("session", ["isAuthorized", "user"]),
    },
};
</script>
