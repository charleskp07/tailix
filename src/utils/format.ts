/** 1500 -> « 1 500 » (séparateur de milliers français). */
export const formatNumber = (n: number) => n.toLocaleString('fr-FR')

/** 1500 -> « 1 500 FCFA ». */
export const formatFcfa = (n: number) => `${formatNumber(n)} FCFA`
