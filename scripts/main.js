const dictionary = [];

function saveWord() {
  const newWord = document.getElementById('newWord').value.trim();
  if (newWord && !dictionary.includes(newWord)) {
    dictionary.push(newWord);
    document.getElementById('message').innerText = `"${newWord}" has been added to the dictionary.`;
  } else if (dictionary.includes(newWord)) {
    document.getElementById('message').innerText = `"${newWord}" is already in the dictionary.`;
  } else {
    document.getElementById('message').innerText = 'Please enter a valid word to add!';
  }
  document.getElementById('newWord').value = '';
}

function checkWord() {
  const searchedWord = document.getElementById('searchWord').value.trim();
  if (dictionary.includes(searchedWord)) {
    document.getElementById('message').innerText = `"${searchedWord}" is in the dictionary.`;
  } else if (searchedWord && !dictionary.includes(searchedWord)) {
    document.getElementById('message').innerText = `"${searchedWord}" is not in the dictionary.`;
  } else {
    document.getElementById('message').innerText = 'Please enter a valid word to search!';
  }
  document.getElementById('searchWord').value = '';
}