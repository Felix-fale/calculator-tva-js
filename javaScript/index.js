// function CalculerMontantTTC() {
//   if (isNaN(form1.ht.value) == true) {
//     alert("Merci de saisir un montant correct. Calcul impossible.");
//     form1.ht.value = "0";
//   } else {
//     form1.tva.value = (form1.ht.value / 100) * 18;
//     form1.ttc.value = Number(form1.ht.value) + Number(form1.tva.value);
//   }
// }

document.getElementById("myCheckbox").addEventListener("click", function(event){
  event.preventDefault()
});

let pourcentage = (document.getElementById("tva").value/100);

function calculator() {
  if (form1.ht.value < 0 || form1.tva.value < 0 ) {
    form1.ht.value = "0";
  } else {
    let valeurTva = (form1.tva.value / 100);

    let calculTva = (form1.ht.value ) * valeurTva;

    form1.ttc.value = Number(form1.ht.value) + calculTva;
  }

}
// function calculator() {
//   // let montantHt = (document.getElementById("ht").value);
//   // let pourcentage = (document.getElementById("tva").value/100);
//   // let montantTtc = (document.getElementById("ht").value);

//   if (montantHt < 0 || pourcentage < 0 ) {
//     alert(erreur);
//   } else {
//     pourcentage = montantHt * pourcentage;
//     montantTtc = pourcentage + montantHt;
    
//     alert(montantTtc);
//   }

// }