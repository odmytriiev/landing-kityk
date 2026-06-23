import svgPaths from "./svg-n4o2gyx4ub";
import { imgGroup, imgGroup1 } from "./svg-hui82";

function Group() {
  return (
    <div className="absolute inset-[43.16%_41.85%_2.57%_2.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.509px_-5.198px] mask-size-[96.446px_108.329px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.5501 98.4601">
        <g id="Group">
          <path d={svgPaths.p25a0d100} fill="var(--fill-0, #FFDE55)" id="Vector" />
          <path d={svgPaths.p3a682680} fill="var(--fill-0, #FFDE55)" id="Vector_2" />
          <path d={svgPaths.p12acfe80} fill="var(--fill-0, #FFDE55)" id="Vector_3" />
          <path d={svgPaths.pf1e2280} fill="var(--fill-0, white)" id="Vector_4" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[40.3%_36.31%_0_0]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.365px_-4.428px] mask-size-[89.22px_96.088px] relative size-full" style={{ maskImage: `url('${imgGroup1}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.1955 74.7569">
        <g id="Group">
          <path d={svgPaths.p301c1300} fill="var(--fill-0, #FFDE55)" id="Vector" />
          <path d={svgPaths.p29b0b030} fill="var(--fill-0, #FFDE55)" id="Vector_2" />
          <path d={svgPaths.p314db8f0} fill="var(--fill-0, #FFDE55)" id="Vector_3" />
          <path d={svgPaths.pb3eb580} fill="var(--fill-0, white)" id="Vector_4" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_0_47.04%_41.08%]" style={{ containerType: "size" }} data-name="Clip path group">
      <div className="absolute flex inset-[2.44%_4.67%_49.71%_43.31%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-20.4314cqw,84.0795cqh)] rotate-[12.43deg] w-[hypot(79.5686cqw,15.9205cqh)]">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <ClipPathGroup />
      <ClipPathGroup1 />
    </div>
  );
}