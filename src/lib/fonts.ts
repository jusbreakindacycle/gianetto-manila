import { Cormorant_Garamond, Manrope } from "next/font/google"

/**
 * Shared font loaders. Extracted from the root layout so global-error.tsx
 * (which must render its own <html>/<body> and cannot import the root
 * layout) can apply the same Manrope/Cormorant Garamond variables and
 * design-system typography instead of an unrelated fallback stack.
 */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
})

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
})

export { manrope, cormorantGaramond }
