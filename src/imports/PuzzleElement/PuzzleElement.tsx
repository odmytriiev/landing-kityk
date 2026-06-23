import svgPaths from "./svg-hw23g5lsw1";

export default function PuzzleElement() {
  return (
    <div className="relative rounded-[3px] size-full" data-name="puzzle_element">
      <div className="absolute inset-[7.63%_7.63%_7.63%_-11.02%]" data-name="Subtract">
        <div className="absolute inset-[-1%_-0.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 102" style={{ transform: 'rotate(45deg)', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.22))' }}>
            <g id="Subtract">
              <mask fill="black" height="102" id="path-1-outside-1_189_2493" maskUnits="userSpaceOnUse" width="124" x="0" y="0">
                <rect fill="white" height="102" width="124" />
                <path d={svgPaths.pecd4b80} />
              </mask>
              <path d={svgPaths.pecd4b80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3746f340} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_189_2493)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}