export default{
    name: 'ListaFilmes',
    data: () => ({
        items:[],
        item: ''
    }),
    methods: {
        adicionaritem(){
            this.items.push(this.item)
            this.item = ''
        }
    }
}