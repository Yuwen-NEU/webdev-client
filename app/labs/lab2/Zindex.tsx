export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
          Square
        </div>
        {/* Declared last, but z-index -1 pushes it behind the yellow box */}
        <div
          className="wd-zindex-send-to-back wd-pos-absolute-10-10 wd-bg-color-green wd-fg-color-white wd-dimension-landscape"
          style={{ top: 40, left: 30 }}
        >
          Behind
        </div>
        <div
          id="wd-ai-zindex"
          className="wd-ai-zindex-top wd-bg-color-gray wd-dimension-square"
        >
          On top
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
