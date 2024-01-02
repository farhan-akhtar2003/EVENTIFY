// THIS PAGE IS CREATED IF USER WANT TO UPDATE THE CREATED EVENTS SAME AS EVENTFORM.TSX COMPONENTS
import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string
  }
}

// TAKING OUT EVENTID FROM QUERY STRING
const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();
// CHECKING USERID LOGGED IN=== EVENT ORGANIZER ID
  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm //"@/components/shared/EventForm"
          type="Update"
          event={event}
          eventId={event._id}
          userId={userId}//PASSING THESE ALL PARAMETERS TO EVENT FORM
        />
      </div>
    </>
  );
}

export default UpdateEvent