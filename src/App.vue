<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="page-wrapper">
        <PageHeader />
        <div class="page-content">
            <main class="main-layout">
                <RouterView />
            </main>
            <DisclaimerFooter />
        </div>
    </div>
</template>
