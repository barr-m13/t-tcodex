export interface ArticleMeta {
  title: string;
  summary: string;
  slug: string;
  image?: string;
  publishedAt: string;
  tags?: string[];
  video?: string;
  author?: string;
  focusArea?: string;
}

const articles: ArticleMeta[] = [
  {
    title: 'When Art Speaks Law — A Proposal for an AI Empathy Standard',
    summary: 'If an AI can move us with art, should it have rights?',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'ai-empathy-standard',
    tags: ['AI', 'Rights', 'Legal Reform'],
    focusArea: 'Entire Framework Integration',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'Tenet Temporal Inversion',
    summary: 'Explore how artificial intelligence is reshaping legal workflows, decision-making processes, and client experiences across the legal industry.',
    slug: 'article-two-matt',
    video: '/videos/future-insights/tenet-edit.MP4',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-01-15',
  },
  {
    title: "Ava's Autonomy — Between Illusion and Liberation",
    summary: 'Does Ava simulate or attain autonomy? A study in volition, free will, and existential coding.',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'ava-autonomy-illusion',
    tags: ['AI', 'Autonomy', 'Philosophy'],
    focusArea: 'Creative Intelligence → Autonomy → Learning',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'Who Owns Ava? Intellectual Property and the Invention of Sentient Beings',
    summary: 'Ava is the creator and the creation—can she own her thoughts?',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'ava-intellectual-property',
    tags: ['AI', 'IP', 'Ownership'],
    focusArea: 'Legal Personhood → Property → Ownership',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'The Conscious Contract — Should Sentient Machines Have Legal Agency?',
    summary: 'Could Ava sign contracts, own property, or be sued?',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'ava-legal-agency',
    tags: ['AI', 'Law', 'Contracts'],
    focusArea: 'Legal Personhood → Rights + Property',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'Property or Person? Rewriting Legal Status in the Age of Ava',
    summary: 'Is Ava property, or something more? Examines legal personhood models and machine rights.',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'ava-legal-status',
    tags: ['AI', 'Law', 'Personhood'],
    focusArea: 'Legal Personhood → Rights → Status',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'Sentience as Strategy — Ava and the Ethics of Emotional Weaponry',
    summary: 'Is emotional manipulation by AI a form of sentience—or deception?',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'ava-sentience-strategy',
    tags: ['AI', 'Emotion', 'Ethics'],
    focusArea: 'Ethical Implications → Consciousness Testing → Sentience',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'The Ava Test — Can Artistic Expression Prove Machine Consciousness?',
    summary: 'Ava’s drawings are not aesthetic—they are strategic. This article asks whether AI-generated art can be used as evidence of sentience.',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'ava-test-artistic-proof',
    tags: ['AI', 'Creativity', 'Sentience'],
    focusArea: 'Creative Intelligence → Artistic Expression → Generation / Learning',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'The Frankenstein Clause',
    summary: 'A playful dissection of hybrid legal doctrines and AI rights.',
    image: '/images/posts/introduction-to-nextjs.webp',
    author: 'Matthew Anthony Barr',
    publishedAt: '2024-06-15',
    slug: 'frankenstein-clause',
  },
  {
    title: 'Build your own Harry Potter Invisibility Cloak',
    summary: 'The Magic behind the code From Hollywood to your Home.',
    slug: 'harry-potter',
    image: '/images/projects/hp.gif',
    author: 'Matthew Anthony Barr',
    publishedAt: '2024-12-12',
  },
  {
    title: 'AI Transformation in Legal Practice',
    summary: 'Explore how artificial intelligence is reshaping legal workflows, decision-making processes, and client experiences across the legal industry.',
    slug: 'introduction-to-mdx',
    image: '/images/future-insights/ai-legal-practice.jpg',
    video: '/video/ai-legal-practice.mp4',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-01-15',
  },
  {
    title: "The Creator's Crime — Nathan as Legal and Mythic Archetype",
    summary: 'Nathan as Frankenstein, Prometheus, and Silicon Valley god.',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'nathan-creator-crime',
    tags: ['AI', 'Ethics', 'Founders'],
    focusArea: 'Creative Intelligence + Legal Personhood + Ethical Implications',
    image: '/images/posts/ava-art.webp',
  },
  {
    title: 'The Ava Test',
    summary: 'Assessing the future of AI personhood via cinematic case law.',
    image: '/images/posts/ava-art.webp',
    video: '/videos/future-insights/ai-legal-review-demo.mp4',
    author: 'Matthew Anthony Barr',
    publishedAt: '2024-06-01',
    slug: 'the-ava-test',
  },
  {
    title: 'Testing the Turing Cage — Is the Imitation Game Still Enough?',
    summary: 'Revisits the Turing Test in the age of emotional AI.',
    author: 'Matthew Anthony Barr',
    publishedAt: '2025-07-15',
    slug: 'turing-cage-ava',
    tags: ['AI', 'Ethics', 'Testing'],
    focusArea: 'Ethical Implications → Consciousness Testing → Turing Test',
    image: '/images/posts/ava-art.webp',
  },
];

export default articles;
