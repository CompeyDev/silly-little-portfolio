import { useRef, useState } from "react";

let animationController;

export default function App() {
    // const [file, setFile] = useState(null);
    const canvasRef: React.MutableRefObject<any> = useRef();
    const audioRef: React.MutableRefObject<any> = useRef();
    const source: React.MutableRefObject<MediaElementAudioSourceNode> = useRef();
    const analyzer: React.MutableRefObject<AnalyserNode> = useRef();

    const handleAudioPlay = () => {
        let audioContext = new AudioContext();
        if (!source.current) {
            console.log('#1')
            source.current = audioContext.createMediaElementSource(audioRef.current);
            analyzer.current = audioContext.createAnalyser();
            source.current.connect(analyzer.current);
            analyzer.current.connect(audioContext.destination);
        }
        console.log('#2')
        visualizeData();
    };
    const visualizeData = () => {
        animationController = window.requestAnimationFrame(visualizeData);

        if (audioRef.current && audioRef.current.paused) {
            return cancelAnimationFrame(animationController);
        }
        const songData = new Uint8Array(140);
        analyzer.current.getByteFrequencyData(songData);
        const bar_width = 3;
        let start = 0;
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        for (let i = 0; i < songData.length; i++) {
            // compute x coordinate where we would draw
            start = i * 4;
            //create a gradient for the  whole canvas
            let gradient = ctx.createLinearGradient(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );
            gradient.addColorStop(0.2, "#2392f5");
            gradient.addColorStop(0.5, "#fe0095");
            gradient.addColorStop(1.0, "purple");
            ctx.fillStyle = gradient;
            ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
        }
    };

    return (
        <div className="App">
                <audio
                    ref={audioRef}
                    onPlay={handleAudioPlay}
                    src={"/hi.mp3"}
                    controls
                />
            <canvas ref={canvasRef} width={500} height={200} />
        </div>
    );
}