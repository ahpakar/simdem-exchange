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


