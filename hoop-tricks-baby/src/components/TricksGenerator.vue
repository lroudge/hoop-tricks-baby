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
            tagColors: [
                "pink",
                "red",
                "orange",
                "green",
                "cyan",
                "blue",
                "purple"
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
        },
        getRandomColor() {
            // const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let rand = Math.floor(Math.random() * this.tagColors.length);
            console.log("Generated color = " + this.tagColors[rand]);
            return this.tagColors[rand];
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
}
li {
    display: inline-block;
    margin: 0 10px;
    font-size: 2em;
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
.ant-tag-pink {
    font-size: 1.2rem;
}
</style>
