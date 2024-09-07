import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14 lg:py-24">
      <div className="container">
        <div className="py-8 px-10 rounded-3xl outline-black/25 outline outline-2 text-center ">
    <h2 className="text-2xl font-semibold">Let's work together to work on something great.</h2>
    <p className="text-sm mt-2">Let's connect and discuss.</p>
    <button className="inline-flex items-center gap-2 border border-black/50 px-6 h-10 rounded-xl mt-8">
      <span className="font-semibold">Contact Me</span>
      <ArrowUpRightIcon className="size-4"/>
      </button>
      </div>
      </div>
  </div>
  )
};
