export default function Preview() {
  return (
    <ul className="flex flex-col gap-4 lg:gap-2">
      <li className="!w-full hover:!blur-[0px] relative">
        <div className="group w-fit">
          <a href="https://www.humanmend.com/" className="flex flex-col group">
            <span className="lg:group-hover:hidden">HumanMend - 2025</span>
            <span className="text-grey lg:hidden lg:group-hover:inline">
              <span className="lg:group-hover:blur-[1px]">Designed by </span>
              <span className="lg:text-black">Studio Sugarcoat</span>
            </span>
          </a>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[600px] hidden lg:group-hover:inline absolute top-0 left-[25rem]"
            controls={false}
          >
            <source src="/humanmendPreview.mp4" type="video/mp4" />
          </video>
        </div>
      </li>
      <li className="!w-full hover:!blur-[0px] lg:flex relative">
        <div className="group w-fit">
          <a href="https://lilyballif.com/" className="flex flex-col group">
            <span className="lg:group-hover:hidden">Lily Ballif - 2024</span>
            <span className="text-grey lg:hidden lg:group-hover:inline">
              <span className="lg:group-hover:blur-[1px]">Designed by </span>
              <span className="lg:text-black">New Apology</span>
            </span>
          </a>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[600px] hidden lg:group-hover:inline absolute top-0 left-[25rem]"
            controls={false}
          >
            <source src="/lilyPreview.mp4" type="video/mp4" />
          </video>
        </div>
      </li>
    </ul>
  );
}
