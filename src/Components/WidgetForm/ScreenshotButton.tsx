import { Camera } from "phosphor-react";
import { useState } from "react";
import html2canvas from 'html2canvas'
import { Loading } from "../Loading";

interface ScreenshotButtonProps{
    screenshot: string;
    onScreenshotTook: (screenshot: string) => void
}

export function ScreenshotButton({ screenshot, onScreenshotTook}: ScreenshotButtonProps){
  

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

   async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const based64image = canvas.toDataURL('image/png')

        onScreenshotTook(based64image)
        setIsTakingScreenshot(false);
    }

    if(screenshot){
        return(
        <p>foto</p>
        )
    }

    return (
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transitions-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
            onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ? (
                <Loading />
            ) : (
                <Camera className="w-6 h-6 text-zinc-100 " />
            )}

        </button>
    );
}
