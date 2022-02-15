import {FC, useCallback, useRef} from "react";
// @ts-ignore
import html2canvas from 'html2canvas-render-offscreen'

// import html2canvas from "html2canvas";

export interface TransformObject {
    el: HTMLElement,
    shortcutId: string,
    localUrl?: string
}

export type FullTransformObject = Required<TransformObject>

export interface TransformParams {
    info: TransformObject,
    index: number,
    list: TransformObject[],
    progress: number,
}


interface ShortcutContextProps {
    onTransformEnd?: (transformList: FullTransformObject[]) => void

    beforeTransform?: (els: HTMLElement[]) => HTMLElement[]
    onTransform?: (params: TransformParams) => void,

}

const getBlobUrlByCanvas = (canvas: HTMLCanvasElement, type = 'image/png', quality = 0.2): Promise<string> => {
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {

            if (!blob) return reject(new Error('transofrm error'))

            const url = URL.createObjectURL(blob);

            resolve(url)

        }, type, quality)
    })
}

const nextAnimationFrame = () => {
    return new Promise(r => {
        requestAnimationFrame(r)
    })
}

const sleep = (timeout = 1000) => {
    return new Promise(r => {
        setTimeout(r, timeout)
    })
}


const ShortcutContext: FC<ShortcutContextProps> = (
    {
        children,
        onTransformEnd,
        onTransform,
        beforeTransform = v => v,
    }
) => {

    const $containerEl = useRef<HTMLDivElement>(null)


    const handleCreate = useCallback(async () => {
        if (!$containerEl.current) return

        const els = beforeTransform(Array.from($containerEl.current.querySelectorAll<HTMLParagraphElement>('.shortcut'))).slice(0, 10)

        const transformList = els.map<TransformObject>(el => {
            return {
                el,
                shortcutId: el.dataset.shortcutId || '',
            }
        })

        const transformCount = transformList.length

        const resultTransformList: FullTransformObject[] = []

        for (let i = 0; i < transformCount; i++) {
            const info = transformList[i]
            const {el} = info;
            const canvasElement = await html2canvas(el);
            info.localUrl = await getBlobUrlByCanvas(canvasElement);

            canvasElement.remove()
            const progress = Math.floor(((i + 1) / transformCount) * 100);

            onTransform?.({info, index: i, list: transformList, progress});

            resultTransformList.push(info as FullTransformObject)
        }

        onTransformEnd?.(resultTransformList)

    }, [beforeTransform, onTransform, onTransformEnd])


    return (
        <div ref={$containerEl}>

            <button onClick={handleCreate}>生成图片</button>

            {children}

        </div>
    )
}


export default ShortcutContext
