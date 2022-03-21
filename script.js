const word = document.getElementById('word');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

// function

function isVowel(wordArr) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;

	vowels.forEach(vowel => {
		wordArr.forEach(letter => {
			if (letter.includes(vowel)) {
				count++;
			}
		});
	});

	return count;
}

submit.addEventListener('click', function (e) {
	e.preventDefault;
	let wordArr = word.value.toLowerCase().trim().split('');
	console.log(wordArr);
	let count = isVowel(wordArr);
	let sentence =
		count === 0
			? `There are <span>no</span> vowels.`
			: count === 1
			? `There is <span>1</span> vowel.`
			: `There are <span>${count}</span> vowels.`;

	output.innerHTML = sentence;
});
