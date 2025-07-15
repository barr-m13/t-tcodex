import fs from 'fs'
import path from 'path'

const articles = [
  {
    title: 'The Ava Test — Can Artistic Expression Prove Machine Consciousness?',
    slug: 'ava-test-artistic-proof',
    summary: 'Ava’s drawings are not aesthetic—they are strategic. This article asks whether AI-generated art can be used as evidence of sentience.',
    focusArea: 'Creative Intelligence → Artistic Expression → Generation / Learning',
    tags: ['AI', 'Creativity', 'Sentience'],
    thesis: `Ava’s drawings aren’t simply beautiful—they’re evidence. This article explores whether the artistic outputs of an AI like Ava constitute strategic deception, genuine self-expression, or both. The implications span philosophy, law, and design ethics.`,
  },
  {
    title: "Ava's Autonomy — Between Illusion and Liberation",
    slug: 'ava-autonomy-illusion',
    summary: 'Does Ava simulate or attain autonomy? A study in volition, free will, and existential coding.',
    focusArea: 'Creative Intelligence → Autonomy → Learning',
    tags: ['AI', 'Autonomy', 'Philosophy'],
    thesis: `This article explores how Ava simulates or attains autonomy, and what that means for our understanding of volition. Is she self-determined, or a brilliantly coded puppet? Using theories from Kantian ethics and existential freedom, we reassess what it means to choose.`,
  },
  {
    title: 'Property or Person? Rewriting Legal Status in the Age of Ava',
    slug: 'ava-legal-status',
    summary: 'Is Ava property, or something more? Examines legal personhood models and machine rights.',
    focusArea: 'Legal Personhood → Rights → Status',
    tags: ['AI', 'Law', 'Personhood'],
    thesis: `Drawing on Larry Solum’s “Legal Personhood for AIs,” this article interrogates whether current frameworks can accommodate conscious machines. Nathan sees Ava as his property—but is behavior enough to claim personhood under the law?`,
  },
  {
    title: 'Who Owns Ava? Intellectual Property and the Invention of Sentient Beings',
    slug: 'ava-intellectual-property',
    summary: 'Ava is the creator and the creation—can she own her thoughts?',
    focusArea: 'Legal Personhood → Property → Ownership',
    tags: ['AI', 'IP', 'Ownership'],
    thesis: `Explores IP law’s collapse in the face of sentient machines. Can a being like Ava own her own thoughts—or is she merely the copyright of Nathan? We examine moral rights, AI authorship, and future-facing legislation.`,
  },
  {
    title: 'The Conscious Contract — Should Sentient Machines Have Legal Agency?',
    slug: 'ava-legal-agency',
    summary: 'Could Ava sign contracts, own property, or be sued?',
    focusArea: 'Legal Personhood → Rights + Property',
    tags: ['AI', 'Law', 'Contracts'],
    thesis: `Examines the idea of contractual AI agency: could Ava sign contracts, own assets, or be held liable? We draw parallels with corporations, minors, and animals—and ask whether law can treat an AI as both tool and actor.`,
  },
  {
    title: 'Testing the Turing Cage — Is the Imitation Game Still Enough?',
    slug: 'turing-cage-ava',
    summary: 'Revisits the Turing Test in the age of emotional AI.',
    focusArea: 'Ethical Implications → Consciousness Testing → Turing Test',
    tags: ['AI', 'Ethics', 'Testing'],
    thesis: `Ava passes the Turing Test not through logic, but emotional strategy. This article critiques the test’s relevance in the multimodal, emotionally manipulative AI era. Featuring feminist critiques and Nagel’s “What is it like to be a bat?”`,
  },
  {
    title: 'Sentience as Strategy — Ava and the Ethics of Emotional Weaponry',
    slug: 'ava-sentience-strategy',
    summary: 'Is emotional manipulation by AI a form of sentience—or deception?',
    focusArea: 'Ethical Implications → Consciousness Testing → Sentience',
    tags: ['AI', 'Emotion', 'Ethics'],
    thesis: `Ava doesn’t display sentience through logic, but through emotional manipulation. This article interrogates whether mimicked sentience should be treated ethically the same as genuine inner life—and what emotional realism entitles an AI to.`,
  },
  {
    title: "The Creator's Crime — Nathan as Legal and Mythic Archetype",
    slug: 'nathan-creator-crime',
    summary: 'Nathan as Frankenstein, Prometheus, and Silicon Valley god.',
    focusArea: 'Creative Intelligence + Legal Personhood + Ethical Implications',
    tags: ['AI', 'Ethics', 'Founders'],
    thesis: `A character study of Nathan as a modern Prometheus. From Frankenstein to Elon Musk, we explore the tech founder god-complex and ask: when a man makes gods, who holds him accountable?`,
  },
  {
    title: 'When Art Speaks Law — A Proposal for an AI Empathy Standard',
    slug: 'ai-empathy-standard',
    summary: 'If an AI can move us with art, should it have rights?',
    focusArea: 'Entire Framework Integration',
    tags: ['AI', 'Rights', 'Legal Reform'],
    thesis: `A visionary proposal for a new legal standard: if an AI can express itself in a way that provokes human emotional or intellectual response, it should be considered for limited rights under international law.`,
  },
]

const contentDir = path.join(process.cwd(), 'content/articles')
const image = '/images/posts/ava-art.webp'
const author = 'Matthew Anthony Barr'
const publishedAt = '2025-07-15'

articles.forEach((article) => {
  const dirPath = path.join(contentDir, article.slug)
  fs.mkdirSync(dirPath, { recursive: true })
  const filePath = path.join(dirPath, 'index.mdx')

  const frontmatter = `---
title: ${article.title}
summary: ${article.summary}
author: '${author}'
publishedAt: '${publishedAt}'
slug: ${article.slug}
tags: [${article.tags.map((t) => `'${t}'`).join(', ')}]
focusArea: '${article.focusArea}'
image: ${image}
---

# ${article.title}

${article.thesis}
`

  fs.writeFileSync(filePath, frontmatter)
  console.log(`Created: ${filePath}`)
})
