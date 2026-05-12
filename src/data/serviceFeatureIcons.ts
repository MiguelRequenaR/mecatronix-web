import type { LucideIcon } from "lucide-react"
import {
  Activity,
  AlertTriangle,
  Bolt,
  BookOpen,
  CalendarClock,
  ClipboardList,
  Cpu,
  Factory,
  Fan,
  Gauge,
  GitBranch,
  Hammer,
  Layers,
  Package,
  Phone,
  Search,
  Settings,
  Shield,
  Snowflake,
  Truck,
  Users,
  Wrench,
  Workflow,
  Zap,
} from "lucide-react"

export const serviceFeatureIcons = {
  activity: Activity,
  alertTriangle: AlertTriangle,
  bolt: Bolt,
  bookOpen: BookOpen,
  calendarClock: CalendarClock,
  clipboardList: ClipboardList,
  cpu: Cpu,
  factory: Factory,
  fan: Fan,
  gauge: Gauge,
  gitBranch: GitBranch,
  hammer: Hammer,
  layers: Layers,
  package: Package,
  phone: Phone,
  search: Search,
  settings: Settings,
  shield: Shield,
  snowflake: Snowflake,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  workflow: Workflow,
  zap: Zap,
} as const satisfies Record<string, LucideIcon>

export type ServiceFeatureIconId = keyof typeof serviceFeatureIcons

export function getServiceFeatureIcon(id: ServiceFeatureIconId): LucideIcon {
  return serviceFeatureIcons[id]
}
