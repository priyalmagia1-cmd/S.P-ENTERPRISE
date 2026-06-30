import React from 'react';

interface FastenerSvgProps {
  type: string;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export default function FastenerSvg({ type, className = "w-16 h-16", color = "currentColor", strokeWidth = 1.5 }: FastenerSvgProps) {
  // Let's draw high-quality vector stylized industrial line art for each category.
  switch (type) {
    case 'hexagon-bolts':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Hex head */}
          <polygon points="15,40 15,60 30,70 45,60 45,40 30,30" className="fill-primary-blue/10" />
          <line x1="30" y1="30" x2="30" y2="70" />
          <line x1="15" y1="40" x2="45" y2="40" strokeDasharray="2 1" />
          <line x1="15" y1="60" x2="45" y2="60" strokeDasharray="2 1" />
          
          {/* Shaft */}
          <rect x="45" y="44" width="40" height="12" rx="1" className="fill-white" />
          {/* Threads */}
          <line x1="55" y1="44" x2="52" y2="56" />
          <line x1="60" y1="44" x2="57" y2="56" />
          <line x1="65" y1="44" x2="62" y2="56" />
          <line x1="70" y1="44" x2="67" y2="56" />
          <line x1="75" y1="44" x2="72" y2="56" />
          <line x1="80" y1="44" x2="77" y2="56" />
          <line x1="85" y1="44" x2="82" y2="56" />
          
          {/* Chamfered end */}
          <path d="M85,44 L87,46 L87,54 L85,56 Z" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case 'studs-rods':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Continuous threaded rod with two nuts on ends */}
          {/* Rod */}
          <rect x="15" y="44" width="70" height="12" rx="1" className="fill-white" />
          
          {/* Full thread lines */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1={20 + i * 4} y1="44" x2={17 + i * 4} y2="56" />
          ))}
          
          {/* Heavy Nut on Left */}
          <rect x="25" y="38" width="12" height="24" rx="1" className="fill-primary-blue/15" />
          <line x1="31" y1="38" x2="31" y2="62" />
          
          {/* Heavy Nut on Right */}
          <rect x="63" y="38" width="12" height="24" rx="1" className="fill-primary-blue/15" />
          <line x1="69" y1="38" x2="69" y2="62" />
        </svg>
      );
    case 'nuts':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Hex Nut Front Angle */}
          <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" className="fill-primary-blue/10" />
          
          {/* Inner circle for thread */}
          <circle cx="50" cy="50" r="22" className="fill-white" />
          <circle cx="50" cy="50" r="18" strokeDasharray="3 2" />
          
          {/* Vertical faces lines */}
          <line x1="50" y1="15" x2="50" y2="85" strokeOpacity="0.5" />
          <line x1="20" y1="32.5" x2="20" y2="67.5" strokeOpacity="0.3" />
          <line x1="80" y1="32.5" x2="80" y2="67.5" strokeOpacity="0.3" />
          
          {/* Internal thread ridges */}
          <path d="M36,40 L38,44 M35,46 L38,50 M36,53 L39,57 M39,60 L42,63" />
          <path d="M64,40 L62,44 M65,46 L62,50 M64,53 L61,57 M61,60 L58,63" />
        </svg>
      );
    case 'socket-products':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Cylinder socket cap head */}
          <rect x="15" y="36" width="22" height="28" rx="2" className="fill-primary-blue/10" />
          {/* Knurling on cap */}
          <line x1="20" y1="36" x2="20" y2="64" strokeOpacity="0.4" />
          <line x1="25" y1="36" x2="25" y2="64" strokeOpacity="0.4" />
          <line x1="30" y1="36" x2="30" y2="64" strokeOpacity="0.4" />
          <line x1="35" y1="36" x2="35" y2="64" strokeOpacity="0.4" />
          
          {/* Inner hex socket representation */}
          <polygon points="21,46 29,46 33,50 29,54 21,54 17,50" fill="currentColor" opacity="0.2" />
          
          {/* Bolt Shaft */}
          <rect x="37" y="44" width="48" height="12" rx="1" className="fill-white" />
          {/* Threads */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={45 + i * 4} y1="44" x2={42 + i * 4} y2="56" />
          ))}
        </svg>
      );
    case 'washers':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Stylized plane washer at an angle with concentric rings */}
          <ellipse cx="50" cy="50" rx="35" ry="22" className="fill-primary-blue/10" />
          <ellipse cx="50" cy="50" rx="16" ry="10" className="fill-white" />
          <ellipse cx="50" cy="50" rx="13" ry="8" strokeDasharray="2 1" />
          
          {/* Shading/thickness rim to give 3D depth */}
          <path d="M15,50 C15,62 30,72 50,72 C70,72 85,62 85,50 M15,52 C15,64 30,74 50,74 C70,74 85,64 85,52" strokeOpacity="0.7" />
        </svg>
      );
    case 'stainless-steel':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Highly polished SS screw with metallic reflections */}
          <polygon points="20,25 45,15 65,30 50,60 20,45" className="fill-slate-100" />
          <line x1="20" y1="25" x2="50" y2="60" />
          <line x1="45" y1="15" x2="20" y2="45" strokeOpacity="0.5" />
          
          {/* Sparkle star to denote "stainless steel polish" */}
          <path d="M75,25 L77,32 L84,34 L77,36 L75,43 L73,36 L66,34 L73,32 Z" fill="#F28C28" stroke="none" />
          
          {/* Fastener body extending */}
          <rect x="42" y="46" width="36" height="10" transform="rotate(30, 42, 46)" className="fill-white" />
          {/* Thread lines */}
          <line x1="52" y1="51" x2="48" y2="58" />
          <line x1="57" y1="54" x2="53" y2="61" />
          <line x1="62" y1="57" x2="58" y2="64" />
          <line x1="67" y1="60" x2="63" y2="67" />
        </svg>
      );
    case 'anchor-fasteners':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Sleeve anchor bolt */}
          {/* Heavy stud head */}
          <polygon points="10,42 10,58 22,58 22,42" className="fill-primary-blue/20" />
          {/* Sleeve body */}
          <rect x="22" y="44" width="45" height="12" className="fill-white" />
          
          {/* Concrete compression wedge sleeves */}
          <path d="M45,44 L50,40 L52,44" />
          <path d="M45,56 L50,60 L52,56" />
          <path d="M30,44 L32,40 M30,56 L32,60" />
          
          {/* Expansion sleeve split line */}
          <line x1="22" y1="50" x2="67" y2="50" strokeDasharray="5 3" />
          
          {/* Conical nut expander at end */}
          <polygon points="67,44 79,41 79,59 67,56" className="fill-primary-blue/30" />
        </svg>
      );
    case 'nut-inserts':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Hollow cylinder rib insert */}
          <ellipse cx="50" cy="25" rx="20" ry="8" className="fill-primary-blue/15" />
          <ellipse cx="50" cy="25" rx="12" ry="5" className="fill-white" />
          
          {/* Cylinder barrel */}
          <path d="M30,25 L30,70 C30,76 39,80 50,80 C61,80 70,76 70,70 L70,25" className="fill-white" />
          
          {/* Ridged/knurled texture on insert barrel */}
          <line x1="38" y1="34" x2="38" y2="55" strokeOpacity="0.6" />
          <line x1="44" y1="35" x2="44" y2="58" strokeOpacity="0.6" />
          <line x1="50" y1="35" x2="50" y2="59" strokeOpacity="0.6" />
          <line x1="56" y1="35" x2="56" y2="58" strokeOpacity="0.6" />
          <line x1="62" y1="34" x2="62" y2="55" strokeOpacity="0.6" />
          
          {/* Thread markings at bottom */}
          <path d="M42,68 C42,68 47,70 50,70 C53,70 58,68 58,68" strokeDasharray="2 1" />
          <path d="M42,72 C42,72 47,74 50,74 C53,74 58,72 58,72" strokeDasharray="2 1" />
        </svg>
      );
    case 'self-clinching':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Self-clinching standoff spacer */}
          {/* Clinching knurled rib collar */}
          <polygon points="30,30 70,30 75,38 70,42 30,42 25,38" className="fill-primary-blue/25" />
          {/* Serration teeth representation */}
          <line x1="33" y1="30" x2="31" y2="42" />
          <line x1="40" y1="30" x2="38" y2="42" />
          <line x1="47" y1="30" x2="45" y2="42" />
          <line x1="54" y1="30" x2="52" y2="42" />
          <line x1="61" y1="30" x2="59" y2="42" />
          <line x1="68" y1="30" x2="66" y2="42" />
          
          {/* Hollow spacer barrel */}
          <rect x="34" y="42" width="32" height="38" rx="1" className="fill-white" />
          
          {/* Internal bore lines */}
          <line x1="42" y1="42" x2="42" y2="80" strokeDasharray="3 2" />
          <line x1="58" y1="42" x2="58" y2="80" strokeDasharray="3 2" />
        </svg>
      );
    case 'other-fasteners':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Helicoil helical wire thread spring */}
          <path d="M30,25 C30,25 35,21 50,21 C65,21 70,25 70,25 M30,33 C30,33 35,29 50,29 C65,29 70,33 70,33 M30,41 C30,41 35,37 50,37 C65,37 70,41 70,41 M30,49 C30,49 35,45 50,45 C65,45 70,49 70,49 M30,57 C30,57 35,53 50,53 C65,53 70,57 70,57 M30,65 C30,65 35,61 50,61 C65,61 70,65 70,65 M30,73 C30,73 35,69 50,69 C65,69 70,73 70,73" strokeWidth={strokeWidth * 1.5} strokeLinecap="round" className="stroke-accent-orange" />
          {/* Wire guide tail insert */}
          <path d="M50,73 L42,73 L37,65" strokeWidth={strokeWidth * 1.5} strokeLinecap="round" className="stroke-accent-orange" />
        </svg>
      );
    case 'industrial-hardware':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Large lifting eye bolt */}
          {/* Circular lifting ring */}
          <circle cx="50" cy="35" r="22" className="fill-primary-blue/10" strokeWidth={strokeWidth * 1.5} />
          <circle cx="50" cy="35" r="12" className="fill-white" />
          
          {/* Collar flange */}
          <ellipse cx="50" cy="57" rx="16" ry="5" className="fill-primary-blue/20" />
          
          {/* Threaded shaft */}
          <rect x="44" y="62" width="12" height="24" rx="1" className="fill-white" />
          {/* Thread lines */}
          <line x1="44" y1="67" x2="56" y2="65" />
          <line x1="44" y1="72" x2="56" y2="70" />
          <line x1="44" y1="77" x2="56" y2="75" />
          <line x1="44" y1="82" x2="56" y2="80" />
        </svg>
      );
    case 'tools-bearings':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          {/* Rolling Ball Bearing */}
          <circle cx="50" cy="50" r="42" className="fill-primary-blue/5" strokeWidth={strokeWidth * 1.2} />
          <circle cx="50" cy="50" r="28" className="fill-white" strokeWidth={strokeWidth * 1.2} />
          
          {/* Ball rolling elements */}
          <circle cx="50" cy="15" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="75" cy="25" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="85" cy="50" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="75" cy="75" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="50" cy="85" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="25" cy="75" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="15" cy="50" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="25" cy="25" r="5" fill="currentColor" opacity="0.8" />
          
          {/* Center bore */}
          <circle cx="50" cy="50" r="16" strokeDasharray="3 1" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth={strokeWidth}>
          <circle cx="50" cy="50" r="30" />
          <path d="M30,50 L70,50 M50,30 L50,70" />
        </svg>
      );
  }
}
