//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dnaToRnaTranslation = {
  C: 'G',
  G: 'C'
}

export const toRna = (dnaNucleotide) => {
  const rnaNucleotide = dnaToRnaTranslation[dnaNucleotide]

  if (rnaNucleotide !== undefined) {
    return rnaNucleotide
  } else {
    return ''
  }
};
