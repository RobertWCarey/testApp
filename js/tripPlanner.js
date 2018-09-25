// $(document).ready(function() {

// 	var apikey = "GslAEvtll254WIyfptPFPLL4OxDpvTxvXS3w";


// 	$.get("https://api.transport.nsw.gov.au/v1/tp/stop_finder?outputFormat=rapidJSON&type_sf=any&name_sf=Circular%20Quay&coordOutputFormat=EPSG%3A4326&TfNSWSF=true&version=10.2.1.42").done(function(response) {
// 		console.log(response);
// 	});

// })

var stations = ["Albury Station","Aberdeen Station","Allawah Station","Albion Park Station","Armidale Station","Arncliffe Station","Artarmon Station","Ashfield Station","Asquith Station","Adamstown Station","Auburn Station","Austinmer Station","Awaba Station","Beecroft Station","Bardwell Park Station","Bungendore Station","Berowra Station","Bargo Station","Blackheath Station","Birrong Station","Bondi Junction Station","Broken Hill Station","Banksia Station","Blayney Station","Bullaburra Station","Bulli Station","Bell Station","Bellata Station","Bombo Station","Broadmeadow Station","Bellambi Station","Belmore Station","Brisbane Station","Bankstown Station","Branxton Station","Boggabri Station","Burradoo Station","Booragul Station","Bowral Station","Berala Station","Berry Station","Beresfield Station","Bathurst Station","Blacktown Station","Bundanoon Station","Buxton Bus","Buxton Bus 1","Broadmeadows Station","Beverly Hills Station","Benalla Station","Burwood Station","Blaxland Station","Bexley North Station","Cabramatta Station","Casula Station","Canterbury Station","Coalcliff Station","Cockle Creek Station","Circular Quay Station","Cardiff Station","Clarendon Station","Central Station","Coffs Harbour Station","Carlingford Station","Chester Hill Station","Cheltenham Station","Camellia Station","Coledale Station","Clyde Station","Carlton Station","Corrimal Station","Coolamon Station","Como Station","Campsie Station","Canberra Station","Caringbah Station","Cronulla Station","Coniston Station","Canley Vale Station","Condobolin Station","Concord West Station","Cringila Station","Couridjah Bus","Couridjah Bus 1","Carramar Station","Casino Station","Cootamundra Station","Campbelltown Station","Culcairn Station","Chatswood Station","Cowan Station","Croydon Station","Dapto Station","Dubbo Station","Dora Creek Station","Dulwich Hill Station","Dungog Station","Darnick Station","Denistone Station","Doonside Station","Douglas Park Station","Dundas Station","Edgecliff Station","Edmondson Park Station","Engadine Station","East Hills Station","East Maitland Station","Eungai Station","Epping Station","Emu Plains Station","East Richmond Station","Erskineville Station","Euabalong West Station","Eastwood Station","Exeter Station","Faulconbridge Station","Fairfield Station","Flemington Station","Fairy Meadow Station","Fassifern Station","Glenbrook Station","Gloucester Station","Gunnedah Station","Glenfield Station","Goulburn Station","Guildford Station","Gunning Station","Gerringong Station","Gosford Station","Green Square Station","Gordon Station","Geurie Station","Griffith Station","Greta Station","Granville Station","Gymea Station","Hamilton Station","Harden Station","Hornsby Station","Heathcote Station","Hilldale Station","Helensburgh Station","Holsworthy Station","Homebush Station","Harris Park Station","Hurlstone Park Station","Hawkesbury River Station","High Street Station","Henty Station","Hurstville Station","Hexham Station","Hazelbrook Station","Ingleburn Station","Ivanhoe Station","Jannali Station","Junee Station","Katoomba Station","Kendall Station","Kempsey Station","Kingsgrove Station","Kings Cross Station","Kiama Station","Killara Station","Kembla Grange Station","Kogarah Station","Kootingal Station","Kirrawee Station","Kotara Station","Kingswood Station","Koolewong Station","Kyogle Station","Lakemba Station","Lapstone Station","Lawson Station","Lidcombe Station","Lindfield Station","Leppington Station","Leeton Station","Lewisham Station","Loftus Station","Linden Station","Liverpool Station","Lochinvar Station","Leura Station","Lisarow Station","Lysaghts Station","Lithgow Station","Leightonfield Station","Leumeah Station","Marulan Station","Macarthur Station","Mascot Station","Macdonaldtown Station","Macquarie University Station","Meadowbank Station","Murrurundi Station","Mindaribba Station","Mount Druitt Station","Medlow Bath Station","Metford Station","Menangle Station","Menangle Park Station","Minto Station","Mittagong Station","Mount Kuring-Gai Station","Macksville Station","Marrickville Station","Maitland Station","Menindee Station","Martin Place Station","Milsons Point Station","Macquarie Fields Station","Macquarie Park Station","Miranda Station","Moree Station","Martins Creek Station","Mortdale Station","Museum Station","Morisset Station","Mount Colah Station","Mount Victoria Station","Mulgrave Station","Minnamurra Station","MuswellBrook Station","Moss Vale Station","Marayong Station","Merrylands Station","Nambucca Heads Station","Narrabri Station","Narrandera Station","Niagara Park Station","Normanhurst Station","Bomaderry (Nowra) Station","Narara Station","North Ryde Station","Narwee Station","North Strathfield Station","North Sydney Station","Newtown Station","North Wollongong Station","Newcastle Interchange Station","Oak Flats Station","Oatley Station","Olympic Park Station","Orange Station","Otford Station","Ourimbah Station","Padstow Station","Panania Station","Point Clare Station","Perth Station","Pendle Hill Station","Penrith Station","Petersham Station","Picton Station","Port Kembla Station","Port Kembla North Station","Parkes Station","Penshurst Station","Pennant Hills Station","Penrose Station","Parramatta Station","Paterson Station","Punchbowl Station","Pymble Station","Quirindi Station","Quakers Hill Station","Queanbeyan Station","Raglan Bus","Raglan Bus 1","Raglan Bus 2","Redfern Station","Rydal Station","Rhodes Station","Richmond Station","Riverstone Station","Rydalmere Station","Rockdale Station","Regents Park Station","Rosehill Station","Roseville Station","Robertson Bus","Robertson Bus 1","Rooty Hill Station","Revesby Station","Riverwood Station","Sandgate Station","Ranelagh House Bus","Scone Station","Schofields Station","Scarborough Station","Domestic Airport Station","Seymour Station","Sefton Station","Singleton Station","Shellharbour Junction Station","Dunmore Station","Southern Cross Station","International Airport Station","Summer Hill Station","Stanmore Station","Grafton Station","Springwood Station","Sutherland Station","St James Station","St Leonards Station","St Marys Station","St Peters Station","Strathfield Station","Stuart Town Station","Seven Hills Station","Stanwell Park Station","Sawtell Station","Sydenham Station","Tahmoor Station","Tallong Station","Tamworth Station","Tarana Station","Tascott Station","Telopea Station","Teralba Station","Toongabbie Station","Tarago Station","Thirroul Station","Town Hall Station","Thirlmere Bus","Thirlmere Bus 1","Thornleigh Station","Telarah Station","Tempe Station","Thornton Station","Taree Station","The Rock Station","Turrella Station","Tarro Station","Tuggerah Station","Turramurra Station","Towradgi Station","Unanderra Station","Urunga Station","Uralla Station","Valley Heights Station","Villawood Station","Vineyard Station","Victoria Street Station","Wahroonga Station","Waitara Station","Waverton Station","Wombarra Station","Wolli Creek Station","Werris Creek Station","Wondabyne Station","Woodford Station","Waterfall Station","Wentworth Falls Station","Wagga Wagga Station","Wingham Station","Wingello Station","Windsor Station","Wirragulla Station","Warwick Farm Station","Wallarobba Station","Walcha Road Station","Wollstonecraft Station","Woolooware Station","Wiley Park Station","Westmead Station","Wallerawang Bus","Wallerawang Bus 1","Wallerawang Bus 2","Wollongong Station","Woonona Station","Woy Woy Station","West Ryde Station","Warnervale Station","Werrington Station","Warabrook Station","Warrimoo Station","Warrawee Station","Willow Tree Station","Waratah Station","Wellington Station","Wauchope Station","Wentworthville Station","Wangaratta Station","Wyee Station","Wyong Station","Wynyard Station","Yagoona Station","Yass Junction Station","Yennora Station","Yerrinbool Station","Zig Zag Station"]

$(document).ready(function() {
	stationList();
})

function stationList() {
	for (var i = 0; i < stations.length ; i++) {
		generateList(stations[i])
	}
}

function generateList(name) {
	var li = createElement("li", "mdl-list__item");
	var primSpan = createElement("span", "mdl-list__item-primary-content");
	var secSpan = createElement("span", "mdl-list__item-secondary-action");
	var input = createElement("input","mdl-checkbox__input");
	var label = createElement("label", "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect");
	var icon = createElement("i", "material-icons");

	// Assigning additional properties to elements
	$(input).attr({"type":"checkBox", "id":name, "name": "stationSelect"});
	$(label).attr("for", name);
	
	//Adding text within element
	$(icon).html("train");

	//Nesting all the elements together
	$(label).append(input);
	$(secSpan).append(label);
	$(primSpan).append(icon, name);
	$(li).append(primSpan, secSpan);
	
	// console.log(li);
	document.getElementById("stations").appendChild(li);
}

// Creates a DOM element with a class property
function createElement(element, classes) {
	var el = document.createElement(element);
	$(el).attr("class",classes);
	return el;
}

function filterFunc() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('stationSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById("stations");
    li = ul.getElementsByName('stationSelect');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}