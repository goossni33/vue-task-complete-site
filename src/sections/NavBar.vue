<template>
    <nav>
        <img alt="livewall logo" class="logo" src="@/assets/images/logo.svg">
        <div class="nav-container">
            <router-link to="/">Deelnemers</router-link>
            <router-link to="/upload-foto">Upload Foto</router-link>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: $unit_s $unit;

        background-color: $primary;

        .logo {
            max-width: $unit_xl;
        }

        a {
            margin-left: $unit_s;

            color: $black;
            font-weight: bold;
            text-transform: uppercase;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>
