//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dnaToRnaTranslation = {
  C: 'G',
  G: 'C',
  T: 'A',
  A: 'U'
}

export const toRna = (dnaNucleotides) => {
  let rnaNucleotides = ''
  
  for (const dnaNucleotide of dnaNucleotides) {
    rnaNucleotides += dnaToRnaTranslation[dnaNucleotide]
  }

  return rnaNucleotides
};
