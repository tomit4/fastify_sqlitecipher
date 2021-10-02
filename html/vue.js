function Counter(props) {
    return {
        $template: '#counter-template',
        count: props.initialCount,
        inc() {
            this.count++
        },
    }
}

PetiteVue.createApp({
    Counter,
}).mount()
