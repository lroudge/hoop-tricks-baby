<template>
    <div class="tricks-generator">
        <h1>{{ msg }}</h1>
        <div class="question">
            <h2>How many tricks do you want to combine?</h2>
            <a-input-number
                id="inputNumber"
                :min="1"
                :max="this.hoopTricks.length"
                v-model="value"
            />
        </div>
        <a-button @click="combineTricks">Generate a combo!</a-button>
        <ul v-if="generatedCombo.length">
            <li v-for="trick in this.generatedCombo" v-bind:key="trick">
                <a-tag color="pink">{{ trick }}</a-tag>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TricksGenerator",
    props: {
        msg: String
    },
    data() {
        return {
            value: 1,
            hoopTricks: [
                "Lasso",
                "Weave",
                "Escalator",
                "Bounce isolation",
                "Smear",
                "Body wrap",
                "Pizza toss",
                "Two handed isolation",
                "Cat eyes isolation",
                "Table isolation",
                "Wedgie",
                "Mandala",
                "Coin flip",
                "Jump through",
                "Flip",
                "Barrel roll",
                "Pop",
                "Chest stall",
                "Backpack",
                "Helicopter"
            ],
            generatedCombo: []
        };
    },
    methods: {
        combineTricks() {
            this.generatedCombo = [];
            let rand = 0;
            for (let i = 0; i < this.value; i++) {
                rand = Math.floor(Math.random() * this.hoopTricks.length);
                if (!this.generatedCombo.includes(this.hoopTricks[rand]))
                    this.generatedCombo.push(this.hoopTricks[rand]);
                else i--;
            }
            console.log(this.generatedCombo);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: space-around;
    height: 10rem;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.question {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.ant-input-number {
    width: 55px;
}
.ant-tag-pink {
    font-size: 1.2rem;
    height: 2rem;
    line-height: 2rem;
}
</style>
