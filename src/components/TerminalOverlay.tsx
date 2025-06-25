const TerminalOverlay = () => {
  return (
    <div className="absolute bottom-4 left-4 right-4 z-50">
      <div className="relative bg-terminal-bg backdrop-blur-md border border-cyber-glow-primary rounded-xl p-4 overflow-hidden font-mono text-[13px] shadow-[0_0_20px_var(--cyber-glow-primary)]">
        {/* Glowing Scanline */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_6px] animate-scanline pointer-events-none" />

        {/* Status Bar */}
        <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs tracking-wide">AI STATUS: ACTIVE</span>
          </div>
          <span className="text-muted-foreground text-xs tracking-widest">ID# 78412-∆SYS</span>
        </div>

        {/* Terminal Output */}
        <p className="text-foreground mb-3 tracking-tight">
          <span className="text-accent mr-2">[✔]</span> Workout Summary Complete
        </p>

        <div className="space-y-2 text-muted-foreground">
          {[
            '32 mins Resistance Training — Core & Upper',
            '18 mins HIIT — Treadmill | Avg HR: 138 bpm',
            '7 mins Deep Stretch — Cool Down'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-accent font-bold">{String(idx + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalOverlay;
