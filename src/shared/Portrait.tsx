"use client";

export function Portrait() {
  const portraits = [
    ["/images/portraits/collapse.png", "collapse"],
    ["/images/portraits/collapse2.png", "collapse"],
    ["/images/portraits/grain.jpg", "grain"],
    ["/images/portraits/image-paint.jpg", "image paint"],
    ["/images/portraits/image-paint2.jpg", "image paint"],
    ["/images/portraits/flow.png", "flow"],
    ["/images/portraits/mask1.jpg", "mask"],
    ["/images/portraits/res.jpg", "res"],
  ];
  const portraitIndex = Math.floor(Math.random() * portraits.length);

  return (
    <>
      <div className="w-1/2 md:w-2/3">
        <img src={portraits[portraitIndex]![0]} />
      </div>
      <div className="">
        <div className="mt-[0.75lh]">
          Portrait made with{" "}
          <a
            href={`https://${portraits[portraitIndex]![1]}.constraint.systems`}
            className="underline aqua"
            target="_blank"
          >
            {portraits[portraitIndex]![1]}
          </a>
        </div>
      </div>
    </>
  );
}
