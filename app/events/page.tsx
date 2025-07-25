import type { Metadata } from "next"
import PageHeader from "@/components/ui-custom/page-header"
import EventCalendar from "@/components/events/event-calendar"
import NoEventPage from "@/components/events/noevent"

export const metadata: Metadata = {
  title: "Events Calendar | GRCSPL",
  description: "Find business events and meetings in Tamil Nadu",
}

export default function EventsPage() {
  return (
    <div className="container mx-auto">
      {/* <PageHeader title="Events Calendar" description="Stay updated with our events across Tamil Nadu" /> */}
          <NoEventPage />
    </div>
  )
}
