<template>
    <h3>Lista Filmes</h3>
    <input type="text" placeholder="Nome do Filme" v-model="item">
    <button type="button" @click='adicionaritem'>Adicionar</button>
    <br>
    <ul>
        <li v-for="(item, index) in items" :key="index">{{ items }}</li>
    </ul>
    <button type="button" @click='removerItem'>Remover</button>
</template>

<script>
import ListaMixin from  '../mixins/ListaMixin';
import RemoverListaMixin from  '../mixins/RemoverItemLista.js';

export default{
    name: 'ListaPessoas',
    mixins: [
        ListaMixin, 
        RemoverListaMixin
    ]
}
</script>