<template>
    <article>
        <h2>Event Contracts</h2><br>
        <div v-if="contractDbQueryLoaded" class="content-list">
            <template v-for="row in contractDbQuery">
                <div class="embedded-glass-container" style="max-width: 32%">
                    <h4><b>{{ row.name }}</b></h4>
                    <p>
                        Issued: {{ row.issue_date }}<br>
                        Expires: {{ row.expiration_date }}<br>
                        Outstanding Interest: {{ row.outstanding_yes }} YES; {{ row.outstanding_no }} NO<br>
                    </p>
                    <div class="content-list-nogap">
                        <a href="#order-form" class="h-expand"><button @click="selectContract('YES', row)" class="embedded-glass-container h-expand" style="background-color:#4a5e42">
                            <h2>YES</h2>
                            <h4>{{ getPriceAsPercentage(row).yes_price }}</h4>
                        </button></a>
                        <a href="#order-form" class="h-expand"><button @click="selectContract('NO', row)" class="embedded-glass-container h-expand" style="background-color:#5e4442">
                            <h2>NO</h2>
                            <h4>{{ getPriceAsPercentage(row).no_price }}</h4>
                        </button></a>
                    </div>
                </div>
            </template>
        </div>
        <p v-else>Loading contracts...</p>
        <hr>
        <h2>Order Information</h2>
        <form id="order-form" action="https://contract-db-service.acridbrimistic.workers.dev/" method="post" target="_blank">
            <input name="id" type="hidden" :value="selectedContract.id">
            <label for="contract">Contract</label><br>
            <input id="contract" name="contract" type="text" :value="selectedContract.name" readonly><br><br>
            <label for="discord">Discord Username</label><br>
            <input id="discord" name="discord" type="text"><br><br>
            <label for="tradesize">Trade Size</label><br>
            <input id="tradesize" name="tradesize" type="number" min="1" max="100" v-model="tradeSize"><br><br>
            <Checkbox class="form-entry" checkbox-name="consent">I have read and agree to the <RouterLink to="/privacy">Privacy Policy</RouterLink> and <RouterLink to="terms-conditions/">Terms and Conditions.</RouterLink></Checkbox>
            <p>Estimated cost: {{ estimatedCost }}</p>
            <p>This is a non-binding order submission.  You will be given a chance to review and consider the price and terms of the contract before entering into it.</p>
            <input type="submit" value="Submit">
        </form>
    </article>
</template>

<script lang="ts" setup>

import Checkbox from './Checkbox.vue'
import { createApp, ref, onMounted, computed } from 'vue'

type Contract = {
    outstanding_yes: number,
    outstanding_no: number,
    issue_date: string,
    expiration_date: string,
    name: string,
    id: number,
};


const contractDbQuery = ref();
const contractDbQueryLoaded = ref(false);
const selectedContract = ref({name: "", id: 0, cost: 0.0});
const tradeSize = ref(1);
const estimatedCost = computed(() => {return Math.ceil((tradeSize.value * selectedContract.value.cost) + 0.1 * tradeSize.value).toString() + " Tau";});

function getPrice(contract: Contract) {
    const b = 3.5;
    const expYes = Math.exp(contract.outstanding_yes / b);
    const expNo = Math.exp(contract.outstanding_no / b);
    const denom = expYes + expNo;

    const yesPrice = expYes / denom;
    const noPrice = expNo / denom;
    return {yes: yesPrice, no: noPrice};
}

function getPriceAsPercentage(contract: Contract) { 
    const price = getPrice(contract);
    return {
        yes_price: (price.yes * 100).toFixed(1) + '%',
        no_price: (price.no * 100).toFixed(1) + '%'
    };
};

function selectContract(prediction: string, contract: Contract) {
    selectedContract.value.name = prediction + " on " + "\"" + contract.name + "\"";
    selectedContract.value.id = contract.id; 
    selectedContract.value.cost = (prediction == "YES") ? getPrice(contract).yes : getPrice(contract).no;
}

onMounted(async () => {
    const response = await fetch("https://contract-db-service.acridbrimistic.workers.dev");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    contractDbQuery.value = (await response.json()).results;
    contractDbQueryLoaded.value = true;
});

</script>
