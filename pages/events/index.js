import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => router.push(`/events/${year}/${month}`)

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;