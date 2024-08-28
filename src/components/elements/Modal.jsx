export default function Modal({ onclick }) {
  return (
    <div
      onClick={onclick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative z-10 w-full p-4 rounded-md shadow-md h-1/2 md:bg-white md:w-4/6 md:h-4/6"
      >
        <iframe
          width="100%"
          height="100%"
          allowFullScreen
          src="https://www.youtube.com/embed/3h0_v1cdUIA"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}
