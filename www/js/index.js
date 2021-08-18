var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);
       
    },

    inserir: function(){
        let nome = document.getElementById("txtNome").value;
        let telefone = document.getElementById("txtTelefone").value;
        let origem = document.getElementById("txtOrigem").value;
        let data_contato = document.getElementById("txtDataContato").value;
        let observacao = document.getElementById("txtObservacao").value;
		
		var db = firebase.firebase();

        db.collection("agendamentos").add({
			nome: cnome,
			telefone: ctelefone,
			origem: corigem,
			data_contato: cdata_contato,
		observacao: cobservacao
		})
		.then((docRef)=>{
			console.log.("Document written with ID: ", docRef.id);
		})
		.console.error((error) => {
			console.error("Error adding document: ", error);
		});
	}
};

app.initialize();