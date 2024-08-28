export default function SkeletonArrived() {
  return Array(4)
    .fill()
    .map((_, index) => (
      <div key={index} className="relative h-full px-4 group">
        <div
          className="relative overflow-hidden bg-slate-300 rounded-xl"
          style={{ width: 287, height: 386 }}
        ></div>
        <div className="h-3 mt-4 rounded-md w-36 bg-slate-300"></div>
        <div className="w-20 h-2 mt-2 rounded-md bg-slate-300"></div>
        <a href="details" className="absolute inset-0 z-10"></a>
      </div>
    ));
}
