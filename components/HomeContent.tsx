import Image from "next/future/image";
import Link from "next/link";

function HomeContent() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-4 ">
      <div className="flex flex-col items-center w-full gap-4 p-4 max-w-[840px]">
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-2 md:col-span-1">Grant Custer</div>
          <div className="col-span-2 font-mono text-sm leading-6 md:col-span-1">
            designer & engineer
          </div>
          <div className="mt-[-10px] col-span-2 md:col-span-1 flex md:justify-center">
            <Image
              className="relative"
              src="/sloth.png"
              width={64}
              height={64}
              alt=""
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            Slowly going out on a limb
          </div>
        </div>
        <div className="w-full mt-4 text-sm font-bold leading-6 uppercase">
          About
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4 md:col-span-2">
            I&apos;m a designer and engineer focused on new and alternative
            interfaces. I specialize in prototyping and I love to work
            iteratively through a design in code.
          </div>
          <div className="col-span-4 md:col-start-1 md:col-span-2">
            Finding the right primitives for exploring a system is one of my
            favorite challenges.
          </div>
          <div className="col-span-4 md:col-span-2 md:col-start-1">
            I&apos;ve built interfaces focused on spatial thinking, machine
            learning models, and data visualization. I like to work on small,
            collaborative teams.
          </div>
          <div className="col-span-4 font-mono text-sm leading-6 md:col-span-2"></div>
        </div>

        <div className="w-full mt-8 text-sm font-bold leading-6 uppercase">
          Work
        </div>

        <div className="h-px bg-black w-full"></div>

        <div className="w-full font-bold leading-6">
          <Link href="https://labs.google">
            <a className="font-bold underline" target="_blank">
              Google Creative Lab
            </a>
          </Link>
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8 ">
          <div className="col-span-4 md:col-span-2">
            Prototyping interfaces for interacting with large language models. Going beyond chat. Focused on increasing our understanding and control.
          </div>
          <div className="col-span-4 font-mono text-sm leading-6 md:col-span-2">
            Creative technologist
            <br />
            2023-Present
          </div>
        </div>

        <div className="h-px bg-black w-full"></div>


        <div className="w-full font-bold leading-6">
          <Link href="https://constraint.systems">
            <a className="font-bold underline" target="_blank">
              Constraint Systems
            </a>
          </Link>
        </div>
        <div className="">
          <Image
            src="/constraint-systems.jpg"
            className="w-fullr"
            width={808}
            height={370}
            alt=""
          />
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4 md:col-span-2">
            Experimental web-based creative tools. Featuring image distorters,
            freeform text editors, and weird website builders. Targeted
            experiments in alternative interfaces.
          </div>
          <div className="col-span-4 font-mono text-sm leading-6 md:col-span-2">
            Creator, designer and engineer
            <br />
            2019-Present
          </div>
        </div>

        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4 md:col-span-1">Featured</div>

          {/* Flow */}
          <div className="relative block">
            <Image
              className="absolute object-contain object-center w-full h-full"
              src="/flow.png"
              width={128}
              height={128}
              alt=""
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Link href="https://flow.constraint.systems">
              <a className="underline" target="_blank">
                Flow
              </a>
            </Link>
            <div className="">
              An experimental image editor that lets you set and direct
              pixel-flows.
            </div>
          </div>

          {/* Type */}
          <div className="relative block col-span-1 md:col-start-2">
            <Image
              className="absolute object-contain object-center w-full h-full"
              src="/type.png"
              width={128}
              height={128}
              alt=""
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div>
              <Link href="https://type.constraint.systems">
                <a className="underline" target="_blank">
                  Type
                </a>
              </Link>
            </div>
            <div>
              A directed typing experiment. You choose the direction the letters
              should flow.
            </div>
          </div>

          {/* Grid */}
          <div className="relative block md:col-start-2">
            <Image
              className="absolute object-contain object-center w-full h-full"
              src="/grid.png"
              width={128}
              height={128}
              alt=""
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <div>
              <Link href="https://grid.constraint.systems">
                <a className="underline" target="_blank">
                  Grid
                </a>
              </Link>
            </div>
            <div>
              Adjust the grid size and text direction to create weird and
              expressive layouts.
            </div>
          </div>
        </div>

        <div className="h-px bg-black w-full"></div>

        <div className="w-full font-bold leading-6">
          <Link href="https://daylightcomputer.com">
            <a className="font-bold underline" target="_blank">
              Daylight
            </a>
          </Link>
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8 mb-2">
          <div className="col-span-4 md:col-span-2">
            Prototyping a new flutter-based tablet operating system focused on deep work. Trying to rethink things from the ground up.
          </div>
          <div className="col-span-4 font-mono text-sm leading-6 md:col-span-2">
            Software engineer
            <br />
            2022-2023
          </div>
        </div>

        <div className="h-px bg-black w-full"></div>

        <div className="w-full">
          <Link href="https://sprout.place">
            <a className="text-lg font-bold underline" target="_blank">
              Sprout
            </a>
          </Link>
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4">
            <Image
              src="/sprout.webp"
              className="w-full"
              width={808}
              height={412}
              alt=""
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            Virtual spaces where you can meet, collaborate and play. I led
            engineering on features like drawing and screenshare, and built
            prototypes for experimental features like card stacking.
          </div>
          <div className="col-span-4 font-mono text-sm leading-6 md:col-span-2">
            Engineer
            <br />
            2022
          </div>
        </div>

        <div className="h-px bg-black w-full"></div>

        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4">
            <Link href="https://soot.com">
              <a className="text-lg font-bold underline" target="_blank">
                Soot
              </a>
            </Link>
          </div>
          <div className="col-span-4">
            <Image
              src="/soot.webp"
              className="w-full"
              width={808}
              height={412}
              alt=""
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            A better system for image organization. I led front-end engineering
            for the first versions of an experimental interface that lets you
            browse and make connections between thousands of images. We used
            WebGL to build a reactive, intuitive way to explore images clustered
            through machine learning.
          </div>
          <div className="col-span-2 font-mono text-sm">
            Front-end engineer
            <br />
            2021
          </div>
        </div>

        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4 md:col-span-1">Featured</div>

          {/* Flow */}
          <div className="relative block">
            <Image
              className="absolute object-contain object-center w-full h-full"
              src="/soot-demo.png"
              width={128}
              height={128}
              alt=""
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Link href="https://collection.dropeverything.net/">
              <a className="underline break-words" target="_blank">
                Drop Everything Collection
              </a>
            </Link>
            <div>A special demo we built for the London Design Biennale.</div>
          </div>
        </div>

        <div className="h-px bg-black w-full"></div>

        <div className="w-full">
          <Link href="https://blog.fastforwardlabs.com">
            <a className="text-lg font-bold underline" target="_blank">
              Fast Forward Labs
            </a>
          </Link>
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4">
            <Image
              src="/fastforwardlabs.webp"
              className="w-full"
              width={808}
              height={412}
              alt=""
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            A research lab. We built quarterly prototoypes exploring machine
            learning capabilities. I designed and built the front-end for
            experiments exploring capabilities like summarization, sentiment
            analysis, and prediction. I also led design for the branding and
            print reports.
          </div>
          <div className="col-span-4 font-mono text-sm leading-6 md:col-span-2">
            Designer and engineer
            <br />
            2014-2021
          </div>
        </div>

        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4 md:col-span-1">Featured</div>

          <div className="relative block col-span-1">
            <Image
              className="absolute object-contain object-center w-full h-full"
              src="/active-learner.png"
              width={256}
              height={256}
              alt=""
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Link href="https://activelearner.fastforwardlabs.com">
              <a className="underline" target="_blank">
                Active Learner
              </a>
            </Link>
            <div className="">
              An interactive visualization of active learning data labeling and
              how it affects a model.
            </div>
          </div>

          <div className="relative block md:col-start-2">
            <Image
              className="absolute object-contain object-center w-full h-full"
              src="/turbofan.png"
              width={256}
              height={256}
              alt=""
            />
          </div>

          <div className="col-span-3 md:col-span-2">
            <Link href="https://turbofan.fastforwardlabs.com">
              <a className="underline" target="_blank">
                Turbofan Tycoon
              </a>
            </Link>
            <div>
              A federated learning demonstration in the form of turbofan factory
              simulation game.
            </div>
          </div>

          <div className="relative block md:col-start-2">
            <Image
              className="absolute object-contain object-center w-full h-full"
              src="/textflix.png"
              width={128}
              height={128}
              alt=""
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Link href="https://textflix.fastforwardlabs.com">
              <a className="underline" target="_blank">
                Textflix
              </a>
            </Link>
            <div>
              Sentiment analysis of movie review visualized and compared across
              different models.
            </div>
          </div>
        </div>

        <div className="h-px bg-black w-full"></div>

        <div className="w-full">
          <Link href="https://betaworks.com">
            <a className="text-lg font-bold underline" target="_blank">
              Betaworks
            </a>
          </Link>
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-4 md:col-span-2">
            Worked on many early-stage prototypes and experiments, including
            Instapaper, Poncho, and Findings.
          </div>
          <div className="col-span-4 font-mono text-sm leading-6 md:col-span-2">
            Designer and engineer
            <br />
            2012-2014
          </div>
        </div>

        <div className="h-px bg-black w-full"></div>

        <div className="w-full mt-8 text-sm font-bold leading-6 uppercase">
          More
        </div>
        <div className="grid w-full grid-cols-4 gap-y-4 gap-x-8">
          <div className="col-span-1">
            <Link href="https://twitter.com/grantcuster">
              <a className="underline" target="_blank">
                Twitter
              </a>
            </Link>
          </div>
          <div className="col-span-3">@grantcuster</div>
          <div className="col-span-1 ">
            <Link href="https://feed.grantcuster.com">
              <a className="underline" target="_blank">
                Feed
              </a>
            </Link>{" "}
          </div>
          <div className="col-span-3 ">Work and inspiration in progress</div>
          <div className="col-span-4">
            <Link href="https://writing.grantcuster.com">
              <a className="underline" target="_blank">
                Writing
              </a>
            </Link>
          </div>
          <div className="col-span-1">
            <Link href="https://vis.social/@grantcuster">
              <a className="underline" target="_blank">
                Mastodon
              </a>
            </Link>
          </div>
          <div className="col-span-3">@grantcuster.vis.social</div>
          <div className="col-span-4">
            <Link href="https://observablehq.com/@grantcuster">
              <a className="underline" target="_blank">
                Observable notebooks
              </a>
            </Link>
          </div>
       </div>
        <div className="grid w-full grid-cols-4 mt-12 gap-y-4 gap-x-8">
          <div className="col-span-2 md:col-span-1">Grant Custer</div>
          <div className="col-span-2 md:col-span-1">Homepage</div>
          <div className="col-span-2 md:col-span-1">2023</div>
          <div className="col-span-2 md:col-span-1">World Wide Web</div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
