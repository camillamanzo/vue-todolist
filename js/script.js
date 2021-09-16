/*
 * Stampare in pagina un item per ogni elemento contenuto in un array
 * Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
 * Predisporre un input per aggiungere un nuovo item alla lista: 
 * digitando il tasto invio oppure ciccando su un pulsante, il testo digitato sarà aggiunto alla lista
 */


let app = new Vue(
    {
        el: "#app",
        data: {
            arr: ["Do a one hour workout.", "Have lunch with Jonas.", "Finish reading the book.", "Go buy fruit.", "Call mom.", "Buy Filo's birthday present.", ],
            newElement: "",
            overline: false,
        },

        methods: {
            // Function that deletes the element clicked.
            deleteText: function(element){
                this.arr.splice(element, 1);
            },

            // Function that adds the written element to the list.
            addElement: function(event){
                if(this.newElement.trim(" ").length > 0){
                   this.arr.push(this.newElement.trim(" "));
                   this.newElement = "" 
                }
            },

            overlineText: function(){
                this.overline = true;
                console.log(this.overline);
            }
        }
    });