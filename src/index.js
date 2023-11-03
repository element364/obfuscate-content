// Helper function to get a random character from a given string
function getRandomCharacter(string) {
  return string[Math.floor(Math.random() * string.length)];
}

// Function to obfuscate the content by replacing vowels and consonants with random characters from the same set
function obfuscateContent(content) {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';

  // Convert the string to an array of characters, obfuscate each character, and then join them back into a string
  const obfuscatedContent = content
    .split('')
    .map((char) => {
      const isUppercase = char === char.toUpperCase();
      const lowerCaseChar = char.toLowerCase();

      // If the lowercase character is a vowel, replace it with a random vowel
      if (vowels.includes(lowerCaseChar)) {
        const randomVowel = getRandomCharacter(vowels);
        return isUppercase ? randomVowel.toUpperCase() : randomVowel;
      }

      // If the lowercase character is a consonant, replace it with a random consonant
      if (consonants.includes(lowerCaseChar)) {
        const randomConsonant = getRandomCharacter(consonants);
        return isUppercase ? randomConsonant.toUpperCase() : randomConsonant;
      }

      // If the character is not a vowel or consonant, return it as is
      return char;
    })
    .join('');

  return obfuscatedContent;
}

module.exports = obfuscateContent;
