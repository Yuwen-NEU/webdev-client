export default function TailwindSpacing() {
  return (
    <div id="wd-tailwind-spacing">
      <h2 className="text-3xl">Margin</h2>
      <div className="bg-blue-200 mb-4 p-4">
        This div has a bottom margin of 4.
      </div>
      <div className="bg-blue-200 ms-4 me-8 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>
      <h2 className="text-3xl mt-8">Padding</h2>
      <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
        This div has starting padding of 2, top padding of 4, and bottom padding of 8.
      </div>
      <div className="bg-green-200 p-6">This div has padding all around of 6.</div>
      <div className="bg-orange-200 mt-4 ms-12 pe-16 py-2">
        My box: top margin 4, start margin 12, end padding 16, vertical padding 2.
      </div>
      <div id="wd-ai-spacing" className="bg-purple-200 mt-6 ps-8 pb-4">
        Sample box: top margin 6, start padding 8, bottom padding 4.
      </div>
    </div>
  );
}
