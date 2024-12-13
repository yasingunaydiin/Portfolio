import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import blackboardPage from '@/assets/images/actionslist-landing-page.png';
import illumicheckPage from '@/assets/images/illumicheck-landing-page.png';
import islanacakmiyimPage from '@/assets/images/islanacak-miyim-landing-page.png';
import metaversenextPage from '@/assets/images/metaverse-next-landing-page.png';
import progressiondexPage from '@/assets/images/progressiondex-landing-page.png';
import regexorcistPage from '@/assets/images/regexorcist-landing-page.png';
import yukilanlariPage from '@/assets/images/yukilanlari-landing-page.png';
import Image from 'next/image';

const portfolioProjects = [
  {
    year: '2024',
    title: 'Yükilanları.net',
    smallTitle: 'Freightadverts.net',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
      {
        text: 'TypeScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
      {
        text: 'MongoDB',
        color:
          'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20',
      },
      {
        text: 'WorkOS',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
    ],
    descriptions: [
      {
        descriptionText:
          'Built a full stack platform for truckers and companies with React, Next.js, and Tailwind CSS for responsive design.',
      },
      {
        descriptionText: 'Uses MongoDB with Mongoose for data management.',
      },
      {
        descriptionText: 'Integrates WorkOS for authentication.',
      },
    ],
    link: 'https://www.yukilanlari.net',
    image: yukilanlariPage,
  },
  {
    year: '2024',
    title: 'Islanacak mıyım?',
    smallTitle: 'Am i gonna get wet?',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
      {
        text: 'TypeScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
      {
        text: 'Leaflet',
        color:
          'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20',
      },
    ],
    descriptions: [
      {
        descriptionText:
          'Built a rain and cloud radar with React, Next.js, and Tailwind CSS for responsive design.',
      },
      {
        descriptionText:
          'Leaflet for mapping and Fetch API for data retrieval of the cloud and rain data.',
      },
    ],
    link: 'https://islanacakmiyim.vercel.app',
    image: islanacakmiyimPage,
  },
  {
    year: '2024',
    title: 'Blackboard',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
      {
        text: 'TypeScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
      {
        text: 'Prisma',
        color:
          'inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10',
      },
    ],
    descriptions: [
      {
        descriptionText:
          'Built a to-do list with Next.js, Shadcn, and Prisma for a seamless CRUD experience.',
      },
      {
        descriptionText: 'Validates data using Zod and manages state with SWR.',
      },
      {
        descriptionText:
          'Stores tasks in a MongoDB database and local storage.',
      },
    ],
    link: 'https://blackboardapp.vercel.app',
    image: blackboardPage,
  },
  {
    year: '2024',
    title: 'Progression Dex',
    badges: [
      {
        text: 'HTML',
        color:
          'inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10',
      },
      {
        text: 'CSS',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'JavaScript',
        color:
          'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20',
      },
    ],
    descriptions: [
      { descriptionText: 'Built a seamless progression tracker.' },
      { descriptionText: 'Designed for easy navigation.' },
      { descriptionText: 'Focused on feature enhancements.' },
    ],
    link: 'https://www.progressiondex.com',
    image: progressiondexPage,
  },
  {
    year: '2024',
    title: 'Metaverse Next',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
    ],
    descriptions: [
      { descriptionText: 'Built a responsive landing page.' },
      { descriptionText: 'Designed with the user in mind.' },
      { descriptionText: 'Focused on features.' },
    ],
    link: 'https://metaverse-next-landing-page.vercel.app/',
    image: metaversenextPage,
  },
  {
    year: '2024',
    title: 'Illumicheck',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
    ],
    descriptions: [
      { descriptionText: 'Developed to provide spelling correction.' },
      { descriptionText: 'Designed for easy use.' },
      { descriptionText: 'With millions of words in the database.' },
    ],
    link: 'https://illumicheck-landing-page.vercel.app/',
    image: illumicheckPage,
  },
  {
    year: '2024',
    title: 'Regexorcist',
    badges: [
      {
        text: 'React',
        color:
          'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10',
      },
      {
        text: 'Next.js',
        color:
          'inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-900/10',
      },
    ],
    descriptions: [
      { descriptionText: 'Developed to remove regex from all file types.' },
      { descriptionText: 'Designed for easy navigation.' },
      { descriptionText: 'More features coming.' },
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
                  <div className='pointer-events-none items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.year}</span>
                    {project.badges.map((badge) => (
                      <span className={badge.color}>{badge.text}</span>
                    ))}
                  </div>
                  <h3 className='text-2xl mt-2 md:text-4xl md:mt-5'>
                    {project.title}
                  </h3>
                  <h3 className='text-xs md:text-sm'>{project.smallTitle}</h3>
                  <hr className='border-t-2 border-black/5 mt-4' />
                  <ul className='flex flex-col gap-2 mt-4 md:mt-5'>
                    {project.descriptions.map((descriptions) => (
                      <li className='flex gap-2 text-sm md:text-base'>
                        <CheckCircleIcon className='size-5 md:size-6 shrink-0' />
                        <span>{descriptions.descriptionText}</span>
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
                    className={`mt-5 mx-auto lg:mt-0 lg:w-3/5 lg:h-auto lg:absolute md:mb-5 mb-5 md:w-3/5 md:h-auto'
                        : 'lg:h-full lg:w-auto'
                    }`}
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
