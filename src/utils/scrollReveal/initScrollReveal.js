import ScrollReveal from 'scrollreveal'
import { targetElements, defaultProps } from './scrollRevealConfig'

export default function initScrollReveal() {
  if (!targetElements.length) return

  ScrollReveal({ reset: false })

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation))
  })
}
