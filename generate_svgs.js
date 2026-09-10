const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'images', 'simple3d');

function writeSvg(relPath, content) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log('Generated SVG:', relPath);
}

// 1. Agile: 3D Sprint Loop
writeSvg('solutions/agile.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="agile-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#191929"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <linearGradient id="agile-track" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#agile-bg)"/>

  <!-- Ambient Glow -->
  <circle cx="400" cy="225" r="160" fill="#6366f1" opacity="0.18" filter="url(#glow1)"/>

  <!-- Isometric Ground Shadow -->
  <ellipse cx="400" cy="265" rx="230" ry="90" fill="#050508" opacity="0.7"/>

  <!-- 3D Sprint Loop Ribbon -->
  <g transform="translate(400, 220)">
    <!-- Base Extrusion -->
    <ellipse cx="0" cy="25" rx="210" ry="85" fill="none" stroke="#312e81" stroke-width="38" opacity="0.6"/>
    <!-- Main Glowing Track -->
    <ellipse cx="0" cy="10" rx="210" ry="85" fill="none" stroke="url(#agile-track)" stroke-width="36" filter="url(#glow1)"/>
    <ellipse cx="0" cy="10" rx="160" ry="60" fill="#0d0d16" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
  </g>

  <!-- Center Delivered Feature 3D Gift Cube -->
  <g transform="translate(400, 195)">
    <ellipse cx="0" cy="35" rx="35" ry="14" fill="rgba(0,0,0,0.5)"/>
    <polygon points="0,-28 32,-12 0,4 -32,-12" fill="#a5b4fc"/>
    <polygon points="-32,-12 0,4 0,36 -32,20" fill="#4f46e5"/>
    <polygon points="0,4 32,-12 32,20 0,36" fill="#6366f1"/>
    <line x1="0" y1="-28" x2="0" y2="36" stroke="#e0e7ff" stroke-width="3" opacity="0.8"/>
    <line x1="-32" y1="-12" x2="32" y2="-12" stroke="#e0e7ff" stroke-width="3" opacity="0.8"/>
    <circle cx="0" cy="4" r="5" fill="#38bdf8" filter="url(#glow1)"/>
  </g>

  <!-- Milestone Flag 1: PLAN -->
  <g transform="translate(200, 185)">
    <line x1="0" y1="0" x2="0" y2="-45" stroke="#a5b4fc" stroke-width="4" stroke-linecap="round"/>
    <polygon points="0,-45 50,-32 0,-18" fill="#38bdf8" filter="url(#glow1)"/>
    <text x="14" y="-30" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#fff">PLAN</text>
  </g>

  <!-- Milestone Flag 2: SPRINT -->
  <g transform="translate(400, 105)">
    <line x1="0" y1="0" x2="0" y2="-45" stroke="#c084fc" stroke-width="4" stroke-linecap="round"/>
    <polygon points="0,-45 60,-32 0,-18" fill="#ec4899" filter="url(#glow1)"/>
    <text x="11" y="-29" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#fff">SPRINT</text>
  </g>

  <!-- Milestone Flag 3: REVIEW -->
  <g transform="translate(600, 185)">
    <line x1="0" y1="0" x2="0" y2="-45" stroke="#a5b4fc" stroke-width="4" stroke-linecap="round"/>
    <polygon points="0,-45 60,-32 0,-18" fill="#818cf8" filter="url(#glow1)"/>
    <text x="11" y="-30" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="800" fill="#fff">REVIEW</text>
  </g>

  <!-- Milestone Flag 4: DEPLOY -->
  <g transform="translate(400, 310)">
    <line x1="0" y1="0" x2="0" y2="-45" stroke="#6ee7b7" stroke-width="4" stroke-linecap="round"/>
    <polygon points="0,-45 60,-32 0,-18" fill="#10b981" filter="url(#glow1)"/>
    <text x="10" y="-30" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="800" fill="#fff">DEPLOY</text>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#c7d2fe" letter-spacing="2">RAPID 2-WEEK ITERATION SPRINT CYCLE</text>
</svg>`);

// 2. Planning: 3D Blueprint & Lightbulb
writeSvg('solutions/planning.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="plan-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#18152c"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <linearGradient id="plan-sheet" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <filter id="glowYellow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#plan-bg)"/>
  <ellipse cx="400" cy="285" rx="230" ry="75" fill="#050508" opacity="0.7"/>

  <!-- 3D Blueprint Sheet -->
  <g transform="translate(400, 235)">
    <polygon points="-170,-55 140,-120 190,55 -120,120" fill="url(#plan-sheet)" stroke="#4f46e5" stroke-width="2"/>
    <!-- Grid -->
    <g stroke="#6366f1" stroke-width="1" opacity="0.35">
      <line x1="-130" y1="-25" x2="150" y2="-85"/>
      <line x1="-100" y1="5" x2="165" y2="-55"/>
      <line x1="-70" y1="35" x2="175" y2="-20"/>
      <line x1="-40" y1="65" x2="170" y2="15"/>
      <line x1="-120" y1="-65" x2="-80" y2="100"/>
      <line x1="-60" y1="-80" x2="-20" y2="85"/>
      <line x1="0" y1="-95" x2="40" y2="70"/>
      <line x1="60" y1="-110" x2="100" y2="55"/>
    </g>
    <!-- Wireframe Boxes -->
    <polygon points="-80,-10 0,-28 25,-10 -55,8" fill="rgba(99,102,241,0.25)" stroke="#a5b4fc" stroke-width="2"/>
    <polygon points="30,-22 85,-35 105,-22 50,-8" fill="rgba(99,102,241,0.25)" stroke="#38bdf8" stroke-width="2"/>
  </g>

  <!-- Giant Glowing Lightbulb -->
  <g transform="translate(400, 155)" filter="url(#glowYellow)">
    <circle cx="0" cy="0" r="50" fill="#f59e0b" opacity="0.25"/>
    <path d="M -32 0 C -32 -22 32 -22 32 0 C 32 16 16 26 14 38 L -14 38 C -16 26 -32 16 -32 0 Z" fill="#fbbf24"/>
    <rect x="-14" y="38" width="28" height="8" rx="3" fill="#94a3b8"/>
    <rect x="-11" y="46" width="22" height="7" rx="3" fill="#64748b"/>
    <ellipse cx="0" cy="53" rx="7" ry="3" fill="#334155"/>
    <path d="M -10 22 L -5 4 L 0 18 L 5 4 L 10 22" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="0" y1="-60" x2="0" y2="-78" stroke="#fef08a" stroke-width="4" stroke-linecap="round"/>
    <line x1="-50" y1="-35" x2="-65" y2="-50" stroke="#fef08a" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="-35" x2="65" y2="-50" stroke="#fef08a" stroke-width="4" stroke-linecap="round"/>
  </g>

  <!-- Checklist Card on Right -->
  <g transform="translate(560, 200)">
    <rect x="-45" y="-35" width="90" height="70" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
    <polyline points="-25,-12 -18,-5 -5,-18" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <line x1="5" y1="-12" x2="30" y2="-12" stroke="#c7d2fe" stroke-width="3" stroke-linecap="round"/>
    <polyline points="-25,12 -18,19 -5,6" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <line x1="5" y1="12" x2="30" y2="12" stroke="#c7d2fe" stroke-width="3" stroke-linecap="round"/>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#fde047" letter-spacing="2">CLEAR BLUEPRINT &amp; REQUIREMENTS</text>
</svg>`);

// 3. Testing: 3D Shield & Bug Stopper
writeSvg('solutions/testing.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="test-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#0f2233"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
    <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#test-bg)"/>
  <ellipse cx="380" cy="305" rx="200" ry="55" fill="#040810" opacity="0.8"/>

  <!-- 3D Security Shield -->
  <g transform="translate(370, 195)" filter="url(#glowCyan)">
    <!-- Base Extrusion -->
    <path d="M 0 -90 Q 70 -90 90 -45 Q 110 50 0 110 Q -110 50 -90 -45 Q -70 -90 0 -90 Z" fill="#0c4a6e" transform="translate(8, 12)"/>
    <!-- Main Body -->
    <path d="M 0 -90 Q 70 -90 90 -45 Q 110 50 0 110 Q -110 50 -90 -45 Q -70 -90 0 -90 Z" fill="url(#shieldGrad)" stroke="#7dd3fc" stroke-width="4"/>
    <path d="M 0 -70 Q 55 -70 70 -35 Q 85 40 0 85 Q -85 40 -70 -35 Q -55 -70 0 -70 Z" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
    <!-- Green Checkmark -->
    <path d="M -30 5 L -8 32 L 40 -30" fill="none" stroke="#10b981" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Deflected Red Bug -->
  <g transform="translate(580, 180)">
    <path d="M -35 -50 Q -20 0 -35 50" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6 6" opacity="0.8"/>
    <!-- Red Bug -->
    <ellipse cx="20" cy="0" rx="22" ry="26" fill="#ef4444" stroke="#f87171" stroke-width="3"/>
    <circle cx="20" cy="-24" r="12" fill="#b91c1c"/>
    <circle cx="15" cy="-26" r="3" fill="#fff"/>
    <circle cx="25" cy="-26" r="3" fill="#fff"/>
    <!-- Legs -->
    <path d="M 2 -12 L -15 -25 M 38 -12 L 55 -25 M -2 0 L -20 0 M 42 0 L 60 0 M 2 12 L -15 25 M 38 12 L 55 25" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
    <!-- Crossout X -->
    <line x1="-5" y1="-18" x2="45" y2="18" stroke="#fca5a5" stroke-width="4" stroke-linecap="round"/>
    <line x1="-5" y1="18" x2="45" y2="-18" stroke="#fca5a5" stroke-width="4" stroke-linecap="round"/>
  </g>

  <!-- Badges on Left -->
  <g transform="translate(170, 175)">
    <rect x="-40" y="-18" width="80" height="36" rx="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#34d399">100% PASS</text>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#38bdf8" letter-spacing="2">AUTOMATED TESTING &amp; ZERO BUGS</text>
</svg>`);

// 4. DevOps: 3D Infinity Ribbon
writeSvg('solutions/devops.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="dev-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1a112c"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="35%" stop-color="#6366f1"/>
      <stop offset="65%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <filter id="glowPink" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#dev-bg)"/>
  <ellipse cx="400" cy="285" rx="250" ry="65" fill="#05040a" opacity="0.8"/>

  <!-- 3D Infinity Ribbon -->
  <g filter="url(#glowPink)" transform="translate(400, 205)">
    <path d="M -150 0 C -150 -65 -65 -65 0 0 C 65 65 150 65 150 0 C 150 -65 65 -65 0 0 C -65 65 -150 65 -150 0 Z" fill="none" stroke="#2e1065" stroke-width="44" opacity="0.6" transform="translate(0, 10)"/>
    <path d="M -150 0 C -150 -65 -65 -65 0 0 C 65 65 150 65 150 0 C 150 -65 65 -65 0 0 C -65 65 -150 65 -150 0 Z" fill="none" stroke="url(#infGrad)" stroke-width="36" stroke-linecap="round"/>
    <path d="M -150 0 C -150 -65 -65 -65 0 0 C 65 65 150 65 150 0 C 150 -65 65 -65 0 0 C -65 65 -150 65 -150 0 Z" fill="none" stroke="#fff" stroke-width="3.5" opacity="0.75"/>
  </g>

  <!-- Left Code Block -->
  <g transform="translate(240, 205)">
    <rect x="-30" y="-30" width="60" height="60" rx="14" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="0" y="8" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="800" fill="#38bdf8">&lt;/&gt;</text>
  </g>

  <!-- Right Cloud Server Block -->
  <g transform="translate(560, 205)">
    <rect x="-30" y="-30" width="60" height="60" rx="14" fill="#1e1b4b" stroke="#ec4899" stroke-width="2.5"/>
    <path d="M -12 6 C -18 6 -18 -4 -10 -4 C -10 -13 4 -13 8 -4 C 15 -4 17 6 8 6 Z" fill="#f472b6"/>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#f472b6" letter-spacing="2">AUTOMATED CI/CD PIPELINE</text>
</svg>`);

// 5. Reusable Components: 3D Interlocking Lego Blocks
writeSvg('solutions/reusable.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="lego-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#121e29"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#lego-bg)"/>
  <ellipse cx="400" cy="295" rx="230" ry="65" fill="#04080e" opacity="0.75"/>

  <!-- Purple Base Lego Block -->
  <g transform="translate(340, 235)">
    <polygon points="0,-35 55,-8 0,18 -55,-8" fill="#818cf8"/>
    <polygon points="-55,-8 0,18 0,62 -55,36" fill="#4338ca"/>
    <polygon points="0,18 55,-8 55,36 0,62" fill="#6366f1"/>
    <ellipse cx="-22" cy="-12" rx="9" ry="4.5" fill="#a5b4fc"/>
    <ellipse cx="22" cy="-12" rx="9" ry="4.5" fill="#a5b4fc"/>
  </g>

  <!-- Cyan Adjacent Block -->
  <g transform="translate(450, 235)">
    <polygon points="0,-35 55,-8 0,18 -55,-8" fill="#38bdf8"/>
    <polygon points="-55,-8 0,18 0,62 -55,36" fill="#0284c7"/>
    <polygon points="0,18 55,-8 55,36 0,62" fill="#0ea5e9"/>
    <ellipse cx="-22" cy="-12" rx="9" ry="4.5" fill="#7dd3fc"/>
    <ellipse cx="22" cy="-12" rx="9" ry="4.5" fill="#7dd3fc"/>
  </g>

  <!-- Green Floating Block Snapping Down -->
  <g transform="translate(395, 140)">
    <line x1="0" y1="50" x2="0" y2="70" stroke="#34d399" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="4 4"/>
    <polygon points="0,75 -5,66 5,66" fill="#34d399"/>
    <polygon points="0,-35 55,-8 0,18 -55,-8" fill="#34d399"/>
    <polygon points="-55,-8 0,18 0,55 -55,29" fill="#059669"/>
    <polygon points="0,18 55,-8 55,29 0,55" fill="#10b981"/>
    <ellipse cx="-22" cy="-12" rx="9" ry="4.5" fill="#6ee7b7"/>
    <ellipse cx="22" cy="-12" rx="9" ry="4.5" fill="#6ee7b7"/>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#34d399" letter-spacing="2">MODULAR REUSABLE BUILDING BLOCKS</text>
</svg>`);

// 6. AI-Assisted: 3D Robot / AI Brain Companion
writeSvg('solutions/ai-dev.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="ai-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1f1338"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <filter id="glowAi2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#ai-bg)"/>
  <ellipse cx="400" cy="295" rx="230" ry="65" fill="#06030c" opacity="0.8"/>

  <!-- 3D Laptop on Left -->
  <g transform="translate(320, 235)">
    <polygon points="-75,0 55,-45 130,0 0,45" fill="#1e293b" stroke="#475569" stroke-width="2"/>
    <polygon points="-75,0 55,-45 55,-120 -75,-75" fill="#090d16" stroke="#6366f1" stroke-width="2.5"/>
    <line x1="-60" y1="-60" x2="0" y2="-82" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="-60" y1="-42" x2="20" y2="-68" stroke="#a855f7" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="-60" y1="-24" x2="35" y2="-54" stroke="#34d399" stroke-width="3.5" stroke-linecap="round"/>
  </g>

  <!-- Cute Glowing 3D AI Robot Assistant -->
  <g transform="translate(505, 175)" filter="url(#glowAi2)">
    <ellipse cx="0" cy="85" rx="32" ry="10" fill="rgba(0,0,0,0.5)"/>
    <circle cx="0" cy="0" r="48" fill="#8b5cf6" opacity="0.25"/>
    <circle cx="0" cy="0" r="38" fill="#6366f1" stroke="#c084fc" stroke-width="3"/>
    <rect x="-22" y="-14" width="44" height="28" rx="10" fill="#0b0a1a"/>
    <!-- Glowing Cute Eyes -->
    <path d="M -13 -2 Q -9 -7 -5 -2" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
    <path d="M 5 -2 Q 9 -7 13 -2" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
    <line x1="0" y1="-38" x2="0" y2="-52" stroke="#c084fc" stroke-width="3"/>
    <circle cx="0" cy="-56" r="5" fill="#ec4899"/>
    <!-- Sparkles -->
    <polygon points="-50,-10 -58,-18 -66,-10 -58,-2" fill="#fef08a"/>
    <polygon points="-75,18 -81,11 -88,18 -81,25" fill="#38bdf8"/>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#c084fc" letter-spacing="2">AI-POWERED CODE AUTOCOMPLETE &amp; PAIRING</text>
</svg>`);

// 7. Complexity: Tangled Spaghetti vs Clean Stack
writeSvg('causes/complexity.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="comp-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1c141d"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#comp-bg)"/>
  <ellipse cx="400" cy="300" rx="240" ry="65" fill="#070407" opacity="0.8"/>

  <!-- Left: Clean Modular Cube Stack -->
  <g transform="translate(260, 200)">
    <rect x="-70" y="-85" width="140" height="170" rx="16" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" stroke-width="1.5"/>
    <text x="0" y="-60" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#10b981">MODULAR ARCHITECTURE</text>
    <!-- 3 Clean Stacked Cubes -->
    <g transform="translate(0, 35)">
      <polygon points="0,-20 35,-6 0,8 -35,-6" fill="#38bdf8"/>
      <polygon points="-35,-6 0,8 0,26 -35,12" fill="#0284c7"/>
      <polygon points="0,8 35,-6 35,12 0,26" fill="#0ea5e9"/>
    </g>
    <g transform="translate(0, 0)">
      <polygon points="0,-20 35,-6 0,8 -35,-6" fill="#818cf8"/>
      <polygon points="-35,-6 0,8 0,26 -35,12" fill="#4338ca"/>
      <polygon points="0,8 35,-6 35,12 0,26" fill="#6366f1"/>
    </g>
    <g transform="translate(0, -35)">
      <polygon points="0,-20 35,-6 0,8 -35,-6" fill="#34d399"/>
      <polygon points="-35,-6 0,8 0,26 -35,12" fill="#059669"/>
      <polygon points="0,8 35,-6 35,12 0,26" fill="#10b981"/>
    </g>
  </g>

  <!-- VS Separator -->
  <text x="400" y="210" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="900" fill="#71717a">VS</text>

  <!-- Right: Tangled Spaghetti Monolith -->
  <g transform="translate(540, 200)">
    <rect x="-70" y="-85" width="140" height="170" rx="16" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" stroke-width="1.5"/>
    <text x="0" y="-60" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#ef4444">TANGLED SPAGHETTI</text>
    <!-- Chaotic Tangled Wires -->
    <path d="M -40 25 C -10 -40 30 50 40 -10 C 50 -40 -20 -10 -30 40 C 20 40 40 -25 -20 -25 C -50 -10 10 30 35 15" fill="none" stroke="#f87171" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 30 35 C -30 -30 40 -40 -40 10 C 20 -40 -30 30 20 10" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
    <path d="M -25 -20 C 35 0 -15 35 30 -30" fill="none" stroke="#f472b6" stroke-width="3" stroke-linecap="round"/>
    <!-- Warning Badge -->
    <circle cx="0" cy="20" r="14" fill="#ef4444"/>
    <text x="0" y="25" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="900" fill="#fff">!</text>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#f87171" letter-spacing="2">MASSIVE MONOLITHS &amp; UNCONTROLLED COMPLEXITY</text>
</svg>`);

// 8. Poor Requirements: Mismatched Puzzle Pieces
writeSvg('causes/poor-requirements.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="req-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1f1816"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#req-bg)"/>
  <ellipse cx="400" cy="295" rx="220" ry="60" fill="#090503" opacity="0.75"/>

  <!-- Left Puzzle Piece (Indigo: Client Wants) -->
  <g transform="translate(300, 195)">
    <rect x="-60" y="-50" width="100" height="100" rx="14" fill="#4f46e5" stroke="#818cf8" stroke-width="3"/>
    <circle cx="40" cy="0" r="18" fill="#4f46e5" stroke="#818cf8" stroke-width="3"/>
    <text x="-10" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="800" fill="#fff">USER NEED</text>
  </g>

  <!-- Gap Floating Question Mark -->
  <g transform="translate(400, 165)">
    <circle cx="0" cy="0" r="28" fill="#f97316" opacity="0.2"/>
    <circle cx="0" cy="0" r="20" fill="#ea580c"/>
    <text x="0" y="8" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="900" fill="#fff">?</text>
  </g>

  <!-- Right Puzzle Piece (Orange: What Developer Built, Mismatched Edge) -->
  <g transform="translate(500, 195)">
    <rect x="-40" y="-50" width="100" height="100" rx="14" fill="#c2410c" stroke="#fb923c" stroke-width="3"/>
    <!-- Incompatible Triangle Notch -->
    <polygon points="-40,-15 -20,0 -40,15" fill="#1f1816" stroke="#fb923c" stroke-width="3"/>
    <text x="10" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#fff">WHAT BUILT</text>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#fb923c" letter-spacing="2">COMMUNICATION GAP &amp; MISUNDERSTOOD SCOPE</text>
</svg>`);

// 9. Skills Gap: Bridge with Missing Section
writeSvg('causes/skills-gap.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="skill-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#111c2b"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
  </defs>

  <rect width="800" height="450" fill="url(#skill-bg)"/>
  <ellipse cx="400" cy="305" rx="240" ry="60" fill="#04070d" opacity="0.8"/>

  <!-- Left Platform (Junior / Untrained Team) -->
  <g transform="translate(230, 220)">
    <polygon points="-70,-20 60,-20 30,30 -100,30" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <!-- Character Avatar -->
    <circle cx="-20" cy="-45" r="16" fill="#38bdf8"/>
    <path d="M -36 -15 C -36 -32 -4 -32 -4 -15 Z" fill="#0284c7"/>
    <text x="-20" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="700" fill="#94a3b8">ENGINEERING TALENT</text>
  </g>

  <!-- Missing Bridge Gap with Downward Warning -->
  <g transform="translate(400, 220)">
    <line x1="-80" y1="5" x2="80" y2="5" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 6"/>
    <text x="0" y="-10" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="900" fill="#ef4444">WIDE SKILLS GAP</text>
    <path d="M -15 15 L 0 30 L 15 15" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- Right Platform (Enterprise Demand / Complex Cloud Tech) -->
  <g transform="translate(570, 220)">
    <polygon points="-60,-20 70,-20 40,30 -90,30" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
    <!-- Goal Trophy / Star -->
    <polygon points="-10,-55 -6,-42 7,-42 -3,-33 1,-20 -10,-28 -21,-20 -17,-33 -27,-42 -14,-42" fill="#fbbf24"/>
    <text x="-10" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="700" fill="#a5b4fc">RAPID TECH DEMAND</text>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#38bdf8" letter-spacing="2">HIGH SOFTWARE DEMAND VS SHORTAGE OF TRAINED TALENT</text>
</svg>`);

// 10. Deadlines & Budgets: 3D Pressure Stopwatch
writeSvg('causes/deadlines.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="dead-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#221115"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#dead-bg)"/>
  <ellipse cx="400" cy="305" rx="220" ry="60" fill="#080304" opacity="0.8"/>

  <!-- 3D Glowing Ticking Stopwatch -->
  <g transform="translate(350, 195)" filter="url(#glowRed)">
    <circle cx="0" cy="0" r="75" fill="#180c0e" stroke="#ef4444" stroke-width="5"/>
    <circle cx="0" cy="0" r="62" fill="#2d1216" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
    <!-- Top Button -->
    <rect x="-10" y="-90" width="20" height="15" rx="3" fill="#ef4444"/>
    <!-- Hour Marks -->
    <line x1="0" y1="-55" x2="0" y2="-45" stroke="#fff" stroke-width="3"/>
    <line x1="55" y1="0" x2="45" y2="0" stroke="#fff" stroke-width="3"/>
    <line x1="0" y1="55" x2="0" y2="45" stroke="#fff" stroke-width="3"/>
    <line x1="-55" y1="0" x2="-45" y2="0" stroke="#fff" stroke-width="3"/>
    <!-- Red Urgency Hand at 11:59 -->
    <line x1="0" y1="0" x2="-8" y2="-48" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="7" fill="#fff"/>
  </g>

  <!-- Burning / Ripped Calendar Sheet on Right -->
  <g transform="translate(530, 195)">
    <rect x="-45" y="-50" width="90" height="100" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <rect x="-45" y="-50" width="90" height="25" rx="10" fill="#ef4444"/>
    <text x="0" y="-32" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="900" fill="#fff">DEADLINE</text>
    <!-- Big Rushed 'OVERDUE' -->
    <text x="0" y="15" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="34" font-weight="900" fill="#ef4444">00</text>
    <text x="0" y="38" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="700" fill="#94a3b8">DAYS LEFT</text>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#ef4444" letter-spacing="2">IMPOSSIBLE TIMELINES LEAD TO RUSHED, BROKEN CODE</text>
</svg>`);

// 11. SDLC: 3D 6-Phase Hex Carousel Ring
writeSvg('sdlc/sdlc-cycle.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="sdlc-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#151b2e"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <linearGradient id="sdlc-ring" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="25%" stop-color="#6366f1"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="75%" stop-color="#ec4899"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <filter id="sdlc-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#sdlc-bg)"/>
  <ellipse cx="400" cy="275" rx="250" ry="80" fill="#04060d" opacity="0.8"/>

  <!-- 3D Continuous Hexagonal Cycle Ring -->
  <g filter="url(#sdlc-glow)" transform="translate(400, 215)">
    <ellipse cx="0" cy="15" rx="230" ry="90" fill="none" stroke="#1e293b" stroke-width="40" opacity="0.6"/>
    <ellipse cx="0" cy="0" rx="230" ry="90" fill="none" stroke="url(#sdlc-ring)" stroke-width="32"/>
    <ellipse cx="0" cy="0" rx="180" ry="60" fill="#0a0a14" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
  </g>

  <!-- Center SDLC Logo -->
  <g transform="translate(400, 215)">
    <text x="0" y="-5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="900" fill="#fff">SDLC</text>
    <text x="0" y="15" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="700" fill="#a5b4fc" letter-spacing="1">CONTINUOUS PROCESS</text>
  </g>

  <!-- 6 Phase Badges around Ring -->
  <!-- 1. Planning -->
  <g transform="translate(400, 110)">
    <rect x="-55" y="-18" width="110" height="36" rx="18" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#7dd3fc">1. PLANNING</text>
  </g>
  <!-- 2. Requirements -->
  <g transform="translate(610, 160)">
    <rect x="-65" y="-18" width="130" height="36" rx="18" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#c7d2fe">2. REQUIREMENTS</text>
  </g>
  <!-- 3. Design -->
  <g transform="translate(610, 270)">
    <rect x="-55" y="-18" width="110" height="36" rx="18" fill="#4c1d95" stroke="#c084fc" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#e9d5ff">3. DESIGN</text>
  </g>
  <!-- 4. Development -->
  <g transform="translate(400, 320)">
    <rect x="-65" y="-18" width="130" height="36" rx="18" fill="#831843" stroke="#f472b6" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#fbcfe8">4. DEVELOPMENT</text>
  </g>
  <!-- 5. Testing -->
  <g transform="translate(190, 270)">
    <rect x="-55" y="-18" width="110" height="36" rx="18" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#a7f3d0">5. TESTING</text>
  </g>
  <!-- 6. Deployment -->
  <g transform="translate(190, 160)">
    <rect x="-65" y="-18" width="130" height="36" rx="18" fill="#78350f" stroke="#fbbf24" stroke-width="2"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#fef08a">6. DEPLOYMENT</text>
  </g>

  <text x="400" y="420" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#94a3b8" letter-spacing="2">6-PHASE STRUCTURED SOFTWARE DEVELOPMENT LIFE CYCLE</text>
</svg>`);

// 12. Crisis: Hardware vs Software Capability Gap
writeSvg('crisis/software-crisis.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <radialGradient id="cri-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#19152b"/>
      <stop offset="100%" stop-color="#0a0a0f"/>
    </radialGradient>
    <filter id="glowCrisis" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#cri-bg)"/>
  <ellipse cx="400" cy="305" rx="240" ry="60" fill="#050308" opacity="0.8"/>

  <!-- Left: Hardware Rocket Soaring Upward -->
  <g transform="translate(250, 200)">
    <rect x="-75" y="-85" width="150" height="170" rx="16" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.25)" stroke-width="1.5"/>
    <text x="0" y="-60" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#38bdf8">HARDWARE CAPABILITY</text>
    <!-- Rising Green Arrow -->
    <path d="M -40 50 L 30 -30" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
    <polygon points="35,-35 22,-32 28,-18" fill="#10b981"/>
    <!-- Microchip -->
    <rect x="-25" y="10" width="50" height="50" rx="8" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
    <text x="0" y="40" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="900" fill="#fff">CPU</text>
    <text x="0" y="75" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#34d399">EXPONENTIAL GROWTH</text>
  </g>

  <!-- Center NATO 1968 Badge -->
  <g transform="translate(400, 200)">
    <circle cx="0" cy="0" r="32" fill="#1e1b4b" stroke="#818cf8" stroke-width="3" filter="url(#glowCrisis)"/>
    <text x="0" y="-4" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="900" fill="#fff">1968</text>
    <text x="0" y="12" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="9" font-weight="800" fill="#a5b4fc">NATO</text>
  </g>

  <!-- Right: Software Crisis Glitch & Overruns -->
  <g transform="translate(550, 200)">
    <rect x="-75" y="-85" width="150" height="170" rx="16" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.25)" stroke-width="1.5"/>
    <text x="0" y="-60" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" fill="#ef4444">SOFTWARE DELIVERY</text>
    <!-- Crashing Red Arrow -->
    <path d="M -40 -30 L 30 50" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
    <polygon points="35,55 32,42 18,48" fill="#ef4444"/>
    <!-- Crash Warning Terminal -->
    <rect x="-30" y="-15" width="60" height="40" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
    <text x="0" y="10" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="900" fill="#ef4444">FAIL</text>
    <text x="0" y="75" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#f87171">OVER BUDGET &amp; TIME</text>
  </g>

  <text x="400" y="415" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="600" fill="#c7d2fe" letter-spacing="2">THE GAP BETWEEN HARDWARE CAPABILITY &amp; SOFTWARE DELIVERY</text>
</svg>`);

console.log('ALL 12 Simple 3D SVGs generated successfully!');
