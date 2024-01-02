//THIS BUTTON IS CREATED IF YOU R A VISITOR YOU CAN PURCHASE EVENT TICKET BUT IF U R A ORGANIZER BUTTON WILL BE NOT SHOWN
"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  // IEVENT MEANS INTERFACE EVENT
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          {/* IF USER IS SIGNOUT RENDER THIS TO RELOGIN TO PURCHASE TICKET */}
          <SignedOut>
            <Button asChild className="button rounded-full" size="lg">
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>
          {/* IF USER IS SIGNIN RENDER THIS */}
          <SignedIn>
            {/* NEW CHECKOUT COMPONENT IS IMPORTED */}
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
