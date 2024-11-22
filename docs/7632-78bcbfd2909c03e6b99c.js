"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[7632],{7632:function(e,n,t){t.r(n),n.default="import { EmblaCarouselType } from 'embla-carousel'\n\nexport const addAutoplayProgressListeners = (\n  emblaApi: EmblaCarouselType,\n  progressNode: HTMLElement\n): (() => void) => {\n  const progressBarNode = <HTMLElement>(\n    progressNode.querySelector('.embla__progress__bar')\n  )\n\n  let animationName = ''\n  let timeoutId = 0\n  let rafId = 0\n\n  const startProgress = (emblaApi: EmblaCarouselType) => {\n    const autoplay = emblaApi?.plugins()?.autoplay\n    if (!autoplay) return\n\n    const timeUntilNext = autoplay.timeUntilNext()\n    if (timeUntilNext === null) return\n\n    if (!animationName) {\n      const style = window.getComputedStyle(progressBarNode)\n      animationName = style.animationName\n    }\n\n    progressBarNode.style.animationName = 'none'\n    progressBarNode.style.transform = 'translate3d(0,0,0)'\n\n    rafId = window.requestAnimationFrame(() => {\n      timeoutId = window.setTimeout(() => {\n        progressBarNode.style.animationName = animationName\n        progressBarNode.style.animationDuration = `${timeUntilNext}ms`\n      }, 0)\n    })\n\n    progressNode.classList.remove('embla__progress--hidden')\n  }\n\n  const stopProgress = (emblaApi: EmblaCarouselType) => {\n    const autoplay = emblaApi?.plugins()?.autoplay\n    if (!autoplay) return\n\n    progressNode.classList.add('embla__progress--hidden')\n  }\n\n  emblaApi\n    .on('autoplay:timerset', startProgress)\n    .on('autoplay:timerstopped', stopProgress)\n\n  return () => {\n    emblaApi\n      .off('autoplay:timerset', startProgress)\n      .off('autoplay:timerstopped', stopProgress)\n  }\n}\n"}}]);
//# sourceMappingURL=7632-78bcbfd2909c03e6b99c.js.map