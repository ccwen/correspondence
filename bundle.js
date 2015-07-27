(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\ksana2015\\correspondence\\index.js":[function(require,module,exports){
var React=require("react");
require("ksana2015-webruntime/livereload")(); 
var ksanagap=require("ksana2015-webruntime/ksanagap");
ksanagap.boot("correspondence",function(){
	var Main=React.createElement(require("./src/main.jsx"));
	ksana.mainComponent=React.render(Main,document.getElementById("main"));
});
},{"./src/main.jsx":"C:\\ksana2015\\correspondence\\src\\main.jsx","ksana2015-webruntime/ksanagap":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\ksanagap.js","ksana2015-webruntime/livereload":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\livereload.js","react":"react"}],"C:\\ksana2015\\correspondence\\src\\actions\\highlight.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["enter","leave"]);
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\actions\\link.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["add","remove","replace","fetch"]);
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\actions\\selection.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["set","setAll","clear"]);
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\actions\\sourcetext.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["fetch"]);
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\actions\\user.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["login","logout"]);;
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\controls.js":[function(require,module,exports){
var React=require("react");
var action=require("./actions/link");
var SegNav=require("ksana2015-segnav");
var action_sourcetext=require("./actions/sourcetext");
var store_sourcetext=require("./stores/sourcetext");
var LoginBox=require("./views/loginbox");
var segs=store_sourcetext.segments();

var Controls=React.createClass({displayName: "Controls",
	startSeg:"10.5"
  ,addLink:function() {
		action.add();
	}
	,clear:function() {
		actions.clear();
	}
	,onGoSegment:function(segnow) {
		action_sourcetext.fetch(segnow);
	}
	,componentDidMount:function() {
		action_sourcetext.fetch(this.startSeg);
	}
	,render:function() {
		return React.createElement("div", null, 
				React.createElement(SegNav, {segs: segs, segpat: ".(\\d+\\.\\d+)", value: this.startSeg, onGoSegment: this.onGoSegment}), 
				React.createElement("span", null, "　　"), 
      	React.createElement("button", {onClick: this.addLink}, "Add Link"), 
      	React.createElement("span", {className: "pull-right"}, React.createElement(LoginBox, null))
     )
	}
});

module.exports=Controls;
},{"./actions/link":"C:\\ksana2015\\correspondence\\src\\actions\\link.js","./actions/sourcetext":"C:\\ksana2015\\correspondence\\src\\actions\\sourcetext.js","./stores/sourcetext":"C:\\ksana2015\\correspondence\\src\\stores\\sourcetext.js","./views/loginbox":"C:\\ksana2015\\correspondence\\src\\views\\loginbox.js","ksana2015-segnav":"C:\\ksana2015\\node_modules\\ksana2015-segnav\\index.js","react":"react"}],"C:\\ksana2015\\correspondence\\src\\diamond.json":[function(require,module,exports){
module.exports={
 "s0.0": "vajracchedikā prajñāpāramitā",
 "s1.1": " evaṃ mayā śrutam ekasmin samaye |",
 "s1.2": "Bhagavāñ Śrāvastyāṃ viharati sma Jetavane 'nāthapiṇḍadasya-ārāme mahatā bhikṣu-saṁghena sārdham ardhatrayodaśabhir bhikṣu-śataiḥ sambahulaiś ca bodhisattvair mahāsattvaiḥ |",
 "s1.3": " atha khalu Bhagavān pūrvāhṇa-kāla-samaye nivāsya pātracīvaram ādāya Śrāvastīṃ mahā-nagarīṃ piṇḍāya prāvikṣat |",
 "s1.4": "atha khalu Bhagavāñ Śrāvastīṃ mahā-nagarīṃ piṇḍāya caritvā kṛta-bhakta-kṛtyaḥ paścādbhakta-piṇḍapāta-pratikrāntaḥ pātra-cīvaraṃ pratiśāmya pādau prakṣalya nyaṣīdat prajñapta eva-āsane paryaṅkam ābhujya ṛjuṃ kāyaṃ praṇidhāya pratimukhīṃ smṛtim upasthāpya |",
 "s1.5": "atha khalu sambahulā bhikṣavo yena Bhagavāṃs tenopasaṃkraman upa saṃkramya Bhagavataḥ pādau śirobhir abhivandya Bhagavantaṃ triṣpr adakṣiṇīkṛtya ekānte nyaṣīdan||1||",
 "s2.1": " tena khalu punaḥ samayena āyuṣmān subhūtis tasyām eva parṣadi saṃnipatito 'bhūt saṃniṣaṇṇaḥ |",
 "s2.2": " atha khalv āyuṣmān subhūtir utthāya-āsanād ekāṃsam uttarāsaṅgaṃ kṛtvā dakṣiṇaṃ jānu-maṇḍalaṃ pṛthivyāṃ pratiṣṭhāpya yena bhagavāṃs tena añjaliṃ praṇamya bhagavantam etad avocat |",
 "s2.3": " āścaryaṃ bhagavan parama-āścaryaṃ sugata yāvad eva tathāgatena-arhatā samyaksaṃbuddhena bodhisattvā mahāsattvā anuparigṛhītāḥ parameṇa anugraheṇa | āścaryaṃ bhagavan yāvad eva tathāgatenārhatā samyaksaṃbuddhena bodhisattvā mahāsattvāḥ parīnditāḥ paramayā parīndanayā |",
 "s2.4": " tat kathaṃ bhagavan bodhisattvayāna saṃprasthitena kulaputreṇa vā kuladuhitrā vā sthātavyaṃ | kathaṃ pratipattavyaṃ | kathaṃ cittaṃ pragrahītavyam |",
 "s2.5": " evam ukte bhagavān āyuṣmantaṃ subhūtim etad avocat | sādhu sādhu subhūte evam etad yathā vadasi |",
 "s2.6": " anuparigṛhītās tathāgatena bodhisattvā mahāsattvāḥ parameṇa anugraheṇa| parīnditās tathāgatena bodhisattvā mahasattvāḥ paramayā parīndanayā |",
 "s2.7": " tena hi subhūte śṛṇu sādhu ca suṣṭhu ca manasikuru | bhāṣiṣye 'haṃ te |yathā bodhisattva-yāna-saṃprasthitena sthātavyaṃ | yathā pratipattavyaṃ |yathā cittaṃ pragrahītavyam |",
 "s2.8": " evaṃ bhagavan ity āyuṣmān subhūtir bhagavataḥ pratyaśrauṣīt ||2||",
 "s3.1": " bhagavān etad avocat | iha subhūte bodhisattva-yāna-saṃprasthitena evaṃ cittam utpādayitavyaṃ |",
 "s3.2": " yāvantaḥ subhūte sattvāḥ sattvadhātau sattva-saṃgraheṇa saṃgṛhītā aṇḍajā vā jarāyujā vā saṃsvedajā vā aupapādukā vā rūpiṇo vā arūpiṇo vā saṃjñino vā asaṃjñino vā naiva aṃjñino nāsaṃjñino vā yāvān kaścit sattvadhātuḥ prajñapya-mānaḥ prajñapyate te ca mayā sarve 'nupadhiśeṣe nirvāṇadhātau parinirvāpayitavyāḥ |",
 "s3.3": " evam aparimāṇān api sattvān parinirvāpya na kaścit sattvaḥ parinirvāpito bhavati |",
 "s3.4": " tat kasya hetoḥ | sacet subhūte bodhisattvasya sattva-saṃjñā pravarteta na sa bodhisattva iti vaktavyaḥ | ",
 "s3.5": " tat kasya hetoḥ | na sa subhūte bodhisattvo vaktavyo yasya ātma-saṃjñā pravarteta sattva-saṃjñā vā jīva-saṃjñā vā pudgala-saṃjñā vā pravarteta||3||",
 "s4.1": " api tu khalu punaḥ subhūte na bodhisattvena vastupratiṣṭhitena dānaṃ dātavyaṃ | na kvacit pratiṣṭhitena dānaṃ dātavyaṃ |",
 "s4.2": " na rūpa-pratiṣṭhitena dānaṃ dātavyaṃ | na śabda-gandha-rasa-spraṣṭavya-dharmeṣu pratiṣṭhitena dānaṃ dātavyam |",
 "s4.3": " evaṃ hi subhūte bodhisattvena mahāsattvena dānaṃ dātavyaṃ | yathā na nimitta-saṃjñāyām api pratitiṣṭhet |",
 "s4.4": " tat kasya hetoḥ | yaḥ subhūte bodhisattvo 'pratiṣṭhito dānaṃ dadāti tasya subhūte puṇya-skandhasya na sukaraṃ pramāṇam udgrahītum |",
 "s4.5": " tat kiṃ manyase subhūte sukaraṃ pūrvasyāṃ diśy ākāśasya pramāṇamudgrahītum |",
 "s4.6": " subhūtir āha | no hīdaṃ bhagavan |",
 "s4.7": " bhagavān āha |evaṃ dakṣiṇa-paścima-uttarāsvadha-ūrdhvaṃ digvidikṣu samantād daśasu dikṣu sukaram ākāśasya pramāṇam udgrahītum |",
 "s4.8": " subhūtir āha | no hīdaṃ bhagavan |",
 "s4.9": " bhagavān āha | evam eva subhūte yo bodhisattvo 'pratiṣṭhito dānaṃ dadāti tasya subhūte puṇyaskandhasya na sukaraṃ pramāṇam udgrahītum |",
 "s4.10": " evaṃ hi subhūte bodhisattva-yāna-saṃprasthitena dānaṃ dātavyaṃ yathā na nimitta-saṃjñāyām api pratitiṣṭhet ||4||",
 "s5.1": " tat kiṃ manyase subhūte lakṣaṇa-sampadā tathāgato draṣṭavyaḥ |",
 "s5.2": " subhūtir āha | no hīdaṃ bhagavan na lakṣaṇa-saṃpadā tathāgato draṣṭavyaḥ |",
 "s5.3": " tat kasya hetoḥ | yā sā bhagavan lakṣaṇa-saṃpat tathāgatena bhāṣitā saiva alakṣaṇa-saṃpat |",
 "s5.4": " evam ukte bhagavān āyuṣmantaṃ subhūtim etad avocat |",
 "s5.5": " yāvat subhūte lakṣaṇa-saṃpat tāvan mṛṣā | yāvad alakṣaṇa-saṃpat tāvan na mṛṣeti | hi lakṣaṇa-alakṣaṇatas tathāgato draṣṭavyaḥ ||5||",
 "s6.1": " evam ukta āyuṣmān subhūtir bhagavantam etad avocat |",
 "s6.2": " asti bhagavan kecit sattvā bhaviṣyanty anāgate 'dhvani paścime kāle paścime samaye paścimāyāṃ pañca-śatyāṃ saddharma-vipralopa-kāle vartamāne ya imeṣv evaṃrūpeṣu sūtrānta-padeṣu bhāṣyamāṇeṣu bhūta-saṃjñām utpādayiṣyanti |",
 "s6.3": "bhagavān āha | mā subhūte tvam evaṃ vocaḥ | asti kecit sattvā bhaviṣy antyanāgate 'dhvani paścime kāle paścime samaye paścimāyāṃ pañcaśatyāṃ saddharma-vipralope vartamāne ya imeṣv evaṃrūpeṣu sūtrāntapadeṣu bhāṣyamāṇeṣu bhūta-saṃjñām utpādayiṣyanti |",
 "s6.4": "api tu khalu punaḥ subhūte bhaviṣyanty anāgate 'dhvani bodhisattvā mahāsattvāḥ paścime kāle paścime samaye paścimāyāṃ pañca-śatyāṃ saddharma-vipralope vartamāne guṇavantaḥ śīlavantaḥ prajñāvantaś ca bhaviṣyanti",
 "s6.5": "ya imeṣv evaṃrūpeṣu sūtrānta-padeṣu bhāṣyamāṇeṣu bhūtasaṃjñām utpādayiṣyanti |",
 "s6.6": " na khalu punas te subhūte bodhisattvā mahāsattvā eka-buddha-paryupāsitā bhaviṣyanti | na eka-buddha-avaropita-kuśala-mūlā bhaviṣyanti |",
 "s6.7": " api tu khalu punaḥ subhūte aneka-buddha-śatasahasra-paryupāsitā aneka-buddha-śatasahasra-avaropita-kuśala-mūlās te bodhisattvā mahāsattvā bhaviṣyanti |",
 "s6.8": " ya imeṣv evaṃrūpeṣu sūtrānta-padeṣu bhāṣyamāṇeṣv ekacitta-prasādam api pratilapsyante |",
 "s6.9": " jñātās te subhūte tathāgatena buddha-jñānena dṛṣṭās te subhūte tathāgatena buddha-cakṣuṣā buddhās te subhūte tathāgatena | sarve te subhūte'prameyam asaṃkhyeyaṃ puṇyaskandhaṃ prasaviṣyanti pratigrahīṣyanti |",
 "s6.10": " tat kasya hetoḥ | na hi subhūte teṣāṃ bodhisattvānāṃ mahāsattvānām ātmasaṃjñā pravartate na sattvasaṃjñā na jīvasaṃjñā na pudgalasaṃjñā pravartate |",
 "s6.11": " nāpi teṣāṃ subhūte bodhisattvānāṃ mahāsattvānāṃ dharmasaṃjñā pravartate | evaṃ nādharmasaṃjñā | nāpi teṣāṃ subhūte saṃjñā nāsaṃjñā pravartate |",
 "s6.12": " tatkasya hetoḥ | sacet subhūte teṣāṃ bodhisattvānāṃ mahāsattvānāṃ dharmasaṃjñā pravarteta sa eva teṣām ātmagrāho bhavet sattvagrāho jīvagrāhaḥ pudgalagrāho bhavet |",
 "s6.13": " saced adharmasaṃjñā pravarteta sa eva teṣām ātmagrāho bhavet sattvagrāho jīvagrāhaḥ pudgalagrāha iti |",
 "s6.14": " tatkasya hetoḥ | na khalu punaḥ subhūte bodhisattvena mahāsattvena dharma udgrahītavyo nādharmaḥ |",
 "s6.15": " tasmād iyaṃ tathāgatena saṃdhāya vāg bhāṣitā | kolopamaṃ dharma-paryāyam ājānadbhir dharmā eva prahātavyāḥ prāg evādharmā iti ||6||",
 "s7.1": " punar aparaṃ bhagavān āyuṣmantaṃ subhūtim etad avocat |",
 "s7.2": " tat kiṃ manyase subhūte asti sa kaścid dharmo yas tathāgatena anuttarā samyaksaṃbodhir ity abhisaṃbuddhaḥ kaścid vā dharmas tathāgatena deśitaḥ |",
 "s7.3": " evam ukta āyuṣmān subhūtir bhagavantam etad avocat | yathā ahaṃ bhagavan bhagavato bhāṣitasya artham ājānāmi nāsti sa kaścid dharmo yas tathāgatena anuttarā samyaksaṃbodhir ity abhisaṃbuddhaḥ nāsti dharmo yas tathāgatena deśitaḥ |",
 "s7.4": " tat kasya hetoḥ | yo 'sau tathāgatena dharmo 'bhisaṃbuddho deśito vā agrāhyaḥ so 'nabhilapyaḥ | na sa dharmo nādharmaḥ |",
 "s7.5": "tatkasya hetoḥ |asaṃskṛta-prabhāvitā hy āryapudgalāḥ ||7||",
 "s8.1": " bhagavān āha | tat kiṃ manyase subhūte yaḥ kaścit kulaputro vā kuladuhitā vemaṃ trisāhasramahāsāhasraṃ lokadhātuṃ sapta-ratnaparipūrṇaṃ kṛtvā tathāgatebhyo 'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyāt api nu sa kulaputro vā kuladuhitā vā tato nidānaṃ bahutaraṃ puṇya-skandhaṃ prasunuyāt |",
 "s8.2": " subhūtir āha | bahu bhagavan bahu sugata sa kulaputro vā kuladuhitā vā tato nidānaṃ puṇya-skandhaṃ prasunuyāt |",
 "s8.3": " tat kasya hetoḥ | yo 'sau bhagavan puṇya-skandhas tathāgatena bhāṣito'skandhaḥ sa tathāgatena bhāṣitaḥ | tasmāt tathāgato bhāṣate puṇya-skandhaḥ puṇya-skandha iti |",
 "s8.4": " bhagavān āha | yaś ca khalu punaḥ subhūte kulaputro vā kuladuhitā vemaṃ trisāhasramahāsāhasraṃ lokadhātuṃ sapta-ratna-paripūrṇaṃ kṛtvā tathāgatebhyo 'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyāt |",
 "s8.5": " yaśceto dharm-aparyāyād antaśaś catuṣpādikām api gāthām udgṛhya parebhyo vistareṇa deśayet saṃprakāśayed ayam eva tato nidānaṃ bahutaraṃ puṇya-skandhaṃ prasunuyād aprameyam asaṃkhyeyam |",
 "s8.6": " tat kasya hetoḥ | ato nirjātā hi subhūte tathāgatānām arhatāṃ samyaksaṃbuddhānām anuttarā samyaksaṃbodhir | ato nirjātāś ca buddhā bhagavantaḥ |",
 "s8.7": " tat kasya hetoḥ | buddhadharmā buddhadharmā iti subhūte'buddhadharmāś caiva te tathāgatena bhāṣitāḥ | tenocyante buddhadharmā iti ||8||",
 "s9.1": " tat kiṃ manyase subhūte api nu srotāpannasyaivaṃ bhavati mayā srotāpatti-phalaṃ prāptam iti |",
 "s9.2": " subhūtir āha | no hīdaṃ bhagavan | na srotāpannasyaivaṃ bhavati mayā srotāpatti-phalaṃ prāptam iti | tat kasya hetoḥ | na hi sa bhagavan kaṃcid dharmam āpannaḥ | tenocyate srotāpanna iti | na rūpam āpanno na śabdān na gandhān na rasān na spraṣṭavyān dharmān āpannaḥ | tenocyate srotāpanna iti |",
 "s9.3": " saced bhagavan srotāpannasyaivaṃ bhaven mayā srotāpatti-phalaṃ prāptam iti sa eva tasya ātmagrāho bhavet sattvagrāho jīvagrāhaḥ pudgalagrāho bhaved iti |",
 "s9.4": " bhagavān āha | tatkiṃ manyase subhūte api nu sakṛdāgāmina evaṃ bhavati mayā sakṛdāgāmiphalaṃ prāptam iti |",
 "s9.5": " subhūtirāha | no hīdaṃ bhagavan na sakṛdāgāmina evaṃ bhavati mayā sakṛdāgāmiphalaṃ prāptam iti | tatkasya hetoḥ | na hi sa kaścid dharmo yaḥ sakṛdāgāmitvam āpannaḥ | tenocyate sakṛdāgāmīti |",
 "s9.6": " bhagavān āha | tat kiṃ manyase subhūte api nv anāgāmina evaṃ bhavati mayā anāgāmiphalaṃ prāptam iti |",
 "s9.7": " subhūtir āha | no hīdaṃ bhagavan na anāgāmina evaṃ bhavati mayā anāgāmi-phalaṃ prāptamiti | tatkasya hetoḥ | na hi sa bhagavan kaścid dharmo yo 'nāgāmitvam āpannaḥ | tenocyate 'nāgāmīti |",
 "s9.8": " bhagavān āha | tat kiṃ manyase subhūte api nvarhata evaṃ bhavati mayā arhattvaṃ prāptam iti |",
 "s9.9": " subhūtir āha | no hīdaṃ bhagavan na arhata evaṃ bhavati mayā arhattvaṃ prāptam iti | tatkasya hetoḥ | na hi sa bhagavan kaścid dharmo yo 'rhan nāma | tenocyate 'rhann iti | saced bhagavann arhata evaṃ bhaven mayā arhattvaṃ prāptam iti sa eva tasya ātmagrāho bhavet sattvagrāho jīvagrāhaḥ pudgalagrāho bhavet |",
 "s9.10": " tat kasya hetoḥ | aham asmi bhagavaṃs tathāgatena arhatā samyaksaṃbuddhena araṇā-vihāriṇām agryo nirdiṣṭaḥ | aham asmi bhagavann arhan vītarāgaḥ | na ca me bhagavann evaṃ bhavati arhann asmy ahaṃ vītarāga iti |",
 "s9.11": " sacen mama bhagavann evaṃ bhaven mayā arhattvaṃ prāptam iti na māṃ tathāgato vyākariṣyad araṇā-vihāriṇām agryaḥ subhūtiḥ kulaputro na kvacid viharati tenocyate 'raṇā-vihāry araṇā-vihārīti ||9||",
 "s10.1": " bhagavān āha | tat kiṃ manyase subhūte asti sa kaścid dharmo yas tathāgatena dīpaṃkarasya tathāgatasya arhataḥ samyaksaṃbuddhasya antikād udgṛhītaḥ |",
 "s10.2": " subhūtir āha | no hīdaṃ bhagavan nāsti sa kaścid dharmo yas tathāgatena dīpaṃkarasya tathāgatasya arhataḥ samyaksaṃbuddhasya antikād udgṛhītaḥ |",
 "s10.3": " bhagavān āha | yaḥ kaścit subhūte bodhisattva evaṃ vaded ahaṃ kṣetra-vyūhān niṣpādayiṣyāmi iti sa vitathaṃ vadet |",
 "s10.4": "tatkasya hetoḥ | kṣetra-vyūhāḥ kṣetra-vyūhā iti subhūte 'vyūhās te tathāgatena bhāṣitāḥ | tenocyante kṣetra-vyūhā iti |",
 "s10.5": "tasmāt tarhi subhūte bodhisattvena mahāsattvenaivam apratiṣṭhitaṃ cittam utpādayitavyaṃ yanna kvacit pratiṣṭhitaṃ cittam utpādayitavyaṃ na rūpa-pratiṣṭhitaṃ cittam utpādayitavyaṃ naśabda-gandha-rasa-spraṣṭavya-dharma-pratiṣṭhitaṃ cittam utpādayitavyam |",
 "s10.6": "tad yathāpi nāma subhūte puruṣo bhaved upeta-kāyo mahā-kāyo yat tasyaivaṃrūpa ātma-bhāvaḥ syāt tad yathāpi nāma sumeruḥ parvata-rājaḥ tat kiṃ manyase subhūte api nu mahān sa ātmabhāvo bhavet |",
 "s10.7": " subhūtir āha | mahān sa bhagavan mahān sugata sa ātmabhāvo bhavet |tatkasya hetoḥ | ātmabhāva ātmabhāva iti bhagavann abhāvaḥ sa tathāgatena bhāṣitaḥ |tenocyata ātmabhāva iti | na hi bhagavan sa bhāvo nābhāvaḥ | tenocyata ātmabhāva iti |",
 "s11.1": " bhagavān āha | tat kiṃ manyase subhūte yāvatyo gaṅgāyāṃ mahānadyāṃ vālukās tāvatya eva gaṅgā-nadyo bhaveyuḥ tāsu yā vālukā api nu tā bahvyo bhaveyuḥ |",
 "s11.2": " subhūtir āha | tā eva tāvad bhagavan bahvyo gaṅgā-nadyo bhaveyuḥ prāg eva yās tāsu gaṅgā-nadīṣu vālukāḥ |",
 "s11.3": " bhagavān āha | ārocayāmi te subhūte prativedayāmi yāvatyas tāsu gaṅgā-nadīṣu vālukā bhaveyus tāvato lokadhātūn kaścid eva strī vā puruṣo vā sapta-ratna-paripūrṇaṃ kṛtvā tathāgatebhyo 'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyāt tatkiṃ manyase subhūte api nu sā strī vā puruṣo vā tato nidānaṃ bahu puṇya-skandhaṃ prasunuyāt |",
 "s11.4": " subhūtir āha | bahu bhagavan bahu sugata strī vā puruṣo vā tato nidānaṃ puṇya-skandhaṃ prasunuyād aprameyam asaṃkhyeyam |",
 "s11.5": " bhagavān āha |yaś ca khalu punaḥ subhūte strī vā puruṣo vā tāvato loka-dhātūn sapta-ratna-paripūrṇaṃ kṛtvā tathāgatebhyo 'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyāt yaś ca kulaputro vā kuladuhitā veto dharm-aparyāyād antaśaś catuṣpādikām api gāthām udgṛhya parebhyo deśayet saṃprakāśayed ayam eva tato nidānaṃ bahutaraṃ puṇya-skandhaṃ prasunuyād aprameyam asaṃkhyeyam ||11||",
 "s12.1": "api tu khalu punaḥ subhūte yasmin pṛthivī-pradeśa ito dharma-paryāyād antaśaś catuṣpādikām api gāthām udgṛhya bhāṣyeta vā saṃprakāśyeta vā sa pṛthivī-pradeśaś caitya-bhūto bhavet sadeva mānuṣa-asurasya lokasya",
 "s12.2": " kaḥ punar vādo ya imaṃ dharmaparyāyaṃ sakala-samāptaṃ dhārayiṣyanti vācayiṣyanti paryavāpsyanti parebhyaś ca vistareṇa saṃprakāśayiṣyanti |",
 "s12.3": " parameṇa te subhūte āścaryeṇa samanvāgatā bhaviṣyanti | tasmiṃś ca subhūte pṛthivī-pradeśe śāstā viharaty anyatara-anyataro vā vijñaguru-sthānīyaḥ ||12||",
 "s13.1": " evam ukta āyuṣmān subhūtir bhagavantam etad avocat | ko nāma ayaṃ bhagavan dharmaparyāyaḥ kathaṃ cainaṃ dhārayāmi |",
 "s13.2": " evam ukte bhagavān āyuṣmantaṃ subhūtim etad avocat | prajñāpāramitā nāma ayaṃ subhūte dharmaparyāyaḥ | evaṃ cainaṃ dhāraya | tatkasya hetoḥ | yaiva subhūte prajñāpāramitā tathāgatena bhāṣitā saiva-a-pāramitā tathāgatena bhāṣitā | tenocyate prajñāpāramiteti |",
 "s13.3": " tatkiṃ manyase subhūte api nvasti sa kaścid dharmo yastathāgatena bhāṣitaḥ|",
 "s13.4": " subhūtir āha | no hīdaṃ bhagavan nāsti sa kaścid dharmo yas tathāgatena bhāṣitaḥ |",
 "s13.5": " bhagavān āha | tatkiṃ manyase subhūte yāvat trisāhasramahāsāhasre lokadhātau pṛthivīrajaḥ kaccit tad bahu bhavet |",
 "s13.6": " subhūtir āha | bahu bhagavan bahu sugata pṛthivīrajo bhavet |",
 "s13.7": " tatkasya hetoḥ | yat tad bhagavan pṛthivīrajas tathāgatena bhāṣitam a-rajas tad bhagavaṃs tathāgatena bhāṣitam | tenocyate pṛthivīraja iti | yo'py asau lokadhātus tathāgatena bhāṣito 'dhātuḥ sa tathāgatena bhāṣitaḥ |tenocyate lokadhātur iti |",
 "s13.8": " bhagavān āha | tatkiṃ manyase subhūte dvātriṃśan mahāpuruṣa-lakṣaṇais tathāgato 'rhan samyaksaṃbuddho draṣṭavyaḥ |",
 "s13.9": " subhūtir āha | no hīdaṃ bhagavan na dvātriṃśan-mahāpuruṣa-lakṣaṇais tathāgato 'rhan samyaksaṃbuddho draṣṭavyaḥ | tatkasya hetoḥ | yāni hi tāni bhagavan dvātriṃśan mahāpuruṣa-lakṣaṇāni tathāgatena bhāṣitāny a-lakṣaṇāni tāni bhagavaṃs tathāgatena bhāṣitāni | tenocyante dvātriṃśan-mahāpuruṣa-lakṣaṇānīti |",
 "s13.10": " bhagavān āha | yaś ca khalu punaḥ subhūte strī vā puruṣo vā dine dine gaṅgā-nadī-vālukā-samān ātma-bhāvān parityajet evaṃ parityajangaṅgā-nadī-vālukā-samān kalpāṃs tān ātma-bhāvān parityajet yaś ceto dharmaparyāyād antaśaś catuṣpādikām api gāthām udgṛhya parebhyo deśayet saṃprakāśayed ayam eva tato nidānaṃ bahutaraṃ puṇya-skandhaṃ prasunuyād aprameyam asaṃkhyeyam |",
 "s14.1": " atha khalv āyuṣmān subhūtir dharma-vegena-aśrūṇi prāmuñcat so 'śrūṇi pramṛjya bhagavantam etad avocat |",
 "s14.2": "āścaryaṃ bhagavan parama-aścaryaṃ sugata yāvad ayaṃ dharm-aparyāyas tathāgatena bhāṣito 'grayāna-saṃprasthitānāṃ sattvānām arthāya śreṣṭha-yāna-saṃprasthitānāṃ sattvānām-arthāya yato me bhagavañ jñānam utpannam | na mayā bhagavañ jātv evaṃrūpo dharmaparyāyaḥ śruta-pūrvaḥ |",
 "s14.3": "parameṇa te bhagavann āścaryeṇa samanvāgatā bodhisattvā bhaviṣyanti ya iha sūtre bhāṣyamāṇe śrutvā bhūta-saṃjñām utpādayiṣyanti | tatkasya hetoḥ | yā caiṣā bhagavan bhūta-saṃjñā saiva-abhūta-saṃjñā |tasmāt tathāgato bhāṣate bhūta-saṃjñā bhūta-saṃjñeti |",
 "s14.4": "na mama bhagavann āścaryaṃ yad aham imaṃ dharmaparyāyaṃ bhāṣyamāṇam avakalpayāmyadhimucye | ye 'pi te bhagavan sattvā bhaviṣyanty anāgate 'dhvani paścime kāle paścime samaye paścimāyāṃ pañca-śatyāṃ saddharma-vipralope vartamāne ya imaṃ bhagavan dharm-aparyāyam udgrahīṣyanti dhārayiṣyanti vācayiṣyanti paryavāpsyanti parebhyaś ca vistareṇa saṃprakāśayiṣyanti te parama-āścaryeṇa samanvāgatā bhaviṣyanti |",
 "s14.5": " api tu khalu punar bhagavan na teṣām ātmasaṃjñā pravartiṣyate na sattva-saṃjñā na jīva-saṃjñā na pudgala-saṃjñā pravartiṣyate nāpi teṣāṃ kācit saṃjñā nāsaṃjñā pravartate |",
 "s14.6": " tatkasya hetoḥ | yā sā bhagavann ātma-saṃjñā saiva-a-saṃjñā | yā sattva-saṃjñā jīva-saṃjñā pudgala-saṃjñā saivāsaṃjñā |",
 "s14.7": " tatkasya hetoḥ | sarva-saṃjñā-apagatā hi buddhā bhagavantaḥ | evam ukte bhagavān āyuṣmantaṃ subhūtim etad avocat |",
 "s14.8": " evam etat subhūte evam etat | parama-āścarya-samanvāgatās te sattvā bhaviṣyanti ya iha subhūte sūtre bhāṣyamāṇe nottrasiṣyanti na saṃtrasiṣyanti na saṃtrāsam āpatsyante |",
 "s14.9": " tatkasya hetoḥ | paramapāramiteyaṃ subhūte tathāgatena bhāṣitā yaduta-a-pāramitā | yāṃ ca subhūte tathāgataḥ parama-pāramitāṃ bhāṣate tām aparimāṇā api buddhā bhagavanto bhāṣante | tenocyate parama-pāramiteti |",
 "s14.10": "api tu khalu punaḥ subhūte yā tathāgatasya kṣānti-pāramitā saivāpāramitā |",
 "s14.11": "tatkasya hetoḥ | yadā me subhūte kaliṅgarājā-aṅga-pratyaṅga-māṃsānyacchaitsīt nāsīn-me tasmin samaya ātma-saṃjñā vā sattva-saṃjñā vā jīva-saṃjñā vā pudgala-saṃjñā vā nāpi me kācit saṃjñā vā asaṃjñā vā babhūva |",
 "s14.12": "tatkasya hetoḥ | sacen me subhūte tasmin samaya ātma-saṃjñā-abhaviṣyad vyāpāda-saṃjñā api me tasmin samaye'bhaviṣyat | sacet sattva-saṃjñā jīva-saṃjñā pudgala-saṃjñā-abhaviṣyad vyāpāda-saṃjñā api me tasmin samaye 'bhaviṣyat |",
 "s14.13": "tatkasya hetoḥ | abhijānāmy ahaṃ subhūte 'tīte 'dhvani pañca jāti-śatāni yad ahaṃ kṣāntivādī ṛṣir abhūvam | tatra api me nātma-saṃjñā babhūvana sattva-saṃjñā na jīva-saṃjñā na pudgala-saṃjñā babhūva |",
 "s14.14": "tasmāt tarhi subhūte bodhisattvena mahāsattvena sarva-saṃjñā vivarjayitvā anuttarāyāṃ samyaksaṃbodhau cittam utpādayitavyam | na rūpa-pratiṣṭhitaṃ cittam utpādayitavyaṃ na śabda-gandha-rasa-spraṣṭavya-dharma-pratiṣṭhitaṃ cittam utpādayitavyaṃ na dharma-pratiṣṭhitaṃ cittam utpādayitavyaṃ na adharma-pratiṣṭhitaṃ cittam  utpādayitavyaṃ na kvacit pratiṣṭhitaṃ cittam  utpādayitavyam |",
 "s14.15": "tatkasya hetoḥ | yat pratiṣṭhitaṃ tad eva apratiṣṭhitam | tasmād eva tathāgato bhāṣate apratiṣṭhitena bodhisattvena dānaṃ dātavyam | na rūpa-śabda-gandha-rasa-spraṣṭavya-dharma-pratiṣṭhitena dānaṃ dātavyam |",
 "s14.16": "api tu khalu punaḥ subhūte bodhisattvenaivaṃrūpo dānaparityāgaḥ kartavyaḥ sarva-sattvānām arthāya | ",
 "s14.17": "tatkasya hetoḥ | yā caiṣā subhūte sattva-saṃjñā saivāsaṃjñā | ya evaṃ te sarva-sattvās tathāgatena bhāṣitās ta evāsattvāḥ |",
 "s14.18": "tatkasya hetoḥ | bhūta-vādī subhūte tathāgataḥ satyavādī tathāvādyan anyathāvādī tathāgataḥ | na vitatha-vādī tathāgataḥ |",
 "s14.19": "api tu khalu punaḥ subhūte yas tathāgatena dharmo 'bhisaṃbuddho deśitonidhyāto na tatra satyaṃ na mṛśā |",
 "s14.20": "tadyathāpi nāma subhūte puruṣo 'ndhakāra-praviṣṭo na kiṃcid api paśyetevaṃ vastupatito bodhisattvo draṣṭavyo yo vastupatito dānaṃ parityajati |",
 "s14.21": "tadyathāpi nāma subhūte cakṣuṣmān puruṣaḥ prabhātāyāṃ rātrau sūrye'bhyudgate nānāvidhāni rūpaṇi paśyet evam avastupatito bodhisattvodraṣṭavyo yo 'vastupatito dānaṃ parityajati |",
 "s14.22": "api tu khalu punaḥ subhūte ye kulaputrā vā kuladuhitaro vemaṃ dharmaparyāyam udgrahīṣyanti dhārayiṣyanti vācayiṣyanti paryavāpsyanti parebhyaś ca vistareṇa saṃprakāśayiṣyanti jñātās te subhūte tathāgatena buddha-jñānena dṛṣṭās te subhūte tathāgatena buddha-cakṣuṣā buddhās te tathāgatena | sarve te subhūte sattvāaprameyam asaṃkhyeyaṃ puṇya-skandhaṃ prasaviṣyanti pratigrahīṣyanti ||14||",
 "s15.1": "yaś ca khalu punaḥ subhūte strī vā puruṣo vā pūrv-āhṇa-kāla-samayegaṅgā-nadī-vālukā-samān ātmabhāvān parityajed | evaṃ madhyā-āhṇa-kāla-samaye gaṅgā-nadī-vālukā-samān ātmabhāvānparityajet | sāya-āhṇa-kāla-samaye gaṅgā-nadī-vālukā-samān ātmabhāvān parityajet anena paryāyeṇa bahūni kalpa-koṭi-niyuta-śatasahasrāṇy ātmabhāvān parityajet |",
 "s15.2": " yaś cemaṃ dharmaparyāyaṃ śrutvā na pratikṣipet ayam eva tato nidānaṃ bahutaraṃ puṇya-skandhaṃ prasunuyād aprameyam asaṃkhyeyam | kaḥ punar vādo yo likhitvodgṛhṇīyād dhārayed vācayet paryavāpnuyāt parebhyaś ca vistareṇa saṃprakāśayet |",
 "s15.3": "api tu khalu punaḥ subhūte 'cintyo 'tulyo 'yaṃ dharmaparyāyaḥ |",
 "s15.4": "ayaṃ ca subhūte dharmaparyāyas tathāgatena bhāṣito'gra-yāna-saṃprasthitānāṃ sattvānām arthāyaśreṣṭha-yāna-saṃprasthitānāṃ sattvānām arthāya |",
 "s15.5": "ya imaṃ dharm-aparyāyam udgrahīṣyanti dhārayiṣyanti vācayiṣyanti paryavāpsyanti parebhyaśca vistareṇa saṃprakāśayiṣyanti jñātās te subhūte tathāgatena buddha-jñānena dṛṣṭās te subhūte tathāgatenabuddha-cakṣuṣā buddhās te tathāgatena |",
 "s15.6": "sarve te subhūte sattvā aprameyeṇa puṇya-skandhena samanvāgatā bhaviṣyanti | acintyena atulyena amāpyena aparimāṇena puṇya-skandhena samanvāgatā bhaviṣyanti | sarve te subhūte sattvāḥ samāṃśena bodhiṃ dhārayiṣyanti |",
 "s15.7": "tatkasya hetoḥ | na hi śakyaṃ subhūte 'yaṃ dharmaparyāyo hīna-adhimuktikaiḥ sattvaiḥ śrotuṃ na ātma-dṛṣṭikair na sattvadṛṣṭikair na jīva-dṛṣṭikair na pudgala-dṛṣṭikaiḥ | na abodhisattva-pratijñaiḥ sattvaiḥ śakyam ayaṃ dharmaparyāyaḥ śrotuṃ vodgrahītuṃ vā dhārayituṃ vā vācayituṃ vā paryavāptuṃ vā | nedaṃ sthānaṃ vidyate | ",
 "s15.8": "api tu khalu punaḥ subhūte yatra pṛthivīpradeśa idaṃ sūtraṃ prakāśayiṣyate pūjanīyaḥ sa pṛthivīpradeśo bhaviṣyati sadeva-mānuṣa-asurasya lokasya vandanīyaḥ pradakṣiṇīyaś ca sa pṛthivīpradeśo bhaviṣyati caityabhūtaḥ sa pṛthivīpradeśo bhaviṣyati ||15||",
 "s16.1": "api tu ye te subhūte kulaputrā vā kuladuhitaro vemān evaṃrūpān sūtrāntān udgrahīṣyanti dhārayiṣyanti vācayiṣyanti paryavāpsyanti yoniśaśca manasikariṣyanti parebhyaś ca vistareṇa saṃprakāśayiṣyanti teparibhūtā bhaviṣyanti suparibhūtāś ca bhaviṣyanti |",
 "s16.2": "tatkasya hetoḥ | yāni ca teṣāṃ subhūte sattvānāṃ paurva-janmikāny-aśubhāni karmāṇi kṛtāny apāya-saṃvartanīyāni dṛṣṭa eva dharme paribhūtatayā tāni paurvajanmikāny aśubhāni karmāṇi kṣapayiṣyanti buddhabodhiṃ ca anuprāpsyanti | ",
 "s16.3": "tat kasya hetoḥ | abhijānāmy ahaṃ subhūte atīte 'dhvany asaṃkhyeyaiḥ kalpair asaṃkhyeyatarair dīpaṃkarasya tathāgatasya arhataḥ samyaksaṃbuddhasya pareṇa paratareṇa catur-aśīti-buddha-koṭi-niyuta-śatasahasrāṇy abhūvan ye mayā ārāgitā ārāgya na virāgitāḥ | yac ca mayā subhūte te buddhā bhagavanta ārāgitā ārāgya na virāgitā",
 "s16.4": " yac ca paścime kāle paścime samaye paścimāyāṃ pañcaśatyāṃ saddharma-vipralopa-kāle vartamāne imān evaṃrūpān sūtrāntān udgrahīṣyanti dhārayiṣyanti vācayiṣyanti paryavāpsyanti parebhyaś ca vistareṇa saṃprakāśayiṣyanty",
 "s16.5": " asya khalu punaḥ subhūte puṇyaskandhasya antikād asau paurvakaḥ puṇya-skandhaḥ śatatamīm api kalāṃ nopaiti sahasratamīm api śatasahasratamīm api koṭitamīm api koṭi-śatatamīm api koṭi-śatasahasratamīm api koṭi-niyuta-śatasahasratamīm api saṃkhyām api kalāmapi gaṇanām apyupamām apy upaniṣadam api yāvad aupamyam api na kṣamate |",
 "s16.6": "sacet punaḥ subhūte teṣāṃ kulaputrāṇāṃ kuladuhitfṇāṃ vā ahaṃ puṇyaskandhaṃ bhāṣeyaṃ yāvat te kulaputrā vā kuladuhitaro vā tasmin samaye puṇyaskandhaṃ prasaviṣyanti pratigrahīṣyanty unmādaṃ sattvā anuprāpnuyuś citta-vikṣepaṃ vā gaccheyuḥ |",
 "s16.7": "api tu khalu punaḥ subhūte 'cintyo 'tulyo 'yaṃ dharma-paryāyas tathāgatena bhāṣitaḥ | asya acintya eva vipākaḥ pratikāṅkṣitavyaḥ ||16||",
 "s17.1": "atha khalvāyuṣmān subhūtir bhagavantam etad avocat | kathaṃ bhagavan bodhisattva-yāna-saṃprasthitena sthātavyaṃ kathaṃ pratipattavyaṃ kathaṃ cittaṃ pragrahītavyam | ",
 "s17.2": "bhagavān āha | iha subhūte bodhisattva-yāna-saṃprasthitena evaṃ cittam utpādayitavyaṃ sarve sattvā mayā anupadhiśeṣe nirvāṇadhātau parinirvāpayitavyāḥ | evaṃ ca sattvān parinirvāpya na kaścit sattvaḥ parinirvāpito bhavati |",
 "s17.3": "tatkasya hetoḥ | sacet subhūte bodhisattvasya sattva-saṃjñā pravarteta na sa bodhisattva iti vaktavyaḥ | jīvasaṃjñā vā yāvat pudgalasaṃjñā vā pravarteta na sa bodhisattva iti vaktavyaḥ |",
 "s17.4": "tat kasya hetoḥ | nāsti subhūte sa kaścid dharmo yo bodhisattva-yāna-saṃprasthito nāma |",
 "s17.5": "tat kiṃ manyase subhūte asti sa kaścid dharmo yas tathāgatena dīpaṃkarasya tathāgatasya antikād anuttarāṃ samyaksaṃbodhim abhisaṃbuddhaḥ |",
 "s17.6": "evam ukte āyuṣmān subhūtir bhagavantam etad avocat |yathā ahaṃ bhagavan bhagavato bhāṣitasya artham ājānāmi nāsti sabhagavan kaścid dharmo yas tathāgatena dīpaṃkarasya tathāgatasya arhataḥ samyaksaṃbuddhasya antikād anuttarāṃ samyaksaṃbodhim abhisaṃbuddhaḥ |",
 "s17.7": "evam ukte bhagavān āyuṣmantaṃ subhūtim etad avocat | evam etat subhūte evam etan nāsti subhūte sa kaścid dharmo yas tathāgatena dīpaṃkarasya tathāgatasya arhataḥ samyaksaṃbuddhasya antikād anuttarāṃ samyaksaṃbodhim abhisaṃbuddhaḥ |",
 "s17.8": "sacet punaḥ subhūte kaścid dharmas tathāgatena abhisaṃbuddho'bhaviṣyanna māṃ dīpaṃkaras tathāgato vyākariṣyad bhaviṣyasi tvaṃ māṇava-anāgate 'dhvani śākyamunir nāma tathāgato 'rhan samyaksaṃbuddha iti |",
 "s17.9": "yasmāt tarhi subhūte tathāgatena arhatā samyaksaṃbuddhena nāsti sa kaścid dharmo yo 'nuttarāṃ samyaksaṃbodhim abhisaṃbuddhas tasmād ahaṃ dīpaṃkareṇa tathāgatena vyākṛto bhaviṣyasi tvaṃ māṇava-anāgate'dhvani śākyamunir nāma tathāgato 'rhan samyaksaṃbuddhaḥ |",
 "s17.10": "tatkasya hetoḥ | tathāgata iti subhūte | bhūta-tathatāyā etad adhivacanam |tathāgata iti subhūte | anutpāda dharmatāyā etad adhivacanam | tathāgataiti subhūte | dharmo cchedasya etad adhivacanam | tathāgata iti subhūte |atyanta anutpannasya etad adhivacanam | tat kasya hetoḥ | eṣa subhūte'nutpādo yaḥ paramārthaḥ |",
 "s17.11": " yaḥ kaścit subhūte evaṃ vadet tathāgatena arhatā samyak-saṃbuddhena anuttarā samyaksaṃbodhir abhisaṃbuddheti sa vitathaṃ vaded abhyācakṣīta māṃ sa subhūte asatodgṛhītena |tat kasya hetoḥ |nāsti subhūte sa kaścid dharmo yas tathāgatena anuttarāṃ samyaksaṃbodhim abhisaṃbuddhaḥ |",
 "s17.12": "yaś ca subhūte tathāgatena dharmo 'bhisaṃbuddho deśito vā tatra nan satyaṃ na mṛṣā | tasmāttathāgato bhāṣate sarvadharmā buddhadharmā iti|",
 "s17.13": "tat kasya hetoḥ | sarva-dharmā iti subhūte a-dharmās tathāgatena bhāṣitāḥ | tasmād ucyante sarvadharmā buddha-dharmā iti |",
 "s17.14": "tadyathāpi nāma subhūte puruṣo bhaved upetakāyo mahākāyaḥ |",
 "s17.15": "āyuṣmān subhūtir āha | yo 'sau bhagavaṃs tathāgatena puruṣo bhāṣita upetakāyo mahākāya ity akāyaḥ sa bhagavaṃs tathāgatena bhāṣitaḥ |tenocyata upetakāyo mahākāya iti |",
 "s17.16": "bhagavān āha | evam etat subhūte | yo bodhisattva evaṃ vaded ahaṃ sattvān parinirvāpayiṣyāmīti na sa bodhisattva iti vaktavyaḥ |",
 "s17.17": "tatkasya hetoḥ | asti subhūte sa kaścid dharmo yo bodhisattvo nāma |",
 "s17.18": "subhūtir āha | no hīdaṃ bhagavan nāsti sa kaścid dharmo yo bodhisattvonāma |",
 "s17.19": "bhagavān āha | sattvāḥ sattvā iti subhūte asattvās te tathāgatena bhāṣitās tenocyate sattvā iti |",
 "s17.20": "tasmāt tathāgato bhāṣate nirātmānaḥ sarvadharmā nirjīvā niṣpoṣāniṣpudgalāḥ sarvadharmā iti |",
 "s17.21": "yaḥ subhūte bodhisattva evaṃ vaded ahaṃ kṣetra-vyūhān niṣpādayiṣyāmīti sa vitathaṃ vadet | so 'pi tathaiva vaktavyaḥ|",
 "s17.22": "tatkasya hetoḥ | kṣetra-vyūhāḥ kṣetra-vyūhā iti subhūte 'vyūhās te tathāgatena bhāṣitāḥ | tenocyante kṣetra-vyūhā iti |",
 "s17.23": "yaḥ subhūte bodhisattvo nirātmāno dharmā nirātmāno dharmā ity adhimucyate sa tathāgatena arhatā samyaksaṃbuddhena bodhisattvo mahāsattva ity ākhyātaḥ ||17||",
 "s18.1": "bhagavān āha | tatkiṃ manyase subhūte saṃvidyate tathāgatasya māṃsa-cakṣuḥ |",
 "s18.2": "subhūtir āha | evam etad bhagavan saṃvidyate tathāgatasya māṃsa-cakṣuḥ|",
 "s18.3": "bhagavān āha | tatkiṃ manyase subhūte saṃvidyate tathāgatasya divyaṃ cakṣuḥ |",
 "s18.4": "subhūtir āha | evam etad bhagavan saṃvidyate tathāgatasya divyaṃ cakṣuḥ|",
 "s18.5": "bhagavān āha | tatkiṃ manyase subhūte saṃvidyate tathāgatasyaprajñā-cakṣuḥ |",
 "s18.6": "subhūtir āha | evam etad bhagavan saṃvidyate tathāgatasya prajñā-cakṣuḥ|",
 "s18.7": "bhagavān āha | tatkiṃ manyase subhūte saṃvidyate tathāgatasya dharma-cakṣuḥ |",
 "s18.8": "subhūtir āha | evam etad bhagavan saṃvidyate tathāgatasya dharma-cakṣuḥ |",
 "s18.9": "bhagavānāha | tatkiṃ manyase subhūte saṃvidyate tathāgatasya buddha-cakṣuḥ | ",
 "s18.10": "subhūtir āha | evam etad bhagavan saṃvidyate tathāgatasya buddha-cakṣuḥ |",
 "s18.11": "bhagavān āha | tatkiṃ manyase subhūte yāvatyo gaṅgāyāṃ mahā-nadyāṃ vālukā api nu tā vālukās tathāgatena bhāṣitāḥ |",
 "s18.12": "subhūtir āha | evam etad bhagavan evam etat sugata bhāṣitās tathāgatena vālukāḥ |",
 "s18.13": "bhagavān āha | tatkiṃ manyase subhūte yāvatyo gaṅgāyāṃ mahānadyāṃ vālukās tāvatya eva gaṅgānadyo bhaveyuḥ tāsu yā vālukās tāvantaś ca lokadhātavo bhaveyuḥ kaccid bahavas te lokadhātavo bhaveyuḥ |",
 "s18.14": "subhūtir āha | evam etad bhagavann evam etat sugata bahavas te lokadhātavo bhaveyuḥ |",
 "s18.15": "bhagavān āha | yāvantaḥ subhūte teṣu lokadhāteṣu sattvās teṣām ahaṃ nānābhāvāṃ cittadhārāṃ prajānāmi |",
 "s18.16": "tatkasya hetoḥ | citta-dhārā citta-dhāreti subhūte adhāraiṣā tathāgatena bhāṣitā | tenocyate citta-dhāreti |",
 "s18.17": "tatkasya hetoḥ | atītaṃ subhūte cittaṃ nopalabhyate | anāgataṃ cittaṃ nopalabhyate | pratyutpannaṃ cittaṃ nopalabhyate ||18||",
 "s19.1": "tatkiṃ manyase subhūte yaḥ kaścit kulaputro vā kuladuhitā vevaṃ trisāhasramahāsāhasraṃ lokadhātuṃ sapta-ratna-paripūrṇaṃ kṛtvā tathāgatebhyo 'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyād api nu sa kulaputro vā kuladuhitā vā tato nidānaṃ bahu puṇya-skandhaṃ prasunuyāt |",
 "s19.2": "subhūtir āha | bahu bhagavan bahu sugata |",
 "s19.3": " bhagavān āha | evam etat subhūte evam etad bahu sa kulaputro vā kuladuhitā vā tato nidānaṃ bahu puṇya-skandhaṃ prasunuyād |",
 "s19.4": "tatkasya hetoḥ | puṇya-skandhaḥ puṇya-skandha iti subhūte a-skandhaḥ sa tathāgatena bhāṣitaḥ | tenocyate puṇya-skandha iti | sacet punaḥ subhūte puṇya-skandho 'bhaviṣyan na tathāgato 'bhāṣiṣyat puṇya-skandhaḥ puṇya-skandha iti ||19||",
 "s20.1": "tat kiṃ manyase subhūte rūpa-kāya-pariniṣpattyā tathāgato draṣṭavyaḥ |",
 "s20.2": "subhūtir āha | no hīdaṃ bhagavan na rūpa-kāya-pariniṣpattyā tathāgato draṣṭavyaḥ |",
 "s20.3": "tatkasya hetoḥ | rūpa-kāya-pariniṣpattī rūpakāya-pariniṣpattir iti bhagavan apariniṣpattir eṣā tathāgatena bhāṣitā | tenocyate rūpakāya-pariniṣpattir iti|",
 "s20.4": "bhagavān āha | tatkiṃ manyase subhūte lakṣaṇa-saṃpadā tathāgato draṣṭavyaḥ |",
 "s20.5": "subhūtir āha | no hīdaṃ bhagavan na lakṣaṇa-saṃpadā tathāgato draṣṭavyaḥ |",
 "s20.6": "tatkasya hetoḥ | yaiṣā bhagavaṃl lakṣaṇa-saṃpat tathāgatena bhāṣitā alakṣana-saṃpad eṣā tathāgatena bhāṣitā | tenocyate lakṣaṇa-saṃpad iti||20||",
 "s21.1": "bhagavān āha | tatkiṃ manyase subhūte api nu tathāgatasyaivaṃ bhavati mayā dharmo deśita iti |",
 "s21.2": "subhūtir āha | no hīdaṃ bhagavan tathāgatasyaivaṃ bhavati mayā dharmo deśita iti |",
 "s21.3": "bhagavān āha | yaḥ subhūte evaṃ vadet tathāgatena dharmo deśita iti sa vitathaṃ vaded abhyācakṣīta māṃ sa subhūte 'satodgṛhītena |",
 "s21.4": "tatkasya hetoḥ | dharma-deśanā dharma-deśaneti subhūte nāsti sa kaścid dharmo yo dharma-deśanā nāmopalabhyate |",
 "s21.5": "evam ukta āyuṣmān subhūtir bhagavantam etad avocat | asti bhagavan kecit sattvā bhaviṣyanty anāgate 'dhvani paścime kāle paścime samaye paścimāyāṃ pañcaśatyāṃ saddharma-vipralope vartamāne ya imān evaṃrūpān dharmāñ śrutvā abhiśraddhāsyanti |",
 "s21.6": "bhagavān āha | na te subhūte sattvā nāsattvāḥ |",
 "s21.7": "tatkasya hetoḥ | sattvāḥ sattvā iti subhūte sarve te subhūte asattvās tathāgatena bhāṣitāḥ | tenocyante sattvā iti ||21||",
 "s22.1": "tatkiṃ manyase subhūte api nv asti sa kaścid dharmo yas tathāgatena anuttarāṃ samyaksaṃbodhim abhisaṃbuddhaḥ |",
 "s22.2": " āyuṣmān subhūtir āha | no hīdaṃ bhagavan nāsti sa bhagavan kaścid dharmo yas tathāgatena anuttarāṃ samyaksaṃbodhim abhisaṃbuddhaḥ |",
 "s22.3": "bhagavān āha | evam etat subhūte evam etad aṇur api tatra dharmo na saṃvidyate nopalabhyate | tenocyate 'nuttarā samyaksaṃbodhir iti ||22||",
 "s23.1": "api tu khalu punaḥ subhūte samaḥ sa dharmo na tatra kaścid viṣamaḥ |tenocyate 'nuttarā samyaksaṃbodhir iti |",
 "s23.2": "nirātmatvena niḥsattvatvena nirjīvatvena niṣpudgalatvena samā sānuttarā samyaksaṃbodhiḥ sarvaiḥ kuśalair dharmair abhisaṃbudhyate |",
 "s23.3": "tat kasya hetoḥ | kuśalā dharmāḥ kuśalā dharmā iti subhūte adharmāś caiva te tathāgatena bhāṣitāḥ | tenocyante kuśalā dharmā iti ||23||",
 "s24.1": "yaśca khalu punaḥ subhūte strī vā puruṣo vā yāvantas trisāhasramahāsāhasre lokadhātau sumeravaḥ parvata-rājānas tāvato rāśīn saptānāṃ ratnānām abhisaṃhṛtya tathāgatebhyo 'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyāt|",
 "s24.2": "yaś ca kulaputro vā kuladuhitā vetaḥ prajñāpāramitāyā dharma-paryāyād antaśaś catuṣpādikām api gāthām udgṛhya parebhyo deśayed asya subhūte puṇyaskandhasya asau paurvakaḥ puṇya-skandhaḥ śatatamīm api kalāṃ nopaiti yāvad upaniṣadam api na kṣamate ||24||",
 "s25.1": "tatkiṃ manyase subhūte api nu tathāgatasyaivaṃ bhavati mayā sattvāḥ parimocitā iti | na khalu punaḥ subhūta evaṃ draṣṭavyam |",
 "s25.2": "tatkasya hetoḥ | nāsti subhūte kaścit sattvo yas tathāgatena parimocitaḥ |yadi punaḥ subhūte kaścit sattvo 'bhaviṣyad yas tathāgatena parimocitaḥ syāt sa eva tathāgatasya ātmagrāho 'bhaviṣyat sattva-grāho jīva-grāhaḥ pudgala-grāho 'bhaviṣyat |",
 "s25.3": "ātma-grāha iti subhūte agrāha eṣa tathāgatena bhāṣitaḥ | sa ca bālapṛthagjanair udgṛhītaḥ |",
 "s25.4": "bālapṛthag-janā iti subhūte a-janā eva te tathāgatena bhāṣitāḥ |tenocyante bālapṛthagjanā iti ||25||",
 "s26.1": "tatkiṃ manyase subhūte lakṣaṇa-saṃpadā tathāgato draṣṭavyaḥ |",
 "s26.2": "subhūtir āha | no hīdaṃ bhagavan | yathā ahaṃ bhagavato bhāṣitasya artham ājānāmi na lakṣaṇa-saṃpadā tathāgato draṣṭavyaḥ |",
 "s26.3": "bhagavān āha | sādhu sādhu subhūte evam etat subhūte evam etad yathā vadasi | na lakṣaṇa-saṃpadā tathāgato draṣṭavyaḥ | tatkasya hetoḥ | sacet punaḥ subhūte lakṣaṇa-saṃpadā tathāgato draṣṭavyo 'bhaviṣyad rājā-api cakravartī tathāgato 'bhaviṣyat | tasmānna lakṣaṇasaṃpadā tathāgato draṣṭavyaḥ |",
 "s26.4": "āyuṣmān subhūtir bhagavantametadavocat | yathāhaṃ bhagavato bhāṣitasya artham ājānāmi na lakṣaṇa-saṃpadā tathāgato draṣṭavyaḥ |",
 "s26.5": "atha khalu bhagavāṃs tasyāṃ velāyām ime gāthe abhāṣata |",
 "s26.6": " ye māṃ rūpeṇa cādrākṣur ye māṃ ghoṣeṇa cānvaguḥ |mithyā-prahāṇa-prasṛtā na māṃ drakṣyanti te janāḥ ||1||",
 "s26.7": "dharmato buddho draṣṭavyo dharmakāyā hi nāyakāḥ |dharmatā ca na vijñeyā na sā śakyā vijānitum ||2||",
 "s27.1": "tatkiṃ manyase subhūte lakṣaṇa-saṃpadā tathāgatena anuttarā samyaksaṃbodhir abhisaṃbuddhā |",
 "s27.2": "na khalu punas te subhūte evaṃ draṣṭavyam | tatkasya hetoḥ | na hi subhūtelakṣaṇa-saṃpadā tathāgatena anuttarā samyaksaṃbodhir abhisaṃbuddhā syāt |",
 "s27.3": " na khalu punas te subhūte kaścid evaṃ vadet bodhisattva-yāna-saṁprasthitaiḥ kasyacid dharmasya vināśaḥ prajñapta ucchedo veti na khalu punas te subhūte evaṃ draṣṭavyam |",
 "s27.4": " tatkasya hetoḥ |na bodhisattva-yāna-saṃprasthitaiḥ kasyacid dharmasya vināśaḥ prajñapto nocchedaḥ | ",
 "s28.1": " yaś ca khalu punaḥ subhūte kulaputro vā kuladuhitā vā gavgānadī-vālukā-samāṃl lokadhātūn sapta-ratna-paripūrṇāṃ kṛtvā tathāgatebhyo 'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyād",
 "s28.2": " yaś ca bodhisattvo nirātmakeṣv anutpattikeṣu dharmeṣu kṣāntiṃp ratilabhate ayam eva tato nidānaṃ bahutaraṃ puṇyaskandhaṃ prasaved aprameyam asaṃkhyeyam |",
 "s28.3": "na khalu punaḥ subhūte bodhisattvena mahāsattvena puṇyaskandhaḥ parigrahītavyaḥ |",
 "s28.4": "āyuṣmān subhūtir āha | nanu bhagavan bodhisattvena puṇyaskandhaḥ parigrahītavyaḥ |",
 "s28.5": " bhagavān āha | parigrahītavyaḥ subhūte nodgrahītavyaḥ | tenocyate parigrahītavya iti ||28||",
 "s29.1": "api tu khalu punaḥ subhūte yaḥ kaścid evaṃ vadet tathāgato gacchati vā āgacchati vā tiṣṭhati vā niṣīdati vā śayyāṃ vā kalpayati na me subhūte sa bhāṣitasya artham ājānāti |",
 "s29.2": "tatkasya hetoḥ | tathāgata iti subhūta ucyate na kvacidgato na kutaścid āgataḥ | tenocyate tathāgato 'rhan samyaksaṃbuddha iti ||29||",
 "s30.1": "yaś ca khalu punaḥ subhūte kulaputro vā kuladuhitā vā yāvantas trisāhasra-mahāsāhasre lokadhātau pṛthivī-rajāṃsi tāvatāṃ lokadhātūnām evaṃrūpaṃ maṣiṃ kuryāt yāvad evam asaṃkhyeyena vīryeṇa tadyathāpi nāma paramāṇu-saṃcayaḥ tat kiṃ manyase subhūte api nu bahuḥ sa paramāṇu-saṃcayo bhavet |",
 "s30.2": "subhūtir āha | evam etad bhagavann evam etat sugata | bahuḥ sa paramāṇu-saṃcayo bhavet |",
 "s30.3": "tatkasya hetoḥ | saced bhagavan bahuḥ paramāṇu-saṃcayo 'bhaviṣyat na bhagavān avakṣyat paramāṇu-saṃcaya iti |",
 "s30.4": "tatkasya hetoḥ | yo 'sau bhagavan paramāṇu-saṃcayas tathāgatena bhāṣito'samcayaḥ sa tathāgatena bhāṣitaḥ | tenocyate paramāṇu-saṃcaya iti |",
 "s30.5": "yaś ca tathāgatena bhāṣitas trisāhasra-mahāsāhasro lokadhātur ity adhātuḥ sa tathāgatena bhāṣitaḥ | tenocyate trisāhasra-mahāsāhasro lokadhātur iti |",
 "s30.6": "tatkasya hetoḥ | saced bhagavan lokadhātur abhaviṣyat sa eva piṇḍagrāho'bhaviṣyat yaś caiva piṇḍagrāhas tathāgatena bhāṣito 'grāhaḥ sa tathāgatena bhāṣitaḥ | tenocyate piṇḍagrāha iti |",
 "s30.7": "bhagavān āha | piṇḍagrāhaś caiva subhūte 'vyavahāro 'nabhilapyaḥ | na sa dharmo na adharmaḥ | sa ca bālapṛthagjanair udgṛhītaḥ |",
 "s31.1": "tatkasya hetoḥ | yo hi kaścit subhūta evaṃ vaded ātmadṛṣṭis tathāgatena bhāṣitā sattvadṛṣṭir jīvadṛṣṭiḥ pudgaladṛṣṭis tathāgatena bhāṣitā api nu sa subhūte samyagvadamāno vadet |",
 "s31.2": "subhūtir āha | no hīdaṃ bhagavan no hīdaṃ sugata na samyagvadamāno vadet |",
 "s31.3": "tatkasya hetoḥ | yā sā bhagavann ātmadṛṣṭis tathāgatena bhāṣitā adṛṣṭiḥ sā tathāgatena bhāṣitā | tenocyata ātmadṛṣṭir iti |",
 "s31.4": "bhagavān āha | evaṃ hi subhūte bodhisattva-yāna-saṃprasthitena sarva-dharmā jñātavyā draṣṭavyā adhimoktavyāḥ | tathā ca jñātavyādraṣṭavyā adhimoktavyā yathā na dharma-saṃjñā pratyupasthāhe| yathā na dharma-saṃjñā-āpi pratyupatiṣṭhet.",
 "s31.5": "tatkasya hetoḥ | dharma-saṃjñā dharmasaṃjñeti subhūte asaṃjñaiṣā tathāgatena bhāṣitā | tenocyate dharmasaṃjñeti ||31||",
 "s32.1": "yaśca khalu punaḥ subhūte bodhisattvo mahāsattvo 'prameyān asaṃkhyeyāṃllokadhātūn saptaratna-paripūrṇaṃ kṛtvā tathāgatebhyo'rhadbhyaḥ samyaksaṃbuddhebhyo dānaṃ dadyād",
 "s32.2": "yaś ca kulaputro vā kuladuhitā vetaḥ prajñāpāramitāyā dharmaparyāyād antaśaś catuṣpādikām api gāthām udgṛhya dhārayed deśayed vācayet paryavāpnuyāt parebhyaś ca vistareṇa saṃprakāśayed ayam eva tato nidānaṃ bahutaraṃ puṇyaskandhaṃ prasunuyād aprameyam asaṃkhyeyam |",
 "s32.3": "kathaṃ ca saṃprakāśayet | yathā na prakāśayet |tenocyate saṃprakāśayed iti |",
 "s32.4": "tārakā timiraṃ dīpo māyā-avaśyāya budbudaṃ |svapnaṃ ca vidyud abhraṃ ca evaṃ draṣṭavyaṃ saṃskṛtaṃ ||",
 "s32.5": "idam avocad bhagavān āttamanāḥ | sthavira subhūtis te ca bhikṣu-bhikṣuṇy-upāsakopāsikās te ca bodhisattvāḥ sadeva-mānuṣa-asura-gandharvaś ca loko bhagavato bhāṣitam abhyanandann iti |",
 "s32.6": "ārya-vajracchedikā bhagavatī prajñāpāramitā samāptā ||",
 "t0.0": "༄༅། །འཕགས་པ་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་རྡོ་རྗེ་གཅོད་པ་ཞེས་བྱ་བ་བཞུགས་སོ།།",
 "t1.1": " འདི་སྐད་བདག་གིས་ཐོས་པ་དུས་གཅིག་ན།",
 "t1.2": "བཅོམ་ལྡན་འདས་མཉན་ཡོད་ན་རྒྱལ་བུ་རྒྱལ་བྱེད་ཀྱི་ཚལ་མགོན་མེད་ཟས་སྦྱིན་གྱི་ཀུན་དགའ་ར་བ་ན། དགེ་སློང་སྟོང་ཉིས་བརྒྱ་ལྔ་བཅུའི་དགེ་སློང་གི་དགེ་འདུན་ཆེན་པོ་དང༌། བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་རབ་ཏུ་མང་པོ་དང་ཐབས་གཅིག་ཏུ་བཞུགས་སོ། །",
 "t1.3": " དེ་ནས་བཅོམ་ལྡན་འདས་སྔ་དྲོའ ི་དུས་ཀྱི་ཚĲ། ཤམ་ཐབས་དང་ཆོས་གོས་སྐུ་ལ་གསོལ་ཏེ། ལྷུང་བཟེད་བསྣམས་ནས་མཉན་ཡོད་ཀྱི་གྲོང་ཁྱེར་ཆེན་པོར་བསོད་སྙོམས་ཀྱི་ཕྱིར་ཞུགས་སོ། །",
 "t1.4": " དེ་ནས་བཅོམ་ལྡན་འདས་མཉན་ཡོད་ཀྱི་གྲོང་ཁྱེར་ཆེན་པོར་བསོད་སྙོམས་ཀྱི་ཕྱིར་གཤེགས་ནས་བསོད་སྙོམས་ཀྱི་ཞལ་ཟས་མཇུག་ཏུ་གསོལ་ཏེ། ཟས་ཀྱི་བྱ་བ་མཛད་ནས། ཟས་ཕྱི་མའི་བསོད་སྙོམས་སྤངས་པས།ལྷུང་བཟེད་དང་ཆོས་གོས་བཞག་ནས།",
 "t1.5": "དེ་ནས་དགེ་སློང་མང་པོས་བཅོམ་ལྡན་འདས་ག་ལ་བ་དེར་དོང་སྟེ་ལྷགས་ནས། བཅོམ་ལྡན་འདས་ཀྱི་ཞབས་ལ་མགོ་བོས་ཕྱག་འཚལ་ཏེ་ལན་གསུམ་བསྐོར་བ་བྱས་ནས་ཕྱོགས་གཅིག་ཏུ་འཁོད་དོ། །",
 "t2.1": " ཡང་དེའི་ཚĲ་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་འཁོར་དེ་ཉིད་དུ་འདུས་པར་གྱུར་ཏེ་འདུག་གོ།།",
 "t2.2": "དེ་ནས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་སྟན་ལས་ལངས་ཏེ་བླ་གོས་ཕྲག་པ་གཅིག་ཏུ་གཟར་ནས་པུས་མོ་གཡས་པའི་ལྷ་ང་ས་ལ་བཙུགས་ཏེ། བཅོམ་ལྡན་འདས་ག་ལ་བ་དེར་ལོགས་སུ་ཐལ་མོ་སྦྱར་བ་བཏུད་ནས། བཅོམ་ལྡན་འདས་ལ་འདི་སྐད་ཅེས་གསོལ་ཏོ། །",
 "t2.3": "བཅོམ་ལྡན་འདས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཀྱིས་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་རྣམས་ལ་ཕན་གདགས་པའི་དམ་པ་ཇི་སྙེད་པས་ཕན་གཏགས་པ་དང༌།དེ་བཞིན་གཤེགས་པས་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་རྣམས་ལ་ཡོངས་སུ་གཏད་པའི་དམ་པ་ཇི་སྙེད་པས་ཡོངས་སུ་གཏད་པ་ནི། བཅོམ་ལྡན་འདས་ངོ་མཚར་ལགས་སོ། ། བདེ་བར་གཤེགས་པ་ངོ་མཚར་ལགས་སོ། ། 14",
 "t2.4": "བཅོམ་ལྡན་འདས་བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་བར་ཞུགས་པས་ཇི་ལྟར་གནས་པར་བགྱི། ཇི་ལྟར་བསྒྲུབ་པར་བགྱི། ཇི་ལྟར་སེམས་རབ་ཏུ་བཟུང་བར་བགྱི།",
 "t2.5": "དེ་སྐད་ཅེས་གསོལ་བ་དང༌། བཅོམ་ལྡན་འདས་ཀྱིས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། ། རབ་འབྱོར་ལེགས་སོ་ལེགས་སོ། ། རབ་འབྱོར་དེ་དེ་བཞིན་ནོ། ། དེ་དེ་བཞིན་ཏེ།",
 "t2.6": "དེ་བཞིན་གཤེགས་པས་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་རྣམས་ལ་ཕན་གདགས་པའི་དམ་པས་ཕན་གཏགས་སོ། ། དེ་བཞིན་གཤེགས་པས་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་རྣམས་ལ་ཡོངས་སུ་གཏད་བའི་དམ་པས་ཡོངས་སུ་གཏད་དོ། །",
 "t2.7": "རབ་འབྱོར་དེའི་ཕྱིར་ཉོན་ལ་ལེགས་པར་རབ་ཏུ་ཡིད་ལ་ཟུངས་ཤིག་དང༌། བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་བཞུགས་པས་ཇི་ལྟར་གནས་པར་བྱ་བ་དང༌། ཇི་ལྟར་བསྒྲུབ་པར་བྱ་བ་དང༌། ཇི་ལྟར་སེམས་རབ་ཏུ་བཟུང་བར་བྱ་བ་ངས་ཁྱོད་ལ་བཤད་དོ། །",
 "t2.8": "བཅོམ་ལྡན་འདས་དེ་དེ་བཞིན་ནོ་ཞེས་གསོལ་ནས། ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་བཅོམ་ལྡན་འདས་ཀྱི་ལྟར་མཉན་པ་དང༌།",
 "t3.1": "བཅོམ་ལྡན་འདས་ཀྱིས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། ། རབ་འབྱོར་འདི་ལ་བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་ཞུགས་པས།",
 "t3.2": "འདི་སྙམ་དུ་བདག་གིས་སེམས་ཅན་ཇི་ཙམ་སེམས་ཅན་དུ་བསྡུ་བས་བསྡུས་པ། སྒོ་ང་ལས་སྐྱེས་པའམ།མངལ་ལས་སྐྱེས་པའམ། དྲོད་གཤེར་ལས་སྐྱེས་པའམ། རྫུས་ཏེ་སྐྱེས་པའམ། གཟུགས་ཅན་ནམ། གཟུགས་ཅན་མ་ཡིན་པའམ། འདུ་ཤེས་ཅན་ནམ། འདུ་ཤེས་མེད་འདུ་ཤེས་མེད་མིན་ནམ། སེམས་ཅན་གྱི་ཁམས་ཇི་ཙམ་སེམས་ཅན་དུ་གདགས་བས་བརྟགས་པ་དེ་དག་ཐམས་ཅད་ཕུང་པོ་ལྷག་མ་མེད་པའི་མྱ་ངན་ལས་འདས་པའི་དབྱིངས་སུ་ཡོངས་སུ་མྱ་ངན་ལས་བཟླའོ། །",
 "t3.3": "དེ་ལྟར་སེམས་ཅན་ཚད་མེད་པ་ཡོངས་སུ་མྱ་ངན་ལས་འདས་ཀྱང༌། སེམས་ཅན་གང་ཡང་ཡོངས་སུ་མྱ་ངན་ལས་འདས་པར་འགྱུར་བ་མེད་དོ་སྙམ་དུ་སེམས་བསྐྱེད་པར་བྱའོ། །",
 "t3.4": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་གལ་ཏེ་བྱང་ཆུབ་སེམས་དཔའ་སེམས་ཅན་དུ་འདུ་ཤེས་འཇུག་ན། དེ་བྱང་ཆུབ་སེམས་དཔའ་ཞེས་མི་བྱ་བའི་ཕྱིར་རོ། །",
 "t3.5": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་གང་སེམས་ཅན་དུ་འདུ་ཤེས་འཇུག་གམ། སྲོག་ཏུ་འདུ་ཤེས་འཇུག་གམ། གང་ཟག་ཏུ་འདུ་ཤེས་འཇུག་ན། དེ་བྱང་ཆུབ་སེམས་དཔའ་ཞེས་མི་བྱ་བའི་ཕྱིར་རོ། །",
 "t4.1": "ཡང་རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་དངོས་པོ་ལ་མི་གནས་པར་སྦྱིན་པ་སྦྱིན་པར་བྱའོ། ། ཅི་ལ་ཡང་མི་གནས་པར་སྦྱིན་པ་སྦྱིན་པར་བྱའོ། །",
 "t4.2": "གཟུགས་ལ་ཡང་མི་གནས་པར་སྦྱིན་པ་སྦྱིན་པར་བྱའོ། ། དེ་བཞིན་དུ་སྒྲ་དང༌། དྲི་དང་། རོ་དང༌། རེག་བྱ་དང༌།ཆོས་ལ་ཡང་མི་གནས་པར་སྦྱིན་པ་སྦྱིན་པར་བྱའོ། །",
 "t4.3": "རབ་འབྱོར་ཅི་ནས་ཀྱང་མཚན་མར་འདུ་ཤེས་པ་ལ་ཡང་མི་གནས་པར་དེ་ལྟར་བྱང་ཆུབ་སེམས་དཔས་སྦྱིན་པ་སྦྱིན་ནོ། །",
 "t4.4": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་གང་མི་གནས་པར་སྦྱིན་པ་སྦྱིན་པ་དེའི་བསོད་ནམས་ཀྱི་ཕུང་པོ་ནི། རབ་འབྱོར་ཚད་གཟུང་བར་སླ་བ་མ་ཡིན་པའི་ཕྱིར་རོ། །",
 "t4.5": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། ཤར་ཕྱོགས་ཀྱི་ནམ་མཁའི་ཚད་གཟུང་བར་སླ་སྙམ་མམ།",
 "t4.6": "རབ་འབྱོར་གྱིས་གསོལ་བ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། །",
 "t4.7": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་བཞིན་དུ་ལྷོ་དང༌། ནུབ་དང༌། བྱང་དང༌། སྟེང་དང༌།འོག་གི་ཕྱོགས་དང༌། ཕྱོགས་མཚམས་དང༌། ཕྱོགས་བཅུའི་ནམ་མཁའི་ཚད་བཟུང་བར་སླ་སྙམ་མམ།",
 "t4.8": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། །",
 "t4.9": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་བཞིན་དུ་བྱང་ཆུབ་སེམས་དཔའ་གང་ལ་ཡང་མི་གནས་པར་སྦྱིན་པ་སྦྱིན་པ་དེའི་བསོད་ནམས་ཀྱི་ཕུང་པོ་ནི། རབ་འབྱོར་ཚད་བཟུང་བར་སླ་བ་མ་ཡིན་པའི་ཕྱིར་རོ། །",
 "t4.10": " （缺譯）",
 "t5.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་བྱ་སྙམ་མམ།",
 "t5.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་མི་བགྱི་ལགས་སོ། །",
 "t5.3": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། དེ་བཞིན་གཤེགས་པས་མཚན་ཕུན་སུམ་ཚŀགས་པ་ཞེས་གང་གསུངས་པ་དེ་ཉིད། མཚན་ཕུན་སུམ་ཚŀགས་པ་མ་མཆིས་པའི་སླད་དུའོ། །",
 "t5.4": "དེ་སྐད་ཅེས་གསོལ་པ་དང༌། བཅོམ་ལྡན་འདས་ཀྱིས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། །",
 "t5.5": "རབ་འབྱོར་ཇི་སྙམ་དུ་མཚན་ཕུན་སུམ་ཚŀགས་པ་དེ་ཙམ་དུ་བརྫུན་ནོ། ། ཇི་ཙམ་དུ་མཚན་ཕུན་སུམ་ཚŀགས་པ་མེད་པ་དེ་ཙམ་དུ་མི་བརྫུན་ཏེ། དེ་ལྟར་ན་དེ་བཞིན་གཤེགས་པ་ལ་མཚན་དང་མཚན་མ་མེད་པར་བལྟའོ། །",
 "t6.1": "དེ་སྐད་ཅེས་བཀའ་སྩལ་པ་དང༌། བཅོམ་ལྡན་འདས་ལ་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་འདི་སྐད་ཅེས་གསོལ་ཏོ། །",
 "t6.2": "བཅོམ་ལྡན་འདས་མ་འོངས་པའི་དུས་ལྔ་བརྒྱའི་ཐ་མ་ལ། དམ་པའི་ཆོས་རབ་ཏུ་རྣམ་པར་འཇིག་པར་འགྱུར་བ་ན། སེམས་ཅན་གང་ལ་ལ་དག་འདི་ལྟ་བུའི་མདོ་སྡེའི་ཚིག་བཤད་པ་དག་ལ་ཡང་དག་པར་འདུ་ཤེས་བསྐྱེད་པར་འགྱུར་བ་འབྱུང་པ་ལྟ་མཆིས་ལགས་སམ།",
 "t6.3": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་གང་ཁྱོད་འདི་སྐད་དུ་མ་འོངས་པའི་དུས་ལྔ་བརྒྱའི་ཐ་མ་ལ།དམ་པའི་ཆོས་རབ་ཏུ་རྣམ་པར་འཇིག་པར་འགྱུར་བ་ན། སེམས་ཅན་གང་ལ་ལ་དག་འདི་ལྟ་བུའི་མདོ་སྡེའི་ཚིག་བཤད་པ་དག་ལ་ཡང་དག་པར་འདུ་ཤེས་བསྐྱེད་པར་འགྱུར་བ་འབྱུང་བ་ལྟ་མཆིས་ལགས་སམ་ཞེས་ཁྱོད་དེ་སྐད་མ་ཟེར་ཅིག །",
 "t6.4": "རབ་འབྱོར་མ་འོངས་པའི་དུས་ལྔ་བརྒྱའི་ཐ་མ་ལ། དམ་པའི་ཆོས་རབ་ཏུ་རྣམ་པར་འཇིག་པར་འགྱུར་བ་ན།བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་ཚུལ་ཁྲིམས་དང་ལྡན་པ། ཡོན་ཏན་དང་ལྡན་པ། ཤེས་རབ་དང་ལྡན་པ་དག་འབྱུང་སྟེ།",
 "t6.5": " （缺譯）",
 "t6.6": "རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་དེ་དག་ཀྱང་། སངས་རྒྱས་གཅིག་ལ་བསྙེན་བཀུར་བྱས་པ་མ་ཡིན། སངས་རྒྱས་གཅིག་ལ་དགེ་བའི་རྩ་བ་བསྐྱེད་པ་མ་ཡིན་གྱི།",
 "t6.7": "རབ་འབྱོར་སངས་རྒྱས་འབུམ་ཕྲག་དུ་མ་ལ་བསྙེན་བཀུར་བྱས་ཤིང་སངས་རྒྱས་འབུམ་ཕྲག་དུ་མ་ལ་དགེ་བའི་རྩ་བ་དག་བསྐྱེད་པའི་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་དག་འབྱུང་ངོ། །",
 "t6.8": "རབ་འབྱོར་གང་དག་འདི་ལྟ་བུའི་མདོ་སྡེའི་བཤད་པ་དགེ་ལ་སེམས་དད་པ་གཅིག་ཙམ་རྙེད་པར་འགྱུར་བ་དེ་དག་ནི།",
 "t6.9": "དེ་བཞིན་གཤེགས་པས་མཁྱེན་ཏོ། རབ་འབྱོར་དེ་དག་ནི་དེ་བཞིན་གཤེགས་པས་གཟིགས་ཏེ། རབ་འབྱོར་སེམས་ཅན་དེ་དག་ཐམས་ཅད་ནི། བསོད་ནམས་ཀྱི་ཕུང་པོ་དཔག་ཏུ་མེད་པ་བསྐྱེད་ཅིང་ཡོངས་སུ་སྡུད་པར་འགྱུར་རོ། །",
 "t6.10": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་དེ་དག་ནི། བདག་ཏུ་འདུ་ཤེས་འཇུག་པར་མི་འགྱུར་ཞིང༌། སེམས་ཅན་དུ་འདུ་ཤེས་པ་མ་ཡིན། སྲོག་ཏུ་འདུ་ཤེས་པ་མ་ཡིན། གང་ཟག་ཏུ་འདུ་ཤེས་འཇུག་པར་མི་འགྱུར་བའི་ཕྱིར་རོ། །",
 "t6.11": "རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་དེ་དག་ཀྱང་ཆོས་སུ་འདུ་ཤེས་པ་དང༌། ཆོས་མེད་པར་ཡང་འདུ་ཤེས་མི་འཇུག་སྟེ། དེ་དག་ནི་འདུ་ཤེས་མེད་པར་ཡང་འདུ་ཤེས་འཇུག་པར་མི་འགྱུར་རོ། །",
 "t6.12": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་གལ་ཏ���་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་དེ་དག་ནི། ཆོས་སུ་འདུ་ ཤེས་འཇུག་ན་ཡང་དེ་ཉིད་དེ་དག་གིས་བདག་ཏུ་འཛིན་པར་འགྱུར་ཞིང༌། སེམས་ཅན་དུ་འཛིན་པ་དང༌། སྲོག",
 "t6.13": "གལ་ཏེ་ཆོས་བདག་མེད་པར་འདུ་ཤེས་འཇུག་ན་ཡང་དེ་ཉིད་དེ་དག་གིས་བདག་ཏུ་འཛིན་པར་འགྱུར་ཞིང༌།སེམས་ཅན་དུ་འཛིན་པ་དང༌། སྲོག་ཏུ་འཛིན་པ་དང༌། གང་ཟག་ཏུ་འཛིན་པར་འགྱུར་བའི་ཕྱིར་རོ། །",
 "t6.14": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་ཆོས་ཀྱང་ལོག་པར་བཟུང་བར་མི་བྱ་སྟེ། ཆོས་མ་ཡིན་པ་ཡང་མི་བཟུང་བའི་ཕྱིར་རོ། །",
 "t6.15": "དེ་བས་ན་དེ་ལས་དགོངས་ཏེ་དེ་བཞིན་གཤེགས་བས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་གཟིངས་ལྟ་བུར་ཤེས་པ་རྣམས་ཀྱིས་ཆོས་རྣམས་ཀྱང་སྤང་བར་བྱ་ན། ཆོས་མ་ཡིན་པ་རྣམས་ལྟ་ཅི་སྨོས་ཞེས་གསུངས་སོ། །",
 "t7.1": "གཞན་ཡང་བཅོམ་ལྡན་འདས་ཀྱིས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། །",
 "t7.2": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པའི་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་ཡོད་སྙམ་མམ། དེ་བཞིན་གཤེགས་པས་ཆོས་དེ་གང་ཡང་བསྟན་སྙམ་མམ།",
 "t7.3": "དེ་སྐད་ཅེས་བཀའ་སྩལ་པ་དང༌། བཅོམ་ལྡན་འདས་ལ་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་འདི་སྐད་ཅེས་གསོལ་ཏོ། ། བཅོམ་ལྡན་འདས་བདག་གིས་བཅོམ་ལྡན་འདས་ཀྱིས་གསུངས་པའི་དོན་འཚལ་བ་ལྟར་ན། དེ་བཞིན་གཤེགས་པས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་ལགས་སོ། ། དེ་བཞིན་གཤེགས་པས་བསྟན་པའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་ལགས་སོ། །",
 "t7.4": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། དེ་བཞིན་གཤེགས་པས་ཆོས་དེ་གང་ཡང་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའམ།བསྟན་པ་དེ་ནི་གཟུང་དུ་མ་མཆིས། བརྗོད་དུ་མ་མཆིས་ཏེ། དེ་ནི་ཆོས་ཀྱང་མ་ལགས། ཆོས་མ་མཆིས་པ་ཡང་མ་ལགས་པའི་སླད་དུའོ། །",
 "t7.5": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། འཕགས་པའི་གང་ཟག་རྣམས་ནི་འདུས་མ་བྱས་ཀྱིས་རབ་ཏུ་ཕྱི་བའི་སླད་དུའོ། །",
 "t8.1": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་གང་ལ་ལ་ཞིག་གིས་སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་འདི་རིན་པོ་ཆེ་སྣ་བདུན་གྱིས་རབ་ཏུ་གང་བར་བྱས་ཏེ་སྦྱིན་པ་བྱིན་ན། རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་དེ་གཞི་དེ་ལས་བསོད་ནམས་ཀྱི་ཕུང་པོ་མང་དུ་བསྐྱེད་སྙམ་མམ།",
 "t8.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་མང་ལགས་སོ། ། བདེ་བར་གཤེགས་པ་མང་ལགས་སོ། ། རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་དེའི་གཞི་དེ་ལས་བསོད་ནམས་ཀྱི་ཕུང་པོ་མང་དུ་བསྐྱེད་དོ། །",
 "t8.3": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བསོད་ནམས་ཀྱི་ཕུང་པོ་དེ་ཉིད་ཕུང་པོ་མ་མཆིས་པའི་སླད་དུ་སྟེ། དེ་བས་ན་དེ་བཞིན་གཤེགས་པས་བསོད་ནམས་ཀྱི་ཕུང་པོ་བསོད་ནམས་ཀྱི་ཕུང་པོ་ཞེས་གསུངས་སོ། །",
 "t8.4": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་གང་གིས་སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་འདི་རིན་པོ་ཆེ་སྣ་བདུན་གྱིས་རབ་ཏུ་གང་བར་བྱས་ཏེ་སྦྱིན་པ་བྱིན་པ་བས།",
 "t8.5": "གང་གིས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལས་ཐ་ན་ཚིག་བཞི་པའི་ཚིགས་སུ་བཅད་པ་ཙམ་བཟུང་ནས་གཞན་དག་ལ་འཆད་ཅིང་ཡང་དག་པར་རབ་ཏུ་སྟེན་ན། གཞི་དེ་ལས་བསོད་ནམས་ཀྱི་ཕུང་པོ་ཆེས་མང་དུ་གྲངས་མེད་དཔག་ཏུ་མེད་པ་བསྐྱེད་དོ། །",
 "t8.6": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་རྣམས་ཀྱི་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ནི་འདི་ལས་བྱུང་སྟེ། སངས་རྒྱས་བཅོམ་ལྡན་འདས་རྣམས་ཀྱང་འདི་ལས་སྐྱེས་པའི་ཕྱིར་རོ། །",
 "t8.7": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་སངས་རྒྱས་ཀྱི་ཆོས་རྣམས་སངས་རྒྱས་ཀྱི་ཆོས་རྣམས་ཞེས་བྱ་བ་ནི། སངས་རྒྱས་ཀྱི་ཆོས་དེ་དག་མེད་པར་དེ་བཞིན་གཤེགས་པའི་གསུངས་པའི་ཕྱིར་ཏེ། དེས་ན་སངས་རྒྱས་ཀྱི་ཆོས་རྣམས་ཞེས་བྱའོ། །",
 "t9.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། རྒྱུན་དུ་ཞུགས་པ་འདི་སྙམ་དུ་བདག་གིས་རྒྱུན་དུ་ཞུགས་པའི་འབྲས་བུ་ཐོབ་བོ་སྙམ་དུ་སེམས་སྙམ་མམ།",
 "t9.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་དེ་ནི་ཅི་ལའང་ཞུགས་པ་མ་མཆིས་པའི་སླད་དུ་སྟེ། དེས་ན་རྒྱུན་དུ་ཞུགས་པ་ཞེས་བགྱིའོ། ། གཟུགས་ལའང་མ་ཞུགས། སྒྲ་ལ་ཡང་མ་ལགས། དྲི་ལ་ཡང་མ་ལགས། རོ་ལ་ཡང་མ་ལགས། རེག་བྱ་ལ་ཡང་མ་ལགས། ཆོས་རྣམས་ལ་ཡང་མ་ཞུགས་ཏེ། དེས་ན་རྒྱུན་དུ་ཞུགས་པ་ཞེས་བགྱིའོ། །",
 "t9.3": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་གལ་ཏེ་རྒྱུན་དུ་ཞུགས་པ་འདི་སྙམ་དུ་བདག་གིས་རྒྱུན་དུ་ཞུགས་པའི་འབྲས་བུ་ཐོབ་བོ་སྙམ་དུ་སེམས་པར་གྱུར་ན། དེ་ཉིད་དེའི་བདག་ཏུ་འཛིན་པར་འགྱུར་ལགས་སོ། ། སེམས་ཅན་དུ་འཛིན་པ་དང༌། སྲོག་ཏུ་འཛིན་པ་དང༌། གང་ཟག་ཏུ་འཛིན་པར་འགྱུར་ལགས་སོ། །",
 "t9.4": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། ལན་ཅིག་ཕྱིར་འོང་བ་འདི་སྙམ་དུ་བདག་གིས་ལན་ཅིག་ཕྱིར་འོང་བའི་འབྲས་བུ་ཐོབ་བོ་སྙམ་དུ་སེམས་སྙམ་མམ།",
 "t9.5": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་ཅིའི་ཕྱིར་ཞེ་ན། གང་ལན་ཅིག་ཕྱིར་འོང་བ་ཉིད་དུ་ཞུགས་པའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་པའི་སླད་དུ་སྟེ། དེས་ན་ལན་ཅིག་ཕྱིར་འོང་བ་ཞེས་བགྱིའོ། ། བཅོམ་ལྡན་འདས་གལ་ཏེ་ལན་ཅིག་ཕྱིར་འོང་བ་འདི་སྙམ་དུ་བདག་གིས་ལན་ཅིག་ཕྱིར་འོང་བའི་འབྲས་བུ་ཐོབ་བོ་སྙམ་དུ་སེམས་པར་གྱུར་ན། དེ་ཉིད་དེའི་བདག་ཏུ་འཛིན་པར་འགྱུར་ལགས་སོ། ། སེམས་ཅན་དུ་འཛིན་པ་དང༌། སྲོག་ཏུ་འཛིན་པ་དང༌། གང་ཟག་ཏུ་འཛིན་པར་འགྱུར་ལགས་སོ། །",
 "t9.6": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། ཕྱིར་མི་འོང་བ་འདི་སྙམ་དུ་བདག་གིས་ཕྱིར་མི་འོང་བའི་འབྲས་བུ་ཐོབ་བོ་སྙམ་དུ་སེམས་སྙམ་མམ།",
 "t9.7": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། གང་ཕྱིར་མི་འོང་བ་ཉིད་དུ་ཞུགས་པའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་པའི་སླད་དུ་སྟེ། དེའི་ཕྱིར་ཕྱིར་མི་འོང་བ་ཞེས་བགྱིའོ། །",
 "t9.8": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དགྲ་བཅོམ་པ་འདི་སྙམ་དུ་བདག་གིས་དགྲ་བཅོམ་པ་ཉིད་ཐོབ་བོ་སྙམ་དུ་སེམས་སྙམ་མམ།",
 "t9.9": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། གང་དག་དགྲ་བཅོམ་པ་ཞེས་བགྱི་བའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་པའི་སླད་དུའོ། ། བཅོམ་ལྡན་འདས་གལ་ཏེ་དགྲ་བཅོམ་པ་འདི་སྙམ་དུ་བདག་གིས་དགྲ་བཅོམ་པ་ཉིད་ཐོབ་པོ་སྙམ་དུ་སེམས་པར་གྱུར་ན། དེ་ཉིད་དེའི་བདག་ཏུ་འཛིན་པར་འགྱུར་ལགས་སོ། ། སེམས་ཅན་དུ་འཛིན་པ་དང༌། སྲོག་ཏུ་འཛིན་པ་དང༌། གང་ཟག་ཏུ་འཛིན་བར་འགྱུར་ལགས་སོ། །",
 "t9.10": "བཅོམ་ལྡན་འདས་བདག་ནི་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཀྱིས་ཉོན་མོངས་པ་མེད་པར་གནས་པ་རྣམས་ཀྱི་མཆོག་ཏུ་བསྟན་ཏེ། བཅོམ་ལྡན་འདས་བདག་འདོད་ཆགས་དང་བྲལ་བ་དགྲ་བཅོམ་པ་ལགས་ཀྱང༌། བཅོམ་ལྡན་འདས་བདག་འདི་སྙམ་དུ་བདག་ནི་དགྲ་བཅོམ་པའོ་སྙམ་དུ་མི་སེམས་ལགས་སོ། །",
 "t9.11": "བཅོམ་ལྡན་འདས་གལ་ཏེ་འདི་སྙམ་དུ་བདག་གིས་དགྲ་བཅོམ་པ་ཉིད་ཐོབ་བོ་སྙམ་དུ་སེམས་པར་གྱུར་ན། དེ་བཞིན་གཤེགས་པས་བདག་ལ་རིགས་ཀྱི་བུ་རབ་འབྱོར་ནི་ཉོན་མོངས་པ་མེད་པར་གནས་པ་རྣམས་ཀྱི་མཆོག་ཡིན་ཏེ། ཅི་ལ་ཡང་མི་གནས་པས་ན་ཉོན་མོངས་པ་མེད་པར་གནས་པ་ཞེས་ལུང་མི་སྟོན་ལགས་སོ། །",
 "t10.1": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་མར་མེ་མཛད་ལས་གང་བླངས་པའི་ཆོས་དེ་གང་ཡང་ཡོད་སྙམ་མམ།",
 "t10.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་བཞིན་གཤེགས་པས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་མར་མེ་མཛད་ལས་གང་བླངས་པའི་ཆོས་དེ་གང་ཡང་ཡོད་ཡེ་མ་མཆིས་ལགས་སོ། ། ",
 "t10.3": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་གང་ལ་ལ་ཞིག་འདི་སྐད་དུ་བདག་གིས་ཞིང་བཀོད་པ་རྣམས་བསྒྲུབ་པོ་ཞེས་ཟེར་ན་དེ་ནི་མི་བདེན་པར་སྨྲའོ། །",
 "t10.4": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་ཞིང་བཀོད་པ་རྣམས་ཞིང་བཀོད་པ་རྣམས་ཞེས་བྱ་བ་ནི། བཀོད་པ་དེ་དག་མེད་པར་དེ་བཞིན་གཤེགས་པར་གསུངས་པའི་ཕྱིར་ཏེ། དེས་ན་ཞིང་བཀོད་པ་རྣམས་ཞེས་བྱའོ། །",
 "t10.5": "རབ་འབྱོར་དེ་ལྟ་བས་ན། བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོས་འདི་ལྟར་མི་གནས་པར་སེམས་པ་བསྐྱེད་པར་བྱ་སྟེ། ཅི་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། ། གཟུགས་ལ་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། ། སྒྲ་དང་དྲི་དང་རོ་དང་རེག་བྱ་དང་ཆོས་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། །",
 "t10.6": "རབ་འབྱོར་འདི་ལྟ་སྟེ་དཔེར་ན། སྐྱེས་བུ་ཞིག་ལུས་འདི་ལྟ་བུར་གྱུར་ཏེ། འདི་ལྟ་སྟེ་རིའི་རྒྱལ་པོ་རི་རབ་ཙམ་དུ་གྱུར་ན། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། ལུས་དེ་ཆེ་བ་ཡིན་སྙམ་མམ།",
 "t10.7": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་ལུས་དེ་ཆེ་བ་ལགས་སོ། ། བདེ་བར་གཤེགས་པ་ལུས་དེ་ཆེ་བ་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། དེ་བཞིན་གཤེགས་པས་དེ་དངོས་པོ་མ་མཆིས་པར་གསུངས་པའི་སླད་དུ་སྟེ།དེས་ན་ལུས་དེ་ཆེ་བ་ཞེས་བགྱིའོ། ། དེ་དངོས་པོ་མ་མཆིས་བས་དེས་ན་ལུས་ཞེས་བྱའོ། །",
 "t11.1": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། གངྒཱའི་ཀླུང་གི་བྱེ་མ་ཇི་སྙེད་པ་གངྒཱའི་ཀླུང་ཡང་དེ་སྙེད་ཁོ་ནར་གྱུར་ལ། དེ་དག་གི་བྱེ་མ་གང་ཡིན་པ་དེ་དག་མང་བ་ཡིན་སྙམ་མམ།",
 "t11.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་གངྒཱའི་ཀླུང་དེ་དག་ཉིད་ཀྱང་མང་ལགས་ན། དེ་དག་གི་བྱེ་མ་ལྟ་སྨོས་ཀྱང་ཅི་འཚལ།",
 "t11.3": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་ཁྱོད་མོས་པར་བྱའོ། ། ཁྱོད་ཀྱི་ཁོང་དུ་ཆུད་བར་བྱའོ། །གངྒཱའི་ཀླུང་དེ་དག་གི་བྱ་མ་ཇི་སྙེད་པ་དེ་སྙེད་ཀྱི་འཇིག་རྟེན་གྱི་ཁམས་ན་སྐྱེས་པའམ། བུད་མེད་ལ་ལ་ཞིག་གིས་རིན་པོ་ཆེ་སྣ་བདུན་གྱིས་རབ་ཏུ་གང་བར་བྱས་ཏེ། དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་རྣམས་ལ་སྦྱིན་པ་བྱིན་ན། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། སྐྱེས་པའམ་བུད་མེད་དེ་གཞི་དེ་ལས་བསོད་ནམས་མང་དུ་བསྐྱེད་སྙམ་མམ།",
 "t11.4": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་མང་ལགས་སོ། ། བདེ་བར་གཤེགས་པ་མང་ལགས་སོ། །སྐྱེས་པའམ་བུད་མེད་དེ་གཞི་དེ་ལས་བསོད་ནམས་མང་དུ་བསྐྱེད་པ་ལགས་སོ། །",
 "t11.5": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་གང་གིས་འཇིག་རྟེན་གྱི་ཁམས་དེ་སྙེད་རིན་པོ་ཆེ་སྣ་བདུན་གྱིས་རབ་ཏུ་གང་བར་བྱས་ཏེ། དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་རྣམས་ལ་སྦྱིན་པ་བྱིན་པ་བས། གང་གིས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལས་ཐ་ན་ཚིག་བཞི་པའི་ཚིགས་སུ་བཅད་པ་ཙམ་བཟུང་ནས། གཞན་དག་ལ་ཡང་དག་པར་རབ་ཏུ་བཤད་དེ་ཡང་དག་པར་རབ་ཏུ་བསྟན་ན། དེ་ཉིད་གཞི་དེ་ལས་བསོད་ནམས་ཆེས་མང་དུ་གྲངས་མེད་དཔག་ཏུ་མེད་པ་བསྐྱེད་དོ། །",
 "t12.1": "ཡང་རབ་འབྱོར་ས་ཕྱོགས་གང་ན་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལས་ཐ་ན་ཚིག་བཞི་པའི་ཚིགས་སུ་བཅད་པ་ཙམ་འདོན་ཏམ་སྟོན་པའི་ས་ཕྱོགས་དེ་ནི་ལྷ་དང་མི་དང་ལྷ་མ་ཡིན་དུ་བཅས་བའི་འཇིག་རྟེན་གྱི་མཆོད་རྟེན་དུ་གྱུར་པ་ཡིན་ན།",
 "t12.2": " སུ་ཞིག་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལེན་པ་དང༌། འབྲི་བ་དང༌། འཛིན་པ་དང་། འཆང་བ་དང༌། ཀློག་པ་དང༌།ཀུན་ཆུབ་པར་བྱེད་པ་དང༌། ཚུལ་བཞིན་དུ་ཡིད་ལ་བྱེད་བ །",
 "t12.3": " དེ་ངོ་མཚར་རབ་དང་ལྡན་པར་གྱུར་པ་ལྟ་ཅི་སྨོས།ས་ཕྱོགས་དེ་ན་སྟོན་པའམ། བླ་མ་ལྟ་བུ་གང་ཡང་རུང་བར་གནས་སོ། །",
 "t13.1": "དེ་སྐད་ཅེས་བཀའ་སྩལ་པ་དང༌། བཅོམ་ལྡན་འདས་ལ་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་འདི་སྐད་ཅེས་གསོལ་ཏོ། ། བཅོམ་ལྡན་འདས་ཆོས་ཀྱི་རྣམ་གྲངས་འདིའི་མིང་ཅི་ལགས། འདི་ཇི་ལྟར་བཟུང་བར་བགྱི།",
 "t13.2": "དེ་སྐད་ཅེས་གསོལ་པ་དང༌། བཅོམ་ལྡན་འདས་ཀྱིས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། ། རབ་འབྱོར་ཆོས་ཀྱི་རྣམ་གྲངས་འདིའི་མིང་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་ཞེས་བྱ་སྟེ་འདི་དེ་ལྟར་བཟུངས་ཤིག ། དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དེ་བཞིན་གཤེགས་པས་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་གང་གསུངས་པ་དེ་ཉིད་ཕ་རོལ་ཏུ་ཕྱིན་པ་མེད་པའི་ཕྱིར་ཏེ། དེས་ན་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་ཞེས་བྱའོ། །",
 "t13.3": " རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་ཆོས་དེ་གང་ཡང་ཡོད་སྙམ་མམ།",
 "t13.4": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་བཞིན་གཤེགས་པས་གང་གསུངས་པའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་ལགས་སོ། །",
 "t13.5": " བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་ན་སའི་རྡུལ་ཇི་སྙེད་ཡོད་པ་དེ་མང་བ་ཡིན་སྙམ་མམ།",
 "t13.6": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་སའི་རྡུལ་དེ་མང་ལགས་སོ། ། བདེ་བར་གཤེགས་པ་མང་ལགས་སོ། །",
 "t13.7": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་སའི་རྡུལ་གང་ལགས་པ་དེ་རྡུལ་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླད་དུ་སྟེ། དེས་ན་སའི་རྡུལ་ཞེས་བགྱིའོ། ། འཇིག་རྟེན་གྱི་ཁམས་གང་ལགས་པ་དེ་དག་ཁམས་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླད་དུ་སྟེ། དེས་ན་འཇིག་རྟེན་གྱི་ཁམས་ཞེས་བགྱིའོ། །",
 "t13.8": " བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། སྐྱེས་བུ་ཆེན་པོའ ི་མཚན་སུམ་ཅུ་རྩ་གཉིས་པོ་དེ་དག་གིས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫགས་པའི་སངས་རྒྱས་སུ་བལྟ་བར་བྱ་སྙམ་མམ།",
 "t13.9": "རབ་འབྱོར་གྱིས་གསོལ་པ། །བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། སྐྱེས་བུ་ཆེན་པོའ ི་མཚན་སུམ་ཅུ་རྩ་གཉིས་གང་དག་དེ་བཞིན་གཤེགས་པས་གསུངས་པ་དེ་དག་མཚན་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླད་དུ་སྟེ། དེས་ན་སྐྱེས་བུ་ཆེན་པོའ ི་མཚན་སུམ་ཅུ་རྩ་གཉིས་རྣམས་ཞེས་བགྱིའོ། །",
 "t13.10": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་སྐྱེས་བའམ། བུད་མེད་གང་ལ་ལ་ཞིག་གིས་ལུས་གངྒཱའི་ཀླུང་གི་བྱེ་མ་སྙེད་ཡོངས་སུ་བཏང་བ་བས། གང་གིས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལས་ཐ་ན་ཚིག་བཞི་པའི་ཚིགས་སུ་བཅད་པ་ཙམ་བཟུང་སྟེ་གཞན་དག་ལ་ཡང་དག་པར་བསྟན་ན། དེ་ཉིད་གཞི་དེ་ལས་བསོད་ནམས་ཆེས་མང་དུ་གྲངས་མེད་དཔག་ཏུ་མེད་པ་བསྐྱེད་དོ། །",
 "t14.1": "དེ་ནས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ཆོས་ཀྱི་ཤུགས་ཀྱིས་མཆི་མ་ཕྱུང་སྟེ། དེས་མཆི་མ་ཕྱིས་ནས་བཅོམ་ལྡན་འདས་ལ་འདི་སྐད་ཅེས་གསོལ་ཏོ། །",
 "t14.2": "ཆོས་ཀྱི་རྣམ་གྲངས་འདི་དེ་བཞིན་གཤེགས་པ་ཇི་སྙེད་པས་གསུངས་པ་ནི། བཅོམ་ལྡན་འདས་ངོ་མཚར་ལགས་སོ། །བདེ་བར་གཤེགས་པ་ངོ་མཚར་ལགས་སོ། །བཅོམ་ལྡན་འདས་བདག་གིས་ཡེ་ཤེས་སྐྱེས་ཚུན་ཆད་བདག་གིས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་སྔོན་ནམ་ཡང་མ་ཐོས་ལགས་སོ། །",
 "t14.3": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་མདོ་སྡེ་བཤད་པ་འདི་ལ་གང་དག་ཡང་དག་པར་འདུ་ཤེས་བསྐྱེད་བར་འགྱུར་པའི་སེམས་ཅན་དེ་དག་ནི་ངོ་མཚར་རབ་དང་ལྡན་པར་འགྱུར་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་ཡང་དག་པར་འདུ་ཤེས་པ་གང་ལགས་པ་དེ་ཉིད་འདུ་ཤེས་མ་མཆིས་པའི་སླད་དུ་སྟེ། དེས་ན་ཡང་དག་པར་འདུ་ཤེས་ཞེས་དེ་བཞིན་གཤེགས་པས་གསུངས་སོ། །",
 "t14.4": "བཅོམ་ལྡན་འདས་བདག་ནི་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་བཤད་པ་ལ་རྟོག་ཅིང་མོས་པ་ནི། བདག་ལ་ངོ་མཚར་མ་ལགས་ཀྱིས། ། བཅོམ་ལྡན་འདས་སླད་མའི་ཚĲ་སླད་མའི་དུས་ལྔ་བརྒྱའི་ཐ་མ་ལ་སེམས་ཅན་གང་དག་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལེན་པ་དང༌། འབྲི་བ་དང༌། འཛིན་པ་དང༌། འཆང་བ་དང༌། ཀློག་པ་དང༌། ཀུན་ཆུབ་པར་བྱེད་པ་དེ་དག་ན་ངོ་མཚར་རབ་དང་ལྡན་པར་འགྱུར་ལགས་སོ། །",
 "t14.5": "ཡང་བཅོམ་ལྡན་འདས་དེ་དག་ནི་བདག་ཏུ་འདུ་ཤེས་འཇུག་པར་མི་འགྱུར་ཞིང༌། སེམས་ཅན་དུ་འདུ་ཤེས་པ་དང༌། སྲོག་ཏུ་འདུ་ཤེས་པ་དང༌། གང་ཟག་ཏུ་འདུ་ཤེས་འཇུག་པར་མི་འགྱུར་ལགས་སོ། །",
 "t14.6": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་བདག་ཏུ་འདུ་ཤེས་པ་དང༌། སེམས་ཅན་དུ་འདུ་ཤེས་པ་དང༌། སྲོག་ཏུ་འདུ་ཤེས་པ་དང༌། གང་ཟག་ཏུ་འདུ་ཤེས་པ་གང་ལགས་པ་དེ་ཉིད་འདུ་ཤེས་ཐམས་ཅད་དང་བྲལ་བའི་སླད་དུའོ། །",
 "t14.7": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། སངས་རྒྱས་བཅོམ་ལྡན་འདས་རྣམས་ནི་འདུ་ཤེས་ཐམས་ཅད་དང་བྲལ་བའི་སླད་དུའོ། །དེ་སྐད་ཅེས་གསོལ་པ་དང༌། བཅོམ་ལྡན་འདས་ཀྱིས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། །",
 "t14.8": " རབ་འབྱོར་དེ་དེ་བཞིན་ནོ། །དེ་དེ་བཞིན་ཏེ། སེམས་ཅན་གང་དག་མདོ་སྡེ་འདི་བཤད་པ་ལ་མི་སྐྲག་ཅིང་མི་དངང་ལ་ཀུན་ཏུ་དངང་པར་མི་འགྱུར་བ། དེ་དག་ནི་ངོ་མཚར་རབ་དང་ལྡན་པར་འགྱུར་རོ། །",
 "t14.9": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་ཕ་རོལ་ཏུ་ཕྱིན་པ་དམ་པ་འདི་ནི་དེ་བཞིན་གཤེགས་པས་གསུངས་ཏེ། ཕ་རོལ་ཏུ་ཕྱིན་པ་དམ་པ་གང་དེ་བཞིན་གཤེགས་པས་གསུངས་པ་དེ་སངས་རྒྱས་བཅོམ་ལྡན་འདས་དཔག་ཏུ་མེད་ཚད་མེད་པ་རྣམས་ཀྱིས་ཀྱང་གསུངས་པའི་ཕྱིར་ཏེ། དེས་ན་ཕ་རོལ་ཏུ་ཕྱིན་པ་དམ་པ་ཞེས་བྱའོ། །",
 "t14.10": "ཡང་རབ་འབྱོར་དེ་བཞིན་གཤེགས་པས་བཟོད་པའི་ཕ་རོལ་ཏུ་ཕྱིན་པ་གང་ཡིན་པ་དེ་ཉིད་ཕ་རོལ་ཏུ་ཕྱིན་པ་མེད་དོ། །",
 "t14.11": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་གང་གི་ཚĲ་ཀ་ལིངྐའི་རྒྱལ་པོས། ངའི་ཡན་ལག་དང་ཉིང་ལག་རྣམས་བཅད་པར་གྱུར་པ་དེའི་ཚĲ་ང་ལ་བདག་ཏུ་འདུ་ཤེས་སམ། སེམས་ཅན་དུ་འདུ་ཤེས་སམ། སྲོག་ཏུ་འདུ་ཤེས་སམ། གང་ཟག་ཏུ་འདུ་ཤེས་ཀྱང་མ་བྱུང་ཞིང༌། ང་ལ་འདུ་ཤེས་ཅི་ཡང་མེད་ལ་འདུ་ཤེས་མེད་པར་གྱུར་པ་ཡང་མ་ཡིན་པའི་ཕྱིར་རོ། །",
 "t14.12": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་གལ་ཏེ་དེའི་ཚĲ་ང་ལ་བདག་ཏུ་འདུ་ཤེས་བྱུང་ན། དེའི་ཚĲ་གནོད་སེམས་ཀྱི་འདུ་ཤེས་ཀྱང་འབྱུང་ལ། སེམས་ཅན་དུ་འདུ་ཤེས་པ་དང༌། སྲོག་ཏུ་འདུ་ཤེས་པ་དང༌། གང་ཟག་ཏུ་འདུ་ཤེས་བྱུང་ན།དེའི་ཚĲ་གནོད་སེམས་ཀྱི་འདུ་ཤེས་ཀྱང་འབྱུང་བའི་ཕྱིར་རོ། །",
 "t14.13": "རབ་འབྱོར་ངས་མངོན་པར་ཤེས་ཏེ། འདས་པའི་དུས་ན་ང་ཚĲ་རབས་ལྔ་བརྒྱར་བཟོད་པ་སྨྲ་བ་ཞེས་བྱ་བའི་དྲང་སྲོང་དུ་གྱུར་པ་དེའི་ཚĲ་ན་ཡང༌། ང་ལ་བདག་ཏུ་འདུ་ཤེས་མ་བྱུང༌། སེམས་ཅན་དུ་འདུ་ཤེས་དང༌། སྲོག་ཏུ་འདུ་ཤེས་དང༌། གང་ཟག་ཏུ་འདུ་ཤེས་མ་བྱུང་ངོ། །",
 "t14.14": "རབ་འབྱོར་དེ་ལྟ་བས་ན། བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོས་འདུ་ཤེས་ཐམས་ཅད་རྣམ་པར་སྤངས་ཏེ། བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་སེམས་བསྐྱེད་པར་བྱའོ། ། གཟུགས་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། །སྒྲ་དང་དྲི་དང་རོ་དང༌རེག་བྱ་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། །ཆོས་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། ། ཆོས་མེད་པ་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། །ཅི་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། །",
 "t14.15": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། གནས་པ་གང་ཡིན་པ་དེ་ཉིད་མི་གནས་པའི་ཕྱིར་ཏེ། དེ་བས་ན་དེ་བཞིན་གཤེགས་པས་འདི་སྐད་དུ། བྱང་ཆུབ་སེམས་དཔའ་གང་ལ་ཡང་མི་གནས་པར་སྦྱིན་པ་སྦྱིན་པར་བྱའོ་ཞེས་གསུངས་སོ། །",
 "t14.16": "ཡང་རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་འདི་ལྟར་སེམས་ཅན་ཐམས་ཅད་ཀྱི་དོན་གྱི་ཕྱིར་སྦྱིན་པ་ཡོངས་སུ་བཏང་བར་བྱའོ། །",
 "t14.17": "སེམས་ཅན་དུ་འདུ་ཤེས་པ་གང་ཡིན་པ་དེ་ཉིད་ཀྱང་འདུ་ཤེས་མེད་པ་སྟེ། དེ་བཞིན་གཤེགས་པས་སེམས་ཅན་ཐམས་ཅད་ཅེས་གང་དག་གསུངས་པའི་སེམས་ཅན་དེ་དག་ཉིད་ཀྱང་མེད་པའོ།།",
 "t14.18": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དེ་བཞིན་གཤེགས་པ་ནི་ཡང་དག་པར་གསུངས་པ། བདེན་པར་གསུངས་པ། དེ་བཞིན་ཉིད་དུ་གསུངས་བ་སྟེ། དེ་བཞིན་གཤེགས་པ་ནི་ལོག་པར་གསུང་པ་མ་ཡིན་པའི་ཕྱིར་རོ། །",
 "t14.19": "ཡང་རབ་འབྱོར་དེ་བཞིན་གཤེགས་པས་ཆོས་གང་ཡང་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའམ། བསྟན་པ་དེ་ལ་བདེན་པ་ཡང་མེད། རྫུན་པ་ཡང་མེད་དོ། །",
 "t14.20": "རབ་འབྱོར་འདི་ལྟ་སྟེ། དཔེར་ན་མིག་དང་ལྡན་པའི་མི་ཞིག་མུན་པར་ཞུགས་ན་ཅི་ཡང་མི་མཐོང་བ་དེ་བཞིན་དུ་གང་དངོས་པོར་ལྷུང་བས་སྦྱིན་པ་ཡོངས་སུ་གཏོང་བའི་བྱང་ཆུབ་སེམས་དཔའ་བལྟ་བར་བྱའོ། །",
 "t14.21": "ཡང་རབ་འབྱོར་འདི་ལྟ་སྟེ། དཔེར་ན། ནམ་ལངས་ཏེ་ཉི་མ་ཤར་ནས་མིག་དང་ལྡན་པའི་མིས་གཟུགས་རྣམ་པ་སྣ་ཚŀགས་དག་མཐོང་བ་དེ་བཞིན་དུ་གང་དངོས༌པོར་མ་ལྷུང་བས་སྦྱིན་པ་ཡོངས་སུ་གཏོང་བའི་བྱང་ཆུབ་སེམས་དཔའ་བལྟ་བར་བྱའོ། །",
 "t14.22": "ཡང་རབ་འབྱོར་རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་གང་དག་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལེན་པ་དང༌། འཛིན་པ་དང༌། འཆང་བ་དང༌། ཀློག་པ་དང༌། ཀུན་ཆུབ་པར་བྱེད་པ་དང༌། གཞན་དག་ལ་རྒྱ་ཆེར་ཡང་དག་པར་རབ་ཏུ་སྟོན་པ་དེ་དག་ནི་དེ་བཞིན་གཤེགས་པས་མཁྱེན། དེ་བཞིན་གཤེགས་པས་གཟིགས་ཏེ་སེམས་ཅན་དེ་དག་ཐམས་ཅད་ནི་བསོད་ནམས་ཀྱི་ཕུང་པོ་དཔག་ཏུ་མེད་པ་བསྐྱེད་པར་འགྱུར་རོ། །",
 "t15.1": "ཡང་རབ་འབྱོར་སྐྱེས་པའམ། བུད་མེད་གང་ཞིག་སྔ་དྲོའ ི་དུས་ཀྱི་ཚĲ་ལུས་གངྒཱའི་ཀླུང་གི་བྱེ་མ་སྙེད་ཡོངས་སུ་གཏོང་ལ། ཕྱེད་ཀྱི་དུས་དང༌། ཕྱི་དྲོའ ི་དུས་ཀྱི་ཚĲ་ཡང་ལུས་གངྒཱའི་ཀླུང་གི་བྱེ་མ་སྙེད་ཡོངས་སུ་གཏོང་སྟེ། རྣམ་གྲངས་འདི་ལྟ་བུར་བསྐལ་པ་བྱེ་བ་ཁྲག་ཁྲིག་འབུམ་ཕྲག་དུ་མར་ལུས་ཡོངས་སུ་གཏོང་བ་བས།",
 "t15.2": "གང་གིས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ཐོས་ནས་མི་སྤོང་ན། དེ་ཉིད་གཞི་དེ་ལས་བསོད་ནམས་ཆེས་མང་དུ་གྲངས་མེད་དཔག་ཏུ་མེད་པ་བསྐྱེད་ན། གང་གིས་ཡི་གེར་བྲིས་ནས་ལེན་པ་དང༌། འཛིན་པ་དང༌། འཆང་བ་དང༌། ཀློག་པ་དང༌། ཀུན་ཆུབ་པར་བྱེད་པ་དང༌། གཞན་དག་ལ་རྒྱ་ཆེར་ཡང་དག་པར་རབ་ཏུ་སྟོན་པ་ལྟ་ཅི་སྨོས།",
 "t15.3": "ཡང་རབ་འབྱོར། ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ནི་བསམ་གྱིས་མི་ཁྱབ་ཅིང༌། མཚུངས་པ་མེད་དེ། འདིའི་རྣམ་པར་སྨིན་པ་ཡང་བསམ་གྱིས་མི་ཁྱབ་པ་ཉིད་དུ་རིག་པར་བྱའོ། །",
 "t15.4": "ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ནི་ཐེག་པ་མཆོག་ལ་ཡང་དག་པར་ཞུགས་པའི་སེམས་ཅན་རྣམས་ཀྱི་དོན་དང༌། ཐེག་པ་ཕུལ་དུ་ཕྱིན་པ་ལ་ཡང་དག་པར་ཞུགས་པའི་སེམས་ཅན་རྣམས་ཀྱི་དོན་གྱི་ཕྱིར་དེ་བཞིན་གཤེགས་པས་གསུངས་སོ། །",
 "t15.5": "གང་དག་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་ལེན་པ་དང༌། འཛིན་པ་དང༌། འཆང་བ་དང༌། ཀློག་པ་དང༌། ཀུན་ཆུབ་པར་བྱེད་པ་དང༌། གཞན་དག་ལ་ཡང་རྒྱ་ཆེར་ཡང་དག་པར་རབ་ཏུ་སྟོན་པ་དེ་དག་ནི་དེ་བཞིན་གཤེགས་པས་མཁྱེན།དེ་བཞིན་གཤེགས་པས་གཟིགས་ཏེ།",
 "t15.6": "སེམས་ཅན་དེ་དག་ཐམས་ཅད་ནི་བསོད་ནམས་ཀྱི་ཕུང་པོ་དཔག་ཏུ་མེད་པ་དང་ལྡན་པར་འགྱུར་བསོད་ནམས་ཀྱི་ཕུང་པོ་བསམ་གྱིས་མི་ཁྱབ་པ་དང༌། མཚུངས་པ་མེད་པ་དང༌། གཞལ་དུ་མེད་པ་དང༌། ཚད་མེད་པ་དང་ལྡན་པར་འགྱུར་ཏེ། སེམས་ཅན་དེ་དག་ཐམས་ཅད་ངའི་བྱང་ཆུབ་ཕྲག་པ་ལ་ཐོགས་པར་འགྱུར་རོ། །",
 "t15.7": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དམན་པ་ལ་མོས་པ་རྣམས་ཀྱིས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་མཉན་པར་མི་ནུས་ཏེ།བདག་ཏུ་ལྟ་བ་རྣམས་ཀྱིས་མ་ཡིན། སེམས་ཅན་དུ་ལྟ་བ་རྣམས་ཀྱིས་མ་ཡིན། སྲོག་ཏུ་ལྟ་བ་རྣམས་ཀྱིས་མ་ཡིན་ཞིང༌། གང་ཟག་ཏུ་ལྟ་བ་རྣམས་ཀྱིས་མཉན་པ་དང༌། བླང་བ་དང་བཟུང་བ་དང༌། ཀློག་པ་དང༌། ཀུན་ཆུབ་པར་བྱེད་མི་ནུས་ཏེ། དེ་ནི་གནས་མེད་པའི་ཕྱིར་རོ།།",
 "t15.8": "ཡང་རབ་འབྱོར་ས་ཕྱོགས་གང་ན་མདོ་སྡེ་འདི་སྟོན་པའི་ས་ཕྱོགས་དེ་ལྷ་དང་མི་དང་ལྷ་མ་ཡིན་དུ་བཅས་པའི་འཇིག་རྟེན་གྱི་མཆོད་པ་བྱ་བར་འོས་པར་འགྱུར་རོ། །ས་ཕྱོགས་དེ་ཕྱག་བྱ་བར་འོས་པ་དང༌། སྐོར་བ་བྱ་བར་འོས་པར་འགྱུར་ཏེ། ས་ཕྱོགས་དེ་མཆོད་རྟེན་ལྟ་བུར་འགྱུར་རོ། །",
 "t16.1": "ཡང་རབ་འབྱོར་རིགས་ཀྱི་བུའམ། རིགས་ཀྱི་བུ་མོ་གང་དག་འདི་ལྟ་བུའི་མདོ་སྡེའི་ཚིག་འདི་དག་ལེན་པ་དང༌།འཛིན་པ་དང༌། འཆང་བ་དང༌། ཀློག་པ་དང༌། ཀུན་ཆུབ་པར་བྱེད་པ་དེ་དག་ནི་མནར་བར་འགྱུར་ཤིན་ཏུ་མནར་བར་འགྱུར་རོ། །",
 "t16.2": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་སེམས་ཅན་དེ་དག་ནི་ཚĲ་རབས་སྔ་མའི་མི་དགེ་བའི་ལས་ངན་སོང་དུ་སྐྱེ་བར་འགྱུར་བ་གང་དག་བྱས་པ་དེ་དག་ཚĲ་འདི་ཉིད་ལ་མནར་བས། ཚĲ་རབས་སྔ་མའི་མི་དགེ་བའི་ལས་ངན་སོང་དུ་སྐྱེ་བར་འགྱུར་བ་གང་དག་བྱས་པ་དེ་དག་འབྱང་བར་འགྱུར་ཏེ། སངས་རྒྱས་ཀྱི་བྱན་ཆུབ་ཀྱང་ཐོབ་པར་འགྱུར་རོ། །",
 "t16.3": "རབ་འབྱོར་ངས་མངོན་པར་ཤེས་ཏེ། འདས་པའི་དུས་བསྐལ་པ་གྲངས་མེད་པའི་ཡང་ཆེས་གྲངས་མེད་པ་ན། དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་མར་མེ་མཛད་ཀྱི་སྔ་རོལ་གྱི་ཡང་ཆེས་སྔ་རོལ་ན། སངས་རྒྱས་བྱེ་བ་ཁྲག་ཁྲིག་འབུམ་ཕྲག་བརྒྱད་ཅུ་རྩ་བཞི་དག་བྱུང་བ་ངེས་མཉེས་པར་བྱས་ཏེ། མ་མཉེས་པར་མ་བྱས་ནས་ཐུགས་འབྱུང་བར་མ་བྱས་ཏེ། རབ་འབྱོར་སངས་རྒྱས་བཅོམ་ལྡན་འདས་དེ་དག་ངས་མཉེས་པར་བྱས་ནས་ཐུགས་འབྱུང་བར་མ་བྱས་པ་གང་ཡིན་པ་དང༌།",
 "t16.4": "ཕྱི་མའི་དུས་ལྔ་བརྒྱའི་ཐ་མར་གྱུར་པ་ན། མདོ་སྡེ་འདི་ལེན་པ་དང༌། འདྲི་བ་དང༌། འཛིན་པ་དང་འཆང་བ་དང༌།ཀློག་པ་དང༌། ཀུན་ཆུབ་པར་བྱེད་པ་གང་ཡིན་པ་ལས།",
 "t16.5": "རབ་འབྱོར་བསོད་ནམས་ཀྱི་ཕུང་པོ་འདི་ལ་བསོད་ནམས་ཀྱི་ཕུང་པོ་སྔ་མས་བརྒྱའི་ཆར་ཡང་ཉེ་བར་མི་འགྲོ།སྟོང་གི་ཆ་དང༌། འབུམ་གྱི་ཆ་དང༌། གྲངས་དང་ཚད་དང་བགྲང་བ་དང༌། དཔེ་དང་ཟླ་དང་རྒྱུར་ཡང་མི་བཟོད་དོ། །",
 "t16.6": "རབ་འབྱོར་གལ་ཏེ་དེའི་ཚĲ་རིགས་ཀྱི་བུའམ། རིགས་ཀྱི་བུ་མོ་གང་དག་བསོད་ནམས་ཀྱི་ཕུང་པོ་ཇི་སྙེད་རབ་ཏུ་འཛིན་པར་འགྱུར་བའི་རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་དེ་དག་གི་བསོད་ནམས་ཀྱི་ཕུང་པོ་ངས་བརྗོད་ན།སེམས་ཅན་རྣམས་མྱོས་མྱོས་པོར་འགྱུར་ཞིང་སེམས་འཁྲུགས་པར་འགྱུར་རོ། །",
 "t16.7": "ཡང་རབ་འབྱོར་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་བསམ་གྱིས་མི་ཁྱབ་སྟེ། འདིའི་རྣམ་པར་སྨིན་པ་ཡང་བསམ་གྱིས་མི་ཁྱབ་པ་ཉིད་དུ་རིག་པར་བྱའོ། །",
 "t17.1": "དེ་ནས་བཅོམ་ལྡན་འདས་ལ་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་འདི་སྐད་ཅེས་གསོལ་ཏོ། ། བཅོམ་ལྡན་འདས་བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་ཞུགས་པ་རྣམས་ཀྱིས་ཇི་ལྟར་གནས་པར་བགྱི། ཇི་ལྟར་བསྒྲུབ་པར་བགྱི། ཇི་ལྟར་སེམས་རབ་ཏུ་བཟུང་བར་བགྱི།",
 "t17.2": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར། འདི་ལ་བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་ཞུགས་པས་འདི་སྙམ་དུ། བདག་གིས་སེམས་ཅན་ཐམས་ཅད་ཕུང་པོ་ལྷག་མ་མེད་པའི་མྱ་ངན་ལས་འདས་པའི་དབྱིངས་སུ་མྱ་ངན་ལས་བཟླའོ། ། དེ་ལྟར་སེམས་ཅན་ཚད་མེད་པ་ཡོངས་སུ་མྱ་ངན་ལས་འདས་ཀྱང༌། སེམས་ཅན་གང་ཡང་ཡོངས་སུ་མྱ་ངན་ལས་འདས་པར་གྱུར་པ་མེད་དོ། ། སྙམ་དུ་སེམས་བསྐྱེད་པར་བྱའོ། །",
 "t17.3": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་གལ་ཏེ་བྱང་ཆུབ་སེམས་དཔའ་སེམས་ཅན་དུ་འདུ་ཤེས་འཇུག་ན་དེ་བྱང་ཆུབ་སེམས་དཔའ་ཞེས་མི་བྱ་ལ། གང་ཟག་གི་བར་དུ་འདུ་ཤེས་འཇུག་ན་ཡང༌དེ་བྱང་ཆུབ་སེམས་དཔའ་ཞེས་མི་བྱ་བའི་ཕྱིར་རོ། །",
 "t17.4": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་ཞུགས་པ་ཞེས་བྱ་བའི་ཆོས་དེ་གང་ཡང་མེད་པའི་ཕྱིར་རོ། །",
 "t17.5": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པས་དེ་བཞིན་གཤེགས་པ་མར་མེ་མཛད་ལས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་གང་ཡང་ཡོད་སྙམ་མམ།",
 "t17.6": "དེ་སྐད་ཅེས་བཀའ་སྩལ་པ་དང༌། བཅོམ་ལྡན་འདས་ལ་ཚĲ་དང༌ལྡན་པ་རབ་འབྱོར་གྱིས་འདི་སྐད་ཅེས་གསོལ་ཏོ། །བཅོམ་ལྡན་འདས་དེ་བཞིན་གཤེགས་པས་དེ་བཞིན་གཤེགས་པ་མར་མེ་མཛད་ལས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་སོ། །",
 "t17.7": " དེ་སྐད་ཅེས་གསོལ་པ་དང༌། བཅོམ་ལྡན་འདས་ཀྱིས་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། །རབ་འབྱོར་དེ་དེ་བཞིན་ནོ། །དེ་དེ་བཞིན་ཏེ། དེ་བཞིན་གཤེགས་པས་དེ་བཞིན་གཤེགས་པ་མར་མེ་མཛད་ལས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་མེད་དོ། །",
 "t17.8": " རབ་འབྱོར་གལ་ཏེ་དེ་བཞིན་གཤེགས་པས་གང་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་འགའ་ཞིག་ཡོད་པར་གྱུར་ན། །དེ་བཞིན་གཤེགས་པ་མར་མེ་མཛད་ཀྱིས་ང་ལ་བྲམ་ཟེའི་ཁྱེའུ་ཁྱོད་མ་འོངས་པའི་དུས་ན།དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཤཱཀྱ་ཐུབ་པ་ཞེས་བྱ་བར་འགྱུར་རོ། ། ཞེས་ལུང་མི་སྟོན་པ་ཞིག་ན།",
 "t17.9": "རབ་འབྱོར་འདི་ལྟར་དེ་བཞིན་གཤེགས་པས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་མེད་པས་དེའི་ཕྱིར་དེ་བཞིན་གཤེགས་པ་མར་མེ་མཛད་ཀྱིས་ང་ལ་བྲམ་ཟེའི་ཁྱེའུ་ཁྱོད་མ་འོངས་པའི་དུས་ན་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཤཱཀྱ་ཐུབ་པ་ཞེས་བྱ་བར་འགྱུར་རོ་ཞེས་ལུང་བསྟན་ཏོ། །",
 "t17.10": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དེ་བཞིན་གཤེགས་པ་ཞེས་བྱ་བ་ནི། ཡང་དག་པའི་དེ་བཞིན་ཉིད་ཀྱི་ཚིག་བླ་དྭགས་ཡིན་པའི་ཕྱིར་རོ། །",
 "t17.11": "ཡང་རབ་འབྱོར་གང་ལ་ལ་ཞིག་འདི་སྐད་དུ། དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཀྱིས་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་སོ་ཞེས་ཟེར་ན། དེ་ལོག་པར་སྨྲ་བ་ཡིན་ནོ། ། དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དེ་བཞིན་གཤེགས་པས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་མེད་པའི་ཕྱིར་རོ། །",
 "t17.12": "རབ་འབྱོར་དེ་བཞིན་གཤེགས་པས་ཆོས་གང་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའམ། བསྟན་པ་དེ་ལ་བདེན་པའང་མེད། རྫུན་པ་ཡང་མེད་དོ། ། དེ་བས་ན་དེ་བཞིན་གཤེགས་པས་ཆོས་ཐམས་ཅད་སངས་རྒྱས་ཀྱི་ཆོས་ཞེས་གསུངས་སོ། །",
 "t17.13": "རབ་འབྱོར་ཆོས་ཐམས་ཅད་ཅེས་བྱ་བ་ནི། དེ་དག་ཐམས་ཅད་ཆོས་མེད་པ་ཡིན་ཏེ། དེས་ན་ཆོས་ཐམས་ཅད་སངས་རྒྱས་ཀྱི་ཆོས་ཞེས་བྱའོ། །",
 "t17.14": "རབ་འབྱོར་འདི་ལྟ་སྟེ་དཔེར་ན། སྐྱེས་བུ་ཞིག་མིའི་ལུས་དང་ལྡན་ཞིང་ལུས་ཆེན་པོར་གྱུར་པ་བཞིན་ནོ། །",
 "t17.15": "ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་གསོལ་པ། །བཅོམ་ལྡན་འདས་དེ་བཞིན་གཤེགས་པས་སྐྱེས་བུ་མིའི་ལུས་དང་ལྡན་ཞིང་ལུས་ཆེན་པོ་ཞེས་གང་གསུངས་པ་དེ་དེ་བཞིན་གཤེགས་པས་ལུས་མ་མཆིས་པར་གསུངས་ཏེ། དེས་ན་ལུས་དང་ལྡན་ཞིང་ལུས་ཆེན་པོ་ཞེས་བགྱིའོ། །",
 "t17.16": " བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་དེ་བཞིན་ནོ། ། དེ་བཞིན་ཏེ། བྱང་ཆུབ་སེམས་དཔའ་གང་འདི་སྐད་དུ་བདག་གིས་སེམས་ཅན་རྣམས་ཡོངས་སུ་མྱ་ངན་ལས་བཟླའོ་ཞེས་ཟེར་ན། དེ་བྱང་ཆུབ་སེམས་དཔའ་ཞེས་མི་བྱའོ། །",
 "t17.17": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་ཞེས་བྱ་བའི་ཆོས་དེ་གང་ཡང་ཡོད་སྙམ་མམ།",
 "t17.18": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། །",
 "t17.19": " （缺譯）",
 "t17.20": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་བས་ན། དེ་བཞིན་གཤེགས་པས་ཆོས་ཐམས་ཅད་ནི་སེམས་ཅན་མེད་པ། སྲོག་མེད་པ་གང་ཟག་མེད་པའོ་ཞེས་གསུངས་སོ། །",
 "t17.21": "ཡང་རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་གང་ཞིག་འདི་སྐད་དུ། བདག་གིས་ཞིང་བཀོད་པ་རྣམས་བསྒྲུབ་བོ་ཞེས་ཟེར་ན། དེ་ཡང་དེ་བཞིན་དུ་བརྗོད་པར་བྱའོ། །",
 "t17.22": " དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་ཞིང་བཀོད་པ་རྣམས་ཞིང་བཀོད་པ་རྣམས་ཞེས་བྱ་བ་ནི། དེ་དག་བཀོད་པ་མེད་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་ཕྱིར་ཏེ། དེས་ན་ཞིང་བཀོད་པ་རྣམས་ཞེས་བྱའོ། །",
 "t17.23": " རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་གང་ཞིག་འདི་སྐད་དུ། ཆོས་རྣམས་ནི་བདག་མེད་པ་ཆོས་རྣམས་ནི་བདག་མེད་པའོ་ཞེས་མོས་པ་དེ་ནི། དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཀྱིས།བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་ཞེས་བརྗོད་དོ། །",
 "t18.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པ་ལ་ཤའི་སྤྱན་མངའ་སྙམ་མམ།",
 "t18.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་དེ་ལྟར་ལགས་ཏེ། དེ་བཞིན་གཤེགས་པ་ལ་ཤའི་སྤྱན་མངའོ། །",
 "t18.3": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པ་ལ་ལྷའི་སྤྱན་མངའ་སྙམ་མམ།",
 "t18.4": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་དེ་ལྟར་ལགས་ཏེ། དེ་བཞིན་གཤེགས་པ་ལ་ལྷའི་སྤྱན་མངའོ། །",
 "t18.5": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། ། དེ་བཞིན་གཤེགས་པ་ལ་ཤེས་རབ་ཀྱི་སྤྱན་མངའ་སྙམ་མམ།",
 "t18.6": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་དེ་ལྟར་ལགས་ཏེ། དེ་བཞིན་གཤེགས་པ་ལ་ཤེས་རབ་ཀྱི་སྤྱན་མངའ་འོ།།",
 "t18.7": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པ་ལ་ཆོས་ཀྱི་སྤྱན་མངའ་སྙམ་མམ།",
 "t18.8": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་དེ་ལྟར་ལགས་ཏེ། དེ་བཞིན་གཤེགས་པ་ལ་ཆོས་ཀྱི་སྤྱན་མངའོ། །",
 "t18.9": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པ་ལ་སངས་རྒྱས་ཀྱི་སྤྱན་མངའ་སྙམ་མམ།",
 "t18.10": " རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་དེ་ལྟར་ལགས་ཏེ། དེ་བཞིན་གཤེགས་པ་ལ་སངས་རྒྱས་ཀྱི་སྤྱན་མངའ་འོ། །",
 "t18.11": " （缺譯）",
 "t18.12": " （缺譯）",
 "t18.13": "བཅོམ་ལྡན་འདས་ཀྱི་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། གངྒཱའི་ཀླུང་གི་བྱེ་མ་ཇི་སྙེད་པ་གངྒཱའི་ཀླུང་ཡང་དེ་སྙེད་ཁོ་ནར་གྱུར་ལ། དེ་དག་གི་བྱེ་མ་དེ་སྙེད་ཀྱི་འཇིག་རྟེན་གྱི་ཁམས་སུ་གྱུར་ན། འཇིག་རྟེན་གྱི་ཁམས་དེ་དག་མང་བ་ཡིན་སྙམ་མམ།",
 "t18.14": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་དེ་ལྟར་ལགས་ཏེ། འཇིག་རྟེན་གྱི་ཁམས་དེ་དག་མང་ལགས་སོ། །",
 "t18.15": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འཇིག་རྟེན་གྱི་ཁམས་དེ་དག་ན་སེམས་ཅན་ཇི་སྙེད་ཡོད་པ་དེ་དག་གི་བསམ་བ་ཐ་དད་པའི་སེམས་ཀྱི་རྒྱུན་ངས་རབ་ཏུ་ཤེས་སོ། །",
 "t18.16": " དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་སེམས་ཀྱི་རྒྱུན་སེམས་ཀྱི་རྒྱུན་ཞེས་བྱ་བ་ནི། དེ་རྒྱུན་མེད་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་ཕྱིར་ཏེ། དེས་ན་སེམས་ཀྱི་རྒྱུན་ཞེས་བྱའོ། །",
 "t18.17": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་འདས་པའི་སེམས་ཀྱང་དམིགས་སུ་མེད། མ་འོངས་པའི་སེམས་ཀྱང་དམིགས་སུ་མེད། ད་ལྟར་བྱུང་བའི་སེམས་ཀྱང་དམིགས་སུ་མེད་པའི་ཕྱིར་རོ། །",
 "t19.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། གང་གིས་སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་འདི་རིན་པོ་ཆེ་སྣ་བདུན་གྱིས་རབ་ཏུ་གང་བར་བྱས་ཏེ་སྦྱིན་པ་བྱིན་ན། རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་དེ་གཞི་དེ་ལས་བསོད་ནམས་མང་དུ་བསྐྱེད་དམ།",
 "t19.2": " རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས། མང་ལགས་སོ།། བདེ་བར་གཤེསག་པ། མང་ལགས་སོ།།",
 "t19.3": " བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་དེ་བཞིན་ནོ། ། དེ་དེ་བཞིན་ཏེ། རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་དེ་གཞི་དེ་ལས་བསོད་ནམས་ཀྱི་ཕུང་པོ་མང་དུ་བསྐྱེད་དོ། །",
 "t19.4": " ཡང་རབ་འབྱོར་གལ་ཏེ་བསོད་ནམས་ཀྱི་ཕུང་པོ་བསོད་ནམས་ཀྱི་ཕུང་པོར་གྱུར་པ་ན། བསོད་ནམས་ཀྱི་ཕུང་པོ་བསོད་ནམས་ཀྱི་ཕུང་པོ་ཞེས་དེ་བཞིན་གཤེགས་པས་མི་གསུང་ངོ། །",
 "t20.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། གཟུགས་ཀྱི་སྐུ་ཡོངས་སུ་གྲུབ་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་བྱ་སྙམ་མམ།",
 "t20.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། གཟུགས་ཀྱི་སྐུ་ཡོངས་སུ་གྲུབ་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་མི་བགྱི་ལགས་སོ། །",
 "t20.3": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་གཟུགས་ཀྱི་སྐུ་ཡོངས་སུ་གྲུབ་པ་ཞེས་བགྱི་བ་ནི། དེ་ཡོངས་སུ་གྲུབ་པ་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླད་དུ་སྟེ། དེས་ན་གཟུགས་ཀྱི་སྐུ་ཡོངས་སུ་གྲུབ་པ་ཞེས་བགྱིའོ། །",
 "t20.4": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་བྱ་སྙམ་མམ།",
 "t20.5": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་མི་བགྱི་ལགས་སོ། །",
 "t20.6": " དེ་ཅིའི་སླད་དུ་ཞེ་ན། དེ་བཞིན་གཤེགས་པས་མཚན་ཕུན་སུམ་ཚŀགས་པ་གང་གསུངས་པ་དེ། མཚན་ཕུན་སུམ་ཚŀགས་པ་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླང་དུ་སྟེ། དེས་ན་མཚན་ཕུན་སུམ་ཚŀགས་པ་ཞེས་བགྱིའོ། །",
 "t21.1": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པས་འདི་སྙམ་དུ་ངས་ཆོས་བསྟན་ཏོ་ཞེས་དགོངས་སོ་སྙམ་ན།",
 "t21.2": " （缺譯）",
 "t21.3": "རབ་འབྱོར་དེ་དེ་ལྟར་མི་ལྟ་སྟེ། དེ་བཞིན་གཤེགས་པས་གང་བསྟན་པའི་ཆོས་དེ་གང་ཡང་མེད་པའི་ཕྱིར་རོ། །རབ་འབྱོར་སུ་ཞིག་འདི་སྐད་དུ་དེ་བཞིན་གཤེགས་པས་ཆོས་བསྟན་ཏོ་ཞེས་ཟེར་ན། རབ་འབྱོར་དེ་ནི་མེད་པ་དང་ལོག་པར་ཟིན་པས་ང་ལ་སྐུར་བར་འགྱུར་རོ། །",
 "t21.4": " དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་ཆོས་བསྟན་པ་ཞེས་བྱ་བ་ནི། གང་ཆོས་བསྟན་པ་ཆོས་བསྟན་པ་ཞེས་བྱ་བར་དམིགས་པར་འགྱུར་པའི་ཆོས་དེ་གང་ཡང་མེད་པའི་ཕྱིར་རོ། །",
 "t21.5": " དེ་ནས་བཅོམ་ལྡན་འདས་ལ་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་འདི་སྐད་གསོལ་ཏོ། །བཅོམ་ལྡན་འདས་མ་འོངས་པའི་དུས་ན། སེམས་ཅན་གང་དག་འདི་ལྟ་བུའི་ཆོས་བཤད་པ་འདི་ཐོས་ནས། མངོན་པར་ཡིད་ཆེས་པར་འགྱུར་བ་འབྱུང་བ་ལྟ་མཆིས་ལགས་སམ།",
 "t21.6": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་དག་ནི་སེམས་ཅན་ཡང་མ་ཡིན། སེམས་ཅན་མེད་པ་ཡང་མ་ཡིན་ནོ། །",
 "t21.7": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་སེམས་ཅན་རྣམས་ཞེས་བྱ་བ་ནི། དེ་བཞིན་གཤེགས་པས་དེ་དག་སེམས་ཅན་མེད་པར་གསུངས་པའི་ཕྱིར་ཏེ། དེ་བས་ན་སེམས་ཅན་རྣམས་ཞེས་བྱའོ། །",
 "t22.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་ཡོད་སྙམ་མམ།",
 "t22.2": "ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་བཞིན་གཤེགས་པས་གང་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པའི་ཆོས་དེ་གང་ཡང་མ་མཆིས་ལགས་སོ། །",
 "t22.3": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་དེ་བཞིན་ནོ། ། དེ་དེ་བཞིན་ཏེ། དེ་ལ་ཆོས་ཅུང་ཟད་ཀྱང་མི་དམིགས་ཤིད་མེད་དེ། དེས་ན་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཅེས་བྱའོ།།",
 "t23.1": "ཡང་རབ་འབྱོར་ཆོས་དེ་ནི་མཉམ་པ་སྟེ། དེ་ལ་མི་མཉམ་པ་དང་མཉམ་པ་གང་ཡང་མེད་པས། དེས་ན་བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཅེས་བྱའོ། །",
 "t23.2": "བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་དེ་ནི་བདག་མེད་པ་དང༌། སེམས་ཅན་མེད་པ་དང༌། སྲོག་མེད་པ་དང༌། གང་ཟག་མེད་པར་མཉམ་པ་སྟེ། དགེ་བའི་ཆོས་ཐམས་ཅད་ཀྱིས་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་སོ། །",
 "t23.3": "རབ་འབྱོར་དགེ་བའི་ཆོས་རྣམས་ཞེས་བྱ་བ་ནི། དེ་དག་ཆོས་མེད་པ་ཉིད་དུ་དེ་བཞིན་གཤེགས་པས་གསུངས་ཏེ།དེས་ན་དགེ་བའི་ཆོས་རྣམས་ཞེས་བྱའོ། །",
 "t24.1": " ཡང་རབ་འབྱོར་རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་གང་ལ་ལ་ཞིག་གིས་སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་ན་རིའི་རྒྱལ་པོ་རི་རབ་དག་ཇི་སྙད་ཡོད་པ་དེ་ཙམ་གྱི་རིན་པོ་ཆེ་སྣ་བདུན་གྱི་ཕུང་པོ་མངོན་པར་བསྡུས་ཏེ། སྦྱིན་པ་བྱིན་པ་བས།",
 "t24.2": " གང་གིས་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་འདི་ལས་ཐ་ན་ཚིག་བཞི་བའི་ཚིགས་སུ་བཅད་པ་གཅིག་ཙམ་བཟུང་ནས་གཞན་དག་ལ་ཡང་རག་པར་བསྟན་ན། རབ་འབྱོར་བསོད་ནམས་ཀྱི་ཕུང་པོ་འདི་ལ་བསོད་ནམས་ཀྱི་ཕུང་པོ་སྔ་མ་དེས་བརྒྱའི་ཆར་ཡང་ཉེ་བར་མི་ཕོད་བ་ནས་རྒྱུའི་བར་དུ་ཡང་མི་བཟོད་དོ། །",
 "t25.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། དེ་བཞིན་གཤེགས་པས་འདི་སྙམ་དུ་ངས་སེམས་ཅན་རྣམས་བཀྲོལ་ལོ་ཞེས་དགོངས་སོ་སྙམ་ན། རབ་འབྱོར་དེ་ལྟར་མི་བལྟའོ། །",
 "t25.2": " དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དེ་བཞིན་གཤེགས་པས་གང་བཀྲོལ་བའི་སེམས་ཅན་དེ་དེག་གང་ཡང་མེད་པའི་ཕྱིར་རོ། ། རབ་འབྱོར་གལ་ཏེ་དེ་བཞིན་གཤེགས་པས་སེམས་ཅན་གང་ལ་ལ་ཞིག་བཀྲོལ་བར་གྱུར་ན། དེ་ཉིད་དེ་བཞིན་གཤེགས་པས་བདག་ཏུ་འཛིན་པར་འགྱུར། སེམས་ཅན་དུ་འཛིན་པ་དང༌། སྲོག་ཏུ་འཛིན་པ་དང༌།གང་བྲག་ཏུ་འཛིན་པར་འགྱུར་རོ། །",
 "t25.3": "རབ་འབྱོར་བདག་ཏུ་འཛིན་ཅེས་བྱ་བ་ནི། འཛིན་པར་མེད་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་ན། དེ་ཡང་བྱིས་པ་སོ་སོའ ི་སྐྱེ་བོ་རྣམས་ཀྱིས་གཟུང་ངོ། །",
 "t25.4": "རབ་འབྱོར་བྱིས་པ་སོ་སོའ ི་སྐྱེ་བོ་རྣམས་ཞེས་བྱ་བ་ནི། དེ་དག་སྐྱེ་བོ་མེད་པ་ཉིད་དུ་དེ་བཞིན་གཤེགས་པས་གསུངས་ཏེ། དེས་ན་བྱིས་པ་སོ་སོའ ི་སྐྱེ་བོ་རྣམས་ཞེས་བྱའོ།",
 "t26.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། མཚན་ཕུན་གསུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་བྱ་སྙམ་མམ།",
 "t26.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་མི་བགྱི་ལགས་སོ།",
 "t26.3": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་དེ་དེ་བཞིན་ནོ།། དེ་དེ་བཞིན་ཏེ། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་མི་བྱ་སྟེ། རབ་འབྱོར་གལ་ཏེ་མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་འགྱུར་ན། འཁོར་ལོས་སྒྱུར་བའི་རྒྱལ་པོ་ཡང་དེ་བཞིན་གཤེགས་པར་འགྱུར་ཏེ། དེ་བས་ན་མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་མི་བྱའོ། །",
 "t26.4": "དེ་ནས་བཅོམ་ལྡན་འདས་ལ་ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་འདི་སྐད་ཅེས་གསོལ་ཏོ། ། བཅོམ་ལྡན་འདས་བདག་གིས་ཇི་ལྟར་བཅོམ་ལྡན་འདས་ཀྱིས་གསུངས་པའི་དོན་འཚལ་བ་ལྟར་ན། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པར་བལྟ་བར་མི་བགྱི་ལགས་སོ། །",
 "t26.5": "དེ་ནས་བཅོམ་ལྡན་འདས་ཀྱིས་དེའི་ཚĲ་ཚིགས་སུ་བཅད་པ་འདི་དག་བཀའ་སྩལ་ཏོ། །",
 "t26.6": "གང་དག་ང་ལ་གཟུགས་སུ་མཐོང༌། ། གང་དག་ང་ལ་སྒྲར་ཤེས་པ། ། ལོག་པའི་ལམ་དུ་ཞུགས་པ་སྟེ། ། སྐྱེ་བོ་དེ་དག་ང་མི་མཐོང༌།།",
 "t26.7": "སངས་རྒྱས་རྣམས་ནི་ཆོས་ཉིད་ལྟ། ། འདྲེན་པ་རྣམས་ནི་ཆོས་ཀྱི་སྐུ། ། ཆོས་ཉིད་ཤེས་པར་བྱ་མིན་པས། ། དེ་ནི་རྣམ་པར་ཤེས་མི་ནུས། །",
 "t27.1": "རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་སོ་སྙམ་དུ་འཛིན་ན།",
 "t27.2": "རབ་འབྱོར་ཁྱོད་ཀྱིས་དེ་ལྟར་བལྟ་བར་མི་བྱ་སྟེ། རབ་འབྱོར་མཚན་ཕུན་སུམ་ཚŀགས་པས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་མངོན་པར་རྫོགས་པར་སངས་རྒྱས་པ་མེད་དོ། །",
 "t27.3": "རབ་འབྱོར་ཁྱོད་འདི་སྙམ་དུ་བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་ཞུགས་པ་རྣམས་ཀྱིས། ཆོས་གང་ལ་ལ་ཞིག་རྣམ་པར་ཤིག་པའམ། ཆད་པར་བཏགས་པའོ་སྙམ་དུ་འཛིན་ན། རབ་འབྱོར་དེ་དེ་ལྟར་བལྟ་བར་མི་བྱ་སྟེ།",
 "t27.4": "བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་ཞུགས་པ་རྣམས་ཀྱིས། ཆོས་གང་ཡང་རྣམ་པར་བཤིག་པའམ།ཆད་པར་བཏགས་པ་མེད་དོ། །",
 "t28.1": " ཡང་རབ་འབྱོར་རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་གང་གིས་འཇིག་རྟེན་གྱི་ཁམས་གངྒཱའི་ཀླུང་གི་བྱེ་མ་སྙེད་དག་རིན་པོ་ཆེ་སྣ་བདུན་གྱིས་རབ་ཏུ་གང་བར་བྱས་ཏེ་སྦྱིན་པ་བྱིན་པ་བས།",
 "t28.2": "བྱང་ཆུབ་སེམས་དཔའ་གང་གིས་ཆོས་ཀྱི་རྣམ་གྲངས་འདི་བདག་མེད་ཅིང་སྐྱེ་བ་མེད་པ་ལ་བཟོད་པ་ཐོབ་ན།དེ་ཉིད་གཞི་དེ་ལས་བསོད་ནམས་ཀྱི་ཕུང་པོ་ཆེས་མང་དུ་གྲངས་མེད་དཔག་ཏུ་མེད་པ་བསྐྱེད་དོ། །",
 "t28.3": "ཡང་རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔས་བསོད་ནམས་ཀྱི་ཕུང་པོ་ཡོངས་སུ་གཟུང་བར་མི་བྱའོ། །",
 "t28.4": "ཚĲ་དང་ལྡན་པ་རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་བྱང་ཆུབ་སེམས་དཔས་བསོད་ནམས་ཀྱི་ཕུང་པོ་ཡོངས་སུ་གཟུང་བར་མི་བགྱི་ལགས་སམ།",
 "t28.5": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་ཡོངས་སུ་གཟུང་མོད་ཀྱིས། ལོག་པར་མི་བཟུང་སྟེ་དེས་ན་ཡོངས་སུ་གཟུང་བ་ཞེས་བྱའོ། །",
 "t29.1": "ཡང་རབ་འབྱོར་གང་ལ་ལ་ཞིག་འདི་སྐད་དུ། དེ་བཞིན་གཤེགས་པ་བཞུད་དམ། བྱོན་ཏམ། བཞེངས་སམ།བཞུགས་སམ། མནལ་བར་མཛད་དོ་ཞེས་ཟེར་ན། དེས་ངས་བཤད་པའི་དོན་མི་ཤེས་སོ། །",
 "t29.2": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་དེ་བཞིན་གཤེགས་པ་ཞེས་བྱ་བ་ནི། གར་ཡང་མ་བཞུད། གང་ནས་ཀྱང་མ་བྱོན་པའི་ཕྱིར་ཏེ། དེས་ན་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཞེས་བྱའོ། །",
 "t30.1": "ཡང་རབ་འབྱོར་རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་གང་ལ་ལ་ཞིག་གིས། སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་ན་སའི་རྡུལ་ཇི་སྙེད་ཡོད་པ་དེ་དག་འདི་ལྟ་སྟེ། དཔེར་ན་རྡུལ་ཕྲ་རབ་ཀྱི་ཚŀགས་བཞིན་དུ་ཕྱེ་མར་བྱས་ན། རབ་འབྱོར་འདི་ཇི་སྙམ་དུ་སེམས། རྡུལ་ཕྲ་རབ་ཀྱི་ཚŀགས་དེ་མང་བ་ཡིན་སྙམ་མམ།",
 "t30.2": " རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་དེ་ལྟར་ལགས་ཏེ། རྡུལ་ཕྲ་རབ་ཀྱི་ཚŀགས་དེ་མང་བ་ལགས་སོ། །",
 "t30.3": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་གལ་ཏེ་རྡུལ་ཕྲ་རབ་ཀྱི་ཚŀགས་ཤིག་མཆིས་པར་གྱུར་ན། བཅོམ་ལྡན་འདས་ཀྱིས་རྡུལ་ཕྲ་རབ་ཀྱི་ཚŀགས་ཞེས་བཀའ་མི་སྩོལ་བའི་སླད་དུའོ། །",
 "t30.4": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་ཀྱི་རྡུལ་ཕྲ་རབ་ཀྱི་ཚŀགས་ཞེས་གང་གསུངས་པ་དེ་ཚŀགས་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླད་དུ་སྟེ། དེས་ན་རྡུལ་ཕྲ་རབ་ཀྱི་ཚŀགས་ཞེས་བགྱིའོ།།",
 "t30.5": "དེ་བཞིན་གཤེགས་པས་སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་ཞེས་གང་གསུངས་པ་དེ་ཁམས་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་ཏེ། དེས་ན་སྟོང་གསུམ་གྱི་སྟོང་ཆེན་པོའ ི་འཇིག་རྟེན་གྱི་ཁམས་ཞེས་བགྱིའོ། །",
 "t30.6": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་གལ་ཏེ་འཇིག་རྟེན་གྱི་ཁམས་ཤིག་མཆིས་པར་གྱུར་ན། དེ་ཉིད་རིལ་པོར་འཛིན་པར་འགྱུར་བའི་སླད་དུའོ།། དེ་བཞིན་གཤེགས་པས་རིལ་པོར་འཛིན་པར་གསུངས་པ་དེ་འཛིན་པ་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླད་དུ་སྟེ། དེས་ན་རིལ་པོར་འཛིན་པ་ཞེས་བགྱིའོ། །",
 "t30.7": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་རིལ་པོར་འཛིན་པ་ཉིད་ནི་ཐ་སྙད་དེ། ཆོས་དེ་ནི་བརྗོད་དུ་མེད་པ་ཡིན་ནོ། ། དེ་ཡང་བྱིས་པ་སོ་སོའ ི་སྐྱེ་བོ་རྣམས་ཀྱིས་གཟུང་ངོ་། །",
 "t31.1": "རབ་འབྱོར་གང་ལ་ལ་ཞིག་འདི་སྐད་དུ། དེ་བཞིན་གཤེགས་པས་བདག་ཏུ་ལྟ་བར་གསུངས། དེ་བཞིན་གཤེགས་པས་སེམས་ཅན་དུ་ལྟ་བ་དང༌། སྲོག་ཏུ་ལྟ་བ་དང༌། གང་ཟག་ཏུ་ལྟ་བར་གསུངས་སོ་ཞེས་ཟེར་ན་དེ་ཡང་དག་པས་སྨྲ་པས་སྨྲ་བ་ཡིན་ནམ།",
 "t31.2": "རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། བདེ་བར་གཤེགས་པ་དེ་ནི་མ་ལགས་སོ།།",
 "t31.3": "དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་དེ་བཞིན་གཤེགས་པས་བདག་ཏུ་ལྟ་བར་གང་གསུངས་པ་དེ་ནི་ལྟ་བ་མ་མཆིས་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་སླད་དུ་སྟེ། དེས་ན་བདག་ཏུ་ལྟ་བ་ཞེས་བགྱིའོ། །",
 "t31.4": "བཅོམ་ལྡན་འདས་ཀྱིས་བཀའ་སྩལ་པ། རབ་འབྱོར་འདི་ལ་བྱང་ཆུབ་སེམས་དཔའི་ཐེག་པ་ལ་ཡང་དག་པར་ཞུགས་པས། འདི་ལྟར་ཆོས་ཐམས་ཅད་ཤེས་པར་བྱ། ལྟ་བར་བྱ། མོས་པར་བྱ་སྟེ། ཅི་ནས་ཆོས་སུ་འདུ་ཤེས་པ་ལ་མི་གནས་པར་ཤེས་པར་བྱའོ། །",
 "t31.5": "དེ་ཅིའི་ཕྱིར་ཞེ་ན། རབ་འབྱོར་ཆོས་སུ་འདུ་ཤེས་ཆོས་སུ་འདུ་ཤེས་ཞེས་བྱ་བ་ནི། དེ་འདུ་ཤེས་མེད་པར་དེ་བཞིན་གཤེགས་པས་གསུངས་པའི་ཕྱིར་ཏེ། དེས་ན་ཆོས་སུ་འདུ་ཤེས་ཆོས་སུ་འདུ་ཤེས་ཞེས་བྱའོ། །",
 "t32.1": "ཡང་རབ་འབྱོར་བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ་གང་གིས་འཇིག་རྟེན་གྱི་ཁམས་དཔག་ཏུ་མེད་ཅིང་གྲངས་མེད་པ་དག་རིན་པོ་ཆེ་སྣ་བདུན་གྱིས་རབ་ཏུ་གང་བར་བྱས་ཏེ་སྦྱིན་པ་བྱིན་པ་བས།",
 "t32.2": "རིགས་ཀྱི་བུའམ་རིགས་ཀྱི་བུ་མོ་གང་གིས་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་འདི་ལས་ཐ་ན་ཚིག་བཞི་པའི་ཚིགས་སུ་བཅད་པ་ཙམ་བྲིས་ནས་འཛིན་ཏམ། འཆང་ངམ། ཀློག་གམ། ཀུན་ཆུབ་པར་བྱེད་དམ། གཞན་དག་ལ་རྒྱ་ཆེར་ཡང་དག་པར་རབ་ཏུ་སྟོན་ན་དེ་ཉིད་གཞི་དེ་ལས་བསོད་ནམས་ཆེས་མང་དུ་གྲངས་མེད་དཔག་ཏུ་མེད་པ་བསྐྱེད་དོ། །",
 "t32.3": "ཇི་ལྟར་ཡང་དག་པར་རབ་ཏུ་སྟོན་ཅེ་ན། ཇི་ལྟར་ཡང་དག་པར་རབ་ཏུ་མི་སྟོན་པ་དེ་བཞིན་དུ་ཡང་དག་པར་རབ་ཏུ་སྟོན་པ་སྟེ། དེས་ན་ཡང་དག་པར་རབ་ཏུ་སྟོན་པ་ཞེས་བྱའོ། །",
 "t32.4": "སྐར་མ་རབ་རིབ་མར་མེ་དང༌། ། སྒྱུ་མ་ཟིལ་པ་ཆུ་བུར་དང༌། ། རྨི་ལམ་གློག་དང་སྤྲིན་ལྟ་བུ། ། འདུ་བྱས་ཐམས་ཅད་དེ་ལྟར་ལྟ། །",
 "t32.5": "བཅོམ་ལྡན་འདས་ཀྱིས་དེ་སྐད་ཅེས་བཀའ་སྩལ་ནས། གནས་བརྟན་རབ་འབྱོར་དང༌། དགེ་སློང་དེ་དག་དང༌།བྱང་ཆུབ་སེམས་དཔའ་དེ་དག་དང༌། འཁོར་བཞི་པོ་དགེ་སློང་དང༌། དགེ་སློང་མ་དང༌། དགེ་བསྙེན་དང༌། དགེ་བསྙེན་མ་དང༌། ལྷ་དང༌། མི་དང་། ལྷ་མ་ཡིན་དང༌། དྲི་ཟར་བཅས་བའི་འཇིག་རྟེན་ཡི་རངས་ཏེ། བཅོམ་ལྡན་འདས་ཀྱིས་གསུངས་པ་ལ་མངོན་པར་བསྟོད་དོ།། །། ",
 "t32.6": "འཕགས་པ་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པ་རྡོ་རྗེ་གཅོད་པ་ཞེས་བྱ་བ་ཐེག་པ་ཆེན་པོའ ི་མདོ་རྫོགས་སོ།། །།",
 "x0.0": "能断金剛般若波羅蜜多經",
 "x0.1": "羽唐三藏法師玄奘譯",
 "x1.1": "如是我聞一時",
 "x1.2": "薄伽梵在室羅筏住誓多林給孤獨園與大苾蒭眾千二百五十人俱",
 "x1.3": "尒時世尊於日初分整理常服執持衣鉢入室羅筏大城乞食",
 "x1.4": "時薄伽梵於其城中行乞食已出還本處飯食訖收衣鉢洗足已於食後時敷如常座結加趺坐端身正願住對面念",
 "x1.5": "時諸苾蒭來詣佛所到已頂禮世尊雙足右遶三匝退坐一面",
 "x2.1": "具壽善現亦於如是眾會中坐。",
 "x2.2": "尒時眾中具壽善現從座而起偏袒一肩右膝著地合掌恭敬而白佛言",
 "x2.3": "希有世尊乃至如來應正等覺能以㝡勝攝受攝受諸菩薩摩訶薩乃至如來應正等覺能以㝡勝付囑付囑諸菩薩摩訶薩",
 "x2.4": "世尊諸有發趣菩薩乘者應云何住云何修行云何攝伏其心",
 "x2.5": "作是語已。尒時世尊告具壽善現曰善哉善哉善現如是如是如汝所說",
 "x2.6": "乃至如來應正等覺能以㝡勝攝受攝受諸菩薩摩訶薩乃至如來應正等覺能以㝡勝付囑付囑諸菩薩摩訶薩",
 "x2.7": "是故善現汝應諦聽極善作意吾當為汝分別解說諸有發趣菩薩乘者應如是住如是修行如是攝伏其心",
 "x2.8": "具壽善現白佛言如是世尊願樂欲聞。",
 "x3.1": "佛言善現諸有發趣菩薩乘者應當發起如是之心",
 "x3.2": "所有諸有情有情攝所攝若卵生若胎生若濕生若化生若有色若無色若有想若無想若非有想非無想乃至有情界施設所施設如是一切我當皆令於無餘依妙涅槃界而般涅槃",
 "x3.3": "雖度如是無量有情令滅度已而無有情得滅度者",
 "x3.4": "何以故善現若諸菩薩摩訶薩有情想轉不應說名菩薩摩訶薩",
 "x3.5": "所以者何善現若諸菩薩摩訶薩不應說言有情想轉如是命者想士夫想補特伽羅想意生想摩納婆想作者想受者想轉當知亦尒何以故善現無有少法名為發趣菩薩乘者。",
 "x4.1": "復次善現菩薩摩訶薩不住於事應行布施都無所住應行布施",
 "x4.2": "不住於色應行布施不住聲香味觸法應行布施",
 "x4.3": "善現如是菩薩摩訶薩如不住相想應行布施",
 "x4.4": "何以故善現若菩薩摩訶薩都無所住而行布施其福德聚不可取量",
 "x4.5": "佛告善現於汝意云何東方虛空可取量不",
 "x4.6": "善現答言不也世尊",
 "x4.7": "善現如是南西北方四維上下周遍十方一切世界虛空可取量不",
 "x4.8": "善現答言不也世尊",
 "x4.9": "佛言善現如是如是若菩薩摩訶薩都無所住而行布施其福德聚不可取量亦復如是",
 "x4.10": "善現菩薩如是如不住相想應行布施。",
 "x5.1": "佛告善現於汝意云何可以諸相具足觀如來不",
 "x5.2": "善現答言不也世尊不應以諸相具足觀於如來",
 "x5.3": "何以故如來說諸相具足即非諸相具足",
 "x5.4": "說是語已佛復告具壽善現言",
 "x5.5": "善現乃至諸相具足皆是虛妄乃至非相具足皆非虛妄如是以相非相應觀如來",
 "x6.1": "說是語已具壽善現復白佛言",
 "x6.2": "世尊頗有有情於當來世後時後分後五百歲正法將滅時分轉時聞說如是色經典句生實想不",
 "x6.3": "佛告善現勿作是說頗有有情於當來世後時後分後五百歲正法將滅時分轉時聞說如是色經典句生實想不",
 "x6.4": "然復善現有菩薩摩訶薩於當來世後時後分後五百歲正法將滅時分轉時具足尸羅具德具慧",
 "x6.5": "（缺譯）",
 "x6.6": "復次善現彼菩薩摩訶薩非於一佛所承事供養非於一佛所種諸善根",
 "x6.7": "然復善現彼菩薩摩訶薩於其非一百千佛所承事供養於其非一百千佛所種諸善根",
 "x6.8": "乃能聞說如是色經典句當得一淨信心",
 "x6.9": "善現如來以其佛智悉已知彼如來以其佛眼悉已見彼善現如來悉已覺彼一切有情當生無量無數福聚當攝無量無數福聚",
 "x6.10": "何以故善現彼菩薩摩訶薩無我想轉無有情想無命者想無士夫想無補特伽羅想无意生想無摩納婆想無作者想無受者想轉",
 "x6.11": "善現彼菩薩摩訶薩無法想轉無非法想轉無想轉亦無非想轉",
 "x6.12": "所以者何善現若菩薩摩訶薩有法想轉彼即應有我執有情執命者執補特伽羅等執",
 "x6.13": "若有非法想轉彼亦應有我執有情執命者執補特伽羅等執",
 "x6.14": "何以故善現不應取法不應取非法",
 "x6.15": "是故如來密意而說筏喻法門諸有智者法尚應断何况非法。",
 "x7.1": "佛復告具壽善現言",
 "x7.2": "善現於汝意云何頗有少法如來應正等覺證得阿耨多羅三藐三菩提耶頗有少法如來應正等覺是所說耶",
 "x7.3": "善現答言世尊如我解佛所說義者無有少法如來應正等覺證得阿耨多羅三藐三菩提亦無有少法是如來應正等覺所說",
 "x7.4": "何以故世尊如來應正等覺所證所說所思惟法皆不可取不可宣說非法非非法",
 "x7.5": "何以故以諸賢聖補特伽羅皆是無為之所顯故。",
 "x8.1": "佛告善現於汝意云何若善男子或善女人以此三千大千世界盛滿七寶持用布施是善男子或善女人由此因緣所生福聚寧為多不",
 "x8.2": "善現答言甚多世尊甚多善逝是善男子或善女人由此因緣所生福聚其量甚多",
 "x8.3": "何以故世尊福德聚福德聚者如來說為非福德聚是故如來說名福德聚福德聚。",
 "x8.4": "佛復告善現言善現若善男子或善女人以此三千大千世界盛滿七寶持用布施",
 "x8.5": "若善男子或善女人於此法門乃至四句伽他受持讀誦究竟通利及廣為他宣說開示如理作意由是因緣所生福聚甚多於前無量無數",
 "x8.6": "何以故一切如來應正等覺阿耨多羅三藐三菩提皆從此經出諸佛世尊皆從此經生",
 "x8.7": "所以者何善現諸佛法諸佛法者如來說為非諸佛法是故如來說名諸佛法諸佛法。",
 "x9.1": "佛告善現於汝意云何諸預流者頗作是念我能證得預流果不",
 "x9.2": "善現答言不也世尊諸預流者不作是念我能證得預流之果何以故世尊諸預流者無少所預故名預流不預色聲香味觸法故名預流",
 "x9.3": "世尊若預流者作如是念我能證得預流之果即為執我有情命者士夫補特伽羅等",
 "x9.4": "佛告善現於汝意云何諸一來者頗作是念我能證得一來果不",
 "x9.5": "善現答言不也世尊諸一來者不作是念我能證得一來之果何以故世尊以無少法證一來性故名一來",
 "x9.6": "佛告善現於汝意云何諸不還者頗作是念我能證得不還果不",
 "x9.7": "善現答言不也世尊諸不還者不作是念我能證得不還之果何以故世尊以無少法證不還性故名不還",
 "x9.8": "佛告善現於汝意云何諸阿羅漢頗作是念我能證得阿羅漢不",
 "x9.9": "善現答言不也世尊諸阿羅漢不作是念我能證得阿羅漢性何以故世尊以無少法名阿羅漢由是因緣名阿羅漢世尊若阿羅漢作如是念我能證得阿羅漢性即為執我有情命者士夫補特伽羅等",
 "x9.10": "所以者何世尊如來應正等覺說我得無諍住㝡為第一世尊我雖是阿羅漢永離貪欲而我未曾作如是念我得阿羅漢永離貪欲",
 "x9.11": "世尊我若作如是念我得阿羅漢永離貪欲者如來不應記說我言善現善男子得無諍住㝡為第一以都無所住是故如來說名無諍住無諍住。",
 "x10.1": "佛告善現於汝意云何如來昔在然燈如來應正等覺所頗於少法有所取不",
 "x10.2": "善現答言不也世尊如來昔在然燈如來應正等覺所都無少法而有所取",
 "x10.3": "佛告善現若有菩薩作如是言我當成辦佛土功德莊嚴如是菩薩非真實語",
 "x10.4": "何以故善現佛土功德莊嚴佛土功德莊嚴者如來說非莊嚴是故如來說名佛土功德莊嚴佛土功德莊嚴",
 "x10.5": "是故善現菩薩如是都無所住應生其心不住於色應生其心不住非色應生其心不住聲香味觸法應生其心不住非聲香味觸法應生其心都無所住應生其心。",
 "x10.6": "佛告善現如有士夫具身大身其色自體假使譬如妙高山王善現於汝意云何彼之自體為廣大不",
 "x10.7": "善現答言彼之自體廣大世尊廣大善逝何以故世尊彼之自體如來說非彼體故名自體非以彼體故名自體。",
 "x11.1": "佛告善現於汝意云何乃至殑伽河中所有沙數假使有如是沙等殑伽河是諸殑伽河沙寧為多不",
 "x11.2": "善現答言甚多世尊甚多善逝諸殑伽河尚多無數何况其沙",
 "x11.3": "佛言善現吾今告汝開覺於汝假使若善男子或善女人以妙七寶盛滿尒所殑伽河沙等世界奉施如來應正等覺善現於汝意云何是善男子或善女人由此因緣所生福聚寧為多不",
 "x11.4": "善現答言甚多世尊甚多善逝是善男子或善女人由此因緣所生福聚其量甚多。",
 "x11.5": "佛復告善現若以七寶盛滿尒所沙等世界奉施如來應正等覺若善男子或善女人於此法門乃至四句伽他受持讀誦究竟通利及廣為他宣說開示如理作意由此因緣所生福聚甚多於前無量無數。",
 "x12.1": "復次善現若地方所於此法門乃至為他宣說開示四句伽他此地方所尚為世間諸天及人阿素洛等之所供養如佛靈廟",
 "x12.2": "何况有能於此法門具足究竟書寫受持讀誦究竟通利及廣為他宣說開示如理作意",
 "x12.3": "如是有情成就㝡勝希有功德此地方所大師所住或隨一一尊重處所若諸有智同梵行者",
 "x13.1": "說是語已。具壽善現復白佛言世尊當何名此法門我當云何奉持",
 "x13.2": "作是語已佛告善現言具壽今此法門名為能断般若波羅蜜多如是名字汝當奉持何以故善現如是般若波羅蜜多如來說為非般若波羅蜜多是故如來說名般若波羅蜜多。",
 "x13.3": "佛告善現於汝意云何頗有少法如來可說不",
 "x13.4": "善現答言不也世尊無有少法如來可說",
 "x13.5": "佛告善現乃至三千大千世界大地微塵寧為多不",
 "x13.6": "善現答言此地微塵甚多世尊甚多善逝。",
 "x13.7": "佛言善現大地微塵如來說非微塵是故如來說名大地微塵諸世界如來說非世界是故如來說名世界。",
 "x13.8": "佛告善現於汝意云何應以三十二大士夫相觀於如來應正等覺不",
 "x13.9": "善現答言不也世尊不應以三十二大士夫相觀於如來應正等覺何以故世尊三十二大士夫相如來說為非相是故如來說名三十二大士夫相。",
 "x13.10": "佛復告善現言假使若有善男子或善女人於日日分捨施殑伽河沙等自體如是經殑伽河沙等劫數捨施自體復有善男子或善女人於此法門乃至四句伽他受持讀誦究竟通利及廣為他宣說開示如理作意由是因緣所生福聚甚多於前无量無數。",
 "x14.1": "尒時具壽善現聞法威力悲泣墮淚俛仰捫淚而白佛言",
 "x14.2": "甚奇希有世尊㝡極希有善逝如來今者所說法門普為發趣㝡上乘者作諸義利普為發趣㝡勝乘者作諸義利世尊我昔生智以來未曾得聞如是法門",
 "x14.3": "世尊若諸有情聞說如是甚深經典生真實想當知成就㝡勝希有何以故世尊諸真實想真實想者如來說為非想是故如來說名真實想真實想",
 "x14.4": "世尊我今聞說如是法門領悟信解未為希有若諸有情於當來世後時後分後五百歲正法將滅時分轉時當於如是甚深法門領悟信解受持讀誦究竟通利及廣為他宣說開示如理作意當知成就㝡勝希有",
 "x14.5": "何以故世尊彼諸有情無我想轉無有情想無命者想無士夫想無補特伽羅想無意生想無摩納婆想無作者想無受者想轉",
 "x14.6": "所以者何世尊諸我想即是非想諸有情想命者想士夫想補特伽羅想意生想摩納婆想作者想受者想即是非想",
 "x14.7": "何以故諸佛世尊離一切想作是語已。尒時世尊告具壽善現言",
 "x14.8": "如是如是善現若諸有情聞說如是甚深經典不驚不懼無有怖畏當知成就㝡勝希有",
 "x14.9": "何以故善現如來說㝡勝波羅蜜多謂般若波羅蜜多善現如來所說㝡勝波羅蜜多無量諸佛世尊所共宣說故名㝡勝波羅蜜多如來說㝡勝波羅蜜多即非波羅蜜多是故如來說名㝡勝波羅蜜多。",
 "x14.10": "復次善現如來說忍辱波羅蜜多即非波羅蜜多是故如來說名忍辱波羅蜜多",
 "x14.11": "何以故善現我昔過去世曾為羯利王断支節肉我於尒時都無我想或有情想或命者想或士夫想或補特伽羅想或意生想或摩納婆想或作者想或受者想我於尒時都無有想亦非無想",
 "x14.12": "何以故善現我於尒時若有我想即於尒時應有恚想我於尒時若有有情想命者想士夫想補特伽羅想意生想摩納婆想作者想受者想即於尒時應有恚想",
 "x14.13": "何以故善現我憶過去五百生中曾為自號忍辱仙人我於尒時都无我想無有情想無命者想無士夫想无補特伽羅想無意生想無摩納婆想無作者想無受者想我於尒時都無有想亦非無想",
 "x14.14": "是故善現菩薩摩訶薩遠離一切想應發阿耨多羅三藐三菩提心不住於色應生其心不住非色應生其心不住聲香味觸法應生其心不住非聲香味觸法應生其心都無所住應生其心",
 "x14.15": "何以故善現諸有所住則為非住是故如來說諸菩薩應無所住而行布施不應住色聲香味觸法而行布施。",
 "x14.16": "復次善現菩薩摩訶薩為諸有情作義利故應當如是棄捨布施",
 "x14.17": "何以故善現諸有情想即是非想一切有情如來即說為非有情",
 "x14.18": "善現如來是實語者諦語者如語者不異語者。",
 "x14.19": "復次善現如來現前等所證法或所說法或所思法即於其中非諦非妄",
 "x14.20": "善現譬如士夫入於闇室都無所見當知菩薩若墮於事謂墮於事而行布施亦復如是",
 "x14.21": "善現譬如明眼士夫過夜曉已日光出時見種種色當知菩薩不墮於事謂不墮事而行布施亦復如是。",
 "x14.22": "復次善現若善男子或善女人於此法門受持讀誦究竟通利及廣為他宣說開示如理作意則為如來以其佛智悉知是人則為如來以其佛眼悉見是人則為如來悉覺是人如是有情一切當生無量福聚。",
 "x15.1": "復次善現假使善男子或善女人日初時分以殑伽河沙等自體布施日中時分復以殑伽河沙等自體布施日後時分亦以殑伽河沙等自體布施由此異門經於俱𦙁𨚗𢈔多百千劫以自體布施",
 "x15.2": "若有聞說如是法門不生誹謗由此因緣所生福聚尚多於前無量無數何况能於如是法門具足畢竟書寫受持讀誦究竟通利及廣為他宣說開示如理作意",
 "x15.3": "復次善現如是法門不可思議不可稱量應當悕冀不可思議所感異熟",
 "x15.4": "善現如來宣說如是法門為欲饒益趣㝡上乘諸有情故為欲饒益趣㝡勝乘諸有情故",
 "x15.5": "善現若有於此法門受持讀誦究竟通利及廣為他宣說開示如理作意即為如來以其佛智悉知是人即為如來以其佛眼悉見是人則為如來悉覺是人",
 "x15.6": "如是有情一切成就無量福聚皆當成就不可思議不可稱量无邊福聚善現如是一切有情其肩荷擔如來無上正等菩提",
 "x15.7": "何以故善現如是法門非諸下劣信解有情所能聽聞非諸我見非諸有情見非諸命者見非諸士夫見非諸補特伽羅見非諸意生見非諸摩納婆見非諸作者見非諸受者見所能聽聞此等若能受持讀誦究竟通利及廣為他宣說開示如理作意無有是處。",
 "x15.8": "復次善現若地方所開此經典此地方所當為世間諸天及人阿素洛等之所供養禮敬右遶如佛靈廟。",
 "x16.1": "復次善現若善男子或善女人於此經典受持讀誦究竟通利及廣為他宣說開示如理作意若遭輕毀極遭輕毀",
 "x16.2": "所以者何善現是諸有情宿生所造諸不淨業應感惡趣以現法中遭輕毀故宿生所造諸不淨業皆悉消盡當得無上正等菩提",
 "x16.3": "何以故善現我憶過去於無數劫復過無數於然燈如來應正等覺先復過先曾值八十四俱𦙁𨚗𢈔多百千諸佛我皆承事既承事已皆無違犯善現我於如是諸佛世尊皆得承事既承事已皆無違犯",
 "x16.4": "若諸有情後時後分後五百歲正法將滅時分轉時於此經典受持讀誦究竟通利及廣為他宣說開示如理作意",
 "x16.5": "善現我先福聚於此福聚百分計之所不能及如是千分若百千分若俱𦙁百千分若俱𦙁𨚗𢈔多百千分若數分若計分若筭分若喻分若鄔波尼煞曇分亦不能及",
 "x16.6": "善現我若具說當於尒時是善男子或善女人所生福聚乃至是善男子是善女人所攝福聚有諸有情則便迷悶心或狂亂",
 "x16.7": "是故善現如來宣說如是法門不可思議不可稱量應當悕冀不可思議所感異熟",
 "x17.1": "尒時具壽善現復白佛言世尊諸有發趣菩薩乘者應云何住云何修行云何攝伏其心。",
 "x17.2": "佛告善現諸有發趣菩薩乘者應當發起如是之心我當皆令一切有情於無餘依妙涅槃界而般涅槃雖度如是一切有情令滅度已而無有情得滅度者",
 "x17.3": "何以故善現若諸菩薩摩訶薩有情想轉不應說名菩薩摩訶薩所以者何若諸菩薩摩訶薩不應說言有情想轉如是命者想士夫想補特伽羅想意生想摩納婆想作者想受者想轉當知亦尒",
 "x17.4": "何以故善現無有少法名為發趣菩薩乘者。",
 "x17.5": "佛告善現於汝意云何如來昔於然燈如來應正等覺所頗有少法能證阿耨多羅三藐三菩提不",
 "x17.6": "作是語已具壽善現白佛言世尊如我解佛所說義者如來昔於然燈如來應正等覺所無有少法能證阿耨多羅三藐三菩提",
 "x17.7": "說是語已佛告具壽善現言如是如是善現如來昔於然燈如來應正等覺所無有少法能證阿耨多羅三藐三菩提",
 "x17.8": "何以故善現如來昔於然燈如來應正等覺所若有少法能證阿耨多羅三藐三菩提者然燈如來應正等覺不應授我記言汝摩納婆於當來世名釋迦牟尼如來應正等覺",
 "x17.9": "善現以如來無有少法能證阿耨多羅三藐三菩提是故然燈如來應正等覺授我記言汝摩納婆於當來世名釋迦牟尼如來應正等覺",
 "x17.10": "所以者何善現言如來者即是真實真如增語言如來者即是無生法性增語言如來者即是永断道路增語言如來者即是畢竟不生增語何以故善現若實無生即㝡勝義",
 "x17.11": "善現若如是說如來應正等覺能證阿耨多羅三藐三菩提者當知此言為不真實所以者何善現由彼謗我起不實執何以故善現無有少法如來應正等覺能證阿耨多羅三藐三菩提",
 "x17.12": "善現如來現前等所證法或所說法或所思法即於其中非諦非妄是故如來說一切法皆是佛法",
 "x17.13": "善現一切法一切法者如來說非一切法是故如來說名一切法一切法",
 "x17.14": "佛告善現譬如士夫具身大身",
 "x17.15": "具壽善現即白佛言世尊如來所說士夫具身大身如來說為非身是故說名具身大身",
 "x17.16": "佛言善現如是如是若諸菩薩作如是言我當滅度無量有情是則不應說名菩薩",
 "x17.17": "何以故善現頗有少法名菩薩不",
 "x17.18": "善現答言不也世尊無有少法名為菩薩",
 "x17.19": "佛告善現有情有情者如來說非有情故名有情",
 "x17.20": "是故如來說一切法無有有情无有命者無有士夫无有補特伽羅等",
 "x17.21": "善現若諸菩薩作如是言我當成辦佛土功德莊嚴亦如是說",
 "x17.22": "何以故善現佛土功德莊嚴佛土功德莊嚴者如來說非莊嚴是故如來說名佛土功德莊嚴佛土功德莊嚴",
 "x17.23": "善現若諸菩薩於無我法無我法深信解者如來應正等覺說為菩薩菩薩。",
 "x18.1": "佛告善現於汝意云何如來等現有肉眼不",
 "x18.2": "善現答言如是世尊如來等現有肉眼",
 "x18.3": "佛言善現於汝意云何如來等現有天眼不",
 "x18.4": "善現答言如是世尊如來等現有天眼",
 "x18.5": "佛言善現於汝意云何如來等現有慧眼不",
 "x18.6": "善現答言如是世尊如來等現有慧眼",
 "x18.7": "佛言善現於汝意云何如來等現有法眼不",
 "x18.8": "善現答言如是世尊如來等現有法眼",
 "x18.9": "佛言善現於汝意云何如來等現有佛眼不",
 "x18.10": "善現答言如是世尊如來等現有佛眼。",
 "x18.11": "佛告善現於汝意云何乃至殑伽河中所有諸沙如來說是沙不",
 "x18.12": "善現答言如是世尊如是善逝如來說是沙。",
 "x18.13": "佛言善現於汝意云何乃至殑伽河中所有沙數假使有如是等殑伽河乃至是諸殑伽河中所有沙數假使有如是等世界是諸世界寧為多不",
 "x18.14": "善現答言如是世尊如是善逝是諸世界其數甚多",
 "x18.15": "佛言善現乃至尒所諸世界中所有有情彼諸有情各有種種其心流注我悉能知",
 "x18.16": "何以故善現心流注心流注者如來說非流注是故如來說名心流注心流注",
 "x18.17": "所以者何善現過去心不可得未來心不可得現在心不可得。",
 "x19.1": "佛告善現於汝意云何若善男子或善女人以此三千大千世界盛滿七寶奉施如來應正等覺是善男子或善女人由是因緣所生福聚寧為多不",
 "x19.2": "善現答言甚多世尊甚多善逝",
 "x19.3": "佛言善現如是如是彼善男子或善女人由此因緣所生福聚其量甚多",
 "x19.4": "何以故善現若有福聚如來不說福聚福聚。",
 "x20.1": "佛告善現於汝意云何可以色身圓實觀如來不",
 "x20.2": "善現答言不也世尊不可以色身圓實觀於如來",
 "x20.3": "何以故世尊色身圓實色身圓實者如來說非圓實是故如來說名色身圓實色身圓實。",
 "x20.4": "佛告善現於汝意云何可以諸相具足觀如來不",
 "x20.5": "善現答言不也世尊不可以諸相具足觀於如來",
 "x20.6": "何以故世尊諸相具足諸相具足者如來說為非相具足是故如來說名諸相具足諸相具足。",
 "x21.1": "佛告善現於汝意云何如來頗作是念我當有所說法耶",
 "x21.2": "（缺譯）",
 "x21.3": "善現汝今勿當作如是觀何以故善現若言如來有所說法即為謗我為非善取",
 "x21.4": "何以故善現說法說法者無法可說是名說法。",
 "x21.5": "尒時具壽善現白佛言世尊於當來世後時後分後五百歲正法將滅時分轉時頗有有情聞說如是色類法已能深信不",
 "x21.6": "佛言善現彼非有情非不有情",
 "x21.7": "何以故善現一切有情者如來說非有情故名一切有情。",
 "x22.1": "佛告善現於汝意云何頗有少法如來應正等覺現證無上正等菩提耶",
 "x22.2": "具壽善現白佛言世尊如我解佛所說義者無有少法如來應正等覺現證無上正等菩提",
 "x22.3": "佛言善現如是如是於中少法無有無得故名無上正等菩提",
 "x23.1": "復次善現是法平等於其中間無不平等故名無上正等菩提",
 "x23.2": "以無我性無有情性無命者性無士夫性無補特伽羅等性平等故名無上正等菩提一切善法無不現證一切善法無不妙覺",
 "x23.3": "善現善法善法者如來一切說為非法是故如來說名善法善法。",
 "x24.1": "復次善現若善男子或善女人集七寶聚量等三千大千世界其中所有妙高山王持用布施",
 "x24.2": "若善男子或善女人於此般若波羅蜜多經中乃至四句伽他受持讀誦究竟通利及廣為他宣說開示如理作意善現前說福聚於此福聚百分計之所不能及如是千分若百千分若俱𦙁百千分若俱𦙁𨚗𢈔多百千分若數分若計分若筭分若喻分若鄔波尼煞曇分亦不能及。",
 "x25.1": "佛告善現於意云何如來頗作是念我當度脫諸有情耶善現汝今勿當作如是觀",
 "x25.2": "何以故善現無少有情如來度者善現若有有情如來度者如來即應有其我執有有情執有命者執有士夫執有補特伽羅等執",
 "x25.3": "善現我等執者如來說為非執故名我等執而諸愚夫異生強有此執",
 "x25.4": "善現愚夫異生者如來說為非生故名愚夫異生。",
 "x26.1": "佛告善現於汝意云何可以諸相具足觀如來不",
 "x26.2": "善現答言如我解佛所說義者不應以諸相具足觀於如來。",
 "x26.3": "佛言善現善哉善哉如是如是如汝所說不應以諸相具足觀於如來善現若以諸相具足觀如來者轉輪聖王應是如來是故不應以諸相具足觀於如來如是應以諸相非相觀於如來",
 "x26.4": "（缺譯）",
 "x26.5": "尒時世尊而說頌曰。",
 "x26.6": "諸以色觀我以音聲尋我彼生履邪断不能當見我",
 "x26.7": "應觀佛法性即導師法身法性非所識故彼不能了",
 "x27.1": "佛告善現於汝意云何如來應正等覺以諸相具足現證無上正等覺耶",
 "x27.2": "善現汝今勿當作如是觀何以故善現如來應正等覺不以諸相具足現證無上正等菩提。",
 "x27.3": "復次善現如是發趣菩薩乘者頗施設少法若壞若断耶善現汝今勿當作如是觀",
 "x27.4": "諸有發趣菩薩乘者終不施設少法若壞若断。",
 "x28.1": "復次善現若善男子或善女人以殑伽河沙等世界盛滿七寶奉施如來應正等覺",
 "x28.2": "若有菩薩於諸無我無生法中獲得堪忍由是因緣所生福聚甚多於彼。",
 "x28.3": "復次善現菩薩不應攝受福聚",
 "x28.4": "具壽善現即白佛言世尊云何菩薩不應攝受福聚",
 "x28.5": "佛言善現所應攝受不應攝受是故說名所應攝受。",
 "x29.1": "復次善現若有說言如來若去若來若住若坐若臥是人不解我所說義",
 "x29.2": "何以故善現言如來者即是真實真如增語都無所去無所從來故名如來應正等覺。",
 "x30.1": "復次善現若善男子或善女人乃至三千大千世界大地極微塵量等世界即以如是無數世界色像為墨如極微聚善現於汝意云何是極微聚寧為多不",
 "x30.2": "善現答言是極微聚甚多世尊甚多善逝",
 "x30.3": "何以故世尊若極微聚是實有者佛不應說為極微聚",
 "x30.4": "所以者何如來說極微聚即為非聚故名極微聚",
 "x30.5": "如來說三千大千世界即非世界故名三千大千世界",
 "x30.6": "何以故世尊若世界是實有者即為一合執如來說一合執即為非執故名一合執",
 "x30.7": "佛言善現此一合執不可言說不可戲論然彼一切愚夫異生強執是法",
 "x31.7": "何以故善現若作是言如來宣說我見有情見命者見士夫見補特伽羅見意生見摩納婆見作者見受者見於汝意云何如是所說為正語不",
 "x31.2": "善現答言不也世尊不也善逝如是所說非為正語",
 "x31.3": "所以者何如來所說我見有情見命者見士夫見補特伽羅見意生見摩納婆見作者見受者見即為非見故名我見乃至受者見。",
 "x31.4": "佛告善現諸有發趣菩薩乘者於一切法應如是知應如是見應如是信解如是不住法想",
 "x31.5": "何以故善現法想法想者如來說為非想是故如來說名法想法想。",
 "x32.1": "復次善現若菩薩摩訶薩以無量无數世界盛滿七寶奉施如來應正等覺",
 "x32.2": "若善男子或善女人於此般若波羅蜜多經中乃至四句伽他受持讀誦究竟通利如理作意及廣為他宣說開示由此因緣所生福聚甚多於前無量無數",
 "x32.3": "云何為他宣說開示如不為他宣說開示故名為他宣說開示",
 "x32.4": "尒時世尊而說頌曰。諸和合所為如星翳燈幻露泡夢電雲應作如是觀",
 "x32.5": "時薄伽梵說是經已尊者善現及諸苾蒭苾蒭尼鄔波索迦鄔波斯迦并諸世間天人阿素洛健達縛等聞薄伽梵所說經已皆大歡喜信受奉行。",
 "k0.0": "金剛般若波羅蜜經",
 "k0.1": "姚秦天竺三藏鳩摩羅什譯",
 "k1.1": "如是我聞：一時，",
 "k1.2": "佛在舍衛國祇樹給孤獨園，與大比丘眾千二百五十人俱。",
 "k1.3": "爾時，世尊食時，著衣持鉢，入舍衛大城乞食。",
 "k1.4": "於其城中，次第乞已，還至本處。飯食訖，收衣鉢，洗足已，敷座而坐。",
 "k1.5": "（缺譯）",
 "k2.1": "（缺譯）",
 "k2.2": "時，長老須菩提在大眾中即從座起，偏袒右肩，右膝著地，合掌恭敬而白佛言：",
 "k2.3": "「希有！世尊！如來善護念諸菩薩，善付囑諸菩薩。",
 "k2.4": "世尊！善男子、善女人，發阿耨多羅三藐三菩提心，應云何住？云何降伏其心？」",
 "k2.5": "佛言：「善哉，善哉！須菩提！如汝所說：",
 "k2.6": "『如來善護念諸菩薩，善付囑諸菩薩。』",
 "k2.7": "汝今諦聽，當為汝說。善男子、善女人，發阿耨多羅三藐三菩提心，應如是住，如是降伏其心。」",
 "k2.8": "「唯然。世尊！願樂欲聞。」",
 "k3.1": "佛告須菩提：「諸菩薩摩訶薩應如是降伏其心：",
 "k3.2": "『所有一切眾生之類，若卵生、若胎生、若濕生、若化生，若有色、若無色，若有想、若無想、若非有想非無想，我皆令入無餘涅槃而滅度之。』",
 "k3.3": "如是滅度無量無數無邊眾生，實無眾生得滅度者。",
 "k3.4": "（缺譯）",
 "k3.5": "何以故？須菩提！若菩薩有我相、人相、眾生相、壽者相，即非菩薩。",
 "k4.1": "「復次，須菩提！菩薩於法，應無所住，行於布施，",
 "k4.2": "所謂不住色布施，不住聲香味觸法布施。",
 "k4.3": "須菩提！菩薩應如是布施，不住於相。",
 "k4.4": "何以故？若菩薩不住相布施，其福德不可思量。",
 "k4.5": "「須菩提！於意云何？東方虛空可思量不？」",
 "k4.6": "「不也，世尊！」",
 "k4.7": "「須菩提！南西北方四維上下虛空可思量不？」",
 "k4.8": "「不也，世尊！」",
 "k4.9": "「須菩提！菩薩無住相布施，福德亦復如是不可思量。",
 "k4.10": "須菩提！菩薩但應如所教住。",
 "k5.1": "「須菩提！於意云何？可以身相見如來不？」",
 "k5.2": "「不也，世尊！不可以身相得見如來。",
 "k5.3": "何以故？如來所說身相，即非身相。」",
 "k5.4": "佛告須菩提：",
 "k5.5": "「凡所有相，皆是虛妄。若見諸相非相，則見如來。」",
 "k6.1": "須菩提白佛言：",
 "k6.2": "「世尊！頗有眾生，得聞如是言說章句，生實信不？」",
 "k6.3": "佛告須菩提：「莫作是說。",
 "k6.4": "如來滅後，後五百歲，有持戒修福者，",
 "k6.5": "於此章句能生信心，以此為實，",
 "k6.6": "當知是人不於一佛二佛三四五佛而種善根，",
 "k6.7": "已於無量千萬佛所種諸善根，",
 "k6.8": "聞是章句，乃至一念生淨信者，",
 "k6.9": "須菩提！如來悉知悉見，是諸眾生得如是無量福德。",
 "k6.10": "何以故？是諸眾生無復我相、人相、眾生相、壽者相。",
 "k6.11": "「無法相，亦無非法相。",
 "k6.12": "何以故？是諸眾生若心取相，則為著我、人、眾生、壽者。「若取法相，即著我、人、眾生、壽者。",
 "k6.13": "何以故？若取非法相，即著我、人、眾生、壽者，",
 "k6.14": "是故不應取法，不應取非法。",
 "k6.15": "以是義故，如來常說：『汝等比丘，知我說法，如筏喻者，法尚應捨，何況非法。』",
 "k7.1": "（缺譯）",
 "k7.2": "「須菩提！於意云何？如來得阿耨多羅三藐三菩提耶？如來有所說法耶？」",
 "k7.3": "須菩提言：「如我解佛所說義，無有定法名阿耨多羅三藐三菩提，亦無有定法，如來可說。",
 "k7.4": "何以故？如來所說法，皆不可取、不可說、非法、非非法。",
 "k7.5": "所以者何？一切賢聖，皆以無為法而有差別。」",
 "k8.1": "「須菩提！於意云何？若人滿三千大千世界七寶以用布施，是人所得福德，寧為多不？」",
 "k8.2": "須菩提言：「甚多，世尊！",
 "k8.3": "何以故？是福德即非福德性，是故如來說福德多。」",
 "k8.4": "（缺譯）",
 "k8.5": "「若復有人，於此經中受持，乃至四句偈等，為他人說，其福勝彼。",
 "k8.6": "何以故？須菩提！一切諸佛，及諸佛阿耨多羅三藐三菩提法，皆從此經出。",
 "k8.7": "須菩提！所謂佛法者，即非佛法。",
 "k9.1": "「須菩提！於意云何？須陀洹能作是念：『我得須陀洹果。』不？」",
 "k9.2": "須菩提言：「不也，世尊！何以故？須陀洹名為入流，而無所入，不入色、聲、香、味、觸、法，是名須陀洹。」",
 "k9.3": "（缺譯）",
 "k9.4": "「須菩提！於意云何？斯陀含能作是念：『我得斯陀含果。』不？」",
 "k9.5": "須菩提言：「不也，世尊！何以故？斯陀含名一往來，而實無往來，是名斯陀含。」",
 "k9.6": "「須菩提！於意云何？阿那含能作是念：『我得阿那含果。』不？」",
 "k9.7": "須菩提言：「不也，世尊！何以故？阿那含名為不來，而實無來，是故名阿那含。」",
 "k9.8": "「須菩提！於意云何？阿羅漢能作是念：『我得阿羅漢道。』不？」",
 "k9.9": "須菩提言：「不也，世尊！何以故？實無有法名阿羅漢。世尊！若阿羅漢作是念：『我得阿羅漢道。』即為著我、人、眾生、壽者。",
 "k9.10": "世尊！佛說我得無諍三昧人中最為第一，是第一離欲阿羅漢。我不作是念：『我是離欲阿羅漢。』",
 "k9.11": "世尊！我若作是念：『我得阿羅漢道。』世尊則不說須菩提是樂阿蘭那行者。以須菩提實無所行，而名須菩提是樂阿蘭那行。」",
 "k10.1": "佛告須菩提：「於意云何？如來昔在然燈佛所，於法有所得不？」",
 "k10.2": "「世尊！如來在然燈佛所，於法實無所得。」",
 "k10.3": "「須菩提！於意云何？菩薩莊嚴佛土不？」",
 "k10.4": "「不也，世尊！何以故？莊嚴佛土者，則非莊嚴，是名莊嚴。」",
 "k10.5": "「是故須菩提，諸菩薩摩訶薩應如是生清淨心，不應住色生心，不應住聲、香、味、觸、法生心，應無所住而生其心。",
 "k10.6": "「須菩提！譬如有人，身如須彌山王，於意云何？是身為大不？」",
 "k10.7": "須菩提言：「甚大，世尊！何以故？佛說非身，是名大身。」",
 "k11.1": "「須菩提！如恒河中所有沙數，如是沙等恒河，於意云何？是諸恒河沙寧為多不？」",
 "k11.2": "須菩提言：「甚多，世尊！但諸恒河尚多無數，何況其沙。」",
 "k11.3": "「須菩提！我今實言告汝。若有善男子、善女人，以七寶滿爾所恒河沙數三千大千世界，以用布施，得福多不？」",
 "k11.4": "須菩提言：「甚多，世尊！」",
 "k11.5": "佛告須菩提：「若善男子、善女人，於此經中，乃至受持四句偈等，為他人說，而此福德勝前福德。",
 "k12.1": "「復次，須菩提！隨說是經，乃至四句偈等，當知此處，一切世間天、人、阿修羅，皆應供養，如佛塔廟，",
 "k12.2": "何況有人盡能受持讀誦。",
 "k12.3": "須菩提！當知是人成就最上第一希有之法，若是經典所在之處，則為有佛，若尊重弟子。」",
 "k13.1": "爾時，須菩提白佛言：「世尊！當何名此經？我等云何奉持？」",
 "k13.2": "佛告須菩提：「是經名為『金剛般若波羅蜜』。以是名字，汝當奉持。所以者何？須菩提！佛說般若波羅蜜，則非般若波羅蜜。",
 "k13.3": "須菩提！於意云何？如來有所說法不？」",
 "k13.4": "須菩提白佛言：「世尊！如來無所說。」",
 "k13.5": "「須菩提！於意云何？三千大千世界所有微塵是為多不？」",
 "k13.6": "須菩提言：「甚多，世尊！」",
 "k13.7": "「須菩提！諸微塵，如來說非微塵，是名微塵。如來說世界，非世界，是名世界。",
 "k13.8": "「須菩提！於意云何？可以三十二相見如來不？」",
 "k13.9": "「不也，世尊！不可以三十二相得見如來。何以故？如來說三十二相，即是非相，是名三十二相。」",
 "k13.10": "「須菩提！若有善男子、善女人，以恒河沙等身命布施；若復有人，於此經中，乃至受持四句偈等，為他人說，其福甚多。」",
 "k14.1": "爾時，須菩提聞說是經，深解義趣，涕淚悲泣，而白佛言：",
 "k14.2": "「希有，世尊！佛說如是甚深經典，我從昔來所得慧眼，未曾得聞如是之經。",
 "k14.3": "世尊！若復有人得聞是經，信心清淨，則生實相，當知是人，成就第一希有功德。世尊！是實相者，則是非相，是故如來說名實相。",
 "k14.4": "世尊！我今得聞如是經典，信解受持不足為難，若當來世，後五百歲，其有眾生，得聞是經，信解受持，是人則為第一希有。",
 "k14.5": "何以故？此人無我相、人相、眾生相、壽者相。",
 "k14.6": "所以者何？我相即是非相，人相、眾生相、壽者相即是非相。",
 "k14.7": "何以故？離一切諸相，則名諸佛。」佛告須菩提：",
 "k14.8": "「如是，如是！若復有人，得聞是經，不驚、不怖、不畏，當知是人甚為希有。",
 "k14.9": "何以故？須菩提！如來說第一波羅蜜，非第一波羅蜜，是名第一波羅蜜。",
 "k14.10": "須菩提！忍辱波羅蜜，如來說非忍辱波羅蜜。",
 "k14.11": "何以故？須菩提！如我昔為歌利王割截身體，我於爾時，無我相、無人相、無眾生相、無壽者相。",
 "k14.12": "何以故？我於往昔節節支解時，若有我相、人相、眾生相、壽者相，應生瞋恨。",
 "k14.13": "須菩提！又念過去於五百世作忍辱仙人，於爾所世，無我相、無人相、無眾生相、無壽者相。",
 "k14.14": "是故須菩提！菩薩應離一切相，發阿耨多羅三藐三菩提心，不應住色生心，不應住聲香味觸法生心，應生無所住心。",
 "k14.15": "若心有住，則為非住。是故佛說：『菩薩心不應住色布施。』",
 "k14.16": "「須菩提！菩薩為利益一切眾生，應如是布施。",
 "k14.17": "如來說：『一切諸相，即是非相。』又說：『一切眾生，則非眾生。』",
 "k14.18": "「須菩提！如來是真語者、實語者、如語者、不誑語者、不異語者。",
 "k14.19": "「須菩提！如來所得法，此法無實無虛。",
 "k14.20": "須菩提！若菩薩心住於法而行布施，如人入闇，則無所見；",
 "k14.21": "若菩薩心不住法而行布施，如人有目，日光明照，見種種色。",
 "k14.22": "「須菩提！當來之世，若有善男子、善女人，能於此經受持讀誦，則為如來以佛智慧，悉知是人，悉見是人，皆得成就無量無邊功德。",
 "k15.1": "「須菩提！若有善男子、善女人，初日分以恒河沙等身布施，中日分復以恒河沙等身布施，後日分亦以恒河沙等身布施，如是無量百千萬億劫以身布施；",
 "k15.2": "若復有人，聞此經典，信心不逆，其福勝彼，何況書寫、受持、讀誦、為人解說。",
 "k15.3": "「須菩提！以要言之，是經有不可思議、不可稱量、無邊功德。",
 "k15.4": "如來為發大乘者說，為發最上乘者說。",
 "k15.5": "若有人能受持讀誦，廣為人說，如來悉知是人，悉見是人，",
 "k15.6": "皆得成就不可量、不可稱、無有邊、不可思議功德，如是人等，則為荷擔如來阿耨多羅三藐三菩提。",
 "k15.7": "何以故？須菩提！若樂小法者，著我見、人見、眾生見、壽者見，則於此經，不能聽受讀誦、為人解說。",
 "k15.8": "「須菩提！在在處處，若有此經，一切世間天、人、阿修羅，所應供養；當知此處，則為是塔，皆應恭敬，作禮圍繞，以諸華香而散其處。",
 "k16.1": "「復次，須菩提！善男子、善女人，受持讀誦此經，若為人輕賤，",
 "k16.2": "是人先世罪業，應墮惡道，以今世人輕賤故，先世罪業則為消滅，當得阿耨多羅三藐三菩提。",
 "k16.3": "「須菩提！我念過去無量阿僧祇劫，於然燈佛前，得值八百四千萬億那由他諸佛，悉皆供養承事，無空過者；",
 "k16.4": "若復有人，於後末世，能受持讀誦此經，",
 "k16.5": "所得功德，於我所供養諸佛功德，百分不及一，千萬億分、乃至算數譬喻所不能及。",
 "k16.6": "「須菩提！若善男子、善女人，於後末世，有受持讀誦此經，所得功德，我若具說者，或有人聞，心則狂亂，狐疑不信。",
 "k16.7": "須菩提！當知是經義不可思議，果報亦不可思議。」",
 "k17.1": "爾時，須菩提白佛言：「世尊！善男子、善女人，發阿耨多羅三藐三菩提心，云何應住？云何降伏其心？」",
 "k17.2": "佛告須菩提：「善男子、善女人，發阿耨多羅三藐三菩提者，當生如是心：『我應滅度一切眾生。滅度一切眾生已，而無有一眾生實滅度者。』",
 "k17.3": "何以故？須菩提！若菩薩有我相、人相、眾生相、壽者相，則非菩薩。",
 "k17.4": "所以者何？須菩提！實無有法發阿耨多羅三藐三菩提者。",
 "k17.5": "「須菩提！於意云何？如來於然燈佛所，有法得阿耨多羅三藐三菩提不？」",
 "k17.6": "「不也，世尊！如我解佛所說義，佛於然燈佛所，無有法得阿耨多羅三藐三菩提。」",
 "k17.7": "佛言：「如是，如是！須菩提！實無有法如來得阿耨多羅三藐三菩提。",
 "k17.8": "須菩提！若有法如來得阿耨多羅三藐三菩提者，然燈佛則不與我受記：『汝於來世，當得作佛，號釋迦牟尼。』",
 "k17.9": "以實無有法得阿耨多羅三藐三菩提，是故然燈佛與我受記，作是言：『汝於來世，當得作佛，號釋迦牟尼。』",
 "k17.10": "何以故？如來者，即諸法如義。",
 "k17.11": "「若有人言：『如來得阿耨多羅三藐三菩提。』須菩提！實無有法，佛得阿耨多羅三藐三菩提。",
 "k17.12": "須菩提！如來所得阿耨多羅三藐三菩提，於是中無實無虛。是故如來說：『一切法皆是佛法。』",
 "k17.13": "須菩提！所言一切法者，即非一切法，是故名一切法。",
 "k17.14": "「須菩提！譬如人身長大。」",
 "k17.15": "須菩提言：「世尊！如來說人身長大，則為非大身，是名大身。」",
 "k17.16": "「須菩提！菩薩亦如是。若作是言：『我當滅度無量眾生。』則不名菩薩。",
 "k17.17": "何以故？須菩提！實無有法名為菩薩。",
 "k17.18": "（缺譯）",
 "k17.19": "（缺譯）",
 "k17.20": "是故佛說：『一切法無我、無人、無眾生、無壽者。』",
 "k17.21": "須菩提！若菩薩作是言：『我當莊嚴佛土。』是不名菩薩。",
 "k17.22": "何以故？如來說莊嚴佛土者，即非莊嚴，是名莊嚴。",
 "k17.23": "須菩提！若菩薩通達無我法者，如來說名真是菩薩。",
 "k18.1": "「須菩提！於意云何？如來有肉眼不？」",
 "k18.2": "「如是，世尊！如來有肉眼。」",
 "k18.3": "「須菩提！於意云何？如來有天眼不？」",
 "k18.4": "「如是，世尊！如來有天眼。」",
 "k18.5": "「須菩提！於意云何？如來有慧眼不？」",
 "k18.6": "「如是，世尊！如來有慧眼。」",
 "k18.7": "「須菩提！於意云何？如來有法眼不？」",
 "k18.8": "「如是，世尊！如來有法眼。」",
 "k18.9": "「須菩提！於意云何？如來有佛眼不？」",
 "k18.10": "「如是，世尊！如來有佛眼。」",
 "k18.11": "「須菩提！於意云何？恒河中所有沙，佛說是沙不？」",
 "k18.12": "「如是，世尊！如來說是沙。」",
 "k18.13": "「須菩提！於意云何？如一恒河中所有沙，有如是等恒河，是諸恒河所有沙數佛世界，如是寧為多不？」",
 "k18.14": "「甚多，世尊！」",
 "k18.15": "佛告須菩提：「爾所國土中，所有眾生，若干種心，如來悉知。",
 "k18.16": "何以故？如來說諸心，皆為非心，是名為心。",
 "k18.17": "所以者何？須菩提！過去心不可得，現在心不可得，未來心不可得。",
 "k19.1": "「須菩提！於意云何？若有人滿三千大千世界七寶以用布施，是人以是因緣，得福多不？」",
 "k19.2": "「如是，世尊！此人以是因緣，得福甚多。」",
 "k19.3": "（缺譯）",
 "k19.4": "「須菩提！若福德有實，如來不說得福德多；以福德無故，如來說得福德多。",
 "k20.1": "「須菩提！於意云何？佛可以具足色身見不？」",
 "k20.2": "「不也，世尊！如來不應以具足色身見。",
 "k20.3": "何以故？如來說具足色身，即非具足色身，是名具足色身。」",
 "k20.4": "「須菩提！於意云何？如來可以具足諸相見不？」",
 "k20.5": "「不也，世尊！如來不應以具足諸相見。",
 "k20.6": "何以故？如來說諸相具足，即非具足，是名諸相具足。」",
 "k21.1": "（缺譯）",
 "k21.2": "（缺譯）",
 "k21.3": "「須菩提！汝勿謂如來作是念：『我當有所說法。』莫作是念，何以故？若人言：『如來有所說法。』即為謗佛，不能解我所說故。",
 "k21.4": "須菩提！說法者，無法可說，是名說法。」",
 "k21.5": "爾時，慧命須菩提白佛言：「世尊！頗有眾生，於未來世，聞說是法，生信心不？」",
 "k21.6": "佛言：「須菩提！彼非眾生，非不眾生。",
 "k21.7": "何以故？須菩提！眾生、眾生者，如來說非眾生，是名眾生。」",
 "k22.1": "（缺譯）",
 "k22.2": "須菩提白佛言：「世尊！佛得阿耨多羅三藐三菩提，為無所得耶？」",
 "k22.3": "「如是，如是！須菩提！我於阿耨多羅三藐三菩提乃至無有少法可得，是名阿耨多羅三藐三菩提。",
 "k23.1": "「復次，須菩提！是法平等，無有高下，是名阿耨多羅三藐三菩提；",
 "k23.2": "以無我、無人、無眾生、無壽者，修一切善法，則得阿耨多羅三藐三菩提。",
 "k23.3": "須菩提！所言善法者，如來說非善法，是名善法。",
 "k24.1": "「須菩提！若三千大千世界中所有諸須彌山王，如是等七寶聚，有人持用布施；",
 "k24.2": "若人以此般若波羅蜜經，乃至四句偈等，受持讀誦、為他人說，於前福德百分不及一，百千萬億分，乃至算數譬喻所不能及。",
 "k25.1": "「須菩提！於意云何？汝等勿謂如來作是念：『我當度眾生。』須菩提！莫作是念。",
 "k25.2": "何以故？實無有眾生如來度者，若有眾生如來度者，如來則有我、人、眾生、壽者。",
 "k25.3": "須菩提！如來說：『有我者，則非有我，而凡夫之人以為有我。』",
 "k25.4": "須菩提！凡夫者，如來說則非凡夫。",
 "k26.1": "「須菩提！於意云何？可以三十二相觀如來不？」",
 "k26.2": "須菩提言：「如是，如是！以三十二相觀如來。」",
 "k26.3": "佛言：「須菩提！若以三十二相觀如來者，轉輪聖王則是如來。」",
 "k26.4": "須菩提白佛言：「世尊！如我解佛所說義，不應以三十二相觀如來。」",
 "k26.5": "爾時，世尊而說偈言：",
 "k26.6": "「若以色見我，以音聲求我，是人行邪道，不能見如來。",
 "k26.7": "（缺譯）",
 "k27.1": "「須菩提！汝若作是念：『如來不以具足相故，得阿耨多羅三藐三菩提。』",
 "k27.2": "須菩提！莫作是念。如來不以具足相故，得阿耨多羅三藐三菩提。",
 "k27.3": "「須菩提！汝若作是念：『發阿耨多羅三藐三菩提者，說諸法斷滅相。』莫作是念。",
 "k27.4": "何以故？發阿耨多羅三藐三菩提心者，於法不說斷滅相。",
 "k28.1": "「須菩提！若菩薩以滿恒河沙等世界七寶布施；",
 "k28.2": "若復有人知一切法無我，得成於忍，此菩薩勝前菩薩所得功德。",
 "k28.3": "須菩提！以諸菩薩不受福德故。」",
 "k28.4": "須菩提白佛言：「世尊！云何菩薩不受福德？」",
 "k28.5": "「須菩提！菩薩所作福德，不應貪著，是故說不受福德。",
 "k29.1": "「須菩提！若有人言：『如來若來若去、若坐若臥。』是人不解我所說義。",
 "k29.2": "何以故？如來者，無所從來，亦無所去，故名如來。",
 "k30.1": "「須菩提！若善男子、善女人，以三千大千世界碎為微塵，於意云何？是微塵眾寧為多不？」",
 "k30.2": "「甚多，世尊！",
 "k30.3": "何以故？若是微塵眾實有者，佛則不說是微塵眾。",
 "k30.4": "所以者何？佛說微塵眾，則非微塵眾，是名微塵眾。",
 "k30.5": "世尊！如來所說三千大千世界，則非世界，是名世界。",
 "k30.6": "何以故？若世界實有者，則是一合相。如來說一合相，則非一合相，是名一合相。」",
 "k30.7": "「須菩提！一合相者，則是不可說，但凡夫之人貪著其事。",
 "k31.1": "「須菩提！若人言：『佛說我見、人見、眾生見、壽者見。』須菩提！於意云何？是人解我所說義不？」",
 "k31.2": "「世尊！是人不解如來所說義。",
 "k31.3": "何以故？世尊說我見、人見、眾生見、壽者見，即非我見、人見、眾生見、壽者見，是名我見、人見、眾生見、壽者見。」",
 "k31.4": "「須菩提！發阿耨多羅三藐三菩提心者，於一切法，應如是知，如是見，如是信解，不生法相。",
 "k31.5": "須菩提！所言法相者，如來說即非法相，是名法相。",
 "k32.1": "「須菩提！若有人以滿無量阿僧祇世界七寶持用布施，",
 "k32.2": "若有善男子、善女人，發菩薩心者，持於此經，乃至四句偈等，受持讀誦，為人演說，其福勝彼。",
 "k32.3": "云何為人演說？不取於相，如如不動。",
 "k32.4": "何以故？「一切有為法，如夢、幻、泡、影，如露亦如電，應作如是觀。」",
 "k32.5": "佛說是經已，長老須菩提及諸比丘、比丘尼、優婆塞、優婆夷，一切世間天、人、阿修羅，聞佛所說，皆大歡喜，信受奉行。",
 "b0.0": "金剛般若波羅蜜經",
 "b0.1": "元魏天竺三藏菩提流支譯",
 "b1.1": "如是我聞：一時",
 "b1.2": "婆伽婆，在舍婆提城祇樹給孤獨園，與大比丘眾千二百五十人俱。",
 "b1.3": "爾時，世尊食時，著衣持鉢，入舍婆提大城乞食。",
 "b1.4": "於其城中，次第乞食已，還至本處。飯食訖，收衣鉢，洗足已，如常敷座，結加趺坐，端身而住，正念不動。",
 "b1.5": "爾時，諸比丘來詣佛所，到已，頂禮佛足，右遶三匝，退坐一面。",
 "b2.1": "（缺譯）",
 "b2.2": "爾時，慧命須菩提，在大眾中，即從座起，偏袒右肩，右膝著地，向佛合掌，恭敬而立，白佛言：",
 "b2.3": "「希有！世尊！如來、應供、正遍知，善護念諸菩薩，善付囑諸菩薩。",
 "b2.4": "世尊！云何菩薩大乘中，發阿耨多羅三藐三菩提心？應云何住？云何修行？云何降伏其心？」",
 "b2.5": "爾時，佛告須菩提：「善哉，善哉！須菩提！如汝所說：",
 "b2.6": "『如來善護念諸菩薩，善付囑諸菩薩。』",
 "b2.7": "汝今諦聽，當為汝說。如菩薩大乘中，發阿耨多羅三藐三菩提心，應如是住，如是修行，如是降伏其心。」",
 "b2.8": "須菩提白佛言：「世尊！如是。願樂欲聞。」",
 "b3.1": "佛告須菩提：「諸菩薩生如是心：",
 "b3.2": "『所有一切眾生，眾生所攝，若卵生、若胎生、若濕生、若化生，若有色、若無色，若有想、若無想、若非有想非無想，所有眾生界，眾生所攝，我皆令入無餘涅槃而滅度之。』",
 "b3.3": "如是滅度無量無邊眾生，實無眾生得滅度者。",
 "b3.4": "何以故？須菩提！若菩薩有眾生相，即非菩薩。",
 "b3.5": "何以故非？須菩提！若菩薩起眾生相、人相、壽者相，則不名菩薩。",
 "b4.1": "「復次，須菩提！菩薩不住於事行於布施，無所住行於布施，",
 "b4.2": "不住色布施，不住聲、香、味、觸、法布施。",
 "b4.3": "須菩提！菩薩應如是布施，不住於相想。",
 "b4.4": "何以故？若菩薩不住相布施，其福德聚不可思量。",
 "b4.5": "「須菩提！於汝意云何？東方虛空可思量不？」",
 "b4.6": "須菩提言：「不也，世尊！」",
 "b4.7": "佛言：「如是，須菩提！南西北方四維上下虛空，可思量不？」",
 "b4.8": "須菩提言：「不也，世尊！」",
 "b4.9": "佛言：「如是，如是！須菩提！菩薩無住相布施，福德聚亦復如是不可思量。」",
 "b4.10": "佛復告須菩提：「菩薩但應如是行於布施。」",
 "b5.1": "「須菩提！於意云何？可以相成就見如來不？」",
 "b5.2": "須菩提言：「不也，世尊！不可以相成就得見如來。",
 "b5.3": "何以故？如來所說相，即非相。」",
 "b5.4": "佛告須菩提：",
 "b5.5": "「凡所有相，皆是妄語。若見諸相非相，則非妄語。如是諸相非相，則見如來。」",
 "b6.1": "須菩提白佛言：",
 "b6.2": "「世尊！頗有眾生，於未來世末世，得聞如是修多羅章句，生實相不？」",
 "b6.3": "佛告須菩提：「莫作是說：『頗有眾生，於未來世末世，得聞如是修多羅章句，生實相不？』」",
 "b6.4": "佛復告須菩提：「有未來世末世，有菩薩摩訶薩，法欲滅時，有持戒修福德智慧者，",
 "b6.5": "於此修多羅章句，能生信心，以此為實。」",
 "b6.6": "佛復告須菩提：「當知彼菩薩摩訶薩，非於一佛二佛三四五佛所修行供養，非於一佛二佛三四五佛所而種善根。」",
 "b6.7": "佛復告須菩提：「已於無量百千萬諸佛所修行供養，無量百千萬諸佛所種諸善根。",
 "b6.8": "聞是修多羅，乃至一念能生淨信。",
 "b6.9": "須菩提！如來悉知是諸眾生，如來悉見是諸眾生。須菩提！是諸菩薩，生如是無量福德聚，取如是無量福德。",
 "b6.10": "何以故？須菩提！是諸菩薩，無復我相、眾生相、人相、壽者相。",
 "b6.11": "「須菩提！是諸菩薩，無法相，亦非無法相。無相，亦非無相。",
 "b6.12": "何以故？須菩提！是諸菩薩，若取法相，則為著我、人、眾生、壽者。須菩提！若是菩薩有法相，即著我相、人相、眾生相、壽者相。",
 "b6.13": "（缺譯）",
 "b6.14": "何以故？須菩提！不應取法，非不取法。",
 "b6.15": "以是義故，如來常說栰喻法門，是法應捨，非捨法故。」",
 "b7.1": "復次，佛告慧命須菩提：",
 "b7.2": "「須菩提！於意云何？如來得阿耨多羅三藐三菩提耶？如來有所說法耶？」",
 "b7.3": "須菩提言：「如我解佛所說義，無有定法如來得阿耨多羅三藐三菩提，亦無有定法如來可說。",
 "b7.4": "何以故？如來所說法，皆不可取不可說，非法非非法。",
 "b7.5": "何以故？一切聖人，皆以無為法得名。」",
 "b8.1": "「須菩提！於意云何？若滿三千大千世界七寶，以用布施。須菩提！於意云何？是善男子、善女人，所得福德，寧為多不？」",
 "b8.2": "須菩提言：「甚多，婆伽婆！甚多，修伽陀！彼善男子、善女人，得福甚多。",
 "b8.3": "何以故？世尊！是福德聚，即非福德聚，是故如來說福德聚、福德聚。」",
 "b8.4": "佛言：「須菩提！若善男子、善女人，以滿三千大千世界七寶，持用布施。",
 "b8.5": "若復於此經中，受持乃至四句偈等，為他人說，其福勝彼無量不可數。",
 "b8.6": "何以故？須菩提！一切諸佛阿耨多羅三藐三菩提法，皆從此經出。一切諸佛如來，皆從此經生。",
 "b8.7": "須菩提！所謂佛法、佛法者，即非佛法。",
 "b9.1": "「須菩提！於意云何？須陀洹能作是念：『我得須陀洹果。』不？」",
 "b9.2": "須菩提言：「不也，世尊！何以故？實無有法名須陀洹。不入色聲香味觸法，是名須陀洹。」",
 "b9.3": "（缺譯）",
 "b9.4": "佛言：「須菩提！於意云何？斯陀含能作是念：『我得斯陀含果。』不？」",
 "b9.5": "須菩提言：「不也，世尊！何以故？實無有法名斯陀含。是名斯陀含。」",
 "b9.6": "「須菩提！於意云何？阿那含能作是念：『我得阿那含果。』不？」",
 "b9.7": "須菩提言：「不也，世尊！何以故？實無有法名阿那含。是名阿那含。」",
 "b9.8": "「須菩提！於意云何？阿羅漢能作是念：『我得阿羅漢。』不？」",
 "b9.9": "須菩提言：「不也，世尊！何以故？實無有法名阿羅漢。世尊！若阿羅漢作是念：『我得阿羅漢。』即為著我、人、眾生、壽者。",
 "b9.10": "世尊！佛說我得無諍三昧，最為第一，世尊說我是離欲阿羅漢。世尊！我不作是念：『我是離欲阿羅漢。』",
 "b9.11": "世尊！我若作是念：『我得阿羅漢。』世尊則不記我無諍行第一。以須菩提實無所行，而名須菩提無諍、無諍行。」",
 "b10.1": "佛告須菩提：「於意云何？如來昔在燃燈佛所，得阿耨多羅三藐三菩提法不？」",
 "b10.2": "須菩提言：「不也，世尊！如來在燃燈佛所，於法實無所得阿耨多羅三藐三菩提。」",
 "b10.3": "佛告須菩提：「若菩薩作是言：『我莊嚴佛國土。』",
 "b10.4": "彼菩薩不實語。何以故？須菩提！如來所說莊嚴佛土者，則非莊嚴，是名莊嚴佛土。",
 "b10.5": "是故須菩提！諸菩薩摩訶薩，應如是生清淨心，而無所住，不住色生心，不住聲、香、味、觸、法生心，應無所住而生其心。",
 "b10.6": "「須菩提！譬如有人，身如須彌山王。須菩提！於意云何？是身為大不？」",
 "b10.7": "須菩提言：「甚大，世尊！何以故？佛說非身，是名大身。彼身非身，是名大身。」",
 "b11.1": "佛言：「須菩提！如恒河中所有沙數，如是沙等恒河，於意云何？是諸恒河沙，寧為多不？」",
 "b11.2": "須菩提言：「甚多，世尊！但諸恒河，尚多無數，何況其沙。」",
 "b11.3": "佛言：「須菩提！我今實言告汝。若有善男子、善女人，以七寶滿爾數恒沙數世界，以施諸佛如來。須菩提！於意云何？彼善男子、善女人，得福多不？」",
 "b11.4": "須菩提言：「甚多，世尊！彼善男子、善女人，得福甚多。」",
 "b11.5": "佛告須菩提：「以七寶滿爾數恒河沙世界，持用布施。若善男子、善女人，於此法門，乃至受持四句偈等，為他人說，而此福德，勝前福德無量阿僧祇。",
 "b12.1": "「復次，須菩提！隨所有處，說是法門，乃至四句偈等，當知此處，一切世間天人阿修羅，皆應供養，如佛塔廟。",
 "b12.2": "何況有人，盡能受持讀誦此經。",
 "b12.3": "須菩提！當知是人，成就最上第一希有之法。若是經典所在之處，則為有佛，若尊重似佛。」",
 "b13.1": "爾時，須菩提白佛言：「世尊！當何名此法門？我等云何奉持？」",
 "b13.2": "佛告須菩提：「是法門名為『金剛般若波羅蜜』。以是名字，汝當奉持。何以故？須菩提！佛說般若波羅蜜，則非般若波羅蜜。",
 "b13.3": "「須菩提！於意云何？如來有所說法不？」",
 "b13.4": "須菩提言：「世尊！如來無所說法。」",
 "b13.5": "「須菩提！於意云何？三千大千世界所有微塵，是為多不？」",
 "b13.6": "須菩提言：「彼微塵甚多。世尊！」",
 "b13.7": "「須菩提！是諸微塵，如來說非微塵，是名微塵。如來說世界，非世界，是名世界。」",
 "b13.8": "佛言：「須菩提！於意云何？可以三十二大人相見如來不？」",
 "b13.9": "須菩提言：「不也，世尊！何以故？如來說三十二大人相，即是非相，是名三十二大人相。」",
 "b13.10": "佛言：「須菩提！若有善男子、善女人，以恒河沙等身命布施，若復有人，於此法門中，乃至受持四句偈等，為他人說，其福甚多無量阿僧祇。」",
 "b14.1": "爾時，須菩提聞說是經，深解義趣，涕淚悲泣，捫淚而白佛言：",
 "b14.2": "「希有，婆伽婆！希有，修伽陀！佛說如是甚深法門，我從昔來所得慧眼，未曾得聞如是法門。」「何以故？須菩提！佛說般若波羅蜜，即非般若波羅蜜。」",
 "b14.3": "「世尊！若復有人得聞是經，信心清淨，則生實相，當知是名成就第一希有功德。世尊！是實相者則是非相。是故如來說名實相、實相。",
 "b14.4": "世尊！我今得聞如是法門，信解受持，不足為難。若當來世其有眾生得聞是法門信解受持，是人則為第一希有。",
 "b14.5": "何以故？此人無我相、人相、眾生相、壽者相。",
 "b14.6": "何以故？我相，即是非相；人相、眾生相、壽者相，即是非相。",
 "b14.7": "何以故？離一切諸相，則名諸佛。」佛告須菩提：",
 "b14.8": "「如是，如是！若復有人得聞是經，不驚不怖不畏，當知是人甚為希有。",
 "b14.9": "何以故？須菩提！如來說第一波羅蜜，非第一波羅蜜。如來說第一波羅蜜者，彼無量諸佛亦說波羅蜜，是名第一波羅蜜。",
 "b14.10": "「須菩提！如來說忍辱波羅蜜，即非忍辱波羅蜜。",
 "b14.11": "何以故？須菩提！如我昔為歌利王割截身體。我於爾時，無我相、無眾生相、無人相、無壽者相，無相，亦非無相。",
 "b14.12": "何以故？須菩提！我於往昔節節支解時，若有我相、眾生相、人相、壽者相，應生瞋恨。",
 "b14.13": "須菩提！又念過去於五百世，作忍辱仙人，於爾所世，無我相、無眾生相、無人相、無壽者相。",
 "b14.14": "是故須菩提！菩薩應離一切相，發阿耨多羅三藐三菩提心。何以故？若心有住，則為非住。不應住色生心，不應住聲、香、味、觸、法生心，應生無所住心。",
 "b14.15": "是故佛說：『菩薩心不住色布施。』",
 "b14.16": "須菩提！菩薩為利益一切眾生，應如是布施。」",
 "b14.17": "須菩提言：「世尊！一切眾生相，即是非相。何以故？如來說：『一切眾生，即非眾生。』」",
 "b14.18": "「須菩提！如來是真語者、實語者、如語者、不異語者。",
 "b14.19": "須菩提！如來所得法，所說法，無實無妄語。",
 "b14.20": "「須菩提！譬如有人入闇，則無所見。",
 "b14.21": "若菩薩心住於事而行布施，亦復如是。須菩提！譬如人有目，夜分已盡，日光明照，見種種色。若菩薩不住於事行於布施，亦復如是。",
 "b14.22": "「復次，須菩提！若有善男子、善女人，能於此法門，受持讀誦修行，則為如來以佛智慧，悉知是人，悉見是人，悉覺是人，皆得成就無量無邊功德聚。",
 "b15.1": "「須菩提！若有善男子、善女人，初日分以恒河沙等身布施，中日分復以恒河沙等身布施，後日分復以恒河沙等身布施，如是捨恒河沙等無量身，如是百千萬億那由他劫以身布施。",
 "b15.2": "若復有人，聞此法門，信心不謗，其福勝彼無量阿僧祇，何況書寫受持讀誦修行，為人廣說。",
 "b15.3": "「須菩提！以要言之，是經有不可思議不可稱量無邊功德。",
 "b15.4": "此法門，如來為發大乘者說，為發最上乘者說。",
 "b15.5": "若有人能受持讀誦修行此經，廣為人說，如來悉知是人，悉見是人，",
 "b15.6": "皆成就不可思議不可稱無有邊無量功德聚。如是人等，則為荷擔如來阿耨多羅三藐三菩提。",
 "b15.7": "何以故？須菩提！若樂小法者，則於此經，不能受持讀誦修行，為人解說。若有我見眾生見人見壽者見，於此法門，能受持讀誦修行為人解說者，無有是處。",
 "b15.8": "「須菩提！在在處處，若有此經，一切世間天、人、阿修羅所應供養。當知此處，則為是塔，皆應恭敬，作禮圍繞，以諸華香而散其處。",
 "b16.1": "「復次，須菩提！若善男子、善女人，受持讀誦此經，為人輕賤。",
 "b16.2": "何以故？是人先世罪業，應墮惡道，以今世人輕賤故，先世罪業則為消滅，當得阿耨多羅三藐三菩提。",
 "b16.3": "「須菩提！我念過去無量阿僧祇阿僧祇劫，於燃燈佛前，得值八十四億那由他百千萬諸佛，我皆親承供養，無空過者。須菩提！如是無量諸佛，我皆親承供養，無空過者。",
 "b16.4": "若復有人，於後世末世，能受持讀誦修行此經，",
 "b16.5": "所得功德，我所供養諸佛功德，於彼百分不及一，千萬億分，乃至算數譬喻所不能及。",
 "b16.6": "「須菩提！若有善男子、善女人，於後世末世，有受持讀誦修行此經，所得功德，若我具說者，或有人聞，心則狂亂，疑惑不信。",
 "b16.7": "須菩提！當知是法門不可思議，果報亦不可思議。」",
 "b17.1": "爾時，須菩提白佛言：「世尊！云何菩薩發阿耨多羅三藐三菩提心？云何住？云何修行？云何降伏其心？」",
 "b17.2": "佛告須菩提：「菩薩發阿耨多羅三藐三菩提心者，當生如是心：『我應滅度一切眾生，令入無餘涅槃界。如是滅度一切眾生已，而無一眾生實滅度者。』",
 "b17.3": "何以故？須菩提！若菩薩有眾生相、人相、壽者相，則非菩薩。",
 "b17.4": "何以故？須菩提！實無有法，名為菩薩發阿耨多羅三藐三菩提心者。",
 "b17.5": "「須菩提！於意云何？如來於燃燈佛所，有法得阿耨多羅三藐三菩提不？」",
 "b17.6": "須菩提白佛言：「不也！世尊！如我解佛所說義，佛於燃燈佛所，無有法得阿耨多羅三藐三菩提。」",
 "b17.7": "佛言：「如是，如是！須菩提！實無有法，如來於燃燈佛所得阿耨多羅三藐三菩提。",
 "b17.8": "須菩提！若有法如來得阿耨多羅三藐三菩提者，燃燈佛則不與我受記：『汝於來世，當得作佛，號釋迦牟尼。』",
 "b17.9": "以實無有法，得阿耨多羅三藐三菩提，是故燃燈佛與我受記，作如是言：『摩那婆！汝於來世，當得作佛，號釋迦牟尼。』",
 "b17.10": "何以故？須菩提！言如來者，即實真如。",
 "b17.11": "「須菩提！若有人言：『如來得阿耨多羅三藐三菩提。』者，是人不實語。須菩提！實無有法，佛得阿耨多羅三藐三菩提。",
 "b17.12": "須菩提！如來所得阿耨多羅三藐三菩提，於是中不實不妄語。是故如來說：『一切法皆是佛法。』",
 "b17.13": "須菩提！所言一切法、一切法者，即非一切法，是故名一切法。",
 "b17.14": "「須菩提！譬如有人，其身妙大。」",
 "b17.15": "須菩提言：「世尊！如來說人身妙大，則非大身，是故如來說名大身。」",
 "b17.16": "佛言：「須菩提！菩薩亦如是。若作是言：『我當滅度無量眾生。』則非菩薩。」",
 "b17.17": "佛言：「須菩提！於意云何？頗有實法名為菩薩？」",
 "b17.18": "須菩提言：「不也，世尊！實無有法名為菩薩。」",
 "b17.19": "（缺譯）",
 "b17.20": "「是故佛說：『一切法無眾生、無人、無壽者。』17.21",
 "b17.22": "何以故？如來說莊嚴佛土、莊嚴佛土者，即非莊嚴，是名莊嚴佛國土。",
 "b17.23": "須菩提！若菩薩通達無我、無我法者，如來說名真是菩薩菩薩。",
 "b18.1": "「須菩提！於意云何？如來有肉眼不？」",
 "b18.2": "須菩提言：「如是，世尊！如來有肉眼。」",
 "b18.3": "佛言：「須菩提！於意云何？如來有天眼不？」",
 "b18.4": "須菩提言：「如是，世尊！如來有天眼。」",
 "b18.5": "佛言：「須菩提！於意云何？如來有慧眼不？」",
 "b18.6": "須菩提言：「如是，世尊！如來有慧眼。」",
 "b18.7": "佛言：「須菩提！於意云何？如來有法眼不？」",
 "b18.8": "須菩提言：「如是，世尊！如來有法眼。」",
 "b18.9": "佛言：「須菩提！於意云何？如來有佛眼不？」",
 "b18.10": "須菩提言：「如是，世尊！如來有佛眼。」",
 "b18.11": "佛言：「須菩提！於意云何？如恒河中所有沙，佛說是沙不？」",
 "b18.12": "須菩提言：「如是，世尊！如來說是沙。」",
 "b18.13": "佛言：「須菩提！於意云何？如一恒河中所有沙，有如是等恒河，是諸恒河所有沙數佛世界，如是世界，寧為多不？」",
 "b18.14": "須菩提言：「彼世界甚多。世尊！」",
 "b18.15": "佛告須菩提：「爾所世界中，所有眾生，若干種心住，如來悉知。",
 "b18.16": "何以故？如來說諸心住，皆為非心住，是名為心住。",
 "b18.17": "何以故？須菩提！過去心不可得，現在心不可得，未來心不可得。",
 "b19.1": "「須菩提！於意云何？若有人以滿三千大千世界七寶持用布施，是善男子、善女人，以是因緣，得福多不？」",
 "b19.2": "須菩提言：「如是，世尊！此人以是因緣，得福甚多。」",
 "b19.3": "佛言：「如是，如是！須菩提！彼善男子、善女人，以是因緣，得福德聚多。",
 "b19.4": "須菩提！若福德聚有實，如來則不說福德聚、福德聚。",
 "b20.1": "「須菩提！於意云何？佛可以具足色身見不？」",
 "b20.2": "須菩提言：「不也，世尊！如來不應以色身見。",
 "b20.3": "何以故？如來說具足色身，即非具足色身，是故如來說名具足色身。」",
 "b20.4": "佛言：「須菩提！於意云何？如來可以具足諸相見不？」",
 "b20.5": "須菩提言：「不也，世尊！如來不應以具足諸相見。",
 "b20.6": "何以故？如來說諸相具足，即非具足，是故如來說名諸相具足。」",
 "b21.1": "（缺譯）",
 "b21.2": "（缺譯）",
 "b21.3": "佛言：「須菩提！於意云何？汝謂如來作是念：『我當有所說法。』耶？須菩提！莫作是念。何以故？若人言：『如來有所說法。』即為謗佛，不能解我所說故。",
 "b21.4": "何以故？須菩提！如來說法、說法者，無法可說，是名說法。」",
 "b21.5": "爾時，慧命須菩提白佛言：「世尊！頗有眾生，於未來世，聞說是法，生信心不？」",
 "b21.6": "佛言：「須菩提！彼非眾生，非不眾生。",
 "b21.7": "何以故？須菩提！眾生、眾生者，如來說非眾生，是名眾生。」",
 "b22.1": "佛言：「須菩提！於意云何？如來得阿耨多羅三藐三菩提耶？」",
 "b22.2": "須菩提言：「不也！世尊！世尊，無有少法如來得阿耨多羅三藐三菩提。」",
 "b22.3": "佛言：「如是，如是！須菩提！我於阿耨多羅三藐三菩提，乃至無有少法可得，是名阿耨多羅三藐三菩提。",
 "b23.1": "「復次，須菩提！是法平等，無有高下，是名阿耨多羅三藐三菩提。",
 "b23.2": "以無眾生、無人、無壽者，得平等阿耨多羅三藐三菩提，一切善法得阿耨多羅三藐三菩提。",
 "b23.3": "須菩提！所言善法、善法者，如來說非善法，是名善法。",
 "b24.1": "「須菩提！三千大千世界中，所有諸須彌山王，如是等七寶聚，有人持用布施，",
 "b24.2": "若人以此般若波羅蜜經，乃至四句偈等，受持讀誦，為他人說，於前福德，百分不及一，千分不及一，百千萬分不及一，歌羅分不及一，數分不及一，優波尼沙陀分不及一，乃至算數譬喻所不能及。",
 "b25.1": "「須菩提！於意云何？汝謂如來作是念：『我度眾生。』耶？須菩提！莫作是念。",
 "b25.2": "何以故？實無有眾生如來度者。」佛言：「須菩提！若有實眾生如來度者，如來則有我、人、眾生、壽者相。",
 "b25.3": "須菩提！如來說：『有我者，則非有我，而毛道凡夫生者以為有我。』",
 "b25.4": "須菩提！毛道凡夫生者，如來說名非生，是故言毛道凡夫生。",
 "b26.1": "「須菩提！於意云何？可以相成就得見如來不？」",
 "b26.2": "須菩提言：「如我解如來所說義，不以相成就得見如來。」",
 "b26.3": "佛言：「如是，如是！須菩提！不以相成就得見如來。」佛言：「須菩提！若以相成就觀如來者，轉輪聖王應是如來，是故非以相成就得見如來。」",
 "b26.4": "(缺譯)",
 "b26.5": "爾時，世尊而說偈言：",
 "b26.6": "「若以色見我，以音聲求我，是人行邪道，不能見如來。",
 "b26.7": "彼如來妙體，即法身諸佛，法體不可見，彼識不能知。",
 "b27.1": "「須菩提！於意云何？如來可以相成就得阿耨多羅三藐三菩提？",
 "b27.2": "須菩提！莫作是念：『如來以相成就得阿耨多羅三藐三菩提。』",
 "b27.3": "須菩提！汝若作是念：『菩薩發阿耨多羅三藐三菩提心者，說諸法斷滅相。』須菩提！莫作是念。",
 "b27.4": "何以故？菩薩發阿耨多羅三藐三菩提心者，不說諸法斷滅相。",
 "b28.1": "「須菩提！若善男子、善女人，以滿恒河沙等世界七寶，持用布施。",
 "b28.2": "若有菩薩，知一切法無我，得無生法忍。此功德勝前所得福德。",
 "b28.3": "須菩提！以諸菩薩不取福德故。」",
 "b28.4": "須菩提白佛言：「世尊！菩薩不取福德？」",
 "b28.5": "佛言：「須菩提！菩薩受福德，不取福德，是故菩薩取福德。",
 "b29.1": "「須菩提！若有人言：『如來若去若來若住、若坐若臥。』是人不解我所說義。",
 "b29.2": "何以故？如來者，無所至去，無所從來，故名如來。",
 "b30.1": "「須菩提！若善男子、善女人，以三千大千世界微塵。復以爾許微塵世界，碎為微塵阿僧祇。須菩提！於意云何？是微塵眾，寧為多不？」",
 "b30.2": "須菩提言：「彼微塵眾甚多。世尊！",
 "b30.3": "何以故？若是微塵眾實有者，佛則不說是微塵眾。",
 "b30.4": "何以故？佛說微塵眾，則非微塵眾，是故佛說微塵眾。",
 "b30.5": "世尊！如來所說三千大千世界，則非世界，是故佛說三千大千世界。",
 "b30.6": "何以故？若世界實有者，則是一合相。如來說一合相，則非一合相，是故佛說一合相。」",
 "b30.7": "佛言：「須菩提！一合相者，則是不可說，但凡夫之人，貪著其事。",
 "b31.1": "何以故？須菩提！若人如是言：『佛說我見、人見、眾生見、壽者見。』須菩提！於意云何？是人所說，為正語不？」",
 "b31.2": "須菩提言：「不也，世尊！",
 "b31.3": "何以故？世尊！如來說我見、人見、眾生見、壽者見，即非我見、人見、眾生見、壽者見，是名我見、人見、眾生見、壽者見。」",
 "b31.4": "「須菩提！菩薩發阿耨多羅三藐三菩提心者，於一切法，應如是知，如是見，如是信，如是不住法相。",
 "b31.5": "何以故？須菩提！所言法相、法相者，如來說即非法相，是名法相。",
 "b32.1": "須菩提！若有菩薩摩訶薩以滿無量阿僧祇世界七寶，持用布施。",
 "b32.2": "若有善男子、善女人，發菩薩心者，於此般若波羅蜜經，乃至四句偈等，受持讀誦，為他人說，其福勝彼無量阿僧祇。",
 "b32.3": "云何為人演說而不名說，是名為說。」而說偈言：32.4",
 "b32.5": "佛說是經已，長老須菩提，及諸比丘、比丘尼、優婆塞、優婆夷、菩薩摩訶薩，一切世間天、人、阿修羅、乾闥婆等，聞佛所說，皆大歡喜，信受奉行。",
 "p0.0": "金剛般若波羅蜜經",
 "p0.1": "陳天竺三藏真諦譯",
 "p1.1": "如是我聞：一時",
 "p1.2": "佛婆伽婆，住舍衛國祇陀樹林給孤獨園，與大比丘眾千二百五十人俱。",
 "p1.3": "爾時世尊，於日前分，著衣持鉢，入舍衛大國而行乞食。",
 "p1.4": "於其國中次第行乞，還至本處。飯食事訖，於中後時，收衣鉢，洗足已。如常敷座，加趺安坐，端身而住，正念現前。",
 "p1.5": "時諸比丘俱往佛所，至佛所已，頂禮佛足，右遶三匝，却坐一面。",
 "p2.1": "爾時淨命須菩提，於大眾中共坐聚集。",
 "p2.2": "時淨命須菩提，即從座起，偏袒右肩，頂禮佛足，右膝著地，向佛合掌而白佛言：",
 "p2.3": "「希有，世尊！如來、應供、正遍覺知，善護念諸菩薩摩訶薩，由無上利益故；善付囑諸菩薩摩訶薩，由無上教故。",
 "p2.4": "世尊！若善男子、善女人，發阿耨多羅三藐三菩提心，行菩薩乘，云何應住？云何修行？云何發起菩薩心？」",
 "p2.5": "淨命須菩提作是問已。爾時世尊告須菩提：「須菩提！善哉，善哉！如是，善男子！",
 "p2.6": "如來善護念諸菩薩摩訶薩，無上利益故；善付囑諸菩薩摩訶薩，無上教故。須菩提！",
 "p2.7": "是故汝今一心諦聽，恭敬，善思念之。我今當為汝說。如菩薩發菩提心，行菩薩乘，如是應住，如是修行，如是發心。」",
 "p2.8": "須菩提言：「唯然，世尊！」",
 "p3.1": "佛告須菩提：「須菩提！善男子、善女人，發菩提心，行菩薩乘，應如是發心：",
 "p3.2": "『所有一切眾生類攝，若卵生、若胎生、若濕生、若化生，若有色、若無色，若有想、若無想，若非有想、若非無想，乃至眾生界，及假名說。如是眾生，我皆安置於無餘涅槃。』",
 "p3.3": "如是涅槃無量眾生已，無一眾生被涅槃者。",
 "p3.4": "何以故？須菩提！若菩薩有眾生想，即不應說名為菩薩。",
 "p3.5": "何以故？須菩提！一切菩薩，無我想、眾生想、壽者想、受者想。",
 "p4.1": "「復次，須菩提！菩薩不著己類而行布施，不著所餘行於布施，",
 "p4.2": "不著色、聲、香、味、觸、法應行布施。",
 "p4.3": "須菩提！菩薩應如是行施，不著相想。",
 "p4.4": "何以故？須菩提！若菩薩無執著心行於布施，是福德聚不可數量。",
 "p4.5": "「須菩提！汝意云何？東方虛空可數量不？」",
 "p4.6": "須菩提言：「不可，世尊！」",
 "p4.7": "佛言：「如是，須菩提！南西北方，四維上下，十方虛空，可數量不？」",
 "p4.8": "須菩提言：「不可，世尊！」",
 "p4.9": "佛言：「如是，須菩提！若菩薩無執著心行於布施，是福德聚亦復如是不可數量。",
 "p4.10": "(缺譯)",
 "p5.1": "「須菩提！汝意云何？可以身相勝德見如來不？」",
 "p5.2": "「不能，世尊！何以故？如來所說身相勝德，非相勝德。」",
 "p5.3": "「何以故？須菩提！凡所有相，皆是虛妄。無所有相，即是真實。由相無相，應見如來。」如是說已。",
 "p5.4": "淨命須菩提白佛言：",
 "p5.5": "「世尊！於今現時及未來世，頗有菩薩聽聞正說如是等相此經章句，生實想不？」",
 "p6.1": "佛告須菩提：「",
 "p6.2": "莫作是說：『於今現時及未來世，頗有菩薩聽聞正說如是等相此經章句，生實想不？』",
 "p6.3": "何以故？須菩提！於未來世，實有眾生，得聞此經，能生實想。",
 "p6.4": "「復次，須菩提！於未來世，後五百歲，正法滅時，有諸菩薩摩訶薩，持戒修福及有智慧。",
 "p6.5": "（缺譯）",
 "p6.6": "須菩提！是諸菩薩摩訶薩，非事一佛，非於一佛種諸善根，",
 "p6.7": "已事無量百千諸佛，已於無量百千佛所而種善根。",
 "p6.8": "若有善男子、善女人，聽聞正說如是等相此經章句，乃至一念生實信者。",
 "p6.9": "須菩提！如來悉知是人，悉見是人。「須菩提！是善男子、善女人，生長無量福德之聚！",
 "p6.10": "何以故？須菩提！是諸菩薩無復我想、眾生想、壽者想、受者想。",
 "p6.11": "是諸菩薩無法想非無法想，無想非無想。",
 "p6.12": "何以故？須菩提！是諸菩薩若有法想，即是我執，及眾生、壽者、受者執。",
 "p6.13": "(缺譯)",
 "p6.14": "須菩提！是故菩薩不應取法，不應取非法。",
 "p6.15": "為如是義故，如來說：『若觀行人，解筏喻經，法尚應捨，何況非法。』」",
 "p7.1": "復次，佛告淨命須菩提：",
 "p7.2": "「須菩提！汝意云何？如來得阿耨多羅三藐三菩提耶？如來有所說法耶？」",
 "p7.3": "須菩提言：「如我解佛說義，無所有法如來所得，名阿耨多羅三藐三菩提；亦無有法如來所說。",
 "p7.4": "何以故？是法如來所說，不可取，不可言；非法，非非法。",
 "p7.5": "何以故？一切聖人皆以無為真如所顯現故。」",
 "p8.1": "「須菩提！汝意云何？以三千大千世界遍滿七寶，若人持用布施，是善男子、善女人，因此布施生福多不？」",
 "p8.2": "須菩提言：「甚多，世尊！甚多，修伽陀！是善男子、善女人，因此布施，得福甚多。",
 "p8.3": "何以故？世尊！此福德聚，即非福德聚，是故如來說福德聚。」",
 "p8.4": "佛言：「須菩提！若善男子、善女人，以三千大千世界遍滿七寶，持用布施。",
 "p8.5": "若復有人，從此經中受四句偈，為他正說，顯示其義。此人以是因緣，所生福德，最多於彼無量無數。",
 "p8.6": "何以故？須菩提！如來無上菩提，從此福成。諸佛世尊，從此福生。",
 "p8.7": "何以故？須菩提！所言佛法者，即非佛法，是名佛法。",
 "p9.1": "「須菩提！汝意云何？須陀洹能作是念：『我得須陀洹果。』不？」",
 "p9.2": "須菩提言：「不能，世尊！何以故？世尊！實無所有能至於流，故說須陀洹。乃至色、聲、香、味、觸、法亦復如是，故名須陀洹。",
 "p9.3": "「斯陀含名一往來，實無所有能至往來，是名斯陀含。「阿那含名為不來，實無所有能至不來，是名阿那含。」",
 "p9.8": "佛言：「須菩提！汝意云何？阿羅漢能作是念：『我得阿羅漢果。』不？」",
 "p9.9": "須菩提言：「不能，世尊！何以故！實無所有名阿羅漢。世尊！若阿羅漢作是念：『我得阿羅漢果。』此念即是我執、眾生執、壽者執、受者執。",
 "p9.10": "世尊！如來阿羅訶三藐三佛陀讚我，住無諍三昧人中最為第一。世尊！我今已得阿羅漢，離三有欲。世尊！我亦不作是念：『我是阿羅漢。』",
 "p9.11": "世尊！我若有是念：『我已得阿羅漢果。』如來則應不授我記：『住無諍三昧人中，須菩提善男子最為第一。』實無所住，住於無諍、住於無諍。」",
 "p10.1": "佛告須菩提：「汝意云何？昔從然燈如來阿羅訶三藐三佛陀所，頗有一法，如來所取不？」",
 "p10.2": "須菩提言：「不取，世尊！實無有法，昔從然燈如來阿羅訶三藐三佛陀所，如來所取。」",
 "p10.3": "佛告須菩提：「若有菩薩作如是言：『我當莊嚴清淨佛土。』而此菩薩說虛妄言。",
 "p10.4": "何以故？須菩提！莊嚴佛土者，如來說非莊嚴，是故莊嚴清淨佛土。",
 "p10.5": "須菩提！是故菩薩應生如是無住著心，不住色、聲、香、味、觸、法生心，應無所住而生其心。",
 "p10.6": "「須菩提！譬如有人體相勝大，如須彌山。須菩提！汝意云何？如是體相為勝大不？」",
 "p10.7": "須菩提言：「甚大，世尊！何以故？如來說非有，名為有身，此非是有，故說有身。」",
 "p11.1": "佛告須菩提：「汝意云何？於恒伽所有諸沙，如其沙數所有恒伽，諸恒伽沙寧為多不？」",
 "p11.2": "須菩提言：「甚多，世尊！但諸恒伽，尚多無數，何況其沙。」",
 "p11.3": "佛言：「須菩提！我今覺汝，我今示汝。諸恒伽中所有沙數爾許世界，若有善男子、善女人，以七寶遍滿，持施如來應供正遍覺知。須菩提！汝意云何？此人以是因緣，得福多不？」",
 "p11.4": "須菩提言：「甚多，世尊！甚多，修伽陀！此人以是因緣，生福甚多。」",
 "p11.5": "「須菩提！若善男子、善女人，以七寶遍滿爾所恒伽沙世界，持用布施。若善男子、善女人，從此經典乃至四句偈等，恭敬受持，為他正說。是人所生福德，最勝於彼無量無數！",
 "p12.1": "「復次，須菩提！隨所在處，若有人能從是經典，乃至四句偈等，讀誦講說。當知此處，於世間中即成支提，一切人、天、阿修羅等，皆應恭敬。",
 "p12.2": "何況有人盡能受持讀誦如此經典。",
 "p12.3": "當知是人，則與無上希有之法而共相應。是土地處，大師在中，或隨有一可尊重人。」",
 "p13.1": "佛說是已。淨命須菩提白佛言：「世尊！如是經典，名號云何？我等云何奉持？」",
 "p13.2": "佛告須菩提：「此經名『般若波羅蜜』。以是名字，汝當奉持。何以故？須菩提！是般若波羅蜜，如來說非般若波羅蜜。",
 "p13.3": "須菩提！汝意云何？頗有一法一佛說不？」",
 "p13.4": "須菩提言：「無有，世尊！無有一法一如來說。」",
 "p13.5": "佛告須菩提：「三千大千世界所有微塵，是為多不？」",
 "p13.6": "須菩提言：「此世界微塵，甚多，世尊！甚多，修伽陀！",
 "p13.7": "何以故？世尊！此諸微塵，如來說非微塵，故名微塵。此諸世界，如來說非世界，故說世界。」",
 "p13.8": "佛告須菩提：「汝意云何？可以三十二大人相見如來不？」",
 "p13.9": "須菩提言：「不可，世尊！何以故？此三十二大人相，如來說非相，故說三十二大人相。」",
 "p13.10": "佛告須菩提：「若有善男子、善女人，如諸恒河所有沙數，如是沙等身命捨以布施。若有善男子、善女人，從此經典，乃至四句偈等，恭敬受持，為他正說。此人以是因緣，生福多彼無量無數。」",
 "p14.1": "爾時淨命須菩提，由法利疾，即便悲泣。收淚而言：",
 "p14.2": "「希有！世尊！希有！修伽陀！如此經典如來所說，我從昔來至得聖慧，未曾聞說如是經典。",
 "p14.3": "何以故？世尊說般若波羅蜜，即非般若波羅蜜，故說般若波羅蜜。世尊！當知是人，則與無上希有之法而共相應，聞說經時，能生實想。世尊！是實想者，實非有想，是故如來說名實想、說名實想。",
 "p14.4": "世尊！此事於我非為希有。正說經時，我生信解。世尊！於未來世，若有眾生恭敬受持，為他正說，當知是人，則與無上希有之法而共相應。",
 "p14.5": "世尊！此人無復我想、眾生想、壽者想、受者想。",
 "p14.6": "何以故？我想、眾生想、壽者想、受者想，即是非想。",
 "p14.7": "何以故？諸佛世尊，解脫諸想盡無餘故。」說是言已。佛告須菩提：",
 "p14.8": "「如是，須菩提！如是。當知是人，則與無上希有之法而共相應。是人聞說此經，不驚不怖不畏。",
 "p14.9": "何以故？須菩提！此法如來所說，是第一波羅蜜。此波羅蜜，如來所說，無量諸佛亦如是說，是故說名第一波羅蜜。",
 "p14.10": "「復次，須菩提！如來忍辱波羅蜜，即非波羅蜜。",
 "p14.11": "何以故？須菩提！昔時我為迦陵伽王斬斫身體，骨肉雖碎。我於爾時，無有我想、眾生想、壽者想、受者想，無想非無想。",
 "p14.12": "何以故？須菩提！我於爾時，若有我想、眾生想、壽者想、受者想，是時則應生瞋恨想。",
 "p14.13": "須菩提！我憶過去五百生，作大僊人，名曰說忍。於爾所生中，心無我想、眾生想、壽者想、受者想。",
 "p14.14": "是故須菩提！菩薩摩訶薩捨離一切想，於無上菩提應發起心，不應生住色心，不應生住聲、香、味、觸心，不應生住法心，不應生住非法心，不應生有所住心。",
 "p14.15": "何以故？若心有住，則為非住。故如來說：『菩薩無所住心應行布施。』",
 "p14.16": "復次，須菩提！菩薩應如是行施，為利益一切眾生。",
 "p14.17": "此眾生想，即是非想。如是一切眾生，如來說即非眾生。何以故？諸佛世尊遠離一切想故。",
 "p14.18": "「須菩提！如來說實、說諦、說如、說非虛妄。",
 "p14.19": "復次，須菩提！是法如來所覺，是法如來所說，是法非實非虛。",
 "p14.20": "「須菩提！譬如有人，在於盲暗，如是當知菩薩墮相，行墮相施。",
 "p14.21": "須菩提！如人有目，夜已曉，晝日光照，見種種色，如是當知菩薩不墮於相，行無相施。",
 "p14.22": "「復次，須菩提！於未來世，若有善男子、善女人，受持讀誦修行，為他正說如是經典，如來悉知是人，悉見是人，生長無量福德之聚。",
 "p15.1": "「復次，須菩提！若有善男子、善女人，於日前分布施身命，如上所說諸河沙數；於日中分布施身命，於日後分布施身命，皆如上說諸河沙數。如是無量百千萬億劫，以身命布施。",
 "p15.2": "若復有人，聞此經典，不起誹謗，以是因緣，生福多彼無數無量。何況有人書寫受持讀誦，教他修行，為人廣說。",
 "p15.3": "「復次，須菩提！如是經典不可思量，無能與等。",
 "p15.4": "如來但為憐愍利益能行無上乘，及行無等乘人說。",
 "p15.5": "若復有人，於未來世，受持讀誦，教他修行，正說是經。如來悉知是人，悉見是人，",
 "p15.6": "與無數無量不可思議無等福聚而共相應。如是等人，由我身分，則能荷負無上菩提。",
 "p15.7": "何以故？須菩提！如是經典，若下願樂人，及我見、眾生見、壽者見、受者見，如此等人，能聽能修讀誦教他正說，無有是處。",
 "p15.8": "復次，須菩提！隨所在處，顯說此經，一切世間天人阿修羅等，皆應供養，作禮右遶。當知此處，於世間中即成支提。",
 "p16.1": "「須菩提！若有善男子、善女人，受持讀誦教他修行，正說如是等經。此人現身受輕賤等。",
 "p16.2": "過去世中所造惡業，應感生後惡道果報。以於現身受輕苦故，先世罪業及苦果報，則為消滅，當得阿耨多羅三藐三菩提。",
 "p16.3": "「須菩提！我憶往昔無數無量過於算數大劫，過去然燈如來阿羅訶三藐三佛陀後八萬四千百千俱胝諸佛如來已成佛竟，我皆承事供養恭敬，無空過者。",
 "p16.4": "若復有人，於後末世五百歲時，受持讀誦，教他修行，正說此經。",
 "p16.5": "須菩提！此人所生福德之聚，以我往昔承事供養諸佛如來所得功德，比此功德，百分不及一，千萬億分不及一，窮於算數不及其一，乃至威力品類相應譬喻所不能及。",
 "p16.6": "「須菩提！若善男子、善女人，於後末世，受持讀誦如此等經，所得功德，我若具說，若有善男子、善女人，諦聽憶持爾所福聚，或心迷亂及以顛狂。",
 "p16.7": "復次，須菩提！如是經典不可思議，若人修行及得果報，亦不可思議。」",
 "p17.1": "爾時須菩提白佛言：「世尊！善男子、善女人，發阿耨多羅三藐三菩提心，行菩薩乘，云何應住？云何修行？云何發起菩薩心？」",
 "p17.2": "佛告須菩提：「善男子、善女人，發阿耨多羅三藐三菩提心者，當生如是心：『我應安置一切眾生，令入無餘涅槃。如是般涅槃無量眾生已，無一眾生被涅槃者。』",
 "p17.3": "何以故？須菩提！若菩薩有眾生想，則不應說名為菩薩。",
 "p17.4": "何以故？須菩提！實無有法，名為能行菩薩上乘。",
 "p17.5": "「須菩提！汝意云何？於然燈佛所，頗有一法如來所得，名阿耨多羅三藐三菩提不？」",
 "p17.6": "須菩提言：「不得，世尊！於然燈佛所，無有一法如來所得，名阿耨多羅三藐三菩提。」",
 "p17.7": "佛言：「如是，須菩提！如是。於然燈佛所，無有一法如來所得，名阿耨多羅三藐三菩提。",
 "p17.8": "須菩提！於然燈佛所，若有一法如來所得，名阿耨多羅三藐三菩提，然燈佛則不授我記：『婆羅門！汝於來世，當得作佛，號釋迦牟尼，多陀阿伽度，阿羅訶，三藐三佛陀。』",
 "p17.9": "須菩提！由實無有法如來所得，名阿耨多羅三藐三菩提，是故然燈佛與我授記，作如是言：『婆羅門！汝於來世，當得作佛，號釋迦牟尼，多陀阿伽度，阿羅訶，三藐三佛陀。』",
 "p17.10": "何以故？須菩提！如來者，真如別名。",
 "p17.11": "「須菩提！若有人說：『如來得阿耨多羅三藐三菩提。』是人不實語。何以故？須菩提！實無有法如來所得，名阿耨多羅三藐三菩提。",
 "p17.12": "「須菩提！此法如來所得，無實無虛。是故如來說：『一切法皆是佛法。』",
 "p17.13": "須菩提！一切法者，非一切法故，如來說名一切法。",
 "p17.14": "「須菩提！譬如有人遍身大身。」",
 "p17.15": "須菩提言：「世尊！是如來所說遍身大身，則為非身，是故說名遍身大身。」",
 "p17.16": "佛言：「如是，須菩提！如是，須菩提！若有菩薩說如是言：『我當般涅槃一切眾生。』則不應說名為菩薩。",
 "p17.17": "須菩提！汝意云何？頗有一法名菩薩不？」",
 "p17.18": "須菩提言：「無有，世尊！」",
 "p17.19": "(缺譯)",
 "p17.20": "佛言：「須菩提！是故如來說：『一切法無我、無眾生、無壽者、無受者。』",
 "p17.21": "須菩提！若有菩薩說如是言：『我當莊嚴清淨佛土。』如此菩薩說虛妄言。",
 "p17.22": "何以故？須菩提！莊嚴佛土者，如來說則非莊嚴，是故莊嚴清淨佛土。",
 "p17.23": "須菩提！若菩薩信見諸法無我、諸法無我，如來應供正遍覺說：『是名菩薩，是名菩薩。』",
 "p18.1": "「須菩提！汝意云何？如來有肉眼不？」",
 "p18.2": "須菩提言：「如是，世尊！如來有肉眼。」",
 "p18.3": "佛言：「須菩提！汝意云何？如來有天眼不？」",
 "p18.4": "須菩提言：「如是，世尊！如來有天眼。」",
 "p18.5": "佛言：「須菩提！汝意云何？如來有慧眼不？」",
 "p18.6": "須菩提言：「如是，世尊！如來有慧眼。」",
 "p18.7": "佛言：「須菩提！汝意云何？如來有法眼不？」",
 "p18.8": "須菩提言：「如是，世尊！如來有法眼。」",
 "p18.9": "佛言：「須菩提！汝意云何？如來有佛眼不？」",
 "p18.10": "須菩提言：「如是，世尊！如來有佛眼。」",
 "p18.11": "(合併至18.13)",
 "p18.12": "(合併至18.14)",
 "p18.13": "「須菩提！汝意云何？於恒伽江所有諸沙，如其沙數所有恒伽，如諸恒伽所有沙數世界，如是，寧為多不？」",
 "p18.14": "須菩提言：「如是，世尊！此等世界，其數甚多。」",
 "p18.15": "佛言：「須菩提！爾所世界中，所有眾生，我悉見知心相續住，有種種類。",
 "p18.16": "何以故？須菩提！心相續住，如來說非續住，故說續住。",
 "p18.17": "何以故？須菩提！過去心不可得，未來心不可得，現在心不可得。",
 "p19.1": "「須菩提！汝意云何？若有人以滿三千大千世界七寶，而用布施，是善男子、善女人，以是因緣，得福多不？」",
 "p19.2": "須菩提言：「甚多，世尊！甚多，修伽陀！」",
 "p19.3": "佛言：「如是，須菩提！如是。彼善男子、善女人，以是因緣，得福聚多。」",
 "p19.4": "佛言：「須菩提！若福德聚，但名為聚，如來則不應說是福德聚、是福德聚。",
 "p20.1": "「須菩提！汝意云何？可以具足色身觀如來不？」",
 "p20.2": "須菩提言：「不可，世尊！不可以具足色身觀於如來。",
 "p20.3": "何以故？此具足色身，如來說非具足色身，是故如來說名具足色身。」",
 "p20.4": "佛言：「須菩提！汝意云何？可以具足諸相觀如來不？」",
 "p20.5": "須菩提言：「不可，世尊！不可以具足諸相觀於如來。",
 "p20.6": "何以故？此具足相，如來說非具足相，是故如來說具足相。」",
 "p21.1": "佛言：「須菩提！汝意云何？如來有如是意：『我今實說法。』耶？",
 "p21.2": "(缺譯)",
 "p21.3": "須菩提！若有人言：『如來實能說法。』汝應當知，是人由非實有，及以邪執，起誹謗我。",
 "p21.4": "何以故？須菩提！說法、說法，實無有法名為說法。」",
 "p21.5": "爾時須菩提白佛言：「世尊！頗有眾生，於未來世，聽聞正說如是等相，此經章句，生實信不？」",
 "p21.6": "佛告須菩提：「彼非眾生，非非眾生。",
 "p21.7": "何以故？須菩提！彼眾生者，如來說非眾生，非非眾生，故說眾生。",
 "p22.1": "「須菩提！汝意云何？頗有一法如來所得，名阿耨多羅三藐三菩提不？」",
 "p22.2": "須菩提言：「不得，世尊！無有一法如來所得，名阿耨多羅三藐三菩提。」",
 "p22.3": "佛言：「如是，須菩提！如是。乃至無有如微塵法，如來所捨，如來所得，是故說名阿耨多羅三藐三菩提平等平等。",
 "p23.1": "復次，須菩提！諸佛覺知，無有差別，是故說名阿耨多羅三藐三菩提。復次，須菩提！此法平等，無有高下，是名阿耨多羅三藐三菩提。",
 "p23.2": "復次，須菩提！由法無我、無眾生、無壽者、無受者等，此法平等，故名阿耨多羅三藐三菩提。",
 "p23.3": "復次，須菩提！由實善法具足圓滿，得阿耨多羅三藐三菩提。須菩提！所言善法、善法者，如來說非法，故名善法。",
 "p24.1": "「須菩提！三千大千世界，所有諸須彌山王，如是等七寶聚，滿此世界，有人持用布施。",
 "p24.2": "若人從此般若波羅蜜經，乃至四句偈等，受持讀誦為他正說，所得功德，以前功德比此功德，百分不及一，千萬億分不及一，窮於算數不及其一，乃至威力品類相應譬喻所不能及。",
 "p25.1": "「須菩提！汝意云何？如來作是念：『我度眾生。』耶？須菩提！汝今不應作如是念。",
 "p25.2": "何以故？實無眾生如來所度。須菩提！若有眾生如來所度，即是我執、眾生執、壽者執、受者執。",
 "p25.3": "須菩提！此我等執，如來說非執，嬰兒凡夫眾生之所執故。",
 "p25.4": "須菩提！嬰兒凡夫眾生者，如來說非眾生，故說嬰兒凡夫眾生。",
 "p26.1": "須菩提！汝意云何？可以具足相觀如來不？」",
 "p26.2": "須菩提言：「如我解佛所說義，不以具足相應觀如來。」",
 "p26.3": "佛言：「如是，須菩提！如是。不以具足相應觀如來。何以故？若以具足相觀如來者，轉輪聖王應是如來，是故不以具足相應觀如來。」",
 "p26.4": "（缺譯）",
 "p26.5": "是時世尊而說偈言：",
 "p26.6": "「若以色見我，以音聲求我，是人行邪道，不應得見我。由法應見佛，調御法為身，此法非識境，法如深難見。",
 "p27.1": "「須菩提！汝意云何？如來可以具足相得阿耨多羅三藐三菩提不？",
 "p27.2": "須菩提！汝今不應作如是見：『如來以具足相得阿耨多羅三藐三菩提。』何以故？",
 "p27.3": "須菩提！如來不由具足相得阿耨多羅三藐三菩提。須菩提！若汝作是念：『如來有是說：「行菩薩乘人，有法可滅。」』須菩提！汝莫作此見。",
 "p27.4": "何以故？如來不說行菩薩乘人有法可滅，及以永斷。",
 "p28.1": "「須菩提！若有善男子、善女人，以滿恒伽沙等世界七寶，持用布施。",
 "p28.2": "若有菩薩，於一切法無我、無生，得無生忍，以是因緣，所得福德最多於彼。",
 "p28.3": "須菩提！行大乘人，不應執取福德之聚。」",
 "p28.4": "須菩提言：「此福德聚，可攝持不？」",
 "p28.5": "佛言：「須菩提！此福德聚，可得攝持，不可執取。是故說此福德之聚，應可攝持。",
 "p29.1": "「須菩提！若有人言：『如來行住坐臥。』是人不解我所說義。",
 "p29.2": "何以故？須菩提！如來者，無所行去，亦無所從來，是故名如來應供正遍覺知。",
 "p30.1": "「須菩提！若善男子、善女人，以三千大千世界地大微塵，燒成灰末，合為墨丸，如微塵聚。須菩提！汝意云何？是隣虛聚，寧為多不？」",
 "p30.2": "須菩提言：「彼隣虛聚甚多。世尊！",
 "p30.3": "何以故？世尊！若隣虛聚是實有者，世尊則不應說名隣虛聚。",
 "p30.4": "何以故？世尊！所說此隣虛聚，如來說非隣虛聚，是故說名為隣虛聚。",
 "p30.5": "如來所說三千大千世界，則非世界，故說三千大千世界。",
 "p30.6": "何以故？世尊！若執世界為實有者，是聚一執。此聚一執，如來說非執，故說聚一執。」",
 "p30.7": "佛世尊言：「須菩提！此聚一執，但世言說。須菩提！是法非可言法，嬰兒凡夫偏言所取。",
 "p31.1": "「須菩提！若有人言：『如來說我見、眾生見、壽者見、受者見。』須菩提！汝意云何？是人言說，為正語不？」",
 "p31.2": "須菩提言：「不正，世尊！不正，修伽陀！",
 "p31.3": "何以故？如來所說我見、眾生見、壽者見、受者見，即是非見，是故說我見、眾生見、壽者見、受者見。」",
 "p31.4": "「須菩提！若人行菩薩乘，如是應知應見應信，一切諸法；如是應修，為令法想不得生起。",
 "p31.5": "何以故？須菩提！是法想、法想者，如來說即非想，故說法想。",
 "p32.1": "「須菩提！若有菩薩摩訶薩，以滿無數無量世界七寶持用布施，",
 "p32.2": "若有善男子、善女人，從此般若波羅蜜經，乃至四句偈等，受持讀誦，教他修行，為他廣說。是善男子、善女人，以是因緣，所生福德，最多於彼無量無數。",
 "p32.3": "云何顯說此經？如無所顯說，故言顯說。",
 "p32.4": "「如如不動，恒有正說。應觀有為法，如暗、翳、燈、幻，露、泡、夢、電、雲。」",
 "p32.5": "爾時世尊說是經已，大德須菩提，心進歡喜，及諸比丘、比丘尼、優婆塞、優婆夷眾，人、天、阿修羅等，一切世間踊躍歡喜信受奉行。",
 "g0.0": "金剛能斷般若波羅蜜經",
 "g0.1": "隋大業年中三藏笈多譯",
 "g0.2": "歸命一切佛菩薩海等！",
 "g1.1": "如是我聞：一時，",
 "g1.2": "世尊聞者遊行勝林中，無親搏施與園中，大比丘眾共半三十比丘百。",
 "g1.3": "爾時，世尊前分時，上裙著已，器上給衣持，聞者大城搏為入。",
 "g1.4": "爾時，世尊聞者大城搏為行已，作已食，作已後食，搏墮過器上給衣收攝，兩足洗，坐具世尊施設，如是座中跏趺結，直身作現前念近住。",
 "g1.5": "爾時，多比丘若世尊彼詣到已，世尊兩足頂禮，世尊邊三右繞作已，一邊坐。",
 "g2.1": "彼復時，命者善實，彼所如是眾聚集會坐。",
 "g2.2": "爾時，命者善實起坐。一肩上著作已，右膝輪地著已，若世尊彼合掌，向世尊邊如是言：",
 "g2.3": "「希有，世尊！乃至所有如來、應、正遍知，菩薩摩訶薩順攝，最勝順攝；乃至所有如來、應、正遍知，菩薩摩訶薩付囑，最勝付囑。",
 "g2.4": "彼云何，世尊！菩薩乘發行住應？云何修行應？云何心降伏應？」",
 "g2.5": "如是語已。世尊，命者善實邊如是言：「善，善！善實！如是，如是！善實！如是，如是！",
 "g2.6": "順攝，如來，菩薩摩訶薩最勝順攝；付囑，如來，菩薩摩訶薩最勝付囑。",
 "g2.7": "彼，善實！聽善，善意念作，說當如菩薩乘發行住應，如修行應，如心降伏應。」",
 "g2.8": "「如是，世尊！」命者善實：「世尊邊願欲聞。」",
 "g3.1": "世尊於此言：「此，善實！菩薩乘發行，如是心發生應：",
 "g3.2": "『所有，善實！眾生，眾生攝攝已，卵生、若胎生、若濕生、若化生，若色、若無色，若想、若無想、若非想非無想，所有眾生界施設已，彼我一切無受餘涅槃界滅度應。』",
 "g3.3": "如是無量雖眾生滅度，無有一眾生滅度有。",
 "g3.4": "彼何所因？若，善實！菩薩摩訶薩眾生想轉，不彼菩薩摩訶薩名說應。",
 "g3.5": "彼何所因？不彼，善實！菩薩名說應，若眾生想轉，壽想若、人想若轉。",
 "g4.1": "「雖然復次時，善實！不菩薩摩訶薩事住施與應，無所住施與應，",
 "g4.2": "不色住施與應，不聲、香、味、觸、法中住施與應。",
 "g4.3": "如是，此，善實！菩薩摩訶薩施與應，如不相想亦住。",
 "g4.4": "彼何所因？若，善實！菩薩摩訶薩不住施與，彼所，善實！福聚不可量受取。",
 "g4.5": "「彼何意念？善實！可前方虛空量受取？」",
 "g4.6": "善實言：「不如此，世尊！」",
 "g4.7": "世尊言：「如是右南後西高北下上方順不正方，普十方可虛空量受取？」",
 "g4.8": "善實言：「不如此，世尊！」",
 "g4.9": "世尊言：「如是，如是！善實！如是，如是！若菩薩摩訶薩不住施與，彼所，善實！福聚不可量受取。",
 "g4.10": "雖然復次時，善實！如是菩薩乘發行施與應，如不相想亦住。",
 "g5.1": "「彼何意念？善實！相具足如來見應？」",
 "g5.2": "善實言：「不，世尊！相具足如來見應。",
 "g5.3": "彼何所因？若彼，如來相具足說；彼如是非相具足。」",
 "g5.4": "如是語已。世尊，命者善實邊如是言：",
 "g5.5": "「所有，善實！相具足，所有妄，所有不相具足，所有不妄，名此相不相如來見應。」",
 "g6.1": "如是語已。命者善實，世尊邊如是言：",
 "g6.2": "「雖然，世尊！頗有眾生，當有未來世，後時、後長時、後分五百，正法破壞時中，轉時中，若此中，如是色類經中說中，實想發生當有？」",
 "g6.3": "世尊言：「莫，善實！汝如是語：『雖然，世尊！頗有眾生，當有未來世，後時、後長時、後分五百，正法破壞時中，轉時中，若此中，如是色類經中說中，實想發生當有？』",
 "g6.4": "雖然復次時，善實！當有未來世，菩薩摩訶薩，後分五百，正法破壞時中，轉時中，戒究竟、功德究竟、智慧究竟。",
 "g6.5": "「不，復次時，彼，善實！菩薩摩訶薩一佛親近供養當有，不一佛種植善根。",
 "g6.6": "雖然復次時，善實！不一佛百千親近供養，不一佛百千種植善根，彼菩薩摩訶薩當有，",
 "g6.7": "若此中，如是色類中，經句中說中，一心淨信亦得當。",
 "g6.8": "知彼，善實！如來佛智；見彼，善實！如來佛眼。一切彼，善實！無量福聚生當取當。",
 "g6.9": "彼何所因？不，善實！彼等菩薩摩訶薩我想轉，不眾生想、不壽想、不人想轉。",
 "g6.10": "不亦彼等，善實！菩薩摩訶薩，法想轉，無法想轉；不亦彼等，想、無想轉不。",
 "g6.11": "彼何所因？若，善實！彼等菩薩摩訶薩法想轉，彼如是，彼等我取有，眾生取、壽取、人取有；",
 "g6.12": "若無法想轉，彼如是，彼等我取有，眾生取、壽取、人取有。",
 "g6.13": "彼何所因？不，復次時，善實！菩薩摩訶薩法取應，不非法取應。",
 "g6.14": "彼故此義意，如來說筏喻，法本解法，如是捨應，何況非法。」",
 "g7.1": "復次，世尊，命者善實邊如是言：",
 "g7.2": "「彼何意念？善實！有如來、應、正遍知，無上正遍知證覺？有復法如來說？」",
 "g7.3": "善實言：「如我，世尊！世尊說義解，我，無有一法若如來無上正遍知證覺；無有一法若如來說。",
 "g7.4": "彼何所因？若彼，如來法說，不可取，彼不可說，不彼法，非不法。",
 "g7.5": "彼何因？無為法顯明聖人。」",
 "g8.1": "世尊言：「彼何意念？善實！若有善家子，若善家女，若此三千大千世界七寶滿作已，如來等，應等，正遍知等施與。彼何意念？善實！雖然，彼善家子，若善家女，若彼緣，多福聚生？」",
 "g8.2": "善實言：「多，世尊！多，善逝！彼善家子，若善家女，若彼緣，多福聚生！",
 "g8.3": "彼何所因？若彼，世尊！福聚；如來說非聚；彼，世尊！如來說福聚、福聚者。」",
 "g8.4": "世尊言：「若復，善實！善家子，若善家女，若此三千大千世界七寶滿作已，如來等、應等、正遍知等施與。",
 "g8.5": "若此法本，乃至四句等偈，受已，為他等分別廣說，此，彼緣，多過福聚生，無量、不可數。",
 "g8.6": "彼何所因？此出，善實！如來、應、正遍知，無上正遍知；此生佛、世尊。",
 "g8.7": "彼何所因？佛法、佛法者，善實！非佛法，如是彼；彼故，說名佛法者。」",
 "g9.1": "世尊言：「彼何意念？善實！雖然，流入如是念：『我流入果得到。』？」",
 "g9.2": "善實言：「不如此，世尊！彼何所因？不彼，世尊！一人，彼故說名流入。不色入，不聲、不香、不味、不觸、不法入，彼故說名流入者。",
 "g9.3": "彼若，世尊！流入如是念：『我流入果得到。』彼如是，彼所我取有，眾生取、壽取、人取有。」",
 "g9.4": "世尊言：「彼何意念？善實！雖然，一來如是念：『我一來果得到。』？」",
 "g9.5": "善實言：「不如此，世尊！彼何所因？不一來如是念：『我一來果得到。』彼何所因？不彼有法若一來人，彼故說名一來者。」",
 "g9.6": "世尊言：「彼何意念？善實！雖然，不來如是念：『我不來果得到。』？」",
 "g9.7": "善實言：「不如此，世尊！彼何所因？不彼有法若不來入，彼故說名不來者。」",
 "g9.8": "世尊言：「彼何意念？善實！雖然，應如是念：『我應得到。』？」",
 "g9.9": "善實言：「不如此，世尊！彼何所因？不彼，世尊！有法若應名，彼故說名應者。彼若，世尊！應如是念：『我應得到。』如是彼所我取有，眾生取、壽取、人取有。",
 "g9.10": "彼何所因？我此，世尊！如來、應、正遍知，無諍行最勝說，我此，世尊！應離欲。不我，世尊！如是念：『我此應者。』",
 "g9.11": "若我，世尊！如是念：『我應得到。』不我，如來記說：『無諍行最勝。』善實！善家子無所行，彼故說名無諍行、無諍行者。」",
 "g10.1": "世尊言：「彼何意念？善實！有一法，若如來燈作如來、應、正遍知受取？」",
 "g10.2": "善實言：「不如此，世尊！無一法，若如來燈作如來、應、正遍知受取。」",
 "g10.3": "世尊言：「若有，善實！菩薩摩訶薩如是語：『我國土莊嚴成就。』我者，彼不如語。",
 "g10.4": "彼何所因？國土莊嚴者，善實！不莊嚴，彼，如來說；彼故，說名國土莊嚴者。",
 "g10.5": "彼故此，善實！菩薩摩訶薩如是不住心發生應，不色住心發生應，不聲、香、味、觸、法住心發生應，無所住心發生應！",
 "g10.6": "「譬如，善實！丈夫有此如是色我身有，譬如善高山王。彼何意念？善實！雖然，彼大我身有？」",
 "g10.7": "善實言：「大，世尊！大，善逝！彼我身有。彼何所因？我身、我身者，世尊！不有，彼，如來說；彼故，說名我身者。不彼，世尊！有；彼故，說名我身者。」",
 "g11.1": "世尊言：「彼何意念？善實！所有恒伽大河沙，彼所有，如是恒伽大河有，彼中若沙，雖然，彼多沙有？」",
 "g11.2": "善實言：「彼如是所有，世尊！多，恒伽大河有，何況若彼中沙。」",
 "g11.3": "世尊言：「欲我汝，善實！知我汝。所有彼中恒伽大河中沙有，彼所有世界有，如是婦女，若丈夫，若七寶滿作已，如來等、應等、正遍知等施與。彼何意念？善實！雖然，彼婦女，若丈夫，若彼緣，多福聚生？」",
 "g11.4": "善實言：「多，世尊！多，善逝！彼婦女，若丈夫，若彼緣，多福聚生，無量、不可數。」",
 "g11.5": "世尊言：「若復時，善實！善家子，若善家女，若彼所有世界七寶滿作已，如來等、應等、正遍知等施與。若此法本乃至四句等偈，受已，為他等分別廣說，此如是，彼緣，多過福聚生，無量、不可數！",
 "g12.1": "雖然復次時，善實！此中地分，此法本乃至四句等偈，為他等說，若分別，若廣說，若彼地分支帝有天、人、阿脩羅世。",
 "g12.2": "何復言，善實！若此法本，持當、讀當、誦當，他等及分別廣說當，",
 "g12.3": "最勝彼希有具足當有。此中，善實！地分，教師遊行別異，尊重處相似，共梵行。」",
 "g13.1": "如是語已。命者善實，世尊邊如是言：「何名此，世尊！法本？云何及如此持我？」",
 "g13.2": "如是語已。世尊，命者善實邊如是言：「『智慧彼岸到』名，此，善實！法本，如是此持。彼何所因？若如是，善實！智慧彼岸到；如來說，彼如是非彼岸到；彼故，說名智慧彼岸到者。",
 "g13.3": "彼何意念？善實！雖然，有法若如來說？」",
 "g13.4": "善實言：「不如此，世尊！不有，世尊！法，若如來說。」",
 "g13.5": "世尊言：「所有，善實！三千大千世界地塵有多有？」",
 "g13.6": "善實言：「多，世尊！多，善逝！彼地塵。",
 "g13.7": "彼何所因？若彼，世尊！地塵，如來說；非塵，彼，如來說；彼故，說名地塵者。若彼世界，如來說；非界，如來說；彼故，說名世界者。」",
 "g13.8": "世尊言：「彼何意念？善實！三十二大丈夫相，如來、應、正遍知見應？」",
 "g13.9": "善實言：「不如此，世尊！不三十二大丈夫相，如來、應、正遍知見應。彼何所因？所有，世尊！三十二大丈夫相，如來說；非相所有，如來說；彼故，說名三十二大丈夫相者。」",
 "g13.10": "世尊言：「若復時，善實！婦女，若丈夫，若日日恒伽河沙等我身捨，如是捨恒伽河沙等劫所有我身捨，若此法本乃至四句等偈，受已，為他等分別，此如是，彼緣，多過福聚生，無量、不可數。」",
 "g14.1": "爾時，命者善實，法疾轉力淚出，彼淚拭已，世尊邊如是言：",
 "g14.2": "「希有，世尊！最勝希有，善逝！所有此法本如來說，此我，世尊！智生，不我曾生來，如是色類法本聞先。",
 "g14.3": "最勝，彼，世尊！希有具足眾生有當，若此經中說中，實想發生當。彼何所因？若此，世尊！實想；彼如是，非想；彼故，如來說實想、實想者。",
 "g14.4": "不我，世尊！希有。若我此法本說中，信我、解我。若彼，世尊！眾生有當，未來世，此法本，受當、持當、讀當、誦當，他等及分別廣說當，彼最勝希有具足有當。",
 "g14.5": "雖然復次時，世尊！不彼等菩薩摩訶薩我想轉當，不眾生想、不壽",
 "g14.6": "想、不人想轉當。彼何所因？若彼，世尊！我想，彼如是非想；若及如是眾生想、壽想、人想，彼如是非想。",
 "g14.7": "彼何所因？一切想遠離，此佛、世尊。」如是語已。世尊，命者善實邊如是言：",
 "g14.8": "「如是，如是！善實！如是，如是！如言汝。最勝希有具足彼眾生有當，若此經中說中，不驚當，不怖當，不畏當。",
 "g14.9": "彼何所因？最勝彼岸到，此，善實！如來說；若及，善實！如來最勝彼岸到說，彼無量亦佛、世尊說；彼故，說名最勝彼岸到者。",
 "g14.10": "「雖然復次時，善實！若如來忍彼岸到，彼如是非彼岸到。",
 "g14.11": "彼何所因？此時我，善實！惡王分別分肉割斷，不時我彼中時我想，若眾生想，若壽想，若人想，若不我有想非想有。",
 "g14.12": "彼何所因？若我，善實！彼中時我想有，瞋恨想亦我彼中時有；眾生想、壽想、人想有，瞋恨想亦我彼中時有。",
 "g14.13": "念知我，善實！過去世五百生，若我忍語仙人有，彼中亦我不想有，不眾生想、不壽想、不人想，不亦我有想非想有。",
 "g14.14": "彼故此，善實！菩薩摩訶薩一切想捨離，無上正遍知心發生應，不色住心發生應，不聲、香、味、觸住心發生應，不法住、非無法住心發生應，無所住心發生應。",
 "g14.15": "彼何所因？若無所住，彼如是住，彼故，如是如來說，不色住，菩薩摩訶薩施與應；不聲、香、味、觸、法住施與應。",
 "g14.16": "「雖然復次時，善實！菩薩摩訶薩如是捨施應，一切眾生為故。",
 "g14.17": "彼何所因？若如是，善實！眾生想，彼如是非想。若如是，彼一切眾生如來說，彼如是非眾生。",
 "g14.18": "彼何所因？真語，善實！如來，實語如來，不異語如來，如語如來，非不如語如來。",
 "g14.19": "「雖然復次時，善實！若如來法證覺說，若思惟，若不彼中實不妄。",
 "g14.20": "譬如，善實！丈夫闇舍入，不一亦見。如是事墮，菩薩見應，若事墮施與。",
 "g14.21": "譬如，善實！眼者丈夫，顯明夜月出，種種色見。如是菩薩摩訶薩見應，若事不墮施與。",
 "g14.22": "「雖然復次時，善實！若善家子、善家女，若此法本，受當、持當、讀當、誦當，為他等及分別廣說當。知彼，善實！如來佛智；見彼，善實！如來佛眼。一切彼，善實！眾生，無量福聚生當取當。",
 "g15.1": "「若復時，善實！婦女，若丈夫，若前分時，恒伽河沙等我身捨，如是中分時，如是晚分時，恒伽河沙等我身捨。以此因緣，劫俱致那由多百千我身捨。",
 "g15.2": "若此法本，聞已不謗，此如是，彼緣，多過福聚生，無量、不可數。何復言若寫已受持讀誦，為他等及分別廣說。",
 "g15.3": "「雖然復次時，善實！不可思、不可稱，此法本，彼不可思，如是果報觀察應。",
 "g15.4": "此，善實！法本如來說，勝乘發行眾生為故，最勝乘發行眾生為故。",
 "g15.5": "若此法本，受當、持當、讀當、誦當，為他等及分別廣說當。知彼，善實！如來佛智；見彼，善實！如來佛眼。",
 "g15.6": "一切彼，善實！眾生，無量福聚具足有當，不可思、不可稱亦不可量福聚具足有當。一切彼，善實！眾生，我肩菩提持當有！",
 "g15.7": "彼何所因？不能，善實！此法本，小信解者眾生聞，不我見者、不眾生見者、不壽見者、不人見者、不菩薩誓眾生能聞受，若持、若讀、若誦，若無是處有。",
 "g15.8": "「雖然復次時，善實！此中地分，此經廣說，供養彼地分有當天、人、阿脩羅世，禮右繞作及彼地分有當，支帝彼地分有當。",
 "g16.1": "「若彼，善實！善家子，若善家女，若此如是色類經，受當、持當、讀當、誦當，為他等及分別廣說當，彼輕賤有當極輕賤。",
 "g16.2": "彼何所因？所有彼眾生，前生不善業作已，惡趣轉墮；所有現如是法中，輕賤盡當，佛菩提得當。",
 "g16.3": "「彼何所因？念知我，善實！過去世不可數，劫不可數，過燈作如來、應、正遍知，他他過四八十佛俱致那由多百千有，若我親承供養，親承供養已，不遠離。若我，善實！彼佛、世尊親承供養已，不遠離，",
 "g16.4": "若後時、後長時，後分五百，正法破壞時中，轉時中，此經受當、持當、讀當、誦當，為他等及分別廣說當。",
 "g16.5": "此復時，善實！福聚邊，此前福聚，百上亦數不及，千上亦，百千上亦，俱致百千上亦，俱致那由多百千上亦，僧企耶亦，迦羅亦，算亦，譬喻亦，憂波泥奢亦，乃至譬喻亦不及。",
 "g16.6": "「若復，善實！彼等善家子、善家女，我福聚說，此所有彼善家子、善家女，若彼中時中福聚取當，猛眾生順到，心亂到。",
 "g16.7": "雖然復次時，善實！不可思、不可稱，法本如來說，彼不可思，如是果報觀察應。」",
 "g17.1": "爾時，命者善實，世尊邊如是言：「云何，世尊！菩薩乘發行住應？云何修行應？云何心降伏？」",
 "g17.2": "世尊言：「此，善實！菩薩乘發行，如是心發生應：『一切眾生，無我受餘涅槃界滅度應，如是一切眾生滅度，無有一眾生滅度有。』",
 "g17.3": "彼何所因？若，善實！菩薩眾生想轉，彼不菩薩摩訶薩名說應；乃至人想轉，不彼菩薩摩訶薩名說應。",
 "g17.4": "彼何所由？無有，善實！一法，菩薩乘發行名。",
 "g17.5": "彼何意念？善實！有一法，若如來燈作如來、應、正遍知邊，無上正遍知證覺？」",
 "g17.6": "如是語已。命者善實，世尊邊如是言：「無有彼，世尊！一法，若如來燈作如來、應、正遍知邊，無上正遍知證覺。」",
 "g17.7": "如是語已。世尊，命者善實如是言：「如是，如是！善實！如是，如是！無有彼一法，若如來燈作如來、應、正遍知邊，無上正遍知證覺。",
 "g17.8": "若復，善實！一法，如來證覺有，不我燈作如來應正遍知記說有當：『汝行者，未來世，釋迦牟尼名，如來、應、正遍知。』者。",
 "g17.9": "是故，此，善實！如來、應、正遍知，無有一法，若無上正遍知證覺，彼故，燈作如來、應、正遍知記說有當：『汝行者，未來世，釋迦牟尼名，如來、應、正遍知。』",
 "g17.10": "彼何所因？如來者，善實！真如故此即是；如來者，善實！不生法故此即是；世尊者，善實！道斷此即是；如來者，善實！畢竟不生故此即是。彼何所因？如是，彼實不生，若最勝義。",
 "g17.11": "「若有，善實！如是語：『如來、應、正遍知，無上正遍知證覺。』彼不如語，誹謗我。彼，善實！不實取。彼何所因？無有彼，善實！一法，若如來、應、正遍知，無上正遍知證覺。",
 "g17.12": "若，善實！如來法證覺說，若不彼中實不妄，彼故如來說：『一切法，佛法者。』",
 "g17.13": "彼何所因？一切法、一切法者，善實！一切彼非法，如來說；彼故，說名一切法者。",
 "g17.14": "「譬如，善實！丈夫有具足身、大身。」",
 "g17.15": "命者善實言：「若彼，世尊！如來，丈夫說具足身、大身；非身，彼，世尊！如來說；彼故，說名足身、大身者。」",
 "g17.16": "世尊言：「如是，如是！善實！如是，如是！若菩薩如是語：『有眾生般涅槃滅度。』我不彼菩薩名說應。",
 "g17.17": "彼何所因？有，善實！有一法若菩薩名？」",
 "g17.18": "善實言：「不如此，世尊！」",
 "g17.19": "世尊言：「眾生、眾生者，善實！非眾生，彼，如來說；彼故，說名眾生者。",
 "g17.20": "彼故，如來說：『無我一切法，無眾生、無壽者、無長養者，無人一切法者。』",
 "g17.21": "若，善實！菩薩如是語：『我佛土莊嚴成就。』彼亦如是不名說應。",
 "g17.22": "彼何所因？國土莊嚴、國土莊嚴者，善實！非莊嚴，彼，如來說；彼故，說名國土莊嚴者。",
 "g17.23": "若，善實！菩薩摩訶薩無我法、無我法者信解，彼，如來、應、正遍知，菩薩摩訶薩名說。",
 "g18.1": "「彼何意念？善實！有如來肉眼？」",
 "g18.2": "善實言：「如是，如是！世尊！有如來肉眼。」",
 "g18.3": "世尊言：「彼何意念？善實！有如來天眼？」",
 "g18.4": "善實言：「如是，如是！世尊！有如來天眼。」",
 "g18.5": "世尊言：「彼何意念？善實！有如來慧眼？」",
 "g18.6": "善實言：「如是，如是！世尊！有如來慧眼。」",
 "g18.7": "世尊言：「彼何意念？善實！有如來法眼？」",
 "g18.8": "善實言：「如是，如是！世尊！有如來法眼。」",
 "g18.9": "世尊言：「彼何意念？善實！有如來佛眼？」",
 "g18.10": "善實言：「如是，如是！世尊！有如來佛眼。」",
 "g18.11": "世尊言：「善，善！善實！彼何意念？善實！所有恒伽大河沙，雖然彼沙，彼，如來說？」",
 "g18.12": "善實言：「如是，如是！世尊！如是，如是！善逝說彼如來彼沙。」",
 "g18.13": "世尊言：「彼何意念？善實！所有恒伽大河沙，彼所有恒伽大河有，所有彼中沙，彼所有及世界有，多彼世界有？」",
 "g18.14": "善實言：「多，世尊！多，善逝！彼世界有。」",
 "g18.15": "世尊言：「所有，善實！彼中世界中眾生，彼等我種種有心流注知。",
 "g18.16": "彼何所因？心流注、心流注者，善實！非流注，此，如來說；彼故，說名心流注者。",
 "g18.17": "彼何所因？過去，善實！心不可得，未來心不可得，現在心不可得。",
 "g19.1": "「彼何意念？善實！若有善家子，若善家女，若三千大千世界七寶滿作已施與，雖然，彼善家子，若善家女，若彼緣，多福聚生？」",
 "g19.2": "善實言：「多，世尊！多，善逝！」",
 "g19.3": "世尊言：「如是，如是，善實！如是，如是！多。彼善家子，若善家女，若彼緣，多福聚生，無量、不可數。",
 "g19.4": "福聚、福聚者，善實！非聚，彼，如來說；彼故，說名福聚者。若復，善實！福聚有，不如來說福聚、福聚者。",
 "g20.1": "「彼何意念？善實！色身成就如來見應？」",
 "g20.2": "善實言：「不如此，世尊！非色身成就如來見應。",
 "g20.3": "彼何所因？色身成就、色身成就者，世尊！非成就，此，如來說；彼故，說名色身成就者。」",
 "g20.4": "世尊言：「彼何意念？善實！相具足如來見應？」",
 "g20.5": "善實言：「不如此，世尊！非相具足如來見應。",
 "g20.6": "彼何所因？此，世尊！相具足，如來說；非相具足，如來說；彼故，說名相具足者。」",
 "g21.1": "世尊言：「彼何意念？善實！雖然，如來如是念：『我法說。』？」",
 "g21.2": "善實言：「不如此，世尊！不如來如是念：『我法說。』」",
 "g21.3": "世尊言：「若我，善實！如是語：『如來法說。』誹謗我。彼，善實！不實取。",
 "g21.4": "彼何所因？法說、法說者，善實！無有法，若法說名可得。」",
 "g21.5": "爾時，命者善實，世尊邊如是言：「雖然，世尊！當有未來，頗有眾生，後時、後長時、後分五百，正法破壞時中，轉時中，若此如是色類法說，聞已信當有？」",
 "g21.6": "世尊言：「不彼，善實！眾生，非不眾生。",
 "g21.7": "彼何所因？眾生、眾生者，善實！一切彼非眾生，彼，如來說；彼故，說名眾生者。",
 "g22.1": "彼何意念？善實！雖然，有法若如來無上正遍知證覺？」",
 "g22.2": "命者善實言：「無有彼，世尊！有法若如來無上正遍知。」",
 "g22.3": "世尊言：「如是，如是！善實！如是，如是！微小彼中法無有、不可得，彼故說名無上正遍知者。",
 "g23.1": "雖然復次時，善實！平等正法，彼不中有不平等，彼故說名無上正遍知者。",
 "g23.2": "無我故、無壽故、無眾生故、無人故，平等。無上正遍知，一切善法證覺。",
 "g23.3": "善法、善法者，善實！非法，如是彼，如來說；彼故，說名善法者。",
 "g24.1": "「若復，善實！所有三千大千世界須彌山王，彼所有聚七寶，普散如來、應、等正遍知施與。",
 "g24.2": "若此智慧彼岸到，乃至四句等偈，受已，為他等分別，此，善實！福聚，彼前者福聚，百上亦數不及，千上亦，百千上亦，俱致百千上亦，俱致那由他百千上亦，僧企耶亦，迦羅亦，算亦，譬喻亦，憂波泥奢亦，乃至譬喻亦不及。",
 "g25.1": "「彼何意念？善實！雖然，如來如是念：『我眾生度脫。』不？復彼，善實！如是見應。",
 "g25.2": "彼何所因？有無，善實！無有一眾生若如來度脫。若復，善實！有，如是眾生有，若彼如來度脫。彼如是，如來我取有，眾生取、壽取、人取有。",
 "g25.3": "我取、我取者，善實！非取，此，如來說；彼小兒凡夫生取。",
 "g25.4": "小兒凡夫生、小兒凡夫生者，善實！非生，彼，如來說；彼故，說名小兒凡夫生者。",
 "g26.1": "「彼何意念？善實！相具足如來見應？」",
 "g26.2": "善實言：「不如此，世尊！如我，世尊說義解，我不相具足如來見應。」",
 "g26.3": "世尊言：「善，善！善實！如是，如是！善實！如如語汝，不相具足如來見應。彼何所因？彼復，善實！相具足如來見應；有彼王轉輪，如來有；彼故，不相具足如來見應。此相非相故，如來見應。」",
 "g26.4": "爾時，命者善實世尊邊如是言：「如我，世尊！世尊說義解，我不相具足如來見應。」",
 "g26.5": "爾時，世尊彼時此伽陀說：",
 "g26.6": "「若我色見，若我聲求，邪解脫行，不我見彼。",
 "g26.7": "「法體佛見應，法身彼如來，法體及不識，故彼不能知。",
 "g27.1": "「彼何意念？善實！相具足，如來無上正遍知證覺？",
 "g27.2": "不，復彼，善實！如是見應。彼何所因？不，善實！相具足，如來無上正遍知證覺。",
 "g27.3": "復時，彼，善實！有如是語：『菩薩乘發行，有法破滅，施設斷。』不，復，善實！如是見應。",
 "g27.4": "彼何所因？不菩薩乘發行有法破滅，施設不斷。",
 "g28.1": "「若復，善實！善家子，若善家女，若恒伽河沙等世界七寶滿作已施與；",
 "g28.2": "若菩薩摩訶薩無我、無生中，法中忍得。此如是，彼緣，多過福聚生。",
 "g28.3": "不，復，善實！菩薩福聚取應。」",
 "g28.4": "命者善實言：「不，世尊！菩薩福聚取應？」",
 "g28.5": "世尊言：「取應，善實！不取應，彼故說名取應。",
 "g29.1": "「雖然復次時，善實！若有如是語：『如來去、若不去、若住、若坐、若臥、若如法。』不我，善實！說義解。",
 "g29.2": "彼何所因？如來者，善實！說名無所去、無所來，彼故說名如來、應、正遍知者。",
 "g30.1": "「若復，善實！善家子，若善家女，若所有三千大千世界地塵，彼如是色類墨作已，乃至如是不可數，譬如最小聚。彼何意念？善實！雖然，彼多最小聚有？」",
 "g30.2": "善實言：「如是，如是！世尊！",
 "g30.3": "多彼最小聚有。彼何所因？彼，世尊！聚有，不世尊說最小聚者。",
 "g30.4": "彼何所因？若彼，世尊！最小聚說；非聚，彼，如來說；彼故，說名最小聚者。",
 "g30.5": "若及如來說三千大千世界者；非界，如來說；彼故，說名三千大千世界者。",
 "g30.6": "彼何所因？彼，世尊！界有，彼如是摶取有。若如是，如來摶取說；非取，彼，如來說；彼故，說名摶取者。」",
 "g30.7": "世尊言：「摶取，如是，善實！不世俗語，不可說，非法，非非法，彼小兒凡夫生取。",
 "g31.1": "彼何所因？若此有，善實！如是說：『我見，如來說，眾生見、壽見、人見，如來說。』雖然，彼，善實！正說語？」",
 "g31.2": "善實言：「不如此，世尊！不如此，善逝！",
 "g31.3": "彼何所因？若彼，世尊！我見，如來說；非見，彼，如來說；彼故，說名我見者。」",
 "g31.4": "世尊言：「如是，此，善實！菩薩乘發行，一切法知應，見應，信解應。如信解，如無法想亦住。",
 "g31.5": "彼何所因？法想、法想者，善實！非想，此，如來說；彼故，說名法想者。",
 "g32.1": "若復時，善實！菩薩摩訶薩無量無數世界七寶滿中作已，如來等、應等、正遍知等施與，",
 "g32.2": "若善家子，若善家女，若如是智慧彼岸到，乃至四句等偈，受持、分別、讀誦，為他等及分別廣說。此如是，彼緣，多過福聚生，無量、不可數。",
 "g32.3": "云何及廣說？如不廣說，彼故說名廣說。",
 "g32.4": "「星、翳、燈、幻、露、泡、夢、電、雲，見如是，此有為者。」",
 "g32.5": "此語，世尊，歡喜上座善實，彼及比丘、比丘尼、優婆塞、優婆夷，彼天、人、阿脩羅、乾闥婆等，聞世尊說，大歡喜。歸命一切佛菩薩海等！金剛能斷般若波羅蜜經",
 "y0.0": "佛說能斷金剛般若波羅蜜多經",
 "y0.1": "唐三藏沙門義淨譯",
 "y1.1": "如是我聞：一時",
 "y1.2": "薄伽梵，在名稱大城，戰勝林施孤獨園，與大苾芻眾千二百五十人俱，及大菩薩眾。",
 "y1.3": "爾時，世尊於日初分時，著衣持鉢，入城乞食。",
 "y1.4": "次第乞已，還至本處。飯食訖，收衣鉢，洗足已，於先設座，加趺端坐，正念而住。",
 "y1.5": "時諸苾芻來詣佛所，頂禮雙足，右繞三匝，退坐一面。",
 "y2.1": "（缺譯）",
 "y2.2": "爾時，具壽妙生，在大眾中，承佛神力，即從座起，偏袒右肩，右膝著地，合掌恭敬白佛言：",
 "y2.3": "「希有！世尊！希有！善逝。如來應正等覺，能以最勝利益，益諸菩薩；能以最勝付囑，囑諸菩薩。",
 "y2.4": "世尊！若有發趣菩薩乘者，云何應住？云何修行？云何攝伏其心？」",
 "y2.5": "佛告妙生：「善哉，善哉！如是，如是！如汝所說：",
 "y2.6": "『如來以勝利益，益諸菩薩；以勝付囑，囑諸菩薩。』",
 "y2.7": "妙生！汝應諦聽，極善作意，吾當為汝分別解說。若有發趣菩薩乘者，應如是住，如是修行，如是攝伏其心。」",
 "y2.8": "妙生言：「唯然，世尊！願樂欲聞。」",
 "y3.1": "佛告妙生：「若有發趣菩薩乘者，當生如是心：",
 "y3.2": "『所有一切眾生之類，若卵生、胎生、濕生、化生，若有色、無色，有想、無想，非有想、非無想，盡諸世界所有眾生，如是一切，我皆令入無餘涅槃而滅度之。』",
 "y3.3": "雖令如是無量眾生證圓寂已，而無有一眾生入圓寂者。",
 "y3.4": "何以故？妙生！若菩薩有眾生想者，則不名菩薩。",
 "y3.5": "所以者何？由有我想、眾生想、壽者想、更求趣想故。",
 "y4.1": "「復次，妙生！菩薩不住於事，應行布施。不住隨處，應行布施。",
 "y4.2": "不住色、聲、香、味、觸、法，應行布施。",
 "y4.3": "妙生！菩薩如是布施，乃至相想，亦不應住。",
 "y4.4": "何以故？由不住施，福聚難量。",
 "y4.5": "「妙生！於汝意云何？東方虛空可知量不？」",
 "y4.6": "妙生言：「不爾，世尊！」",
 "y4.7": "「南西北方，四維上下，十方虛空，可知量不？」",
 "y4.8": "妙生言：「不爾，世尊！」",
 "y4.9": "「妙生！菩薩行不住施，所得福聚不可知量，亦復如是。」",
 "y4.10": "（缺譯）",
 "y5.1": "「妙生！於汝意云何？可以具足勝相觀如來不？」",
 "y5.2": "妙生言：「不爾，世尊！不應以勝相觀於如來。",
 "y5.3": "何以故？如來說勝相，即非勝相。」",
 "y5.4": "（缺譯）",
 "y5.5": "「妙生！所有勝相，皆是虛妄。若無勝相，即非虛妄。是故應以勝相無相觀於如來。」",
 "y6.1": "妙生言：",
 "y6.2": "「世尊！頗有眾生，於當來世，後五百歲，正法滅時，聞說是經，生實信不？」",
 "y6.3": "佛告妙生：「莫作是說：『頗有眾生，於當來世，後五百歲，正法滅時，聞說是經，生實信不？』",
 "y6.4": "妙生！當來之世，有諸菩薩，具戒具德具慧，",
 "y6.5": "（缺譯）",
 "y6.6": "而彼菩薩，非於一佛承事供養，植諸善根；",
 "y6.7": "已於無量百千佛所，而行奉事，植諸善根。",
 "y6.8": "是人乃能於此經典生一信心。",
 "y6.9": "「妙生！如來悉知是人，悉見是人，彼諸菩薩當生當攝無量福聚。",
 "y6.10": "何以故？由彼菩薩，無我想、眾生想、壽者想、更求趣想。",
 "y6.11": "「彼諸菩薩，非法想，非非法想，非想，非無想。",
 "y6.12": "（闕漏）何以故？若彼菩薩有法想，即有我執、有情執、壽者執、更求趣執。",
 "y6.13": "若有非法想，彼亦有我執、有情執、壽者執、更求趣執。",
 "y6.14": "妙生！是故菩薩，不應取法，不應取非法。",
 "y6.15": "以是義故，如來密意宣說筏喻法門，諸有智者，法尚應捨，何況非法。",
 "y7.1": "（缺譯）",
 "y7.2": "「妙生！於汝意云何？如來於無上菩提有所證不？復有少法是所說不？」",
 "y7.3": "妙生言：「如我解佛所說義，如來於無上菩提實無所證，亦無所說。",
 "y7.4": "何以故？佛所說法，不可取，不可說，彼非法，非非法。",
 "y7.5": "何以故？以諸聖者，皆是無為所顯現故。」",
 "y8.1": "「妙生！於汝意云何？若善男子、善女人，以滿三千大千世界七寶持用布施，得福多不？」",
 "y8.2": "妙生言：「甚多，世尊！",
 "y8.3": "何以故？此福聚者，則非是聚，是故如來說為福聚、福聚。」",
 "y8.4": "「妙生！若有善男子、善女人，以滿三千大千世界七寶，持用布施；",
 "y8.5": "若復有人，能於此經乃至一四句頌，若自受持，為他演說，以是因緣所生福聚，極多於彼無量無數。",
 "y8.6": "何以故？妙生！由諸如來無上等覺，從此經出；諸佛世尊，從此經生。",
 "y8.7": "是故妙生！佛法者，如來說非佛法，是名佛法。",
 "y9.1": "「妙生！於汝意云何？諸預流者頗作是念：『我得預流果。』不？」",
 "y9.2": "妙生言：「不爾，世尊！何以故？諸預流者，無法可預，故名預流。不預色、聲、香、味、觸、法，故名預流。",
 "y9.3": "世尊！若預流者作是念：『我得預流果。』者，則有我執，有情壽者更求趣執。」",
 "y9.4": "「妙生！於汝意云何？諸一來者頗作是念：『我得一來果。』不？」",
 "y9.5": "妙生言：「不爾，世尊！何以故？由彼無有少法證一來性，故名一來。」",
 "y9.6": "「妙生！於汝意云何？諸不還者頗作是念：『我得不還果。』不？」",
 "y9.7": "妙生言：「不爾，世尊！何以故？由彼無有少法證不還性，故名不還。」",
 "y9.8": "「妙生！於汝意云何？諸阿羅漢頗作是念：『我得阿羅漢果。』不？」",
 "y9.9": "妙生言：「不爾，世尊！由彼無有少法名阿羅漢。世尊！若阿羅漢作是念：『我得阿羅漢果。』者，則有我執，有情壽者更求趣執。",
 "y9.10": "世尊！如來說我得無諍住中最為第一。世尊！我是阿羅漢離於欲染，而實未曾作如是念：『我是阿羅漢。』",
 "y9.11": "世尊！若作是念：『我得阿羅漢。』者，如來即不說我妙生得無諍住，最為第一。以都無所住，是故說我得無諍住、得無諍住。」",
 "y10.1": "「妙生！於汝意云何？如來昔在然燈佛所，頗有少法是可取不？」",
 "y10.2": "妙生言：「不爾，世尊！如來於然燈佛所，實無可取。」",
 "y10.3": "「妙生！若有菩薩作如是語：『我當成就莊嚴國土。』者，此為妄語。",
 "y10.4": "何以故？莊嚴佛土者，如來說非莊嚴，由此說為國土莊嚴。",
 "y10.5": "是故，妙生！菩薩不住於事，不住隨處，不住色、聲、香、味、觸、法，應生其心；應生不住事心，應生不住隨處心，應生不住色、聲、香、味、觸、法心。",
 "y10.6": "「妙生！譬如有人，身如妙高山王，於意云何？是身為大不？」",
 "y10.7": "妙生言：「甚大，世尊！何以故？彼之大身，如來說為非身。以彼非有，說名為身。」",
 "y11.1": "「妙生！於汝意云何？如弶伽河中所有沙數，復有如是沙等弶伽河，此諸河沙，寧為多不？」",
 "y11.2": "妙生言：「甚多，世尊！河尚無數，況復其沙。」",
 "y11.3": "「妙生！我今實言告汝。若復有人，以寶滿此河沙數量世界，奉施如來，得福多不？」",
 "y11.4": "妙生言：「甚多，世尊！」",
 "y11.5": "「妙生！若復有人，於此經中受持一頌，并為他說，而此福聚，勝前福聚無量無邊。",
 "y12.1": "「妙生！若國土中有此法門，為他解說，乃至四句伽他，當知此地，即是制底，一切天、人、阿蘇羅等，皆應右繞而為敬禮；",
 "y12.2": "何況盡能受持讀誦，",
 "y12.3": "當知是人，則為最上第一希有。又此方所，即為有佛，及尊重弟子。",
 "y13.1": "（缺譯）",
 "y13.2": "（缺譯）",
 "y13.3": "「妙生！於汝意云何？頗有少法是如來所說不？」",
 "y13.4": "妙生言：「不爾，世尊！無有少法是如來所說。」",
 "y13.5": "「妙生！三千大千世界所有地塵，是為多不？」",
 "y13.6": "妙生言：「甚多，世尊！",
 "y13.7": "何以故？諸地塵，佛說非塵，故名地塵。此諸世界，佛說非界，故名世界。」",
 "y13.8": "「妙生！於汝意云何？可以三十二大丈夫相觀如來不？」",
 "y13.9": "妙生言：「不爾，世尊！不應以三十二相觀於如來。何以故？三十二相，佛說非相，是故說為大丈夫相。」",
 "y13.10": "「妙生！若有男子女人，以弶伽河沙等身命布施；若復有人，於此經中受持一頌，并為他說，其福勝彼無量無數。」",
 "y14.1": "爾時，妙生聞說是經，深解義趣，涕淚悲泣而白佛言：",
 "y14.2": "「希有！世尊！我從生智以來，未曾得聞如是深經。世尊！當何名此經？我等云何奉持？」佛告妙生：「是經名為『般若波羅蜜多』，如是應持。何以故？佛說般若波羅蜜多，則非般若波羅蜜多。」",
 "y14.3": "「世尊！若復有人，聞說是經生實想者，當知是人最上希有。世尊！此實想者，即非實想，是故如來說名實想、實想。",
 "y14.4": "世尊！我聞是經，心生信解，未為希有。若當來世，有聞是經，能受持者，是人則為第一希有。",
 "y14.5": "何以故？彼人無我想、眾生想、壽者想、更求趣想。",
 "y14.6": "所以者何？世尊！我想、眾生想、壽者想、更求趣想，即是非想。",
 "y14.7": "所以者何？諸佛世尊離諸想故。」",
 "y14.8": "「妙生！如是，如是！若復有人，得聞是經，不驚不怖不畏，當知是人第一希有。",
 "y14.9": "何以故？妙生！此最勝波羅蜜多，是如來所說諸波羅蜜多。如來說者，即是無邊佛所宣說，是故名為最勝波羅蜜多。",
 "y14.10": "「妙生！如來說忍辱波羅蜜多，即非忍辱波羅蜜多。",
 "y14.11": "何以故？如我昔為羯陵伽王割截支體時，無我想、眾生想、壽者想、更求趣想。我無是想，亦非無想。",
 "y14.12": "所以者何？我有是想者，應生瞋恨。",
 "y14.13": "妙生！又念過去於五百世，作忍辱仙人，我於爾時，無如是等想。",
 "y14.14": "是故應離諸想，發趣無上菩提之心，不應住色、聲、香、味、觸、法，都無所住而生其心；不應住法，不應住非法，應生其心。",
 "y14.15": "何以故？若有所住，即為非住。是故佛說：『菩薩應無所住而行布施。』",
 "y14.17": "「妙生！菩薩為利益一切眾生，應如是布施。此眾生想，即為非想；彼諸眾生，即非眾生。何以故？諸佛如來離諸想故。",
 "y14.18": "妙生！如來是實語者，如語者，不誑語者，不異語者。",
 "y14.19": "「妙生！如來所證法及所說法，此即非實非妄。",
 "y14.20": "妙生！若菩薩心住於事而行布施，如人入闇，則無所見。",
 "y14.21": "若不住事而行布施，如人有目，日光明照，見種種色，是故菩薩不住於事應行其施。",
 "y14.22": "「妙生！若有善男子、善女人，能於此經受持讀誦，為他演說。如是之人，佛以智眼悉知悉見，當生當攝無量福聚。",
 "y15.1": "「妙生！若有善男子、善女人，初日分以弶伽河沙等身布施，中日分復以弶伽河沙等身布施，後日分亦以弶伽河沙等身布施，如是無量百千萬億劫，以身布施。",
 "y15.2": "若復有人，聞此經典，不生毀謗，其福勝彼，何況書寫受持讀誦，為人解說。",
 "y15.3": "「妙生！是經有不可思議不可稱量無邊功德，",
 "y15.4": "如來為發大乘者說，為發最上乘者說。",
 "y15.5": "若有人能受持讀誦，廣為他說，如來悉知悉見是人，",
 "y15.6": "皆得成就不可量不可稱不可思議福業之聚。當知是人，則為以肩荷負如來無上菩提。",
 "y15.7": "何以故？妙生！若樂小法者，則著我見、眾生見、壽者見、更求趣見，是人若能讀誦受持此經，無有是處。",
 "y15.8": "「妙生！所在之處，若有此經，當知此處，則是制底，一切世間天、人、阿蘇羅，所應恭敬，作禮圍繞，以諸香花供養其處。",
 "y16.1": "「妙生！若有善男子、善女人，於此經典受持讀誦演說之時，或為人輕辱。",
 "y16.2": "何以故？妙生！當知是人，於前世中造諸惡業，應墮惡道，由於現在得遭輕辱，此為善事，能盡惡業，速至菩提故。",
 "y16.3": "「妙生！我憶過去過無數劫，在然燈佛先，得值八十四億那庾多佛，悉皆供養承事，無違背者。",
 "y16.4": "若復有人，於後五百歲正法滅時，能於此經受持讀誦，解其義趣，廣為他說，",
 "y16.5": "所得功德，以前功德比此功德，百分不及一，千萬億分算分勢分比數分因分，乃至譬喻亦不能及。",
 "y16.6": "妙生！我若具說受持讀誦此經功德，或有人聞，心則狂亂，疑惑不信。",
 "y16.7": "妙生！當知是經不可思議，其受持者，應當希望不可思議所生福聚。」",
 "y17.1": "復次，妙生白佛言：「世尊！若有發趣菩薩乘者。應云何住？云何修行？云何攝伏其心？」",
 "y17.2": "佛告妙生：「若有發趣菩薩乘者，當生如是心：『我當度脫一切眾生，悉皆令入無餘涅槃。雖有如是無量眾生證於圓寂，而無有一眾生證圓寂者。』",
 "y17.3": "何以故？妙生！若菩薩有眾生想者，則不名菩薩。",
 "y17.4": "所以者何？妙生！實無有法，可名發趣菩薩乘者。",
 "y17.5": "「妙生！於汝意云何？如來於然燈佛所，頗有少法是所證不？」",
 "y17.6": "妙生言：「如來於然燈佛所，無法可證，而得菩提。」",
 "y17.7": "佛言：「如是，如是！妙生！實無有法，如來於然燈佛所，有所證悟，得大菩提。",
 "y17.8": "若證法者，然燈佛則不與我授記：『摩納婆！汝於來世，當得作佛，號釋迦牟尼。』",
 "y17.9": "以無所得故，然燈佛與我授記，當得作佛，號釋迦牟尼。",
 "y17.10": "何以故？妙生！言如來者，即是實性真如之異名也。",
 "y17.11": "「妙生！若言：『如來證得無上正等覺。』者，是為妄語。何以故？實無有法如來證得無上正覺。",
 "y17.12": "妙生！如來所得正覺之法，此即非實非虛。是故佛說：『一切法者，即是佛法。』",
 "y17.13": "妙生！一切法、一切法者，如來說為非法，是故如來說一切法者，即是佛法。",
 "y17.14": "「妙生！譬如丈夫，其身長大。」",
 "y17.15": "妙生言：「世尊！如來說為大身者，即說為非身，是名大身。」",
 "y17.16": "佛告妙生：「如是，如是！若菩薩作是語：『我當度眾生令寂滅。』者，則不名菩薩。",
 "y17.17": "妙生！頗有少法名菩薩不？」",
 "y17.18": "答言：「不爾，世尊！」",
 "y17.19": "（缺譯）",
 "y17.20": "「妙生！是故如來說：『一切法無我、無眾生、無壽者、無更求趣。』",
 "y17.21": "「妙生！若有菩薩言：『我當成就佛土嚴勝、佛土嚴勝。』者，",
 "y17.22": "如來說為非是嚴勝，是故如來說為嚴勝。",
 "y17.23": "妙生！若有信解一切法無性、一切法無性者，如來說名真是菩薩、菩薩。",
 "y18.1": "「妙生！於汝意云何？如來有肉眼不？」",
 "y18.2": "妙生言：「如是，世尊！如來有肉眼。」",
 "y18.3": "「如來有天眼不？」",
 "y18.4": "「如是，世尊！如來有天眼。」",
 "y18.5": "「如來有慧眼不？」",
 "y18.6": "「如是，世尊！如來有慧眼。」",
 "y18.7": "「如來有法眼不？」",
 "y18.8": "「如是，世尊！如來有法眼。」",
 "y18.9": "「如來有佛眼不？」",
 "y18.10": "「如是，世尊！如來有佛眼。」",
 "y18.11": "（缺譯）",
 "y18.12": "（缺譯）",
 "y18.13": "「妙生！於汝意云何？如弶伽河中所有沙數，復有如是沙等弶伽河，隨諸河沙，有爾所世界，是為多不？」",
 "y18.14": "妙生言：「甚多，世尊！」",
 "y18.15": "「妙生！此世界中所有眾生，種種性行，其心流轉，我悉了知。",
 "y18.16": "何以故？妙生！心陀羅尼者，如來說為無持，由無持故，心遂流轉。",
 "y18.17": "何以故？妙生！過去心不可得，未來心不可得，現在心不可得。",
 "y19.1": "「妙生。於汝意云何？若人以滿三千大千世界七寶布施，是人得福多不？」",
 "y19.2": "妙生言：「甚多，世尊！」",
 "y19.3": "（缺譯）",
 "y19.4": "「妙生！若此福聚是福聚者，如來則不說為福聚、福聚。",
 "y20.1": "「妙生！於汝意云何？可以色身圓滿觀如來不？」",
 "y20.2": "「不爾，世尊！不應以色身圓滿觀於如來。",
 "y20.3": "何以故？色身圓滿、色身圓滿者，如來說非圓滿，是故名為色身圓滿。」",
 "y20.4": "「妙生！可以具相觀如來不？」",
 "y20.5": "「不爾，世尊！不應以具相觀於如來。",
 "y20.6": "何以故？諸具相者，如來說非具相，是故如來說名具相。」",
 "y21.1": "「妙生！於汝意云何？如來作是念：『我說法。』耶？",
 "y21.2": "（缺譯）",
 "y21.3": "汝勿作是見。若言：『如來有所說法。』者，則為謗我。",
 "y21.4": "何以故？言說法、說法者，無法可說，是名說法。」",
 "y21.5": "妙生白佛言：「世尊！於當來世，頗有眾生，聞說是經，生信心不？」",
 "y21.6": "佛告妙生：「有生信者，彼非眾生，非非眾生。",
 "y21.7": "何以故？眾生、眾生者，如來說非眾生，是名眾生。",
 "y22.1": "「妙生！於汝意云何？佛得無上正等覺時，頗有少法所證不？」",
 "y22.2": "妙生言：「實無有法是佛所證。」",
 "y22.3": "佛告妙生：「如是，如是！此中無有少法可得，故名無上正等菩提。",
 "y23.1": "妙生！是法平等，無有高下，故名無上正等菩提。",
 "y23.2": "以無我、無眾生、無壽者、無更求趣性，其性平等，故名無上正等菩提。一切善法皆正覺了，故名無上正等正覺。",
 "y23.3": "妙生！善法者，如來說為非法，故名善法。",
 "y24.1": "「妙生！若三千大千世界中，所有諸妙高山王，如是等七寶聚，有人持用布施。",
 "y24.2": "若復有人，於此經中，乃至一四句頌，若自受持，及為他說。以前福聚比此福聚，假令分此以為百分，彼亦不能及一分，或千分億分算分勢分數分因分，乃至譬喻亦不能及一。",
 "y25.1": "「妙生！於汝意云何？如來度眾生不？汝莫作是見：『如來度眾生。』",
 "y25.2": "何以故？曾無有一眾生是如來度者。若有眾生是如來度者，如來則有我見、眾生見、壽者見、更求趣見。",
 "y25.3": "妙生！我等執者，如來說為非執，而諸愚夫妄為此執。",
 "y25.4": "妙生！愚夫眾生，如來說為非生，故名愚夫眾生。",
 "y26.1": "「妙生！於汝意云何？應以具相觀如來不？」",
 "y26.2": "「不爾，世尊！不應以具相觀於如來。」",
 "y26.3": "「妙生！若以具相觀如來者，轉輪聖王應是如來，是故不應以具相觀於如來，應以諸相非相觀於如來。」",
 "y26.4": "（缺譯）",
 "y26.5": "爾時，世尊而說頌曰：",
 "y26.6": "「若以色見我，以音聲求我，是人起邪觀，不能當見我。",
 "y26.7": "應觀佛法性，即導師法身，法性非所識，故彼不能了。",
 "y27.1": "「妙生！『諸有發趣菩薩乘者，其所有法是斷滅不？』",
 "y27.2": "汝莫作是見。何以故？",
 "y27.3": "（缺譯）",
 "y27.4": "趣菩薩乘者，其法不失。",
 "y28.1": "「妙生！若有男子、女人，以滿弶伽河沙世界七寶布施。",
 "y28.2": "若復有人，於無我理、不生法中，得忍解者，所生福聚，極多於彼無量無數。",
 "y28.3": "「妙生！菩薩不應取其福聚。」",
 "y28.4": "妙生言：「菩薩豈不取福聚耶？」",
 "y28.5": "佛告妙生：「是應正取，不應越取，是故說取。",
 "y29.1": "「妙生！如有說言：『如來若來若去、若坐若臥。』者，是人不解我所說義。",
 "y29.2": "何以故？妙生！都無去來，故名如來。",
 "y30.1": "「妙生！若有男子、女人，以三千大千世界土地碎為墨塵。妙生！於汝意云何？是極微聚，寧為多不？」",
 "y30.2": "妙生言：「甚多，世尊！",
 "y30.3": "何以故？若聚性是實者，如來不說為極微聚極微聚。",
 "y30.4": "何以故？極微聚者，世尊說為非極微聚，故名極微聚。",
 "y30.5": "世尊！如來所說三千大千世界，說為非世界，故名三千大千世界。",
 "y30.6": "何以故？若世界實有，如來則有聚執。佛說聚執者，說為非聚執，是故說為聚執。」",
 "y30.7": "「妙生！此聚執者，是世言論，然其體性，實無可說，但是愚夫異生之所妄執。",
 "y31.1": "「妙生！如有說云：『佛說我見、眾生見、壽者見、更求趣見。』者，是為正說為不正耶？」",
 "y31.2": "妙生言：「不爾，世尊！",
 "y31.3": "何以故？若有我見如來說者，即是非見，故名我見。」",
 "y31.4": "「妙生！諸有發趣菩薩乘者，於一切法，應如是知，如是見，如是解。如是解者，乃至法想亦無所住。",
 "y31.5": "何以故？妙生！法想、法想者，如來說為非想，故名法想、法想。",
 "y32.1": "「妙生！若有人以滿無量無數世界七寶，持用布施。",
 "y32.2": "若復有人，能於此經，乃至受持讀誦四句伽他，令其通利，廣為他人正說其義，以是因緣所生福聚，極多於彼無量無數。",
 "y32.3": "云何正說？無法可說，是名正說。」",
 "y32.4": "爾時，世尊說伽他曰：「一切有為法，如星、翳、燈、幻，露、泡、夢、電、雲，應作如是觀。」",
 "y32.5": "爾時，薄伽梵說是經已，具壽妙生，及諸菩薩摩訶薩、苾芻、苾芻尼、鄔波索迦、鄔波斯迦，一切世間天、人、阿蘇羅等，皆大歡喜，信受奉行。"
}
},{}],"C:\\ksana2015\\correspondence\\src\\main.jsx":[function(require,module,exports){
var React=require("react");
var Reflux=require("reflux");
var data=require("./mockdata");
var Translations=require("./views/translations");
var Controls=require("./controls");
var sourcetext_store=require("./stores/sourcetext");
var Maincomponent = React.createClass({displayName: "Maincomponent",
	mixins:[Reflux.listenTo(sourcetext_store,"onData")]
	,onData:function(data,uti) {
		this.setState({data:data,uti:uti});
	}
	,getInitialState:function() {
		return {data:[],uti:""};
	}
  ,render: function() {
    return React.createElement("div", null, 
    	React.createElement(Controls, null), 
      React.createElement(Translations, {data: this.state.data, uti: this.state.uti})
    );
  }
});
module.exports=Maincomponent;
},{"./controls":"C:\\ksana2015\\correspondence\\src\\controls.js","./mockdata":"C:\\ksana2015\\correspondence\\src\\mockdata.js","./stores/sourcetext":"C:\\ksana2015\\correspondence\\src\\stores\\sourcetext.js","./views/translations":"C:\\ksana2015\\correspondence\\src\\views\\translations.js","react":"react","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\mockdata.js":[function(require,module,exports){
module.exports=[
 ["sanskrit","s10.5","tasmāt tarhi subhūte bodhisattvena mahāsattvenaivam apratiṣṭhitaṃcittam utpādayitavyaṃ yanna kvacit pratiṣṭhitaṃ cittam utpādayitavyaṃna rūpa-pratiṣṭhitaṃ cittam utpādayitavyaṃ naśabda-gandha-rasa-spraṣṭavya-dharma-pratiṣṭhitaṃ cittamutpādayitavyam |"]
,["kumarajiva","k10.5","「是故須菩提，諸菩薩摩訶薩應如是生清淨心，不應住色生心，不應住聲、香、味、觸、法生心，應無所住而生其心。"]
,["bodhiruci","b10.5","	是故須菩提！諸菩薩摩訶薩，應如是生清淨心，而無所住，不住色生心，不住聲、香、味、觸、法生心，應無所住而生其心。"]
,["gupta","g10.5","彼故此，善實！菩薩摩訶薩如是不住心發生應，不色住心發生應，不聲、香、味、觸、法住心發生應，無所住心發生應！"]
,["yijing","y10.5","是故，妙生！菩薩不住於事，不住隨處，不住色、聲、香、味、觸、法，應生其心；應生不住事心，應生不住隨處心，應生不住色、聲、香、味、觸、法心。"]
,["xuanzang","x10.5","是故，善現，菩薩如是都無所住應生其心，不住於色應生其心，不住非色應生其心，不住聲、香、味、觸、法應生其心，不住非聲、香、味、觸、法應生其心，都無所住應生其心。"]
,["tibetan","t10.5","རབ་འབྱོར་དེ་ལྟ་བས་ན། བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོས་འདི་ལྟར་མི་གནས་པར་སེམས་པ་བསྐྱེད་པར་བྱ་སྟེ། ཅི་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། ། གཟུགས་ལ་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། ། སྒྲ་དང་དྲི་དང་རོ་དང་རེག་བྱ་དང་ཆོས་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། །"]
,["conze","c10.5","Therefore then, Subhuti, the Bodhisattva, the great being, should produce an unsupported thought, i.e. a thought which is nowhere supported, a thought unsupported by sights, sounds, smells, tastes, touchables or mind-objects."]
];

/*
"s9.2":"subhūtir āha | no hīdaṃ bhagavan | na srotāpannasyaivaṃ bhavati mayāsrotāpatti-phalaṃ prāptam iti | tat kasya hetoḥ | na hi sa bhagavan kaṃciddharmam āpannaḥ | tenocyate srotāpanna iti | na rūpam āpanno na śabdānna gandhān na rasān na spraṣṭavyān dharmān āpannaḥ | tenocyatesrotāpanna iti |"
,"k9.2":"須菩提言：「不也，世尊！何以故？須陀洹名為入流，而無所入，不入色、聲、香、味、觸、法，是名須陀洹。」"
,"b9.2":"須菩提言：「不也，世尊！何以故？實無有法名須陀洹。不入色聲香味觸法，是名須陀洹。」"
,"g9.2":"善實言：「不如此，世尊！彼何所因？不彼，世尊！一人，彼故說名流入。不色入，不聲、不香、不味、不觸、不法入，彼故說名流入者。"
,"y9.2":"妙生言：「不爾，世尊！何以故？諸預流者，無法可預，故名預流。不預色、聲、香、味、觸、法，故名預流。"
,"x9.2":"善現答言：不也，世尊！諸預流者不作是念『我能證得預流之果』！何以故？世尊，諸預流者無少所預，故名預流；不預色、聲、香、味、觸、法，故名預流。"
,"t9.2":"རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་དེ་ནི་ཅི་ལའང་ཞུགས་པ་མ་མཆིས་པའི་སླད་དུ་སྟེ། དེས་ན་རྒྱུན་དུ་ཞུགས་པ་ཞེས་བགྱིའོ། ། གཟུགས་ལའང་མ་ཞུགས། སྒྲ་ལ་ཡང་མ་ལགས། དྲི་ལ་ཡང་མ་ལགས། རོ་ལ་ཡང་མ་ལགས། རེག་བྱ་ལ་ཡང་མ་ལགས། ཆོས་རྣམས་ལ་ཡང་མ་ཞུགས་ཏེ། དེས་ན་རྒྱུན་དུ་ཞུགས་པ་ཞེས་བགྱིའོ། །"
,"e9.2":"Subhuti replied: No indeed, O Lord. And why? Because, O Lord, he has not won any dharma. Therefore is he called a Stream-winner. No sight-object has been won, no sounds, smells, tastes, touchables, or objects of mind. That is why he is called a 'Streamwinner'."
*/
},{}],"C:\\ksana2015\\correspondence\\src\\stores\\firebaseurl.js":[function(require,module,exports){
var Firebase=require("firebase");

var markups=function(key) {
	return new Firebase("https://correspondence.firebaseio.com/markups/"+key);
}

var user=function() {
	return new Firebase("https://correspondence.firebaseio.com/");	
}
var rootpath=function(path){
	return new Firebase("https://correspondence.firebaseio.com/"+path);
}
module.exports={markups:markups,user:user,rootpath:rootpath};
},{"firebase":"C:\\ksana2015\\node_modules\\firebase\\lib\\firebase-web.js"}],"C:\\ksana2015\\correspondence\\src\\stores\\highlight.js":[function(require,module,exports){
var Reflux=require("reflux");
var store_link=require("../stores/link");
var action_highlight=require("../actions/highlight");

var Highlight=Reflux.createStore({
	listenables:action_highlight
	,highlight:""
	,onEnter:function(linkid) {
		this.trigger(store_link.get(linkid)||{});
	}
	,onLeave:function(linkid) {
		this.trigger({});
	}
});
module.exports=Highlight;
},{"../actions/highlight":"C:\\ksana2015\\correspondence\\src\\actions\\highlight.js","../stores/link":"C:\\ksana2015\\correspondence\\src\\stores\\link.js","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\stores\\link.js":[function(require,module,exports){
var Reflux=require("reflux");
var action=require("../actions/link");
var store_selection=require("../stores/selection");
var action_selection=require("../actions/selection");
var mockdata=require("./mockdata").links;
var Link=Reflux.createStore({
	listenables:action
	,links:mockdata
	,onAdd:function() {
		var selections=store_selection.get();
		if (!Object.keys(selections).length)return;
		action_selection.clear();

		var key='L'+Math.random().toString().substr(2,5);
		this.links[key]=selections;
		this.trigger(this.links);
		//create a intertextual link
	}
	,get:function(id) {
		return this.links[id];
	}
	,pluck:function(id) {
		var sels=this.links[id];
		delete this.links[id];
		return sels;
	}	
	,onFetch:function(){
		setTimeout(function(){
			this.trigger(this.links);	
		}.bind(this),100);
		
	}
});
module.exports=Link;
},{"../actions/link":"C:\\ksana2015\\correspondence\\src\\actions\\link.js","../actions/selection":"C:\\ksana2015\\correspondence\\src\\actions\\selection.js","../stores/selection":"C:\\ksana2015\\correspondence\\src\\stores\\selection.js","./mockdata":"C:\\ksana2015\\correspondence\\src\\stores\\mockdata.js","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\stores\\mockdata.js":[function(require,module,exports){
var links={
	"xxx":{
	"s10.5":[[21,13,"bodhisattven"]]
	,"k10.5":[[7,3,"諸菩薩"]]
	,"b10.5":[[7,3,"諸菩薩"]]
	,"g10.5":[[7,2,"菩薩"]]
	,"y10.5":[[6,2,"菩薩"]]
	,"x10.5":[[6,2,"菩薩"]]
	,"c10.5":[[25,15,"the Bodhisattva"]]
	,"t10.5":[[21,16,"བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ"]]
	}
};
module.exports={links:links}; 
},{}],"C:\\ksana2015\\correspondence\\src\\stores\\selection.js":[function(require,module,exports){
var Reflux=require("reflux");
var action=require("../actions/selection");

var Link=Reflux.createStore({
	listenables:action
	,selections:{}
	,onSetAll:function(all_selections) {
		this.selections=JSON.parse(JSON.stringify(all_selections));
		this.trigger(this.selections);
	}
	,onSet:function(id,selections) {
		this.selections[id]=selections.filter(function(sel){return sel[1]});
		//automatical search possible other selection
	//	if (id=="s10.5" && (!this.selections["b10.5"] || this.selections["b10.5"].length==0)) {
	//		this.selections["b10.5"]=[[1,5]];
	//	}
		this.trigger(this.selections);
	}
	,get:function() {
		var out={};
		for (var i in this.selections) {
			var sel=this.selections[i];
			if (sel && sel.length) out[i]=JSON.parse(JSON.stringify(sel));
		}
		return out;
	}

	,clear:function() {
		for (var i in this.selections) {
			this.selections[i]=[];
		}
		this.trigger(this.selections);
	}
});
module.exports=Link;
},{"../actions/selection":"C:\\ksana2015\\correspondence\\src\\actions\\selection.js","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\stores\\sourcetext.js":[function(require,module,exports){
var Reflux=require("reflux");
var action=require("../actions/sourcetext");
var data=require("../diamond");
var versions={"s":"sanskrit","k":"kumarajiva","b":"bodhiruci","g":"gupta"
  ,"y":"yijing","x":"xuanzang","t":"tibetan","c":"conze"}

var SourceText=Reflux.createStore({
	listenables:action
	,onFetch:function(seg) {
		var out=[];
		for (var key in data) {
			var version=versions[key[0]];
			if (key.substr(1)===seg) {
				out.push([version,key[0]+seg, data[key]]);
			}
		}
		this.trigger(out,seg);
	}
	,segments:function() {
		return Object.keys(data);
	}
});
module.exports=SourceText;
},{"../actions/sourcetext":"C:\\ksana2015\\correspondence\\src\\actions\\sourcetext.js","../diamond":"C:\\ksana2015\\correspondence\\src\\diamond.json","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\stores\\user.js":[function(require,module,exports){
var Reflux=require("reflux");
var firebaseurl=require("./firebaseurl");
var actions=require("../actions/user");


var User=Reflux.createStore({
	listenables: actions
	,auth:null
	,init:function() {
		this.rootRef = firebaseurl.user();
		this.auth=this.rootRef.getAuth();
		if (this.auth) {
			var that=this;
			setTimeout(function(){
				that.trigger(that.auth);
			},500)
		}
	}
	,onLogin:function() {
		var that=this;
		this.rootRef.authWithOAuthPopup("google", function(error, authData) {
			if (error) {
		  		console.log("Login Failed!", error);
		  	} else {
		  		that.auth=authData;
		  		that.trigger(authData);
		  	}
		});
	},
	onLogout:function() {
		this.rootRef.unauth();
		this.trigger(null);
	},
	getAuth:function() {
		return this.auth||{uid:"anonymous"};
	}
	,editable:function(){
		return !!this.auth;
	}
});

module.exports=User;

},{"../actions/user":"C:\\ksana2015\\correspondence\\src\\actions\\user.js","./firebaseurl":"C:\\ksana2015\\correspondence\\src\\stores\\firebaseurl.js","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\views\\loginbox.js":[function(require,module,exports){
var React=require("react/addons");
var Reflux=require("reflux");
var E=React.createElement;
var store=require("../stores/user");
var action=require("../actions/user");
var loginbuttonstyle={verticalAlign: "middle",cursor:"pointer"};

var LoginBox=React.createClass({displayName: "LoginBox",
  mixins:[React.addons.PureRender,Reflux.ListenerMixin]
  ,getInitialState: function () {
    var auth=store.getAuth();
    this.fetchAvatar(auth);
    return {auth:auth,photourl:""};
  }
  ,componentDidMount:function(){
     this.listenTo(store, this.onUserChange);
  }
  ,signOut:function() {
    action.logout();
  }
  ,googleSignIn:function() {
    action.login();
  }
  ,onUserChange:function(auth) {
    this.fetchAvatar(auth);
    this.setState({auth:auth});
  }
  ,fetchAvatar:function(auth) {
    if (!auth || !auth.uid) return;
    var that=this;
    var googleuid=auth.uid.substr(7);
    var apiurl="https://picasaweb.google.com/data/entry/api/user/"+googleuid+"?alt=json";
    fetch(apiurl).then(function(res){
      if ( res.status==200)  {
        var reader=res.body.getReader();
        reader.read().then(function(data){
          var json=JSON.parse(String.fromCharCode.apply(null,data.value));
          that.setState({photourl:json.entry.gphoto$thumbnail.$t});
        });
      }
    });
  }
  ,renderSignin:function() {
    return ( React.createElement("p", {style: {textAlign: "center"}}, React.createElement("img", {style: loginbuttonstyle, src: "img/google-sign-in.png", onClick: this.googleSignIn})) );
  }
  ,renderUser:function() {
    return (React.createElement("div", {style: {textAlign:"center"}}, 
        React.createElement("span", {style: {fontSize:"60%"}}, this.state.auth.google.displayName), 
        React.createElement("img", {style: {borderRadius:"50%"}, src: this.state.photourl}), 
        React.createElement("button", {onClick: this.signOut}, "Sign Out")
      )
      );
  }
  ,render:function() {
     return (this.state.auth && this.state.auth.google)?this.renderUser():this.renderSignin();
  }
})

module.exports=LoginBox;
},{"../actions/user":"C:\\ksana2015\\correspondence\\src\\actions\\user.js","../stores/user":"C:\\ksana2015\\correspondence\\src\\stores\\user.js","react/addons":"react/addons","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\views\\translations.js":[function(require,module,exports){
var React=require("react/addons");
var E=React.createElement;

var Reflux=require("reflux");
var bs=require("react-bootstrap");
var Table=bs.Table;
var LinkView=require("ksana-layer-react").LinkView;
var markuputil=require("ksana-layer-react").markuputil;
var action_selection=require("../actions/selection");
var action_link=require("../actions/link");
var store_link=require("../stores/link");
var store_highlight=require("../stores/highlight");
var store_selection=require("../stores/selection");
var action_highlight=require("../actions/highlight");
var User=require("../stores/user");

var Translations=React.createClass({displayName: "Translations",
	mixins:[Reflux.listenTo(store_link,"onLinkData")
					,Reflux.listenTo(store_selection,"onSelectionData")
					,Reflux.listenTo(store_highlight,"onHighlightData")]
	,getInitialState:function(){
		return {links:{},selections:{},highlights:{}};
	}
	,onSelectionData:function(selections){
		this.setState({selections:selections});
	}
	,onLinkData:function(links) {
		this.setState({links:links});
	}
	,onHighlightData:function(highlights) {
		this.setState({highlights:highlights});
	}
	,onEnterTag:function(e,tid,linkid) {
		action_highlight.enter(linkid);
	}
	,onLeaveTag:function(e,tid,linkid) {
		action_highlight.leave(linkid);
	}
	,componentDidMount:function(){
		action_link.fetch();
	}
	,onSelectText:function(start,len,text,params,sels) {
		var links=this.getLink(params.sender,"array");
		var overlapped=markuputil.hasOverlap(start+1,len-2,links);
		if (overlapped) return true;

		action_selection.set(params.sender,sels);
	}
	,onClickTag:function(e,reactid,tag) {
		if (User.editable()) {
			this.setState({editing:tag});
			action_highlight.leave(tag);

			var sels=store_link.pluck(tag);
			action_selection.setAll(sels);
		}
	}
	,getLink:function(uti,format) {
		var obj={},out=[];
		for (var i in this.state.links) {
			var group=this.state.links[i];
			if (group[uti]) {
				obj[i]=group[uti];
				out=out.concat(group[uti]);
			}
		};
		return (format=="array")?out:obj;	
	}
	,getSel:function(uti) {
		return this.state.selections[uti];
	}
	,getHighlight:function(uti) {
		return this.state.highlights[uti];
	}
	,renderItem:function(item,idx) {
		var uti=item[1];
		var links=this.getLink(uti);
		var selections=this.getSel(uti);
		var highlights=this.getHighlight(uti);

		return E("tr",{key:idx},
			E("td",null,item[0])
			,E("td",null,E(LinkView,{
				id:uti
				,onClickTag:this.onClickTag,onEnterTag:this.onEnterTag,onLeaveTag:this.onLeaveTag
				,selections:selections,links:links,highlights:highlights
				,onSelectText:this.onSelectText,text:item[2]}))
		);
	}
	,render:function() {
		return E(Table,{striped:true,bordered:true,condensed:true},
			this.props.data.map(this.renderItem));
	}
})
module.exports=Translations;
},{"../actions/highlight":"C:\\ksana2015\\correspondence\\src\\actions\\highlight.js","../actions/link":"C:\\ksana2015\\correspondence\\src\\actions\\link.js","../actions/selection":"C:\\ksana2015\\correspondence\\src\\actions\\selection.js","../stores/highlight":"C:\\ksana2015\\correspondence\\src\\stores\\highlight.js","../stores/link":"C:\\ksana2015\\correspondence\\src\\stores\\link.js","../stores/selection":"C:\\ksana2015\\correspondence\\src\\stores\\selection.js","../stores/user":"C:\\ksana2015\\correspondence\\src\\stores\\user.js","ksana-layer-react":"C:\\ksana2015\\node_modules\\ksana-layer-react\\index.js","react-bootstrap":"react-bootstrap","react/addons":"react/addons","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\node_modules\\firebase\\lib\\firebase-web.js":[function(require,module,exports){
/*! @license Firebase v2.2.4
    License: https://www.firebase.com/terms/terms-of-service.html */
(function() {var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.ub=function(){return a.tf?a.tf:a.tf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.Zg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vg=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function na(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function oa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function pa(a){var b=0,c;for(c in a)b++;return b}function qa(a){for(var b in a)return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ta(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ua(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function va(a,b){var c=ua(a,b,void 0);return c&&a[c]}function wa(a){for(var b in a)return!1;return!0}function xa(a){var b={},c;for(c in a)b[c]=a[c];return b}var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Pd=void 0}
function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Pd?a.Pd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
c.push(":"),Ca(a,a.Pd?a.Pd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var Ha;a:{var Ia=aa.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""};function Ka(){this.Wa=-1};function La(){this.Wa=-1;this.Wa=64;this.R=[];this.le=[];this.Tf=[];this.Id=[];this.Id[0]=128;for(var a=1;a<this.Wa;++a)this.Id[a]=0;this.be=this.$b=0;this.reset()}ma(La,Ka);La.prototype.reset=function(){this.R[0]=1732584193;this.R[1]=4023233417;this.R[2]=2562383102;this.R[3]=271733878;this.R[4]=3285377520;this.be=this.$b=0};
function Ma(a,b,c){c||(c=0);var d=a.Tf;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.R[0];c=a.R[1];for(var g=a.R[2],k=a.R[3],l=a.R[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.R[0]=a.R[0]+b&4294967295;a.R[1]=a.R[1]+c&4294967295;a.R[2]=a.R[2]+g&4294967295;a.R[3]=a.R[3]+k&4294967295;a.R[4]=a.R[4]+l&4294967295}
La.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.le,f=this.$b;d<b;){if(0==f)for(;d<=c;)Ma(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){Ma(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){Ma(this,e);f=0;break}}this.$b=f;this.be+=b}};var t=Array.prototype,Na=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oa=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Qa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ra=t.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Oa(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Sa=t.every?function(a,b,
c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ta(a,b){var c=Ua(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ua(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Va(a,b){var c=Na(a,b);0<=c&&t.splice.call(a,c,1)}function Wa(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
function Xa(a,b){a.sort(b||Ya)}function Ya(a,b){return a>b?1:a<b?-1:0};var Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ha))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,v=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,g||(k=64));d.push(c[v],c[f],c[k],c[m])}return d.join("")}
function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a,62<=a&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function hb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function ib(a){var b={};hb(a,function(a,d){b[a]=d});return b};function jb(a){var b=[];hb(a,function(a,d){ea(d)?Oa(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function kb(a){var b={};a=a.replace(/^\?/,"").split("&");Oa(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function z(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(z(a,b,d)+"must be a valid function.");}function lb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(z(a,b,!0)+"must be a valid context object.");};function mb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function nb(){this.Sd=C}nb.prototype.j=function(a){return this.Sd.oa(a)};nb.prototype.toString=function(){return this.Sd.toString()};function ob(){}ob.prototype.pf=function(){return null};ob.prototype.xe=function(){return null};var pb=new ob;function qb(a,b,c){this.Qf=a;this.Ka=b;this.Hd=c}qb.prototype.pf=function(a){var b=this.Ka.D;if(rb(b,a))return b.j().M(a);b=null!=this.Hd?new sb(this.Hd,!0,!1):this.Ka.u();return this.Qf.Xa(a,b)};qb.prototype.xe=function(a,b,c){var d=null!=this.Hd?this.Hd:tb(this.Ka);a=this.Qf.me(d,b,1,c,a);return 0===a.length?null:a[0]};function ub(){this.tb=[]}function vb(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.tb.push(c),c=null);null===c&&(c=new wb(f));c.add(e)}c&&a.tb.push(c)}function xb(a,b,c){vb(a,c);yb(a,function(a){return a.Z(b)})}function zb(a,b,c){vb(a,c);yb(a,function(a){return a.contains(b)||b.contains(a)})}
function yb(a,b){for(var c=!0,d=0;d<a.tb.length;d++){var e=a.tb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.tb[d],f=0;f<e.sd.length;f++){var g=e.sd[f];if(null!==g){e.sd[f]=null;var k=g.Ub();Ab&&Bb("event: "+g.toString());Cb(k)}}a.tb[d]=null}else c=!1}c&&(a.tb=[])}function wb(a){this.qa=a;this.sd=[]}wb.prototype.add=function(a){this.sd.push(a)};wb.prototype.Yb=function(){return this.qa};function D(a,b,c,d){this.type=a;this.Ja=b;this.Ya=c;this.Je=d;this.Nd=void 0}function Db(a){return new D(Eb,a)}var Eb="value";function Fb(a,b,c,d){this.te=b;this.Wd=c;this.Nd=d;this.rd=a}Fb.prototype.Yb=function(){var a=this.Wd.lc();return"value"===this.rd?a.path:a.parent().path};Fb.prototype.ye=function(){return this.rd};Fb.prototype.Ub=function(){return this.te.Ub(this)};Fb.prototype.toString=function(){return this.Yb().toString()+":"+this.rd+":"+B(this.Wd.lf())};function Gb(a,b,c){this.te=a;this.error=b;this.path=c}Gb.prototype.Yb=function(){return this.path};Gb.prototype.ye=function(){return"cancel"};
Gb.prototype.Ub=function(){return this.te.Ub(this)};Gb.prototype.toString=function(){return this.path.toString()+":cancel"};function sb(a,b,c){this.B=a;this.$=b;this.Tb=c}function Hb(a){return a.$}function rb(a,b){return a.$&&!a.Tb||a.B.Ha(b)}sb.prototype.j=function(){return this.B};function Ib(a){this.dg=a;this.Ad=null}Ib.prototype.get=function(){var a=this.dg.get(),b=xa(a);if(this.Ad)for(var c in this.Ad)b[c]-=this.Ad[c];this.Ad=a;return b};function Jb(a,b){this.Mf={};this.Yd=new Ib(a);this.ca=b;var c=1E4+2E4*Math.random();setTimeout(q(this.Hf,this),Math.floor(c))}Jb.prototype.Hf=function(){var a=this.Yd.get(),b={},c=!1,d;for(d in a)0<a[d]&&u(this.Mf,d)&&(b[d]=a[d],c=!0);c&&this.ca.Te(b);setTimeout(q(this.Hf,this),Math.floor(6E5*Math.random()))};function Kb(){this.Dc={}}function Lb(a,b,c){n(c)||(c=1);u(a.Dc,b)||(a.Dc[b]=0);a.Dc[b]+=c}Kb.prototype.get=function(){return xa(this.Dc)};var Mb={},Nb={};function Ob(a){a=a.toString();Mb[a]||(Mb[a]=new Kb);return Mb[a]}function Pb(a,b){var c=a.toString();Nb[c]||(Nb[c]=b());return Nb[c]};function E(a,b){this.name=a;this.S=b}function Qb(a,b){return new E(a,b)};function Rb(a,b){return Sb(a.name,b.name)}function Tb(a,b){return Sb(a,b)};function Ub(a,b,c){this.type=Vb;this.source=a;this.path=b;this.Ia=c}Ub.prototype.Wc=function(a){return this.path.e()?new Ub(this.source,F,this.Ia.M(a)):new Ub(this.source,G(this.path),this.Ia)};Ub.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ia.toString()+")"};function Wb(a,b){this.type=Xb;this.source=Yb;this.path=a;this.Ve=b}Wb.prototype.Wc=function(){return this.path.e()?this:new Wb(G(this.path),this.Ve)};Wb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Ve+")"};function Zb(a,b){this.type=$b;this.source=a;this.path=b}Zb.prototype.Wc=function(){return this.path.e()?new Zb(this.source,F):new Zb(this.source,G(this.path))};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ac(a,b){this.La=a;this.xa=b?b:bc}h=ac.prototype;h.Na=function(a,b){return new ac(this.La,this.xa.Na(a,b,this.La).X(null,null,!1,null,null))};h.remove=function(a){return new ac(this.La,this.xa.remove(a,this.La).X(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.xa;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function cc(a,b){for(var c,d=a.xa,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.xa.e()};h.count=function(){return this.xa.count()};h.Rc=function(){return this.xa.Rc()};h.ec=function(){return this.xa.ec()};h.ha=function(a){return this.xa.ha(a)};
h.Wb=function(a){return new dc(this.xa,null,this.La,!1,a)};h.Xb=function(a,b){return new dc(this.xa,a,this.La,!1,b)};h.Zb=function(a,b){return new dc(this.xa,a,this.La,!0,b)};h.rf=function(a){return new dc(this.xa,null,this.La,!0,a)};function dc(a,b,c,d,e){this.Rd=e||null;this.Ee=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Ee?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.Ee?a.right:a.left}
function H(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Rd?a.Rd(b.key,b.value):{key:b.key,value:b.value};if(a.Ee)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function ec(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Rd?a.Rd(b.key,b.value):{key:b.key,value:b.value}}function fc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:bc;this.right=null!=e?e:bc}h=fc.prototype;
h.X=function(a,b,c,d,e){return new fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function gc(a){return a.left.e()?a:gc(a.left)}h.Rc=function(){return gc(this).key};h.ec=function(){return this.right.e()?this.key:this.right.ec()};
h.Na=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Na(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Na(a,b,c));return hc(e)};function ic(a){if(a.left.e())return bc;a.left.fa()||a.left.left.fa()||(a=jc(a));a=a.X(null,null,null,ic(a.left),null);return hc(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=jc(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=kc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=lc(c),c.left.left.fa()&&(c=kc(c),c=lc(c)));if(0===b(a,c.key)){if(c.right.e())return bc;d=gc(c.right);c=c.X(d.key,d.value,null,null,ic(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return hc(c)};h.fa=function(){return this.color};
function hc(a){a.right.fa()&&!a.left.fa()&&(a=mc(a));a.left.fa()&&a.left.left.fa()&&(a=kc(a));a.left.fa()&&a.right.fa()&&(a=lc(a));return a}function jc(a){a=lc(a);a.right.left.fa()&&(a=a.X(null,null,null,null,kc(a.right)),a=mc(a),a=lc(a));return a}function mc(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function kc(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function lc(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function nc(){}h=nc.prototype;h.X=function(){return this};h.Na=function(a,b){return new fc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ha=function(){return!1};h.Rc=function(){return null};h.ec=function(){return null};h.fa=function(){return!1};var bc=new nc;function oc(a,b){return a&&"object"===typeof a?(J(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function pc(a,b){var c=new qc;rc(a,new K(""),function(a,e){c.mc(a,sc(e,b))});return c}function sc(a,b){var c=a.A().K(),c=oc(c,b),d;if(a.N()){var e=oc(a.Ba(),b);return e!==a.Ba()||c!==a.A().K()?new tc(e,L(c)):a}d=a;c!==a.A().K()&&(d=d.da(new tc(c)));a.U(M,function(a,c){var e=sc(c,b);e!==c&&(d=d.Q(a,e))});return d};function K(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function N(a,b){var c=O(a);if(null===c)return b;if(c===O(b))return N(G(a),G(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}function O(a){return a.Y>=a.o.length?null:a.o[a.Y]}function uc(a){return a.o.length-a.Y}
function G(a){var b=a.Y;b<a.o.length&&b++;return new K(a.o,b)}function vc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}h=K.prototype;h.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};h.slice=function(a){return this.o.slice(this.Y+(a||0))};h.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new K(a,0)};
h.w=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof K)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new K(b,0)};h.e=function(){return this.Y>=this.o.length};h.Z=function(a){if(uc(this)!==uc(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
h.contains=function(a){var b=this.Y,c=a.Y;if(uc(this)>uc(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var F=new K("");function wc(a,b){this.Qa=a.slice();this.Ea=Math.max(1,this.Qa.length);this.kf=b;for(var c=0;c<this.Qa.length;c++)this.Ea+=xc(this.Qa[c]);yc(this)}wc.prototype.push=function(a){0<this.Qa.length&&(this.Ea+=1);this.Qa.push(a);this.Ea+=xc(a);yc(this)};wc.prototype.pop=function(){var a=this.Qa.pop();this.Ea-=xc(a);0<this.Qa.length&&--this.Ea};
function yc(a){if(768<a.Ea)throw Error(a.kf+"has a key path longer than 768 bytes ("+a.Ea+").");if(32<a.Qa.length)throw Error(a.kf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+zc(a));}function zc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Ac(){this.wc={}}Ac.prototype.set=function(a,b){null==b?delete this.wc[a]:this.wc[a]=b};Ac.prototype.get=function(a){return u(this.wc,a)?this.wc[a]:null};Ac.prototype.remove=function(a){delete this.wc[a]};Ac.prototype.uf=!0;function Bc(a){this.Ec=a;this.Md="firebase:"}h=Bc.prototype;h.set=function(a,b){null==b?this.Ec.removeItem(this.Md+a):this.Ec.setItem(this.Md+a,B(b))};h.get=function(a){a=this.Ec.getItem(this.Md+a);return null==a?null:mb(a)};h.remove=function(a){this.Ec.removeItem(this.Md+a)};h.uf=!1;h.toString=function(){return this.Ec.toString()};function Cc(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Bc(b)}}catch(c){}return new Ac}var Dc=Cc("localStorage"),P=Cc("sessionStorage");function Ec(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.lb=b;this.Cb=c;this.Tg=d;this.Ld=e||"";this.Oa=Dc.get("host:"+a)||this.host}function Fc(a,b){b!==a.Oa&&(a.Oa=b,"s-"===a.Oa.substr(0,2)&&Dc.set("host:"+a.host,a.Oa))}Ec.prototype.toString=function(){var a=(this.lb?"https://":"http://")+this.host;this.Ld&&(a+="<"+this.Ld+">");return a};var Gc=function(){var a=1;return function(){return a++}}();function J(a,b){if(!a)throw Hc(b);}function Hc(a){return Error("Firebase (2.2.4) INTERNAL ASSERT FAILED: "+a)}
function Ic(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Wa(d,c,
c+8192));b=a}}return b}catch(m){Bb("base64Decode failed: ",m)}return null}function Jc(a){var b=Kc(a);a=new La;a.update(b);var b=[],c=8*a.be;56>a.$b?a.update(a.Id,56-a.$b):a.update(a.Id,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.le[d]=c&255,c/=256;Ma(a,a.le);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.R[d]>>e&255,++c;return fb(b)}
function Lc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Lc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Ab=null,Mc=!0;function Bb(a){!0===Mc&&(Mc=!1,null===Ab&&!0===P.get("logging_enabled")&&Nc(!0));if(Ab){var b=Lc.apply(null,arguments);Ab(b)}}function Oc(a){return function(){Bb(a,arguments)}}
function Pc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Lc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Qc(a){var b=Lc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function Q(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Lc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Rc(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(v){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Qg:d,lb:f,scheme:g,Zc:e}}function Sc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Tc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Uc(a),d=Uc(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Vc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function Wc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Wc(a[b[d]]);return c+"}"}function Xc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Yc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
function Zc(a){J(!Sc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var $c=/^-?\d{1,10}$/;function Uc(a){return $c.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Cb(a){try{a()}catch(b){setTimeout(function(){Q("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function R(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Cb(function(){a.apply(null,c)})}};function Kc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,J(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function xc(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function ad(a){var b={},c={},d={},e="";try{var f=a.split("."),b=mb(Ic(f[0])||""),c=mb(Ic(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Wg:b,Ac:c,data:d,Ng:e}}function bd(a){a=ad(a).Ac;return"object"===typeof a&&a.hasOwnProperty("iat")?w(a,"iat"):null}function cd(a){a=ad(a);var b=a.Ac;return!!a.Ng&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function dd(a){this.V=a;this.g=a.n.g}function ed(a,b,c,d){var e=[],f=[];Oa(b,function(b){"child_changed"===b.type&&a.g.xd(b.Je,b.Ja)&&f.push(new D("child_moved",b.Ja,b.Ya))});fd(a,e,"child_removed",b,d,c);fd(a,e,"child_added",b,d,c);fd(a,e,"child_moved",f,d,c);fd(a,e,"child_changed",b,d,c);fd(a,e,Eb,b,d,c);return e}function fd(a,b,c,d,e,f){d=Pa(d,function(a){return a.type===c});Xa(d,q(a.eg,a));Oa(d,function(c){var d=gd(a,c,f);Oa(e,function(e){e.Jf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function gd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Nd=c.qf(b.Ya,b.Ja,a.g));return b}dd.prototype.eg=function(a,b){if(null==a.Ya||null==b.Ya)throw Hc("Should only compare child_ events.");return this.g.compare(new E(a.Ya,a.Ja),new E(b.Ya,b.Ja))};function hd(){this.eb={}}
function id(a,b){var c=b.type,d=b.Ya;J("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");J(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.eb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.eb[d]=new D("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.eb[d];else if("child_removed"==c&&"child_changed"==f)a.eb[d]=new D("child_removed",e.Je,d);else if("child_changed"==c&&
"child_added"==f)a.eb[d]=new D("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.eb[d]=new D("child_changed",b.Ja,d,e.Je);else throw Hc("Illegal combination of changes: "+b+" occurred after "+e);}else a.eb[d]=b};function jd(a,b,c){this.Pb=a;this.qb=b;this.sb=c||null}h=jd.prototype;h.Jf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new Fb("value",this,new S(a.Ja,b.lc(),c))};h.Ub=function(a){var b=this.sb;if("cancel"===a.ye()){J(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Wd)}};h.ff=function(a,b){return this.qb?new Gb(this,a,b):null};
h.matches=function(a){return a instanceof jd?a.Pb&&this.Pb?a.Pb===this.Pb&&a.sb===this.sb:!0:!1};h.sf=function(){return null!==this.Pb};function kd(a,b,c){this.ga=a;this.qb=b;this.sb=c}h=kd.prototype;h.Jf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};h.ff=function(a,b){return this.qb?new Gb(this,a,b):null};
h.createEvent=function(a,b){J(null!=a.Ya,"Child events should have a childName.");var c=b.lc().w(a.Ya);return new Fb(a.type,this,new S(a.Ja,c,b.n.g),a.Nd)};h.Ub=function(a){var b=this.sb;if("cancel"===a.ye()){J(this.qb,"Raising a cancel event on a listener with no cancel callback");var c=this.qb;return function(){c.call(b,a.error)}}var d=this.ga[a.rd];return function(){d.call(b,a.Wd,a.Nd)}};
h.matches=function(a){if(a instanceof kd){if(!this.ga||!a.ga)return!0;if(this.sb===a.sb){var b=pa(a.ga);if(b===pa(this.ga)){if(1===b){var b=qa(a.ga),c=qa(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return oa(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};h.sf=function(){return null!==this.ga};function ld(a){this.g=a}h=ld.prototype;h.G=function(a,b,c,d,e){J(a.Ic(this.g),"A node must be indexed if only a child is updated");d=a.M(b);if(d.Z(c))return a;null!=e&&(c.e()?a.Ha(b)?id(e,new D("child_removed",d,b)):J(a.N(),"A child remove without an old child only makes sense on a leaf node"):d.e()?id(e,new D("child_added",c,b)):id(e,new D("child_changed",c,b,d)));return a.N()&&c.e()?a:a.Q(b,c).mb(this.g)};
h.ta=function(a,b,c){null!=c&&(a.N()||a.U(M,function(a,e){b.Ha(a)||id(c,new D("child_removed",e,a))}),b.N()||b.U(M,function(b,e){if(a.Ha(b)){var f=a.M(b);f.Z(e)||id(c,new D("child_changed",e,b,f))}else id(c,new D("child_added",e,b))}));return b.mb(this.g)};h.da=function(a,b){return a.e()?C:a.da(b)};h.Ga=function(){return!1};h.Vb=function(){return this};function md(a){this.Ae=new ld(a.g);this.g=a.g;var b;a.la?(b=nd(a),b=a.g.Oc(od(a),b)):b=a.g.Sc();this.dd=b;a.na?(b=pd(a),a=a.g.Oc(qd(a),b)):a=a.g.Pc();this.Fc=a}h=md.prototype;h.matches=function(a){return 0>=this.g.compare(this.dd,a)&&0>=this.g.compare(a,this.Fc)};h.G=function(a,b,c,d,e){this.matches(new E(b,c))||(c=C);return this.Ae.G(a,b,c,d,e)};h.ta=function(a,b,c){b.N()&&(b=C);var d=b.mb(this.g),d=d.da(C),e=this;b.U(M,function(a,b){e.matches(new E(a,b))||(d=d.Q(a,C))});return this.Ae.ta(a,d,c)};
h.da=function(a){return a};h.Ga=function(){return!0};h.Vb=function(){return this.Ae};function rd(a){this.ra=new md(a);this.g=a.g;J(a.ia,"Only valid if limit has been set");this.ja=a.ja;this.Jb=!sd(a)}h=rd.prototype;h.G=function(a,b,c,d,e){this.ra.matches(new E(b,c))||(c=C);return a.M(b).Z(c)?a:a.Db()<this.ja?this.ra.Vb().G(a,b,c,d,e):td(this,a,b,c,d,e)};
h.ta=function(a,b,c){var d;if(b.N()||b.e())d=C.mb(this.g);else if(2*this.ja<b.Db()&&b.Ic(this.g)){d=C.mb(this.g);b=this.Jb?b.Zb(this.ra.Fc,this.g):b.Xb(this.ra.dd,this.g);for(var e=0;0<b.Pa.length&&e<this.ja;){var f=H(b),g;if(g=this.Jb?0>=this.g.compare(this.ra.dd,f):0>=this.g.compare(f,this.ra.Fc))d=d.Q(f.name,f.S),e++;else break}}else{d=b.mb(this.g);d=d.da(C);var k,l,m;if(this.Jb){b=d.rf(this.g);k=this.ra.Fc;l=this.ra.dd;var v=ud(this.g);m=function(a,b){return v(b,a)}}else b=d.Wb(this.g),k=this.ra.dd,
l=this.ra.Fc,m=ud(this.g);for(var e=0,y=!1;0<b.Pa.length;)f=H(b),!y&&0>=m(k,f)&&(y=!0),(g=y&&e<this.ja&&0>=m(f,l))?e++:d=d.Q(f.name,C)}return this.ra.Vb().ta(a,d,c)};h.da=function(a){return a};h.Ga=function(){return!0};h.Vb=function(){return this.ra.Vb()};
function td(a,b,c,d,e,f){var g;if(a.Jb){var k=ud(a.g);g=function(a,b){return k(b,a)}}else g=ud(a.g);J(b.Db()==a.ja,"");var l=new E(c,d),m=a.Jb?wd(b,a.g):xd(b,a.g),v=a.ra.matches(l);if(b.Ha(c)){var y=b.M(c),m=e.xe(a.g,m,a.Jb);null!=m&&m.name==c&&(m=e.xe(a.g,m,a.Jb));e=null==m?1:g(m,l);if(v&&!d.e()&&0<=e)return null!=f&&id(f,new D("child_changed",d,c,y)),b.Q(c,d);null!=f&&id(f,new D("child_removed",y,c));b=b.Q(c,C);return null!=m&&a.ra.matches(m)?(null!=f&&id(f,new D("child_added",m.S,m.name)),b.Q(m.name,
m.S)):b}return d.e()?b:v&&0<=g(m,l)?(null!=f&&(id(f,new D("child_removed",m.S,m.name)),id(f,new D("child_added",d,c))),b.Q(c,d).Q(m.name,C)):b};function yd(a,b){this.he=a;this.cg=b}function zd(a){this.I=a}
zd.prototype.bb=function(a,b,c,d){var e=new hd,f;if(b.type===Vb)b.source.ve?c=Ad(this,a,b.path,b.Ia,c,d,e):(J(b.source.of,"Unknown source."),f=b.source.af,c=Bd(this,a,b.path,b.Ia,c,d,f,e));else if(b.type===Cd)b.source.ve?c=Dd(this,a,b.path,b.children,c,d,e):(J(b.source.of,"Unknown source."),f=b.source.af,c=Ed(this,a,b.path,b.children,c,d,f,e));else if(b.type===Xb)if(b.Ve)if(f=b.path,null!=c.sc(f))c=a;else{b=new qb(c,a,d);d=a.D.j();if(f.e()||".priority"===O(f))Hb(a.u())?b=c.ua(tb(a)):(b=a.u().j(),
J(b instanceof T,"serverChildren would be complete if leaf node"),b=c.xc(b)),b=this.I.ta(d,b,e);else{f=O(f);var g=c.Xa(f,a.u());null==g&&rb(a.u(),f)&&(g=d.M(f));b=null!=g?this.I.G(d,f,g,b,e):a.D.j().Ha(f)?this.I.G(d,f,C,b,e):d;b.e()&&Hb(a.u())&&(d=c.ua(tb(a)),d.N()&&(b=this.I.ta(b,d,e)))}d=Hb(a.u())||null!=c.sc(F);c=Fd(a,b,d,this.I.Ga())}else c=Gd(this,a,b.path,c,d,e);else if(b.type===$b)d=b.path,b=a.u(),f=b.j(),g=b.$||d.e(),c=Hd(this,new Id(a.D,new sb(f,g,b.Tb)),d,c,pb,e);else throw Hc("Unknown operation type: "+
b.type);e=ra(e.eb);d=c;b=d.D;b.$&&(f=b.j().N()||b.j().e(),g=Jd(a),(0<e.length||!a.D.$||f&&!b.j().Z(g)||!b.j().A().Z(g.A()))&&e.push(Db(Jd(d))));return new yd(c,e)};
function Hd(a,b,c,d,e,f){var g=b.D;if(null!=d.sc(c))return b;var k;if(c.e())J(Hb(b.u()),"If change path is empty, we must have complete server data"),b.u().Tb?(e=tb(b),d=d.xc(e instanceof T?e:C)):d=d.ua(tb(b)),f=a.I.ta(b.D.j(),d,f);else{var l=O(c);if(".priority"==l)J(1==uc(c),"Can't have a priority with additional path components"),f=g.j(),k=b.u().j(),d=d.hd(c,f,k),f=null!=d?a.I.da(f,d):g.j();else{var m=G(c);rb(g,l)?(k=b.u().j(),d=d.hd(c,g.j(),k),d=null!=d?g.j().M(l).G(m,d):g.j().M(l)):d=d.Xa(l,b.u());
f=null!=d?a.I.G(g.j(),l,d,e,f):g.j()}}return Fd(b,f,g.$||c.e(),a.I.Ga())}function Bd(a,b,c,d,e,f,g,k){var l=b.u();g=g?a.I:a.I.Vb();if(c.e())d=g.ta(l.j(),d,null);else if(g.Ga()&&!l.Tb)d=l.j().G(c,d),d=g.ta(l.j(),d,null);else{var m=O(c);if((c.e()?!l.$||l.Tb:!rb(l,O(c)))&&1<uc(c))return b;d=l.j().M(m).G(G(c),d);d=".priority"==m?g.da(l.j(),d):g.G(l.j(),m,d,pb,null)}l=l.$||c.e();b=new Id(b.D,new sb(d,l,g.Ga()));return Hd(a,b,c,e,new qb(e,b,f),k)}
function Ad(a,b,c,d,e,f,g){var k=b.D;e=new qb(e,b,f);if(c.e())g=a.I.ta(b.D.j(),d,g),a=Fd(b,g,!0,a.I.Ga());else if(f=O(c),".priority"===f)g=a.I.da(b.D.j(),d),a=Fd(b,g,k.$,k.Tb);else{var l=G(c);c=k.j().M(f);if(!l.e()){var m=e.pf(f);d=null!=m?".priority"===vc(l)&&m.oa(l.parent()).e()?m:m.G(l,d):C}c.Z(d)?a=b:(g=a.I.G(k.j(),f,d,e,g),a=Fd(b,g,k.$,a.I.Ga()))}return a}
function Dd(a,b,c,d,e,f,g){var k=b;Kd(d,function(d,m){var v=c.w(d);rb(b.D,O(v))&&(k=Ad(a,k,v,m,e,f,g))});Kd(d,function(d,m){var v=c.w(d);rb(b.D,O(v))||(k=Ad(a,k,v,m,e,f,g))});return k}function Ld(a,b){Kd(b,function(b,d){a=a.G(b,d)});return a}
function Ed(a,b,c,d,e,f,g,k){if(b.u().j().e()&&!Hb(b.u()))return b;var l=b;c=c.e()?d:Md(Nd,c,d);var m=b.u().j();c.children.ha(function(c,d){if(m.Ha(c)){var I=b.u().j().M(c),I=Ld(I,d);l=Bd(a,l,new K(c),I,e,f,g,k)}});c.children.ha(function(c,d){var I=!Hb(b.u())&&null==d.value;m.Ha(c)||I||(I=b.u().j().M(c),I=Ld(I,d),l=Bd(a,l,new K(c),I,e,f,g,k))});return l}
function Gd(a,b,c,d,e,f){if(null!=d.sc(c))return b;var g=new qb(d,b,e),k=e=b.D.j();if(Hb(b.u())){if(c.e())e=d.ua(tb(b)),k=a.I.ta(b.D.j(),e,f);else if(".priority"===O(c)){var l=d.Xa(O(c),b.u());null==l||e.e()||e.A().Z(l)||(k=a.I.da(e,l))}else l=O(c),e=d.Xa(l,b.u()),null!=e&&(k=a.I.G(b.D.j(),l,e,g,f));e=!0}else if(b.D.$||c.e())k=e,e=b.D.j(),e.N()||e.U(M,function(c){var e=d.Xa(c,b.u());null!=e&&(k=a.I.G(k,c,e,g,f))}),e=b.D.$;else{l=O(c);if(1==uc(c)||rb(b.D,l))c=d.Xa(l,b.u()),null!=c&&(k=a.I.G(e,l,c,
g,f));e=!1}return Fd(b,k,e,a.I.Ga())};function Od(){}var Pd={};function ud(a){return q(a.compare,a)}Od.prototype.xd=function(a,b){return 0!==this.compare(new E("[MIN_NAME]",a),new E("[MIN_NAME]",b))};Od.prototype.Sc=function(){return Qd};function Rd(a){this.bc=a}ma(Rd,Od);h=Rd.prototype;h.Hc=function(a){return!a.M(this.bc).e()};h.compare=function(a,b){var c=a.S.M(this.bc),d=b.S.M(this.bc),c=c.Cc(d);return 0===c?Sb(a.name,b.name):c};h.Oc=function(a,b){var c=L(a),c=C.Q(this.bc,c);return new E(b,c)};
h.Pc=function(){var a=C.Q(this.bc,Sd);return new E("[MAX_NAME]",a)};h.toString=function(){return this.bc};function Td(){}ma(Td,Od);h=Td.prototype;h.compare=function(a,b){var c=a.S.A(),d=b.S.A(),c=c.Cc(d);return 0===c?Sb(a.name,b.name):c};h.Hc=function(a){return!a.A().e()};h.xd=function(a,b){return!a.A().Z(b.A())};h.Sc=function(){return Qd};h.Pc=function(){return new E("[MAX_NAME]",new tc("[PRIORITY-POST]",Sd))};h.Oc=function(a,b){var c=L(a);return new E(b,new tc("[PRIORITY-POST]",c))};
h.toString=function(){return".priority"};var M=new Td;function Ud(){}ma(Ud,Od);h=Ud.prototype;h.compare=function(a,b){return Sb(a.name,b.name)};h.Hc=function(){throw Hc("KeyIndex.isDefinedOn not expected to be called.");};h.xd=function(){return!1};h.Sc=function(){return Qd};h.Pc=function(){return new E("[MAX_NAME]",C)};h.Oc=function(a){J(p(a),"KeyIndex indexValue must always be a string.");return new E(a,C)};h.toString=function(){return".key"};var Vd=new Ud;function Wd(){}ma(Wd,Od);h=Wd.prototype;
h.compare=function(a,b){var c=a.S.Cc(b.S);return 0===c?Sb(a.name,b.name):c};h.Hc=function(){return!0};h.xd=function(a,b){return!a.Z(b)};h.Sc=function(){return Qd};h.Pc=function(){return Xd};h.Oc=function(a,b){var c=L(a);return new E(b,c)};h.toString=function(){return".value"};var Yd=new Wd;function Zd(){this.Rb=this.na=this.Lb=this.la=this.ia=!1;this.ja=0;this.Nb="";this.dc=null;this.xb="";this.ac=null;this.vb="";this.g=M}var $d=new Zd;function sd(a){return""===a.Nb?a.la:"l"===a.Nb}function od(a){J(a.la,"Only valid if start has been set");return a.dc}function nd(a){J(a.la,"Only valid if start has been set");return a.Lb?a.xb:"[MIN_NAME]"}function qd(a){J(a.na,"Only valid if end has been set");return a.ac}
function pd(a){J(a.na,"Only valid if end has been set");return a.Rb?a.vb:"[MAX_NAME]"}function ae(a){var b=new Zd;b.ia=a.ia;b.ja=a.ja;b.la=a.la;b.dc=a.dc;b.Lb=a.Lb;b.xb=a.xb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.vb=a.vb;b.g=a.g;return b}h=Zd.prototype;h.Ge=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="";return b};h.He=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="l";return b};h.Ie=function(a){var b=ae(this);b.ia=!0;b.ja=a;b.Nb="r";return b};
h.Xd=function(a,b){var c=ae(this);c.la=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Lb=!0,c.xb=b):(c.Lb=!1,c.xb="");return c};h.qd=function(a,b){var c=ae(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.vb=b):(c.Yg=!1,c.vb="");return c};function be(a,b){var c=ae(a);c.g=b;return c}function ce(a){var b={};a.la&&(b.sp=a.dc,a.Lb&&(b.sn=a.xb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.vb));if(a.ia){b.l=a.ja;var c=a.Nb;""===c&&(c=sd(a)?"l":"r");b.vf=c}a.g!==M&&(b.i=a.g.toString());return b}
function de(a){return!(a.la||a.na||a.ia)}function ee(a){var b={};if(de(a)&&a.g==M)return b;var c;a.g===M?c="$priority":a.g===Yd?c="$value":(J(a.g instanceof Rd,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.la&&(b.startAt=B(a.dc),a.Lb&&(b.startAt+=","+B(a.xb)));a.na&&(b.endAt=B(a.ac),a.Rb&&(b.endAt+=","+B(a.vb)));a.ia&&(sd(a)?b.limitToFirst=a.ja:b.limitToLast=a.ja);return b}h.toString=function(){return B(ce(this))};function fe(a,b){this.yd=a;this.cc=b}fe.prototype.get=function(a){var b=w(this.yd,a);if(!b)throw Error("No index defined for "+a);return b===Pd?null:b};function ge(a,b,c){var d=na(a.yd,function(d,f){var g=w(a.cc,f);J(g,"Missing index implementation for "+f);if(d===Pd){if(g.Hc(b.S)){for(var k=[],l=c.Wb(Qb),m=H(l);m;)m.name!=b.name&&k.push(m),m=H(l);k.push(b);return he(k,ud(g))}return Pd}g=c.get(b.name);k=d;g&&(k=k.remove(new E(b.name,g)));return k.Na(b,b.S)});return new fe(d,a.cc)}
function ie(a,b,c){var d=na(a.yd,function(a){if(a===Pd)return a;var d=c.get(b.name);return d?a.remove(new E(b.name,d)):a});return new fe(d,a.cc)}var je=new fe({".priority":Pd},{".priority":M});function tc(a,b){this.C=a;J(n(this.C)&&null!==this.C,"LeafNode shouldn't be created with null/undefined value.");this.ba=b||C;ke(this.ba);this.Bb=null}h=tc.prototype;h.N=function(){return!0};h.A=function(){return this.ba};h.da=function(a){return new tc(this.C,a)};h.M=function(a){return".priority"===a?this.ba:C};h.oa=function(a){return a.e()?this:".priority"===O(a)?this.ba:C};h.Ha=function(){return!1};h.qf=function(){return null};
h.Q=function(a,b){return".priority"===a?this.da(b):b.e()&&".priority"!==a?this:C.Q(a,b).da(this.ba)};h.G=function(a,b){var c=O(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;J(".priority"!==c||1===uc(a),".priority must be the last token in a path");return this.Q(c,C.G(G(a),b))};h.e=function(){return!1};h.Db=function(){return 0};h.K=function(a){return a&&!this.A().e()?{".value":this.Ba(),".priority":this.A().K()}:this.Ba()};
h.hash=function(){if(null===this.Bb){var a="";this.ba.e()||(a+="priority:"+le(this.ba.K())+":");var b=typeof this.C,a=a+(b+":"),a="number"===b?a+Zc(this.C):a+this.C;this.Bb=Jc(a)}return this.Bb};h.Ba=function(){return this.C};h.Cc=function(a){if(a===C)return 1;if(a instanceof T)return-1;J(a.N(),"Unknown node type");var b=typeof a.C,c=typeof this.C,d=Na(me,b),e=Na(me,c);J(0<=d,"Unknown leaf type: "+b);J(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.C<a.C?-1:this.C===a.C?0:1:e-d};
var me=["object","boolean","number","string"];tc.prototype.mb=function(){return this};tc.prototype.Ic=function(){return!0};tc.prototype.Z=function(a){return a===this?!0:a.N()?this.C===a.C&&this.ba.Z(a.ba):!1};tc.prototype.toString=function(){return B(this.K(!0))};function T(a,b,c){this.m=a;(this.ba=b)&&ke(this.ba);a.e()&&J(!this.ba||this.ba.e(),"An empty node cannot have a priority");this.wb=c;this.Bb=null}h=T.prototype;h.N=function(){return!1};h.A=function(){return this.ba||C};h.da=function(a){return this.m.e()?this:new T(this.m,a,this.wb)};h.M=function(a){if(".priority"===a)return this.A();a=this.m.get(a);return null===a?C:a};h.oa=function(a){var b=O(a);return null===b?this:this.M(b).oa(G(a))};h.Ha=function(a){return null!==this.m.get(a)};
h.Q=function(a,b){J(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.da(b);var c=new E(a,b),d,e;b.e()?(d=this.m.remove(a),c=ie(this.wb,c,this.m)):(d=this.m.Na(a,b),c=ge(this.wb,c,this.m));e=d.e()?C:this.ba;return new T(d,e,c)};h.G=function(a,b){var c=O(a);if(null===c)return b;J(".priority"!==O(a)||1===uc(a),".priority must be the last token in a path");var d=this.M(c).G(G(a),b);return this.Q(c,d)};h.e=function(){return this.m.e()};h.Db=function(){return this.m.count()};
var ne=/^(0|[1-9]\d*)$/;h=T.prototype;h.K=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.U(M,function(f,g){b[f]=g.K(a);c++;e&&ne.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.A().e()&&(b[".priority"]=this.A().K());return b};h.hash=function(){if(null===this.Bb){var a="";this.A().e()||(a+="priority:"+le(this.A().K())+":");this.U(M,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Bb=""===a?"":Jc(a)}return this.Bb};
h.qf=function(a,b,c){return(c=oe(this,c))?(a=cc(c,new E(a,b)))?a.name:null:cc(this.m,a)};function wd(a,b){var c;c=(c=oe(a,b))?(c=c.Rc())&&c.name:a.m.Rc();return c?new E(c,a.m.get(c)):null}function xd(a,b){var c;c=(c=oe(a,b))?(c=c.ec())&&c.name:a.m.ec();return c?new E(c,a.m.get(c)):null}h.U=function(a,b){var c=oe(this,a);return c?c.ha(function(a){return b(a.name,a.S)}):this.m.ha(b)};h.Wb=function(a){return this.Xb(a.Sc(),a)};
h.Xb=function(a,b){var c=oe(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.m.Xb(a.name,Qb),d=ec(c);null!=d&&0>b.compare(d,a);)H(c),d=ec(c);return c};h.rf=function(a){return this.Zb(a.Pc(),a)};h.Zb=function(a,b){var c=oe(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.m.Zb(a.name,Qb),d=ec(c);null!=d&&0<b.compare(d,a);)H(c),d=ec(c);return c};h.Cc=function(a){return this.e()?a.e()?0:-1:a.N()||a.e()?1:a===Sd?-1:0};
h.mb=function(a){if(a===Vd||ta(this.wb.cc,a.toString()))return this;var b=this.wb,c=this.m;J(a!==Vd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(Qb),f=H(c);f;)e=e||a.Hc(f.S),d.push(f),f=H(c);d=e?he(d,ud(a)):Pd;e=a.toString();c=xa(b.cc);c[e]=a;a=xa(b.yd);a[e]=d;return new T(this.m,this.ba,new fe(a,c))};h.Ic=function(a){return a===Vd||ta(this.wb.cc,a.toString())};
h.Z=function(a){if(a===this)return!0;if(a.N())return!1;if(this.A().Z(a.A())&&this.m.count()===a.m.count()){var b=this.Wb(M);a=a.Wb(M);for(var c=H(b),d=H(a);c&&d;){if(c.name!==d.name||!c.S.Z(d.S))return!1;c=H(b);d=H(a)}return null===c&&null===d}return!1};function oe(a,b){return b===Vd?null:a.wb.get(b.toString())}h.toString=function(){return B(this.K(!0))};function L(a,b){if(null===a)return C;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);J(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new tc(a,L(c));if(a instanceof Array){var d=C,e=a;r(e,function(a,b){if(u(e,b)&&"."!==b.substring(0,1)){var c=L(a);if(c.N()||!c.e())d=
d.Q(b,c)}});return d.da(L(c))}var f=[],g=!1,k=a;hb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=L(k[a]);b.e()||(g=g||!b.A().e(),f.push(new E(a,b)))}});if(0==f.length)return C;var l=he(f,Rb,function(a){return a.name},Tb);if(g){var m=he(f,ud(M));return new T(l,L(c),new fe({".priority":m},{".priority":M}))}return new T(l,L(c),je)}var pe=Math.log(2);
function qe(a){this.count=parseInt(Math.log(a+1)/pe,10);this.hf=this.count-1;this.bg=a+1&parseInt(Array(this.count+1).join("1"),2)}function re(a){var b=!(a.bg&1<<a.hf);a.hf--;return b}
function he(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],v=c?c(m):m;return new fc(v,m.S,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),y=e(m+1,d),m=a[m],v=c?c(m):m;return new fc(v,m.S,!1,f,y)}a.sort(b);var f=function(b){function d(b,g){var k=v-b,y=v;v-=b;var y=e(k+1,y),k=a[k],I=c?c(k):k,y=new fc(I,k.S,g,null,y);f?f.left=y:m=y;f=y}for(var f=null,m=null,v=a.length,y=0;y<b.count;++y){var I=re(b),vd=Math.pow(2,b.count-(y+1));I?d(vd,!1):(d(vd,!1),d(vd,!0))}return m}(new qe(a.length));
return null!==f?new ac(d||b,f):new ac(d||b)}function le(a){return"number"===typeof a?"number:"+Zc(a):"string:"+a}function ke(a){if(a.N()){var b=a.K();J("string"===typeof b||"number"===typeof b||"object"===typeof b&&u(b,".sv"),"Priority must be a string or number.")}else J(a===Sd||a.e(),"priority of unexpected type.");J(a===Sd||a.A().e(),"Priority nodes can't have a priority of their own.")}var C=new T(new ac(Tb),null,je);function se(){T.call(this,new ac(Tb),C,je)}ma(se,T);h=se.prototype;
h.Cc=function(a){return a===this?0:1};h.Z=function(a){return a===this};h.A=function(){return this};h.M=function(){return C};h.e=function(){return!1};var Sd=new se,Qd=new E("[MIN_NAME]",C),Xd=new E("[MAX_NAME]",Sd);function Id(a,b){this.D=a;this.Ud=b}function Fd(a,b,c,d){return new Id(new sb(b,c,d),a.Ud)}function Jd(a){return a.D.$?a.D.j():null}Id.prototype.u=function(){return this.Ud};function tb(a){return a.Ud.$?a.Ud.j():null};function te(a,b){this.V=a;var c=a.n,d=new ld(c.g),c=de(c)?new ld(c.g):c.ia?new rd(c):new md(c);this.Gf=new zd(c);var e=b.u(),f=b.D,g=d.ta(C,e.j(),null),k=c.ta(C,f.j(),null);this.Ka=new Id(new sb(k,f.$,c.Ga()),new sb(g,e.$,d.Ga()));this.Za=[];this.ig=new dd(a)}function ue(a){return a.V}h=te.prototype;h.u=function(){return this.Ka.u().j()};h.hb=function(a){var b=tb(this.Ka);return b&&(de(this.V.n)||!a.e()&&!b.M(O(a)).e())?b.oa(a):null};h.e=function(){return 0===this.Za.length};h.Ob=function(a){this.Za.push(a)};
h.kb=function(a,b){var c=[];if(b){J(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Oa(this.Za,function(a){(a=a.ff(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var g=this.Za[f];if(!g.matches(a))e.push(g);else if(a.sf()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
h.bb=function(a,b,c){a.type===Cd&&null!==a.source.Ib&&(J(tb(this.Ka),"We should always have a full cache before handling merges"),J(Jd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.Gf.bb(d,a,b,c);b=this.Gf;c=a.he;J(c.D.j().Ic(b.I.g),"Event snap not indexed");J(c.u().j().Ic(b.I.g),"Server snap not indexed");J(Hb(a.he.u())||!Hb(d.u()),"Once a server snap is complete, it should never go back");this.Ka=a.he;return ve(this,a.cg,a.he.D.j(),null)};
function we(a,b){var c=a.Ka.D,d=[];c.j().N()||c.j().U(M,function(a,b){d.push(new D("child_added",b,a))});c.$&&d.push(Db(c.j()));return ve(a,d,c.j(),b)}function ve(a,b,c,d){return ed(a.ig,b,c,d?[d]:a.Za)};function xe(a,b,c){this.type=Cd;this.source=a;this.path=b;this.children=c}xe.prototype.Wc=function(a){if(this.path.e())return a=this.children.subtree(new K(a)),a.e()?null:a.value?new Ub(this.source,F,a.value):new xe(this.source,F,a);J(O(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new xe(this.source,G(this.path),this.children)};xe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var Vb=0,Cd=1,Xb=2,$b=3;function ye(a,b,c,d){this.ve=a;this.of=b;this.Ib=c;this.af=d;J(!d||b,"Tagged queries must be from server.")}var Yb=new ye(!0,!1,null,!1),ze=new ye(!1,!0,null,!1);ye.prototype.toString=function(){return this.ve?"user":this.af?"server(queryID="+this.Ib+")":"server"};function Ae(a,b){this.f=Oc("p:rest:");this.H=a;this.Gb=b;this.Fa=null;this.aa={}}function Be(a,b){if(n(b))return"tag$"+b;var c=a.n;J(de(c)&&c.g==M,"should have a tag if it's not a default query.");return a.path.toString()}h=Ae.prototype;
h.xf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.wa());var f=Be(a,c),g={};this.aa[f]=g;a=ee(a.n);var k=this;Ce(this,e+".json",a,function(a,b){var v=b;404===a&&(a=v=null);null===a&&k.Gb(e,v,!1,c);w(k.aa,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.Of=function(a,b){var c=Be(a,b);delete this.aa[c]};h.P=function(a,b){this.Fa=a;var c=ad(a),d=c.data,c=c.Ac&&c.Ac.exp;b&&b("ok",{auth:d,expires:c})};h.ee=function(a){this.Fa=null;a("ok",null)};
h.Le=function(){};h.Bf=function(){};h.Gd=function(){};h.put=function(){};h.yf=function(){};h.Te=function(){};
function Ce(a,b,c,d){c=c||{};c.format="export";a.Fa&&(c.auth=a.Fa);var e=(a.H.lb?"https://":"http://")+a.H.host+b+"?"+jb(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=mb(f.responseText)}catch(c){Q("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
f.status&&Q("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function De(a,b){this.value=a;this.children=b||Ee}var Ee=new ac(function(a,b){return a===b?0:a<b?-1:1});function Fe(a){var b=Nd;r(a,function(a,d){b=b.set(new K(d),a)});return b}h=De.prototype;h.e=function(){return null===this.value&&this.children.e()};function Ge(a,b,c){if(null!=a.value&&c(a.value))return{path:F,value:a.value};if(b.e())return null;var d=O(b);a=a.children.get(d);return null!==a?(b=Ge(a,G(b),c),null!=b?{path:(new K(d)).w(b.path),value:b.value}:null):null}
function He(a,b){return Ge(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(O(a));return null!==b?b.subtree(G(a)):Nd};h.set=function(a,b){if(a.e())return new De(b,this.children);var c=O(a),d=(this.children.get(c)||Nd).set(G(a),b),c=this.children.Na(c,d);return new De(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?Nd:new De(null,this.children);var b=O(a),c=this.children.get(b);return c?(a=c.remove(G(a)),b=a.e()?this.children.remove(b):this.children.Na(b,a),null===this.value&&b.e()?Nd:new De(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(O(a));return b?b.get(G(a)):null};
function Md(a,b,c){if(b.e())return c;var d=O(b);b=Md(a.children.get(d)||Nd,G(b),c);d=b.e()?a.children.remove(d):a.children.Na(d,b);return new De(a.value,d)}function Ie(a,b){return Je(a,F,b)}function Je(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Je(f,b.w(a),c)});return c(b,a.value,d)}function Ke(a,b,c){return Le(a,b,F,c)}function Le(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=O(b);return(a=a.children.get(e))?Le(a,G(b),c.w(e),d):null}
function Me(a,b,c){var d=F;if(!b.e()){var e=!0;a.value&&(e=c(d,a.value));!0===e&&(e=O(b),(a=a.children.get(e))&&Ne(a,G(b),d.w(e),c))}}function Ne(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=O(b);return(a=a.children.get(e))?Ne(a,G(b),c.w(e),d):Nd}function Kd(a,b){Oe(a,F,b)}function Oe(a,b,c){a.children.ha(function(a,e){Oe(e,b.w(a),c)});a.value&&c(b,a.value)}function Pe(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var Nd=new De(null);
De.prototype.toString=function(){var a={};Kd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Qe(a){this.W=a}var Re=new Qe(new De(null));function Se(a,b,c){if(b.e())return new Qe(new De(c));var d=He(a.W,b);if(null!=d){var e=d.path,d=d.value;b=N(e,b);d=d.G(b,c);return new Qe(a.W.set(e,d))}a=Md(a.W,b,new De(c));return new Qe(a)}function Te(a,b,c){var d=a;hb(c,function(a,c){d=Se(d,b.w(a),c)});return d}Qe.prototype.Od=function(a){if(a.e())return Re;a=Md(this.W,a,Nd);return new Qe(a)};function Ue(a,b){var c=He(a.W,b);return null!=c?a.W.get(c.path).oa(N(c.path,b)):null}
function Ve(a){var b=[],c=a.W.value;null!=c?c.N()||c.U(M,function(a,c){b.push(new E(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new E(a,c.value))});return b}function We(a,b){if(b.e())return a;var c=Ue(a,b);return null!=c?new Qe(new De(c)):new Qe(a.W.subtree(b))}Qe.prototype.e=function(){return this.W.e()};Qe.prototype.apply=function(a){return Xe(F,this.W,a)};
function Xe(a,b,c){if(null!=b.value)return c.G(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(J(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Xe(a.w(b),f,c)});c.oa(a).e()||null===d||(c=c.G(a.w(".priority"),d));return c};function Ye(){this.T=Re;this.za=[];this.Lc=-1}h=Ye.prototype;
h.Od=function(a){var b=Ua(this.za,function(b){return b.ie===a});J(0<=b,"removeWrite called with nonexistent writeId.");var c=this.za[b];this.za.splice(b,1);for(var d=c.visible,e=!1,f=this.za.length-1;d&&0<=f;){var g=this.za[f];g.visible&&(f>=b&&Ze(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.T=$e(this.za,af,F),this.Lc=0<this.za.length?this.za[this.za.length-1].ie:-1;else if(c.Ia)this.T=this.T.Od(c.path);else{var k=this;r(c.children,function(a,b){k.T=k.T.Od(c.path.w(b))})}return c.path}return null};
h.ua=function(a,b,c,d){if(c||d){var e=We(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Ue(e,F)?(e=$e(this.za,function(b){return(b.visible||d)&&(!c||!(0<=Na(c,b.ie)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||C,e.apply(b)):null}e=Ue(this.T,a);if(null!=e)return e;e=We(this.T,a);return e.e()?b:null!=b||null!=Ue(e,F)?(b=b||C,e.apply(b)):null};
h.xc=function(a,b){var c=C,d=Ue(this.T,a);if(d)d.N()||d.U(M,function(a,b){c=c.Q(a,b)});else if(b){var e=We(this.T,a);b.U(M,function(a,b){var d=We(e,new K(a)).apply(b);c=c.Q(a,d)});Oa(Ve(e),function(a){c=c.Q(a.name,a.S)})}else e=We(this.T,a),Oa(Ve(e),function(a){c=c.Q(a.name,a.S)});return c};h.hd=function(a,b,c,d){J(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.w(b);if(null!=Ue(this.T,a))return null;a=We(this.T,a);return a.e()?d.oa(b):a.apply(d.oa(b))};
h.Xa=function(a,b,c){a=a.w(b);var d=Ue(this.T,a);return null!=d?d:rb(c,b)?We(this.T,a).apply(c.j().M(b)):null};h.sc=function(a){return Ue(this.T,a)};h.me=function(a,b,c,d,e,f){var g;a=We(this.T,a);g=Ue(a,F);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.mb(f);if(g.e()||g.N())return[];b=[];a=ud(f);e=e?g.Zb(c,f):g.Xb(c,f);for(f=H(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=H(e);return b};
function Ze(a,b){return a.Ia?a.path.contains(b):!!ua(a.children,function(c,d){return a.path.w(d).contains(b)})}function af(a){return a.visible}
function $e(a,b,c){for(var d=Re,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ia)c.contains(g)?(g=N(c,g),d=Se(d,g,f.Ia)):g.contains(c)&&(g=N(g,c),d=Se(d,F,f.Ia.oa(g)));else if(f.children)if(c.contains(g))g=N(c,g),d=Te(d,g,f.children);else{if(g.contains(c))if(g=N(g,c),g.e())d=Te(d,F,f.children);else if(f=w(f.children,O(g)))f=f.oa(G(g)),d=Se(d,F,f)}else throw Hc("WriteRecord should have .snap or .children");}}return d}function bf(a,b){this.Mb=a;this.W=b}h=bf.prototype;
h.ua=function(a,b,c){return this.W.ua(this.Mb,a,b,c)};h.xc=function(a){return this.W.xc(this.Mb,a)};h.hd=function(a,b,c){return this.W.hd(this.Mb,a,b,c)};h.sc=function(a){return this.W.sc(this.Mb.w(a))};h.me=function(a,b,c,d,e){return this.W.me(this.Mb,a,b,c,d,e)};h.Xa=function(a,b){return this.W.Xa(this.Mb,a,b)};h.w=function(a){return new bf(this.Mb.w(a),this.W)};function cf(){this.ya={}}h=cf.prototype;h.e=function(){return wa(this.ya)};h.bb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=w(this.ya,d),J(null!=d,"SyncTree gave us an op for an invalid query."),d.bb(a,b,c);var e=[];r(this.ya,function(d){e=e.concat(d.bb(a,b,c))});return e};h.Ob=function(a,b,c,d,e){var f=a.wa(),g=w(this.ya,f);if(!g){var g=c.ua(e?d:null),k=!1;g?k=!0:(g=d instanceof T?c.xc(d):C,k=!1);g=new te(a,new Id(new sb(g,k,!1),new sb(d,e,!1)));this.ya[f]=g}g.Ob(b);return we(g,b)};
h.kb=function(a,b,c){var d=a.wa(),e=[],f=[],g=null!=df(this);if("default"===d){var k=this;r(this.ya,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.ya[d],de(a.V.n)||e.push(a.V))})}else{var l=w(this.ya,d);l&&(f=f.concat(l.kb(b,c)),l.e()&&(delete this.ya[d],de(l.V.n)||e.push(l.V)))}g&&null==df(this)&&e.push(new U(a.k,a.path));return{Hg:e,jg:f}};function ef(a){return Pa(ra(a.ya),function(a){return!de(a.V.n)})}h.hb=function(a){var b=null;r(this.ya,function(c){b=b||c.hb(a)});return b};
function ff(a,b){if(de(b.n))return df(a);var c=b.wa();return w(a.ya,c)}function df(a){return va(a.ya,function(a){return de(a.V.n)})||null};function gf(a){this.sa=Nd;this.Hb=new Ye;this.$e={};this.kc={};this.Mc=a}function hf(a,b,c,d,e){var f=a.Hb,g=e;J(d>f.Lc,"Stacking an older write on top of newer ones");n(g)||(g=!0);f.za.push({path:b,Ia:c,ie:d,visible:g});g&&(f.T=Se(f.T,b,c));f.Lc=d;return e?jf(a,new Ub(Yb,b,c)):[]}function kf(a,b,c,d){var e=a.Hb;J(d>e.Lc,"Stacking an older merge on top of newer ones");e.za.push({path:b,children:c,ie:d,visible:!0});e.T=Te(e.T,b,c);e.Lc=d;c=Fe(c);return jf(a,new xe(Yb,b,c))}
function lf(a,b,c){c=c||!1;b=a.Hb.Od(b);return null==b?[]:jf(a,new Wb(b,c))}function mf(a,b,c){c=Fe(c);return jf(a,new xe(ze,b,c))}function nf(a,b,c,d){d=of(a,d);if(null!=d){var e=pf(d);d=e.path;e=e.Ib;b=N(d,b);c=new Ub(new ye(!1,!0,e,!0),b,c);return qf(a,d,c)}return[]}function rf(a,b,c,d){if(d=of(a,d)){var e=pf(d);d=e.path;e=e.Ib;b=N(d,b);c=Fe(c);c=new xe(new ye(!1,!0,e,!0),b,c);return qf(a,d,c)}return[]}
gf.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Me(this.sa,c,function(a,b){var f=N(a,c);d=b.hb(f);e=e||null!=df(b);return!d});var f=this.sa.get(c);f?(e=e||null!=df(f),d=d||f.hb(F)):(f=new cf,this.sa=this.sa.set(c,f));var g;null!=d?g=!0:(g=!1,d=C,Pe(this.sa.subtree(c),function(a,b){var c=b.hb(F);c&&(d=d.Q(a,c))}));var k=null!=ff(f,a);if(!k&&!de(a.n)){var l=sf(a);J(!(l in this.kc),"View does not exist, but we have a tag");var m=tf++;this.kc[l]=m;this.$e["_"+m]=l}g=f.Ob(a,b,new bf(c,this.Hb),
d,g);k||e||(f=ff(f,a),g=g.concat(uf(this,a,f)));return g};
gf.prototype.kb=function(a,b,c){var d=a.path,e=this.sa.get(d),f=[];if(e&&("default"===a.wa()||null!=ff(e,a))){f=e.kb(a,b,c);e.e()&&(this.sa=this.sa.remove(d));e=f.Hg;f=f.jg;b=-1!==Ua(e,function(a){return de(a.n)});var g=Ke(this.sa,d,function(a,b){return null!=df(b)});if(b&&!g&&(d=this.sa.subtree(d),!d.e()))for(var d=vf(d),k=0;k<d.length;++k){var l=d[k],m=l.V,l=wf(this,l);this.Mc.Xe(m,xf(this,m),l.ud,l.J)}if(!g&&0<e.length&&!c)if(b)this.Mc.Zd(a,null);else{var v=this;Oa(e,function(a){a.wa();var b=v.kc[sf(a)];
v.Mc.Zd(a,b)})}yf(this,e)}return f};gf.prototype.ua=function(a,b){var c=this.Hb,d=Ke(this.sa,a,function(b,c){var d=N(b,a);if(d=c.hb(d))return d});return c.ua(a,d,b,!0)};function vf(a){return Ie(a,function(a,c,d){if(c&&null!=df(c))return[df(c)];var e=[];c&&(e=ef(c));r(d,function(a){e=e.concat(a)});return e})}function yf(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!de(d.n)){var d=sf(d),e=a.kc[d];delete a.kc[d];delete a.$e["_"+e]}}}
function uf(a,b,c){var d=b.path,e=xf(a,b);c=wf(a,c);b=a.Mc.Xe(b,e,c.ud,c.J);d=a.sa.subtree(d);if(e)J(null==df(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Ie(d,function(a,b,c){if(!a.e()&&b&&null!=df(b))return[ue(df(b))];var d=[];b&&(d=d.concat(Qa(ef(b),function(a){return a.V})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Mc.Zd(c,xf(a,c));return b}
function wf(a,b){var c=b.V,d=xf(a,c);return{ud:function(){return(b.u()||C).hash()},J:function(b){if("ok"===b){if(d){var f=c.path;if(b=of(a,d)){var g=pf(b);b=g.path;g=g.Ib;f=N(b,f);f=new Zb(new ye(!1,!0,g,!0),f);b=qf(a,b,f)}else b=[]}else b=jf(a,new Zb(ze,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function sf(a){return a.path.toString()+"$"+a.wa()}function pf(a){var b=a.indexOf("$");J(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new K(a.substr(0,b))}}function of(a,b){var c=a.$e,d="_"+b;return d in c?c[d]:void 0}function xf(a,b){var c=sf(b);return w(a.kc,c)}var tf=1;
function qf(a,b,c){var d=a.sa.get(b);J(d,"Missing sync point for query tag that we're tracking");return d.bb(c,new bf(b,a.Hb),null)}function jf(a,b){return zf(a,b,a.sa,null,new bf(F,a.Hb))}function zf(a,b,c,d,e){if(b.path.e())return Af(a,b,c,d,e);var f=c.get(F);null==d&&null!=f&&(d=f.hb(F));var g=[],k=O(b.path),l=b.Wc(k);if((c=c.children.get(k))&&l)var m=d?d.M(k):null,k=e.w(k),g=g.concat(zf(a,l,c,m,k));f&&(g=g.concat(f.bb(b,e,d)));return g}
function Af(a,b,c,d,e){var f=c.get(F);null==d&&null!=f&&(d=f.hb(F));var g=[];c.children.ha(function(c,f){var m=d?d.M(c):null,v=e.w(c),y=b.Wc(c);y&&(g=g.concat(Af(a,y,f,m,v)))});f&&(g=g.concat(f.bb(b,e,d)));return g};function Bf(){this.children={};this.kd=0;this.value=null}function Cf(a,b,c){this.Dd=a?a:"";this.Yc=b?b:null;this.B=c?c:new Bf}function Df(a,b){for(var c=b instanceof K?b:new K(b),d=a,e;null!==(e=O(c));)d=new Cf(e,d,w(d.B.children,e)||new Bf),c=G(c);return d}h=Cf.prototype;h.Ba=function(){return this.B.value};function Ef(a,b){J("undefined"!==typeof b,"Cannot set value to undefined");a.B.value=b;Ff(a)}h.clear=function(){this.B.value=null;this.B.children={};this.B.kd=0;Ff(this)};
h.td=function(){return 0<this.B.kd};h.e=function(){return null===this.Ba()&&!this.td()};h.U=function(a){var b=this;r(this.B.children,function(c,d){a(new Cf(d,b,c))})};function Gf(a,b,c,d){c&&!d&&b(a);a.U(function(a){Gf(a,b,!0,d)});c&&d&&b(a)}function Hf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new K(null===this.Yc?this.Dd:this.Yc.path()+"/"+this.Dd)};h.name=function(){return this.Dd};h.parent=function(){return this.Yc};
function Ff(a){if(null!==a.Yc){var b=a.Yc,c=a.Dd,d=a.e(),e=u(b.B.children,c);d&&e?(delete b.B.children[c],b.B.kd--,Ff(b)):d||e||(b.B.children[c]=a.B,b.B.kd++,Ff(b))}};function If(a){J(ea(a)&&0<a.length,"Requires a non-empty array");this.Uf=a;this.Nc={}}If.prototype.de=function(a,b){for(var c=this.Nc[a]||[],d=0;d<c.length;d++)c[d].yc.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};If.prototype.Eb=function(a,b,c){Jf(this,a);this.Nc[a]=this.Nc[a]||[];this.Nc[a].push({yc:b,Ma:c});(a=this.ze(a))&&b.apply(c,a)};If.prototype.gc=function(a,b,c){Jf(this,a);a=this.Nc[a]||[];for(var d=0;d<a.length;d++)if(a[d].yc===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};
function Jf(a,b){J(Ta(a.Uf,function(a){return a===b}),"Unknown event: "+b)};var Kf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);J(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);J(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Lf(){If.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.de("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.de("online",!1))},!1)}}ma(Lf,If);Lf.prototype.ze=function(a){J("online"===a,"Unknown event type: "+a);return[this.ic]};ca(Lf);function Mf(){If.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.uc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.uc&&(c.uc=b,c.de("visible",b))},!1)}}ma(Mf,If);Mf.prototype.ze=function(a){J("visible"===a,"Unknown event type: "+a);return[this.uc]};ca(Mf);var Nf=/[\[\].#$\/\u0000-\u001F\u007F]/,Of=/[\[\].#$\u0000-\u001F\u007F]/;function Pf(a){return p(a)&&0!==a.length&&!Nf.test(a)}function Qf(a){return null===a||p(a)||ga(a)&&!Sc(a)||ia(a)&&u(a,".sv")}function Rf(a,b,c,d){d&&!n(b)||Sf(z(a,1,d),b,c)}
function Sf(a,b,c){c instanceof K&&(c=new wc(c,a));if(!n(b))throw Error(a+"contains undefined "+zc(c));if(ha(b))throw Error(a+"contains a function "+zc(c)+" with contents: "+b.toString());if(Sc(b))throw Error(a+"contains "+b.toString()+" "+zc(c));if(p(b)&&b.length>10485760/3&&10485760<xc(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+zc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;hb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Pf(b)))throw Error(a+" contains an invalid key ("+b+") "+zc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Sf(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+zc(c)+" in addition to actual children.");}}
function Tf(a,b,c){if(!ia(b)||ea(b))throw Error(z(a,1,!1)+" must be an Object containing the children to replace.");if(u(b,".value"))throw Error(z(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Rf(a,b,c,!1)}
function Uf(a,b,c){if(Sc(c))throw Error(z(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Qf(c))throw Error(z(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Vf(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(z(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Wf(a,b,c,d){if((!d||n(c))&&!Pf(c))throw Error(z(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Xf(a,b){if(!p(b)||0===b.length||Of.test(b))throw Error(z(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Yf(a,b){if(".info"===O(b))throw Error(a+" failed: Can't modify data under /.info/");}function Zf(a,b){if(!p(b))throw Error(z(a,1,!1)+"must be a valid credential (a string).");}function $f(a,b,c){if(!p(c))throw Error(z(a,b,!1)+"must be a valid string.");}
function ag(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(z(a,b,d)+"must be a valid object.");}function bg(a,b,c){if(!ia(b)||null===b||!u(b,c))throw Error(z(a,1,!1)+'must contain the key "'+c+'"');if(!p(w(b,c)))throw Error(z(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function cg(){this.set={}}h=cg.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return u(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return wa(this.set)};h.count=function(){return pa(this.set)};function dg(a,b){r(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qc(){this.m=this.C=null}qc.prototype.find=function(a){if(null!=this.C)return this.C.oa(a);if(a.e()||null==this.m)return null;var b=O(a);a=G(a);return this.m.contains(b)?this.m.get(b).find(a):null};qc.prototype.mc=function(a,b){if(a.e())this.C=b,this.m=null;else if(null!==this.C)this.C=this.C.G(a,b);else{null==this.m&&(this.m=new cg);var c=O(a);this.m.contains(c)||this.m.add(c,new qc);c=this.m.get(c);a=G(a);c.mc(a,b)}};
function eg(a,b){if(b.e())return a.C=null,a.m=null,!0;if(null!==a.C){if(a.C.N())return!1;var c=a.C;a.C=null;c.U(M,function(b,c){a.mc(new K(b),c)});return eg(a,b)}return null!==a.m?(c=O(b),b=G(b),a.m.contains(c)&&eg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function rc(a,b,c){null!==a.C?c(b,a.C):a.U(function(a,e){var f=new K(b.toString()+"/"+a);rc(e,f,c)})}qc.prototype.U=function(a){null!==this.m&&dg(this.m,function(b,c){a(b,c)})};var fg="auth.firebase.com";function gg(a,b,c){this.ld=a||{};this.ce=b||{};this.ab=c||{};this.ld.remember||(this.ld.remember="default")}var hg=["remember","redirectTo"];function ig(a){var b={},c={};hb(a||{},function(a,e){0<=Na(hg,a)?b[a]=e:c[a]=e});return new gg(b,{},c)};function jg(a,b){this.Pe=["session",a.Ld,a.Cb].join(":");this.$d=b}jg.prototype.set=function(a,b){if(!b)if(this.$d.length)b=this.$d[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Pe,a)};jg.prototype.get=function(){var a=Qa(this.$d,q(this.ng,this)),a=Pa(a,function(a){return null!==a});Xa(a,function(a,c){return bd(c.token)-bd(a.token)});return 0<a.length?a.shift():null};jg.prototype.ng=function(a){try{var b=a.get(this.Pe);if(b&&b.token)return b}catch(c){}return null};
jg.prototype.clear=function(){var a=this;Oa(this.$d,function(b){b.remove(a.Pe)})};function kg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function lg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
function mg(){if("undefined"===typeof navigator)return!1;var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function ng(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function og(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function pg(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function qg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function rg(a){var b="";try{a=a.replace("#","");var c=kb(a);c&&u(c,"__firebase_request_key")&&(b=w(c,"__firebase_request_key"))}catch(d){}return b}function sg(){var a=Rc(fg);return a.scheme+"://"+a.host+"/v2"}function tg(a){return sg()+"/"+a+"/auth/channel"};function ug(a){var b=this;this.zc=a;this.ae="*";mg()?this.Qc=this.wd=ng():(this.Qc=window.opener,this.wd=window);if(!b.Qc)throw"Unable to find relay frame";og(this.wd,"message",q(this.hc,this));og(this.wd,"message",q(this.Af,this));try{vg(this,{a:"ready"})}catch(c){og(this.Qc,"load",function(){vg(b,{a:"ready"})})}og(window,"unload",q(this.yg,this))}function vg(a,b){b=B(b);mg()?a.Qc.doPost(b,a.ae):a.Qc.postMessage(b,a.ae)}
ug.prototype.hc=function(a){var b=this,c;try{c=mb(a.data)}catch(d){}c&&"request"===c.a&&(pg(window,"message",this.hc),this.ae=a.origin,this.zc&&setTimeout(function(){b.zc(b.ae,c.d,function(a,c){b.ag=!c;b.zc=void 0;vg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};ug.prototype.yg=function(){try{pg(this.wd,"message",this.Af)}catch(a){}this.zc&&(vg(this,{a:"error",d:"unknown closed window"}),this.zc=void 0);try{window.close()}catch(b){}};ug.prototype.Af=function(a){if(this.ag&&"die"===a.data)try{window.close()}catch(b){}};function wg(a){this.oc=Ga()+Ga()+Ga();this.Df=a}wg.prototype.open=function(a,b){P.set("redirect_request_id",this.oc);P.set("redirect_request_id",this.oc);b.requestId=this.oc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+jb(b);window.location=a};wg.isAvailable=function(){return!lg()&&!kg()};wg.prototype.Bc=function(){return"redirect"};var xg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function yg(a){var b=Error(w(xg,a),a);b.code=a;return b};function zg(a){if(!a.window_features||"undefined"!==typeof navigator&&(-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android")))a.window_features=void 0;a.window_name||(a.window_name="_blank");this.options=a}
zg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);v&&(v=clearInterval(v));pg(window,"message",e);pg(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=mb(a.data);"ready"===b.a?k.postMessage(y,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=mg(),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var l=qg(a);if(l!==qg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+jb(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var v=setInterval(function(){m&&m.closed&&
(d(!1),c&&(c(yg("USER_CANCELLED")),c=null))},500),y=B({a:"request",d:b});og(window,"unload",d);og(window,"message",e)}};
zg.isAvailable=function(){return"postMessage"in window&&!lg()&&!(kg()||"undefined"!==typeof navigator&&(navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href))||"undefined"!==typeof navigator&&"undefined"!==typeof window&&(navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone))&&!("undefined"!==
typeof navigator&&navigator.userAgent.match(/PhantomJS/))};zg.prototype.Bc=function(){return"popup"};function Ag(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
Ag.prototype.open=function(a,b,c){function d(){c&&(c(yg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;og(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=mb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(yg("SERVER_ERROR")):c(yg("NETWORK_ERROR"));c=null;pg(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+jb(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=B(b));"application/x-www-form-urlencoded"===k&&(g=jb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};za(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};Ag.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!("undefined"!==typeof navigator&&(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/)))||mg())};Ag.prototype.Bc=function(){return"json"};function Bg(a){this.oc=Ga()+Ga()+Ga();this.Df=a}
Bg.prototype.open=function(a,b,c){function d(){c&&(c(yg("USER_CANCELLED")),c=null)}var e=this,f=Rc(fg),g;b.requestId=this.oc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=jb(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(v){}b=!1}b&&(a=rg(a.url),g.removeEventListener("exit",
d),g.close(),a=new gg(null,null,{requestId:e.oc,requestKey:a}),e.Df.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(yg("TRANSPORT_UNAVAILABLE"))};Bg.isAvailable=function(){return kg()};Bg.prototype.Bc=function(){return"redirect"};function Cg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Cg.prototype.open=function(a,b,c){function d(){c&&(c(yg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);pg(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+jb(b);
og(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Dg(f,a,c)};
function Dg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(yg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(yg("NETWORK_ERROR"))}},0)}Cg.isAvailable=function(){return!0};Cg.prototype.Bc=function(){return"json"};function Eg(a,b,c,d){If.call(this,["auth_status"]);this.H=a;this.df=b;this.Sg=c;this.Ke=d;this.rc=new jg(a,[Dc,P]);this.nb=null;this.Re=!1;Fg(this)}ma(Eg,If);h=Eg.prototype;h.we=function(){return this.nb||null};function Fg(a){P.get("redirect_request_id")&&Gg(a);var b=a.rc.get();b&&b.token?(Hg(a,b),a.df(b.token,function(c,d){Ig(a,c,d,!1,b.token,b)},function(b,d){Jg(a,"resumeSession()",b,d)})):Hg(a,null)}
function Kg(a,b,c,d,e,f){"firebaseio-demo.com"===a.H.domain&&Q("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.df(b,function(f,k){Ig(a,f,k,!0,b,c,d||{},e)},function(b,c){Jg(a,"auth()",b,c,f)})}function Lg(a,b){a.rc.clear();Hg(a,null);a.Sg(function(a,d){if("ok"===a)R(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;R(b,f)}})}
function Ig(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=cd(e)?e:"",c=null,b&&u(b,"uid")?c=w(b,"uid"):u(f,"uid")&&(c=w(f,"uid")),f.uid=c,c="custom",b&&u(b,"provider")?c=w(b,"provider"):u(f,"provider")&&(c=w(f,"provider")),f.provider=c,a.rc.clear(),cd(e)&&(g=g||{},c=Dc,"sessionOnly"===g.remember&&(c=P),"none"!==g.remember&&a.rc.set(f,c)),Hg(a,f)),R(k,null,f)):(a.rc.clear(),Hg(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,R(k,f))}
function Jg(a,b,c,d,e){Q(b+" was canceled: "+d);a.rc.clear();Hg(a,null);a=Error(d);a.code=c.toUpperCase();R(e,a)}function Mg(a,b,c,d,e){Ng(a);c=new gg(d||{},{},c||{});Og(a,[Ag,Cg],"/auth/"+b,c,e)}
function Pg(a,b,c,d){Ng(a);var e=[zg,Bg];c=ig(c);"anonymous"===b||"password"===b?setTimeout(function(){R(d,yg("TRANSPORT_UNAVAILABLE"))},0):(c.ce.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.ce.relay_url=tg(a.H.Cb),c.ce.requestWithCredential=q(a.pc,a),Og(a,e,"/auth/"+b,c,d))}
function Gg(a){var b=P.get("redirect_request_id");if(b){var c=P.get("redirect_client_options");P.remove("redirect_request_id");P.remove("redirect_client_options");var d=[Ag,Cg],b={requestId:b,requestKey:rg(document.location.hash)},c=new gg(c,{},b);a.Re=!0;try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Og(a,d,"/auth/session",c,function(){this.Re=!1}.bind(a))}}
h.re=function(a,b){Ng(this);var c=ig(a);c.ab._method="POST";this.pc("/users",c,function(a,c){a?R(b,a):R(b,a,c)})};h.Se=function(a,b){var c=this;Ng(this);var d="/users/"+encodeURIComponent(a.email),e=ig(a);e.ab._method="DELETE";this.pc(d,e,function(a,d){!a&&d&&d.uid&&c.nb&&c.nb.uid&&c.nb.uid===d.uid&&Lg(c);R(b,a)})};h.oe=function(a,b){Ng(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a);d.ab._method="PUT";d.ab.password=a.newPassword;this.pc(c,d,function(a){R(b,a)})};
h.ne=function(a,b){Ng(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=ig(a);d.ab._method="PUT";d.ab.email=a.newEmail;d.ab.password=a.password;this.pc(c,d,function(a){R(b,a)})};h.Ue=function(a,b){Ng(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a);d.ab._method="POST";this.pc(c,d,function(a){R(b,a)})};h.pc=function(a,b,c){Qg(this,[Ag,Cg],a,b,c)};
function Og(a,b,c,d,e){Qg(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Kg(a,c.token,c,d.ld,function(a,b){a?R(e,a):R(e,null,b)}):R(e,b||yg("UNKNOWN_ERROR"))})}
function Qg(a,b,c,d,e){b=Pa(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){R(e,yg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.ce),d=ib(d.ab),d.v="js-2.2.4",d.transport=b.Bc(),d.suppress_status_codes=!0,a=sg()+"/"+a.H.Cb+c,b.open(a,d,function(a,b){if(a)R(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;R(e,c)}else R(e,null,b)}))}
function Hg(a,b){var c=null!==a.nb||null!==b;a.nb=b;c&&a.de("auth_status",b);a.Ke(null!==b)}h.ze=function(a){J("auth_status"===a,'initial event must be of type "auth_status"');return this.Re?null:[this.nb]};function Ng(a){var b=a.H;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===fg)throw Error("This custom Firebase server ('"+a.H.domain+"') does not support delegated login.");};function Rg(a){this.hc=a;this.Kd=[];this.Qb=0;this.pe=-1;this.Fb=null}function Sg(a,b,c){a.pe=b;a.Fb=c;a.pe<a.Qb&&(a.Fb(),a.Fb=null)}function Tg(a,b,c){for(a.Kd[b]=c;a.Kd[a.Qb];){var d=a.Kd[a.Qb];delete a.Kd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Cb(function(){f.hc(d[e])})}if(a.Qb===a.pe){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};function Ug(a,b,c){this.qe=a;this.f=Oc(a);this.ob=this.pb=0;this.Va=Ob(b);this.Vd=c;this.Gc=!1;this.gd=function(a){b.host!==b.Oa&&(a.ns=b.Cb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.lb?"https://":"http://")+b.Oa+"/.lp?"+c.join("&")}}var Vg,Wg;
Ug.prototype.open=function(a,b){this.gf=0;this.ka=b;this.zf=new Rg(a);this.zb=!1;var c=this;this.rb=setTimeout(function(){c.f("Timed out trying to connect.");c.ib();c.rb=null},Math.floor(3E4));Tc(function(){if(!c.zb){c.Ta=new Xg(function(a,b,d,k,l){Yg(c,arguments);if(c.Ta)if(c.rb&&(clearTimeout(c.rb),c.rb=null),c.Gc=!0,"start"==a)c.id=b,c.Ff=d;else if("close"===a)b?(c.Ta.Td=!1,Sg(c.zf,b,function(){c.ib()})):c.ib();else throw Error("Unrecognized command received: "+a);},function(a,b){Yg(c,arguments);
Tg(c.zf,a,b)},function(){c.ib()},c.gd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.fe&&(a.cb=c.Ta.fe);a.v="5";c.Vd&&(a.s=c.Vd);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.gd(a);c.f("Connecting via long-poll to "+a);Zg(c.Ta,a,function(){})}})};
Ug.prototype.start=function(){var a=this.Ta,b=this.Ff;a.rg=this.id;a.sg=b;for(a.ke=!0;$g(a););a=this.id;b=this.Ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.gd(c);this.fc.style.display="none";document.body.appendChild(this.fc)};Ug.isAvailable=function(){return!Wg&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Ug)&&(Vg||!0)};h=Ug.prototype;
h.Bd=function(){};h.cd=function(){this.zb=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.rb&&(clearTimeout(this.rb),this.rb=null)};h.ib=function(){this.zb||(this.f("Longpoll is closing itself"),this.cd(),this.ka&&(this.ka(this.Gc),this.ka=null))};h.close=function(){this.zb||(this.f("Longpoll is being closed."),this.cd())};
h.send=function(a){a=B(a);this.pb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Kc(a);a=fb(a,!0);a=Xc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.$c.push({Jg:this.gf,Rg:a.length,jf:a[b]});c.ke&&$g(c);this.gf++}};function Yg(a,b){var c=B(b).length;a.ob+=c;Lb(a.Va,"bytes_received",c)}
function Xg(a,b,c,d){this.gd=d;this.jb=c;this.Oe=new cg;this.$c=[];this.se=Math.floor(1E8*Math.random());this.Td=!0;this.fe=Gc();window["pLPCommand"+this.fe]=a;window["pRTLPCB"+this.fe]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||Bb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ca=a;a="";this.Ca.src&&"javascript:"===this.Ca.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ca.gb.open(),this.Ca.gb.write(a),this.Ca.gb.close()}catch(f){Bb("frame writing exception"),f.stack&&Bb(f.stack),Bb(f)}}
Xg.prototype.close=function(){this.ke=!1;if(this.Ca){this.Ca.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ca&&(document.body.removeChild(a.Ca),a.Ca=null)},Math.floor(0))}var b=this.jb;b&&(this.jb=null,b())};
function $g(a){if(a.ke&&a.Td&&a.Oe.count()<(0<a.$c.length?2:1)){a.se++;var b={};b.id=a.rg;b.pw=a.sg;b.ser=a.se;for(var b=a.gd(b),c="",d=0;0<a.$c.length;)if(1870>=a.$c[0].jf.length+30+c.length){var e=a.$c.shift(),c=c+"&seg"+d+"="+e.Jg+"&ts"+d+"="+e.Rg+"&d"+d+"="+e.jf;d++}else break;ah(a,b+c,a.se);return!0}return!1}function ah(a,b,c){function d(){a.Oe.remove(c);$g(a)}a.Oe.add(c,1);var e=setTimeout(d,Math.floor(25E3));Zg(a,b,function(){clearTimeout(e);d()})}
function Zg(a,b,c){setTimeout(function(){try{if(a.Td){var d=a.Ca.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){Bb("Long-poll script failed to load: "+b);a.Td=!1;a.close()};a.Ca.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var bh=null;"undefined"!==typeof MozWebSocket?bh=MozWebSocket:"undefined"!==typeof WebSocket&&(bh=WebSocket);function ch(a,b,c){this.qe=a;this.f=Oc(this.qe);this.frames=this.Jc=null;this.ob=this.pb=this.bf=0;this.Va=Ob(b);this.fb=(b.lb?"wss://":"ws://")+b.Oa+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.fb+="&r=f");b.host!==b.Oa&&(this.fb=this.fb+"&ns="+b.Cb);c&&(this.fb=this.fb+"&s="+c)}var dh;
ch.prototype.open=function(a,b){this.jb=b;this.wg=a;this.f("Websocket connecting to "+this.fb);this.Gc=!1;Dc.set("previous_websocket_failure",!0);try{this.va=new bh(this.fb)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.ib();return}var e=this;this.va.onopen=function(){e.f("Websocket connected.");e.Gc=!0};this.va.onclose=function(){e.f("Websocket connection was disconnected.");e.va=null;e.ib()};this.va.onmessage=function(a){if(null!==e.va)if(a=a.data,e.ob+=
a.length,Lb(e.Va,"bytes_received",a.length),eh(e),null!==e.frames)fh(e,a);else{a:{J(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.bf=b;e.frames=[];a=null;break a}}e.bf=1;e.frames=[]}null!==a&&fh(e,a)}};this.va.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.ib()}};ch.prototype.start=function(){};
ch.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==bh&&!dh};ch.responsesRequiredToBeHealthy=2;ch.healthyTimeout=3E4;h=ch.prototype;h.Bd=function(){Dc.remove("previous_websocket_failure")};function fh(a,b){a.frames.push(b);if(a.frames.length==a.bf){var c=a.frames.join("");a.frames=null;c=mb(c);a.wg(c)}}
h.send=function(a){eh(this);a=B(a);this.pb+=a.length;Lb(this.Va,"bytes_sent",a.length);a=Xc(a,16384);1<a.length&&this.va.send(String(a.length));for(var b=0;b<a.length;b++)this.va.send(a[b])};h.cd=function(){this.zb=!0;this.Jc&&(clearInterval(this.Jc),this.Jc=null);this.va&&(this.va.close(),this.va=null)};h.ib=function(){this.zb||(this.f("WebSocket is closing itself"),this.cd(),this.jb&&(this.jb(this.Gc),this.jb=null))};h.close=function(){this.zb||(this.f("WebSocket is being closed"),this.cd())};
function eh(a){clearInterval(a.Jc);a.Jc=setInterval(function(){a.va&&a.va.send("0");eh(a)},Math.floor(45E3))};function gh(a){hh(this,a)}var ih=[Ug,ch];function hh(a,b){var c=ch&&ch.isAvailable(),d=c&&!(Dc.uf||!0===Dc.get("previous_websocket_failure"));b.Tg&&(c||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.ed=[ch];else{var e=a.ed=[];Yc(ih,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function jh(a){if(0<a.ed.length)return a.ed[0];throw Error("No transports available");};function kh(a,b,c,d,e,f){this.id=a;this.f=Oc("c:"+this.id+":");this.hc=c;this.Vc=d;this.ka=e;this.Me=f;this.H=b;this.Jd=[];this.ef=0;this.Nf=new gh(b);this.Ua=0;this.f("Connection created");lh(this)}
function lh(a){var b=jh(a.Nf);a.L=new b("c:"+a.id+":"+a.ef++,a.H);a.Qe=b.responsesRequiredToBeHealthy||0;var c=mh(a,a.L),d=nh(a,a.L);a.fd=a.L;a.bd=a.L;a.F=null;a.Ab=!1;setTimeout(function(){a.L&&a.L.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.vd=setTimeout(function(){a.vd=null;a.Ab||(a.L&&102400<a.L.ob?(a.f("Connection exceeded healthy timeout but has received "+a.L.ob+" bytes.  Marking connection healthy."),a.Ab=!0,a.L.Bd()):a.L&&10240<a.L.pb?a.f("Connection exceeded healthy timeout but has sent "+
a.L.pb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function nh(a,b){return function(c){b===a.L?(a.L=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.H.Oa.substr(0,2)&&(Dc.remove("host:"+a.H.host),a.H.Oa=a.H.host)),a.close()):b===a.F?(a.f("Secondary connection lost."),c=a.F,a.F=null,a.fd!==c&&a.bd!==c||a.close()):a.f("closing an old connection")}}
function mh(a,b){return function(c){if(2!=a.Ua)if(b===a.bd){var d=Vc("t",c);c=Vc("d",c);if("c"==d){if(d=Vc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Vd=c.s;Fc(a.H,f);0==a.Ua&&(a.L.start(),oh(a,a.L,d),"5"!==e&&Q("Protocol version mismatch detected"),c=a.Nf,(c=1<c.ed.length?c.ed[1]:null)&&ph(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.bd=a.F;for(c=0;c<a.Jd.length;++c)a.Fd(a.Jd[c]);a.Jd=[];qh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Me&&(a.Me(c),a.Me=null),a.ka=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Fc(a.H,c),1===a.Ua?a.close():(rh(a),lh(a))):"e"===d?Pc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),sh(a),th(a)):Pc("Unknown control packet command: "+d)}else"d"==d&&a.Fd(c)}else if(b===a.F)if(d=Vc("t",c),c=Vc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?uh(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.F.close(),a.fd!==a.F&&a.bd!==a.F||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.Lf--,uh(a)));else if("d"==d)a.Jd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}kh.prototype.Da=function(a){vh(this,{t:"d",d:a})};function qh(a){a.fd===a.F&&a.bd===a.F&&(a.f("cleaning up and promoting a connection: "+a.F.qe),a.L=a.F,a.F=null)}
function uh(a){0>=a.Lf?(a.f("Secondary connection is healthy."),a.Ab=!0,a.F.Bd(),a.F.start(),a.f("sending client ack on secondary"),a.F.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.L.send({t:"c",d:{t:"n",d:{}}}),a.fd=a.F,qh(a)):(a.f("sending ping on secondary."),a.F.send({t:"c",d:{t:"p",d:{}}}))}kh.prototype.Fd=function(a){sh(this);this.hc(a)};function sh(a){a.Ab||(a.Qe--,0>=a.Qe&&(a.f("Primary connection is healthy."),a.Ab=!0,a.L.Bd()))}
function ph(a,b){a.F=new b("c:"+a.id+":"+a.ef++,a.H,a.Vd);a.Lf=b.responsesRequiredToBeHealthy||0;a.F.open(mh(a,a.F),nh(a,a.F));setTimeout(function(){a.F&&(a.f("Timed out trying to upgrade."),a.F.close())},Math.floor(6E4))}function oh(a,b,c){a.f("Realtime connection established.");a.L=b;a.Ua=1;a.Vc&&(a.Vc(c),a.Vc=null);0===a.Qe?(a.f("Primary connection is healthy."),a.Ab=!0):setTimeout(function(){th(a)},Math.floor(5E3))}
function th(a){a.Ab||1!==a.Ua||(a.f("sending ping on primary."),vh(a,{t:"c",d:{t:"p",d:{}}}))}function vh(a,b){if(1!==a.Ua)throw"Connection is not connected";a.fd.send(b)}kh.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,rh(this),this.ka&&(this.ka(),this.ka=null))};function rh(a){a.f("Shutting down all connections");a.L&&(a.L.close(),a.L=null);a.F&&(a.F.close(),a.F=null);a.vd&&(clearTimeout(a.vd),a.vd=null)};function wh(a,b,c,d){this.id=xh++;this.f=Oc("p:"+this.id+":");this.wf=this.De=!1;this.aa={};this.pa=[];this.Xc=0;this.Uc=[];this.ma=!1;this.$a=1E3;this.Cd=3E5;this.Gb=b;this.Tc=c;this.Ne=d;this.H=a;this.We=null;this.Qd={};this.Ig=0;this.mf=!0;this.Kc=this.Fe=null;yh(this,0);Mf.ub().Eb("visible",this.zg,this);-1===a.host.indexOf("fblocal")&&Lf.ub().Eb("online",this.xg,this)}var xh=0,zh=0;h=wh.prototype;
h.Da=function(a,b,c){var d=++this.Ig;a={r:d,a:a,b:b};this.f(B(a));J(this.ma,"sendRequest call when we're not connected not allowed.");this.Sa.Da(a);c&&(this.Qd[d]=c)};h.xf=function(a,b,c,d){var e=a.wa(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.aa[f]=this.aa[f]||{};J(!this.aa[f][e],"listen() called twice for same path/queryId.");a={J:d,ud:b,Fg:a,tag:c};this.aa[f][e]=a;this.ma&&Ah(this,a)};
function Ah(a,b){var c=b.Fg,d=c.path.toString(),e=c.wa();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ce(c.n),f.t=b.tag);f.h=b.ud();a.Da("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&u(k,"w")){var m=w(k,"w");ea(m)&&0<=Na(m,"no_index")&&Q("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.aa[d]&&a.aa[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Bh(a,d,e),b.J&&
b.J(l,k))})}h.P=function(a,b,c){this.Fa={fg:a,nf:!1,yc:b,jd:c};this.f("Authenticating using credential: "+a);Ch(this);(b=40==a.length)||(a=ad(a).Ac,b="object"===typeof a&&!0===w(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Cd=3E4)};h.ee=function(a){delete this.Fa;this.ma&&this.Da("unauth",{},function(b){a(b.s,b.d)})};
function Ch(a){var b=a.Fa;a.ma&&b&&a.Da("auth",{cred:b.fg},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Fa===b&&delete a.Fa;b.nf?"ok"!==d&&b.jd&&b.jd(d,c):(b.nf=!0,b.yc&&b.yc(d,c))})}h.Of=function(a,b){var c=a.path.toString(),d=a.wa();this.f("Unlisten called for "+c+" "+d);if(Bh(this,c,d)&&this.ma){var e=ce(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Da("n",c)}};h.Le=function(a,b,c){this.ma?Dh(this,"o",a,b,c):this.Uc.push({Zc:a,action:"o",data:b,J:c})};
h.Bf=function(a,b,c){this.ma?Dh(this,"om",a,b,c):this.Uc.push({Zc:a,action:"om",data:b,J:c})};h.Gd=function(a,b){this.ma?Dh(this,"oc",a,null,b):this.Uc.push({Zc:a,action:"oc",data:null,J:b})};function Dh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Da(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Eh(this,"p",a,b,c,d)};h.yf=function(a,b,c,d){Eh(this,"m",a,b,c,d)};
function Eh(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,If:d,J:e});a.Xc++;b=a.pa.length-1;a.ma?Fh(a,b):a.f("Buffering put: "+c)}function Fh(a,b){var c=a.pa[b].action,d=a.pa[b].If,e=a.pa[b].J;a.pa[b].Gg=a.ma;a.Da(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Xc--;0===a.Xc&&(a.pa=[]);e&&e(d.s,d.d)})}h.Te=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.Da("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
h.Fd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Qd[b];c&&(delete this.Qd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Gb(c.p,c.d,!1,c.t):"m"===b?this.Gb(c.p,c.d,!0,c.t):"c"===b?Gh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Fa,delete this.Fa,c&&c.jd&&c.jd(a,b)):"sd"===b?this.We?this.We(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):Pc("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"))}};h.Vc=function(a){this.f("connection ready");this.ma=!0;this.Kc=(new Date).getTime();this.Ne({serverTimeOffset:a-(new Date).getTime()});this.mf&&(a={},a["sdk.js."+"2.2.4".replace(/\./g,"-")]=1,kg()&&(a["framework.cordova"]=1),this.Te(a));Hh(this);this.mf=!1;this.Tc(!0)};
function yh(a,b){J(!a.Sa,"Scheduling a connect when we're already connected/ing?");a.Sb&&clearTimeout(a.Sb);a.Sb=setTimeout(function(){a.Sb=null;Ih(a)},Math.floor(b))}h.zg=function(a){a&&!this.uc&&this.$a===this.Cd&&(this.f("Window became visible.  Reducing delay."),this.$a=1E3,this.Sa||yh(this,0));this.uc=a};h.xg=function(a){a?(this.f("Browser went online."),this.$a=1E3,this.Sa||yh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Sa&&this.Sa.close())};
h.Cf=function(){this.f("data client disconnected");this.ma=!1;this.Sa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.If&&b.Gg&&(b.J&&b.J("disconnect"),delete this.pa[a],this.Xc--)}0===this.Xc&&(this.pa=[]);this.Qd={};Jh(this)&&(this.uc?this.Kc&&(3E4<(new Date).getTime()-this.Kc&&(this.$a=1E3),this.Kc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.$a=this.Cd,this.Fe=(new Date).getTime()),a=Math.max(0,this.$a-((new Date).getTime()-this.Fe)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),yh(this,a),this.$a=Math.min(this.Cd,1.3*this.$a));this.Tc(!1)};function Ih(a){if(Jh(a)){a.f("Making a connection attempt");a.Fe=(new Date).getTime();a.Kc=null;var b=q(a.Fd,a),c=q(a.Vc,a),d=q(a.Cf,a),e=a.id+":"+zh++;a.Sa=new kh(e,a.H,b,c,d,function(b){Q(b+" ("+a.H.toString()+")");a.wf=!0})}}h.yb=function(){this.De=!0;this.Sa?this.Sa.close():(this.Sb&&(clearTimeout(this.Sb),this.Sb=null),this.ma&&this.Cf())};h.qc=function(){this.De=!1;this.$a=1E3;this.Sa||yh(this,0)};
function Gh(a,b,c){c=c?Qa(c,function(a){return Wc(a)}).join("$"):"default";(a=Bh(a,b,c))&&a.J&&a.J("permission_denied")}function Bh(a,b,c){b=(new K(b)).toString();var d;n(a.aa[b])?(d=a.aa[b][c],delete a.aa[b][c],0===pa(a.aa[b])&&delete a.aa[b]):d=void 0;return d}function Hh(a){Ch(a);r(a.aa,function(b){r(b,function(b){Ah(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Fh(a,b);for(;a.Uc.length;)b=a.Uc.shift(),Dh(a,b.action,b.Zc,b.data,b.J)}function Jh(a){var b;b=Lf.ub().ic;return!a.wf&&!a.De&&b};var V={lg:function(){Vg=dh=!0}};V.forceLongPolling=V.lg;V.mg=function(){Wg=!0};V.forceWebSockets=V.mg;V.Mg=function(a,b){a.k.Ra.We=b};V.setSecurityDebugCallback=V.Mg;V.Ye=function(a,b){a.k.Ye(b)};V.stats=V.Ye;V.Ze=function(a,b){a.k.Ze(b)};V.statsIncrementCounter=V.Ze;V.pd=function(a){return a.k.pd};V.dataUpdateCount=V.pd;V.pg=function(a,b){a.k.Ce=b};V.interceptServerData=V.pg;V.vg=function(a){new ug(a)};V.onPopupOpen=V.vg;V.Kg=function(a){fg=a};V.setAuthenticationServer=V.Kg;function S(a,b,c){this.B=a;this.V=b;this.g=c}S.prototype.K=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.B.K()};S.prototype.val=S.prototype.K;S.prototype.lf=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.B.K(!0)};S.prototype.exportVal=S.prototype.lf;S.prototype.kg=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.B.e()};S.prototype.exists=S.prototype.kg;
S.prototype.w=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Xf("Firebase.DataSnapshot.child",a);var b=new K(a),c=this.V.w(b);return new S(this.B.oa(b),c,M)};S.prototype.child=S.prototype.w;S.prototype.Ha=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Xf("Firebase.DataSnapshot.hasChild",a);var b=new K(a);return!this.B.oa(b).e()};S.prototype.hasChild=S.prototype.Ha;
S.prototype.A=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.B.A().K()};S.prototype.getPriority=S.prototype.A;S.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.B.N())return!1;var b=this;return!!this.B.U(this.g,function(c,d){return a(new S(d,b.V.w(c),M))})};S.prototype.forEach=S.prototype.forEach;
S.prototype.td=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.B.N()?!1:!this.B.e()};S.prototype.hasChildren=S.prototype.td;S.prototype.name=function(){Q("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};S.prototype.name=S.prototype.name;S.prototype.key=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.key()};
S.prototype.key=S.prototype.key;S.prototype.Db=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.B.Db()};S.prototype.numChildren=S.prototype.Db;S.prototype.lc=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};S.prototype.ref=S.prototype.lc;function Kh(a,b){this.H=a;this.Va=Ob(a);this.ea=new ub;this.Ed=1;this.Ra=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ca=new Ae(this.H,q(this.Gb,this)),setTimeout(q(this.Tc,this,!0),0)):this.ca=this.Ra=new wh(this.H,q(this.Gb,this),q(this.Tc,this),q(this.Ne,this));this.Pg=Pb(a,q(function(){return new Jb(this.Va,this.ca)},this));this.tc=new Cf;this.Be=
new nb;var c=this;this.zd=new gf({Xe:function(a,b,f,g){b=[];f=c.Be.j(a.path);f.e()||(b=jf(c.zd,new Ub(ze,a.path,f)),setTimeout(function(){g("ok")},0));return b},Zd:ba});Lh(this,"connected",!1);this.ka=new qc;this.P=new Eg(a,q(this.ca.P,this.ca),q(this.ca.ee,this.ca),q(this.Ke,this));this.pd=0;this.Ce=null;this.O=new gf({Xe:function(a,b,f,g){c.ca.xf(a,f,b,function(b,e){var f=g(b,e);zb(c.ea,a.path,f)});return[]},Zd:function(a,b){c.ca.Of(a,b)}})}h=Kh.prototype;
h.toString=function(){return(this.H.lb?"https://":"http://")+this.H.host};h.name=function(){return this.H.Cb};function Mh(a){a=a.Be.j(new K(".info/serverTimeOffset")).K()||0;return(new Date).getTime()+a}function Nh(a){a=a={timestamp:Mh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
h.Gb=function(a,b,c,d){this.pd++;var e=new K(a);b=this.Ce?this.Ce(a,b):b;a=[];d?c?(b=na(b,function(a){return L(a)}),a=rf(this.O,e,b,d)):(b=L(b),a=nf(this.O,e,b,d)):c?(d=na(b,function(a){return L(a)}),a=mf(this.O,e,d)):(d=L(b),a=jf(this.O,new Ub(ze,e,d)));d=e;0<a.length&&(d=Oh(this,e));zb(this.ea,d,a)};h.Tc=function(a){Lh(this,"connected",a);!1===a&&Ph(this)};h.Ne=function(a){var b=this;Yc(a,function(a,d){Lh(b,d,a)})};h.Ke=function(a){Lh(this,"authenticated",a)};
function Lh(a,b,c){b=new K("/.info/"+b);c=L(c);var d=a.Be;d.Sd=d.Sd.G(b,c);c=jf(a.zd,new Ub(ze,b,c));zb(a.ea,b,c)}h.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Xg:c});var e=Nh(this);b=L(b,c);var e=sc(b,e),f=this.Ed++,e=hf(this.O,a,e,f,!0);vb(this.ea,e);var g=this;this.ca.put(a.toString(),b.K(!0),function(b,c){var e="ok"===b;e||Q("set at "+a+" failed: "+b);e=lf(g.O,f,!e);zb(g.ea,a,e);Qh(d,b,c)});e=Rh(this,a);Oh(this,e);zb(this.ea,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Nh(this),f={};r(b,function(a,b){d=!1;var c=L(a);f[b]=sc(c,e)});if(d)Bb("update() called with empty data.  Don't do anything."),Qh(c,"ok");else{var g=this.Ed++,k=kf(this.O,a,f,g);vb(this.ea,k);var l=this;this.ca.yf(a.toString(),b,function(b,d){var e="ok"===b;e||Q("update at "+a+" failed: "+b);var e=lf(l.O,g,!e),f=a;0<e.length&&(f=Oh(l,a));zb(l.ea,f,e);Qh(c,b,d)});b=Rh(this,a);Oh(this,b);zb(this.ea,a,[])}};
function Ph(a){a.f("onDisconnectEvents");var b=Nh(a),c=[];rc(pc(a.ka,b),F,function(b,e){c=c.concat(jf(a.O,new Ub(ze,b,e)));var f=Rh(a,b);Oh(a,f)});a.ka=new qc;zb(a.ea,F,c)}h.Gd=function(a,b){var c=this;this.ca.Gd(a.toString(),function(d,e){"ok"===d&&eg(c.ka,a);Qh(b,d,e)})};function Sh(a,b,c,d){var e=L(c);a.ca.Le(b.toString(),e.K(!0),function(c,g){"ok"===c&&a.ka.mc(b,e);Qh(d,c,g)})}function Th(a,b,c,d,e){var f=L(c,d);a.ca.Le(b.toString(),f.K(!0),function(c,d){"ok"===c&&a.ka.mc(b,f);Qh(e,c,d)})}
function Uh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(Bb("onDisconnect().update() called with empty data.  Don't do anything."),Qh(d,"ok")):a.ca.Bf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=L(c[l]);a.ka.mc(b.w(l),m)}Qh(d,e,f)})}function Vh(a,b,c){c=".info"===O(b.path)?a.zd.Ob(b,c):a.O.Ob(b,c);xb(a.ea,b.path,c)}h.yb=function(){this.Ra&&this.Ra.yb()};h.qc=function(){this.Ra&&this.Ra.qc()};
h.Ye=function(a){if("undefined"!==typeof console){a?(this.Yd||(this.Yd=new Ib(this.Va)),a=this.Yd.get()):a=this.Va.get();var b=Ra(sa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Ze=function(a){Lb(this.Va,a);this.Pg.Mf[a]=!0};h.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");Bb(b,arguments)};
function Qh(a,b,c){a&&Cb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Wh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new U(a,b);g.Eb("value",f);c={path:b,update:c,J:d,status:null,Ef:Gc(),cf:e,Kf:0,ge:function(){g.gc("value",f)},je:null,Aa:null,md:null,nd:null,od:null};d=a.O.ua(b,void 0)||C;c.md=d;d=c.update(d.K());if(n(d)){Sf("transaction failed: Data returned ",d,c.path);c.status=1;e=Df(a.tc,b);var k=e.Ba()||[];k.push(c);Ef(e,k);"object"===typeof d&&null!==d&&u(d,".priority")?(k=w(d,".priority"),J(Qf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.O.ua(b)||C).A().K();e=Nh(a);d=L(d,k);e=sc(d,e);c.nd=d;c.od=e;c.Aa=a.Ed++;c=hf(a.O,b,e,c.Aa,c.cf);zb(a.ea,b,c);Xh(a)}else c.ge(),c.nd=null,c.od=null,c.J&&(a=new S(c.md,new U(a,c.path),M),c.J(null,!1,a))}function Xh(a,b){var c=b||a.tc;b||Yh(a,c);if(null!==c.Ba()){var d=Zh(a,c);J(0<d.length,"Sending zero length transaction queue");Sa(d,function(a){return 1===a.status})&&$h(a,c.path(),d)}else c.td()&&c.U(function(b){Xh(a,b)})}
function $h(a,b,c){for(var d=Qa(c,function(a){return a.Aa}),e=a.O.ua(b,d)||C,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];J(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.Kf++;var k=N(b,g.path),d=d.G(k,g.nd)}d=d.K(!0);a.ca.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(lf(a.O,c[f].Aa));if(c[f].J){var g=c[f].od,k=new U(a,c[f].path);d.push(q(c[f].J,
null,null,!0,new S(g,k,M)))}c[f].ge()}Yh(a,Df(a.tc,b));Xh(a);zb(a.ea,b,e);for(f=0;f<d.length;f++)Cb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(Q("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].je=d;Oh(a,b)}},e)}function Oh(a,b){var c=ai(a,b),d=c.path(),c=Zh(a,c);bi(a,c,d);return d}
function bi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Qa(b,function(a){return a.Aa}),g=0;g<b.length;g++){var k=b[g],l=N(c,k.path),m=!1,v;J(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,v=k.je,e=e.concat(lf(a.O,k.Aa,!0));else if(1===k.status)if(25<=k.Kf)m=!0,v="maxretry",e=e.concat(lf(a.O,k.Aa,!0));else{var y=a.O.ua(k.path,f)||C;k.md=y;var I=b[g].update(y.K());n(I)?(Sf("transaction failed: Data returned ",I,k.path),l=L(I),"object"===typeof I&&null!=
I&&u(I,".priority")||(l=l.da(y.A())),y=k.Aa,I=Nh(a),I=sc(l,I),k.nd=l,k.od=I,k.Aa=a.Ed++,Va(f,y),e=e.concat(hf(a.O,k.path,I,k.Aa,k.cf)),e=e.concat(lf(a.O,y,!0))):(m=!0,v="nodata",e=e.concat(lf(a.O,k.Aa,!0)))}zb(a.ea,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].ge,Math.floor(0)),b[g].J&&("nodata"===v?(k=new U(a,b[g].path),d.push(q(b[g].J,null,null,!1,new S(b[g].md,k,M)))):d.push(q(b[g].J,null,Error(v),!1,null))))}Yh(a,a.tc);for(g=0;g<d.length;g++)Cb(d[g]);Xh(a)}}
function ai(a,b){for(var c,d=a.tc;null!==(c=O(b))&&null===d.Ba();)d=Df(d,c),b=G(b);return d}function Zh(a,b){var c=[];ci(a,b,c);c.sort(function(a,b){return a.Ef-b.Ef});return c}function ci(a,b,c){var d=b.Ba();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.U(function(b){ci(a,b,c)})}function Yh(a,b){var c=b.Ba();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Ef(b,0<c.length?c:null)}b.U(function(b){Yh(a,b)})}
function Rh(a,b){var c=ai(a,b).path(),d=Df(a.tc,b);Hf(d,function(b){di(a,b)});di(a,d);Gf(d,function(b){di(a,b)});return c}
function di(a,b){var c=b.Ba();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(J(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].je="set"):(J(1===c[g].status,"Unexpected transaction status in abort"),c[g].ge(),e=e.concat(lf(a.O,c[g].Aa,!0)),c[g].J&&d.push(q(c[g].J,null,Error("set"),!1,null))));-1===f?Ef(b,null):c.length=f+1;zb(a.ea,b.path(),e);for(g=0;g<d.length;g++)Cb(d[g])}};function W(){this.nc={};this.Pf=!1}ca(W);W.prototype.yb=function(){for(var a in this.nc)this.nc[a].yb()};W.prototype.interrupt=W.prototype.yb;W.prototype.qc=function(){for(var a in this.nc)this.nc[a].qc()};W.prototype.resume=W.prototype.qc;W.prototype.ue=function(){this.Pf=!0};function X(a,b){this.ad=a;this.qa=b}X.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);this.ad.Gd(this.qa,a||null)};X.prototype.cancel=X.prototype.cancel;X.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);Yf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);Sh(this.ad,this.qa,null,a)};X.prototype.remove=X.prototype.remove;
X.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);Yf("Firebase.onDisconnect().set",this.qa);Rf("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);Sh(this.ad,this.qa,a,b)};X.prototype.set=X.prototype.set;
X.prototype.Kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Yf("Firebase.onDisconnect().setWithPriority",this.qa);Rf("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Uf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);Th(this.ad,this.qa,a,b,c)};X.prototype.setWithPriority=X.prototype.Kb;
X.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);Yf("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
Uh(this.ad,this.qa,a,b)};X.prototype.update=X.prototype.update;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.jc=d}
function ei(a){var b=null,c=null;a.la&&(b=od(a));a.na&&(c=qd(a));if(a.g===Vd){if(a.la){if("[MIN_NAME]"!=nd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===M){if(null!=b&&!Qf(b)||null!=c&&!Qf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(J(a.g instanceof Rd||a.g===Yd,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function fi(a){if(a.la&&a.na&&a.ia&&(!a.ia||""===a.Nb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function gi(a,b){if(!0===a.jc)throw Error(b+": You can't combine multiple orderBy calls.");}Y.prototype.lc=function(){x("Query.ref",0,0,arguments.length);return new U(this.k,this.path)};Y.prototype.ref=Y.prototype.lc;
Y.prototype.Eb=function(a,b,c,d){x("Query.on",2,4,arguments.length);Vf("Query.on",a,!1);A("Query.on",2,b,!1);var e=hi("Query.on",c,d);if("value"===a)Vh(this.k,this,new jd(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Vh(this.k,this,new kd(f,e.cancel,e.Ma))}return b};Y.prototype.on=Y.prototype.Eb;
Y.prototype.gc=function(a,b,c){x("Query.off",0,3,arguments.length);Vf("Query.off",a,!0);A("Query.off",2,b,!0);lb("Query.off",3,c);var d=null,e=null;"value"===a?d=new jd(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new kd(e,null,c||null));e=this.k;d=".info"===O(this.path)?e.zd.kb(this,d):e.O.kb(this,d);xb(e.ea,this.path,d)};Y.prototype.off=Y.prototype.gc;
Y.prototype.Ag=function(a,b){function c(g){f&&(f=!1,e.gc(a,c),b.call(d.Ma,g))}x("Query.once",2,4,arguments.length);Vf("Query.once",a,!1);A("Query.once",2,b,!1);var d=hi("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.Eb(a,c,function(b){e.gc(a,c);d.cancel&&d.cancel.call(d.Ma,b)})};Y.prototype.once=Y.prototype.Ag;
Y.prototype.Ge=function(a){Q("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");x("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.Ge(a);fi(b);return new Y(this.k,this.path,b,this.jc)};Y.prototype.limit=Y.prototype.Ge;
Y.prototype.He=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.He(a),this.jc)};Y.prototype.limitToFirst=Y.prototype.He;
Y.prototype.Ie=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ia)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ie(a),this.jc)};Y.prototype.limitToLast=Y.prototype.Ie;
Y.prototype.Bg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Wf("Query.orderByChild",1,a,!1);gi(this,"Query.orderByChild");var b=be(this.n,new Rd(a));ei(b);return new Y(this.k,
this.path,b,!0)};Y.prototype.orderByChild=Y.prototype.Bg;Y.prototype.Cg=function(){x("Query.orderByKey",0,0,arguments.length);gi(this,"Query.orderByKey");var a=be(this.n,Vd);ei(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByKey=Y.prototype.Cg;Y.prototype.Dg=function(){x("Query.orderByPriority",0,0,arguments.length);gi(this,"Query.orderByPriority");var a=be(this.n,M);ei(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByPriority=Y.prototype.Dg;
Y.prototype.Eg=function(){x("Query.orderByValue",0,0,arguments.length);gi(this,"Query.orderByValue");var a=be(this.n,Yd);ei(a);return new Y(this.k,this.path,a,!0)};Y.prototype.orderByValue=Y.prototype.Eg;
Y.prototype.Xd=function(a,b){x("Query.startAt",0,2,arguments.length);Rf("Query.startAt",a,this.path,!0);Wf("Query.startAt",2,b,!0);var c=this.n.Xd(a,b);fi(c);ei(c);if(this.n.la)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new Y(this.k,this.path,c,this.jc)};Y.prototype.startAt=Y.prototype.Xd;
Y.prototype.qd=function(a,b){x("Query.endAt",0,2,arguments.length);Rf("Query.endAt",a,this.path,!0);Wf("Query.endAt",2,b,!0);var c=this.n.qd(a,b);fi(c);ei(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.jc)};Y.prototype.endAt=Y.prototype.qd;
Y.prototype.hg=function(a,b){x("Query.equalTo",1,2,arguments.length);Rf("Query.equalTo",a,this.path,!1);Wf("Query.equalTo",2,b,!0);if(this.n.la)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Xd(a,b).qd(a,b)};Y.prototype.equalTo=Y.prototype.hg;
Y.prototype.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));a=this.k.toString()+(b||"/");b=jb(ee(this.n));return a+=b.replace(/^&/,"")};Y.prototype.toString=Y.prototype.toString;Y.prototype.wa=function(){var a=Wc(ce(this.n));return"{}"===a?"default":a};
function hi(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,lb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(z(a,3,!0)+" must either be a cancel callback or a context object.");return d};var Z={};Z.vc=wh;Z.DataConnection=Z.vc;wh.prototype.Og=function(a,b){this.Da("q",{p:a},b)};Z.vc.prototype.simpleListen=Z.vc.prototype.Og;wh.prototype.gg=function(a,b){this.Da("echo",{d:a},b)};Z.vc.prototype.echo=Z.vc.prototype.gg;wh.prototype.interrupt=wh.prototype.yb;Z.Sf=kh;Z.RealTimeConnection=Z.Sf;kh.prototype.sendRequest=kh.prototype.Da;kh.prototype.close=kh.prototype.close;
Z.og=function(a){var b=wh.prototype.put;wh.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){wh.prototype.put=b}};Z.hijackHash=Z.og;Z.Rf=Ec;Z.ConnectionTarget=Z.Rf;Z.wa=function(a){return a.wa()};Z.queryIdentifier=Z.wa;Z.qg=function(a){return a.k.Ra.aa};Z.listens=Z.qg;Z.ue=function(a){a.ue()};Z.forceRestClient=Z.ue;function U(a,b){var c,d,e;if(a instanceof Kh)c=a,d=b;else{x("new Firebase",1,2,arguments.length);d=Rc(arguments[0]);c=d.Qg;"firebase"===d.domain&&Qc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||Qc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.lb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Ec(d.host,d.lb,c,"ws"===d.scheme||"wss"===d.scheme);d=new K(d.Zc);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Pf(c.Cb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Of.test(e)));if(f)throw Error(z("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof W)e=b;else if(p(b))e=W.ub(),c.Ld=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=W.ub();f=c.toString();var g=w(e.nc,f);g||(g=new Kh(c,e.Pf),e.nc[f]=g);c=g}Y.call(this,c,d,$d,!1)}ma(U,Y);var ii=U,ji=["Firebase"],ki=aa;ji[0]in ki||!ki.execScript||ki.execScript("var "+ji[0]);for(var li;ji.length&&(li=ji.shift());)!ji.length&&n(ii)?ki[li]=ii:ki=ki[li]?ki[li]:ki[li]={};U.prototype.name=function(){Q("Firebase.name() being deprecated. Please use Firebase.key() instead.");x("Firebase.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;
U.prototype.key=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:vc(this.path)};U.prototype.key=U.prototype.key;U.prototype.w=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof K))if(null===O(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Xf("Firebase.child",b)}else Xf("Firebase.child",a);return new U(this.k,this.path.w(a))};U.prototype.child=U.prototype.w;
U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.k,a)};U.prototype.parent=U.prototype.parent;U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};U.prototype.root=U.prototype.root;
U.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);Yf("Firebase.set",this.path);Rf("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);this.k.Kb(this.path,a,null,b||null)};U.prototype.set=U.prototype.set;
U.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);Yf("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;Q("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);this.k.update(this.path,a,b||null)};U.prototype.update=U.prototype.update;
U.prototype.Kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);Yf("Firebase.setWithPriority",this.path);Rf("Firebase.setWithPriority",a,this.path,!1);Uf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Kb(this.path,a,b,c||null)};U.prototype.setWithPriority=U.prototype.Kb;
U.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);Yf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);this.set(null,a)};U.prototype.remove=U.prototype.remove;
U.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);Yf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(z("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Wh(this.k,this.path,a,b||null,c)};U.prototype.transaction=U.prototype.transaction;
U.prototype.Lg=function(a,b){x("Firebase.setPriority",1,2,arguments.length);Yf("Firebase.setPriority",this.path);Uf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);this.k.Kb(this.path.w(".priority"),a,null,b)};U.prototype.setPriority=U.prototype.Lg;
U.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);Yf("Firebase.push",this.path);Rf("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Mh(this.k),c=Kf(c),c=this.w(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};U.prototype.push=U.prototype.push;U.prototype.jb=function(){Yf("Firebase.onDisconnect",this.path);return new X(this.k,this.path)};U.prototype.onDisconnect=U.prototype.jb;
U.prototype.P=function(a,b,c){Q("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");x("Firebase.auth",1,3,arguments.length);Zf("Firebase.auth",a);A("Firebase.auth",2,b,!0);A("Firebase.auth",3,b,!0);Kg(this.k.P,a,{},{remember:"none"},b,c)};U.prototype.auth=U.prototype.P;U.prototype.ee=function(a){x("Firebase.unauth",0,1,arguments.length);A("Firebase.unauth",1,a,!0);Lg(this.k.P,a)};U.prototype.unauth=U.prototype.ee;
U.prototype.we=function(){x("Firebase.getAuth",0,0,arguments.length);return this.k.P.we()};U.prototype.getAuth=U.prototype.we;U.prototype.ug=function(a,b){x("Firebase.onAuth",1,2,arguments.length);A("Firebase.onAuth",1,a,!1);lb("Firebase.onAuth",2,b);this.k.P.Eb("auth_status",a,b)};U.prototype.onAuth=U.prototype.ug;U.prototype.tg=function(a,b){x("Firebase.offAuth",1,2,arguments.length);A("Firebase.offAuth",1,a,!1);lb("Firebase.offAuth",2,b);this.k.P.gc("auth_status",a,b)};U.prototype.offAuth=U.prototype.tg;
U.prototype.Wf=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length);Zf("Firebase.authWithCustomToken",a);A("Firebase.authWithCustomToken",2,b,!1);ag("Firebase.authWithCustomToken",3,c,!0);Kg(this.k.P,a,{},c||{},b)};U.prototype.authWithCustomToken=U.prototype.Wf;U.prototype.Xf=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length);$f("Firebase.authWithOAuthPopup",1,a);A("Firebase.authWithOAuthPopup",2,b,!1);ag("Firebase.authWithOAuthPopup",3,c,!0);Pg(this.k.P,a,c,b)};
U.prototype.authWithOAuthPopup=U.prototype.Xf;U.prototype.Yf=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length);$f("Firebase.authWithOAuthRedirect",1,a);A("Firebase.authWithOAuthRedirect",2,b,!1);ag("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.P;Ng(d);var e=[wg],f=ig(c);"anonymous"===a||"firebase"===a?R(b,yg("TRANSPORT_UNAVAILABLE")):(P.set("redirect_client_options",f.ld),Og(d,e,"/auth/"+a,f,b))};U.prototype.authWithOAuthRedirect=U.prototype.Yf;
U.prototype.Zf=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length);$f("Firebase.authWithOAuthToken",1,a);A("Firebase.authWithOAuthToken",3,c,!1);ag("Firebase.authWithOAuthToken",4,d,!0);p(b)?($f("Firebase.authWithOAuthToken",2,b),Mg(this.k.P,a+"/token",{access_token:b},d,c)):(ag("Firebase.authWithOAuthToken",2,b,!1),Mg(this.k.P,a+"/token",b,d,c))};U.prototype.authWithOAuthToken=U.prototype.Zf;
U.prototype.Vf=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length);A("Firebase.authAnonymously",1,a,!1);ag("Firebase.authAnonymously",2,b,!0);Mg(this.k.P,"anonymous",{},b,a)};U.prototype.authAnonymously=U.prototype.Vf;
U.prototype.$f=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length);ag("Firebase.authWithPassword",1,a,!1);bg("Firebase.authWithPassword",a,"email");bg("Firebase.authWithPassword",a,"password");A("Firebase.authAnonymously",2,b,!1);ag("Firebase.authAnonymously",3,c,!0);Mg(this.k.P,"password",a,c,b)};U.prototype.authWithPassword=U.prototype.$f;
U.prototype.re=function(a,b){x("Firebase.createUser",2,2,arguments.length);ag("Firebase.createUser",1,a,!1);bg("Firebase.createUser",a,"email");bg("Firebase.createUser",a,"password");A("Firebase.createUser",2,b,!1);this.k.P.re(a,b)};U.prototype.createUser=U.prototype.re;U.prototype.Se=function(a,b){x("Firebase.removeUser",2,2,arguments.length);ag("Firebase.removeUser",1,a,!1);bg("Firebase.removeUser",a,"email");bg("Firebase.removeUser",a,"password");A("Firebase.removeUser",2,b,!1);this.k.P.Se(a,b)};
U.prototype.removeUser=U.prototype.Se;U.prototype.oe=function(a,b){x("Firebase.changePassword",2,2,arguments.length);ag("Firebase.changePassword",1,a,!1);bg("Firebase.changePassword",a,"email");bg("Firebase.changePassword",a,"oldPassword");bg("Firebase.changePassword",a,"newPassword");A("Firebase.changePassword",2,b,!1);this.k.P.oe(a,b)};U.prototype.changePassword=U.prototype.oe;
U.prototype.ne=function(a,b){x("Firebase.changeEmail",2,2,arguments.length);ag("Firebase.changeEmail",1,a,!1);bg("Firebase.changeEmail",a,"oldEmail");bg("Firebase.changeEmail",a,"newEmail");bg("Firebase.changeEmail",a,"password");A("Firebase.changeEmail",2,b,!1);this.k.P.ne(a,b)};U.prototype.changeEmail=U.prototype.ne;
U.prototype.Ue=function(a,b){x("Firebase.resetPassword",2,2,arguments.length);ag("Firebase.resetPassword",1,a,!1);bg("Firebase.resetPassword",a,"email");A("Firebase.resetPassword",2,b,!1);this.k.P.Ue(a,b)};U.prototype.resetPassword=U.prototype.Ue;U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);W.ub().yb()};U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);W.ub().qc()};
function Nc(a,b){J(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Ab=q(console.log,console):"object"===typeof console.log&&(Ab=function(a){console.log(a)})),b&&P.set("logging_enabled",!0)):a?Ab=a:(Ab=null,P.remove("logging_enabled"))}U.enableLogging=Nc;U.ServerValue={TIMESTAMP:{".sv":"timestamp"}};U.SDK_VERSION="2.2.4";U.INTERNAL=V;U.Context=W;U.TEST_ACCESS=Z;})();

module.exports = Firebase;

},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\index.js":[function(require,module,exports){
var FlattenView=require("./src/flattenview");
var SelectableView=require("./src/selectableview");
var InterlineView=require("./src/interlineview");
var LinkView=require("./src/linkview");

var textrange=require("./src/textrange");
var markuputil=require("./src/markuputil");

//var BaseView=require("./src/baseview");
//var MultiSelectView=require("./src/multiselectview");
//var ReviseView=require("./src/reviseview");


//var RevisionView=require("./src/revisionview");

module.exports={FlattenView:FlattenView
	,SelectableView:SelectableView
	,InterlineView:InterlineView
	,LinkView:LinkView
	,textrange:textrange
  ,markuputil:markuputil
};
},{"./src/flattenview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\flattenview.js","./src/interlineview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interlineview.js","./src/linkview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\linkview.js","./src/markuputil":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js","./src/selectableview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js","./src/textrange":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\textrange.js"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\caretpos.js":[function(require,module,exports){
var create=function(_text) {
	var caretPos={},pos=0,text=_text;

	caretPos.get=function(){
		return pos;
	}

	var nonstop=function(code) {
		return (code>=0xDC00 && code<=0xDFFF) || (code>=0x0f71 && code<=0x0f87)|| (code>=0x0f8d && code<=0x0fbc);
	}

	var snapNext=function(_pos) {
		if (typeof _pos=="undefined") _pos=pos;
		var code=text.charCodeAt(_pos);
		while (nonstop(code)) {
			_pos++;
			code=text.charCodeAt(_pos);
		}
		return _pos	}
	var snapPrev=function(_pos) {
		if (typeof _pos=="undefined") _pos=pos;
		var code=text.charCodeAt(_pos);
		while (nonstop(code)) {
			_pos--;
			code=text.charCodeAt(_pos);
		}
		return _pos;	
	}	
	caretPos.next=function(_pos){
		pos=snapPrev(_pos);
		pos++;	
		var code=text.charCodeAt(pos);
		while (nonstop(code)) {
			pos++;
			code=text.charCodeAt(pos);
		}
		if (pos>text.length) pos=text.length;
		return pos;
	}
	caretPos.nextToken=function(_pos) {
		var start=snapPrev(_pos);
		this.next(start);
		return text.substring(start,pos);
	}
	caretPos.prevToken=function(_pos) {
		var end=snapNext(_pos);
		this.prev(end);
		return text.substring(pos,end);
	}
	caretPos.prev=function(_pos) {
		pos=snapNext(_pos);
		pos--;
		var code=text.charCodeAt(pos);
		while (nonstop(code)) {
			pos--;
			code=text.charCodeAt(pos);
		}
		if (pos<0) pos=0;
		return pos;
	}
	caretPos.valid=function(_pos) {
		return !nonstop(text.charCodeAt(_pos));
	}

	return caretPos;
}
module.exports={create:create};
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\defaultspan.js":[function(require,module,exports){
/*
  Span's styles is created by merging styles of all tags covering the span.
*/
try {
  var React=require("react-native");
  var PureRenderMixin=null;
} catch(e) {
  var React=require("react/addons");
  var PureRenderMixin = React.addons.PureRenderMixin;
}
var E=React.createElement,PT=React.PropTypes;


var mergeStyles=function(styles) {
  if (!styles.length) return {}; //should return {} instead of null , otherwise react don't apply style
  var out={};
  for (var i=0;i<styles.length;i++) {
    for (var key in styles[i]) {
      out[key]=styles[i][key];
    }
  }
  return out;
}
var SpanClass = React.createClass({
  displayName:"defaultSpan"
  ,mixins:[PureRenderMixin]
  ,propTypes:{
    tid:PT.array
    ,index:PT.number
    ,tags:PT.array.isRequired
    ,start:PT.number.isRequired
    ,tagStyles:PT.object
    ,onLeaveTag:PT.func
    ,onEnterTag:PT.func
  }
  ,getTagStyle:function(tid) {
    if (!tid) return {};
    var out=[];
    for (var i=0;i<tid.length;i++){
      var m=tid[i];
      var styles=this.props.styles;
      var tag=this.props.tags[m];
      tag.style&&out.push(tag.style);
      var type=tag.className;
      styles[type]&&out.push(styles[type]);
      styles[type+"_first"]&&out.push(styles[type+"_first"]);
      styles[type+"_last"]&&out.push(styles[type+"_last"]);        
    };
    return out;
  }
  ,getTagType:function(tid){
    if (!tid) return [];
    var out=[];
    for (var i=0;i<tid.length;i++){
      var m=tid[i];
      var styles=this.props.styles;
      var tag=this.props.tags[m];
      var type=tag.className;
      type&&out.push(type);
    }
    return out;
  }
  ,getTid:function(e) {
    var node=e.target;
    while (node&&typeof node.dataset["start"]=="undefined") {
      node=node.parentNode;
    }
    var tid=node.dataset["tid"];
    return tid;
  }
  ,onMouseEnter:function(e) {
    var tid=this.getTid(e);
    if(this.props.onEnterTag && tid) this.props.onEnterTag(e,tid);
  }
  ,onMouseLeave:function(e) {
    var tid=this.getTid(e);
    if(this.props.onLeaveTag && tid) this.props.onLeaveTag(e,tid);
  }
  ,render:function() {
    var styles=this.getTagStyle(this.props.tid);
    var style=mergeStyles(styles);
    var span=React.Text||"span";
    
    var props={"data-tid":this.props.tid,style:style,"data-start":this.props.start
    ,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave};    
    props.className=this.getTagType(this.props.tid).join(" ");  //pass className as it's  
    
    return E(span,props,this.props.children);
  }
});
module.exports=SpanClass;

},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\flattenview.js":[function(require,module,exports){
/*
	Core markup display component,
	"flatten" text, tags (with styles) to single layer.
*/
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;


var spreadMarkup=require("./markuputil").spreadMarkup;
var caretPos=require("./caretpos");
var defaultSpan=require("./defaultspan");
var FlattenView=React.createClass({
	displayName:"FlattenView"
	,mixins:[PureRenderMixin]
	,propTypes:{
		text:React.PropTypes.string.isRequired
		,tags:PT.array
		,styles:PT.object
		,span:PT.func
		,style:PT.object
		,allowKeys:PT.array
		,onEnterTag:PT.func
		,onLeaveTag:PT.func
	}
	,getDefaultProps:function() {
		return {tags:[],styles:{},span:defaultSpan};
	}
	,tagAtPos:[] // hold covering tags given a text position
	,mergeStyle:function(style) {
		this.style=style||{};
		if (!this.style.lineHeight||!this.style.outline) {
			this.style=update(this.style,{$merge:{
				outline : "0px solid transparent", lineHeight:"180%"
			}});
		}		
	}
	,componentWillMount:function() {
		this.mergeStyle(this.props.style);
		this.tagAtPos=spreadMarkup(this.props.tags);
	}
	,componentWillReceiveProps:function(nextProps) {
		this.mergeStyle(nextProps.style);
		this.tagAtPos=spreadMarkup(nextProps.tags);
	}
	,renderSpan:function(out,start,end,spantext,tid) {
		var before=[],after=[], tags=this.props.tags;
		(tid||[]).map(function(m){ 
			if (tags[m].before&& start===tags[m].s) { 
				before.push(tags[m].before);
			}
		});
		before.length && out.push(E(React.Text||"span",{key:"b"+start},before));

		out.push(E(this.props.span,{index:this.props.index
					,onEnterTag:this.props.onEnterTag,onLeaveTag:this.props.onLeaveTag
					,styles:this.props.styles,key:'s'+start, tags:tags,tid:tid,start:start}
				,spantext)
		);

		(tid||[]).map(function(m){ 
			if (tags[m].after && end===tags[m].s+tags[m].l) {
				after.push(tags[m].after);
			} 
		});
		
		after.length && out.push(E(React.Text||"span",{key:"a"+start},after));
		return out;
	}
	,renderChildren:function() {
		var sameArray=function(a1,a2) {
			if (!a1 && !a2) return true; //both are empty
			if ((!a1 && a2) || (a1 && !a2) ) return false;
			return a1.toString()===a2.toString(); //one dimensional array
		}
		var out=[], spantext="" ,start=0, previous=["impossible item"] ;
		var caretpos=caretPos.create(this.props.text);

		while (caretpos.get()<this.props.text.length) {
			var i=caretpos.get();
			if (!sameArray(this.tagAtPos[i],previous)) {
				spantext && (out=this.renderSpan(out,start,i,spantext,previous));
				start=i;
				spantext="";
			}
			previous=(this.tagAtPos[i]&&this.tagAtPos[i].length)?JSON.parse(JSON.stringify(this.tagAtPos[i])):null; 
			if (i>this.tagAtPos.length) break;
			spantext += caretpos.nextToken();
		}
		spantext=this.props.text.substr(start);
		spantext && (out=this.renderSpan(out,start,i,spantext,previous));
		return out;
	}
	,render:function() {
		var props=update(this.props, {$merge:{spellCheck:false, style:this.style}});
		return E(React.View||"div",props,this.renderChildren());
	}
});
module.exports=FlattenView;
},{"./caretpos":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\caretpos.js","./defaultspan":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\defaultspan.js","./markuputil":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var Embed=React.createClass({
	render:function() {
		return E("span",this.props,this.props.children);
	}
});
var Super=React.createClass({
	render:function() {
		return E("div",{style:{position:"absolute",left:0,top:"-1.2em",width:"1000px"}}
			,this.props.children);
	}
});
var Sub=React.createClass({
	render:function() {
		return E("div",{style:{position:"absolute",left:0,top:"0.6em",width:"1000px"}}
			,this.props.children);
	}
});
var Container=React.createClass({
	render:function() {
		return E("span",{style:{position:"relative"}}
			,this.props.children);
	}
});

module.exports={Container:Container,Super:Super, Sub:Sub, Embed:Embed};
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interlineview.js":[function(require,module,exports){
/*
	InterlineView
	filter markups and create tags and pass to selectableview

	markups : data from firebase,
	          interline editor mutate markups and write back to database.

	tags: with before/after component and className, ready for render
		    tags are generated on-the-fly , no need to save.

*/

try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var SelectableView=require("./selectableview");
var markup2tag=require("./markup2tag");
var keyboard_mixin=require("./keyboard_mixin");
var InterlineView=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		markups:PT.object.isRequired  //markup from firebase
		,user:PT.string
		,allowkeys:PT.array
		,onKeyPress:PT.func
	}
	,getInitialState:function() {
		var allowKeys=keyboard_mixin.arrowkeys;
		if (this.props.allowKeys && this.props.allowKeys.length) {
			allowKeys=allowKeys.concat(this.props.allowKeys);
		}
		//markupActivated : { mid: true , mid: false }; //otherwise it is not initialized
		return {tags:[],editing:null,hovering:null,markupActivated:{},allowKeys:allowKeys};
	}
	,onKeyPress:function(e) {
		var nn=e.target.nodeName;
		if (nn==="INPUT" || nn==="TEXTAREA") return;

		if (this.state.allowKeys.indexOf(e.key)>-1) {
			if (this.props.onKeyPress) this.props.onKeyPress(e);
		} else {
			e.preventDefault();
		}
	}
	,componentWillUpdate:function(nextProps,nextState) {
		this.markup2tag(nextProps,nextState);
	}
	,componentDidMount:function() {
		this.forceUpdate();
	}
	,markup2tag:function(nextProps,nextState) {
		var status={editing:nextState.editing,hovering:nextState.hovering
			,text:nextProps.text
			,action:this.action,markupActivated:nextState.markupActivated,action:this.action};

		nextState.tags=markup2tag(nextProps.markups,status);
		nextState.markupActivated=status.markupActivated; //markup2tag might change markupActivated
	}
  ,activateMarkup:function(mid) {
  	var m=this.props.markups[mid];
  	if (!m)return;
		var markupActivated=this.deactivateOverlapMarkup(m.s,m.l);
		var activate={};
		activate[mid]=true;
		var ma=update(markupActivated,{$merge:activate});
		this.setState({editing:null,hovering:null,markupActivated:ma});
  }
  ,componentWillReceiveProps:function(nextProps) {
  	if (nextProps.editing!==this.props.editing) {
  		this.activateOrEditMarkup(nextProps.editing,nextProps);
  	}
  }
  ,activateOrEditMarkup:function(mid,props) {
  	if (!props) props=this.props;
  	if (!mid || !this.props.markups[mid]) return;
  	if (this.props.markups[mid].author===this.props.user) {
  		this.setState({editing:mid,hovering:null});
  	} else {
  		this.activateMarkup(mid);
  	}
  }
  ,deactivateMarkup:function(mid) {
		var markupActivated=this.state.markupActivated;
		var deactive={};
		deactive[mid]=false;
		var ma=update(markupActivated,{$merge:deactive});
		this.setState({editing:null,hovering:null,markupActivated:ma});
  }
  ,deactivateOverlapMarkup:function(start,len) {
		//set state to 0 for any overlap markup
		var deactive={};
		for (var mid in this.props.markups) {
			var m=this.props.markups[mid];
			if (!(start>=m.s+m.l || start+len<=m.s) ) {
				if (this.state.markupActivated[mid]) deactive[mid]=false;
		  }
			if (start===m.s && this.state.markupActivated[mid]) deactive[mid]=false;
		};
		return update(this.state.markupActivated,{$merge:deactive});
  }
  ,setMarkup:function(mid,key,value) {
  	var m=this.props.markups[mid];
  	var obj={};
  	obj[key]=value;
  	this.props.markups[mid]=update(m,{$merge:obj});
  	this.forceUpdate();
  }
	,action:function(act,p1,p2,p3) {
		if(act==="enter") {
 			this.setState({hovering:p1})
		} else if (act==="leave") {
			if (this.state.editing) {
				this.props.onDoneEdit&&this.props.onDoneEdit(this.state.editing);
			}
			this.setState({hovering:null,editing:null});
		} else if (act==="activate") {
			this.activateMarkup(p1);
		} else if (act==="deactivate") {
			this.deactivateMarkup(p1)
		} else if (act==="activate_edit") { //
			this.activateOrEditMarkup(p1);
		} else if (act==="setMarkup") {
			this.setMarkup(p1,p2,p3);
		}
	}
	,render:function(){
		var props=update(this.props,{$merge:{tags:this.state.tags,
			selectable:this.props.selectable,
			allowKeys:this.state.allowKeys,
			onFocus:this.props.onFocus,
			onBlur:this.props.onBlur,
			onKeyPress:this.onKeyPress}});
		delete props.markups;//hide markups from flattenview
		return E(SelectableView,props);
	}

});

module.exports=InterlineView;
},{"./keyboard_mixin":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js","./markup2tag":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markup2tag.js","./selectableview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js":[function(require,module,exports){

var keyboard_mixin={
	arrowkeys:["ArrowRight","ArrowLeft","ArrowUp","ArrowDown","PageUp","PageDown","Home","End"],
	onkeydown:function(e) {
		var nodename=e.target.nodeName;
		if (nodename==="INPUT" || nodename==="TEXTAREA") return;
		var allowkeys=this.state.allowkeys||[];
		if (allowkeys.indexOf(e.key)>-1 || (e.ctrlKey && e.keyCode===67)) return; //allow ctrl+c

		e.preventDefault();
	}
}
module.exports=keyboard_mixin;
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\linkview.js":[function(require,module,exports){
/*
	View for building intertextual link.
*/
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var SelectableView=require("./selectableview");
var keyboard_mixin=require("./keyboard_mixin");
var styles={
	link:{borderBottom:"2px solid #0000ff"}
	,highlight:{background:"yellow",borderRadius:".5em",borderBottom:""}
}

var InterlineView=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		links:PT.object
		,highlights:PT.array
		,selections:PT.array
		,user:PT.string
		,allowkeys:PT.array
		,onKeyPress:PT.func
		,onHoverLink:PT.func
	}
	,getDefaultProps:function() {
		return {links:{},highlights:[],selections:[],user:"anonymous"};
	}
	,componentWillUpdate:function(nextProps,nextState) {
		this.combinetag(nextProps,nextState);
	}
	,componentDidMount:function() {
		this.forceUpdate();
	}
	,combinetag:function(props,state) {
		var tags=[];
		for (var key in props.links) {
			props.links[key].forEach(function(H){
				tags.push({s:H[0], l:H[1],style:styles.link, mid:key});
			});
		}
		for (var i=0;i<props.highlights.length;i++) {
			var H=props.highlights[i];
			tags.push({s:H[0], l:H[1], style:styles.highlight, mid:"hover_"+i});	
		}
		state.tags=tags;
	}	
	,getInitialState:function() {
		var allowKeys=keyboard_mixin.arrowkeys;
		if (this.props.allowKeys && this.props.allowKeys.length) {
			allowKeys=allowKeys.concat(this.props.allowKeys);
		}
		return {tags:[],editing:null,hovering:null,markupActivated:{},allowKeys:allowKeys};
	}
	,onClick:function(e,reactid) {
		if (this.hoveringTag && this.props.onClickTag) {
			this.props.onClickTag(e,reactid,this.hoveringTag);
		}
	}
	,onLeaveTag:function(e,tid) {
		this.hovering=null;
		this.hoveringTag=null;
		var leavingTag=null;
		if (this.state.tags[tid]) leavingTag=this.state.tags[tid].mid;
		e.target.style.cursor="";
		if (this.props.onLeaveTag) {
			this.props.onLeaveTag(e,tid,leavingTag);
		}
	}
	,onEnterTag:function(e,tid) {
		this.hovering=e.target;
		this.hoveringTag=null;	
		if (this.state.tags[tid]) this.hoveringTag=this.state.tags[tid].mid;
		if (this.props.onEnterTag) {
			this.props.onEnterTag(e,tid,this.hoveringTag);
		}
		e.target.style.cursor="pointer";
	}
	,render:function(){
		var props=update(this.props,{$merge:{tags:this.state.tags,
			selectable:this.props.selectable,
			allowKeys:this.state.allowKeys,
			onEnterTag:this.onEnterTag,
			onLeaveTag:this.onLeaveTag,
			onFocus:this.props.onFocus,
			onBlur:this.props.onBlur,
			onClick:this.onClick,
			selections:this.props.selections,
			onKeyPress:this.onKeyPress}});
		delete props.markups;//hide markups from flattenview
		return E(SelectableView,props);
	}

});

module.exports=InterlineView;
},{"./keyboard_mixin":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js","./selectableview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markup2tag.js":[function(require,module,exports){
var React=require("react");
var E=React.createElement;
var typedef=require("./typedef");
var markuputil=require("./markuputil");
var MarkupSelector=require("./markupselector");

/**
	put no conflict markup in object markupActivated
*/
var defaultActiveMarkups=function(gbo,markupActivated) {
	for (var start in gbo){
		var markupcount= Object.keys(gbo[start]).length;
		for (var mid in gbo[start]){
			if (typeof markupActivated[mid]==="undefined") {
				markupActivated[mid]= markupcount===1? true:false;
			}
		}
	}
}

var allDisabled=function(markups,markupActivated) {
	for (var mid in markups) {
		if (markupActivated[mid]) return false;
	}
	return true;
}

var createMarkupSelector=function(start,context,markups) {
	var selector=E(MarkupSelector,{markups:markups,context:context,key:"selector"} );
	return {s:start,l:0,before:selector};
}


var markup2tag=function(markups,context) {
	var gbo=markuputil.groupByOffset(markups);
	defaultActiveMarkups(gbo,context.markupActivated);
	var out=[];
	var createTag=function(mid,showSuper) {
			var m=markups[mid], cls=cls||m.type;
			var Component=typedef[m.type].Component;
			var getStyle=typedef[m.type].getStyle||function(){return {}};
			//console.log("style",context.hovering,getStyle(mid,context),mid)
			var before=E(Component,
							{ mid:mid,showSuper:showSuper,
								hovering:context.hovering===mid,
								editing:context.editing===mid,
								markup:m,context:context,key:mid,
								activated:context.markupActivated[mid]
							}
					);
			return {s:start, l:m.l, mid:mid, before: before, style:getStyle(m,mid,context)};
	}
	for (var i in gbo) {
		var start=parseInt(i), markups=gbo[i];
		var hovering=markups[context.hovering]?context.hovering:null; //this group has hovering markup
		var editing=markups[context.editing]?context.editing:null;    //this group has editing markup
		var markupcount=Object.keys(markups).length;
		var showSuper=true;
		if (!context.editing && markupcount>1 && allDisabled(markups,context.markupActivated )) {
			showSuper=false;
			out.push(createMarkupSelector(start,context,markups));
		}
		if (editing||hovering) {
			out.push(createTag(editing||hovering,showSuper));
		} else {
			for (var mid in markups) {
				out.push(createTag(mid, showSuper && (context.markupActivated[mid]||markupcount===1)));
			}
		}
	}
	
	return out;
}


module.exports=markup2tag;
},{"./markupselector":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markupselector.js","./markuputil":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js","./typedef":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\typedef.js","react":"react"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markupselector.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;
var IL=require("./interline");
var handlerStyle={borderStyle:"solid",borderColor:"gray",fontSize:"50%",color:"silver",borderWidth:2
			,borderRadius:"20%",cursor:"pointer",verticalAlign:"top",
			backgroundColor:"drakgray",height:"0.5em",width:"0.5em"};
var handlerStyle_hover=update(handlerStyle,{$merge:{borderColor:"brown"}});

var MarkupSelector=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		markups:PT.object.isRequired
		,context:PT.object.isRequired
	}
	,onClick:function(e) {
		var mid=e.target.dataset.mid;
		var act=this.props.activated?"deactivate":"activate_edit";
		this.props.context.action(act,mid);
	}
	,renderHandlers:function() {
		var out=[];
		for (var mid in this.props.markups) {
			var m=this.props.markups[mid];
			var hovering=this.props.context.hovering===mid;
			var style=hovering?handlerStyle_hover:handlerStyle;
			out.push(E("span",{"data-mid":mid,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,
			onClick:this.onClick, key:mid,style:style},m.username||m.author));
		}
		return out;
	}
	,onMouseEnter:function(e) {
		clearTimeout(this.leavetimer);
		var mid=e.target.dataset.mid;
		this.props.context.action("enter",mid);
	}
	,onMouseLeave:function() {
		var action=this.props.context.action;
		action("leave");//have to leave immediately as parent might be destroyed
	}
	,renderHandler:function() {
		if (this.props.markups[this.props.context.hovering]) {
			return E("span",{},this.renderHandlers());
		} else {
			var mid=Object.keys(this.props.markups)[0];
			var markupcount=Object.keys(this.props.markups).length;
			return E("span",{"data-mid":mid,
				style:handlerStyle,onMouseEnter:this.onMouseEnter
				,onMouseLeave:this.onMouseLeave},"+"+markupcount);
		}
		
	}
	,render:function() {
		return E(IL.Container,{},
				 E(IL.Super, {},this.renderHandler() )
			);
	}
});
module.exports=MarkupSelector;
},{"./interline":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js":[function(require,module,exports){
/**
	input : { markupid:{markup}, markupid:{markup} }
	return { offset: { markupid:{markup} , markupid:{markup}] }	
*/
var groupByOffset=function(markups) {
	var out={};
	for (var id in markups) {
		var m=markups[id];
		if (!out[m.s]) out[m.s]={};
		out[m.s][id]=m;
	}
	return out;
}

var	hasOverlap=function(start,len,markups){
	for (var i in markups) {
		var m=markups[i];
		if (!(m[0]>start+len || m[0]+m[1]<start)) return true;
	}
	return false;
}

var nmarkupAtPos=function(markups,offset) {
    return markups.reduce(function(prev,m){return (m.s===offset)?prev+1:prev },0);
}

// create minimum spans for overlap markup.
// each span holds an array of markups id in props.mid
// this.spreaded is the starting offset of the text snippnet in the span
// markup other than _select_ (the build in classname for selection)
// with len==0 is same as len==1

var spreadMarkup=function(markups){
	if (!markups) return [];
	var out=[];
	for (var n in markups) {
		var m=markups[n];
		for (var j=m.s;j<m.s+m.l+1;j++) {
			if ( (!m.l && m.type!=="_selected_") || j<m.s+m.l ) {
				if (!out[j]) out[j]=[];
				out[j].push(n);
			}
		}
	}
	for (var i=0;i<out.length;i++) {
		out[i]&&out[i].sort(function(a,b){return a-b});
	}
	return out;
}

module.exports={groupByOffset:groupByOffset,nmarkupAtPos:nmarkupAtPos,
	spreadMarkup:spreadMarkup,hasOverlap:hasOverlap};
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\edit.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;
var containerStyle={
	borderBottom:"solid 0.1em green"
}
var inputStyle={
	  backgroundColor: "transparent",
//		textDecoration: "underline",
    outline:0,
    border:0,
    fontSize:"100%",
    fontFamily:"inherit",
    color: "inherit"
}
var RevisionEdit=React.createClass({
	displayName:"RevisionEdit"
	,mixins:[PureRenderMixin]
	,propTypes:{
		editing:PT.bool.isRequired
		,action:PT.func.isRequired
	}
	,setCaret:function() {
		var that=this;
		setTimeout(function(){
			if (!that.refs.input) return;//input destroyed
			var input=that.refs.input.getDOMNode();	
			input.focus();
			clearTimeout(this.blurtimer);
			var val=input.value;
			input.setSelectionRange(val.length,val.length);
		},100);
	}
	,onKeyPress:function(e) {
		if (e.key=="Enter") {
			var input=this.refs.input.getDOMNode();
			this.props.action("setText",input.value);	
		}
	}
	,componentDidMount:function() {
		this.setCaret();
	}
	,componentDidUpdate:function() {
		if (this.props.editing) this.setCaret();
	}	
	,onFocus:function() {
		if (!this.props.editing)  return;
		clearTimeout(this.blurtimer);
	}
	,onBlur:function() {
		if (!this.props.editing)  return;
		var that=this;
		clearTimeout(this.blurtimer);
		this.blurtimer=setTimeout(function(){
			that.props.action("leave");
		},500);
	},
	render:function() {
		var size=this.props.markup.l||1;
		return E("span",{style:containerStyle},E("input",{ref:"input",size:size,style:inputStyle,
			onKeyPress:this.onKeyPress,onFocus:this.onFocus,onBlur:this.onBlur,
			defaultValue:this.props.markup.t}));
	}
});
module.exports=RevisionEdit;
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editcontrol.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var style={fontSize:"35%",borderStyle:"solid",borderColor:"gray",borderRadius:"25%",cursor:"pointer"};
var RevisionEditControl=React.createClass({
	displayName:"RevisionEditControl"
	,mixins:[PureRenderMixin]
	,propTypes:{
		editing:PT.bool.isRequired
		,action:PT.func.isRequired
	}
	,caretprev:function() {
		this.props.action("adjustlen",-1);
	}
	,caretnext:function() {
		this.props.action("adjustlen",1);
	}
	,render:function() {
		return (E("span",{},
				E("a",{key:"prev",onClick:this.caretprev,style:style},"←")
				,E("a",{key:"next",onClick:this.caretnext,style:style},"→")
			)
		);
	}
});

module.exports=RevisionEditControl;
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editmode.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var IL=require("../interline");
var RevisionNote=require("./note");
var RevisionEdit=require("./edit");
var RevisionEditControl=require("./editcontrol");
var caretPos=require("../caretpos");

var RevisionEditMode=React.createClass({
	displayName:"RevisionEditMode"
	,mixins:[PureRenderMixin]
	,style:{display:"none"}
	,propTypes:{
		markup:PT.object.isRequired
		,mid:PT.string.isRequired
		,context:PT.object.isRequired
	}
	,getInitialState:function(){
		return {editNote:false};
	}
	,adjustlen:function(direction) {
		var m=this.props.markup;
		var caretpos=caretPos.create(this.props.context.text.substr(m.s));
		var newlen=direction<0?caretpos.prev(m.l):caretpos.next(m.l);
		this.action("setLength",newlen);
	}
	,action:function(act,p1) {
		if (act==="editNote") {
			console.log("editnote")
			this.setState({editNote:true});
		} else if (act==="leaveNote") {
			console.log("leavenote")
			this.setState({editNote:false});
		} else if (act==="leave") {
			if (!this.state.editNote) {
				this.props.context.action("leave",this.props.mid);
			}
		} else if (act==="setLength") {
			this.props.context.action("setMarkup",this.props.mid,"l",parseInt(p1)||0);
		} else if (act==="setText") {
			this.props.context.action("setMarkup",this.props.mid,"t",p1);
			this.props.context.action("activate",this.props.mid);
			this.props.context.action("leave",this.props.mid);
		} else if (act==="setNote") {
			this.props.context.action("setMarkup",this.props.mid,"note",p1);
		} else if (act==="adjustlen") {
			this.adjustlen(p1);
		}
	}
	,renderNote:function() {
		return E(RevisionNote,
				{note:this.props.markup.note,action:this.action,editing:this.state.editNote
					,mid:this.props.mid,activated:this.props.activated},
				this.props.markup.note);
	}
	,render:function() {
		var props=update(this.props,{$merge:{
			editing:!this.state.editNote,action:this.action}
		});
		return E(IL.Container,{}
			,E(IL.Super, {}, E(RevisionEditControl,props) )
			,E(IL.Embed, {}, E(RevisionEdit,props))
			,E(IL.Sub  , {}, this.renderNote() )
			);
	}
});
module.exports=RevisionEditMode;
},{"../caretpos":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\caretpos.js","../interline":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js","./edit":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\edit.js","./editcontrol":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editcontrol.js","./note":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\note.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\index.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var IL=require("../interline");
var RevisionNote=require("./note");
var RevisionEditMode=require("./editmode");
var redlinethrough=require("./redlinethrough");
var authorButtonStyle={
			borderStyle:"solid",borderColor:"gray",fontSize:"50%",color:"silver",borderWidth:2
			,borderRadius:"20%",cursor:"pointer",verticalAlign:"top",
			backgroundColor:"drakgray",height:"0.5em",width:"0.5em"};

var AuthorButton=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		action:PT.func.isRequired
		,mid:PT.string.isRequired
		,activated:PT.bool.isRequired
		,editable:PT.bool.isRequired
	}
	,activatedStyle: update(authorButtonStyle,{$merge:{borderColor:"green"}})
	,getInitialState:function() {
		return {style:{}};
	}
	,onMouseLeave:function(e) {
		this.props.action("leave",this.props.mid);
	}
	,onClick:function(e) {
		var act=this.props.activated?"deactivate":"activate_edit";
		this.props.action(act,this.props.mid);
	}
	,onMouseEnter:function(e) {
		this.props.action("enter",this.props.mid);
	}
	,render:function(){
		return E("span",{style:this.props.activated?this.activatedStyle:authorButtonStyle,
			onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.onClick},
			this.props.children);
	}
});


var Revision=React.createClass({
	displayName:"Revision"
	,mixins:[PureRenderMixin]
	,style:{display:"none"}
	,propTypes:{
		markup:PT.object.isRequired
		,mid:PT.string.isRequired
		,context:PT.object.isRequired
		,activated:PT.bool
		,showSuper:PT.bool
	}
	,renderAuthor:function() {
		if (this.props.showSuper) {
			return E(AuthorButton,
				{action:this.props.context.action,mid:this.props.mid
				,activated:this.props.activated,editable:this.props.editable||false},
				this.props.markup.username||this.props.markup.author)
		};
	}
	,renderNote:function() {
		if(this.props.hovering) {
			return E(RevisionNote,
				{editing:false,action:this.props.context.action,note:this.props.markup.note,
				 mid:this.props.mid},
				this.props.markup.note);
		};
	}
	,getNewTextStyle:function() {
		var style={display:"none"};
		if (this.props.hovering) style={borderBottom:"solid 0.1em green",display:"inline"};
		else if (this.props.activated) style={display:"inline"};
		return style;
	}
	,render:function() {
		if (this.props.context.editing===this.props.mid) {
			return E(RevisionEditMode,this.props);
		} else {
		 return E(IL.Container,{}
			,E(IL.Super, {}, this.renderAuthor() )
			,E(IL.Embed, {style:this.getNewTextStyle() }, this.props.markup.t)
			,E(IL.Sub  , {}, this.renderNote() )
			);
		}
	}
});
var linethroughstyle={background:"url("+redlinethrough+") repeat center"};
//var linethroughstyle={textDecoration:"line-through"};
var getOldTextStyle=function(markup,mid,context) {
	var style={};
	if (context.hovering===mid) style=linethroughstyle;
	else if (context.editing===mid) style=linethroughstyle;
	else if (context.markupActivated[mid]) style={display:"none"};
	if (markup.l==0) style={};
	return style;
}
module.exports={Component:Revision, getStyle:getOldTextStyle } ;
},{"../interline":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js","./editmode":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editmode.js","./note":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\note.js","./redlinethrough":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\redlinethrough.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\note.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var textareaStyle={top:"0.6em",lineHeight:"100%",fontSize:"75%",position:"absolute",outline:"none",borderRadius:"5px"};
var staticStyle={fontSize:"75%",cursor:"pointer"};
var RevisionNote=React.createClass({
	displayName:"RevisionNote"
	,mixins:[PureRenderMixin]
	,propTypes:{
		action:PT.func.isRequired
		,mid:PT.string.isRequired
		,editing:PT.bool.isRequired
		,note:PT.string.isRequired
	}
	,onBlur:function(){
		this.props.action("setNote",this.refs.note.getDOMNode().value);
		this.props.action("leaveNote");
	}
	,componentDidUpdate:function() {
		if (!this.props.editing) return;
		var that=this;
		setTimeout(function(){
				that.refs.note.getDOMNode().focus();
		},200);
	}
	,onClick:function() {
		this.props.action("editNote");
	}
	,render:function(){

		if (this.props.editing) {
			return E("textarea",
				{rows:4,cols:20,ref:"note",onBlur:this.onBlur,style:textareaStyle,
				defaultValue:this.props.note}
			);
		} else{
			return E("span",{style:staticStyle,onClick:this.onClick},this.props.note||"...");	
		}
	}
});

module.exports=RevisionNote;
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\redlinethrough.js":[function(require,module,exports){
var redline="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAADtHCT///+jR4VkAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAXSURBVDjLY2AYBcMWhKIBqgiMglGAAAAfDRqRFmX93gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wNS0yMFQwNzo1NTo0OCswMjowMCznXDoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDUtMjBUMDc6NTU6NDgrMDI6MDBduuSGAAAAAElFTkSuQmCC";
//var messy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAKJSURBVGhD1ZhBbtwwDEWdK3Td7Nr7H6jLrpsrTAV8g6OhSJqkKI/yFkWKSvR7jAdB+vF4PI7vzHYBX5+/z6+O48ffP+dXOlsE9NI9+wZoxoRHHdwXcCkN/OpgbYBTGkTVwZIA+51m/5rzJsoCbGlQqw4KAkR1JrdCHSQDPNKN8VihOvAGiMbEW9SBFRCVBuxWwlt8rjaHBxjStsrMyu1NEeLAl4CcROLWpTFNoJPazLUf4h5berzbnzcmxwI0CfEBUeMep33DGzDalEsTNMRz/iLA421IO42JfpTzrhwgOvUTC6UBG+gfwgNGM5pVLg3S6uAM0LwXSYNJdVz/+PfzF/7uYV4a5NTFbV4HVEmDqLooTbTrPKBWtyekrnmPt86Add4Nv7rorZ3HYe8Pshwz6vZO6fySAL9N1LvRX2mHiwNCQuzwpXqD2bc/ywJCNqOHjTG8ICC6yJA9G95gV6YCouoNuhJV185nAi63ouG0D+0lFpBWb3jsQ+ogENBP93sD235mL9cBia0wDPsZdWAFzE8HmMPuzu8FqAH9A9LTQR9QtRRCCChUB6M0KBnOA8rtGyygaix4Bnw7dXAG1Nozb2JVAD1vhTpm1i6o5xkwM1fz7hnPpOmX8vydOBfgUWcUljTyvxMzj1z/CMa2ac7Ol/+VcEoUqoe+G2LVy4f4Hi63q22kv0Vn5J8Dd+L8BpIeO/8M0BC770fTsAI2USfEd0QNcNqLQyexl8WeKAfQIZq1QnQGEhMCoq7lb5dTAM/lAcblctEEvZ4rYAdpoImpH+J9sHe6b8D4Mouvw44BTnWwV0DiE7hFQGjljHcGjN4Nvzp4T8DMyhl3ByTecptbA8R3xomcehz/AYPHXX9v/QOyAAAAAElFTkSuQmCC";
//var mesh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAKCAIAAAARhxgeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAVSURBVBhXYwCC////gzEEkM5jYAAAFmgd41TlhHAAAAAASUVORK5CYII=";
module.exports=redline;
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js":[function(require,module,exports){
/*
	Select text by mouse or keyboard
*/
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var selectedTextStyle={"backgroundColor":"highlight",color:"black"};

var KeyboardMixin=require("./keyboard_mixin");
var selection=require("./selection");
var FlattenView=require("./flattenview");
var textrange=require("./textrange");
var selection=require("./selection");
var SelectableView=React.createClass({
	mixins:[PureRenderMixin,KeyboardMixin]
	,propTypes:{
		selectable: PT.oneOf(['no', 'single', 'multiple'])
		,showCaret:PT.bool
		,onSelectText: PT.func
		,tags:PT.array
		,selections:PT.array
		,allowKeys:PT.array
		,onMouseUp:PT.func
		,onSpanEnter:PT.func,onSpanLeave:PT.func
	}
	,updateSelection:function(tags) {
		var seltags=this.tagFromSel(tags||this.state.tags,this.ranges.get());
		this.setState({tags:seltags});
	}
	,setSelections:function(props,tags) {
		if (props.selections) {
			this.ranges.set(props.selections);
			return this.updateSelection(tags);
		}
	}
	,componentWillMount:function() {
		this.ranges=textrange.create();
		this.setSelections(this.props);
	}
	,getInitialState:function(){
		var allowkeys=KeyboardMixin.arrowkeys;
		if (this.props.allowKeys) allowkeys=update(allowkeys,{$push:this.props.allowKeys});
		return {allowkeys:allowkeys,tags:this.props.tags};
	}
	,getDefaultProps:function(){
		return {showCaret:true,selectable:"multiple",tags:[]};
	}
	,componentWillReceiveProps:function(nextProps) {
		var seltags=nextProps.tags;
		if (this.props.selectable!=="no") {
			seltags=this.tagFromSel(seltags,this.ranges.get());	
			this.setState({tags:seltags});
		}
		this.setSelections(nextProps,seltags);
	}
	,componentDidMount:function() {
		//turn contentEditable on for caret, cannot set in render as React will give warning
		if (this.props.showCaret) this.getDOMNode().contentEditable=true;
	}
	,tagFromSel:function(tags,sels) {
		if (!tags)return;
		tags=tags.filter(function(m){ return m.type!=="_selected_";});
		sels.map(function(sel){
			if (sel[1]>0) tags.push({s:sel[0],l:sel[1],type:"_selected_",style:selectedTextStyle});
		});
		return tags;
	}
	,markSelection:function(start,len,selectedtext,params){
		var selectable=this.props.selectable;
		if (selectable==="no") return;

		if (params.ctrlKey&&selectable==="multiple") {
			this.ranges.add(start,len,selectedtext)	
		} else {
			this.ranges.set([[start,len,selectedtext]]);	
		}

		if(this.props.onSelectText){
			var cancel=this.props.onSelectText(start,len,selectedtext,params,this.ranges.get());
			if (cancel) {
					this.ranges.remove(start,len,selectedtext);
			};
		}

		this.updateSelection(this.state.tags);
	}
	,onDoubleClick:function(e) {
		this.onMouseUp(e);
	}
	,removeBlankInselection:function(sel,text) {
		if (text.trim()==="") return;
		var s=0,c=text.charCodeAt(0);
		while (c<0x33 || (c>=0xf0b && c<=0xf0e)) {
			sel.start++;
			sel.len--;
			text=text.substr(1);
			c=text.charCodeAt(0);
		}

		var e=e=text.length-1;
		c=text.charCodeAt(text.length-1);
		while (c<0x33 || (c>=0xf0b && c<=0xf0e)) {
			sel.len--;
			text=text.substr(0,text.length-2);
			c=text.charCodeAt(text.length-1);
		}
		return text;
	}
	,onMouseUp:function(e) {
		if (e.target.nodeName!="SPAN") return;
		var sel=selection.get(this.getDOMNode());
		if (!sel || isNaN(sel.start))return;

		if (sel.len) sel.selection.empty();
		var text=this.props.text.substr(sel.start,sel.len||1);
		if (text.charCodeAt(0)>=0xD800 ) { //surrogate
			text=this.props.text.substr(sel.start,sel.len||2);
		}
		text=this.removeBlankInselection(sel,text);
		var cancel=sel&&this.markSelection(sel.start,sel.len,text,
			{ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,sender:this.props.id});
		if (!cancel) this.selection=sel;
	}
	,onFocus:function(e){
	}
	,onBlur:function(e){
	}	
	,render:function(){
		var props=update(this.props,{$merge:{
			onMouseUp:this.onMouseUp
			,onClick:this.props.onClick
			,onSpanEnter:this.props.onSpanEnter
			,onSpanLeave:this.props.onSpanLeave
			,onKeyDown:this.props.onKeyDown||this.onkeydown
			,onKeyUp:this.props.onKeyUp||this.onkeyup
			,onKeyPress:this.props.onKeyPress||this.onkeypress
			,onDoubleClick:this.onDoubleClick
			,onFocus:this.props.onFocus||this.onFocus
			,onBlur:this.props.onBlur||this.onBlur			
			,tags:this.state.tags
		}});
		
		return E(FlattenView,props);
	}
});
module.exports=SelectableView;
},{"./flattenview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\flattenview.js","./keyboard_mixin":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js","./selection":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selection.js","./textrange":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\textrange.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selection.js":[function(require,module,exports){
/**
    Return text position at system caret 
    @param {object} DOM node holding the text
    @param {object} baseNode or extendNode node return by system getSelection
    @param {number} offset from the selected node
*/
var getPos=function(rootele,node,off){
    if (!node) return;
    while (node && node.parentElement!==rootele) node=node.parentElement;
    while (node && !node.dataset.start) node=node.nextSibling;
    if (!node) return -1;

    var pos=parseInt(node.dataset.start)+off;
    return pos;
}
/**
    Return the span and offset containing the pos (return by getPos)
    @param {array} spans
    @param {number} text position
*/
var posInSpan=function(children,pos) {
    var lasti;
	for (var i=0;i<children.length;i++) {
        if (!children[i].dataset.start)continue;
		var spanstart=parseInt(children[i].dataset.start);
		if (spanstart>pos) {
			laststart=parseInt(children[lasti].dataset.start);
			return {idx:i-1,element:children[lasti], offset:pos-laststart};
		}
        lasti=i;
	}
	laststart=parseInt(children[children.length-1].dataset.start);
	return {idx:children.length-1,element:children[children.length-1], offset:pos-laststart };
}
/**
    Set Caret to a saved selection
*/
var restore=function(domnode,oldsel) {
    if (!oldsel) return;
	var span=posInSpan(domnode.childNodes,oldsel.start+oldsel.len)
    if (!span) return;
    if (!span.element.childNodes[0])return;

    var range = document.createRange();
    if (span.element.nodeType!==3 && span.element.childNodes[0].nodeType===3) {
    	span.element=span.element.childNodes[0];
    }
    if (span.offset>span.element.length) {
        range.setStart(span.element, 0);
        range.setEnd( span.element, 0);
    } else {
        range.setStart(span.element ,span.offset);
        range.setEnd( span.element,span.offset);        
    }
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
/**
    Get the start and len of current selection
    @param {object} root domnode holding the text
*/
var get=function(rootele) {
    var sel=window.getSelection();
    if (!sel.baseNode) return;

    var off=getPos(rootele,sel.anchorNode,sel.anchorOffset);
    var off2=getPos(rootele,sel.focusNode,sel.focusOffset);

    var p1=sel.anchorNode.parentElement,p2=sel.focusNode.parentElement;
    if (p1.nodeName!="SPAN"||p2.nodeName!="SPAN") return;

    var start=off,len=off2-off;
    if (len<0) {
        start=off2;
        len=off-off2;
    }
	return {start:start,len:len, selection:sel};
}

module.exports={get:get,restore:restore};
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\textrange.js":[function(require,module,exports){
/**
	Combining multiple range
*/
var create=function() {
	var textrange={};
	var _ranges=[];

	var removeOverlap=function(start,len) {
		var overlap=[];
		_ranges=_ranges.filter(function(r){
			if (r[0]>start+len || r[0]+r[1]<start) return true;
			else {
				overlap.push(r);
				return false;
			}
		});
		return overlap;
	}
	var combine=function(ranges) {
		var start=Number.MAX_VALUE,end=0;
		var text=[];
		for (var i=0;i<ranges.length;i++) {
			var r=ranges[i];

			for (var j=r[0];j<r[0]+r[1];j++) {
				if (!text[j]) text[j]=r[2][j-r[0]]||"";
			}
			if (r[0]<start) start=r[0];
			if (r[0]+r[1]>end) end=r[0]+r[1];
		}
		var t="";
		for (var i=start;i<end;i++) t+=text[i];
		return [start,end-start,t];
	}

	var find=function(start,length) {
		for (var i=0;i<_ranges.length;i++) {
			var r=_ranges[i];
			if (r[0]===start && r[1]===length)return i;
		}
		return -1;
	}
	var add=function(start,len,text) {
		var text=text||"";

		var same=find(start,len);
		if (same>-1) {
			_ranges.splice(same,1);
			return ;
		}
		
		var overlap=removeOverlap(start,len);

		if (overlap.length) {
			overlap.push([start,len,text]);
			var combined=combine(overlap);
			_ranges.push( combined );
		} else {
			_ranges.push([start,len,text]);	
		}
		_ranges.sort(function(s1,s2){ //sort by start and len
			return (s1[0]==s2[0])?(s1[1]-s2[1]):(s1[0]-s2[0]);
		});
	}
	var get=function() {
		return _ranges;
	}
	var removeAll=function() {
		_ranges=[];
	}
	var remove=function(start,len,text) {
		var idx=find(start,len);
		if (idx>-1) {
			_ranges.splice(idx,1);
		}
	}
	var set=function(ranges) {
		removeAll();
		for (var i=0;i<ranges.length;i++) {
			var r=ranges[i];
			add(r[0],r[1],r[2]);
		}
	}
	textrange.add=add;
	textrange.get=get;
	textrange.removeAll=removeAll;
	textrange.remove=remove;
	textrange.set=set;
	textrange.find=find;

	return textrange;
}
var markupInRange=function(markups,ranges) {
	if (!ranges || !ranges.length) return [];
	if (typeof ranges[0]==="number") ranges=[ranges];
	if (ranges.length==0) return [];
	var out=[];
	for (var j=0;j<markups.length;j++) {
		var m=markups[j];
		for (var i=0;i<ranges.length;i++) {
			var r=ranges[i];
			if (m.s>=r[0] && m.s+m.l<=r[0]+r[1] && out.indexOf(m)===-1) {
				out.push(m);
			}
		};
	};
	return out;
}
module.exports={create:create, markupInRange:markupInRange };
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\typedef.js":[function(require,module,exports){
var revision=require("./revision");
module.exports={"rev":revision};
},{"./revision":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\index.js"}],"C:\\ksana2015\\node_modules\\ksana2015-segnav\\index.js":[function(require,module,exports){
var React=require("react/addons");

var E=React.createElement;
var PT=React.PropTypes;
var SegNav=React.createClass({
	mixins:[React.addons.PureRender]
	,propTypes:{
		"segpat":PT.string
		,"value":PT.string
		,"segs":PT.array.isRequired
		,"onGoSegment":PT.func
	}
	,getInitialState:function() {
		return {segs:this.props.segs};
	}
	,componentWillMount:function() {
		this.btn=this.props.button||"button";
		if (this.props.segpat) {
			var regex=new RegExp(this.props.segpat);
			var segnames={};
			this.props.segs.forEach(function(seg){
				var m=seg.match(regex);
				if (m && !segnames[m[1]]) segnames[m[1]]=true;
			});
			var segs=Object.keys(segnames);
			var segnow=segs.indexOf(this.props.value)||0;
			this.setState({segs:segs,segnow:segnow});
		}
	}
	,goSeg:function(idx) {
		this.setState({segnow:idx});
		this.refs.seg.getDOMNode().value=this.state.segs[idx];
		this.props.onGoSegment&&this.props.onGoSegment(this.state.segs[idx]);
	}
	,prev:function() {
		var segnow=this.state.segnow;
		if (segnow>0) segnow--;
		this.goSeg(segnow);
	}
	,next:function(){
		var segnow=this.state.segnow;
		if (segnow<this.state.segs.length-1) segnow++;
		this.goSeg(segnow);
	}
	,onChange:function(e) {
		var seg=e.target.value;
		var idx=this.state.segs.indexOf(seg);

		clearTimeout(this.timer);
		this.timer=setTimeout(function(){
			if (idx>-1) this.goSeg(idx);
			else {
				this.refs.seg.getDOMNode().value=this.state.segs[this.state.segnow];
			}
		}.bind(this),1000);
	}
	,render : function() {
		var segname=this.state.segs[this.state.segnow];
		return E("span",null,
			E(this.btn,{onClick:this.prev,disabled:this.state.segnow==0},"←"),
			E("input",{ref:"seg",defaultValue:segname,onChange:this.onChange}),
			E(this.btn,{onClick:this.next,disabled:this.state.segnow==this.state.segs.length-1},"→")
		);
	}
})
module.exports=SegNav;
},{"react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\downloader.js":[function(require,module,exports){

var userCancel=false;
var files=[];
var totalDownloadByte=0;
var targetPath="";
var tempPath="";
var nfile=0;
var baseurl="";
var result="";
var downloading=false;
var startDownload=function(dbid,_baseurl,_files) { //return download id
	var fs     = require("fs");
	var path   = require("path");

	
	files=_files.split("\uffff");
	if (downloading) return false; //only one session
	userCancel=false;
	totalDownloadByte=0;
	nextFile();
	downloading=true;
	baseurl=_baseurl;
	if (baseurl[baseurl.length-1]!='/')baseurl+='/';
	targetPath=ksanagap.rootPath+dbid+'/';
	tempPath=ksanagap.rootPath+".tmp/";
	result="";
	return true;
}

var nextFile=function() {
	setTimeout(function(){
		if (nfile==files.length) {
			nfile++;
			endDownload();
		} else {
			downloadFile(nfile++);	
		}
	},100);
}

var downloadFile=function(nfile) {
	var url=baseurl+files[nfile];
	var tmpfilename=tempPath+files[nfile];
	var mkdirp = require("./mkdirp");
	var fs     = require("fs");
	var http   = require("http");

	mkdirp.sync(path.dirname(tmpfilename));
	var writeStream = fs.createWriteStream(tmpfilename);
	var datalength=0;
	var request = http.get(url, function(response) {
		response.on('data',function(chunk){
			writeStream.write(chunk);
			totalDownloadByte+=chunk.length;
			if (userCancel) {
				writeStream.end();
				setTimeout(function(){nextFile();},100);
			}
		});
		response.on("end",function() {
			writeStream.end();
			setTimeout(function(){nextFile();},100);
		});
	});
}

var cancelDownload=function() {
	userCancel=true;
	endDownload();
}
var verify=function() {
	return true;
}
var endDownload=function() {
	nfile=files.length+1;//stop
	result="cancelled";
	downloading=false;
	if (userCancel) return;
	var fs     = require("fs");
	var mkdirp = require("./mkdirp");

	for (var i=0;i<files.length;i++) {
		var targetfilename=targetPath+files[i];
		var tmpfilename   =tempPath+files[i];
		mkdirp.sync(path.dirname(targetfilename));
		fs.renameSync(tmpfilename,targetfilename);
	}
	if (verify()) {
		result="success";
	} else {
		result="error";
	}
}

var downloadedByte=function() {
	return totalDownloadByte;
}
var doneDownload=function() {
	if (nfile>files.length) return result;
	else return "";
}
var downloadingFile=function() {
	return nfile-1;
}

var downloader={startDownload:startDownload, downloadedByte:downloadedByte,
	downloadingFile:downloadingFile, cancelDownload:cancelDownload,doneDownload:doneDownload};
module.exports=downloader;
},{"./mkdirp":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\mkdirp.js","fs":false,"http":false,"path":false}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\html5fs.js":[function(require,module,exports){
/* emulate filesystem on html5 browser */
var get_head=function(url,field,cb){
	var xhr = new XMLHttpRequest();
	xhr.open("HEAD", url, true);
	xhr.onreadystatechange = function() {
			if (this.readyState == this.DONE) {
				cb(xhr.getResponseHeader(field));
			} else {
				if (this.status!==200&&this.status!==206) {
					cb("");
				}
			}
	};
	xhr.send();
}
var get_date=function(url,cb) {
	get_head(url,"Last-Modified",function(value){
		cb(value);
	});
}
var get_size=function(url, cb) {
	get_head(url,"Content-Length",function(value){
		cb(parseInt(value));
	});
};
var checkUpdate=function(url,fn,cb) {
	if (!url) {
		cb(false);
		return;
	}
	get_date(url,function(d){
		API.fs.root.getFile(fn, {create: false, exclusive: false}, function(fileEntry) {
			fileEntry.getMetadata(function(metadata){
				var localDate=Date.parse(metadata.modificationTime);
				var urlDate=Date.parse(d);
				cb(urlDate>localDate);
			});
		},function(){
			cb(false);
		});
	});
}
var download=function(url,fn,cb,statuscb,context) {
	 var totalsize=0,batches=null,written=0;
	 var fileEntry=0, fileWriter=0;
	 var createBatches=function(size) {
		var bytes=1024*1024, out=[];
		var b=Math.floor(size / bytes);
		var last=size %bytes;
		for (var i=0;i<=b;i++) {
			out.push(i*bytes);
		}
		out.push(b*bytes+last);
		return out;
	 }
	 var finish=function() {
		 rm(fn,function(){
				fileEntry.moveTo(fileEntry.filesystem.root, fn,function(){
					setTimeout( cb.bind(context,false) , 0) ;
				},function(e){
					console.log("failed",e)
				});
		 },this);
	 };
		var tempfn="temp.kdb";
		var batch=function(b) {
		var abort=false;
		var xhr = new XMLHttpRequest();
		var requesturl=url+"?"+Math.random();
		xhr.open('get', requesturl, true);
		xhr.setRequestHeader('Range', 'bytes='+batches[b]+'-'+(batches[b+1]-1));
		xhr.responseType = 'blob';
		xhr.addEventListener('load', function() {
			var blob=this.response;
			fileEntry.createWriter(function(fileWriter) {
				fileWriter.seek(fileWriter.length);
				fileWriter.write(blob);
				written+=blob.size;
				fileWriter.onwriteend = function(e) {
					if (statuscb) {
						abort=statuscb.apply(context,[ fileWriter.length / totalsize,totalsize ]);
						if (abort) setTimeout( cb.bind(context,false) , 0) ;
				 	}
					b++;
					if (!abort) {
						if (b<batches.length-1) setTimeout(batch.bind(context,b),0);
						else                    finish();
				 	}
			 	};
			}, console.error);
		},false);
		xhr.send();
	}

	get_size(url,function(size){
		totalsize=size;
		if (!size) {
			if (cb) cb.apply(context,[false]);
		} else {//ready to download
			rm(tempfn,function(){
				 batches=createBatches(size);
				 if (statuscb) statuscb.apply(context,[ 0, totalsize ]);
				 API.fs.root.getFile(tempfn, {create: 1, exclusive: false}, function(_fileEntry) {
							fileEntry=_fileEntry;
						batch(0);
				 });
			},this);
		}
	});
}

var readFile=function(filename,cb,context) {
	API.fs.root.getFile(filename, {create: false, exclusive: false},function(fileEntry) {
		fileEntry.file(function(file){
			var reader = new FileReader();
			reader.onloadend = function(e) {
				if (cb) cb.call(cb,this.result);
			};
			reader.readAsText(file,"utf8");
		});
	}, console.error);
}

function createDir(rootDirEntry, folders,  cb) {
  // Throw out './' or '/' and move on to prevent something like '/foo/.//bar'.
  if (folders[0] == '.' || folders[0] == '') {
    folders = folders.slice(1);
  }
  rootDirEntry.getDirectory(folders[0], {create: true}, function(dirEntry) {
    // Recursively add the new subfolder (if we still have another to create).
    if (folders.length) {
      createDir(dirEntry, folders.slice(1),cb);
    } else {
			cb();
		}
  }, cb);
};


var writeFile=function(filename,buf,cb,context){
	var write=function(fileEntry){
		fileEntry.createWriter(function(fileWriter) {
			fileWriter.write(buf);
			fileWriter.onwriteend = function(e) {
				if (cb) cb.apply(cb,[buf.byteLength]);
			};
		}, console.error);
	}

	var getFile=function(filename){
		API.fs.root.getFile(filename, {exclusive:true}, function(fileEntry) {
			write(fileEntry);
		}, function(){
				API.fs.root.getFile(filename, {create:true,exclusive:true}, function(fileEntry) {
					write(fileEntry);
				});

		});
	}
	var slash=filename.lastIndexOf("/");
	if (slash>-1) {
		createDir(API.fs.root, filename.substr(0,slash).split("/"),function(){
			getFile(filename);
		});
	} else {
		getFile(filename);
	}
}

var readdir=function(cb,context) {
	var dirReader = API.fs.root.createReader();
	var out=[],that=this;
	dirReader.readEntries(function(entries) {
		if (entries.length) {
			for (var i = 0, entry; entry = entries[i]; ++i) {
				if (entry.isFile) {
					out.push([entry.name,entry.toURL ? entry.toURL() : entry.toURI()]);
				}
			}
		}
		API.files=out;
		if (cb) cb.apply(context,[out]);
	}, function(){
		if (cb) cb.apply(context,[null]);
	});
}
var getFileURL=function(filename) {
	if (!API.files ) return null;
	var file= API.files.filter(function(f){return f[0]==filename});
	if (file.length) return file[0][1];
}
var rm=function(filename,cb,context) {
	var url=getFileURL(filename);
	if (url) rmURL(url,cb,context);
	else if (cb) cb.apply(context,[false]);
}

var rmURL=function(filename,cb,context) {
	webkitResolveLocalFileSystemURL(filename, function(fileEntry) {
		fileEntry.remove(function() {
			if (cb) cb.apply(context,[true]);
		}, console.error);
	},  function(e){
		if (cb) cb.apply(context,[false]);//no such file
	});
}
function errorHandler(e) {
	console.error('Error: ' +e.name+ " "+e.message);
}
var initfs=function(grantedBytes,cb,context) {
	webkitRequestFileSystem(PERSISTENT, grantedBytes,  function(fs) {
		API.fs=fs;
		API.quota=grantedBytes;
		readdir(function(){
			API.initialized=true;
			cb.apply(context,[grantedBytes,fs]);
		},context);
	}, errorHandler);
}
var init=function(quota,cb,context) {
	navigator.webkitPersistentStorage.requestQuota(quota,
			function(grantedBytes) {
				initfs(grantedBytes,cb,context);
		}, errorHandler
	);
}
var queryQuota=function(cb,context) {
	var that=this;
	navigator.webkitPersistentStorage.queryUsageAndQuota(
	 function(usage,quota){
			initfs(quota,function(){
				cb.apply(context,[usage,quota]);
			},context);
	});
}
var API={
	init:init
	,readdir:readdir
	,checkUpdate:checkUpdate
	,rm:rm
	,rmURL:rmURL
	,getFileURL:getFileURL
	,writeFile:writeFile
	,readFile:readFile
	,download:download
	,get_head:get_head
	,get_date:get_date
	,get_size:get_size
	,getDownloadSize:get_size
	,queryQuota:queryQuota
}
module.exports=API;

},{}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\ksanagap.js":[function(require,module,exports){
var appname="installer";
if (typeof ksana=="undefined") {
	window.ksana={platform:"chrome"};
	if (typeof process!=="undefined" && 
		process.versions && process.versions["node-webkit"]) {
		window.ksana.platform="node-webkit";
	}
}
var switchApp=function(path) {
	var fs=require("fs");
	path="../"+path;
	appname=path;
	document.location.href= path+"/index.html"; 
	process.chdir(path);
}
var downloader={};
var rootPath="";

var deleteApp=function(app) {
	console.error("not allow on PC, do it in File Explorer/ Finder");
}
var username=function() {
	return "";
}
var useremail=function() {
	return ""
}
var runtime_version=function() {
	return "1.4";
}

//copy from liveupdate
var jsonp=function(url,dbid,callback,context) {
  var script=document.getElementById("jsonp2");
  if (script) {
    script.parentNode.removeChild(script);
  }
  window.jsonp_handler=function(data) {
    if (typeof data=="object") {
      data.dbid=dbid;
      callback.apply(context,[data]);    
    }  
  }
  window.jsonp_error_handler=function() {
    console.error("url unreachable",url);
    callback.apply(context,[null]);
  }
  script=document.createElement('script');
  script.setAttribute('id', "jsonp2");
  script.setAttribute('onerror', "jsonp_error_handler()");
  url=url+'?'+(new Date().getTime());
  script.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(script); 
}


var loadKsanajs=function(){

	if (typeof process!="undefined" && !process.browser) {
		var ksanajs=require("fs").readFileSync("./ksana.js","utf8").trim();
		downloader=require("./downloader");
		ksana.js=JSON.parse(ksanajs.substring(14,ksanajs.length-1));
		rootPath=process.cwd();
		rootPath=require("path").resolve(rootPath,"..").replace(/\\/g,"/")+'/';
		ksana.ready=true;
	} else{
		var url=window.location.origin+window.location.pathname.replace("index.html","")+"ksana.js";
		jsonp(url,appname,function(data){
			ksana.js=data;
			ksana.ready=true;
		});
	}
}

loadKsanajs();

var boot=function(appId,cb) {
	if (typeof appId=="function") {
		cb=appId;
		appId="unknownapp";
	}
	if (!ksana.js && ksana.platform=="node-webkit") {
		loadKsanajs();
	}
	ksana.appId=appId;
	var timer=setInterval(function(){
			if (ksana.ready){
				clearInterval(timer);
				cb();
			}
		});
}


var ksanagap={
	platform:"node-webkit",
	startDownload:downloader.startDownload,
	downloadedByte:downloader.downloadedByte,
	downloadingFile:downloader.downloadingFile,
	cancelDownload:downloader.cancelDownload,
	doneDownload:downloader.doneDownload,
	switchApp:switchApp,
	rootPath:rootPath,
	deleteApp: deleteApp,
	username:username, //not support on PC
	useremail:username,
	runtime_version:runtime_version,
	boot:boot
}
module.exports=ksanagap;
},{"./downloader":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\downloader.js","fs":false,"path":false}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\livereload.js":[function(require,module,exports){
var started=false;
var timer=null;
var bundledate=null;
var get_date=require("./html5fs").get_date;
var checkIfBundleUpdated=function() {
	get_date("bundle.js",function(date){
		if (bundledate &&bundledate!=date){
			location.reload();
		}
		bundledate=date;
	});
}
var livereload=function() {
	if (started) return;

	timer1=setInterval(function(){
		checkIfBundleUpdated();
	},2000);
	started=true;
}

module.exports=livereload;
},{"./html5fs":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\html5fs.js"}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\mkdirp.js":[function(require,module,exports){
function mkdirP (p, mode, f, made) {
     var path = nodeRequire('path');
     var fs = nodeRequire('fs');
	
    if (typeof mode === 'function' || mode === undefined) {
        f = mode;
        mode = 0x1FF & (~process.umask());
    }
    if (!made) made = null;

    var cb = f || function () {};
    if (typeof mode === 'string') mode = parseInt(mode, 8);
    p = path.resolve(p);

    fs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                mkdirP(path.dirname(p), mode, function (er, made) {
                    if (er) cb(er, made);
                    else mkdirP(p, mode, cb, made);
                });
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                fs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made)
                    else cb(null, made);
                });
                break;
        }
    });
}

mkdirP.sync = function sync (p, mode, made) {
    var path = nodeRequire('path');
    var fs = nodeRequire('fs');
    if (mode === undefined) {
        mode = 0x1FF & (~process.umask());
    }
    if (!made) made = null;

    if (typeof mode === 'string') mode = parseInt(mode, 8);
    p = path.resolve(p);

    try {
        fs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT' :
                made = sync(path.dirname(p), mode, made);
                sync(p, mode, made);
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat;
                try {
                    stat = fs.statSync(p);
                }
                catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory()) throw err0;
                break;
        }
    }

    return made;
};

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

},{}],"C:\\ksana2015\\node_modules\\reflux\\index.js":[function(require,module,exports){
module.exports = require('./src');

},{"./src":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js"}],"C:\\ksana2015\\node_modules\\reflux\\node_modules\\eventemitter3\\index.js":[function(require,module,exports){
'use strict';

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} once Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Holds the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  if (!this._events || !this._events[event]) return [];
  if (this._events[event].fn) return [this._events[event].fn];

  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
    ee[i] = this._events[event][i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  if (!this._events || !this._events[event]) return false;

  var listeners = this._events[event]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Functon} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
  if (!this._events || !this._events[event]) return this;

  var listeners = this._events[event]
    , events = [];

  if (fn) {
    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
      events.push(listeners);
    }
    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
        events.push(listeners[i]);
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[event] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[event];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[event];
  else this._events = {};

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the module.
//
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.EventEmitter2 = EventEmitter;
EventEmitter.EventEmitter3 = EventEmitter;

//
// Expose the module.
//
module.exports = EventEmitter;

},{}],"C:\\ksana2015\\node_modules\\reflux\\node_modules\\native-promise-only\\npo.js":[function(require,module,exports){
/*! Native Promise Only
    v0.7.6-a (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(t,n,e){n[t]=n[t]||e(),"undefined"!=typeof module&&module.exports?module.exports=n[t]:"function"==typeof define&&define.amd&&define(function(){return n[t]})}("Promise","undefined"!=typeof global?global:this,function(){"use strict";function t(t,n){l.add(t,n),h||(h=y(l.drain))}function n(t){var n,e=typeof t;return null==t||"object"!=e&&"function"!=e||(n=t.then),"function"==typeof n?n:!1}function e(){for(var t=0;t<this.chain.length;t++)o(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function o(t,e,o){var r,i;try{e===!1?o.reject(t.msg):(r=e===!0?t.msg:e.call(void 0,t.msg),r===o.promise?o.reject(TypeError("Promise-chain cycle")):(i=n(r))?i.call(r,o.resolve,o.reject):o.resolve(r))}catch(c){o.reject(c)}}function r(o){var c,u,a=this;if(!a.triggered){a.triggered=!0,a.def&&(a=a.def);try{(c=n(o))?(u=new f(a),c.call(o,function(){r.apply(u,arguments)},function(){i.apply(u,arguments)})):(a.msg=o,a.state=1,a.chain.length>0&&t(e,a))}catch(s){i.call(u||new f(a),s)}}}function i(n){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=n,o.state=2,o.chain.length>0&&t(e,o))}function c(t,n,e,o){for(var r=0;r<n.length;r++)!function(r){t.resolve(n[r]).then(function(t){e(r,t)},o)}(r)}function f(t){this.def=t,this.triggered=!1}function u(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function a(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(n,r){var i={success:"function"==typeof n?n:!0,failure:"function"==typeof r?r:!1};return i.promise=new this.constructor(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");i.resolve=t,i.reject=n}),o.chain.push(i),0!==o.state&&t(e,o),i.promise},this["catch"]=function(t){return this.then(void 0,t)};try{n.call(void 0,function(t){r.call(o,t)},function(t){i.call(o,t)})}catch(c){i.call(o,c)}}var s,h,l,p=Object.prototype.toString,y="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(t,n,e,o){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:o!==!1})}}catch(d){s=function(t,n,e){return t[n]=e,t}}l=function(){function t(t,n){this.fn=t,this.self=n,this.next=void 0}var n,e,o;return{add:function(r,i){o=new t(r,i),e?e.next=o:n=o,e=o,o=void 0},drain:function(){var t=n;for(n=e=h=void 0;t;)t.fn.call(t.self),t=t.next}}}();var g=s({},"constructor",a,!1);return s(a,"prototype",g,!1),s(g,"__NPO__",0,!1),s(a,"resolve",function(t){var n=this;return t&&"object"==typeof t&&1===t.__NPO__?t:new n(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");n(t)})}),s(a,"reject",function(t){return new this(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");e(t)})}),s(a,"all",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):0===t.length?n.resolve([]):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");var r=t.length,i=Array(r),f=0;c(n,t,function(t,n){i[t]=n,++f===r&&e(i)},o)})}),s(a,"race",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");c(n,t,function(t,n){e(n)},o)})}),a});

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\ActionMethods.js":[function(require,module,exports){
/**
 * A module of methods that you want to include in all actions.
 * This module is consumed by `createAction`.
 */
module.exports = {
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js":[function(require,module,exports){
exports.createdStores = [];

exports.createdActions = [];

exports.reset = function() {
    while(exports.createdStores.length) {
        exports.createdStores.pop();
    }
    while(exports.createdActions.length) {
        exports.createdActions.pop();
    }
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMethods.js":[function(require,module,exports){
var _ = require('./utils'),
    maker = require('./joins').instanceJoinCreator;

/**
 * Extract child listenables from a parent from their
 * children property and return them in a keyed Object
 *
 * @param {Object} listenable The parent listenable
 */
var mapChildListenables = function(listenable) {
    var i = 0, children = {}, childName;
    for (;i < (listenable.children||[]).length; ++i) {
        childName = listenable.children[i];
        if(listenable[childName]){
            children[childName] = listenable[childName];
        }
    }
    return children;
};

/**
 * Make a flat dictionary of all listenables including their
 * possible children (recursively), concatenating names in camelCase.
 *
 * @param {Object} listenables The top-level listenables
 */
var flattenListenables = function(listenables) {
    var flattened = {};
    for(var key in listenables){
        var listenable = listenables[key];
        var childMap = mapChildListenables(listenable);

        // recursively flatten children
        var children = flattenListenables(childMap);

        // add the primary listenable and chilren
        flattened[key] = listenable;
        for(var childKey in children){
            var childListenable = children[childKey];
            flattened[key + _.capitalize(childKey)] = childListenable;
        }
    }

    return flattened;
};

/**
 * A module of methods related to listening.
 */
module.exports = {

    /**
     * An internal utility function used by `validateListening`
     *
     * @param {Action|Store} listenable The listenable we want to search for
     * @returns {Boolean} The result of a recursive search among `this.subscriptions`
     */
    hasListener: function(listenable) {
        var i = 0, j, listener, listenables;
        for (;i < (this.subscriptions||[]).length; ++i) {
            listenables = [].concat(this.subscriptions[i].listenable);
            for (j = 0; j < listenables.length; j++){
                listener = listenables[j];
                if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * A convenience method that listens to all listenables in the given object.
     *
     * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
     */
    listenToMany: function(listenables){
        var allListenables = flattenListenables(listenables);
        for(var key in allListenables){
            var cbname = _.callbackName(key),
                localname = this[cbname] ? cbname : this[key] ? key : undefined;
            if (localname){
                this.listenTo(allListenables[key],localname,this[cbname+"Default"]||this[localname+"Default"]||localname);
            }
        }
    },

    /**
     * Checks if the current context can listen to the supplied listenable
     *
     * @param {Action|Store} listenable An Action or Store that should be
     *  listened to.
     * @returns {String|Undefined} An error message, or undefined if there was no problem.
     */
    validateListening: function(listenable){
        if (listenable === this) {
            return "Listener is not able to listen to itself";
        }
        if (!_.isFunction(listenable.listen)) {
            return listenable + " is missing a listen method";
        }
        if (listenable.hasListener && listenable.hasListener(this)) {
            return "Listener cannot listen to this listenable because of circular loop";
        }
    },

    /**
     * Sets up a subscription to the given listenable for the context object
     *
     * @param {Action|Store} listenable An Action or Store that should be
     *  listened to.
     * @param {Function|String} callback The callback to register as event handler
     * @param {Function|String} defaultCallback The callback to register as default handler
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
     */
    listenTo: function(listenable, callback, defaultCallback) {
        var desub, unsubscriber, subscriptionobj, subs = this.subscriptions = this.subscriptions || [];
        _.throwIf(this.validateListening(listenable));
        this.fetchInitialState(listenable, defaultCallback);
        desub = listenable.listen(this[callback]||callback, this);
        unsubscriber = function() {
            var index = subs.indexOf(subscriptionobj);
            _.throwIf(index === -1,'Tried to remove listen already gone from subscriptions list!');
            subs.splice(index, 1);
            desub();
        };
        subscriptionobj = {
            stop: unsubscriber,
            listenable: listenable
        };
        subs.push(subscriptionobj);
        return subscriptionobj;
    },

    /**
     * Stops listening to a single listenable
     *
     * @param {Action|Store} listenable The action or store we no longer want to listen to
     * @returns {Boolean} True if a subscription was found and removed, otherwise false.
     */
    stopListeningTo: function(listenable){
        var sub, i = 0, subs = this.subscriptions || [];
        for(;i < subs.length; i++){
            sub = subs[i];
            if (sub.listenable === listenable){
                sub.stop();
                _.throwIf(subs.indexOf(sub)!==-1,'Failed to remove listen from subscriptions list!');
                return true;
            }
        }
        return false;
    },

    /**
     * Stops all subscriptions and empties subscriptions array
     */
    stopListeningToAll: function(){
        var remaining, subs = this.subscriptions || [];
        while((remaining=subs.length)){
            subs[0].stop();
            _.throwIf(subs.length!==remaining-1,'Failed to remove listen from subscriptions list!');
        }
    },

    /**
     * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
     * @param {Action|Store} listenable The publisher we want to get initial state from
     * @param {Function|String} defaultCallback The method to receive the data
     */
    fetchInitialState: function (listenable, defaultCallback) {
        defaultCallback = (defaultCallback && this[defaultCallback]) || defaultCallback;
        var me = this;
        if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
            var data = listenable.getInitialState();
            if (data && _.isFunction(data.then)) {
                data.then(function() {
                    defaultCallback.apply(me, arguments);
                });
            } else {
                defaultCallback.call(this, data);
            }
        }
    },

    /**
     * The callback will be called once all listenables have triggered at least once.
     * It will be invoked with the last emission from each listenable.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinTrailing: maker("last"),

    /**
     * The callback will be called once all listenables have triggered at least once.
     * It will be invoked with the first emission from each listenable.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinLeading: maker("first"),

    /**
     * The callback will be called once all listenables have triggered at least once.
     * It will be invoked with all emission from each listenable.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinConcat: maker("all"),

    /**
     * The callback will be called once all listenables have triggered.
     * If a callback triggers twice before that happens, an error is thrown.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinStrict: maker("strict")
};

},{"./joins":"C:\\ksana2015\\node_modules\\reflux\\src\\joins.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMixin.js":[function(require,module,exports){
var _ = require('./utils'),
    ListenerMethods = require('./ListenerMethods');

/**
 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
 * import everything this mixin contains!
 */
module.exports = _.extend({

    /**
     * Cleans up all listener previously registered.
     */
    componentWillUnmount: ListenerMethods.stopListeningToAll

}, ListenerMethods);

},{"./ListenerMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMethods.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\PublisherMethods.js":[function(require,module,exports){
var _ = require('./utils');

/**
 * A module of methods for object that you want to be able to listen to.
 * This module is consumed by `createStore` and `createAction`
 */
module.exports = {

    /**
     * Hook used by the publisher that is invoked before emitting
     * and before `shouldEmit`. The arguments are the ones that the action
     * is invoked with. If this function returns something other than
     * undefined, that will be passed on as arguments for shouldEmit and
     * emission.
     */
    preEmit: function() {},

    /**
     * Hook used by the publisher after `preEmit` to determine if the
     * event should be emitted with given arguments. This may be overridden
     * in your application, default implementation always returns true.
     *
     * @returns {Boolean} true if event should be emitted
     */
    shouldEmit: function() { return true; },

    /**
     * Subscribes the given callback for action triggered
     *
     * @param {Function} callback The callback to register as event handler
     * @param {Mixed} [optional] bindContext The context to bind the callback with
     * @returns {Function} Callback that unsubscribes the registered event handler
     */
    listen: function(callback, bindContext) {
        bindContext = bindContext || this;
        var eventHandler = function(args) {
            if (aborted){
                return;
            }
            callback.apply(bindContext, args);
        }, me = this, aborted = false;
        this.emitter.addListener(this.eventLabel, eventHandler);
        return function() {
            aborted = true;
            me.emitter.removeListener(me.eventLabel, eventHandler);
        };
    },

    /**
     * Attach handlers to promise that trigger the completed and failed
     * child publishers, if available.
     *
     * @param {Object} The promise to attach to
     */
    promise: function(promise) {
        var me = this;

        var canHandlePromise =
            this.children.indexOf('completed') >= 0 &&
            this.children.indexOf('failed') >= 0;

        if (!canHandlePromise){
            throw new Error('Publisher must have "completed" and "failed" child publishers');
        }

        promise.then(function(response) {
            return me.completed(response);
        }, function(error) {
            return me.failed(error);
        });
    },

    /**
     * Subscribes the given callback for action triggered, which should
     * return a promise that in turn is passed to `this.promise`
     *
     * @param {Function} callback The callback to register as event handler
     */
    listenAndPromise: function(callback, bindContext) {
        var me = this;
        bindContext = bindContext || this;
        this.willCallPromise = (this.willCallPromise || 0) + 1;

        var removeListen = this.listen(function() {

            if (!callback) {
                throw new Error('Expected a function returning a promise but got ' + callback);
            }

            var args = arguments,
                promise = callback.apply(bindContext, args);
            return me.promise.call(me, promise);
        }, bindContext);

        return function () {
          me.willCallPromise--;
          removeListen.call(me);
        };

    },

    /**
     * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
     */
    trigger: function() {
        var args = arguments,
            pre = this.preEmit.apply(this, args);
        args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
        if (this.shouldEmit.apply(this, args)) {
            this.emitter.emit(this.eventLabel, args);
        }
    },

    /**
     * Tries to publish the event on the next tick
     */
    triggerAsync: function(){
        var args = arguments,me = this;
        _.nextTick(function() {
            me.trigger.apply(me, args);
        });
    },

    /**
     * Returns a Promise for the triggered action
     *
     * @return {Promise}
     *   Resolved by completed child action.
     *   Rejected by failed child action.
     *   If listenAndPromise'd, then promise associated to this trigger.
     *   Otherwise, the promise is for next child action completion.
     */
    triggerPromise: function(){
        var me = this;
        var args = arguments;

        var canHandlePromise =
            this.children.indexOf('completed') >= 0 &&
            this.children.indexOf('failed') >= 0;

        var promise = _.createPromise(function(resolve, reject) {
            // If `listenAndPromise` is listening
            // patch `promise` w/ context-loaded resolve/reject
            if (me.willCallPromise) {
                _.nextTick(function() {
                    var old_promise_method = me.promise;
                    me.promise = function (promise) {
                        promise.then(resolve, reject);
                        // Back to your regularly schedule programming.
                        me.promise = old_promise_method;
                        return me.promise.apply(me, arguments);
                    };
                    me.trigger.apply(me, args);
                });
                return;
            }

            if (canHandlePromise) {
                var removeSuccess = me.completed.listen(function(args) {
                    removeSuccess();
                    removeFailed();
                    resolve(args);
                });

                var removeFailed = me.failed.listen(function(args) {
                    removeSuccess();
                    removeFailed();
                    reject(args);
                });
            }

            me.triggerAsync.apply(me, args);

            if (!canHandlePromise) {
                resolve();
            }
        });

        return promise;
    }
};

},{"./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\StoreMethods.js":[function(require,module,exports){
/**
 * A module of methods that you want to include in all stores.
 * This module is consumed by `createStore`.
 */
module.exports = {
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\bindMethods.js":[function(require,module,exports){
module.exports = function(store, definition) {
  for (var name in definition) {
    if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(definition, name);

        if (!propertyDescriptor.value || typeof propertyDescriptor.value !== 'function' || !definition.hasOwnProperty(name)) {
            continue;
        }

        store[name] = definition[name].bind(store);
    } else {
        var property = definition[name];

        if (typeof property !== 'function' || !definition.hasOwnProperty(name)) {
            continue;
        }

        store[name] = property.bind(store);
    }
  }

  return store;
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\connect.js":[function(require,module,exports){
var Reflux = require('./index'),
    _ = require('./utils');

module.exports = function(listenable,key){
    return {
        getInitialState: function(){
            if (!_.isFunction(listenable.getInitialState)) {
                return {};
            } else if (key === undefined) {
                return listenable.getInitialState();
            } else {
                return _.object([key],[listenable.getInitialState()]);
            }
        },
        componentDidMount: function(){
            _.extend(this,Reflux.ListenerMethods);
            var me = this, cb = (key === undefined ? this.setState : function(v){me.setState(_.object([key],[v]));});
            this.listenTo(listenable,cb);
        },
        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
    };
};

},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\connectFilter.js":[function(require,module,exports){
var Reflux = require('./index'),
  _ = require('./utils');

module.exports = function(listenable, key, filterFunc) {
    filterFunc = _.isFunction(key) ? key : filterFunc;
    return {
        getInitialState: function() {
            if (!_.isFunction(listenable.getInitialState)) {
                return {};
            } else if (_.isFunction(key)) {
                return filterFunc.call(this, listenable.getInitialState());
            } else {
                // Filter initial payload from store.
                var result = filterFunc.call(this, listenable.getInitialState());
                if (result) {
                  return _.object([key], [result]);
                } else {
                  return {};
                }
            }
        },
        componentDidMount: function() {
            _.extend(this, Reflux.ListenerMethods);
            var me = this;
            var cb = function(value) {
                if (_.isFunction(key)) {
                    me.setState(filterFunc.call(me, value));
                } else {
                    var result = filterFunc.call(me, value);
                    me.setState(_.object([key], [result]));
                }
            };

            this.listenTo(listenable, cb);
        },
        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
    };
};


},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\createAction.js":[function(require,module,exports){
var _ = require('./utils'),
    Reflux = require('./index'),
    Keep = require('./Keep'),
    allowed = {preEmit:1,shouldEmit:1};

/**
 * Creates an action functor object. It is mixed in with functions
 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
 * be overridden in the definition object.
 *
 * @param {Object} definition The action object definition
 */
var createAction = function(definition) {

    definition = definition || {};
    if (!_.isObject(definition)){
        definition = {actionName: definition};
    }

    for(var a in Reflux.ActionMethods){
        if (!allowed[a] && Reflux.PublisherMethods[a]) {
            throw new Error("Cannot override API method " + a +
                " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead."
            );
        }
    }

    for(var d in definition){
        if (!allowed[d] && Reflux.PublisherMethods[d]) {
            throw new Error("Cannot override API method " + d +
                " in action creation. Use another method name or override it on Reflux.PublisherMethods instead."
            );
        }
    }

    definition.children = definition.children || [];
    if (definition.asyncResult){
        definition.children = definition.children.concat(["completed","failed"]);
    }

    var i = 0, childActions = {};
    for (; i < definition.children.length; i++) {
        var name = definition.children[i];
        childActions[name] = createAction(name);
    }

    var context = _.extend({
        eventLabel: "action",
        emitter: new _.EventEmitter(),
        _isAction: true
    }, Reflux.PublisherMethods, Reflux.ActionMethods, definition);

    var functor = function() {
        return functor[functor.sync?"trigger":"triggerPromise"].apply(functor, arguments);
    };

    _.extend(functor,childActions,context);

    Keep.createdActions.push(functor);

    return functor;

};

module.exports = createAction;

},{"./Keep":"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js","./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\createStore.js":[function(require,module,exports){
var _ = require('./utils'),
    Reflux = require('./index'),
    Keep = require('./Keep'),
    mixer = require('./mixer'),
    allowed = {preEmit:1,shouldEmit:1},
    bindMethods = require('./bindMethods');

/**
 * Creates an event emitting Data Store. It is mixed in with functions
 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
 * and `shouldEmit` may be overridden in the definition object.
 *
 * @param {Object} definition The data store object definition
 * @returns {Store} A data store instance
 */
module.exports = function(definition) {

    definition = definition || {};

    for(var a in Reflux.StoreMethods){
        if (!allowed[a] && (Reflux.PublisherMethods[a] || Reflux.ListenerMethods[a])){
            throw new Error("Cannot override API method " + a +
                " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
            );
        }
    }

    for(var d in definition){
        if (!allowed[d] && (Reflux.PublisherMethods[d] || Reflux.ListenerMethods[d])){
            throw new Error("Cannot override API method " + d +
                " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
            );
        }
    }

    definition = mixer(definition);

    function Store() {
        var i=0, arr;
        this.subscriptions = [];
        this.emitter = new _.EventEmitter();
        this.eventLabel = "change";
        bindMethods(this, definition);
        if (this.init && _.isFunction(this.init)) {
            this.init();
        }
        if (this.listenables){
            arr = [].concat(this.listenables);
            for(;i < arr.length;i++){
                this.listenToMany(arr[i]);
            }
        }
    }

    _.extend(Store.prototype, Reflux.ListenerMethods, Reflux.PublisherMethods, Reflux.StoreMethods, definition);

    var store = new Store();
    Keep.createdStores.push(store);

    return store;
};

},{"./Keep":"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js","./bindMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\bindMethods.js","./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./mixer":"C:\\ksana2015\\node_modules\\reflux\\src\\mixer.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\index.js":[function(require,module,exports){
exports.ActionMethods = require('./ActionMethods');

exports.ListenerMethods = require('./ListenerMethods');

exports.PublisherMethods = require('./PublisherMethods');

exports.StoreMethods = require('./StoreMethods');

exports.createAction = require('./createAction');

exports.createStore = require('./createStore');

exports.connect = require('./connect');

exports.connectFilter = require('./connectFilter');

exports.ListenerMixin = require('./ListenerMixin');

exports.listenTo = require('./listenTo');

exports.listenToMany = require('./listenToMany');


var maker = require('./joins').staticJoinCreator;

exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility

exports.joinLeading = maker("first");

exports.joinStrict = maker("strict");

exports.joinConcat = maker("all");

var _ = require('./utils');

exports.EventEmitter = _.EventEmitter;

exports.Promise = _.Promise;

/**
 * Convenience function for creating a set of actions
 *
 * @param definitions the definitions for the actions to be created
 * @returns an object with actions of corresponding action names
 */
exports.createActions = function(definitions) {
    var actions = {};
    for (var k in definitions){
        if (definitions.hasOwnProperty(k)) {
            var val = definitions[k],
                actionName = _.isObject(val) ? k : val;

            actions[actionName] = exports.createAction(val);
        }
    }
    return actions;
};

/**
 * Sets the eventmitter that Reflux uses
 */
exports.setEventEmitter = function(ctx) {
    var _ = require('./utils');
    exports.EventEmitter = _.EventEmitter = ctx;
};


/**
 * Sets the Promise library that Reflux uses
 */
exports.setPromise = function(ctx) {
    var _ = require('./utils');
    exports.Promise = _.Promise = ctx;
};


/**
 * Sets the Promise factory that creates new promises
 * @param {Function} factory has the signature `function(resolver) { return [new Promise]; }`
 */
exports.setPromiseFactory = function(factory) {
    var _ = require('./utils');
    _.createPromise = factory;
};


/**
 * Sets the method used for deferring actions and stores
 */
exports.nextTick = function(nextTick) {
    var _ = require('./utils');
    _.nextTick = nextTick;
};

/**
 * Provides the set of created actions and stores for introspection
 */
exports.__keep = require('./Keep');

/**
 * Warn if Function.prototype.bind not available
 */
if (!Function.prototype.bind) {
  console.error(
    'Function.prototype.bind not available. ' +
    'ES5 shim required. ' +
    'https://github.com/spoike/refluxjs#es5'
  );
}

},{"./ActionMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\ActionMethods.js","./Keep":"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js","./ListenerMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMethods.js","./ListenerMixin":"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMixin.js","./PublisherMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\PublisherMethods.js","./StoreMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\StoreMethods.js","./connect":"C:\\ksana2015\\node_modules\\reflux\\src\\connect.js","./connectFilter":"C:\\ksana2015\\node_modules\\reflux\\src\\connectFilter.js","./createAction":"C:\\ksana2015\\node_modules\\reflux\\src\\createAction.js","./createStore":"C:\\ksana2015\\node_modules\\reflux\\src\\createStore.js","./joins":"C:\\ksana2015\\node_modules\\reflux\\src\\joins.js","./listenTo":"C:\\ksana2015\\node_modules\\reflux\\src\\listenTo.js","./listenToMany":"C:\\ksana2015\\node_modules\\reflux\\src\\listenToMany.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\joins.js":[function(require,module,exports){
/**
 * Internal module used to create static and instance join methods
 */

var slice = Array.prototype.slice,
    _ = require("./utils"),
    createStore = require("./createStore"),
    strategyMethodNames = {
        strict: "joinStrict",
        first: "joinLeading",
        last: "joinTrailing",
        all: "joinConcat"
    };

/**
 * Used in `index.js` to create the static join methods
 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
 */
exports.staticJoinCreator = function(strategy){
    return function(/* listenables... */) {
        var listenables = slice.call(arguments);
        return createStore({
            init: function(){
                this[strategyMethodNames[strategy]].apply(this,listenables.concat("triggerAsync"));
            }
        });
    };
};

/**
 * Used in `ListenerMethods.js` to create the instance join methods
 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
 */
exports.instanceJoinCreator = function(strategy){
    return function(/* listenables..., callback*/){
        _.throwIf(arguments.length < 3,'Cannot create a join with less than 2 listenables!');
        var listenables = slice.call(arguments),
            callback = listenables.pop(),
            numberOfListenables = listenables.length,
            join = {
                numberOfListenables: numberOfListenables,
                callback: this[callback]||callback,
                listener: this,
                strategy: strategy
            }, i, cancels = [], subobj;
        for (i = 0; i < numberOfListenables; i++) {
            _.throwIf(this.validateListening(listenables[i]));
        }
        for (i = 0; i < numberOfListenables; i++) {
            cancels.push(listenables[i].listen(newListener(i,join),this));
        }
        reset(join);
        subobj = {listenable: listenables};
        subobj.stop = makeStopper(subobj,cancels,this);
        this.subscriptions = (this.subscriptions || []).concat(subobj);
        return subobj;
    };
};

// ---- internal join functions ----

function makeStopper(subobj,cancels,context){
    return function() {
        var i, subs = context.subscriptions,
            index = (subs ? subs.indexOf(subobj) : -1);
        _.throwIf(index === -1,'Tried to remove join already gone from subscriptions list!');
        for(i=0;i < cancels.length; i++){
            cancels[i]();
        }
        subs.splice(index, 1);
    };
}

function reset(join) {
    join.listenablesEmitted = new Array(join.numberOfListenables);
    join.args = new Array(join.numberOfListenables);
}

function newListener(i,join) {
    return function() {
        var callargs = slice.call(arguments);
        if (join.listenablesEmitted[i]){
            switch(join.strategy){
                case "strict": throw new Error("Strict join failed because listener triggered twice.");
                case "last": join.args[i] = callargs; break;
                case "all": join.args[i].push(callargs);
            }
        } else {
            join.listenablesEmitted[i] = true;
            join.args[i] = (join.strategy==="all"?[callargs]:callargs);
        }
        emitIfAllListenablesEmitted(join);
    };
}

function emitIfAllListenablesEmitted(join) {
    for (var i = 0; i < join.numberOfListenables; i++) {
        if (!join.listenablesEmitted[i]) {
            return;
        }
    }
    join.callback.apply(join.listener,join.args);
    reset(join);
}

},{"./createStore":"C:\\ksana2015\\node_modules\\reflux\\src\\createStore.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\listenTo.js":[function(require,module,exports){
var Reflux = require('./index');


/**
 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
 * without having to manually set listeners in the `componentDidMount` method.
 *
 * @param {Action|Store} listenable An Action or Store that should be
 *  listened to.
 * @param {Function|String} callback The callback to register as event handler
 * @param {Function|String} defaultCallback The callback to register as default handler
 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
 */
module.exports = function(listenable,callback,initial){
    return {
        /**
         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
         * and then make the call to `listenTo` with the arguments provided to the factory function
         */
        componentDidMount: function() {
            for(var m in Reflux.ListenerMethods){
                if (this[m] !== Reflux.ListenerMethods[m]){
                    if (this[m]){
                        throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
                    }
                    this[m] = Reflux.ListenerMethods[m];
                }
            }
            this.listenTo(listenable,callback,initial);
        },
        /**
         * Cleans up all listener previously registered.
         */
        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
    };
};

},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\listenToMany.js":[function(require,module,exports){
var Reflux = require('./index');

/**
 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
 * without having to manually set listeners in the `componentDidMount` method. This version is used
 * to automatically set up a `listenToMany` call.
 *
 * @param {Object} listenables An object of listenables
 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
 */
module.exports = function(listenables){
    return {
        /**
         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
         * and then make the call to `listenTo` with the arguments provided to the factory function
         */
        componentDidMount: function() {
            for(var m in Reflux.ListenerMethods){
                if (this[m] !== Reflux.ListenerMethods[m]){
                    if (this[m]){
                        throw "Can't have other property '"+m+"' when using Reflux.listenToMany!";
                    }
                    this[m] = Reflux.ListenerMethods[m];
                }
            }
            this.listenToMany(listenables);
        },
        /**
         * Cleans up all listener previously registered.
         */
        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
    };
};

},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\mixer.js":[function(require,module,exports){
var _ = require('./utils');

module.exports = function mix(def) {
    var composed = {
        init: [],
        preEmit: [],
        shouldEmit: []
    };

    var updated = (function mixDef(mixin) {
        var mixed = {};
        if (mixin.mixins) {
            mixin.mixins.forEach(function (subMixin) {
                _.extend(mixed, mixDef(subMixin));
            });
        }
        _.extend(mixed, mixin);
        Object.keys(composed).forEach(function (composable) {
            if (mixin.hasOwnProperty(composable)) {
                composed[composable].push(mixin[composable]);
            }
        });
        return mixed;
    }(def));

    if (composed.init.length > 1) {
        updated.init = function () {
            var args = arguments;
            composed.init.forEach(function (init) {
                init.apply(this, args);
            }, this);
        };
    }
    if (composed.preEmit.length > 1) {
        updated.preEmit = function () {
            return composed.preEmit.reduce(function (args, preEmit) {
                var newValue = preEmit.apply(this, args);
                return newValue === undefined ? args : [newValue];
            }.bind(this), arguments);
        };
    }
    if (composed.shouldEmit.length > 1) {
        updated.shouldEmit = function () {
            var args = arguments;
            return !composed.shouldEmit.some(function (shouldEmit) {
                return !shouldEmit.apply(this, args);
            }, this);
        };
    }
    Object.keys(composed).forEach(function (composable) {
        if (composed[composable].length === 1) {
            updated[composable] = composed[composable][0];
        }
    });

    return updated;
};

},{"./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js":[function(require,module,exports){
/*
 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
 * order to remove the dependency
 */
var isObject = exports.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};

exports.extend = function(obj) {
    if (!isObject(obj)) {
        return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
            if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
                Object.defineProperty(obj, prop, propertyDescriptor);
            } else {
                obj[prop] = source[prop];
            }
        }
    }
    return obj;
};

exports.isFunction = function(value) {
    return typeof value === 'function';
};

exports.EventEmitter = require('eventemitter3');

exports.nextTick = function(callback) {
    setTimeout(callback, 0);
};

exports.capitalize = function(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
};

exports.callbackName = function(string){
    return "on"+exports.capitalize(string);
};

exports.object = function(keys,vals){
    var o={}, i=0;
    for(;i<keys.length;i++){
        o[keys[i]] = vals[i];
    }
    return o;
};

exports.Promise = require("native-promise-only");

exports.createPromise = function(resolver) {
    return new exports.Promise(resolver);
};

exports.isArguments = function(value) {
    return typeof value === 'object' && ('callee' in value) && typeof value.length === 'number';
};

exports.throwIf = function(val,msg){
    if (val){
        throw Error(msg||val);
    }
};

},{"eventemitter3":"C:\\ksana2015\\node_modules\\reflux\\node_modules\\eventemitter3\\index.js","native-promise-only":"C:\\ksana2015\\node_modules\\reflux\\node_modules\\native-promise-only\\npo.js"}]},{},["C:\\ksana2015\\correspondence\\index.js"])
//# sourceMappingURL=bundle.js.map
