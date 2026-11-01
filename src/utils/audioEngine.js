// Pure Web Audio API synthesized ambient investigative audio
let audioCtx = null;
let oscillatorNode = null;
let gainNode = null;
let biquadFilter = null;
let intervalId = null;

export const startAmbientBriefingAudio = () => {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Master gain
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);

    // Filter for low-pass warm tape sound
    biquadFilter = audioCtx.createBiquadFilter();
    biquadFilter.type = 'lowpass';
    biquadFilter.frequency.setValueAtTime(450, audioCtx.currentTime);

    // Warm deep drone oscillator (55Hz / A1)
    oscillatorNode = audioCtx.createOscillator();
    oscillatorNode.type = 'sine';
    oscillatorNode.frequency.setValueAtTime(55, audioCtx.currentTime);

    oscillatorNode.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillatorNode.start();

    // Subtle radio pulse / telemetry sound every 3 seconds
    intervalId = setInterval(() => {
      if (!audioCtx || audioCtx.state !== 'running') return;
      try {
        const pingOsc = audioCtx.createOscillator();
        const pingGain = audioCtx.createGain();
        pingOsc.type = 'sine';
        pingOsc.frequency.setValueAtTime(880, audioCtx.currentTime);
        pingOsc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.15);

        pingGain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        pingGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.15);

        pingOsc.connect(pingGain);
        pingGain.connect(audioCtx.destination);

        pingOsc.start();
        pingOsc.stop(audioCtx.currentTime + 0.16);
      } catch (e) {
        // audio context safety
      }
    }, 2800);

  } catch (err) {
    console.warn("Web Audio API not supported or autoplay blocked:", err);
  }
};

export const stopAmbientBriefingAudio = () => {
  try {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    if (oscillatorNode) {
      oscillatorNode.stop();
      oscillatorNode.disconnect();
      oscillatorNode = null;
    }
  } catch (err) {
    console.warn("Error stopping audio:", err);
  }
};

