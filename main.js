// Fonction divison deux nombre puis affiche le reste de la division
function division()
{
  // Si l'une des deux valeurs n'est pas un nombre :
  if (isNaN(firstNumber.value) || isNaN(secondNumber.value))
  {
    alert("Veuillez entrer des nombres !")
  }
  // Sinon faire le code normalement
  else
  {
    // Méthode détaillée :
    // var nb1 = document.getElementById('firstNumber').value;
    // var nb2 = document.getElementById('secondNumber').value;

    // Utilisation du % (modulo) afin de prendre le reste de la division
    // alert("Reste de la division : " + nb1 % nb2);

    // Méthode réduite : toujours avec le %
    alert("Reste de la division : " + firstNumber.value % secondNumber.value);
  }

}
