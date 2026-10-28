export type ClassValue = string | false | null | undefined

/** Assemble des noms de classes en ignorant les valeurs vides. */
export function cx(...values: ClassValue[]): string {
    return values.filter(Boolean).join(' ')
}
