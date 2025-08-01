<template>
    <details>
        <summary><b><slot name="question"></slot></b></summary>
        <div><slot name="answer"></slot></div>
    </details>
</template>

<style scoped>

details {
    border-bottom: 1px solid #2b2524;
}

summary {
    padding: 0.5rem;
}

div {
    margin: 0.5rem;
}


</style>
