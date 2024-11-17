import illumicheckPage from '@/assets/icons/Illumicheck_mac.png';
import regexorcistPage from '@/assets/icons/RegExorcist_mac.png';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import actionsListPage from '@/assets/images/actionslist-landing-page.png';
import metaverseNextPage from '@/assets/images/metaverse-next-landing-page.png';
import progressionDexPage from '@/assets/images/progressiondex-landing-page.png';
import yukIlanlariPage from '@/assets/images/yukilanlari-landing-page.png';
import Image from 'next/image';

const portfolioProjects = [
  {
    year: '2024',
    title: 'Yükilanları.net',
    results: [
      {
        title:
          'Built with React, Next.js, and Tailwind CSS for responsive design.',
      },
      {
        title: 'Uses MongoDB with Mongoose for data management.',
      },
      {
        title: 'Integrates WorkOS for authentication.',
      },
    ],
    link: 'https://www.yukilanlari.net',
    image: yukIlanlariPage,
  },
  {
    year: '2024',
    title: 'actionsList',
    results: [
      {
        title:
          'Built with Next.js, Shadcn, and Prisma for a seamless CRUD experience.',
      },
      { title: 'Validates data using Zod and manages state with SWR.' },
      { title: 'Stores tasks in a MongoDB database and local storage.' },
    ],
    link: 'https://actionslist.vercel.app',
    image: actionsListPage,
  },
  {
    year: '2024',
    title: 'Progression Dex',
    results: [
      { title: 'Built a seamless progression tracker.' },
      { title: 'Designed for easy navigation.' },
      { title: 'Focused on feature enhancements.' },
    ],
    link: 'https://www.progressiondex.com',
    image: progressionDexPage,
  },
  {
    year: '2024',
    title: 'Metaverse Next',
    results: [
      { title: 'Built a responsive landing page.' },
      { title: 'Designed with the user in mind.' },
      { title: 'Focused on features.' },
    ],
    link: 'https://metaverse-next-landing-page.vercel.app/',
    image: metaverseNextPage,
  },
  {
    year: '2024',
    title: 'Illumicheck',
    results: [
      { title: 'Developed to provide spelling correction.' },
      { title: 'Designed for easy use.' },
      { title: 'With millions of words in the database.' },
    ],
    link: 'https://illumicheck-landing-page.vercel.app/',
    image: illumicheckPage,
  },
  {
    year: '2024',
    title: 'Regexorcist',
    results: [
      { title: 'Developed to remove regex from all file types.' },
      { title: 'Designed for easy navigation.' },
      { title: 'More features coming.' },
    ],
    link: 'https://regexorcist-landing-page.vercel.app/',
    image: regexorcistPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-28'>
      <div id='projectsSection' className='container'>
        <h2 className='text-3xl text-center md:text-5xl mt-6'>
          Featured Projects
        </h2>
        <p className='text-base text-center md:text-2xl mt-3'>
          Projects I have created to satisfy needs.
        </p>
        <div className='mt-5 md:mt-10 flex flex-col gap-14'>
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="rounded-3xl z-0 overflow-hidden bg-white after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/25 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px` /* Stacking cards */,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='text-2xl mt-2 md:text-4xl md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-black/5 mt-4' />
                  <ul className='flex flex-col gap-2 mt-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li className='flex gap-2 text-sm md:text-base'>
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link} // Link is dynamically set from project data
                    target='_blank' // Open in new tab
                    rel='noopener noreferrer' // Security enhancement
                    className='border border-black/15 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-8'
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className='size-4' />
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className={`mt-5 -mb-2 mx-auto md:-mb-5 lg:mt-0 lg:absolute ${
                      index === 4 || index === 5
                        ? 'lg:w-3/5 lg:h-auto lg:relative md:mb-5 mb-5 md:w-3/5 md:h-auto'
                        : 'lg:h-full lg:w-auto'
                    }`} // index === 4, means images 1 through 4,, index === 5 means the icons
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
