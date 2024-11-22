"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5350],{5350:function(n,e,t){t.r(e),e.default="import { useCallback, useEffect, useRef, useState } from 'react';\n\nexport const useAutoplayProgress = (emblaApi, progressNode) => {\n    const [showAutoplayProgress, setShowAutoplayProgress] = useState(false);\n    const animationName = useRef('');\n    const timeoutId = useRef(0);\n    const rafId = useRef(0);\n    \n    const startProgress = useCallback((timeUntilNext) => {\n        const node = progressNode.current;\n        \n        if (!node)\n            return;\n        if (timeUntilNext === null)\n            return;\n        \n        if (!animationName.current) {\n            const style = window.getComputedStyle(node);\n            animationName.current = style.animationName;\n        }\n        \n        node.style.animationName = 'none';\n        node.style.transform = 'translate3d(0,0,0)';\n        \n        rafId.current = window.requestAnimationFrame(() => {\n            timeoutId.current = window.setTimeout(() => {\n                node.style.animationName = animationName.current;\n                node.style.animationDuration = `${timeUntilNext}ms`;\n            }, 0);\n        });\n        \n        setShowAutoplayProgress(true);\n    }, []);\n    \n    useEffect(() => {\n        const autoplay = emblaApi?.plugins()?.autoplay;\n        if (!autoplay)\n            return;\n        \n        emblaApi\n            .on('autoplay:timerset', () => startProgress(autoplay.timeUntilNext()))\n            .on('autoplay:timerstopped', () => setShowAutoplayProgress(false));\n    }, [emblaApi]);\n    \n    useEffect(() => {\n        return () => {\n            cancelAnimationFrame(rafId.current);\n            clearTimeout(timeoutId.current);\n        };\n    }, []);\n    \n    return {\n        showAutoplayProgress\n    };\n};\n"}}]);
//# sourceMappingURL=5350-856687902ef2b9ae10d0.js.map