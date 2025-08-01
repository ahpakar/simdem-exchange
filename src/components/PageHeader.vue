<template>
    <div class="page-header">
        <img src="/favicon.svg" alt="A white strawberry on a red, circular background." width=40 height=40>
        <h1 class="page-main-heading"><a href="/">Miraculin–Daemon</a></h1>
        <nav class="header-main-nav">
            <ul class="header-nav-list">
                <li><RouterLink to="/"><p>Learn</p></RouterLink></li>
                <li><RouterLink to="/market"><p>Trade</p></RouterLink></li>
                <li><RouterLink to="/underwriting"><p>Underwriting</p></RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.header-main-nav {
    margin-left: 4rem;
    font-family: Overpass;
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
}

</style>
