import Frame3 from "../../imports/Frame31245-1/Frame31245-166-1997";

// Natural bounds of the 3-card composition from absolute positions
const FRAME_W = 726;
const FRAME_H = 436;

export function LaptopMockup() {
  return (
    <div
      className="select-none pointer-events-none w-full"
      style={{ height: FRAME_H, position: "relative" }}
    >
      <div style={{ position: "absolute", inset: 0, width: FRAME_W, height: FRAME_H }}>
        <Frame3 />
      </div>
    </div>
  );
}
