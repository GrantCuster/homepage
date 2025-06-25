import { Portrait } from "../shared/Portrait";

export default function Page(props: any) {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-4">
      <div className="flex flex-col items-center w-full gap-4 max-w-[800px]">
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8 px-4 mt-4">
          <div className="col-span-2 md:col-span-1 yellow">Grant Custer</div>
          <div className="col-span-2  md:col-span-1 purple">
            Designer &amp; Engineer
          </div>
          <div className="col-span-2 -mt-[5px] h-[48px] md:col-span-1 md:justify-center flex">
            <svg
              width="48"
              height="48"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="-2" y="5" width="10" height="1" fill="#BDAE93" />
              <rect x="-2" y="7" width="10" height="1" fill="#BDAE93" />
              <rect x="7" y="5" width="1" height="7" fill="#BDAE93" />
              <rect x="16" y="5" width="6" height="1" fill="#BDAE93" />
              <rect x="16" y="7" width="6" height="1" fill="#BDAE93" />
              <rect x="16" y="5" width="1" height="8" fill="#BDAE93" />
              <rect x="13" y="5" width="1" height="4" fill="#BDAE93" />
              <rect x="10" y="5" width="4" height="1" fill="#BDAE93" />
              <rect x="10" y="5" width="1" height="5" fill="#BDAE93" />
              <rect x="11" y="9" width="2" height="1" fill="#BDAE93" />
              <rect x="10" y="7" width="4" height="1" fill="#BDAE93" />
              <rect x="8" y="4" width="2" height="1" fill="#BDAE93" />
              <rect x="14" y="4" width="2" height="1" fill="#BDAE93" />
              <rect x="6" y="10" width="1" height="1" fill="#BDAE93" />
              <rect x="3" y="9" width="3" height="1" fill="#BDAE93" />
              <rect x="2" y="10" width="1" height="3" fill="#BDAE93" />
              <rect x="4" y="11" width="1" height="1" fill="#BDAE93" />
              <rect x="4" y="14" width="11" height="1" fill="#BDAE93" />
              <rect x="15" y="13" width="1" height="1" fill="#BDAE93" />
              <rect x="3" y="13" width="1" height="1" fill="#BDAE93" />
            </svg>
          </div>
          <div className="col-span-2 md:col-span-1 aqua">
            Slowly going out on a limb
          </div>
        </div>
        <div className="w-full mt-4 px-4 uppercase orange">About</div>
        <div className="px-4">
          <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
            <div className="col-span-4 md:col-span-2">
              <div className="mb-[1lh]">
                I&#x27;m a designer and engineer focused on new and alternative
                interfaces. I specialize in prototyping and I love to work
                iteratively through a design in code.
              </div>
              <div className="mb-[1lh]">
                Finding the right primitives for exploring a system is one of my
                favorite challenges.
              </div>
              <div className="">
                I&#x27;ve built interfaces focused on spatial thinking, AI
                capabilities, and data visualization. I like to work on small,
                collaborative teams.
              </div>
            </div>
            <div className="col-span-4 md:col-span-2 md:col-start-3 h-full flex justify-center items-center mt-4 gap-x-8 md:flex-col md:mt-0">
              <Portrait />
            </div>
          </div>
        </div>
        <div className="w-full mt-8 uppercase px-4 orange">Work</div>
        <div className="flex flex-col gap-[2px]">
          <div className="bg-hard-black flex flex-col gap-y-4 py-4 px-4">
            <div className="w-full ">
              <a
                className=" underline green"
                target="_blank"
                href="https://labs.google"
              >
                Google Creative Lab
              </a>
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4 md:col-span-2">
                Prototyping interfaces for interacting with large language
                models. Going beyond chat. Focused on increasing our
                understanding and control.
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="purple">Creative technologist</div>
                <div className="blue">2023-Present</div>
              </div>
            </div>
          </div>
          <div className="bg-hard-black flex flex-col gap-y-4 py-4 px-4">
            <div className="w-full  ">
              <a
                className=" underline green"
                target="_blank"
                href="https://constraint.systems"
              >
                Constraint Systems
              </a>
            </div>
            <div className="py-2">
              <img src="/images/constraint-systems.png" />
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4 md:col-span-2">
                Experimental web-based creative tools. Featuring image
                distorters, freeform text editors, and weird website builders.
                Targeted experiments in alternative interfaces.
              </div>
              <div className="col-span-4  md:col-span-2">
                <div className="purple">Creator, designer &amp; engineer</div>
                <div className="blue">Side project: 2019-Present</div>
              </div>
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4 md:col-span-1 gray uppercase">
                Featured
              </div>
              <div className="relative block col-span-1 md:col-start-2">
                <img
                  className="absolute object-contain object-center w-full h-full"
                  src="/images/flow.webp"
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <a
                  className="underline aqua"
                  target="_blank"
                  href="https://flow.constraint.systems"
                >
                  Flow
                </a>
                <div className="">
                  An experimental image editor that lets you set and direct
                  pixel-flows.
                </div>
              </div>
              <div className="relative block col-span-1 md:col-start-2">
                <img
                  className="absolute object-contain object-center w-full h-full"
                  src="/images/type.webp"
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <div>
                  <a
                    className="underline aqua"
                    target="_blank"
                    href="https://type.constraint.systems"
                  >
                    Type
                  </a>
                </div>
                <div>
                  A directed typing experiment. You choose the direction the
                  letters should flow.
                </div>
              </div>
              <div className="relative block md:col-start-2">
                <img
                  className="absolute object-contain object-center w-full h-full"
                  src="/images/grid.webp"
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <div>
                  <a
                    className="underline aqua"
                    target="_blank"
                    href="https://grid.constraint.systems"
                  >
                    Grid
                  </a>
                </div>
                <div>
                  Adjust the grid size and text direction to create weird and
                  expressive layouts.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-hard-black flex flex-col gap-y-4 py-4 px-4">
            <div className="w-full  ">
              <a
                className=" underline green"
                target="_blank"
                href="https://daylightcomputer.com"
              >
                Daylight
              </a>
            </div>
            <div className="py-2">
              <img src="/images/daylight.png" />
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8 mb-2">
              <div className="col-span-4 md:col-span-2">
                Prototyping a new flutter-based tablet operating system focused
                on deep work. Trying to rethink things from the ground up.
              </div>
              <div className="col-span-4  md:col-span-2">
                <div className="purple">Software engineer</div>
                <div className="blue">2023</div>
              </div>
            </div>
          </div>
          <div className="bg-hard-black flex flex-col gap-y-4 py-4 px-4">
            <div className="w-full">
              <a
                className=" underline green"
                target="_blank"
                href="https://sprout.place"
              >
                Sprout
              </a>
            </div>
            <div className="py-2">
              <img src="/images/sprout.png" />
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4 md:col-span-2">
                Virtual spaces where you can meet, collaborate and play. I led
                engineering on features like drawing and screenshare, and built
                prototypes for experimental features like card stacking.
              </div>
              <div className="col-span-4  md:col-span-2">
                <div className="purple">Engineer</div>
                <div className="blue">2022</div>
              </div>
            </div>
          </div>
          <div className="bg-hard-black flex flex-col gap-y-4 py-4 px-4">
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4">
                <a
                  className=" underline green"
                  target="_blank"
                  href="https://soot.com"
                >
                  Soot
                </a>
              </div>
              <div className="py-2 col-span-4">
                <img src="/images/soot.png" />
              </div>
              <div className="col-span-4 md:col-span-2">
                A better system for image organization. I led front-end
                engineering for the first versions of an experimental interface
                that lets you browse and make connections between thousands of
                images. We used WebGL to build a reactive, intuitive way to
                explore images clustered through machine learning.
              </div>
              <div className="col-span-2">
                <div className="purple">Front-end engineer</div>
                <div className="blue">2021</div>
              </div>
            </div>
          </div>
          <div className="bg-hard-black flex flex-col gap-y-4 py-4 px-4">
            <div className="w-full">
              <a
                className=" underline green"
                target="_blank"
                href="https://blog.fastforwardlabs.com"
              >
                Fast Forward Labs
              </a>
            </div>
            <div className="py-2 col-span-4">
              <img src="/images/ffl.png" />
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4"></div>
              <div className="col-span-4 md:col-span-2">
                A research lab. We built quarterly prototoypes exploring machine
                learning capabilities. I designed and built the front-end for
                experiments exploring capabilities like summarization, sentiment
                analysis, and prediction. I also led design for the branding and
                print reports.
              </div>
              <div className="col-span-4  md:col-span-2">
                <div className="purple">Designer &amp; engineer</div>
                <div className="blue">2014-2021</div>
              </div>
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4 md:col-span-1 gray uppercase">
                Featured
              </div>
              <div className="relative block col-span-1">
                <img
                  className="absolute object-contain object-center w-full h-full"
                  src="/images/active-learner.webp"
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <a
                  className="underline aqua"
                  target="_blank"
                  href="https://activelearner.fastforwardlabs.com"
                >
                  Active Learner
                </a>
                <div className="">
                  An interactive visualization of active learning data labeling
                  and how it affects a model.
                </div>
              </div>
              <div className="relative block md:col-start-2">
                <img
                  className="absolute object-contain object-center w-full h-full"
                  src="/images/turbofan.webp"
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <a
                  className="underline aqua"
                  target="_blank"
                  href="https://turbofan.fastforwardlabs.com"
                >
                  Turbofan Tycoon
                </a>
                <div>
                  A federated learning demonstration in the form of turbofan
                  factory simulation game.
                </div>
              </div>
              <div className="relative block md:col-start-2">
                <img
                  className="absolute object-contain object-center w-full h-full"
                  src="/images/textflix.webp"
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <a
                  className="underline aqua"
                  target="_blank"
                  href="https://textflix.fastforwardlabs.com"
                >
                  Textflix
                </a>
                <div>
                  Sentiment analysis of movie review visualized and compared
                  across different models.
                </div>
              </div>
            </div>
            <div className="h-px bg-black w-full"></div>
            <div className="w-full">
              <a
                className=" underline green"
                target="_blank"
                href="https://betaworks.com"
              >
                betaworks
              </a>
            </div>
            <div className="py-2 col-span-4">
              <img src="/images/betaworks.png" />
            </div>
            <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
              <div className="col-span-4 md:col-span-2">
                Worked on many early-stage prototypes and experiments, including
                Instapaper, Poncho, and Findings.
              </div>
              <div className="col-span-4  md:col-span-2">
                <div className="purple">Designer &amp; engineer</div>
                <div className="blue">2012-2014</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 px-4 uppercase orange">More</div>
        <div className="w-full flex flex-col gap-[2px]">
          <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8 bg-hard-black px-4 py-3">
            <div className="col-span-1">
              <a
                className="underline green"
                target="_blank"
                href="https://feed.grantcuster.com"
              >
                Feed
              </a>
            </div>
            <div className="col-span-3">Work and inspiration in progress</div>
          </div>

          <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8 bg-hard-black px-4 py-3">
            <div className="col-span-1">
              <a
                className="underline green"
                target="_blank"
                href="https://scrawl.grantcuster.com"
              >
                Scrawl
              </a>
            </div>
            <div className="col-span-3">Thoughts, quickly written</div>
          </div>

          <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8 bg-hard-black px-4 py-3">
            <div className="col-span-1 uppercase gray">Social</div>

            <div className="col-span-2 md:col-span-1">
              <a
                className="underline aqua"
                target="_blank"
                href="https://bsky.app/profile/grantcuster.com"
              >
                Bluesky
              </a>
            </div>
            <div className="col-span-2 col-start-2 md:col-start-0 md:col-span-1">
              <a
                className="underline aqua"
                target="_blank"
                href="https://mastodon.social/@grantcuster"
              >
                Mastodon
              </a>
            </div>
            <div className="col-span-2 col-start-2 md:col-start-0 md:col-span-1">
              <a
                className="underline aqua"
                target="_blank"
                href="https://x.com/grantcuster"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>

        <div className="grid w-full items-end grid-cols-4 gap-y-4 gap-x-8 mt-8 px-4 mb-4">
          <div className="col-span-2 md:col-span-1 yellow">Grant Custer</div>
          <div className="col-span-2  md:col-span-1 purple">
            Designer &amp; Engineer
          </div>
          <div className="col-span-2 md:col-span-1 orange">Index</div>
          <div className="col-span-2 md:col-span-1 blue">2025</div>
        </div>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
