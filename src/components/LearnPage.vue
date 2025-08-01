<script lang="ts" setup>
    import FaqEntry from './FaqEntry.vue'
</script>

<template>
    <article class="page-content-text">
        <div class="flex-row">
            <div>
                <h2>Miraculin–Daemon Event Contracts</h2>
                <p>Event contracts let you trade predictions on various yes-or-no questions about SimDemocracy.</p>
                <p>Contracts can be highly diverse and cover many topics such as Senate votes, presidential vetos, economic indicators and judicial verdicts.</p>
                <p>For each contract you hold that expires, you are entitled to a settlement depending on the outcome of the event.  You can earn the difference between the purchase price and the payout.</p>
                <p><b>View and trade all event contracts on the <RouterLink to="/market">Marketplace</RouterLink></b>.</p>
                <br>
            </div>
            <img src="/examplecontract.png"></img>
        </div>
        <h2 class="text-centre">How Do Event Contracts Pay Out?</h2>
        <p class="text-centre">Example Event Contract Trade</p>
        <img class="text-centre h-centrelocal" src="/6steps.png"></img>
        <h2>Frequently Asked Questions</h2>
        <FaqEntry>
            <template #question>How do I trade event contracts?</template>
            <template #answer>Visit the <RouterLink to="/market">Marketplace</RouterLink> to view all available event contracts.  To trade, simply choose YES or NO and fill in the necessary client information.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What is the commission cost on event contracts?</template>
            <template #answer>A transparent commission of just <b>0.1 Tau per contract</b> is applied, rounded up.<br>The commission is included in the price to finalise an order.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What are the contract fees on event contracts?</template>
            <template #answer>A winning contract fee is charged on contracts that settle with a positive outcome.  The fee is <b>5% of the total payout</b>, rounded up.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What if the market changes the price of a contract while my order is pending?</template>
            <template #answer>Orders are processed in a first-in, first-out (FIFO) basis.  When your order is ready to be confirmed, <b>you will receive an updated quote</b> and may <b>reconfirm or cancel it</b>.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Am I eligible to trade event contracts?</template>
            <template #answer>All individuals are eligible to trade event contracts.  Corporations may not trade event contracts.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Is there a maximum or minimum order size for event contracts?</template>
            <template #answer>For a single order, the minimum trade size is <b>one contract</b>.  The maximum trade size for a single order is <b>100 contracts.</b></template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What if I have an idea for a new event contract?</template>
            <template #answer>You can propose a new contract by contacting us, but we may or may not issue it.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What if someone puts in an order under my name?</template>
            <template #answer>We do not require registration for privacy reasons.  However, you can cancel a pending order at any time.  Furthermore, orders that remain pending after 24 hours are automatically cancelled.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What are the risks associated with event contracts?</template>
            <template #answer>
                <p>Event contracts are a complex product that involves certain risks.<br><br>
                    <b>Risk:</b> Event contracts may have no value at expiration.  At the end of the contract, depending on the outcome of the event, you may lose all the funds used to enter that contract.</br>
                    <b>Safeguard:</b> Contract fees are not charged on zero-payout contracts.  The maximum risk is the total amount of money the market participant pays for the contracts plus the commission levied on those contracts.  You should consider whether you can afford the high risk of losing this money.<br><br>
                    <b>Risk:</b> Miraculin–Daemon Markets Ltd. may not be able to pay out winning contracts.<br>
                    <b>Safeguard:</b> We will refrain from excessive leverage and will hold significant cash assets to pay out contracts.<br><br>
                    <b>Risk:</b> Miraculin–Daemon Markets Ltd. and all other parties may simultaneously go bankrupt.<br>
                    <b>Safeguard:</b> Funds from dissolution under bankruptcy will be used to pay out winning contracts.<br><br>
                    <b>Risk:</b> Miraculin–Daemon Markets Ltd. does not provide trading or tax advice.  Our service is "execution only" and we will not advise you on any transaction.  You should obtain financial and taxation advice as to whether event contracts are an appropriate investment for you.<br><br>
                    <b>Risk:</b> You may not be able to exit an event contract due to a trading freeze.  Miraculin–Daemon Markets Ltd. has the authority to freeze trading to protect market participants.  Unexpected trading freezes may affect your positions.<br><br>
                    <b>Risk:</b> Event contract prices may not reflect the probability of an underlying event occurring or failing to occur.  You may suffer unexpected losses due to speculative or volatile market prices.<br><br>
                    <b>Risk:</b> The expiration dates of event contracts may change.  Miraculin–Daemon Markets Ltd. has the authority to update the expiration date of outstanding event contracts if the resolution of an event is delayed or accelerated unexpectedly.  You may suffer losses due to an event contract expiring at an unexpected time.<br><br>
                </p>
            </template>
        </FaqEntry>
    </article>
</template>
