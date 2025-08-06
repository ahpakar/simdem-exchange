<script lang='ts' setup>
    import Logo from './Logo.vue'
</script>

<template>
    <div class="page-header md-col">
        <section class="md-row">
            <Logo />
            <nav class="header-main-nav">
                <ul class="header-nav-list">
                    <li><RouterLink to="/"><p>Learn</p></RouterLink></li>
                    <li><RouterLink to="/market"><p>Trade</p></RouterLink></li>
                    <li><RouterLink to="/underwriting"><p>Underwriting</p></RouterLink></li>
                </ul>
            </nav>
        </section>
    </div>
</template>

<style scoped>

section {
    padding: 1rem 3rem;
}

.sticky-warning {
    background-color: var(--primary-accent);
    font-family: Overpass;
    color: white;
    width: 100%;
    height: 100%;
}

.page-header {
    align-items: center;
    background-color: var(--secondary-bg);
    max-width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
}

.header-main-nav {
    margin-left: 4rem;
    font-family: Overpass;
    display: flex;
    align-items: center;
}

.header-nav-list {
    display: flex;
    align-items: center;
    list-style: none;
}

li {
    margin-right: 2rem;
    font-size: 1.25rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
}

</style>
