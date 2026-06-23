import svgPaths from "./svg-r3obwpv3go";

function SignalHigh() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="signal-high">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="signal-high">
          <path d={svgPaths.p3ac70600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16px]" data-name="wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="wifi">
          <path d={svgPaths.p2faa4180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[12px] relative shrink-0 w-[24px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
        <g id="battery">
          <path d={svgPaths.p25ffa80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <SignalHigh />
      <Wifi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Status Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[18px] px-[24px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            9:41
          </p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] text-white w-full">{`What's your focus?`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(196,194,255,0.75)] w-full">Choose at least one goal to begin.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#8036f8] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">✍️</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#8036f8] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <Check />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(128,54,248,0.13)] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#8036f8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[18px] relative size-full">
          <Frame5 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[16px] text-white">Improve Writing</p>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">🌍</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#252338] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[18px] relative size-full">
          <Frame8 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[16px] text-white">Learn a Language</p>
          <div className="relative shrink-0 size-[24px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" id="Ellipse" r="11.25" stroke="var(--stroke-0, white)" strokeOpacity="0.0705882" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">📚</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#252338] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[18px] relative size-full">
          <Frame10 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[16px] text-white">Study for Exams</p>
          <div className="relative shrink-0 size-[24px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" id="Ellipse" r="11.25" stroke="var(--stroke-0, white)" strokeOpacity="0.0705882" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">⚡</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#252338] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[18px] relative size-full">
          <Frame12 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[16px] text-white">Daily Practice</p>
          <div className="relative shrink-0 size-[24px]" data-name="Ellipse">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" id="Ellipse" r="11.25" stroke="var(--stroke-0, white)" strokeOpacity="0.0705882" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame4 />
      <Frame7 />
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function GhostLink() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[12px] relative shrink-0" data-name="Ghost Link">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(196,194,255,0.75)] whitespace-nowrap">Back</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_8px_12px_rgba(128,54,248,0.45)] flex from-[#8036f8] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0 to-[#282bff] w-[160px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Continue</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[40px] relative shrink-0 w-full" data-name="Frame">
      <GhostLink />
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[40px] px-[24px] relative size-full">
        <Frame2 />
        <Frame3 />
        <Frame13 />
      </div>
    </div>
  );
}

function ContentColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content Column">
      <StatusBar />
      <Frame1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Frame">
      <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[4px] shrink-0 size-[8px]" data-name="Rectangle" />
      <div className="bg-[#8036f8] h-[8px] relative rounded-[4px] shrink-0 w-[24px]" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[4px] shrink-0 size-[8px]" data-name="Rectangle" />
      <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[4px] shrink-0 size-[8px]" data-name="Rectangle" />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[8px] pt-[12px] relative shrink-0 w-full" data-name="Home Indicator">
      <div className="h-[5px] relative rounded-[100px] shrink-0 w-[134px]" data-name="Rectangle" />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[20px] px-[24px] relative size-full">
          <Frame14 />
          <HomeIndicator />
        </div>
      </div>
    </div>
  );
}

function Wizard1() {
  return (
    <div className="absolute bg-[#1e1e1e] content-stretch flex flex-col items-start justify-between left-0 min-h-[844px] overflow-clip rounded-[48px] top-0 w-[390px]" data-name="wizard">
      <div className="absolute bg-gradient-to-b from-[rgba(128,54,248,0.8)] h-[400px] left-0 to-[rgba(40,43,255,0)] top-0 via-[33%] via-[rgba(40,43,255,0.45)] w-[390px]" data-name="Back Gradient" />
      <ContentColumn />
      <Footer />
    </div>
  );
}

export default function Wizard() {
  return (
    <div className="relative size-full" data-name="wizard">
      <Wizard1 />
    </div>
  );
}