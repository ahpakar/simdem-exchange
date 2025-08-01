<script lang="ts" setup>
    import FaqEntry from './FaqEntry.vue'
    import Checkbox from './Checkbox.vue'
</script>

<template>
    <article class="page-content-text">
        <div class="section-introduction">
            <h1>Your <span class="accent-text">trusted</span> underwriter</h1>
            <p class="section-introduction-subtext">Miraculin–Daemon Markets Ltd. works to make markets stable, reliable, and transparent.<br>
            We are SimDemocracy's first and only underwriter, working to facilitate cooperation and economic growth.</p>
        </div>
        <div class="section-introduction">
            <h1>How it works</h1>
            <p class="section-introduction-subtext">You are in control.  Start building wealth now.</p>
            <div class="section-introduction-horizontal-list">
                <div class="section-introduction-horizontal-list-entry">
                    <figure>
                        <img src="./svgs/contract.svg"></img>
                    </figure>
                    <div class="text-centre">
                        <h4>Submit a Security</h4>
                        <p>Submissions are free, confidential, and non-binding.  We approve or reject submissions based on accuracy, adequacy, legal basis, and our analysis of market conditions.</p>
                    </div>
                </div>
                <div class="section-introduction-horizontal-list-entry">
                    <figure>
                        <img src="./svgs/notepad.svg"></img>
                    </figure>
                    <div class="text-centre">
                        <h4>Create a Plan</h4>
                        <p>After your submission is approved, we will be in contact with you to discuss the terms of the underwriting contract.  We will work together with you to ensure compliance, issuing schedule, and market stability.</p>
                    </div>
                </div>
                <div class="section-introduction-horizontal-list-entry">
                    <figure>
                        <img src="./svgs/profit.svg"></img>
                    </figure>
                    <div class="text-centre">
                        <h4>Get Paid</h4>
                        <p>Unless otherwise specified, we will deliver you the full amount immediately upon entry into the contract.</p>
                    </div>
                </div>
            </div>
        </div>

        <h2>Submit a Security</h2>
        <p>We are always looking for new trading instruments and markets.</p>
        <form target="_blank">
            <div class="form-entry">
                <label for="names">Names of Filing Persons</label>
                <input id="names" name="names" type="text">
            </div>
            <Checkbox class="form-entry" checkbox-name="the">Check the box if the person filing is a corporation, group, political party, or other institution</Checkbox>
            <div class="form-entry">
                <label for="issue_quantity">Quantity to be Issued</label>
                <input id="issue_quantity" name="issue_quantity" type="number" min="1" max="1000000">
            </div>
            <div class="form-entry">
                <label for="authorised_quantity">Quantity to be Authorised</label>
                <input id="authorised_quantity" name="authorised_quantity" type="number" min="1" max="1000000">
            </div>
            <div class="form-entry">
                <label for="securities_exchange">Name the securities exchange if not Miraculin–Daemon Markets Ltd.</label>
                <input id="securities_exchange" name="securities_exchange" type="text"></input>
            </div>
            <div class="form-entry">
                <label for="title_class">Title and Class of Securities</label>
                <input id="title_class" name="prospectus" type="text"></input>
            </div>
            <div class="form-entry">
                <label for="par_value">Par Value</label>
                <input id="par_value" name="par_value" type="number"></input>
            </div>
            <div class="form-entry">
                <label for="use_of_proceeds">Use of Proceeds</label>
                <input id="use_of_proceeds" name="use_of_proceeds" type="text"></input>
            </div>
            <div class="form-entry">
                <label for="prospectus">Prospectus</label>
                <textarea id="prospectus" name="prospectus"></textarea>
            </div>
            <Checkbox class="form-entry" checkbox-name="consent">I have read and agree to the <RouterLink to="/simdem-exchange/privacy">Privacy Policy</RouterLink> and <RouterLink to="/terms-conditions">Terms and Conditions.</RouterLink></Checkbox>
            <input type="submit" value="Submit">
        </form>
    </article>
</template>

<style scoped>

.section-introduction {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.section-introduction-horizontal-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    gap: 4rem;
    flex-wrap: nowrap;
}

.section-introduction-horizontal-list-entry {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
}

form > :first-child {
    margin-top: 0;
}

.form-entry {
    margin-top: 1.5rem;
}

textarea {
    border: 1px solid white;
    border-radius: 2px;
}

figure {
    margin: 0 auto;
    height: 8rem;
    width: 8rem;
}

.section-introduction-subtext {
    font-size: 1.5rem;
    text-align: center;
    line-height: 2.25rem;
}

</style>
