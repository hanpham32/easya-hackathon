"use client"
import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { moveonsui_fundamental_steps } from "@/workshops/moveonsui_fundamental_concepts/moveonsui_fundamental_steps";

export default function MoveOnSui() {
  const [selectedStep, setSelectedStep] = React.useState("1");

  return (
    <ScrollArea className="h-screen w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Steps</h4>
        {moveonsui_fundamental_steps.map((step) => (
          <React.Fragment key={step}>
            <div className="text-sm">{step}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
