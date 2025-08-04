<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="page-wrapper">
        <PageHeader />
        <div class="page-content">
            <main class="page-content-main">
                <RouterView />
            </main>
            <DisclaimerFooter />
        </div>
    </div>
</template>

<style src="./unified.css"></style>
