// data/techStack.ts
import {
  Code,
  LayoutGrid,
  DatabaseZap,
  Package,
  DatabaseBackup,
  Container,
  Cloud,
  Layers3,
  TerminalSquare,
  PackageCheck,
  LucideIcon,
  Wallet,
  Paintbrush,
  PaintRoller,
  PaintbrushVertical,
  FileTerminal,
  AppWindow,
  GalleryVertical,
  Server,
} from 'lucide-react';

export interface TechItem {
  name: string;
  category: string;
  Icon: LucideIcon;
  color?: string;
}

// 1. Languages
export const LANGUAGES: TechItem[] = [
  { name: 'TypeScript', category: 'Language', Icon: Code, color: 'text-blue-500' },
  { name: 'JavaScript (ES6+)', category: 'Language', Icon: Code, color: 'text-yellow-500' },
  { name: 'C#', category: 'Language', Icon: Code, color: 'text-purple-600' },
  { name: 'HTML5', category: 'Language', Icon: Layers3, color: 'text-orange-600' },
  { name: 'CSS3', category: 'Language', Icon: Paintbrush, color: 'text-blue-600' },
];

// 2. Frameworks & Libraries
export const FRAMEWORKS_AND_LIBRARIES: TechItem[] = [
  { name: 'React', category: 'Frontend', Icon: LayoutGrid, color: 'text-sky-500' },
  { name: 'Next.js', category: 'Frontend', Icon: Package, color: 'text-black' },
  { name: 'Angular', category: 'Frontend', Icon: GalleryVertical, color: 'text-red-600' },
  { name: 'Node.js', category: 'Backend', Icon: AppWindow, color: 'text-green-600' },
  { name: 'Express.js', category: 'Backend', Icon: TerminalSquare, color: 'text-gray-600 dark:text-gray-400' },
  { name: 'ASP.NET Core', category: 'Backend', Icon: FileTerminal, color: 'text-violet-600' },
  { name: 'Tailwind CSS', category: 'Styling', Icon: PaintRoller, color: 'text-cyan-500' },
  { name: 'Bootstrap', category: 'Styling', Icon: PaintbrushVertical, color: 'text-purple-700' },
  { name: 'Pug', category: 'Templating', Icon: LayoutGrid, color: 'text-amber-700' },
];

// 3. Databases
export const DATABASES: TechItem[] = [
  { name: 'MySQL', category: 'Relational DB', Icon: DatabaseZap, color: 'text-orange-600' },
  { name: 'Microsoft SQL Server', category: 'Structured Query Language', Icon: DatabaseBackup, color: 'text-blue-600' },
  { name: 'MongoDB', category: 'NoSQL DB', Icon: DatabaseZap, color: 'text-emerald-600' },
  { name: 'PostgreSQL', category: 'Relational DB', Icon: DatabaseZap, color: 'text-blue-600' },
];

// 4. Tools & Platforms
export const TOOLS_AND_PLATFORMS: TechItem[] = [
  { name: 'Git & GitHub', category: 'Version Control', Icon: PackageCheck, color: 'text-red-700' },
  { name: 'Docker', category: 'Containerization', Icon: Container, color: 'text-cyan-600' },
  { name: 'AWS CLI / DynamoDB', category: 'Cloud Infrastructure', Icon: Server, color: 'text-amber-500' },
  { name: 'Stripe API', category: 'Payment Gateway', Icon: Wallet, color: 'text-indigo-500' },
  { name: 'Vercel / Hosting', category: 'Deployment', Icon: Cloud, color: 'text-gray-600' },
];