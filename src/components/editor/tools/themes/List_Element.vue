<template>
    <div id = "list_elem" :style = "this.selected && this.showSelect ? 'border-radius: 5px; border: solid #F05E23; border-width: 1px' : ''">    
        <label id = "list_name" >{{this.name}}</label>
        
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-on = "on" v-bind = "attrs" 
                    icon id = "list_delete" 
                    v-on:click = "viewDelete">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            <span>Delete Theme</span>
        </v-tooltip>

        <v-tooltip bottom v-if = "!this.deleteOptions && this.select">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-on = "on" v-bind = "attrs" 
                    icon id = "list_apply_select" 
                    v-on:click = "emitElementSelect">
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </template>
            <span>Apply "{{name}}" to Displayed Page</span>
        </v-tooltip>

        <v-tooltip bottom v-if = "!this.deleteOptions && this.select">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-on = "on" v-bind = "attrs" 
                    icon id = "list_apply_all" 
                    v-on:click = "emitElementApplyAll">
                    <v-icon>mdi-clipboard-check-multiple</v-icon>
                </v-btn>
            </template>
            <span>Apply "{{name}}" to All Pages</span>
        </v-tooltip>

        
        <v-btn v-if = "this.deleteOptions" id = "list_revert" icon v-on:click = "viewDelete"><v-icon>mdi-close</v-icon></v-btn>
        <v-btn v-if = "this.deleteOptions" id = "list_permadelete" icon v-on:click = "emitElementRemove"><v-icon>mdi-check</v-icon></v-btn>
    </div>
</template>

<script>
export default {
    name: 'list-element',
    props:{
        name: String,   
        select: Boolean,
        showSelect: Boolean,
    },

    data() {
        return {
            deleteOptions: false,
            selected: false,
        }
    },

    methods: {
        viewDelete: function() {
            this.deleteOptions = !this.deleteOptions;
        },

        emitElementRemove: function() {
            this.$emit("evtRemove", this.name);
        },

        emitElementSelect: function() {
            this.selected = !this.selected;

            this.$emit("evtSelect", {name: this.name, selected: this.selected});
            
        },

        emitElementApplyAll: function(){

            this.selected = !this.selected;

            this.$emit("evtSelectAll", {name: this.name, selected:this.selected});   
        }
    }
}
</script>

<style scoped>
    #list_elem{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    button{
        outline: none;
    }

    #list_name{
        width:150px;
        padding-top: 0.4rem;
    }

    @keyframes border_anim{
        from{border: solid white;        
                border-width: 2px;
                border-radius: 5px;
                padding: 5px;}

        to{border:solid gray;
            border-width: 2px;
            border-radius: 5px;
            padding: 5px;}
        }

    .sidebar_button{
		border: solid white;
        border-width: 2px;
		border-radius: 5px;
        padding: 5px;
	}

	.sidebar_button:hover{
		animation: border_anim;
		animation-fill-mode: forwards;
		animation-duration: 500ms;
	}
</style>