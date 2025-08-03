<script lang="ts" setup>
    import FaqEntry from './FaqEntry.vue'
</script>

<template>
    <article class="page-content-text">
        <h2>Legal Documents</h2>
        <FaqEntry>
            <template #question>Event Contract Risk Disclosure</template>
            <template #answer>
                <p>Complex products like event contracts involve a high degree of risk and only suitable for investors with high risk tolerance.</p>
                <p><b>Market Risk.</b> The outcome of an event contract cannot be known ahead of time.  Market participants may be exposed to unexpected losses based on the outcome of the event contract.  Market participants should be prepared for the high possibility of losing their entire investment.</p>
                <p><b>Pricing Risk.</b> The market may affect the prices of event contracts in a manner that is not reflective of the probability of the relevant events occurring, which can lead to unexpected losses for market participants.</p>
                <p><b>Systemic Risk.</b> Miraculin–Daemon Markets Ltd. and all related parties simultaenously may simultaneously go bankrupt, which could cause market participants to suffer unexpected losses.</p>
                <p><b>Trading Halt Risk.</b> Miraculin–Daemon Markets Ltd. has the authority to initiate trading halts to protect market participants and may do so from time to time.  A trading halt would prevent market participants from exiting or entering positions and could have an effect on their trading.</p>
                <p><b>Clearinghouse Risk.</b> Miraculin–Daemon Markets Ltd. may fail to clear event contracts due to failure of hardware or software, inability to timely raise adequate capital, or human error, which may cause unexpected losses for market participants.</p>
                <p><b>Expiration Date Risk.</b>Miraculin–Daemon Markets Ltd. has the authority to alter the expiration date of event contracts and may do so from time to time.  An alteration to an expiration date could prevent market participants from exiting their positions.</p>
                <p><b>Regulatory Risk.</b> The government of SimDemocracy may revoke Miraculin–Daemon Markets Ltd.'s Casino License or impose regulations, restrictions, or taxes on securities trading, which could adversely affect our ability to provide our services and expose market participants to unexpected risks.</p>
                <p><b>Other risks.</b>There are unforeseen risks related to human error, systems failures, or cyber-attacks that may pose risks to market participants' portfolios and strategies and lead to potential losses.</p> 
            </template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Event Contract Terms</template>
            <template #answer><RouterLink to="/terms-conditions">Event Contract Terms and Conditions</RouterLink></template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Power of Attorney</template>
            <template #answer><p>Miraculin–Daemon Markets Ltd. hereby appoints @oyosokitty as its recognised and lawful attorney-in-fact and agent with full power of substitution and resubstitution to execute and act in all capacities in the company's name or place, granting unto said attorney-in-fact and agent full power and authority to do and perform each and every act and thing requisite and necessary to be done, as fully to all intents and purposes as he or she might or could do in person.  This Power of Attorney is revocable by the attorney-in-fact or by Miraculin–Daemon Markets Ltd. at any time.  This Power of Attorney shall not be revoked by any subsequent power of attorney, unless such subsequent power of attorney specifically states that it is intended to revoke prior powers of attorney.<br><br>In witness whereof, I, @oyosokitty, have executed this Power of Attorney effective as of July 31, 2025.</p></template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Execution-Only Service Disclosure</template>
            <template #answer><p>Miraculin–Daemon Markets Ltd. does not provide trading or tax advice.  Our service is "execution only" and we will not advise you on any transaction.  All trading and investment decisions are made in your sole discretion.  You should obtain financial and taxation advice from qualified advisors as to whether event contracts are an appropriate investment for you.</p></template>
        </FaqEntry>
        <FaqEntry>
            <template #question>Clearinghouse Disclosure</template>
            <template #answer><p>Miraculin–Daemon Markets Ltd. acts as clearinghouse and central counterparty for all event contracts it trades with clients.  This involves several risks for market participants.<br></p>
                <p><b>Counterparty Risk.</b>Miraculin–Daemon Markets Ltd. may be unable to clear an event contract due to operational failure, extreme market stress, or other unforeseen reasons.</p>
                <p><b>Systemic Risk.</b> Miraculin–Daemon Markets Ltd. and all related parties simultaenously may simultaneously go bankrupt, which could cause market participants to suffer unexpected losses.</p>
                <p><b>Regulatory Risk.</b> The government of SimDemocracy may impose regulations, restrictions, or taxes on cleared transactions, which could adversely affect our ability to act as central counterparty.</p>
            </template>
        </FaqEntry>
        
    </article>
</template>
