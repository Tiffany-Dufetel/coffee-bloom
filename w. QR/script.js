let contenuInfo = document.querySelector(".containerInfo")
let form = document.querySelector(".formulaire")


var arrayBoissons = JSON.parse(localStorage.getItem("boissons"))
if (arrayBoissons){
    showBoissons();
} else {
    arrayBoissons = [];
}

//Création du boutton "Valider", qui créé un nouveau produit selon le choix "type"
function buttonValider(){
    let data = new FormData(form)

    let boissons = {}

    if (data.get("type") == "alcoolisee"){
        boissons = new
            BoissonAlcool(
                data.get("nom"),
                data.get("quantite"),
                data.get("paht"),
                data.get("pvht"),
                data.get("marge"),
                data.get("pvttc"),
                data.get("type"),
                data.get("degres")
            )
    } else {
        boissons = new
        BoissonGeneral(
            data.get("nom"),
            data.get("quantite"),
            data.get("paht"),
            data.get("pvht"),
            data.get("marge"),
            data.get("pvttc"),
            data.get("type"),
        )
    }


//ajout a l'arrayBoissons
    arrayBoissons.push(boissons);
    console.log(arrayBoissons);



//Déclaration de la fonction showBoissons et saveBoissons
    showBoissons();
    saveBoissons();

    form.reset();
}

//Création de la fonction showBoissons
function showBoissons(){

    
    let content = ""

//Création du contenu qui s'affiche pour chaque élément (au clic sur "buttonValider") selon le "type" choisi    
    arrayBoissons.forEach((element)=>{

        
        //La version if "alcoolisee" affiche l'input "degree" contrairement au else et transformation des valeurs en input (pour pouvoir)
        if(element.type == "alcoolisee" && element.quantite == 0){
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p>
                    <p><b><u>DEGRE ALCOOL:</b></u></p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    <p>${element.degres}</p>
                    </div>
                </div>

                <div class="alerteRouge">
                ATTENTION PLUS DE STOCK
                </div><br>

                <div class="boutons">
                <center>
                <div id="qrcode"></div><br><br>
                <p><button class="buttonActualiser">ACTUALISER</button></p>
                <p><button class="buttonDelete">SUPPRIMER</button></p>
                <b>______________________________________</b>
                </center>


                </div>
            `
        } else if (element.type == "alcoolisee" && element.quantite <= 5){
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p>
                    <p><b><u>DEGRE ALCOOL:</b></u></p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    <p>${element.degres}</p>
                    </div>
                </div>

                <div class="alerteOrange">
                ATTENTION STOCK BAS
                </div><br>
                
                <div class="boutons">
                <center>
                <div id="qrcode"></div><br><br>
                <p><button class="buttonActualiser">ACTUALISER</button></p>
                <p><button class="buttonDelete">SUPPRIMER</button></p>
                <b>______________________________________</b>
                </center>


                </div>

            `
        } else if (element.type == "alcoolisee" && element.quantite > 5){
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p>
                    <p><b><u>DEGRE ALCOOL:</b></u></p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    <p>${element.degres}</p>
                    </div>
                </div>

                <div class="alerteVerte">
                STOCK CORRECT
                </div><br>
                
                <div class="boutons">
                <center>
                <div id="qrcode"></div><br><br>
                <p><button class="buttonActualiser">ACTUALISER</button></p>
                <p><button class="buttonDelete">SUPPRIMER</button></p>
                <b>______________________________________</b>
                </center>


                </div>
            `


        //La version Else (Choix nonAlcoolisee/autre) affiche les éléments de la class générale et transformation des valeurs en input (pour pouvoir)
        } else if (element.type == "non alcoolisee" && element.quantite == 0) {
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    </div>
                </div>

                <div class="alerteRouge">
                    ATTENTION PLUS DE STOCK
                </div><br>

                <div class="boutons">
                <center>
                <div id="qrcode"></div><br><br>
                <p><button class="buttonActualiser">ACTUALISER</button></p>
                <p><button class="buttonDelete">SUPPRIMER</button></p>
                <b>______________________________________</b>
                </center>


                </div>

            `
        } else if (element.type == "non alcoolisee" && element.quantite <= 5){
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    </div>
                </div>

                <div class="alerteOrange">
                    ATTENTION STOCK BAS
                </div><br>

                <div class="boutons">
                <center>
                <div id="qrcode"></div><br><br>
                <p><button class="buttonActualiser">ACTUALISER</button></p>
                <p><button class="buttonDelete">SUPPRIMER</button></p>
                <b>______________________________________</b>
                </center>


                </div>
                `
        } else if (element.type == "non alcoolisee" && element.quantite >= 5){
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    </div>
                </div>

            <div class="alerteVerte">
                STOCK CORRECT
            </div><br>

            <div class="boutons">
            <center>
            <div id="qrcode"></div><br><br>
            <p><button class="buttonActualiser">ACTUALISER</button></p>
            <p><button class="buttonDelete">SUPPRIMER</button></p>
            <b>______________________________________</b>
            </center>


            </div>

            `
        } else if (element.type == "autre" && element.quantite == 0){
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    </div>
                </div>

                <div class="alerteRouge">
                    ATTENTION PLUS DE STOCK
                </div><br>

                <div class="boutons">
                <center>
                <div id="qrcode"></div><br><br>
                <p><button class="buttonActualiser">ACTUALISER</button></p>
                <p><button class="buttonDelete">SUPPRIMER</button></p>
                <b>______________________________________</b>
                </center>


                </div>

            `
        } else if (element.type == "autre" && element.quantite <= 5){
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    </div>
                </div>

                <div class="alerteOrange">
                    ATTENTION STOCK BAS
                </div><br>

                <div class="boutons">
                <center>
                <div id="qrcode"></div><br><br>
                <p><button class="buttonActualiser">ACTUALISER</button></p>
                <p><button class="buttonDelete">SUPPRIMER</button></p>
                <b>______________________________________</b>
                </center>


                </div>
        
            `
        } else {
            content +=
            `   <div class="info-general">
                    <div class="info-contenu">
                    <p><b><u>NOM:</b></u></p>
                    <p><b><u>QUANTITE</b></u> </p>
                    <p><b><u>PRIX ACHAT HT:</b></u></p>
                    <p><b><u>PRIX DE VENTE HT:</b></u></p>
                    <p><b><u>MARGE HT:</b></u> </p>
                    <p><b><u>PRIX DE VENTE TTC:</b></u> </p>
                    <p><b><u>TYPE</b></u>: </p><br/><br/>
                    </div>

                    <div class="element-contenu">
                    <p>${element.nom}</p>
                    <p>${element.quantite}</p>
                    <p>${element.paht}</p>
                    <p>${element.pvht}</p>
                    <p>${element.marge}</p>
                    <p>${element.pvttc}</p>
                    <p>${element.type}</p>
                    </div>
                </div>

            <div class="alerteVerte">
                STOCK CORRECT
            </div><br>

            <div class="boutons">
            <center>
            <div id="qrcode"></div><br><br>
            <p><button class="buttonActualiser">ACTUALISER</button></p>
            <p><button class="buttonDelete">SUPPRIMER</button></p>
            <b>______________________________________</b>
            </center>


            </div>
        `
        }        

        

        //Ajout du contenu content à la div class.contenuInfo
        contenuInfo.innerHTML = content;        

        
        // création du boutton Actualiser, et des variables qui reprennent les valeurs des éléments affichés
        let buttonActualiser = document.querySelectorAll(".buttonActualiser")

            buttonActualiser.forEach((button,index)=>{
                // let inputNom = document.querySelector(".inputNom");
                // let inputPaht = document.querySelector(".inputPaht");
                // let inputType = document.querySelector(".inputType");
                // let inputPvht = document.querySelector(".inputPvht");
                // let inputDegres = document.querySelectorAll(".inputDegres");
                // let inputQuantite = document.querySelector(".inputQuantite");

                const stringBoissons = JSON.stringify(arrayBoissons);

            //evenement au cl
                button.addEventListener("click", function(e){
                    e.preventDefault()
                
                    document.querySelector("#nom").value = element.nom;
                    document.querySelector("#quantite").value = element.quantite;
                    document.querySelector("#paht").value = element.paht;
                    document.querySelector("#pvht").value = element.pvht;
                    document.querySelector("#type").value = element.type;
                    document.querySelector("#degres").value = element.degres;

                    arrayBoissons.splice(index,1)
            
        
                saveBoissons();
                showBoissons();              
                }) 

                if(arrayBoissons == index){
                    arrayBoissons.remove()
                }
            
            })
             
            //création du bouttonDelete sur chaque création
            let buttonDelete = document.querySelectorAll(".buttonDelete")
            buttonDelete.forEach((button,index)=>{
                const stringBoissons = JSON.stringify(arrayBoissons);
                //création de l'event au clic qui supprime l'élément
                button.addEventListener("click", function(){
                arrayBoissons.splice(index, 1);
                localStorage.setItem("boissons", stringBoissons);
                saveBoissons();
                showBoissons();              
                }) 
                if(arrayBoissons == index){
                    arrayBoissons.remove()
                }
            })

            qrCode();


    })




}


//Création de la fontion save
function saveBoissons(){
    localStorage.setItem("boissons", JSON.stringify(arrayBoissons))
}

//création de la class/prototype BoissonGeneral
class BoissonGeneral{
    constructor(nom,quantite,paht,pvht,marge,pvttc,type){
        this.nom = nom;
        this.quantite = quantite;
        this.paht = paht;
        this.pvht = pvht;
        this.marge = pvht - paht;
        this.pvttc = pvht * 1.20;
        this.type = type;
    }
}


//création de l'extension BoissonAlccol de la class/prototype BoissonGeneral qui affiche en plus le degre d'alcool
class BoissonAlcool extends BoissonGeneral{
    constructor(nom,quantite,paht,pvht,marge,pvttc,type,degres){
        super(nom,quantite,paht,pvht,marge,pvttc,type);
        this.degres = degres;
    }
}


function qrCode(){
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: JSON.stringify(arrayBoissons),
        width: 138,
        height: 138,
        colorDark : '#4a696e',
        colorLight : '#a1c0c0',
        correctLevel : QRCode.CorrectLevel.H
      });

}
