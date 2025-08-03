<script lang="ts" setup>
    import FaqEntry from './FaqEntry.vue'
</script>

<template>
    <article class="page-content-text">
        <div class="md-row">
            <div>
                <h2>Miraculin–Daemon Event Contracts</h2>
                <p class="spacey1">Event contracts let you trade predictions on various yes-or-no questions about SimDemocracy.
                <br><br>
                Contracts can be highly diverse and cover many topics such as Senate votes, presidential vetos, economic indicators and judicial verdicts.
                <br><br>
                For each contract you hold that expires, you are entitled to a settlement depending on the outcome of the event.  You can earn the difference between the purchase price and the payout.
                <br><br>
                <b>View and trade all event contracts on the <RouterLink to="/market">Marketplace</RouterLink></b>.</p>
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
            <template #question>How can I review my portfolio?</template>
            <template #answer>Market participants are expected to track their own portfolios.  However, Miraculin–Daemon can provide a portfolio statement on request.  This service costs 15 Tau.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What if market forces affect price of a contract after I submit an order?</template>
            <template #answer>Orders are non-binding and processed in a first-in, first-out (FIFO) basis.  When your order is ready to be confirmed, <b>you will receive an updated quote</b> and may <b>reconfirm or cancel it</b>.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Am I eligible to trade event contracts?</template>
            <template #answer>All individuals with a Taubot account are eligible to trade event contracts.  Corporations may not trade event contracts.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Is there a maximum or minimum order size for event contracts?</template>
            <template #answer>For a single order, the minimum trade size is <b>one contract</b>.  The maximum trade size for a single order is <b>100 contracts.</b>  These restrictions are in place to protect market participants from manipulation.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What if I have an idea for a new event contract?</template>
            <template #answer>You can propose a new contract by contacting us.  We approve or reject submissions based on reliability of the source information, our own forecasts, analysis of market conditions, legal basis, and other factors.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What if someone puts in an order under my name?</template>
            <template #answer>We do not require registration for privacy reasons.  However, orders do not become binding until they are paid.  You may simply refuse to pay for a fraudulent order, and it will be cancelled.</template>
        </FaqEntry>
        <FaqEntry>
            <template #question>What are the risks associated with event contracts?</template>
            <template #answer>
                <p>Event contracts are a complex product that involves certain risks.  Prior to trading, review the <RouterLink to="/legal">Contract Risk Disclosure</RouterLink> and consider whether you can afford the high risk of losing money.</p>
            </template>
        </FaqEntry>
    </article>
</template>
