export const projectDetailsData = {
  "middleman": {
    subtitle: "An automated Request for Quote (RFQ) sourcing engine connecting mail streams to React Flow visual timelines and a serverless PocketBase backend.",
    images: Array.from({ length: 16 }, (_, i) => `./project_pictures/middleman/${i + 1}.png`),
    metrics: [
      { value: "Serverless", label: "PocketBase VM Hooks" },
      { value: "React Flow", label: "Interactive Timeline Map" },
      { value: "Mail Sync", label: "Google & MS Webhooks" },
      { value: "<50MB RAM", label: "PocketBase Footprint" }
    ],
    techSpecs: [
      { label: "Core Stack", value: "React (TypeScript) / Vite" },
      { label: "Visual Graph", value: "React Flow (xyflow)" },
      { label: "State & Queries", value: "Tanstack React Query" },
      { label: "Database Engine", value: "PocketBase (SQLite)" },
      { label: "Local Webhook Tunnel", value: "ngrok integration" },
      { label: "Outbox Outbound Mail", value: "SMTP Transport Hook" }
    ],
    architectureTitle: "RFQ Sourcing Pipeline",
    architectureNodes: [
      { title: "Sourcing Hub", desc: "React Flow RFQ center node", icon: "monitor" },
      { title: "Supplier Webhooks", desc: "Gmail / Outlook webhooks ingestion", icon: "shield-check" },
      { title: "PocketBase Hooks", desc: "Serverless JS database event logic", icon: "cpu" },
      { title: "Template Dispatcher", desc: "Bulk personalized email templates", icon: "server" },
      { title: "Smart Attachments", desc: "Cascade delete & archive guards", icon: "download" }
    ],
    narratives: [
      {
        heading: "The Sourcing & RFQ Bottleneck",
        paragraphs: [
          "In manufacturing, supply chain, and procurement, sourcing parts and materials is heavily dependent on email. Sourcing agents send specifications to dozens of vendors, but tracking who replied, who sent drawing revisions, and who is pending NDA quickly becomes a logistical nightmare.",
          "Middleman solves this email overwhelm by building an automated, visually interactive Sourcing Hub. By linking raw email streams to structured database records, sourcing teams can visualize and search all correspondence in one central cockpit."
        ]
      },
      {
        heading: "PocketBase Serverless Architecture",
        paragraphs: [
          "To eliminate high hosting and maintenance costs of heavy backend servers, Middleman leverages a single-binary PocketBase instance running SQLite. PocketBase operates database routing, admin rules, and security collections within less than 50MB of memory.",
          "All system business logic is written using serverless JavaScript event hooks (pb_hooks) triggered on database writes. Google and Microsoft webhook listeners process incoming supplier messages and automatically tie replies to active RFQ projects."
        ]
      },
      {
        heading: "Data Integrity & Cascade Safeguards",
        paragraphs: [
          "When dealing with heavy procurement contracts, data safety is critical. Middleman implements visual deletion guards where destroying an RFQ project requires typing a strict verification phrase, initiating a cascade purge of logs.",
          "Additionally, structural profile guards block users from accidentally deleting active clients or vendors currently assigned to open projects, preserving complete research history and attachment trails."
        ]
      }
    ]
  },
};