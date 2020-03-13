//Data preparation
const container = document.getElementById("graph");
const maltemo_id = 0;
const sinhack_id = 100;
const write_up_id = 99;

const nodes = new vis.DataSet([
	{
		id : maltemo_id,
		label : "Maltemo",
		group : "Player",
		shape : 'circularImage',
		image : 'assets/images/avatar.jpg',
		value : 5
	},{
		id : sinhack_id,
		label : "SinHack",
		group : "Team",
		shape : 'circularImage',
		image : 'assets/images/sinhack.jpg',
		value : 4
	},{
		id : write_up_id,
		label : "Write-ups",
		group : "Category",
		value : "2"
	}
]);
const edges = new vis.DataSet([
	{
		from : maltemo_id,
		to : sinhack_id,
		label : "member of",
		arrows : { to : true }
	},{
		from : maltemo_id,
		to : write_up_id,
		label : "redacted",
		arrows : { to : true }
	}
]);

const options = {
    nodes : {
        shape : "dot",
        size : 16,
		font : {
			color : "white"
		}
    },
	edges : {
		font: {
			align : "middle",
			strokeWidth : 0,
			color : "white"
		}
	}
}

// ======= CTF ============ //
const ctf_nodes = [];
const ctf_edges = [];

ctf_list.forEach((ctf)=>{
	ctf_nodes.push({
		id : ctf.id,
		label : ctf.name,
		group : "CTF",
		value : 2
	});
	ctf_edges.push({
		from : write_up_id,
		to : ctf.id,
		label : "from"
	});
});

nodes.add(ctf_nodes);
edges.add(ctf_edges);

// ========= Write-ups ======== //
const write_up_nodes = [];
const write_up_edges = [];

write_up_list.forEach((wu,index)=>{
	let current_id = 1000 + index;
	write_up_nodes.push({
		id : current_id,
		label : wu.title,
		group : "Write-up",
		title : wu.date.toLocaleDateString(),
		value : 1,
		date : wu.date,
		ctf : wu.ctf,
		challenge_type : wu.challenge_type
	});
	write_up_edges.push({
		from : wu.ctf,
		to : current_id,
		label : wu.challenge_type
	});
});

nodes.add(write_up_nodes);
edges.add(write_up_edges);

//Generating the graph
const network = new vis.Network(container,{ nodes, edges }, options);

//On click event
network.on('click',function(event){
	//if a node was selected
	if(event.nodes.length > 0){
		let selected_node = nodes.get(event.nodes[0]);
		//If the selected_node is a write-up
		if(selected_node.group === "Write-up"){
			//redirect to the correct resource
			let url = `write-ups/${ctf_list.filter(x=>x.id===selected_node.ctf)[0].name}_${selected_node.date.getFullYear()}_${selected_node.challenge_type}_${selected_node.label}.html`;
			window.open(url);
		}
	}
});
