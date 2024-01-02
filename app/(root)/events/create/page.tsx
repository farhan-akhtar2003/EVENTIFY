import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string; // EVERY EVENTS IS GENERATED UNIQUELY FOR EVERY USER
  // DO NOT FORGOT TO ADD USERID TO METADATA FOR SESSION CLAIMS FOR CLERK ACCOUNT
  //console.log(userId);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        {/* EVENTFORM IS A CLIENT BASE COMPONENT WHICH WE HAVE TO RENDERED AT SERVER SIDE SO MAKE EVENTFORM IN COMPONENTS FOLDER WITH FULL USE CLIENT COMMAND */}
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
