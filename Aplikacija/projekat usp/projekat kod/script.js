/* karakteri koji se koriste u uzorku: 
\d bilo koja cifra [0-9]                     \w neki od karaktera (mala, velika slova, brojevi, _)
\D bilo koji karakter koji nije cifra        alfanumericki znak sebe predstavlja
. bilo koji karakter osim nove linije        [...]  bilo koji karakter naveden izmedju []
[^...] bilo koji karakter koji nije naveden izmedju   {n, m} prethodni element se ponavlja najmanje n i ne vise od m puta
{n, } prethodni element se ponavlja n ili vise puta  {n} prethodni element se ponavlja tacno n puta 
? prethodni element se ne pojavljuje ili se pojavljuje jednom   + prethodni element se ponavlja jednom ili vise puta
* prethodni element se ne pojavljuje ili se pojavljuje vise puta
| alternativa, pojavljuje se samo levi ili desni deo uzorka u stringu
(...) grupisanje simbola u jedan objekat nad kojim se mogu koristiti ? * + |
^ pretraga uzorka na pocetku znakovnog niza
$ pretraga uzorka na kraju znakovnog niza
*/

function validnoIme(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[A-Z]{1}[a-z]{2,6}$/) === null) {
      obj.style.color = 'red';
      document.getElementById("nameerror").innerHTML = "Unos nije dobar!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("nameerror").innerHTML = "";
  return true;
}
function validnoPrezime(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[A-Z]{1}[a-z]{5,15}$/) === null) {
      obj.style.color = 'red';
      document.getElementById("surnameerror").innerHTML = "Unos nije dobar!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("surnameerror").innerHTML = "";
  return true;
}
function validnoImee(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}$/) === null) {
      obj.style.color = 'red';
      document.getElementById("nameerroreng").innerHTML = "Invalid input!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("nameerroreng").innerHTML = "";
  return true;
}

function validnaPoruka(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[a-zA-Z0-9.!*(){}&^#@$/_?|><%+-,;:\s]{1,490}$/) === null){
      obj.style.color = 'red';
      document.getElementById("porerror").innerHTML = "Unos nije dobar!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("porerror").innerHTML = "";
  return true;
}
function validnaPorukae(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[a-zA-Z0-9.!*(){}&^#@$/_?|><%+-,;:\s]{1,490}$/) === null){
      obj.style.color = 'red';
      document.getElementById("porerroreng").innerHTML = "Invalid input!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("porerroreng").innerHTML = "";
  return true;
}

function validanMejl(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[A-Z]{1}[A-Z0-9.*(){}&^#@!$/_?|><%+-]{1,}[A-Z0-9]+@[A-Z]+(?:\.[A-Z]+)*$/i) === null) {
      obj.style.color = 'red';
      document.getElementById("mailerror").innerHTML = "Unos nije dobar!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("mailerror").innerHTML = "";
  return true;
}
function validanMejle(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[A-Z]{1}[A-Z0-9.*(){}&^#@!$/_?|><%+-]{1,}[A-Z0-9]+@[A-Z]+(?:\.[A-Z]+)*$/i) === null) {
      obj.style.color = 'red';
      document.getElementById("mailerroreng").innerHTML = "Invalid input!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("mailerroreng").innerHTML = "";
  return true;
}
function validanBroj(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[1,2,3,4,5,6,7]$/) === null) {
      obj.style.color = 'red';
      document.getElementById("numerror").innerHTML = "Unos nije dobar!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("numerror").innerHTML = "";
  return true;
}
function validanBroje(obj) {
  obj.value = obj.value.toString();
  if (obj.value.match(/^[1,2,3,4,5,6,7]$/) === null) {
      obj.style.color = 'red';
      document.getElementById("numerroreng").innerHTML = "Invalid input!";
      return false;
  }
  obj.style.color = 'green';
  document.getElementById("numerroreng").innerHTML = "";
  return true;
}


